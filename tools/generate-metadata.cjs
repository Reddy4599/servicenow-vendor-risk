/* Generates static Fluent definitions. No dynamic code runs inside Fluent APIs. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const scope = require('../now.config.json').scope;
const prefix = scope + '_';
const fixture = require('../fixtures/security-questionnaire-v1.json');
const str = (label, extra = {}) => ['StringColumn', { label, maxLength: 160, ...extra }];
const text = label => str(label, { maxLength: 65000 });
const ref = (label, table = 'sys_user', extra = {}) => ['ReferenceColumn', { label, referenceTable: table, ...extra }];
const date = label => ['DateTimeColumn', { label }];
const choice = (label, choices, value) => str(label, { choices, dropdown: 'dropdown_with_none', ...(value ? { default: value } : {}) });
const bool = label => ['BooleanColumn', { label, default: false }];
const num = label => ['DecimalColumn', { label }];
const vendor = () => ref('Vendor', prefix + 'vendor', { mandatory: true });
const baseNumber = () => str('Number', { readOnly: true, default: 'javascript:global.getNextObjNumberPadded();' });
const tables = {
    vendor: { label: 'Vendor', number: 'VRV', fields: {
        number: baseNumber(), name: str('Vendor name', { mandatory: true }), description: str('Description', { maxLength: 4000 }),
        requested_by: ref('Requested by'), assessor: ref('Assessor'), approver: ref('Approver'), remediation_owner: ref('Remediation owner'),
        lifecycle: choice('Lifecycle', { new: 'New', assessing: 'Assessing', remediation: 'Remediation required', ready_for_approval: 'Ready for approval', pending_approval: 'Pending approval', approved: 'Approved', rejected: 'Rejected', review_due: 'Review due' }, 'new'),
        latest_assessment: ref('Latest assessment', prefix + 'assessment'), risk_score: num('Risk score'),
        risk_band: choice('Risk band', { low: 'Low', medium: 'Medium', high: 'High', critical: 'Critical' }),
        approved_by: ref('Approved by'), approved_at: date('Approved at'), next_review: date('Next review')
    }, form: ['number', 'name', 'description', 'requested_by', 'assessor', 'approver', 'remediation_owner', 'lifecycle', 'latest_assessment', 'risk_score', 'risk_band', 'approved_by', 'approved_at', 'next_review'] },
    questionnaire: { label: 'Questionnaire Version', fields: {
        name: str('Name', { mandatory: true }), code: str('Code', { mandatory: true }), version: ['IntegerColumn', { label: 'Version', mandatory: true, default: 1 }],
        state: choice('Publication state', { draft: 'Draft', published: 'Published', retired: 'Retired' }, 'draft'), definition_json: text('Questionnaire definition')
    }, unique: ['code', 'version'], form: ['name', 'code', 'version', 'state', 'definition_json'] },
    assessment: { label: 'Vendor Assessment', number: 'VRA', fields: {
        number: baseNumber(), vendor: vendor(), questionnaire: ref('Questionnaire version', prefix + 'questionnaire'),
        snapshot_json: text('Immutable question snapshot'), request_key: str('Idempotency key', { maxLength: 160, unique: true }), assessor: ref('Assessor'),
        state: choice('Assessment result', { issued: 'Issued', passed: 'Passed', failed: 'Failed' }, 'issued'),
        score: num('Risk score'), risk_band: choice('Risk band', { low: 'Low', medium: 'Medium', high: 'High', critical: 'Critical' }),
        critical_failed: bool('Critical control failed'), submitted_at: date('Submitted at'), valid_until: date('Valid until')
    }, form: ['number', 'vendor', 'questionnaire', 'assessor', 'state', 'score', 'risk_band', 'critical_failed', 'submitted_at', 'valid_until'] },
    response: { label: 'Assessment Response', fields: {
        assessment: ref('Assessment', prefix + 'assessment', { mandatory: true }), vendor: vendor(), question_id: str('Question code'),
        question_text: str('Question', { maxLength: 1000 }), options_json: text('Available choices'),
        answer: choice('Answer', { yes: 'Yes', no: 'No', partial: 'Partial', quarterly: 'Quarterly', annually: 'Annually', never: 'Never', na: 'Not applicable' }),
        justification: str('Justification', { maxLength: 4000 }), applicable: bool('Applicable'), evidence_required: bool('Evidence attachment required'), allow_na: bool('N/A permitted')
    }, unique: ['assessment', 'question_id'], form: ['assessment', 'vendor', 'question_text', 'answer', 'justification', 'applicable', 'evidence_required', 'options_json', 'allow_na'] },
    finding: { label: 'Risk Finding', number: 'VRF', fields: {
        number: baseNumber(), vendor: vendor(), assessment: ref('Assessment', prefix + 'assessment'), question_id: str('Failed control'), risk: num('Control risk'), critical: bool('Critical control'),
        owner: ref('Owner'), state: choice('Finding state', { open: 'Open', closed_verified: 'Verified remediation' }, 'open'),
        verified_by: ref('Verified by'), remediation: ref('Remediation task', prefix + 'remediation'), exception: ref('Risk exception', prefix + 'exception'),
        exception_reason: str('Exception justification', { maxLength: 4000 }), exception_until: date('Requested exception expiry')
    }, unique: ['assessment', 'question_id'], form: ['number', 'vendor', 'assessment', 'question_id', 'risk', 'critical', 'owner', 'state', 'remediation', 'exception', 'verified_by', 'exception_reason', 'exception_until'] },
    remediation: { label: 'Remediation Task', number: 'VRT', fields: {
        number: baseNumber(), vendor: vendor(), finding: ref('Finding', prefix + 'finding'), short_description: str('Short description', { maxLength: 200 }),
        assigned_to: ref('Assigned to'), due_date: date('Due date'), state: choice('Task state', { open: 'Open', in_progress: 'In progress', resolved: 'Awaiting verification', closed_verified: 'Closed and verified' }, 'open'),
        resolution: str('Resolution details', { maxLength: 4000 }), verified_by: ref('Verified by'), last_reminder: ['DateColumn', { label: 'Last reminder' }]
    }, form: ['number', 'vendor', 'finding', 'short_description', 'assigned_to', 'due_date', 'state', 'resolution', 'verified_by'] },
    exception: { label: 'Risk Exception', number: 'VRE', fields: {
        number: baseNumber(), vendor: vendor(), finding: ref('Finding', prefix + 'finding'), requested_by: ref('Requested by'), approver: ref('Approver'),
        state: choice('Exception state', { requested: 'Requested', approved: 'Approved', rejected: 'Rejected', expired: 'Expired' }, 'requested'),
        expires_at: date('Expires at'), justification: str('Business justification', { maxLength: 4000 }), decided_by: ref('Decided by')
    }, form: ['number', 'vendor', 'finding', 'requested_by', 'approver', 'state', 'expires_at', 'justification', 'decided_by'] },
    approval: { label: 'Vendor Approval', number: 'VRP', fields: {
        number: baseNumber(), vendor: vendor(), assessment: ref('Assessment', prefix + 'assessment'), requested_by: ref('Requested by'), approver: ref('Approver'),
        state: choice('Approval state', { requested: 'Requested', approved: 'Approved', rejected: 'Rejected', invalidated: 'Invalidated' }, 'requested'),
        decision_notes: str('Decision notes', { maxLength: 4000 }), decided_by: ref('Decided by')
    }, form: ['number', 'vendor', 'assessment', 'requested_by', 'approver', 'state', 'decision_notes', 'decided_by'] },
    activity: { label: 'Vendor Risk Activity', fields: {
        vendor: vendor(), assessment: ref('Assessment', prefix + 'assessment'), action: str('Action'), details: str('Details', { maxLength: 4000 }), actor: ref('Actor'), occurred_at: date('Occurred at'), flow_processed: bool('Flow processed')
    }, form: ['vendor', 'assessment', 'action', 'details', 'actor', 'occurred_at'] }
};
const id = key => `Now.ID[${JSON.stringify(key)}]`;
const json = value => JSON.stringify(value, null, 2);
const lines = ["// Generated by tools/generate-metadata.cjs. Edit the generator and rerun it.", "import '@servicenow/sdk/global'", "import { Table, StringColumn, ReferenceColumn, DateTimeColumn, DateColumn, BooleanColumn, DecimalColumn, IntegerColumn, Role, Acl, ScriptInclude, BusinessRule, ApplicationMenu, Record, Form, List, default_view, UiAction, UiPage, ClientScript, RestApi, ScheduledScript, EmailNotification } from '@servicenow/sdk/core'", ''];
function call(api, key, fields) { lines.push(`${api}({ $id: ${id(key)}, ${fields} });\n`); }
const roleNames = ['user', 'requester', 'assessor', 'remediation_owner', 'approver', 'app_admin'];
for (const role of roleNames) {
    lines.push(`export const role_${role} = Role({ $id: ${id('role_' + role)}, name: ${json(scope + '.' + role)}, description: ${json('Vendor risk ' + role.replaceAll('_', ' '))}${role === 'user' ? '' : ', containsRoles: [role_user]'} });`);
}
for (const [type, table] of Object.entries(tables)) {
    const schema = Object.entries(table.fields).map(([field, [api, config]]) => `${field}: ${api}(${json(config)})`).join(',\n');
    lines.push(`export const ${prefix + type} = Table({ name: ${json(prefix + type)}, label: ${json(table.label)}, display: ${json(table.fields.number ? 'number' : table.fields.name ? 'name' : table.fields.question_text ? 'question_text' : 'action')}, audit: true, allowWebServiceAccess: true, accessibleFrom: 'public', actions: { read: true, create: false, update: false, delete: false }, allowConfiguration: false, allowNewFields: false, createAccessControls: false, ${table.number ? 'autoNumber: ' + json({ prefix: table.number, number: 1000, numberOfDigits: 7 }) + ',' : ''} ${table.unique ? 'index: ' + json([{ unique: true, element: table.unique }]) + ',' : ''} schema: { ${schema} } });\n`);
    const tableName = json(prefix + type);
    call('Acl', `${type}_read`, `type: 'record', table: ${tableName}, operation: 'read', roles: [role_user], adminOverrides: true, script: ${json("answer = new VrmService().canReadRecord(current);")}`);
    call('Acl', `${type}_report`, `type: 'record', table: ${tableName}, operation: 'report_on', roles: [role_user], adminOverrides: true, script: ${json("answer = new VrmService().canReadRecord(current);")}`);
    const writable = ['vendor', 'questionnaire', 'response', 'remediation', 'finding'].includes(type);
    call('Acl', `${type}_write`, `type: 'record', table: ${tableName}, operation: 'write', roles: [role_user], adminOverrides: false, script: ${json(writable ? "answer = new VrmService().canWriteRecord(current);" : 'answer = false;')}`);
    call('Acl', `${type}_create`, `type: 'record', table: ${tableName}, operation: 'create', roles: [${type === 'questionnaire' ? 'role_app_admin' : 'role_user'}], adminOverrides: false, script: ${json(type === 'vendor' ? "answer = new VrmService().role('requester') || new VrmService().role('app_admin');" : type === 'questionnaire' ? "answer = new VrmService().role('app_admin');" : 'answer = false;')}`);
    call('Acl', `${type}_delete`, `type: 'record', table: ${tableName}, operation: 'delete', adminOverrides: false, script: 'answer = false;'`);
    let editable = { vendor: ['name', 'description', 'assessor', 'approver', 'remediation_owner'], questionnaire: ['name', 'code', 'version', 'state', 'definition_json'], response: ['answer', 'justification'], remediation: ['state', 'resolution'], finding: ['exception_reason', 'exception_until'] }[type] || [];
    for (const field of Object.keys(table.fields)) {
        let script = editable.includes(field) ? "answer = new VrmService().canWriteRecord(current);" : 'answer = false;';
        if (type === 'vendor' && ['assessor', 'approver', 'remediation_owner'].includes(field)) script = "answer = new VrmService().role('app_admin');";
        call('Acl', `${type}_${field}_write`, `type: 'record', table: ${tableName}, field: ${json(field)}, operation: 'write', adminOverrides: false, script: ${json(script)}`);
    }
    call('BusinessRule', `${type}_guard`, `name: ${json('VRM protect ' + type)}, table: ${tableName}, when: 'before', action: ['insert', 'update', 'delete'], active: true, order: 10, script: ${json("(function(current, previous) { try { new VrmService().protect(current, previous); } catch (e) { gs.addErrorMessage(String(e.message || e)); current.setAbortAction(true); } })(current, previous);")}`);
    lines.push(`Form({ table: ${tableName}, view: default_view, sections: [{ caption: ${json(table.label)}, content: [{ layout: 'one-column', elements: ${json(table.form.map(field => ({ type: 'table_field', field })))} }] }] });\n`);
    lines.push(`List({ table: ${tableName}, view: default_view, columns: ${json(table.form.slice(0, 7))} });`);
    // Standard related lists use the actual child reference field.
    const related = { vendor: ['assessment.vendor', 'finding.vendor', 'remediation.vendor', 'exception.vendor', 'approval.vendor', 'activity.vendor'], assessment: ['response.assessment', 'finding.assessment'], finding: ['remediation.finding', 'exception.finding'] }[type] || [];
    if (related.length) {
        lines.push(`export const related_${type} = Record({ $id: ${id('related_' + type)}, table: 'sys_ui_related_list', data: { name: ${tableName}, view: '', sys_user: '' } });`);
        related.forEach((child, index) => lines.push(`Record({ $id: ${id(type + '_related_' + index)}, table: 'sys_ui_related_list_entry', data: { list_id: related_${type}, related_list: ${json(prefix + child)}, position: ${index} } });`));
    }
}
call('ScriptInclude', 'policy', `name: 'VrmPolicy', active: true, clientCallable: false, accessibleFrom: 'package_private', script: Now.include('../server/VrmPolicy.js')`);
call('ScriptInclude', 'service', `name: 'VrmService', active: true, clientCallable: false, accessibleFrom: 'package_private', script: Now.include('../server/VrmService.js')`);
call('BusinessRule', 'response_condition_refresh', `name: 'VRM refresh conditional questions', table: '${prefix}response', when: 'after', action: ['update'], active: true, condition: "current.answer.changes()", order: 100, script: "new VrmService().refreshConditions(current.getValue('assessment'));"`);
call('ClientScript', 'response_choices', `name: 'VRM contextual answer options', table: '${prefix}response', type: 'onLoad', active: true, uiType: 'all', script: ${json("function onLoad() { var existing = g_form.getValue('answer'); var options; try { options = JSON.parse(g_form.getValue('options_json')); } catch(e) { return; } g_form.clearOptions('answer'); g_form.addOption('answer', '', '-- Select an answer --'); Object.keys(options).forEach(function(key) { g_form.addOption('answer', key, key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')); }); if (g_form.getValue('allow_na') === 'true') g_form.addOption('answer', 'na', 'Not applicable'); g_form.setValue('answer', existing); g_form.setDisplay('options_json', false); g_form.setDisplay('allow_na', false); var active = g_form.getValue('applicable') === 'true'; if (!active) { g_form.setReadOnly('answer', true); g_form.addInfoMessage('This question is currently excluded by the questionnaire conditions.'); } if (g_form.getValue('evidence_required') === 'true' && active) g_form.addInfoMessage('Attach supporting evidence using the paperclip before submitting the assessment.'); }")}`);
lines.push(`export const mainMenu = ApplicationMenu({ $id: ${id('main_menu')}, title: 'Vendor Risk Management', active: true, roles: [role_user], order: 100 });`);
call('UiPage', 'overview_page', `endpoint: '${prefix}overview.do', category: 'general', html: Now.include('../server/overview.html')`);
call('Acl', 'overview_access', `type: 'ui_page', name: '${prefix}overview', operation: 'read', roles: [role_app_admin], adminOverrides: true`);
lines.push(`Record({ $id: ${id('module_overview')}, table: 'sys_app_module', data: { title: 'Overview', application: mainMenu, active: true, order: 10, link_type: 'DIRECT', query: '${prefix}overview.do', roles: ['${scope}.app_admin'] } });`);
for (const [i, type] of Object.keys(tables).entries()) {
    lines.push(`Record({ $id: ${id('module_' + type)}, table: 'sys_app_module', data: { title: ${json(tables[type].label + (type === 'activity' ? '' : 's'))}, application: mainMenu, active: true, order: ${100 + i * 100}, link_type: 'LIST', name: ${json(prefix + type)}, roles: ['${scope}.user'] } });`);
}
function ui(type, key, label, method, params, condition, roles) {
    const script = `try { var result = new VrmService().${method}(${params}); gs.addInfoMessage('${label} completed'); action.setRedirectURL(current); } catch(e) { gs.addErrorMessage(String(e.message || e)); action.setRedirectURL(current); }`;
    call('UiAction', key, `name: ${json(label)}, table: '${prefix + type}', active: true, actionName: ${json(key)}, showInsert: false, showUpdate: true, form: { showButton: true }, roles: [${roles.map(r => 'role_' + r).join(',')}], condition: ${json(condition)}, script: ${json(script)}`);
}
ui('vendor', 'issue_assessment', 'Issue Assessment', 'issue', "current.getUniqueValue(), (function() { var q = new GlideRecord('" + prefix + "questionnaire'); q.addQuery('state','published'); q.orderByDesc('version'); q.query(); if (!q.next()) throw new Error('Publish a questionnaire first'); return q.getUniqueValue(); })(), 'manual:' + current.getValue('sys_mod_count')", "current.lifecycle != 'assessing'", ['assessor','app_admin']);
ui('assessment', 'submit_assessment', 'Submit and Score', 'submit', 'current.getUniqueValue()', "current.state == 'issued'", ['assessor','app_admin']);
ui('vendor', 'request_approval', 'Request Approval', 'requestApproval', 'current.getUniqueValue()', "current.latest_assessment != '' && current.lifecycle != 'approved' && current.lifecycle != 'pending_approval'", ['assessor','app_admin']);
ui('remediation', 'verify_remediation', 'Verify Remediation', 'verify', 'current.getUniqueValue()', "current.state == 'resolved'", ['assessor','app_admin']);
ui('finding', 'request_exception', 'Request Exception', 'exception', "current.getUniqueValue(), current.getValue('exception_reason'), current.getValue('exception_until')", "current.critical == false && current.state == 'open'", ['assessor','remediation_owner','app_admin']);
ui('approval', 'approve_vendor', 'Approve Vendor', 'decideApproval', "current.getUniqueValue(), 'approved', 'Approved through form action'", "current.state == 'requested' && current.approver == gs.getUserID()", ['approver']);
ui('approval', 'reject_vendor', 'Reject Vendor', 'decideApproval', "current.getUniqueValue(), 'rejected', 'Rejected by assigned approver'", "current.state == 'requested' && current.approver == gs.getUserID()", ['approver']);
ui('exception', 'approve_exception', 'Approve Exception', 'decideException', "current.getUniqueValue(), 'approved'", "current.state == 'requested' && current.approver == gs.getUserID()", ['approver']);
ui('exception', 'reject_exception', 'Reject Exception', 'decideException', "current.getUniqueValue(), 'rejected'", "current.state == 'requested' && current.approver == gs.getUserID()", ['approver']);
call('RestApi', 'workflow_api', `name: 'Vendor Risk Workflow', serviceId: 'vendor_risk', active: true, consumes: 'application/json', produces: 'application/json', routes: [{ $id: ${id('workflow_action')}, name: 'Execute workflow action', method: 'POST', path: '/actions/{action}', authentication: true, authorization: false, script: Now.include('../server/rest-router.js') }]`);
call('ScheduledScript', 'daily_maintenance', `name: 'VRM daily reminders and reassessment', active: true, frequency: 'daily', executionTime: { hours: 4, minutes: 0, seconds: 0 }, timeZone: 'UTC', script: "new VrmService().maintenance();"`);
const events = {
    assessment_assigned: ['assessment', 'Assessment assigned', 'assessor'],
    remediation_assigned: ['remediation', 'Remediation assigned', 'assigned_to'],
    remediation_overdue: ['remediation', 'Remediation overdue', 'assigned_to'],
    approval_requested: ['approval', 'Vendor approval requested', 'approver'],
    exception_requested: ['exception', 'Risk exception requested', 'approver'],
    vendor_decision: ['vendor', 'Vendor decision recorded', 'requested_by']
};
for (const [key, [type, label, recipient]] of Object.entries(events)) {
    lines.push(`Record({ $id: ${id('event_' + key)}, table: 'sysevent_register', data: { event_name: ${json(scope + '.' + key)}, table: ${json(prefix + type)}, description: ${json(label)}, fired_by: 'VrmService' } });`);
    call('EmailNotification', 'notification_' + key, `name: ${json('VRM ' + label)}, table: '${prefix + type}', active: true, triggerConditions: { generationType: 'event', eventName: '${scope}.${key}' }, recipientDetails: { recipientFields: ['${recipient}'], sendToCreator: true }, emailContent: { contentType: 'text/plain', subject: ${json(label + ': ${number}')}, messageText: ${json(label + '. Review the record in Vendor Risk Management. ${URI_REF}')}, includeAttachments: false }`);
}
lines.push(`Record({ $id: ${id('validity_days')}, table: 'sys_properties', data: { name: '${scope}.validity_days', value: '365', type: 'integer', description: 'Assessment validity in days', is_private: true } });`);
lines.push(`Record({ $id: ${id('seed_questionnaire')}, table: '${prefix}questionnaire', data: { name: 'Vendor Security Assessment v1', code: ${json(fixture.code)}, version: 1, state: 'published', definition_json: ${json(JSON.stringify(fixture))} } });`);
// Native reporting provides administrator-visible aggregates; table ACLs still protect records.
for (const [key, table, groupby, title, type] of [
    ['risk_distribution','vendor','risk_band','Vendor risk distribution','pie'],
    ['vendor_lifecycle','vendor','lifecycle','Vendor onboarding lifecycle','bar'],
    ['findings','finding','critical','Risk findings by criticality','bar'],
    ['remediation','remediation','state','Remediation progress','bar']
]) {
    lines.push(`Record({ $id: ${id('report_' + key)}, table: 'sys_report', data: { title: ${json(title)}, table: '${prefix + table}', type: '${type}', aggregate: 'COUNT', field: '${groupby}', roles: ['${scope}.app_admin'] } });`);
}
fs.mkdirSync(path.join(root, 'src/fluent'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/fluent/application.now.ts'), lines.join('\n') + '\n');
console.log(`Generated ${Object.keys(tables).length} tables and their forms, ACLs and workflows for ${scope}`);
