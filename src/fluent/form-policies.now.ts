import '@servicenow/sdk/global'
import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({ $id: Now.ID['resolution_required_policy'], table: 'x_1503283_vrm_remediation',
    shortDescription: 'Require resolution details before submitting remediation for verification',
    conditions: 'state=resolved', onLoad: true, reverseIfFalse: true,
    actions: [{ field: 'resolution', mandatory: true }] });

UiPolicy({ $id: Now.ID['na_justification_policy'], table: 'x_1503283_vrm_response',
    shortDescription: 'Require justification for an allowed N/A answer',
    conditions: 'answer=na', onLoad: true, reverseIfFalse: true,
    actions: [{ field: 'justification', mandatory: true }] });

UiPolicy({ $id: Now.ID['critical_exception_policy'], table: 'x_1503283_vrm_finding',
    shortDescription: 'Critical findings cannot request risk exceptions',
    conditions: 'critical=true', onLoad: true, reverseIfFalse: true,
    actions: [{ field: 'exception_reason', visible: false }, { field: 'exception_until', visible: false }] });
