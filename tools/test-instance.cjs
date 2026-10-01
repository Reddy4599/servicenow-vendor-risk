const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { request, query, BASE } = require('./instance-client.cjs');
const { sourceHash } = require('./source-hash.cjs');
const scope = require('../now.config.json').scope;
const prefix = scope + '_';
const stamp = Date.now().toString(36);
const results = [];
const actors = {};
let demo = {};
async function run(name, work) {
    const start = Date.now();
    try { await work(); results.push({ name, status: 'passed', durationMs: Date.now() - start }); console.log('PASS ' + name); }
    catch (error) { results.push({ name, status: 'failed', error: error.message, durationMs: Date.now() - start }); console.error('FAIL ' + name + ': ' + error.message); throw error; }
}
function expectOk(response) {
    assert.equal(response.ok, true, `HTTP ${response.status}: ${JSON.stringify(response.body).slice(0, 800)}`);
    const result = response.body.result ?? response.body;
    if (result.ok === false) throw new Error(result.error);
    return result.data ?? result;
}
async function action(name, payload, actor = 'admin') {
    return request(`/api/${scope}/vendor_risk/actions/${name}`, { method: 'POST', data: payload, auth: actors[actor]?.auth });
}
async function mustAction(name, payload, actor) { return expectOk(await action(name, payload, actor)); }
async function deniedAction(name, payload, actor) { const response = await action(name, payload, actor); assert.ok(response.status >= 400, `Unexpected allowed action ${name}`); return response; }
async function rows(type, encoded, actor = 'admin', fields) { return expectOk(await query(prefix + type, encoded, fields, actors[actor]?.auth)); }
async function get(type, id, actor = 'admin') { return expectOk(await request('/api/now/table/' + prefix + type + '/' + id + '?sysparm_exclude_reference_link=true', { auth: actors[actor]?.auth })); }
async function patch(type, id, data, actor = 'admin') { return request('/api/now/table/' + prefix + type + '/' + id, { method: 'PATCH', data, auth: actors[actor]?.auth }); }
async function addEvidence(type, recordId, actor = 'assessor') {
    const params = new URLSearchParams({ table_name: prefix + type, table_sys_id: recordId, file_name: 'synthetic-control-evidence.txt' });
    return expectOk(await request('/api/now/attachment/file?' + params, { method: 'POST', rawBody: 'Synthetic portfolio test evidence. No real vendor or personal data.',
        headers: { 'Content-Type': 'text/plain' }, auth: actors[actor]?.auth }));
}
async function answerAndEvidence(id, changes = {}) {
    const answers = {
        sensitive_data: { value: 'yes' }, encryption: { value: 'yes' },
        access_review: { value: 'quarterly' }, recovery_test: { value: 'yes' }, subprocessors: { value: 'no' }, ...changes
    };
    await mustAction('save-responses', { assessmentId: id, answers }, 'assessor');
    const records = await rows('response', 'assessment=' + id);
    for (const row of records) {
        if ((row.evidence_required === 'true' || row.evidence_required === '1') && (row.applicable === 'true' || row.applicable === '1')) await addEvidence('response', row.sys_id);
    }
    return records;
}
async function configureVendor(id, overrides = {}) {
    expectOk(await patch('vendor', id, { assessor: actors.assessor.id, approver: actors.approver.id,
        remediation_owner: actors.owner.id, ...overrides }));
}
async function createVendor(name, actor = 'requester') {
    const vendor = await mustAction('create-vendor', { name: name + ' ' + stamp, description: 'Synthetic portfolio acceptance-test vendor' }, actor);
    await configureVendor(vendor.id); return vendor.id;
}
async function createActor(key, roles) {
    const username = `vrm.test.${key}.${stamp}`;
    const password = 'Vrm!' + crypto.randomBytes(22).toString('base64url') + 'a9';
    const response = await request('/api/now/table/sys_user?sysparm_input_display_value=true', { method: 'POST', data: {
        user_name: username, first_name: 'VRM Demo', last_name: key, active: true, locked_out: false,
        password_needs_reset: false, user_password: password, email: `${key}.${stamp}@example.invalid`
    } });
    const user = expectOk(response);
    // Current PDI authentication policy requires an explicit API-authentication role.
    // This grants authentication only; application record/action permissions remain distinct.
    for (const roleName of [...roles, 'snc_basic_auth_api_access']) {
        const matches = expectOk(await query('sys_user_role', 'name=' + roleName, 'sys_id,name'));
        assert.equal(matches.length, 1, 'Missing role ' + roleName);
        expectOk(await request('/api/now/table/sys_user_has_role', { method: 'POST', data: { user: user.sys_id, role: matches[0].sys_id } }));
    }
    actors[key] = { id: user.sys_id, username, auth: 'Basic ' + Buffer.from(username + ':' + password).toString('base64') };
}

