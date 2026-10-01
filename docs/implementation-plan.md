# Implementation and acceptance plan

## Scope and dependencies

Build a custom scoped application using platform features available on the user's PDI. Do not assume licensed third-party risk management products are installed. Inspect the PDI release, available features, company scope prefix and deployment support before generating application metadata.

## Data model

| Table | Purpose | Key safeguards |
| --- | --- | --- |
| Vendor | Business identity, internal owner, lifecycle, final approval and next review | Approved status is derived through protected server-side approval logic |
| Questionnaire version | Code, version, draft/published/retired state and question definition | Unique code/version; published versions cannot be edited |
| Assessment | Vendor, version reference, immutable question snapshot, score, validity and assessor | Unique request identity; scores and snapshots are server-owned |
| Response | Question identifier, answer, justification and evidence links | Unique assessment/question; belongs to the assessment snapshot |
| Finding | Failed control, severity, owner and verification status | One finding per assessment/control; reruns cannot duplicate findings |
| Remediation task | Finding reference, assigned owner, due date and resolution evidence | Independent verification required before closure counts toward approval |
| Risk exception | Finding, justification, requester, approver and expiry | Critical controls cannot be waived; no self-approval; expiry enforced |
| Approval request | Vendor, assessment revision, requester, approver and decision | Decision invalidated when the assessment changes or expires |

The deployed scope is `x_1503283_vrm`; tables use that scope followed by `_vendor`, `_questionnaire`, `_assessment`, `_response`, `_finding`, `_remediation`, `_exception`, `_approval`, and `_activity`. The ninth table stores immutable lifecycle and decision history and triggers Flow Designer routing.

## Roles and access

- Requester: submit vendors and view their own submissions.
- Assessor: issue questionnaires and assess vendors in their permitted work queue.
- Remediation owner: update assigned tasks and supply resolution evidence.
- Approver: decide assigned approval and exception requests; cannot approve their own requests.
- Application administrator: configure questionnaire drafts and assignments.

Enforce table, record and protected-field permissions on the server. UI visibility must not be the security boundary. Attachment authorization follows its parent record. Use synthetic demo vendors and internal test identities.

## Lifecycle

1. Submit a vendor and select an appropriate published questionnaire version.
2. Issue an assessment, copying the published questionnaire to an immutable snapshot.
3. Capture responses and attachments. Conditional questions follow the snapshot conditions.
4. Submit only complete applicable responses with verified evidence.
5. Score on the server. Create findings and remediation tasks once per failed control.
6. Block final vendor approval when assessment fails, evidence is invalid, assessment is stale or findings are unresolved.
7. Independently verify remediation. Issue a new assessment after a failed assessment; preserve the failed assessment for history.
8. Permit an independent approver to approve only a current passed assessment with resolved findings.
9. Issue a reassessment at the next review date or after a material vendor change. Approval eligibility must be recomputed.

Scores, finding status, evidence verification and latest-assessment identity are loaded from the database. Never accept these approval inputs from the browser.

## Administration features

Configured forms and related lists, actions for issue/submit/verify/approve, assignment and decision notifications, overdue reminders, exception expiry processing, reassessment scheduling, four reports, and an overview dashboard.

Use Flow Designer/Workflow Studio when supported for assignment and notification orchestration. Business Rules and Script Includes enforce safety-critical lifecycle constraints regardless of whether a Flow or direct database update initiated the request.

## Instance acceptance tests

| Scenario | Required outcome |
| --- | --- |
| Complete, low-risk questionnaire | Passed score and eligible approval request |
| Critical control fails despite low average | Failed assessment, finding/task created, final approval blocked |
| Aggregate equals configured threshold | Failed assessment |
| Repeated scoring or retry | No duplicate finding, task or approval |
| Conditional answer changes | Newly visible answers required; hidden responses excluded |
| Missing or unrelated attachment | Submission rejected |
| Published questionnaire is edited | Change rejected; new version required |
| New version is published | Existing assessment retains original questions and score |
| Remediation owner verifies own task | Verification rejected |
| Failed assessment is fully remediated | Approval stays blocked until reassessment passes |
| Valid noncritical exception | Finding condition satisfied only during approved validity period |
| Critical, expired or self-approved exception | Approval remains blocked |
| Requester approves own vendor | Rejected |
| Requester edits score or approved status via form/API | Rejected |
| Unauthorized user accesses another vendor or attachment | Denied |
| New assessment supersedes previous assessment | Old pending approval cannot approve vendor |
| Assessment expires | Vendor cannot receive final approval using the expired assessment |
| Reminder job runs twice in the same interval | No duplicate reminder |
| Scheduled reassessment runs | One new assessment created per review period |

## Release gate

Run local tests and metadata build. Install in the PDI, verify forms and full lifecycle, run authorization tests using nonadmin identities, and preserve instance test results. Only then commit and push the reviewed application to GitHub. Include an installation guide, demo instructions and test evidence in the final repository.
