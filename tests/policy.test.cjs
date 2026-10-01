const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../src/server/VrmPolicy.js'), 'utf8');
const sandbox = vm.createContext({});
vm.runInContext(source, sandbox);
const policy = sandbox.VrmPolicy();
const fixture = require('../fixtures/security-questionnaire-v1.json');
const clone = x => JSON.parse(JSON.stringify(x));
const evidence = ['a'.repeat(32)];
const answers = () => ({
    sensitive_data: { value: 'yes' },
    encryption: { value: 'yes', evidence },
    access_review: { value: 'quarterly', evidence },
    recovery_test: { value: 'yes', evidence },
    subprocessors: { value: 'no' }
});
const gate = () => ({
    vendorId: 'vendor-a', requesterId: 'requester', approverId: 'approver',
    now: '2026-10-01T00:00:00Z',
    assessment: {
        vendorId: 'vendor-a', latest: true, status: 'passed', score: 10,
        criticalFailed: false, failThreshold: 60, evidenceVerified: true,
        expiresAt: '2027-10-01T00:00:00Z'
    },
    findings: []
});
const question = (id, options, extra = {}) => ({
    id, text: id, options, weight: 1, critical: false, allowNA: false, evidenceRequired: false, ...extra
});
const template = questions => ({ code: 'test_template', version: 1, failThreshold: 60, questions });

