var VrmService = Class.create();
VrmService.prototype = {
    initialize: function () { this.scope = 'x_1503283_vrm'; this.prefix = this.scope + '_'; },
    error: function (message, status) { var error = new Error(message); error.httpStatus = status || 400; throw error; },
    role: function (role) { return gs.hasRole('admin') || gs.hasRole(this.scope + '.' + role); },
    require: function (allowed, message) { if (!allowed) { this.error(message || 'Access denied', 403); } },
    now: function () { return new GlideDateTime(); },
    iso: function (value) { return String(value).replace(' ', 'T') + 'Z'; },
    record: function (type, id) {
        if (!/^[a-f0-9]{32}$/.test(String(id || ''))) { this.error('Invalid record identifier'); }
        var record = new GlideRecord(this.prefix + type);
        if (!record.get(String(id))) { this.error('Record not found', 404); }
        return record;
    },
    value: function (record, field) { return record.getValue(field) || ''; },
    update: function (record, fields) {
        // All callers check role, ownership and lifecycle before writing protected fields.
        // Explicit immutable activity records preserve decisions when workflow is suppressed.
        record.setWorkflow(false);
        for (var field in fields) { if (Object.prototype.hasOwnProperty.call(fields, field)) { record.setValue(field, fields[field]); } }
        if (!record.update()) { this.error('Database update failed'); }
    },
    insert: function (type, fields) {
        var record = new GlideRecord(this.prefix + type); record.initialize(); record.setWorkflow(false);
        for (var field in fields) { if (Object.prototype.hasOwnProperty.call(fields, field)) { record.setValue(field, fields[field]); } }
        var id = record.insert(); if (!id) { this.error('Database insert failed for ' + type); }
        return this.record(type, String(id));
    },
    log: function (vendor, assessment, action, details) {
        // Activity insert keeps workflow enabled so Flow Designer receives lifecycle events.
        var record = new GlideRecord(this.prefix + 'activity'); record.initialize();
        record.setValue('vendor', vendor); record.setValue('assessment', assessment || '');
        record.setValue('action', action); record.setValue('details', details || '');
        record.setValue('actor', gs.getUserID()); record.setValue('occurred_at', this.now().getValue());
        if (!record.insert()) { this.error('Activity insert failed'); }
    },
    flowDispatch: function (activityId) {
        this.require(this.role('app_admin'));
        var activity = this.record('activity', activityId);
        if (this.value(activity, 'flow_processed') === '1' || this.value(activity, 'flow_processed') === 'true') { return; }
        var mapping = { assessment_issued: ['assessment', 'assessment_assigned', 'assessment'],
            remediation_created: ['remediation', 'remediation_assigned', 'details'],
            approval_requested: ['approval', 'approval_requested', 'details'] };
        var config = mapping[this.value(activity, 'action')]; if (!config) { this.error('Unsupported flow event'); }
        var target = this.record(config[0], this.value(activity, config[2]));
        this.require(this.value(target, 'vendor') === this.value(activity, 'vendor'), 'Flow record mismatch');
        gs.eventQueue(this.scope + '.' + config[1], target, '', '');
        this.update(activity, { flow_processed: true });
    },
    canReadVendor: function (vendor) {
        var user = gs.getUserID();
        return this.role('app_admin') ||
            (this.role('requester') && this.value(vendor, 'requested_by') === user) ||
            (this.role('assessor') && this.value(vendor, 'assessor') === user) ||
            (this.role('approver') && this.value(vendor, 'approver') === user) ||
            (this.role('remediation_owner') && this.value(vendor, 'remediation_owner') === user);
    },
    canReadRecord: function (record) {
        if (record.getTableName() === this.prefix + 'vendor') { return this.canReadVendor(record); }
        if (record.getTableName() === this.prefix + 'questionnaire') { return this.role('user'); }
        var vendor = this.value(record, 'vendor');
        if (!vendor && record.isValidField('assessment')) { vendor = this.value(this.record('assessment', this.value(record, 'assessment')), 'vendor'); }
        return vendor ? this.canReadVendor(this.record('vendor', vendor)) : false;
    },
    canAssess: function (assessment) {
        return this.role('app_admin') || (this.role('assessor') && this.value(assessment, 'assessor') === gs.getUserID());
    },
    canWriteRecord: function (record) {
        var table = record.getTableName();
        if (table === this.prefix + 'vendor') {
            return this.role('app_admin') || (this.role('requester') && this.value(record, 'requested_by') === gs.getUserID());
        }
        if (table === this.prefix + 'questionnaire') {
            if (!this.role('app_admin')) { return false; }
            if (record.isNewRecord()) { return true; }
            // ACLs may evaluate after incoming publication fields are applied.
            // Determine editability from the persisted version, not client input.
            var stored = new GlideRecord(table);
            return stored.get(record.getUniqueValue()) && this.value(stored, 'state') === 'draft';
        }
        if (table === this.prefix + 'response') {
            var assessment = this.record('assessment', this.value(record, 'assessment'));
            return this.value(assessment, 'state') === 'issued' && this.canAssess(assessment);
        }
        if (table === this.prefix + 'remediation') {
            return this.role('app_admin') || (this.role('remediation_owner') && this.value(record, 'assigned_to') === gs.getUserID() &&
                this.value(record, 'state') !== 'closed_verified');
        }
        if (table === this.prefix + 'finding') {
            return this.canReadRecord(record) && (this.role('assessor') || this.role('remediation_owner') || this.role('app_admin'));
        }
        return false;
    },
    protect: function (current, previous) {
        var table = current.getTableName(); var type = table.substring(this.prefix.length);
        var lists = {
            vendor: ['requested_by', 'lifecycle', 'latest_assessment', 'risk_score', 'risk_band', 'approved_by', 'approved_at', 'next_review'],
            questionnaire: [],
            response: ['assessment', 'vendor', 'question_id', 'question_text', 'options_json', 'applicable', 'evidence_required', 'allow_na'],
            remediation: ['finding', 'vendor', 'assigned_to', 'due_date', 'verified_by', 'last_reminder'],
            assessment: ['vendor', 'questionnaire', 'snapshot_json', 'request_key', 'assessor', 'state', 'score', 'risk_band', 'critical_failed', 'valid_until', 'submitted_at'],
            finding: ['assessment', 'vendor', 'question_id', 'risk', 'critical', 'owner', 'state', 'verified_by', 'remediation', 'exception'],
            exception: ['finding', 'vendor', 'state', 'requested_by', 'approver', 'expires_at', 'justification', 'decided_by'],
            approval: ['vendor', 'assessment', 'requested_by', 'approver', 'state', 'decision_notes', 'decided_by'],
            activity: ['vendor', 'assessment', 'action', 'details', 'actor', 'occurred_at']
        };
        if (current.operation() === 'delete') { this.error('Application history cannot be deleted'); }
        if (current.operation() === 'insert') {
            if (type === 'activity') {
                this.require(this.role('user') && this.value(current, 'actor') === gs.getUserID() &&
                    this.canReadVendor(this.record('vendor', this.value(current, 'vendor'))));
                return;
            }
            if (type === 'vendor') {
                this.require(this.role('requester') || this.role('app_admin'));
                current.setValue('requested_by', gs.getUserID()); current.setValue('lifecycle', 'new');
                current.setValue('latest_assessment', ''); current.setValue('risk_score', '');
                current.setValue('approved_by', ''); current.setValue('approved_at', ''); current.setValue('next_review', '');
                return;
            }
            if (type === 'questionnaire') { this.require(this.role('app_admin')); this.validateQuestionnaireRecord(current); return; }
            this.error('Use the application workflow actions to create this record');
        }
        if (type === 'questionnaire') {
            this.require(this.role('app_admin'));
            if (this.value(previous, 'state') !== 'draft') { this.error('Published questionnaires are immutable; create a new version'); }
            this.validateQuestionnaireRecord(current); return;
        }
        this.require(this.canWriteRecord(current));
        var fields = lists[type] || [];
        for (var i = 0; i < fields.length; i++) {
            if (current.getElement(fields[i]).changes()) { this.error('Protected field: ' + fields[i]); }
        }
        if (type === 'vendor' && !this.role('app_admin')) {
            var assignments = ['assessor', 'approver', 'remediation_owner'];
            for (var a = 0; a < assignments.length; a++) { if (current.getElement(assignments[a]).changes()) { this.error('Only the application administrator can assign reviewers'); } }
        }
        if (type === 'response') {
            var options = JSON.parse(this.value(current, 'options_json'));
            var answer = this.value(current, 'answer');
            if (answer && answer !== 'na' && !Object.prototype.hasOwnProperty.call(options, answer)) { this.error('Invalid answer for this question'); }
            if (answer === 'na' && (this.value(current, 'allow_na') !== '1' && this.value(current, 'allow_na') !== 'true')) { this.error('N/A is not permitted'); }
        }
        if (type === 'remediation') {
            if (['open', 'in_progress', 'resolved'].indexOf(this.value(current, 'state')) < 0) { this.error('Use independent verification to close remediation'); }
            if (this.value(current, 'state') === 'resolved' && (!this.value(current, 'resolution').trim() || !this.attachments(current).length)) {
                this.error('Resolution details and attached evidence are required');
            }
        }
    },
    validateQuestionnaireRecord: function (record) {
        var definition; try { definition = JSON.parse(this.value(record, 'definition_json')); } catch (error) { this.error('Questionnaire definition must be valid JSON'); }
        VrmPolicy().validateQuestionnaire(definition);
        if (definition.code !== this.value(record, 'code') || definition.version !== Number(this.value(record, 'version'))) { this.error('Definition code/version must match the record'); }
    },
    createVendor: function (input) {
        this.require(this.role('requester') || this.role('app_admin'));
        if (!input || typeof input.name !== 'string' || !input.name.trim() || input.name.length > 160) { this.error('A vendor name of at most 160 characters is required'); }
        var fields = { name: input.name.trim(), description: String(input.description || '').substring(0, 4000),
            requested_by: gs.getUserID(), lifecycle: 'new' };
        if (this.role('app_admin')) {
            fields.assessor = input.assessor || ''; fields.approver = input.approver || ''; fields.remediation_owner = input.remediationOwner || '';
        } else {
            fields.assessor = gs.getProperty(this.scope + '.default_assessor', '');
            fields.approver = gs.getProperty(this.scope + '.default_approver', '');
            fields.remediation_owner = gs.getProperty(this.scope + '.default_remediation_owner', '');
        }
        var vendor = this.insert('vendor', fields); this.log(vendor.getUniqueValue(), '', 'vendor_created', 'Vendor submitted');
        return { id: vendor.getUniqueValue(), number: this.value(vendor, 'number') };
    },
    issue: function (vendorId, questionnaireId, requestKey) {
        var vendor = this.record('vendor', vendorId);
        this.require(this.role('app_admin') || (this.role('assessor') && this.value(vendor, 'assessor') === gs.getUserID()));
        if (!this.value(vendor, 'assessor') || !this.value(vendor, 'approver') || !this.value(vendor, 'remediation_owner')) {
            this.error('Assign an assessor, approver and remediation owner before issuing an assessment');
        }
        if (typeof requestKey !== 'string' || !/^[a-zA-Z0-9_:-]{1,120}$/.test(requestKey)) { this.error('A valid unique request key is required'); }
        var duplicate = new GlideRecord(this.prefix + 'assessment'); duplicate.addQuery('request_key', vendorId + ':' + requestKey); duplicate.query();
        if (duplicate.next()) { return { id: duplicate.getUniqueValue(), reused: true }; }
        var questionnaire = this.record('questionnaire', questionnaireId);
        if (this.value(questionnaire, 'state') !== 'published') { this.error('Only published questionnaires can be issued'); }
        var snapshot = JSON.parse(this.value(questionnaire, 'definition_json')); VrmPolicy().validateQuestionnaire(snapshot);
        var assessment = this.insert('assessment', { vendor: vendorId, questionnaire: questionnaireId, snapshot_json: JSON.stringify(snapshot),
            request_key: vendorId + ':' + requestKey, assessor: this.value(vendor, 'assessor'), state: 'issued' });
        for (var i = 0; i < snapshot.questions.length; i++) {
            var q = snapshot.questions[i]; this.insert('response', { assessment: assessment.getUniqueValue(), vendor: vendorId,
                question_id: q.id, question_text: q.text, options_json: JSON.stringify(q.options),
                applicable: !q.condition, evidence_required: q.evidenceRequired, allow_na: q.allowNA });
        }
        this.invalidateApprovals(vendorId);
        this.update(vendor, { latest_assessment: assessment.getUniqueValue(), lifecycle: 'assessing', approved_by: '', approved_at: '', next_review: '' });
        this.log(vendorId, assessment.getUniqueValue(), 'assessment_issued', 'Questionnaire ' + snapshot.code + ' v' + snapshot.version);
        return { id: assessment.getUniqueValue(), reused: false };
    },
    attachments: function (record) {
        var files = new GlideRecord('sys_attachment'); files.addQuery('table_name', record.getTableName());
        files.addQuery('table_sys_id', record.getUniqueValue()); files.addQuery('size_bytes', '>', 0); files.query();
        var evidence = []; while (files.next()) { evidence.push(files.getUniqueValue()); } return evidence;
    },
    responseMap: function (assessmentId) {
        var rows = new GlideRecord(this.prefix + 'response'); rows.addQuery('assessment', assessmentId); rows.query();
        var answers = {}; while (rows.next()) { answers[this.value(rows, 'question_id')] = {
            value: this.value(rows, 'answer'), justification: this.value(rows, 'justification'), evidence: this.attachments(rows)
        }; } return answers;
    },
    refreshConditions: function (assessmentId) {
        var assessment = this.record('assessment', assessmentId); if (this.value(assessment, 'state') !== 'issued') { return; }
        var snapshot = JSON.parse(this.value(assessment, 'snapshot_json')); var answers = this.responseMap(assessmentId); var active = {};
        for (var i = 0; i < snapshot.questions.length; i++) {
            var q = snapshot.questions[i]; var c = q.condition;
            active[q.id] = !c || (active[c.questionId] && answers[c.questionId] && c.values.indexOf(answers[c.questionId].value) !== -1);
            var row = new GlideRecord(this.prefix + 'response'); row.addQuery('assessment', assessmentId); row.addQuery('question_id', q.id); row.query();
            if (row.next()) { this.update(row, { applicable: !!active[q.id] }); }
        }
    },
    saveResponses: function (assessmentId, answers) {
        var assessment = this.record('assessment', assessmentId); this.require(this.canAssess(assessment));
        if (this.value(assessment, 'state') !== 'issued') { this.error('Submitted assessments are immutable'); }
        if (!answers || typeof answers !== 'object' || Array.isArray(answers)) { this.error('Answers must be an object'); }
        var snapshot = JSON.parse(this.value(assessment, 'snapshot_json')); var known = {};
        for (var i = 0; i < snapshot.questions.length; i++) { known[snapshot.questions[i].id] = snapshot.questions[i]; }
        var keys = Object.keys(answers);
        // Validate the whole batch before changing any responses.
        for (var k = 0; k < keys.length; k++) {
            var q = known[keys[k]]; var answer = answers[keys[k]];
            if (!q || !answer || typeof answer.value !== 'string' ||
                (answer.value !== 'na' && !Object.prototype.hasOwnProperty.call(q.options, answer.value)) ||
                (answer.value === 'na' && (!q.allowNA || !String(answer.justification || '').trim()))) { this.error('Invalid answer: ' + keys[k]); }
        }
        for (var j = 0; j < keys.length; j++) {
            var row = new GlideRecord(this.prefix + 'response'); row.addQuery('assessment', assessmentId); row.addQuery('question_id', keys[j]); row.query();
            if (!row.next()) { this.error('Assessment response is missing'); }
            this.update(row, { answer: answers[keys[j]].value, justification: String(answers[keys[j]].justification || '').substring(0, 4000) });
        }
        this.refreshConditions(assessmentId); return { saved: keys.length };
    },
    submit: function (assessmentId) {
        var assessment = this.record('assessment', assessmentId); this.require(this.canAssess(assessment));
        if (this.value(assessment, 'state') === 'passed' || this.value(assessment, 'state') === 'failed') {
            return { id: assessmentId, status: this.value(assessment, 'state'), score: Number(this.value(assessment, 'score')), reused: true };
        }
        if (this.value(assessment, 'state') !== 'issued') { this.error('Assessment cannot be submitted in this state'); }
        var vendor = this.record('vendor', this.value(assessment, 'vendor'));
        if (this.value(vendor, 'latest_assessment') !== assessmentId) { this.error('Assessment has been superseded'); }
        var snapshot = JSON.parse(this.value(assessment, 'snapshot_json'));
        var result = VrmPolicy().score(snapshot, this.responseMap(assessmentId));
        var expiry = this.now(); expiry.addDaysUTC(Number(gs.getProperty(this.scope + '.validity_days', '365')));
        this.update(assessment, { state: result.status, score: result.score, risk_band: result.band,
            critical_failed: result.criticalFailed, submitted_at: this.now().getValue(), valid_until: expiry.getValue() });
        for (var i = 0; i < result.findings.length; i++) {
            var f = result.findings[i]; var existing = new GlideRecord(this.prefix + 'finding');
            existing.addQuery('assessment', assessmentId); existing.addQuery('question_id', f.questionId); existing.query();
            if (existing.next()) { continue; }
            var finding = this.insert('finding', { assessment: assessmentId, vendor: vendor.getUniqueValue(), question_id: f.questionId,
                risk: f.risk, critical: f.critical, owner: this.value(vendor, 'remediation_owner'), state: 'open' });
            var due = this.now(); due.addDaysUTC(f.critical ? 7 : 30);
            var task = this.insert('remediation', { finding: finding.getUniqueValue(), vendor: vendor.getUniqueValue(),
                assigned_to: this.value(vendor, 'remediation_owner'), state: 'open', due_date: due.getValue(),
                short_description: 'Remediate control: ' + f.questionId });
            this.update(finding, { remediation: task.getUniqueValue() });
            this.log(vendor.getUniqueValue(), assessmentId, 'remediation_created', task.getUniqueValue());
        }
        this.update(vendor, { lifecycle: result.status === 'failed' || result.findings.length ? 'remediation' : 'ready_for_approval',
            risk_score: result.score, risk_band: result.band });
        this.log(vendor.getUniqueValue(), assessmentId, 'assessment_scored', result.status + '; risk=' + result.score);
        return result;
    },
    resolve: function (taskId, resolution) {
        var task = this.record('remediation', taskId);
        this.require(this.role('app_admin') || (this.role('remediation_owner') && this.value(task, 'assigned_to') === gs.getUserID()));
        if (['open', 'in_progress', 'resolved'].indexOf(this.value(task, 'state')) < 0) { this.error('Task is already verified'); }
        if (typeof resolution !== 'string' || !resolution.trim() || !this.attachments(task).length) { this.error('Resolution and attached evidence are required'); }
        this.update(task, { state: 'resolved', resolution: resolution.substring(0, 4000) });
        this.log(this.value(task, 'vendor'), '', 'remediation_resolved', taskId); return { state: 'resolved' };
    },
    verify: function (taskId) {
        var task = this.record('remediation', taskId); var finding = this.record('finding', this.value(task, 'finding'));
        var assessment = this.record('assessment', this.value(finding, 'assessment'));
        this.require(this.canAssess(assessment));
        if (this.value(task, 'assigned_to') === gs.getUserID()) { this.error('Independent verification is required'); }
        if (this.value(task, 'state') !== 'resolved' || !this.value(task, 'resolution').trim() || !this.attachments(task).length) { this.error('Task requires resolution evidence before verification'); }
        this.update(task, { state: 'closed_verified', verified_by: gs.getUserID() });
        this.update(finding, { state: 'closed_verified', verified_by: gs.getUserID() });
        this.log(this.value(task, 'vendor'), assessment.getUniqueValue(), 'remediation_verified', taskId);
        return { state: 'closed_verified' };
    },
    exception: function (findingId, justification, expiresAt) {
        var finding = this.record('finding', findingId); var vendor = this.record('vendor', this.value(finding, 'vendor'));
        this.require(this.canReadVendor(vendor) && (this.role('assessor') || this.role('remediation_owner') || this.role('app_admin')));
        if (this.value(finding, 'critical') === '1' || this.value(finding, 'critical') === 'true') { this.error('Critical controls cannot be waived'); }
        if (typeof justification !== 'string' || !justification.trim()) { this.error('Exception justification is required'); }
        var expiry = new GlideDateTime(expiresAt); var max = this.now(); max.addDaysUTC(90);
        if (!expiresAt || !expiry.isValid() || expiry.compareTo(this.now()) <= 0 || expiry.compareTo(max) > 0) { this.error('Exception expiry must be within the next 90 days'); }
        if (this.value(finding, 'exception')) {
            var old = this.record('exception', this.value(finding, 'exception'));
            if (this.value(old, 'state') === 'requested') { return { id: old.getUniqueValue(), reused: true }; }
        }
        var exception = this.insert('exception', { finding: findingId, vendor: vendor.getUniqueValue(), requested_by: gs.getUserID(),
            approver: this.value(vendor, 'approver'), state: 'requested', expires_at: expiry.getValue(), justification: justification.substring(0, 4000) });
        this.update(finding, { exception: exception.getUniqueValue() });
        gs.eventQueue(this.scope + '.exception_requested', exception, '', '');
        this.log(vendor.getUniqueValue(), this.value(finding, 'assessment'), 'exception_requested', exception.getUniqueValue());
        return { id: exception.getUniqueValue() };
    },
    decideException: function (exceptionId, decision) {
        var exception = this.record('exception', exceptionId); var finding = this.record('finding', this.value(exception, 'finding'));
        this.require(this.role('approver') && this.value(exception, 'approver') === gs.getUserID());
        if (this.value(exception, 'requested_by') === gs.getUserID()) { this.error('Self-approval is prohibited'); }
        if (this.value(exception, 'state') !== 'requested' || ['approved', 'rejected'].indexOf(decision) < 0) { this.error('Invalid exception decision'); }
        if (this.value(finding, 'critical') === '1' || this.value(finding, 'critical') === 'true') { this.error('Critical controls cannot be waived'); }
        if (new GlideDateTime(this.value(exception, 'expires_at')).compareTo(this.now()) <= 0) { this.error('Exception has expired'); }
        this.update(exception, { state: decision, decided_by: gs.getUserID() });
        this.log(this.value(exception, 'vendor'), this.value(finding, 'assessment'), 'exception_' + decision, exceptionId);
        return { state: decision };
    },
    approvalContext: function (vendor, approverId) {
        var assessmentId = this.value(vendor, 'latest_assessment'); var assessment = assessmentId ? this.record('assessment', assessmentId) : null;
        var context = { vendorId: vendor.getUniqueValue(), requesterId: this.value(vendor, 'requested_by'), approverId: approverId,
            now: this.iso(this.now().getValue()), findings: [] };
        if (assessment) {
            var evidenceVerified = true;
            if (this.value(assessment, 'state') === 'passed' || this.value(assessment, 'state') === 'failed') {
                try { VrmPolicy().score(JSON.parse(this.value(assessment, 'snapshot_json')), this.responseMap(assessmentId)); }
                catch (error) { evidenceVerified = false; }
            } else { evidenceVerified = false; }
            var snapshot = JSON.parse(this.value(assessment, 'snapshot_json'));
            context.assessment = { vendorId: this.value(assessment, 'vendor'), latest: true, status: this.value(assessment, 'state'),
                score: Number(this.value(assessment, 'score')), failThreshold: snapshot.failThreshold,
                criticalFailed: this.value(assessment, 'critical_failed') === '1' || this.value(assessment, 'critical_failed') === 'true',
                evidenceVerified: evidenceVerified, expiresAt: this.iso(this.value(assessment, 'valid_until')) };
            // Older critical failures remain blocking until independently verified.
            var findings = new GlideRecord(this.prefix + 'finding'); findings.addQuery('vendor', vendor.getUniqueValue()); findings.query();
            while (findings.next()) {
                var item = { id: findings.getUniqueValue(), critical: this.value(findings, 'critical') === '1' || this.value(findings, 'critical') === 'true',
                    state: this.value(findings, 'state'), ownerId: this.value(findings, 'owner'), verifiedBy: this.value(findings, 'verified_by') };
                if (item.state === 'closed_verified') {
                    var task = this.record('remediation', this.value(findings, 'remediation'));
                    if (this.value(task, 'state') !== 'closed_verified' || !this.attachments(task).length) { item.state = 'open'; }
                }
                if (this.value(findings, 'exception')) {
                    var exception = this.record('exception', this.value(findings, 'exception'));
                    item.exception = { state: this.value(exception, 'state'), findingId: this.value(exception, 'finding'),
                        requestedBy: this.value(exception, 'requested_by'), approvedBy: this.value(exception, 'decided_by'),
                        expiresAt: this.iso(this.value(exception, 'expires_at')) };
                }
                context.findings.push(item);
            }
        }
        return context;
    },
    requestApproval: function (vendorId) {
        var vendor = this.record('vendor', vendorId); this.require(this.canReadVendor(vendor) && (this.role('assessor') || this.role('app_admin')));
        var gate = VrmPolicy().approvalGate(this.approvalContext(vendor, this.value(vendor, 'approver')));
        if (!gate.allowed) { this.error('Approval blocked: ' + gate.reasons.join(', ')); }
        var existing = new GlideRecord(this.prefix + 'approval'); existing.addQuery('vendor', vendorId);
        existing.addQuery('assessment', this.value(vendor, 'latest_assessment')); existing.addQuery('state', 'requested'); existing.query();
        if (existing.next()) { return { id: existing.getUniqueValue(), reused: true }; }
        var approval = this.insert('approval', { vendor: vendorId, assessment: this.value(vendor, 'latest_assessment'),
            requested_by: this.value(vendor, 'requested_by'), approver: this.value(vendor, 'approver'), state: 'requested' });
        this.update(vendor, { lifecycle: 'pending_approval' });
        this.log(vendorId, this.value(vendor, 'latest_assessment'), 'approval_requested', approval.getUniqueValue());
        return { id: approval.getUniqueValue() };
    },
    decideApproval: function (approvalId, decision, notes) {
        var approval = this.record('approval', approvalId); var vendor = this.record('vendor', this.value(approval, 'vendor'));
        this.require(this.role('approver') && this.value(approval, 'approver') === gs.getUserID());
        if (this.value(approval, 'requested_by') === gs.getUserID()) { this.error('Self-approval is prohibited'); }
        if (this.value(approval, 'state') !== 'requested' || ['approved', 'rejected'].indexOf(decision) < 0) { this.error('Invalid approval decision'); }
        if (this.value(approval, 'assessment') !== this.value(vendor, 'latest_assessment')) { this.error('Approval has been superseded'); }
        if (decision === 'approved') {
            var gate = VrmPolicy().approvalGate(this.approvalContext(vendor, gs.getUserID()));
            if (!gate.allowed) { this.error('Approval blocked: ' + gate.reasons.join(', ')); }
        }
        if (decision === 'rejected' && !String(notes || '').trim()) { this.error('A reason is required when rejecting a vendor'); }
        this.update(approval, { state: decision, decision_notes: String(notes || '').substring(0, 4000), decided_by: gs.getUserID() });
        var fields = { lifecycle: decision, approved_by: decision === 'approved' ? gs.getUserID() : '',
            approved_at: decision === 'approved' ? this.now().getValue() : '' };
        if (decision === 'approved') { fields.next_review = this.value(this.record('assessment', this.value(vendor, 'latest_assessment')), 'valid_until'); }
        this.update(vendor, fields); this.log(vendor.getUniqueValue(), this.value(approval, 'assessment'), 'vendor_' + decision, String(notes || ''));
        gs.eventQueue(this.scope + '.vendor_decision', vendor, '', ''); return { state: decision };
    },
    invalidateApprovals: function (vendorId) {
        var approvals = new GlideRecord(this.prefix + 'approval'); approvals.addQuery('vendor', vendorId); approvals.addQuery('state', 'requested'); approvals.query();
        while (approvals.next()) { this.update(approvals, { state: 'invalidated' }); }
    },
    maintenance: function () {
        this.require(this.role('app_admin')); var today = this.now().getValue().substring(0, 10); var count = 0;
        var tasks = new GlideRecord(this.prefix + 'remediation'); tasks.addQuery('state', 'IN', 'open,in_progress,resolved');
        tasks.addQuery('due_date', '<', this.now().getValue()); tasks.query();
        while (tasks.next()) {
            if (this.value(tasks, 'last_reminder') === today) { continue; }
            this.update(tasks, { last_reminder: today }); gs.eventQueue(this.scope + '.remediation_overdue', tasks, '', ''); count++;
        }
        var exceptions = new GlideRecord(this.prefix + 'exception'); exceptions.addQuery('state', 'approved');
        exceptions.addQuery('expires_at', '<=', this.now().getValue()); exceptions.query();
        while (exceptions.next()) {
            this.update(exceptions, { state: 'expired' }); var vendor = this.record('vendor', this.value(exceptions, 'vendor'));
            this.invalidateApprovals(vendor.getUniqueValue()); this.update(vendor, { lifecycle: 'review_due', approved_by: '', approved_at: '' });
            this.log(vendor.getUniqueValue(), '', 'exception_expired', exceptions.getUniqueValue()); count++;
        }
        var vendors = new GlideRecord(this.prefix + 'vendor'); vendors.addQuery('lifecycle', 'approved');
        vendors.addQuery('next_review', '<=', this.now().getValue()); vendors.query();
        while (vendors.next()) {
            var prior = this.record('assessment', this.value(vendors, 'latest_assessment'));
            this.issue(vendors.getUniqueValue(), this.value(prior, 'questionnaire'), 'scheduled-review:' + this.value(vendors, 'next_review').replace(/[^0-9]/g, ''));
            count++;
        }
        return { actions: count };
    },
    type: 'VrmService'
};
