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

Use Node.js 22, npm, Git, and your own authorized ServiceNow development instance. The application was tested on a Brazil PDI; compatibility with other releases has not been verified. Your account needs permission to install scoped applications and configure their metadata. Live acceptance also needs permission to create synthetic users and assign their roles.

Clone and run the local checks first. These commands do not need ServiceNow credentials or connect to the original PDI:

```powershell
git clone https://github.com/Reddy4599/servicenow-vendor-risk.git
cd servicenow-vendor-risk
npm ci
npm run generate
npm test
npm run build
```

Authenticate against **your own PDI** using the official SDK, keeping the alias expected by the deployment script:

```powershell
npx now-sdk auth --add https://YOUR-INSTANCE.service-now.com --type oauth --alias vendor-risk-pdi
```

Complete the browser sign-in and consent. Credentials stay in the SDK's local credential store, outside this repository. The alias is a local label; it contains no credentials and does not give access to the original author's PDI.

Before live testing, change `BASE` in `tools/instance-client.cjs` to your own instance URL. The deployment command selects its instance through the SDK authentication alias; the live test and cleanup tools select theirs through `BASE`. Both must refer to the same instance.

```powershell
npm run deploy
npm run test:instance
npm run release:check
npm run pack
```

Deployment writes the application into your authenticated instance. Open ServiceNow Studio and select **Vendor Risk Management**, or use the application navigation menu. The published questionnaire seed is included; use existing users with the application's roles or run the live tests to create synthetic demo personas and workflow records. Check PDI outbound email settings separately if you want to demonstrate delivery to an inbox.

Preserve `now.config.json` and `src/fluent/generated/keys.ts` for stable application and metadata IDs. Avoid reinstalling over needed instance data. The checked-in acceptance report documents the author's PDI run; `npm run test:instance` replaces it with results from your own instance. The release gate requires a matching successful report less than 24 hours old.

Live acceptance creates synthetic records, evidence, and five distinct test personas. Passwords are random, held only in memory, and excluded from reports. Records remain available for demonstrations; an administrator can impersonate the report's test usernames.

## What a public clone includes

A clone contains application source and metadata (tables, forms, ACLs, scripts, flows, reports and notifications), the questionnaire fixture, dependency versions, documentation, local/live test tools, CI configuration, and a dated synthetic acceptance report. Git also downloads the repository's committed history.

It does not contain SDK credentials, OAuth tokens, administrator passwords, test-persona passwords, browser sessions, real vendor evidence, or an export of the original PDI's vendor records and attachments. Dependencies and generated build directories are excluded from Git. The release ZIP is an application installation package with metadata and the questionnaire seed; it is not a backup of the PDI. Git cloning does not download that release asset automatically.

The original PDI hostname, application/record identifiers, and synthetic test usernames are public in source and test evidence. These are identifiers, not authentication credentials. Cloning or reading them does not authorize access to the PDI; ServiceNow still requires authentication and enforces the application's roles and ACLs. GitHub CI runs local tests and a build, without PDI credentials or automatic deployment.

Before making changes public, review staged files and build/release contents. `.gitignore` excludes `.now/`, `.env` files, credential files and build outputs, but it does not remove secrets already committed or prevent deliberate additions. Never commit real passwords, tokens or vendor evidence. The reviewed Git history and v1.0.0 release had no credential matches; this is a review result, not a guarantee against all future disclosures.

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
