import '@servicenow/sdk/global'
import { StringColumn } from '@servicenow/sdk/core'
import { Action, Flow, wfa, trigger, actionStep } from '@servicenow/sdk/automation'

export const lifecycleNotification = Action({
    $id: Now.ID['lifecycle_notification_action'],
    name: 'VRM Dispatch Lifecycle Notification',
    description: 'Validate the immutable lifecycle event, queue its assigned-person notification, and record successful flow execution.',
    access: 'package_private',
    inputs: { activity_id: StringColumn({ label: 'Lifecycle activity ID', mandatory: true }) },
    outputs: {}
}, params => {
    wfa.actionStep(actionStep.script,
        { $id: Now.ID['dispatch_notification_script'], label: 'Validate lifecycle event and notify assigned person' },
        { required_run_time: 'instance',
          script: '(function execute(inputs, outputs) { new VrmService().flowDispatch(String(inputs.activity_id)); })(inputs, outputs);',
          inputVariables: { activity_id: { label: 'Lifecycle activity ID', value: wfa.dataPill(params.inputs.activity_id, 'string') } }
        });
});

Flow({ $id: Now.ID['assessment_assignment_flow'], name: 'VRM Assessment Assignment',
    description: 'After an assessment is issued, notify its assigned assessor. The versioned questionnaire and response records already exist.', runAs: 'system' },
    wfa.trigger(trigger.record.created, { $id: Now.ID['assessment_assignment_trigger'] },
        { table: 'x_1503283_vrm_activity', condition: 'action=assessment_issued', run_flow_in: 'background' }),
    params => {
        wfa.action(lifecycleNotification, { $id: Now.ID['assessment_assignment_dispatch'], annotation: 'Notify the assessor and record flow completion' },
            { activity_id: wfa.dataPill(params.trigger.current.sys_id, 'string') });
    });

Flow({ $id: Now.ID['remediation_assignment_flow'], name: 'VRM Remediation Assignment',
    description: 'Each scoring finding creates a remediation task. This flow notifies its owner after the task is ready; approval remains blocked by server policy.', runAs: 'system' },
    wfa.trigger(trigger.record.created, { $id: Now.ID['remediation_assignment_trigger'] },
        { table: 'x_1503283_vrm_activity', condition: 'action=remediation_created', run_flow_in: 'background' }),
    params => {
        wfa.action(lifecycleNotification, { $id: Now.ID['remediation_assignment_dispatch'], annotation: 'Notify the remediation owner' },
            { activity_id: wfa.dataPill(params.trigger.current.sys_id, 'string') });
    });

Flow({ $id: Now.ID['approval_routing_flow'], name: 'VRM Independent Approval Routing',
    description: 'After the approval gate succeeds, route the pending request notification to its independent assigned approver.', runAs: 'system' },
    wfa.trigger(trigger.record.created, { $id: Now.ID['approval_routing_trigger'] },
        { table: 'x_1503283_vrm_activity', condition: 'action=approval_requested', run_flow_in: 'background' }),
    params => {
        wfa.action(lifecycleNotification, { $id: Now.ID['approval_routing_dispatch'], annotation: 'Route to the independent approver' },
            { activity_id: wfa.dataPill(params.trigger.current.sys_id, 'string') });
    });
