/**
 * Pure policy shared by ServiceNow server scripts and local tests.
 * Score: 0 = safest, 100 = greatest risk. All applicable questions require answers.
 * Evidence identifiers MUST be verified against sys_attachment by the server adapter.
 * Load as an on-demand Script Include named VrmPolicy. No Node or Glide dependencies.
 */
function VrmPolicy() {
    var own = Object.prototype.hasOwnProperty;

    function fail(message) { throw new Error(message); }
    function has(object, key) { return own.call(object, key); }
    function number(value, min, max, label) {
        if (typeof value !== 'number' || !isFinite(value) || value < min || value > max) {
            fail(label + ' must be a finite number between ' + min + ' and ' + max);
        }
    }
    function validId(value) {
        return typeof value === 'string' && /^[a-z][a-z0-9_]{0,63}$/.test(value);
    }
    function date(value, label) {
        if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(value)) {
            fail(label + ' must be an ISO UTC timestamp');
        }
        var result = Date.parse(value);
        if (!isFinite(result)) { fail(label + ' is invalid'); }
        var normalized = new Date(result).toISOString();
        if (normalized !== value && normalized !== value.replace('Z', '.000Z')) {
            fail(label + ' is not a real calendar date');
        }
        return result;
    }

    function validateQuestionnaire(template) {
        if (!template || !validId(template.code) || typeof template.version !== 'number' ||
                !isFinite(template.version) || template.version < 1 || Math.floor(template.version) !== template.version) {
            fail('Questionnaire code and positive integer version are required');
        }
        number(template.failThreshold, 1, 100, 'Failure threshold');
        if (!Array.isArray(template.questions) || !template.questions.length) {
            fail('Questionnaire must contain questions');
        }
        var seen = Object.create(null);
        for (var i = 0; i < template.questions.length; i++) {
            var question = template.questions[i];
            if (!question || !validId(question.id) || has(seen, question.id)) {
                fail('Question identifiers must be unique and valid');
            }
            number(question.weight, 0.000001, 1000, 'Question weight');
            if (typeof question.text !== 'string' || !question.text.trim()) {
                fail('Question text is required');
            }
            if (typeof question.critical !== 'boolean' || typeof question.allowNA !== 'boolean' ||
                    typeof question.evidenceRequired !== 'boolean') {
                fail('Question critical, allowNA and evidenceRequired flags must be explicit booleans');
            }
            if (question.critical && question.allowNA) { fail('Critical questions cannot allow N/A'); }
            if (question.createsFinding !== undefined && typeof question.createsFinding !== 'boolean') {
                fail('createsFinding must be a boolean');
            }
            if (question.critical && question.createsFinding === false) { fail('Critical controls must create findings'); }
            if (!question.options || typeof question.options !== 'object' || Array.isArray(question.options)) {
                fail('Question options are required');
            }
            var keys = Object.keys(question.options);
            if (keys.length < 2) { fail('Questions need at least two options'); }
            for (var o = 0; o < keys.length; o++) {
                if (!validId(keys[o]) || keys[o] === 'na') { fail('Invalid option identifier'); }
                number(question.options[keys[o]], 0, 100, 'Option risk');
            }
            if (question.condition) {
                var condition = question.condition;
                if (!has(seen, condition.questionId) || !Array.isArray(condition.values) || !condition.values.length) {
                    fail('Conditions must reference an earlier question with permitted values');
                }
                var parent = seen[condition.questionId];
                for (var v = 0; v < condition.values.length; v++) {
                    if (!has(parent.options, condition.values[v])) { fail('Unknown conditional option'); }
                }
            }
            seen[question.id] = question;
        }
        return true;
    }

    function score(template, responses) {
        validateQuestionnaire(template);
        if (!responses || typeof responses !== 'object' || Array.isArray(responses)) {
            fail('Responses must be an object');
        }
        var known = Object.create(null);
        var active = Object.create(null);
        var numerator = 0;
        var denominator = 0;
        var findings = [];
        var excluded = [];
        var criticalFailed = false;
        for (var k = 0; k < template.questions.length; k++) { known[template.questions[k].id] = true; }
        var supplied = Object.keys(responses);
        for (var s = 0; s < supplied.length; s++) {
            if (!has(known, supplied[s])) { fail('Unknown response: ' + supplied[s]); }
        }
        for (var i = 0; i < template.questions.length; i++) {
            var question = template.questions[i];
            var condition = question.condition;
            var visible = !condition || (active[condition.questionId] === true &&
                has(responses, condition.questionId) &&
                condition.values.indexOf(responses[condition.questionId].value) !== -1);
            active[question.id] = !!visible;
            if (!visible) { excluded.push({ questionId: question.id, reason: 'condition' }); continue; }
            if (!has(responses, question.id) || !responses[question.id] || typeof responses[question.id] !== 'object') {
                fail('Missing answer: ' + question.id);
            }
            var response = responses[question.id];
            if (response.value === 'na') {
                if (!question.allowNA || typeof response.justification !== 'string' || !response.justification.trim()) {
                    fail('N/A requires permission and a justification: ' + question.id);
                }
                excluded.push({ questionId: question.id, reason: 'na' });
                continue;
            }
            if (typeof response.value !== 'string' || !has(question.options, response.value)) {
                fail('Invalid answer: ' + question.id);
            }
            if (question.evidenceRequired) {
                if (!Array.isArray(response.evidence) || response.evidence.length === 0) {
                    fail('Evidence required: ' + question.id);
                }
                for (var e = 0; e < response.evidence.length; e++) {
                    if (typeof response.evidence[e] !== 'string' || !/^[a-f0-9]{32}$/.test(response.evidence[e])) {
                        fail('Invalid evidence identifier: ' + question.id);
                    }
                }
            }
            var risk = question.options[response.value];
            numerator += question.weight * risk;
            denominator += question.weight;
            if (risk > 0 && question.createsFinding !== false) {
                findings.push({ questionId: question.id, risk: risk, weight: question.weight, critical: question.critical });
            }
            // Any non-zero risk on a critical control blocks approval, even if the average is low.
            if (question.critical && risk > 0) { criticalFailed = true; }
        }
        if (!denominator) { fail('At least one applicable question must be scored'); }
        // Round upward, so a displayed boundary score cannot understate approval risk.
        var total = Math.max(0, Math.min(100, Math.ceil((numerator / denominator) * 100 - 0.000000001) / 100));
        var failed = criticalFailed || total >= template.failThreshold;
        return {
            questionnaireCode: template.code,
            questionnaireVersion: template.version,
            score: total,
            band: total < 30 ? 'low' : total < 60 ? 'medium' : total < 80 ? 'high' : 'critical',
            status: failed ? 'failed' : 'passed',
            criticalFailed: criticalFailed,
            failThreshold: template.failThreshold,
            findings: findings,
            excluded: excluded
        };
    }

    function approvalGate(input) {
        if (!input || !input.vendorId || !input.approverId || !input.requesterId) {
            fail('Vendor, requester and approver identities are required');
        }
        var now = date(input.now, 'Current time');
        var reasons = [];
        var assessment = input.assessment;
        if (input.approverId === input.requesterId) { reasons.push('self_approval'); }
        if (!assessment) {
            reasons.push('assessment_missing');
        } else {
            if (assessment.vendorId !== input.vendorId) { reasons.push('vendor_mismatch'); }
            if (assessment.latest !== true) { reasons.push('assessment_superseded'); }
            if (assessment.status !== 'passed' || assessment.criticalFailed !== false) { reasons.push('assessment_failed_or_unscored'); }
            if (typeof assessment.score !== 'number' || !isFinite(assessment.score) || assessment.score < 0 ||
                    assessment.score > 100 || typeof assessment.failThreshold !== 'number' ||
                    !isFinite(assessment.failThreshold) || assessment.failThreshold <= 0 || assessment.failThreshold > 100 ||
                    assessment.score >= assessment.failThreshold) { reasons.push('invalid_or_failing_score'); }
            if (assessment.evidenceVerified !== true) { reasons.push('evidence_unverified'); }
            if (date(assessment.expiresAt, 'Assessment expiry') <= now) { reasons.push('assessment_expired'); }
        }
        if (!Array.isArray(input.findings)) { fail('Findings must be supplied from the database'); }
        for (var i = 0; i < input.findings.length; i++) {
            var finding = input.findings[i];
            if (!finding || typeof finding.id !== 'string' || !finding.id || typeof finding.critical !== 'boolean' ||
                    typeof finding.ownerId !== 'string' || !finding.ownerId) {
                fail('Invalid finding');
            }
            if (finding.state === 'closed_verified' && finding.verifiedBy && finding.verifiedBy !== finding.ownerId) { continue; }
            var exception = finding.exception;
            if (!finding.critical && exception && exception.state === 'approved' &&
                    exception.findingId === finding.id && exception.approvedBy && exception.requestedBy &&
                    exception.approvedBy !== exception.requestedBy &&
                    date(exception.expiresAt, 'Exception expiry') > now) { continue; }
            reasons.push('unresolved_finding:' + finding.id);
        }
        return { allowed: reasons.length === 0, reasons: reasons };
    }

    return { validateQuestionnaire: validateQuestionnaire, score: score, approvalGate: approvalGate };
}
