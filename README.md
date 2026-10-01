# Vendor Risk Assessment and Remediation Management

A native ServiceNow scoped application demonstrating CSA and CAD skills: vendor onboarding, versioned questionnaires, evidence, weighted scoring, independent remediation verification, risk exceptions, final approval, and periodic reassessment.

Scope: `x_1503283_vrm`. Developed with the official ServiceNow SDK 4.13.3 on a Brazil PDI. Platform records are deployed into ServiceNow and available in Studio, native forms, and Flow Designer. Live acceptance evidence is recorded in `test-results/instance-tests.json`; a local build alone does not establish instance acceptance.

## Skills demonstrated

| Area | Implementation |
| --- | --- |
| CSA | Nine tables, fields, choices, numbering, references, forms, related lists, application navigation, six roles, record/field ACLs, UI policies, notifications, scheduled jobs, four reports, overview dashboard |
| CAD | Scoped application, Script Includes, scoring, conditional questions, immutable snapshots, business rules, client script, UI actions, Scripted REST API, attachment validation, idempotent actions, policy and instance tests |
| Flow Designer | Assessment Assignment, Remediation Assignment, and Independent Approval Routing record-triggered flows; reusable custom action with a server script step |

Flow Designer routes notifications after lifecycle records are created. Synchronous server policy creates remediation tasks and enforces approval conditions through form and API actions. Flows consume immutable activity records and record successful processing, verified by live tests.

## Workflow

1. Requester creates a vendor; application administrator assigns assessor, remediation owner, and independent approver.
2. Assessor issues a published questionnaire. Its definition is copied into an immutable assessment snapshot with individual response records.
3. Assessor answers applicable questions and attaches evidence to required responses. Conditional questions follow snapshot rules.
4. Submission calculates risk and creates findings/tasks. Critical failures fail the assessment regardless of its average score.
5. Owner attaches resolution evidence and marks a task Resolved. An independent assessor verifies it. Critical findings cannot receive exceptions.
6. A failed assessment requires a new passing assessment after correction. Noncritical findings on a passing assessment can have an independently approved, unexpired exception.
7. Approval requirements are rechecked both when requesting approval and at decision time. Reassessment invalidates older pending approvals. Requesters cannot approve their own vendors.
8. Daily maintenance sends deduplicated overdue reminders, expires exceptions, and issues due reassessments.

Risk ranges from 0 (safest) to 100 (highest). The seed fails at 60 or any nonzero critical-control risk. N/A requires explicit configuration and justification; critical controls prohibit N/A. Hidden questions do not affect scoring. The instance validates actual nonempty attachments belonging to the correct records.

## Install and verify

Requires a supported Node.js runtime, npm, and an authorized development instance. Use official SDK authentication; credentials stay in its local credential store.

```powershell
npm ci
npx now-sdk auth --help
# Authenticate and save an alias named vendor-risk-pdi.
# Change tools/instance-client.cjs BASE for another development instance.
npm run generate
npm test
npm run build
npm run deploy
npm run test:instance
npm run release:check
npm run pack
```

Preserve `now.config.json` and `src/fluent/generated/keys.ts` for stable application and metadata IDs. Avoid reinstalling over needed instance data.

Live acceptance creates synthetic records, evidence, and five distinct test personas. Passwords are random, held only in memory, and excluded from reports. Records remain available for demonstrations; an administrator can impersonate the report's test usernames.

## Demonstrate the application

Open **Vendor Risk Management → Overview**, then Vendors, Assessments, Remediation, and Pending Approvals. Follow the related lists and form actions. Open Flow Designer and filter by `VRM` to inspect its flows and reusable action. See [the demo guide](docs/demo-guide.md).

## Source and validation

- `src/fluent/`: platform metadata, security, forms, flows, stable IDs.
- `src/server/`: actual policy and instance adapter, REST router, dashboard.
- `tools/generate-metadata.cjs`: generator for `application.now.ts`.
- `tests/policy.test.cjs`: tests execute the actual policy Script Include source.
- `tools/test-instance.cjs`: live workflow, permissions, attachment, and Flow Designer tests.
- `test-results/instance-tests.json`: dated acceptance evidence with a source fingerprint.

GitHub CI runs local policy tests and a metadata build. Live PDI acceptance uses local authorized credentials. The release gate rejects missing, failed, incomplete, or stale acceptance results. No tokens, passwords, or real vendor evidence belong in Git.

## Operational limits

This portfolio application targets development instances. PDI outbound email settings determine actual delivery; tests verify notification configuration and lifecycle flow processing with synthetic recipients. Production adoption requires organization-specific controls and operational review.

Reference: [Official ServiceNow SDK](https://servicenow.github.io/sdk/).