async function main() {
    let questionnaireId;
    await run('Nine application tables and questionnaire seed installed', async () => {
        const tables = expectOk(await query('sys_db_object', 'nameSTARTSWITH' + prefix, 'name'));
        assert.equal(tables.length, 9);
        const questionnaires = await rows('questionnaire', 'code=vendor_security^version=1');
        assert.equal(questionnaires.length, 1); assert.equal(questionnaires[0].state, 'published'); questionnaireId = questionnaires[0].sys_id;
    });
    await run('Create independent test personas and verify API authentication', async () => {
        await createActor('requester', [scope + '.requester']);
        await createActor('assessor', [scope + '.assessor']);
        await createActor('owner', [scope + '.remediation_owner']);
        await createActor('approver', [scope + '.approver', scope + '.requester']);
        await createActor('outsider', []);
        const own = await mustAction('create-vendor', { name: 'Authentication check ' + stamp }, 'requester');
        assert.match(own.id, /^[a-f0-9]{32}$/);
        assert.match(own.number, /^VRV\d{7}$/);
    });
    await run('Anonymous and unauthorized workflow requests are denied', async () => {
        const anonymous = await request(`/api/${scope}/vendor_risk/actions/create-vendor`, { method: 'POST', data: { name: 'Unauthorized' }, auth: 'Basic ' + Buffer.from('invalid:invalid').toString('base64') });
        assert.ok(anonymous.status >= 400);
        await deniedAction('create-vendor', { name: 'Unauthorized' }, 'outsider');
        await deniedAction('maintenance', {}, 'requester');
    });
    let vendorId, assessmentId, responses, task;
    await run('Requester creates vendor; administrator assigns independent reviewers', async () => {
        vendorId = await createVendor('Northstar Cloud - remediation demo');
        const vendor = await get('vendor', vendorId, 'requester');
        assert.equal(vendor.requested_by, actors.requester.id); assert.equal(vendor.lifecycle, 'new');
        demo.vendorId = vendorId;
    });
    await run('Unauthorized users cannot read vendors or change reviewer assignments', async () => {
        const outside = await request('/api/now/table/' + prefix + 'vendor/' + vendorId, { auth: actors.outsider.auth });
        assert.ok(outside.status >= 400 || !outside.body.result?.sys_id);
        await patch('vendor', vendorId, { approver: actors.requester.id, lifecycle: 'approved', risk_score: 0 }, 'requester');
        const vendor = await get('vendor', vendorId); assert.equal(vendor.approver, actors.approver.id); assert.equal(vendor.lifecycle, 'new');
    });
    await run('Assigned assessor issues a versioned assessment; retry is idempotent', async () => {
        const issued = await mustAction('issue', { vendorId, questionnaireId, requestKey: 'initial' }, 'assessor'); assessmentId = issued.id;
        const repeated = await mustAction('issue', { vendorId, questionnaireId, requestKey: 'initial' }, 'assessor');
        assert.equal(repeated.id, assessmentId); assert.equal(repeated.reused, true);
        assert.equal((await rows('response', 'assessment=' + assessmentId)).length, 6);
    });
    await run('Incomplete answers and missing evidence reject submission', async () => {
        await deniedAction('submit', { assessmentId }, 'assessor');
        await mustAction('save-responses', { assessmentId, answers: {
            sensitive_data: { value: 'yes' }, encryption: { value: 'no' }, access_review: { value: 'quarterly' },
            recovery_test: { value: 'yes' }, subprocessors: { value: 'no' }
        } }, 'assessor');
        await deniedAction('submit', { assessmentId }, 'assessor');
        assert.equal((await get('assessment', assessmentId)).state, 'issued');
    });
    await run('Conditional controls activate from their parent answers', async () => {
        await mustAction('save-responses', { assessmentId, answers: { sensitive_data: { value: 'no' } } }, 'assessor');
        let row = (await rows('response', 'assessment=' + assessmentId + '^question_id=encryption'))[0];
        assert.ok(row.applicable === 'false' || row.applicable === '0');
        await mustAction('save-responses', { assessmentId, answers: { sensitive_data: { value: 'yes' } } }, 'assessor');
        row = (await rows('response', 'assessment=' + assessmentId + '^question_id=encryption'))[0];
        assert.ok(row.applicable === 'true' || row.applicable === '1');
    });
    await run('Critical failure creates a finding and remediation task despite low average', async () => {
        responses = await answerAndEvidence(assessmentId, { encryption: { value: 'no' } });
        const result = await mustAction('submit', { assessmentId }, 'assessor');
        assert.equal(result.status, 'failed'); assert.equal(result.criticalFailed, true); assert.ok(result.score < 60);
        const findings = await rows('finding', 'assessment=' + assessmentId); assert.equal(findings.length, 1);
        const tasks = await rows('remediation', 'vendor=' + vendorId); assert.equal(tasks.length, 1); task = tasks[0];
        assert.equal((await get('vendor', vendorId)).lifecycle, 'remediation');
    });
    await run('Repeated submission cannot duplicate findings or remediation', async () => {
        await mustAction('submit', { assessmentId }, 'assessor');
        assert.equal((await rows('finding', 'assessment=' + assessmentId)).length, 1);
        assert.equal((await rows('remediation', 'vendor=' + vendorId)).length, 1);
    });
    await run('Failed assessment blocks final approval and cannot waive critical controls', async () => {
        await deniedAction('request-approval', { vendorId }, 'assessor');
        await deniedAction('request-exception', { findingId: task.finding, justification: 'Test waiver', expiresAt: new Date(Date.now() + 86400000).toISOString() }, 'owner');
        assert.equal((await get('vendor', vendorId)).lifecycle, 'remediation');
    });
    await run('Submitted scores, response answers and questionnaire versions are immutable', async () => {
        await patch('assessment', assessmentId, { score: 0, state: 'passed' }, 'assessor');
        assert.equal((await get('assessment', assessmentId)).state, 'failed');
        await patch('response', responses.find(r => r.question_id === 'encryption').sys_id, { answer: 'yes' }, 'assessor');
        assert.equal((await get('response', responses.find(r => r.question_id === 'encryption').sys_id)).answer, 'no');
        const before = await get('questionnaire', questionnaireId);
        await patch('questionnaire', questionnaireId, { definition_json: '{}' });
        assert.equal((await get('questionnaire', questionnaireId)).definition_json, before.definition_json);
    });
    await run('Attachment ACLs deny unauthorized evidence access', async () => {
        const evidence = expectOk(await query('sys_attachment', 'table_name=' + prefix + 'response^table_sys_id=' + responses.find(r => r.question_id === 'encryption').sys_id, 'sys_id'))[0];
        assert.ok(evidence?.sys_id);
        const outside = await request('/api/now/attachment/' + evidence.sys_id + '/file', { auth: actors.outsider.auth });
        assert.ok(outside.status >= 400, 'Unauthorized attachment access');
    });
    await run('Remediation requires evidence and independent verification', async () => {
        await deniedAction('resolve', { taskId: task.sys_id, resolution: 'Encryption implemented' }, 'owner');
        await addEvidence('remediation', task.sys_id, 'owner');
        await mustAction('resolve', { taskId: task.sys_id, resolution: 'Encryption enabled and verified with the attached test evidence' }, 'owner');
        await deniedAction('verify', { taskId: task.sys_id }, 'owner');
        await mustAction('verify', { taskId: task.sys_id }, 'assessor');
        assert.equal((await get('remediation', task.sys_id)).state, 'closed_verified');
        await deniedAction('request-approval', { vendorId }, 'assessor');
    });
    let reassessmentId, oldApproval;
    await run('Reassessment passes after verified remediation', async () => {
        reassessmentId = (await mustAction('issue', { vendorId, questionnaireId, requestKey: 'reassessment' }, 'assessor')).id;
        await answerAndEvidence(reassessmentId);
        assert.equal((await mustAction('submit', { assessmentId: reassessmentId }, 'assessor')).status, 'passed');
        oldApproval = (await mustAction('request-approval', { vendorId }, 'assessor')).id;
        assert.equal((await get('vendor', vendorId)).lifecycle, 'pending_approval');
    });
    let finalAssessment, finalApproval;
    await run('New questionnaire version preserves history and invalidates stale approvals', async () => {
        const v2 = JSON.parse(JSON.stringify(require('../fixtures/security-questionnaire-v1.json'))); v2.version = 2; v2.questions[0].weight = 2;
        const q2 = expectOk(await request('/api/now/table/' + prefix + 'questionnaire', { method: 'POST', data: {
            name: 'Vendor Security Assessment v2 ' + stamp, code: 'vendor_security_' + stamp, version: 2, state: 'published',
            definition_json: JSON.stringify({ ...v2, code: 'vendor_security_' + stamp })
        } }));
        const old = await get('assessment', reassessmentId);
        finalAssessment = (await mustAction('issue', { vendorId, questionnaireId: q2.sys_id, requestKey: 'version-two' }, 'assessor')).id;
        assert.equal((await get('approval', oldApproval)).state, 'invalidated');
        await deniedAction('decide-approval', { approvalId: oldApproval, decision: 'approved' }, 'approver');
        assert.equal((await get('assessment', reassessmentId)).snapshot_json, old.snapshot_json);
        await answerAndEvidence(finalAssessment);
        assert.equal((await mustAction('submit', { assessmentId: finalAssessment }, 'assessor')).status, 'passed');
        finalApproval = (await mustAction('request-approval', { vendorId }, 'assessor')).id;
    });
    await run('Only the assigned independent approver can approve the vendor', async () => {
        await deniedAction('decide-approval', { approvalId: finalApproval, decision: 'approved' }, 'requester');
        await deniedAction('decide-approval', { approvalId: finalApproval, decision: 'approved' }, 'outsider');
        await mustAction('decide-approval', { approvalId: finalApproval, decision: 'approved', notes: 'Independent review completed' }, 'approver');
        const vendor = await get('vendor', vendorId); assert.equal(vendor.lifecycle, 'approved'); assert.equal(vendor.approved_by, actors.approver.id); assert.ok(vendor.next_review);
        demo.approvedVendor = vendorId;
    });
    await run('Self-approval is blocked when requester is also the assigned approver', async () => {
        const self = await createVendor('Self-approval negative test', 'approver');
        const assessment = (await mustAction('issue', { vendorId: self, questionnaireId, requestKey: 'self' }, 'assessor')).id;
        await answerAndEvidence(assessment); await mustAction('submit', { assessmentId: assessment }, 'assessor');
        await deniedAction('request-approval', { vendorId: self }, 'assessor');
        assert.notEqual((await get('vendor', self)).lifecycle, 'approved');
    });
    let exceptionId, exceptionVendor, exceptionApproval, expires;
    await run('Noncritical findings require remediation or an independently approved exception', async () => {
        exceptionVendor = await createVendor('Harbor Analytics - exception demo');
        const assessment = (await mustAction('issue', { vendorId: exceptionVendor, questionnaireId, requestKey: 'exception' }, 'assessor')).id;
        await answerAndEvidence(assessment, { access_review: { value: 'annually' } });
        assert.equal((await mustAction('submit', { assessmentId: assessment }, 'assessor')).status, 'passed');
        await deniedAction('request-approval', { vendorId: exceptionVendor }, 'assessor');
        const finding = (await rows('finding', 'assessment=' + assessment))[0];
        expires = Date.now() + 45000;
        const expiry = new Date(expires).toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '');
        exceptionId = (await mustAction('request-exception', { findingId: finding.sys_id, justification: 'Temporary acceptance while quarterly review is introduced', expiresAt: expiry }, 'owner')).id;
        await deniedAction('decide-exception', { exceptionId, decision: 'approved' }, 'owner');
        await mustAction('decide-exception', { exceptionId, decision: 'approved' }, 'approver');
        exceptionApproval = (await mustAction('request-approval', { vendorId: exceptionVendor }, 'assessor')).id;
    });
    await run('Reminder job and notifications are installed and maintenance is repeatable', async () => {
        const jobs = expectOk(await query('sysauto_script', 'name=VRM daily reminders and reassessment', 'sys_id,active'));
        assert.equal(jobs.length, 1); assert.equal(jobs[0].active, 'true');
        const notifications = expectOk(await query('sysevent_email_action', 'nameSTARTSWITHVRM ', 'sys_id,name,active'));
        assert.equal(notifications.length, 6);
        await mustAction('maintenance', {}); const next = await mustAction('maintenance', {}); assert.equal(next.actions, 0);
    });
    await run('Expiry is checked at decision time; expired exceptions block pending approvals', async () => {
        while (Date.now() < expires + 1200) await new Promise(resolve => setTimeout(resolve, Math.min(1000, expires + 1200 - Date.now())));
        await deniedAction('decide-approval', { approvalId: exceptionApproval, decision: 'approved' }, 'approver');
        assert.notEqual((await get('vendor', exceptionVendor)).lifecycle, 'approved');
        await mustAction('maintenance', {}); assert.equal((await get('exception', exceptionId)).state, 'expired');
    });
    await run('Decision history is recorded and report definitions are installed', async () => {
        const history = await rows('activity', 'vendor=' + vendorId); assert.ok(history.length >= 8);
        assert.ok(history.some(row => row.action === 'vendor_approved'));
        const reports = expectOk(await query('sys_report', 'tableSTARTSWITH' + prefix, 'sys_id,title,field'));
        assert.equal(reports.length, 4);
        demo.reportIds = reports.map(r => r.sys_id);
    });
    await run('All three Flow Designer flows execute their lifecycle actions', async () => {
        const flows = expectOk(await query('sys_hub_flow', 'nameSTARTSWITHVRM ', 'sys_id,name,active'));
        assert.equal(flows.length, 3);
        assert.ok(flows.every(flow => flow.active === 'true'));
        demo.flowIds = flows.map(flow => flow.sys_id);
        const deadline = Date.now() + 60000;
        let history;
        do {
            history = await rows('activity', 'vendor=' + vendorId + '^actionINassessment_issued,remediation_created,approval_requested');
            if (history.length && history.every(row => row.flow_processed === 'true')) break;
            await new Promise(resolve => setTimeout(resolve, 2000));
        } while (Date.now() < deadline);
        assert.ok(history.some(row => row.action === 'remediation_created'));
        assert.ok(history.some(row => row.action === 'approval_requested'));
        assert.ok(history.every(row => row.flow_processed === 'true'), 'Lifecycle activities must be processed by real Flow Designer executions');
    });
}

main().catch(() => { process.exitCode = 1; }).finally(() => {
    const report = { timestamp: new Date().toISOString(), instance: BASE, sourceHash: sourceHash(),
        passed: results.filter(r => r.status === 'passed').length, failed: results.filter(r => r.status === 'failed').length,
        complete: results.length === 23 && results.every(r => r.status === 'passed'), results,
        demo, personas: Object.fromEntries(Object.entries(actors).map(([key, value]) => [key, { id: value.id, username: value.username }])) };
    const dir = path.resolve(__dirname, '../test-results'); fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'instance-tests.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(`Instance acceptance: ${report.passed} passed, ${report.failed} failed; complete=${report.complete}`);
});