test('valid questionnaire and complete low-risk responses pass', () => {
    assert.equal(policy.validateQuestionnaire(fixture), true);
    const result = policy.score(fixture, answers());
    assert.equal(result.status, 'passed');
    assert.equal(result.score, 1.54);
    assert.equal(result.questionnaireVersion, 1);
    assert.equal(result.findings.length, 0);
});
test('weighted average respects control weights', () => {
    const t = template([question('one', { yes: 0, no: 100 }, { weight: 3 }), question('two', { yes: 0, no: 100 })]);
    assert.equal(policy.score(t, { one: { value: 'no' }, two: { value: 'yes' } }).score, 75);
});
test('a critical control failure blocks even a low aggregate score', () => {
    const a = answers(); a.encryption.value = 'partial';
    const result = policy.score(fixture, a);
    assert.equal(result.status, 'failed');
    assert.equal(result.criticalFailed, true);
    assert.ok(result.score < 60);
});
test('failure threshold is inclusive', () => {
    const t = template([question('one', { yes: 0, partial: 60, no: 100 })]);
    assert.equal(policy.score(t, { one: { value: 'partial' } }).status, 'failed');
});
test('conditional questions disappear from scoring denominator', () => {
    const a = answers(); a.sensitive_data.value = 'no'; delete a.encryption;
    assert.equal(policy.score(fixture, a).score, 0);
});
test('stale answers to hidden questions cannot affect scoring', () => {
    const a = answers(); a.sensitive_data.value = 'no'; a.encryption.value = 'no';
    assert.equal(policy.score(fixture, a).criticalFailed, false);
});
test('newly visible conditional questions must be answered', () => {
    const a = answers(); a.subprocessors.value = 'yes';
    assert.throws(() => policy.score(fixture, a), /Missing answer: subprocessor_review/);
});
test('a child of an inactive conditional parent stays inactive', () => {
    const t = template([
        question('one', { yes: 0, no: 100 }),
        question('two', { yes: 0, no: 100 }, { condition: { questionId: 'one', values: ['yes'] } }),
        question('three', { yes: 0, no: 100 }, { condition: { questionId: 'two', values: ['yes'] } })
    ]);
    assert.equal(policy.score(t, { one: { value: 'no' }, two: { value: 'yes' } }).score, 100);
});
test('missing evidence rejects submission', () => {
    const a = answers(); delete a.encryption.evidence;
    assert.throws(() => policy.score(fixture, a), /Evidence required/);
});
test('malformed attachment identifiers reject submission', () => {
    const a = answers(); a.encryption.evidence = ['https://example.test/evidence'];
    assert.throws(() => policy.score(fixture, a), /Invalid evidence identifier/);
});
test('unknown answer and unknown question identifiers reject submission', () => {
    const a = answers(); a.encryption.value = 'invented';
    assert.throws(() => policy.score(fixture, a), /Invalid answer/);
    const b = answers(); b.injected_question = { value: 'yes' };
    assert.throws(() => policy.score(fixture, b), /Unknown response/);
});
test('inherited properties cannot stand in for answers', () => {
    assert.throws(() => policy.score(fixture, Object.create(answers())), /Missing answer/);
});
test('negative, zero and non-finite weights are rejected', () => {
    for (const weight of [-1, 0, NaN, Infinity, '5']) {
        const t = clone(fixture); t.questions[0].weight = weight;
        assert.throws(() => policy.validateQuestionnaire(t), /Question weight/);
    }
});
test('duplicate question identifiers are rejected', () => {
    const t = clone(fixture); t.questions[1].id = t.questions[0].id;
    assert.throws(() => policy.validateQuestionnaire(t), /unique/);
});
test('future references and conditional cycles are rejected', () => {
    const t = clone(fixture); t.questions[0].condition = { questionId: 'encryption', values: ['yes'] };
    assert.throws(() => policy.validateQuestionnaire(t), /earlier question/);
});
test('unknown conditional options are rejected', () => {
    const t = clone(fixture); t.questions[1].condition.values = ['invented'];
    assert.throws(() => policy.validateQuestionnaire(t), /Unknown conditional option/);
});
test('N/A requires explicit permission and a reason', () => {
    const t = template([question('one', { yes: 0, no: 100 }, { allowNA: true }), question('two', { yes: 0, no: 100 })]);
    const a = { one: { value: 'na', justification: 'Service does not use this control' }, two: { value: 'yes' } };
    assert.equal(policy.score(t, a).score, 0);
    delete a.one.justification;
    assert.throws(() => policy.score(t, a), /justification/);
});
test('N/A cannot waive a critical control', () => {
    const t = clone(fixture); t.questions[1].allowNA = true;
    assert.throws(() => policy.validateQuestionnaire(t), /Critical questions/);
});
test('an entirely unscored assessment is rejected', () => {
    const t = template([question('one', { yes: 0, no: 100 }, { allowNA: true })]);
    assert.throws(() => policy.score(t, { one: { value: 'na', justification: 'Not applicable' } }), /must be scored/);
});
test('questionnaire edits do not change an earlier stored snapshot', () => {
    const snapshot = clone(fixture); const next = clone(fixture); next.version = 2;
    next.questions[0].options.yes = 100;
    assert.equal(policy.score(snapshot, answers()).score, 1.54);
    assert.equal(policy.score(next, answers()).score, 7.7);
    assert.equal(snapshot.version, 1);
});
test('scoring does not mutate answers or the questionnaire', () => {
    const t = clone(fixture); const a = answers();
    const before = JSON.stringify({ t, a }); policy.score(t, a);
    assert.equal(JSON.stringify({ t, a }), before);
});
test('approval succeeds with current, passed, evidence-verified assessment', () => {
    assert.equal(policy.approvalGate(gate()).allowed, true);
});
test('approval fails without an assessment', () => {
    const g = gate(); delete g.assessment;
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('failed, unscored and critical-failed assessments cannot be approved', () => {
    for (const status of ['failed', 'draft', 'submitted']) {
        const g = gate(); g.assessment.status = status;
        assert.equal(policy.approvalGate(g).allowed, false);
    }
    const g = gate(); g.assessment.criticalFailed = true;
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('passing status cannot disguise an invalid or failing numeric score', () => {
    for (const score of [60, 100, -1, NaN, Infinity, '10']) {
        const g = gate(); g.assessment.score = score;
        assert.equal(policy.approvalGate(g).allowed, false);
    }
});
test('assessment for a different vendor cannot authorize approval', () => {
    const g = gate(); g.assessment.vendorId = 'vendor-b';
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('superseded assessment cannot authorize approval', () => {
    const g = gate(); g.assessment.latest = false;
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('expiry is enforced at the exact timestamp boundary', () => {
    const g = gate(); g.assessment.expiresAt = g.now;
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('unverified attachments cannot authorize approval', () => {
    const g = gate(); g.assessment.evidenceVerified = false;
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('requesters cannot approve their own vendor', () => {
    const g = gate(); g.approverId = g.requesterId;
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('open remediation blocks approval', () => {
    const g = gate(); g.findings = [{ id: 'finding-a', critical: false, state: 'open', ownerId: 'owner' }];
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('closed remediation needs independent verification', () => {
    const g = gate(); g.findings = [{ id: 'finding-a', critical: false, state: 'closed_verified', ownerId: 'owner', verifiedBy: 'owner' }];
    assert.equal(policy.approvalGate(g).allowed, false);
    g.findings[0].verifiedBy = 'reviewer';
    assert.equal(policy.approvalGate(g).allowed, true);
});
test('valid independently approved noncritical exception can resolve a finding', () => {
    const g = gate(); g.findings = [{
        id: 'finding-a', critical: false, state: 'open', ownerId: 'owner',
        exception: { state: 'approved', findingId: 'finding-a', approvedBy: 'reviewer', requestedBy: 'owner', expiresAt: '2026-11-01T00:00:00Z' }
    }];
    assert.equal(policy.approvalGate(g).allowed, true);
});
test('critical findings cannot be waived by an exception', () => {
    const g = gate(); g.findings = [{
        id: 'finding-a', critical: true, state: 'open', ownerId: 'owner',
        exception: { state: 'approved', findingId: 'finding-a', approvedBy: 'reviewer', requestedBy: 'owner', expiresAt: '2026-11-01T00:00:00Z' }
    }];
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('expired, self-approved or unrelated exceptions cannot resolve a finding', () => {
    for (const override of [
        { expiresAt: '2026-10-01T00:00:00Z' }, { approvedBy: 'owner' }, { findingId: 'finding-b' }, { state: 'requested' }
    ]) {
        const g = gate(); g.findings = [{
            id: 'finding-a', critical: false, state: 'open', ownerId: 'owner',
            exception: { state: 'approved', findingId: 'finding-a', approvedBy: 'reviewer', requestedBy: 'owner', expiresAt: '2026-11-01T00:00:00Z', ...override }
        }];
        assert.equal(policy.approvalGate(g).allowed, false);
    }
});
test('exceptions never change a failed assessment to passed', () => {
    const g = gate(); g.assessment.status = 'failed';
    g.findings = [{ id: 'finding-a', critical: false, state: 'closed_verified', ownerId: 'owner', verifiedBy: 'reviewer' }];
    assert.equal(policy.approvalGate(g).allowed, false);
});
test('bad and ambiguous dates fail closed', () => {
    for (const now of ['tomorrow', '2026-02-30T00:00:00Z', '2026-10-01', null, '2026-10-01T00:00:00+05:30']) {
        const g = gate(); g.now = now;
        assert.throws(() => policy.approvalGate(g), /timestamp|calendar date/);
    }
});
test('findings cannot be omitted from the approval decision', () => {
    const g = gate(); delete g.findings;
    assert.throws(() => policy.approvalGate(g), /Findings/);
});
test('questionnaire versions must be finite positive integers', () => {
    for (const version of [0, -1, 1.5, NaN, Infinity, '1']) {
        const t = clone(fixture); t.version = version;
        assert.throws(() => policy.validateQuestionnaire(t), /positive integer version/);
    }
});
test('unowned findings cannot be treated as independently verified', () => {
    const g = gate(); g.findings = [{ id: 'finding-a', critical: false, state: 'closed_verified', verifiedBy: 'reviewer' }];
    assert.throws(() => policy.approvalGate(g), /Invalid finding/);
});
