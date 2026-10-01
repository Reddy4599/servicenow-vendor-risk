# CSA and CAD demonstration guide

## Open the native application

On the development instance, find **Vendor Risk Management** in All navigation. Overview is for application administrators; operational modules use record-level permissions. In ServiceNow Studio, open the scoped application to inspect its application files. In Flow Designer / Workflow Studio, filter by `VRM` to inspect the three flows and their reusable custom action.

Use the test personas listed in `test-results/instance-tests.json` through administrator impersonation. Requester, assessor, remediation owner, approver, and outsider are distinct users. Their random test passwords are intentionally not saved. Stop impersonation to return to administrator configuration.

## Demonstrate the failed-assessment approval block

1. As requester, create a synthetic vendor with a name and description.
2. As administrator, assign three distinct users as assessor, remediation owner, and approver. The approver must differ from the requester.
3. As assessor, open the vendor and select **Issue Assessment**. Open its assessment related list, then the assessment's response list.
4. Answer Sensitive data = Yes. Encryption becomes applicable. Select Encryption = No, Access review = Quarterly, Recovery test = Yes, and Subprocessors = No. Attach nonempty evidence files to encryption, access review, and recovery responses.
5. Select **Submit and Score** on the assessment. It fails because encryption is critical. Show the finding, assigned remediation task, and Flow Designer execution. **Request Approval** reports the unmet requirements.
6. As remediation owner, open the task, enter resolution details, attach evidence, and save state = Resolved. Show that the owner cannot verify their own remediation.
7. As assessor, select **Verify Remediation**. Approval is still blocked because the latest assessment failed.
8. Issue another assessment from the vendor. Answer all controls safely and attach fresh evidence. Submit it, then request approval.
9. As the assigned approver, select **Approve Vendor** on the pending approval. Show approved status, decision history, and next review date.

## Additional features to present

- Change a parent answer and show conditional questions becoming applicable/inapplicable. Required evidence is checked on submission.
- Open the published questionnaire; demonstrate it cannot be edited. Create a new version with matching JSON code/version. Existing snapshots retain their original definitions.
- For a noncritical finding on a passing assessment, enter exception reason and expiry on the finding, save, then select **Request Exception**. Its assigned independent approver decides. Expired exceptions block approval even before scheduled maintenance runs.
- Show record and field ACLs with the outsider persona and requester attempting to change reviewer assignments or scores.
- Show the resolution and N/A UI policies, response client script, form actions, four report definitions, notifications, and daily scheduled maintenance.
- In Studio, explain the policy Script Include, ServiceNow adapter, before business rules, protected fields, and authenticated Scripted REST API. Show the local and live test evidence in GitHub.

## Questionnaire JSON

Copy the seed fixture into a new draft questionnaire's Definition JSON. Its `code` and `version` must match the corresponding form fields. Every question declares explicit flags, positive weight, answer-option risk values, and optional conditions referencing an earlier question. Published records are immutable. The Issue Assessment form action selects the highest published version; the API can select a specific questionnaire ID.

## Email and testing

Test records and attachments are synthetic. Notifications are configured, but actual delivery depends on the PDI outbound-email setup. Flow completion is independently verified through lifecycle records; email inbox delivery is not represented as a completed test.
