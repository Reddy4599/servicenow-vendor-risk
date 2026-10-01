import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    activity_action_write: {
                        table: 'sys_security_acl'
                        id: '34e6da57050b4c1dbaedbb580ca89a1d'
                    }
                    activity_actor_write: {
                        table: 'sys_security_acl'
                        id: '994b7fcf14e0431e859808d8d3769c20'
                    }
                    activity_assessment_write: {
                        table: 'sys_security_acl'
                        id: '148ccefe2e824a268ee4ac8502ebb9d5'
                    }
                    activity_create: {
                        table: 'sys_security_acl'
                        id: '64908fc1acda446aae8982da97eb4e30'
                    }
                    activity_delete: {
                        table: 'sys_security_acl'
                        id: '75154e1c202e4f2593e1532a432a54d9'
                    }
                    activity_details_write: {
                        table: 'sys_security_acl'
                        id: '7a3f3c04472d42379ce4e311856b833f'
                    }
                    activity_flow_processed_write: {
                        table: 'sys_security_acl'
                        id: '2b06b21b129f4c6cbe9af2b84827e5cc'
                    }
                    activity_guard: {
                        table: 'sys_script'
                        id: '4a60a91f75ff4b9092cdba9c8663cc1c'
                    }
                    activity_occurred_at_write: {
                        table: 'sys_security_acl'
                        id: 'e6a3056c47e145928b867c2408ce5776'
                    }
                    activity_read: {
                        table: 'sys_security_acl'
                        id: '5eae3777d90a41e3b5a66945653465ae'
                    }
                    activity_report: {
                        table: 'sys_security_acl'
                        id: '3bde403efa234b6b87ef31ff7033b30a'
                    }
                    activity_vendor_write: {
                        table: 'sys_security_acl'
                        id: 'e7933c9ee0c5478c84ed8f3959672b7a'
                    }
                    activity_write: {
                        table: 'sys_security_acl'
                        id: '27eac8ec6d59495aa9e2bfd8c4266a41'
                    }
                    approval_approver_write: {
                        table: 'sys_security_acl'
                        id: '99c2da55cca44f8ea6d1c386f98fdab4'
                    }
                    approval_assessment_write: {
                        table: 'sys_security_acl'
                        id: 'cfce7a3c5da348919dfbaab82bdf9fe9'
                    }
                    approval_create: {
                        table: 'sys_security_acl'
                        id: '6717f8f1b29d41eabefed941aa55337a'
                    }
                    approval_decided_by_write: {
                        table: 'sys_security_acl'
                        id: 'a1de8b1f5cc24286afe3b6fac4940f98'
                    }
                    approval_decision_notes_write: {
                        table: 'sys_security_acl'
                        id: '311a24e17341447e88ed8970e322a549'
                    }
                    approval_delete: {
                        table: 'sys_security_acl'
                        id: '269faca67a9941b8a6b07c63c8970895'
                    }
                    approval_guard: {
                        table: 'sys_script'
                        id: '181b26a5f6ce4982891404221e0e6594'
                    }
                    approval_number_write: {
                        table: 'sys_security_acl'
                        id: 'a4a7c5a543bd42bdb95cfd67bdd1098a'
                    }
                    approval_read: {
                        table: 'sys_security_acl'
                        id: '1a925c7e9c8c44ee923ba605271ac6f6'
                    }
                    approval_report: {
                        table: 'sys_security_acl'
                        id: '01cca2306e6d466db5cd101cceddaeb7'
                    }
                    approval_requested_by_write: {
                        table: 'sys_security_acl'
                        id: '738a8eceec014c7797f22cc2b07a3a42'
                    }
                    approval_routing_dispatch: {
                        table: 'sys_hub_action_instance_v2'
                        id: '1104bc7d5c3d4e67b7fbfcfbd0bc4d11'
                    }
                    approval_routing_flow: {
                        table: 'sys_hub_flow'
                        id: '7d68467d3327416f80ae447cf07cd48b'
                    }
                    approval_routing_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '52376d59fe474bf09f118d8c05ad08e1'
                    }
                    approval_state_write: {
                        table: 'sys_security_acl'
                        id: 'edcc4ed46c944edd9887d28d70bde6df'
                    }
                    approval_vendor_write: {
                        table: 'sys_security_acl'
                        id: 'da3d3c1cce2c47608a72c49768c8ce1c'
                    }
                    approval_write: {
                        table: 'sys_security_acl'
                        id: 'fda0948143264f3faec82e234f2603f3'
                    }
                    approve_exception: {
                        table: 'sys_ui_action'
                        id: '20a1c954c26a41678f0c778d80c65a38'
                    }
                    approve_vendor: {
                        table: 'sys_ui_action'
                        id: '1774cdc573f040009630dec599b3523c'
                    }
                    assessment_assessor_write: {
                        table: 'sys_security_acl'
                        id: 'ef615ea3d101491ba5567f319132ae87'
                    }
                    assessment_assignment_dispatch: {
                        table: 'sys_hub_action_instance_v2'
                        id: '186d33eeb5d748ccb9fdbcec5e212dab'
                    }
                    assessment_assignment_flow: {
                        table: 'sys_hub_flow'
                        id: 'caae0fd7ab7f419d99854b66aaa04414'
                    }
                    assessment_assignment_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '4507d7bf08aa49d1ab7525c1a0da8dd2'
                    }
                    assessment_create: {
                        table: 'sys_security_acl'
                        id: 'fee5ae0e122c47be9eeccc04ac87afa8'
                    }
                    assessment_critical_failed_write: {
                        table: 'sys_security_acl'
                        id: '946944c4f9444327807c0faea91934d4'
                    }
                    assessment_delete: {
                        table: 'sys_security_acl'
                        id: 'f505d2c02eb04408931f71e5883bbc4c'
                    }
                    assessment_guard: {
                        table: 'sys_script'
                        id: '7839dc0e099b487d9aa39a936a1bbdb1'
                    }
                    assessment_number_write: {
                        table: 'sys_security_acl'
                        id: 'bbcbb06452174585a6d5f08d9f417312'
                    }
                    assessment_questionnaire_write: {
                        table: 'sys_security_acl'
                        id: 'cdc0a051db96455eaef516956e435fd2'
                    }
                    assessment_read: {
                        table: 'sys_security_acl'
                        id: 'a34ae4fea6cb4f029d0b0b83ea8f5200'
                    }
                    assessment_related_0: {
                        table: 'sys_ui_related_list_entry'
                        id: 'dc13431018224eabaa297596fa7010e6'
                    }
                    assessment_related_1: {
                        table: 'sys_ui_related_list_entry'
                        id: '18f137c056c64fa7a79f490e8d962d08'
                    }
                    assessment_report: {
                        table: 'sys_security_acl'
                        id: '4178615e48fd41f6b3b1c47902a59f54'
                    }
                    assessment_request_key_write: {
                        table: 'sys_security_acl'
                        id: '40f5287d9ec546688fb0f23b337034a3'
                    }
                    assessment_risk_band_write: {
                        table: 'sys_security_acl'
                        id: '822fdf0c21374a89bc5e28aedad3196a'
                    }
                    assessment_score_write: {
                        table: 'sys_security_acl'
                        id: '174d44c4acf741679aea98d6f13ffafe'
                    }
                    assessment_snapshot_json_write: {
                        table: 'sys_security_acl'
                        id: '6fe75c7b8ca1408da1912cdc72353e9f'
                    }
                    assessment_state_write: {
                        table: 'sys_security_acl'
                        id: '8bb7c970fbfb40009db9528f67809fcb'
                    }
                    assessment_submitted_at_write: {
                        table: 'sys_security_acl'
                        id: 'e119115a79c64ab8a71e15d88963a4d6'
                    }
                    assessment_valid_until_write: {
                        table: 'sys_security_acl'
                        id: '0b5b5888866840a6ace1a3f5cd7a59f1'
                    }
                    assessment_vendor_write: {
                        table: 'sys_security_acl'
                        id: '6ba1a58b65b8467bb78c63ec852006c8'
                    }
                    assessment_write: {
                        table: 'sys_security_acl'
                        id: 'dc18994ac8734aab8e27a1bc6941a2bd'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '148e81b14bd44781bef14490e90832f7'
                    }
                    daily_maintenance: {
                        table: 'sysauto_script'
                        id: '8fc2817699374061ae636461ac14145d'
                    }
                    dispatch_notification_script: {
                        table: 'sys_hub_step_instance'
                        id: '61c1f47370de48fa9c7980824a0204b7'
                    }
                    event_approval_requested: {
                        table: 'sysevent_register'
                        id: '396e7e25498c4fdb9fdec861b0b16ba1'
                    }
                    event_assessment_assigned: {
                        table: 'sysevent_register'
                        id: '5b5b4d8024da41e58d66fc422790afd1'
                    }
                    event_exception_requested: {
                        table: 'sysevent_register'
                        id: 'e66c361f5a024b568985e1ef6fff46b0'
                    }
                    event_remediation_assigned: {
                        table: 'sysevent_register'
                        id: '186eb0cf291d4d669eee0b8cdb8ab832'
                    }
                    event_remediation_overdue: {
                        table: 'sysevent_register'
                        id: 'de383dfe472c46f1aad53f652dfd7dc3'
                    }
                    event_vendor_decision: {
                        table: 'sysevent_register'
                        id: '314df1d6da114a848744a9480d62a7f8'
                    }
                    exception_approver_write: {
                        table: 'sys_security_acl'
                        id: '454f38682a0f4379b0ec47e4bd16d626'
                    }
                    exception_create: {
                        table: 'sys_security_acl'
                        id: 'f62af2e7c5ac4da4b9b57e3ce52bcf02'
                    }
                    exception_decided_by_write: {
                        table: 'sys_security_acl'
                        id: '36b6e5f8044f441889fc090d1f8d76ab'
                    }
                    exception_delete: {
                        table: 'sys_security_acl'
                        id: '1e330658ccac4e39ace05f3f4f8b4e33'
                    }
                    exception_expires_at_write: {
                        table: 'sys_security_acl'
                        id: 'ce711f86c8834fa0a316d0112987ab55'
                    }
                    exception_finding_write: {
                        table: 'sys_security_acl'
                        id: '85317801257b4c0abdaaff0a8cb693ae'
                    }
                    exception_guard: {
                        table: 'sys_script'
                        id: 'f58a1cf7574a49b99782b4454af87942'
                    }
                    exception_justification_write: {
                        table: 'sys_security_acl'
                        id: '86a8bd34bf34488380b25c3f1dd43fee'
                    }
                    exception_number_write: {
                        table: 'sys_security_acl'
                        id: '217a90181c36494786e2280d168b90cb'
                    }
                    exception_read: {
                        table: 'sys_security_acl'
                        id: '71185217b08c48d6bfd54268a2afbe1c'
                    }
                    exception_report: {
                        table: 'sys_security_acl'
                        id: '2a5fc6040b114802a8640d8af09e6420'
                    }
                    exception_requested_by_write: {
                        table: 'sys_security_acl'
                        id: '43542a7285d84d4e9103aa500d874202'
                    }
                    exception_state_write: {
                        table: 'sys_security_acl'
                        id: '1d0d3e1a9d484395bad48434db994907'
                    }
                    exception_vendor_write: {
                        table: 'sys_security_acl'
                        id: 'd08ad16a0aa44e0286bdc423a2d94670'
                    }
                    exception_write: {
                        table: 'sys_security_acl'
                        id: '4f8cd40e4d034b938e335f18c2f16ca7'
                    }
                    finding_assessment_write: {
                        table: 'sys_security_acl'
                        id: '944b3d340d4f43c2b627adb8b5085730'
                    }
                    finding_create: {
                        table: 'sys_security_acl'
                        id: '49ec0b7f38bb4baba289f153ee1fb95f'
                    }
                    finding_critical_write: {
                        table: 'sys_security_acl'
                        id: '1ebf9465ed20481897934df2d534297e'
                    }
                    finding_delete: {
                        table: 'sys_security_acl'
                        id: 'e468667800bc434d922c839a01a139d0'
                    }
                    finding_exception_reason_write: {
                        table: 'sys_security_acl'
                        id: '84d6793138dd4cc3b1ba6e09fed3a849'
                    }
                    finding_exception_until_write: {
                        table: 'sys_security_acl'
                        id: '9c5943231175455a9653cf03d3efb365'
                    }
                    finding_exception_write: {
                        table: 'sys_security_acl'
                        id: 'c040c02d66724d848caf254d096c4bd6'
                    }
                    finding_guard: {
                        table: 'sys_script'
                        id: '291bb20c73764b59b9d43d07b35aa55c'
                    }
                    finding_number_write: {
                        table: 'sys_security_acl'
                        id: '94365de2424e4f7ba668027258423f30'
                    }
                    finding_owner_write: {
                        table: 'sys_security_acl'
                        id: '89c84cbf272a467097e5a834486ecf7e'
                    }
                    finding_question_id_write: {
                        table: 'sys_security_acl'
                        id: 'd931c6f14d1e462dafa758f5d2144fc5'
                    }
                    finding_read: {
                        table: 'sys_security_acl'
                        id: 'a1740c45525a4a8abd0e602d9fd30586'
                    }
                    finding_related_0: {
                        table: 'sys_ui_related_list_entry'
                        id: '32dcd4bd02d24f8f8da41eec690b60b5'
                    }
                    finding_related_1: {
                        table: 'sys_ui_related_list_entry'
                        id: 'f610d4d290e84f15853715521606d319'
                    }
                    finding_remediation_write: {
                        table: 'sys_security_acl'
                        id: 'c9f95db833b54658a12d841c688e94f1'
                    }
                    finding_report: {
                        table: 'sys_security_acl'
                        id: '4708af7daa884759830ed19f829ef9c2'
                    }
                    finding_risk_write: {
                        table: 'sys_security_acl'
                        id: 'e1ad0b122d874554b860c638888d5c8c'
                    }
                    finding_state_write: {
                        table: 'sys_security_acl'
                        id: '852a945b62af4a49847a8c14349d3cc1'
                    }
                    finding_vendor_write: {
                        table: 'sys_security_acl'
                        id: '00fcc90d526b458bbc7e49db114bff45'
                    }
                    finding_verified_by_write: {
                        table: 'sys_security_acl'
                        id: '619db702b16c4435bf2bcf4263b89ac0'
                    }
                    finding_write: {
                        table: 'sys_security_acl'
                        id: '522e07e4040349589eceddc6a37aa7bc'
                    }
                    issue_assessment: {
                        table: 'sys_ui_action'
                        id: '0f5c13caed2e4070b793111771ad7387'
                    }
                    lifecycle_notification_action: {
                        table: 'sys_hub_action_type_definition'
                        id: '248610507b7542c7a8873aea1cf59866'
                    }
                    main_menu: {
                        table: 'sys_app_application'
                        id: '530f6641a8ba4b4fa6c8324ff7ed8f54'
                    }
                    module_activity: {
                        table: 'sys_app_module'
                        id: '4c1bde116f1d415980e9ef10c750c5f2'
                    }
                    module_approval: {
                        table: 'sys_app_module'
                        id: '1d161627073e4a2ea57eb77f9715f3dd'
                    }
                    module_assessment: {
                        table: 'sys_app_module'
                        id: '52038e8d74364c0996b5766eacfb242d'
                    }
                    module_exception: {
                        table: 'sys_app_module'
                        id: 'a00c1a29200f422b8d7cac66d8693013'
                    }
                    module_finding: {
                        table: 'sys_app_module'
                        id: '52fd573c5bba4d73a2d0e90d44c8ca07'
                    }
                    module_overview: {
                        table: 'sys_app_module'
                        id: 'a0fad7869f184e078da8228ed1f44670'
                    }
                    module_questionnaire: {
                        table: 'sys_app_module'
                        id: '8b4c39e02f8c4974ac265bc4320ae281'
                    }
                    module_remediation: {
                        table: 'sys_app_module'
                        id: 'add26e1cdbe44e178672a02e9af64a20'
                    }
                    module_response: {
                        table: 'sys_app_module'
                        id: '396246769c2a4a8db4f3f33f9c8baa0f'
                    }
                    module_vendor: {
                        table: 'sys_app_module'
                        id: '4e861f9cee884304a8873295b64effbb'
                    }
                    notification_approval_requested: {
                        table: 'sysevent_email_action'
                        id: '5a312405147b43238ebd46150164789f'
                    }
                    notification_assessment_assigned: {
                        table: 'sysevent_email_action'
                        id: '6f7ad2e88c914ed0827630561bbd808c'
                    }
                    notification_exception_requested: {
                        table: 'sysevent_email_action'
                        id: 'b50df7971ba140ef8a93b8f527154cf6'
                    }
                    notification_remediation_assigned: {
                        table: 'sysevent_email_action'
                        id: '2c359506fbc94a66859b264096faa7c6'
                    }
                    notification_remediation_overdue: {
                        table: 'sysevent_email_action'
                        id: '1ec242f530544597af2ff6844dcc6de0'
                    }
                    notification_vendor_decision: {
                        table: 'sysevent_email_action'
                        id: 'cc651e0d5c604831bb198f788422eb00'
                    }
                    overview_access: {
                        table: 'sys_security_acl'
                        id: 'cb12ce17cb61458a95bed7de2175ed1d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9c7c6868f8df478093d9d041a26229da'
                    }
                    policy: {
                        table: 'sys_script_include'
                        id: '87df28b1f1a144b8b631a0cd4d0dd5ac'
                    }
                    questionnaire_code_write: {
                        table: 'sys_security_acl'
                        id: '7edea212ce8845cfb11eeb9f00eb11ea'
                    }
                    questionnaire_create: {
                        table: 'sys_security_acl'
                        id: 'e0eab78bc55f49fd8cc61c6ec7adadb8'
                    }
                    questionnaire_definition_json_write: {
                        table: 'sys_security_acl'
                        id: '2aee2c4d15324cd78052801d9f293a4f'
                    }
                    questionnaire_delete: {
                        table: 'sys_security_acl'
                        id: 'fe6d3f0ecc2a465db5ddf32c93a9af90'
                    }
                    questionnaire_guard: {
                        table: 'sys_script'
                        id: 'ebd329b335954e94a2ce112b4102bdc1'
                    }
                    questionnaire_name_write: {
                        table: 'sys_security_acl'
                        id: '53e2d9dce46e44c6853e1c5dfd34cd86'
                    }
                    questionnaire_read: {
                        table: 'sys_security_acl'
                        id: 'bed55695112e41b9b87eb57f71ab5046'
                    }
                    questionnaire_report: {
                        table: 'sys_security_acl'
                        id: '710565f0ac9440cf86cb8004ecbe4dc8'
                    }
                    questionnaire_state_write: {
                        table: 'sys_security_acl'
                        id: '95f5610e204145fd99c7289c79febb84'
                    }
                    questionnaire_version_write: {
                        table: 'sys_security_acl'
                        id: '8f8b04b451f8438b9f8afd8c70346761'
                    }
                    questionnaire_write: {
                        table: 'sys_security_acl'
                        id: 'e92387df8eca4878afb860a2d6a7a810'
                    }
                    reject_exception: {
                        table: 'sys_ui_action'
                        id: '66fb901b9aca4b0a909a7effb1dbadcd'
                    }
                    reject_vendor: {
                        table: 'sys_ui_action'
                        id: '5c0a9f0e514b45fd82e2f43d42240a36'
                    }
                    related_assessment: {
                        table: 'sys_ui_related_list'
                        id: '957d7008d75b48f6a469230eefabae8d'
                    }
                    related_finding: {
                        table: 'sys_ui_related_list'
                        id: '457efea3bd6044e2873c05d13e2aae3b'
                    }
                    related_vendor: {
                        table: 'sys_ui_related_list'
                        id: '4e11f55d30674e13906773734dabe966'
                    }
                    remediation_assigned_to_write: {
                        table: 'sys_security_acl'
                        id: '75b46e66c45d491d9ddfb8715d1856c1'
                    }
                    remediation_assignment_dispatch: {
                        table: 'sys_hub_action_instance_v2'
                        id: '49cb68be830f4ae28ef44c3cacd4d51a'
                    }
                    remediation_assignment_flow: {
                        table: 'sys_hub_flow'
                        id: '5966c31a868943f783a11726d4fb21ab'
                    }
                    remediation_assignment_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'b76fccec464f4a4a9677053303948b42'
                    }
                    remediation_create: {
                        table: 'sys_security_acl'
                        id: 'a3f8ea17479b4f6395b8cc7d0f15f70c'
                    }
                    remediation_delete: {
                        table: 'sys_security_acl'
                        id: 'd4f2e53ed91b412d834a77a202a78581'
                    }
                    remediation_due_date_write: {
                        table: 'sys_security_acl'
                        id: '10ee448e9bc040c4a33c6e1c268608c0'
                    }
                    remediation_finding_write: {
                        table: 'sys_security_acl'
                        id: '983eb4556b2a418599d248c25d72a5df'
                    }
                    remediation_guard: {
                        table: 'sys_script'
                        id: '529b29c2fa7c49fa8cb80ea28f005657'
                    }
                    remediation_last_reminder_write: {
                        table: 'sys_security_acl'
                        id: 'd60c39306162450db1f1e732d5bb95da'
                    }
                    remediation_number_write: {
                        table: 'sys_security_acl'
                        id: 'a80a1a67c10741508db401e188d2df99'
                    }
                    remediation_read: {
                        table: 'sys_security_acl'
                        id: 'ac9f0069ba8240e1820eea37c7e1a613'
                    }
                    remediation_report: {
                        table: 'sys_security_acl'
                        id: 'ced55286b7774a93a61aa742fa8d7fcb'
                    }
                    remediation_resolution_write: {
                        table: 'sys_security_acl'
                        id: '3b1e42846f2a4db7b17deb6d905bcf24'
                    }
                    remediation_short_description_write: {
                        table: 'sys_security_acl'
                        id: '1a851a5bdab941cc9dd73d4f68394989'
                    }
                    remediation_state_write: {
                        table: 'sys_security_acl'
                        id: 'ba5f7b1d4d2449cdad1b122df9858704'
                    }
                    remediation_vendor_write: {
                        table: 'sys_security_acl'
                        id: '518e6c0df4c7460ca24b71b8349f30a7'
                    }
                    remediation_verified_by_write: {
                        table: 'sys_security_acl'
                        id: '8109935a6ca44ca1b7c5955c5539feaf'
                    }
                    remediation_write: {
                        table: 'sys_security_acl'
                        id: '4c5a4d2ccc7841bcbe65acf4b6e3eefe'
                    }
                    report_findings: {
                        table: 'sys_report'
                        id: '979f10d782594235ba9f7394555085c7'
                    }
                    report_remediation: {
                        table: 'sys_report'
                        id: 'a9ee53d26b0c4bfbb79e437ad3f13708'
                    }
                    report_risk_distribution: {
                        table: 'sys_report'
                        id: 'a4932d7694b14bcc91f6722f07ac028b'
                    }
                    report_vendor_lifecycle: {
                        table: 'sys_report'
                        id: 'd672769e7f0f47f3828f0db0e12da64b'
                    }
                    request_approval: {
                        table: 'sys_ui_action'
                        id: '2881c8b16f91461cac79bf889dc3a593'
                    }
                    request_exception: {
                        table: 'sys_ui_action'
                        id: 'f13b499b3dca415994914a2dd2b2f8de'
                    }
                    response_allow_na_write: {
                        table: 'sys_security_acl'
                        id: 'edd1ff8f27374fdfbebab81c8e7035cd'
                    }
                    response_answer_write: {
                        table: 'sys_security_acl'
                        id: '4ca94344aa3a4487be5e5acb90d2fa75'
                    }
                    response_applicable_write: {
                        table: 'sys_security_acl'
                        id: '4c1280f40e7d4028a12b75d7b1571e33'
                    }
                    response_assessment_write: {
                        table: 'sys_security_acl'
                        id: '78aaffa138f04f2ea51f62add3e8a533'
                    }
                    response_choices: {
                        table: 'sys_script_client'
                        id: '1449506e528e48eb8f436ffd5db23c70'
                    }
                    response_condition_refresh: {
                        table: 'sys_script'
                        id: 'cf704c44465b4bb9bc81e9791b98f4eb'
                    }
                    response_create: {
                        table: 'sys_security_acl'
                        id: 'c6d25a5e54694a8d8d397805df9c720c'
                    }
                    response_delete: {
                        table: 'sys_security_acl'
                        id: '2df0c538ae5b4771891fce640b15d52e'
                    }
                    response_evidence_required_write: {
                        table: 'sys_security_acl'
                        id: '410a1f5850104d2ea02aac4a917917fa'
                    }
                    response_guard: {
                        table: 'sys_script'
                        id: 'e1fd48155b85406eaf52d33df5d2db77'
                    }
                    response_justification_write: {
                        table: 'sys_security_acl'
                        id: '05b1065279644298a9f637dafb41aceb'
                    }
                    response_options_json_write: {
                        table: 'sys_security_acl'
                        id: '456b1eebb17b4e8d8c59321dbf5b848e'
                    }
                    response_question_id_write: {
                        table: 'sys_security_acl'
                        id: 'e410990d361e40d6a28feed42a843982'
                    }
                    response_question_text_write: {
                        table: 'sys_security_acl'
                        id: '3a9331fc5d07472d96dd6374622fde63'
                    }
                    response_read: {
                        table: 'sys_security_acl'
                        id: '21c96fc00f6c4ff98653fe1cef35f71e'
                    }
                    response_report: {
                        table: 'sys_security_acl'
                        id: 'bed66d86e7b94d85911bb5eb9a2a1169'
                    }
                    response_vendor_write: {
                        table: 'sys_security_acl'
                        id: 'ee3b63b1e539449bb29d6b8c160ef9fa'
                    }
                    response_write: {
                        table: 'sys_security_acl'
                        id: '2ab7c86c79ac4905a47a4f4f1af2f5b0'
                    }
                    seed_questionnaire: {
                        table: 'x_1503283_vrm_questionnaire'
                        id: 'e1c1c24b843e4e899a84e8305d82e96e'
                    }
                    service: {
                        table: 'sys_script_include'
                        id: '6530f0763d304d70b313e2258ab5fb75'
                    }
                    'src_server_rest-router_js': {
                        table: 'sys_module'
                        id: '0591e20644804c59b52c25586de87101'
                    }
                    src_server_VrmPolicy_js: {
                        table: 'sys_module'
                        id: 'e5277c1229b1441b84a8019c07682ed7'
                    }
                    src_server_VrmService_js: {
                        table: 'sys_module'
                        id: 'fa6c7f481b754dd08ab42aa782e963ad'
                    }
                    submit_assessment: {
                        table: 'sys_ui_action'
                        id: 'a321baa65a78464eb13c6de394e6b914'
                    }
                    validity_days: {
                        table: 'sys_properties'
                        id: 'f492a0f2ab0347b58bc797efeeaa7f35'
                    }
                    vendor_approved_at_write: {
                        table: 'sys_security_acl'
                        id: '4c9f307e9b304d93b2a41bc7fdfe1a37'
                    }
                    vendor_approved_by_write: {
                        table: 'sys_security_acl'
                        id: '6aee33da14824fc88bbc3eb917e206be'
                    }
                    vendor_approver_write: {
                        table: 'sys_security_acl'
                        id: '88119aec132e4da68513ec267552d843'
                    }
                    vendor_assessor_write: {
                        table: 'sys_security_acl'
                        id: 'a30afbd041c94735aea46001cd6f1872'
                    }
                    vendor_create: {
                        table: 'sys_security_acl'
                        id: 'caa2ac8a6e92471aa3a96824d0327ed0'
                    }
                    vendor_delete: {
                        table: 'sys_security_acl'
                        id: '2a7cf41ffcdf4ddd9518dba3204d445f'
                    }
                    vendor_description_write: {
                        table: 'sys_security_acl'
                        id: 'b694320204154e4bbc450630ad7684b3'
                    }
                    vendor_guard: {
                        table: 'sys_script'
                        id: '7e8a98538b3a4c77be1bdb26c1549262'
                    }
                    vendor_latest_assessment_write: {
                        table: 'sys_security_acl'
                        id: '216343588dda4b028838bd1b9e9aa094'
                    }
                    vendor_lifecycle_write: {
                        table: 'sys_security_acl'
                        id: '7c82d508ff08419eb6a4ba23ad0b0c78'
                    }
                    vendor_name_write: {
                        table: 'sys_security_acl'
                        id: '32b5fc0544e74a1d98ac393524f93e1c'
                    }
                    vendor_next_review_write: {
                        table: 'sys_security_acl'
                        id: 'f6cda3ae478740f198349ba14ebd90eb'
                    }
                    vendor_number_write: {
                        table: 'sys_security_acl'
                        id: '3348c814869648bd96afe12d6c94c247'
                    }
                    vendor_read: {
                        table: 'sys_security_acl'
                        id: '8582b8de3069442380fe303710d6cb50'
                    }
                    vendor_related_0: {
                        table: 'sys_ui_related_list_entry'
                        id: '806d6e8988d04f5db7889940e5dc3f5d'
                    }
                    vendor_related_1: {
                        table: 'sys_ui_related_list_entry'
                        id: '7e3477d1b46e4a1a808669e38a0688fb'
                    }
                    vendor_related_2: {
                        table: 'sys_ui_related_list_entry'
                        id: '8e6db13a6c884f0b84248bd02233c1a7'
                    }
                    vendor_related_3: {
                        table: 'sys_ui_related_list_entry'
                        id: 'e4a814b532994336acc8a16d66019957'
                    }
                    vendor_related_4: {
                        table: 'sys_ui_related_list_entry'
                        id: '67625f7df30f4a4eb8c4cfd1c096ad41'
                    }
                    vendor_related_5: {
                        table: 'sys_ui_related_list_entry'
                        id: '33af8f7bd85647f49f824f9b8f56f11d'
                    }
                    vendor_remediation_owner_write: {
                        table: 'sys_security_acl'
                        id: 'a063ad2ea38141a38f862b346d41c213'
                    }
                    vendor_report: {
                        table: 'sys_security_acl'
                        id: 'c379e8a6272442a1a2aaf9dbf8694bb2'
                    }
                    vendor_requested_by_write: {
                        table: 'sys_security_acl'
                        id: '574625ba0a784715b0918d61b0b8e701'
                    }
                    vendor_risk_band_write: {
                        table: 'sys_security_acl'
                        id: 'fc6570e08bb0464584695c5d4f5f9759'
                    }
                    vendor_risk_score_write: {
                        table: 'sys_security_acl'
                        id: 'f74fadcaac684bd28853cd77fdf404a2'
                    }
                    vendor_write: {
                        table: 'sys_security_acl'
                        id: '9a92b0970bf446dc8e32ed6586dec86f'
                    }
                    verify_remediation: {
                        table: 'sys_ui_action'
                        id: 'f2a4df1a549e4d199c5f659de1affbec'
                    }
                    workflow_action: {
                        table: 'sys_ws_operation'
                        id: '9608303f389a4442a1f54e995fd383ae'
                    }
                    workflow_api: {
                        table: 'sys_ws_definition'
                        id: '0a7162fcbbc540ab981b8ab80fc5464d'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_element'
                        id: '003fa7b85f0d4ec8abdc698c8e7bd13e'
                        key: {
                            sys_ui_section: {
                                id: '52c28fa9b02546a18317047c16a9d91a'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'actor'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '011aca72c9704319a818f137e9020ea1'
                        key: {
                            list_id: {
                                id: '7c6e687eb52041709a6399e37b620f3b'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0179d54b1bc949d6b0ae838b261940e8'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0296dccfffe54d678a668dd9d8c8c918'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '029f1dd0c9884cbbb919193a797cc74c'
                        key: {
                            list_id: {
                                id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02ab85724ef8492782813289371db7f2'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'snapshot_json'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02c4359d134144349336ec39215ae9b6'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '02f0e1f49052419cad22f5ad96daafd9'
                        key: {
                            name: 'x_1503283_vrm_activity'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '036296badc5645d89d28fce50dfd3915'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03f2709e91c14b37b1bd41e9b0f1db3f'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'remediation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '041e80b857354961b7ae52405d4cc962'
                        key: {
                            list_id: {
                                id: 'bd14e342059649fdb284fe1fab67041c'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '045691f4fc0b49a096820da0d856e3da'
                        key: {
                            sys_ui_form: {
                                id: '0521c2fd85a04712b82cce1e24b96b22'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '52c28fa9b02546a18317047c16a9d91a'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '04747962a2514f63bcce2b20fc07f2fd'
                        key: {
                            sys_ui_form: {
                                id: '915fbc3a0470495093135e841beec281'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '0521c2fd85a04712b82cce1e24b96b22'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '056d36582850437a8af4f8a8d9effa5b'
                        key: {
                            list_id: {
                                id: '2e9c94aa74ad43e4bdac4085dc55390c'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '061e9f4dec294db191e1490009f91733'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '0629d9793f6b466484539331b6aba37e'
                        key: {
                            table: 'x_1503283_vrm_response'
                            short_description: 'Require justification for an allowed N/A answer'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '06511b846d0e43cb8336faef57050e15'
                        key: {
                            list_id: {
                                id: '14f6c461871542d9a723016e082666f2'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '066cf42ed94949e8bc5bd423d23fe750'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finding'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0674c9bbe9154444801fbaf85813b6fb'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '067a5ef163ba4309bc24842593f44da7'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'state'
                            value: 'closed_verified'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0684488975fe47a8a871a7f3083fd0b1'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '070ce41b0dbd4c6a9e59f4e3893ca681'
                        key: {
                            name: 'x_1503283_vrm_approval'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0739d807f9c649d690e1b2f3abf1f026'
                        key: {
                            name: 'x_1503283_vrm_response'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07499a0239ad4a36815b0160f9f6f75d'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '0830459c9879482abbb767c3a06d41c3'
                        key: {
                            sys_ui_form: {
                                id: '3df907f7236d4cb28977196d2b52fbd6'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '08ef9aebdf394e19a898e4268118bc59'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '096f37a6598948c5bf7ccd5c09422f78'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'valid_until'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '098ca3dcd2b645219c9298caa603a508'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a8fa41d687b4dea9dada82bb8053768'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'risk_band'
                            value: 'critical'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0b0094479c814d52a2c23dc9c1b2aa17'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'decided_by'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0b3796d683c6476486dfffc13433d01d'
                        key: {
                            list_id: {
                                id: '14f6c461871542d9a723016e082666f2'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'expires_at'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0bae330d59144072b9dcd63f5a5deefe'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'risk_band'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0bdf788100b048c0bf51cc94f955b007'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'latest_assessment'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c159a2a635e4a268bc01aa081a917c8'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            value: 'yes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '0c5dadac9d024fe594fc13f2dd00b9f1'
                        key: {
                            sys_ui_action: '2881c8b16f91461cac79bf889dc3a593'
                            sys_user_role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c6a34833f154f9d837568e159654124'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'approved_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c6a562478484429825efcc0aac2f4df'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'pending_approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d954739429242cc8eaedb6dbe869754'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0da647ef7fbd47c89eebebc6b60d86c3'
                        key: {
                            list_id: {
                                id: 'f4ae8d8f86d44018ab89b41a3670a4e1'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0dcb08dcddf64a13bc8810e5ef62739f'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0dcd87f9a967477da9a24c47fe419289'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'applicable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f341894c0e14eee9f01f2afa190a9fb'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0fbd8fd936814922a43ac1f470778384'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '109fbd077c594b0fbc8b7d6719ae57b0'
                        key: {
                            name: 'x_1503283_vrm_response'
                            caption: 'Assessment Response'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '10c3a71395b74bc2b1b3332bce337dc7'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_finding'
                            caption: 'Risk Finding'
                            view: {
                                id: 'ed30185167b745b49b21c182dcf486fc'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '10cf09d022054aed9d2e53312117795f'
                        key: {
                            sys_ui_section: {
                                id: 'd38b84c1f0fd408a912bf3f65fd431b6'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'definition_json'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11bda5b391184afd8f08395ee751ac76'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '11fea6e6980c4c4abdf6929a1c4ca781'
                        deleted: true
                        key: {
                            role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                            contains: {
                                id: '2809e4856a674a64871bb8bdf1277778'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '122f5898cde54b6dbb45108ffc72bbdc'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '130ebf092cb644e9ac60b1c597bee260'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '13517f29a88640c5a67501519ed15e87'
                        key: {
                            list_id: {
                                id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '13ac53173eec495192c0693e012b1d08'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'remediation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '13ad99422e274eb7920c353753a84b53'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '13cf8cb5773542d5a352e509e4a2e5d1'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            view: {
                                id: '3385dd17f91e461b995021169ee1e79c'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14170073333d47a9860764e6e3ed56a6'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'state'
                            value: 'requested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14ab9a4dcc9f48e58f821b9ef38e735c'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            value: 'na'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '14f6c461871542d9a723016e082666f2'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1579be12e42445bb93f4b81eeb67b72c'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '15ca661f39f84fd2a4e8bc956a38ead9'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'state'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '160b6413d69840cfa93bbb0831ed0216'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'finding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '161849e2d6474607a22c0655583c14fc'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'question_text'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1624ded173dc4b238f0a67e129eae24e'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'exception_until'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '16467e11e49f425db2be94b9b74500f2'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '167e1b5950d741d2b7fb73e9abfbe9b5'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'exception_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16a5ea7fb46049849d8ceac1d9c52870'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16bfc93c247a4326bd3d49e9e29f9906'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'actor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '171f69e1e1cc4e2fbb544c30ca064385'
                        key: {
                            sys_ui_section: {
                                id: 'd38b84c1f0fd408a912bf3f65fd431b6'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17c8394f50164f43b96d3e4bf89510d1'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17eb48218c534e899360ea5015b2f368'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'state'
                            value: 'invalidated'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '1868cb8de53c4a0fba67fdb48c4b1e37'
                        key: {
                            sys_ui_form: {
                                id: '4f59dc1b09754da9a12acc0193718d1c'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18a7b6521ec24d869c4ff1d842bc722b'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1982c953cf394c5a8ec0b7553091dfe0'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1a21794f4cd949f781e199e497a9a857'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '4eeec0fbf1834edab236f5fb4f707ce5'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ac31e93b5314500bdbe2ca8fa63f814'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'assessor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ac3a9a726cc474d902cc18367e548ad'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_band'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b7669984eb84a65bdb4a9f7b8949163'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'risk'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c306d58006b4af6a61f5dcac299f61a'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'exception'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1cbca8f105fd48dfb113acabc9207e9d'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1cc142ba88cf4f2a9d286f5e7c7f2225'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'allow_na'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1e30e82a6ab042ed8f1d490d979f97f8'
                        key: {
                            sys_security_acl: '8582b8de3069442380fe303710d6cb50'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '1e615f9b1bb14ae59cfdf1f23bdf0041'
                        key: {
                            table: 'x_1503283_vrm_remediation'
                            short_description: 'Require resolution details before submitting remediation for verification'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            caption: 'Vendor Approval'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1f2e0c6685d74c12ad1e75e8c6a42f7a'
                        key: {
                            list_id: {
                                id: 'bd14e342059649fdb284fe1fab67041c'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '1f83ed04f39a4bb0b3bfa198e863ae50'
                        key: {
                            table: 'x_1503283_vrm_finding'
                            short_description: 'Critical findings cannot request risk exceptions'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1fc395f7a0014a8da38e352c6713f1b6'
                        key: {
                            list_id: {
                                id: '7c6e687eb52041709a6399e37b620f3b'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'evidence_required'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '1fc910c6cfd1439fbc1c7a76cb19efcb'
                        key: {
                            sys_ui_form: {
                                id: 'bedd22ebbfa74a788d2e20e688e96047'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '201fe928f2c54f1ea6e91064c3577cb0'
                        key: {
                            ui_policy: {
                                id: '0629d9793f6b466484539331b6aba37e'
                                key: {
                                    table: 'x_1503283_vrm_response'
                                    short_description: 'Require justification for an allowed N/A answer'
                                }
                            }
                            field: 'justification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2158ef76517b42a4aa7d472038e75cdf'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '21e4178f696b4a1ca85a789f4e6e3911'
                        key: {
                            logical_table_name: 'x_1503283_vrm_response'
                            col_name_string: 'assessment,question_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '221a52a7d64a4c938516843e43a96e03'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '22e12f8aab8341c3bd150579048fbae2'
                        key: {
                            list_id: {
                                id: '2e9c94aa74ad43e4bdac4085dc55390c'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22fa3c368bd94554812fd15730c4f105'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'risk_band'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '24138181483d408ba1a792b20f35d1f6'
                        key: {
                            sys_security_acl: '6717f8f1b29d41eabefed941aa55337a'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '245ed0a5b9de49c1aa6e72ea83e2369d'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'state'
                            value: 'passed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '245fc814e92b489e99efffda525ec091'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2492f636d85d45e49692483f55a48666'
                        key: {
                            name: 'x_1503283_vrm.requester'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24ea460fc3cb4b3285aa8165e88ca56a'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'submitted_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '259eba24723e4f9dbef66aa61ad72388'
                        key: {
                            list_id: {
                                id: '2e9c94aa74ad43e4bdac4085dc55390c'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'decision_notes'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '25eef5d76858477d9bbbdbf56ede753e'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_exception'
                            view: {
                                id: '22074f08fde84e5f991e1ffe48938934'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '261b965c750c4c5cb29a46dc06e98580'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2678cb27f9ee49b186be15db9085268e'
                        key: {
                            name: 'x_1503283_vrm.user'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26cbbba756874cdca4979f24294d9670'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2773bfd572084b75b4f0c0d0701f2a4c'
                        key: {
                            sys_ui_action: 'f13b499b3dca415994914a2dd2b2f8de'
                            sys_user_role: {
                                id: '4aa3a83f62874470b4f13f2d0e93c291'
                                key: {
                                    name: 'x_1503283_vrm.remediation_owner'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27906cce5ae14079acb8d3a061d21a0f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resolution'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '285211ced16448fa88657b93e5046266'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verified_by'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '285945f77441483aa93c4a80ce63b8c0'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2885a5b6d2c14a04b0368b6d66fd6fab'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitted_at'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '28be358f5ba740fbbe75406064eb1d5a'
                        key: {
                            list_id: {
                                id: '14f6c461871542d9a723016e082666f2'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28ef828932cf4e418484612c1a9d3055'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '29377d3b067d487087ee2f8f7fe6ece8'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_band'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '293d581163d74046b5bbd7175e2e228f'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            caption: 'Vendor Assessment'
                            view: {
                                id: '437b76b552334383a194d6305581a729'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '29deff0860b74e00b12705cf66e4547a'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '29e793a739bb4a5a861f2eb3443863a3'
                        key: {
                            name: 'x_1503283_vrm_response'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2ae1dbb2f1a344bbb139a6e43f274757'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lifecycle'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2aea64914815462c85d7bb74697d86f5'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verified_by'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2afbd8c32d614e02952c4db0fb2bf8b3'
                        key: {
                            sys_security_acl: 'a3f8ea17479b4f6395b8cc7d0f15f70c'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b6ff8a473934a00a860cf9b91873d1e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2bc765e2f5db4ccaa78ce2b9a0f27dcf'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c31af5f29e542e6b17e671bc089cfe4'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2c5b819794344a82b33bf5e6f4d90325'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            caption: 'Vendor'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2ce2533c21e842bc99cba5a990dcc1ed'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approver'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2ce6e0e81c554bcf96f47cd4276b06ad'
                        key: {
                            list_id: {
                                id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'question_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d07ce6c4f2d44f1b8881347754d0b3a'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2e227c17e0c24d6fa5780caba58b40d3'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approver'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2e7113721285433d90d2bffd518221e7'
                        key: {
                            list_id: {
                                id: 'f4ae8d8f86d44018ab89b41a3670a4e1'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'definition_json'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '2e9c94aa74ad43e4bdac4085dc55390c'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2f189651af764f3e87eb1a3fcf8aef9d'
                        key: {
                            sys_ui_action: 'f2a4df1a549e4d199c5f659de1affbec'
                            sys_user_role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2fce7aeaf71a48ca95f416fd7c29ceef'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'last_reminder'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30109dcddcb649328a4a898a91672045'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3082192f8c0d4b31970e055d2d14dd7c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '4eeec0fbf1834edab236f5fb4f707ce5'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'action'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3136bd293c7e479baed7d8c07d3c84dc'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'verified_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '31790e60ea574727ac96dbac0cfec96a'
                        key: {
                            list_id: {
                                id: '7c6e687eb52041709a6399e37b620f3b'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'answer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3184f9d43b4342efb8772e9707fb2271'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '32a925a65e024a40b41ab3633eafdba4'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'assessing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '32c9988d828242fb84fb4e57b3b68196'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'valid_until'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32e8dc9f868d431f8c08ebb4826f65d0'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '32f84d63327b4a4e9f7492888ba28409'
                        key: {
                            role: {
                                id: '82764b727e2046fe85cc37393947e897'
                                key: {
                                    name: 'x_1503283_vrm.approver'
                                }
                            }
                            contains: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3347966ff6574e0fa0159ffc81fd1732'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_band'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '337dc6e6748d4ea582e6e812995df4b0'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            value: 'no'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '33e549e4d8b946cbac4f337c1f07547c'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question_id'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '33ec4a75b11841d9b306b89afc3422c0'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            view: {
                                id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '34325ea0e143489184b5a7b32176d2cf'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'applicable'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34ad7516004a4cec848fa70ec9f3701a'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'assessor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '351a875515754eb88910e7d37897a34a'
                        key: {
                            sys_security_acl: '49ec0b7f38bb4baba289f153ee1fb95f'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '352cf111762041d3a24c3760f096d3f2'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '35936f87ae6241ac89a1cef9248b797e'
                        key: {
                            sys_ui_section: {
                                id: 'd38b84c1f0fd408a912bf3f65fd431b6'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37a60c038f3a4ff68efb8c66ebcaec35'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'critical'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '37c72b48d0944566a91b5109ce3b59f6'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3996373203104dd9bccd0791bd19729a'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '39d59010eed44caf9f7a188e51774002'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_exception'
                            caption: 'Risk Exception'
                            view: {
                                id: '22074f08fde84e5f991e1ffe48938934'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a1b9c278a1e423ea03ef11a759a08db'
                        key: {
                            sys_security_acl: 'dc18994ac8734aab8e27a1bc6941a2bd'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a45e88174ab4a68b1ff1e8576330770'
                        key: {
                            sys_security_acl: 'e92387df8eca4878afb860a2d6a7a810'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a7461e96e21438ea51d05fd117b6f15'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '3be1f49157624388be55b79ecefa0a8a'
                        key: {
                            model: '61c1f47370de48fa9c7980824a0204b7'
                            element: 'activity_id'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3c02d697708b4cc0ae6f72d39fb4d9d3'
                        key: {
                            list_id: {
                                id: 'b36e72c35feb426384b1a262df0567ba'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '3c20fa3e58444df2a8609726d99c777b'
                        key: {
                            category: 'x_1503283_vrm_exception'
                            prefix: 'VRE'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3c643951973e47708e9a052f0da81d46'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approved_at'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '3ca53a67c3f94d3e86364da070688c4e'
                        key: {
                            role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                            contains: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d07cb511842411fabaa31ebbd6cb172'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finding'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3db0d1c9d16c4aa19d30df31666ded41'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'approved_by'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '3df907f7236d4cb28977196d2b52fbd6'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e7ede4073fa48168f52672b27eb0cf5'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ea092b70dbe4b11acb1b6e2d5e53f99'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3ebdaa8b57c5430d8a90d64127744be6'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a953fcf8384d453f8abc380741302ac3'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3f180aea785b4b69b53a91b1338c6b95'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_band'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '404e777eb0444f6cab7980cccb4b4ff1'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '404ff5423c0a4a61961287a3910fd4bc'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'last_reminder'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '407e9a2b0c2f4e9c83c899b439b0ee62'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'question_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '40df3705e682455aac03e6a6963502e1'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessor'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '40f04e8f39e64058931421641d135795'
                        key: {
                            sys_ui_form: {
                                id: '5b5745e1318c4f6bb190a39c6c7b0c36'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '41d3d72d1e4741349fc688e8b2c9de25'
                        key: {
                            list_id: {
                                id: 'b36e72c35feb426384b1a262df0567ba'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '41d7c529a376420496672ef475a2f315'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4263fc811b304c23b83878c9e7d2b78c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42b4f50e73314c3ba48693b8d0a76705'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'finding'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42b5346f90274f4da6137c8662556aeb'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'questionnaire'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '435eab8b9047465bb92c776dcc77f088'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'state'
                            value: 'retired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4367c6663d5a4eb6a638826333908f97'
                        key: {
                            name: 'var__m_sys_hub_action_output_248610507b7542c7a8873aea1cf59866'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '43b71ae26a954e6b9cbff790f11f039f'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '456c6af8541341f48c69159efb1283bd'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '45ee7b5aa6994db1b9f6ba7799a93f69'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'b2379d9d81b14130b3de749780af277b'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4610346bf48e43e3bbe979ff10589407'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '464453ce1ccb4f488058e4f882c880ce'
                        key: {
                            list_id: {
                                id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'critical'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '476af1673391411e88b8ddeb6e808ad4'
                        key: {
                            sys_security_acl: 'e0eab78bc55f49fd8cc61c6ec7adadb8'
                            sys_user_role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '478affa556d542bb9de5f64d2c43f025'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            view: {
                                id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '47909b75ca2b435ca5600d01ecaa6031'
                        key: {
                            sys_security_acl: '4c5a4d2ccc7841bcbe65acf4b6e3eefe'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4797d0bd36ac4b568235f0c5e44d99d8'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47fbc1b1ea2d4925b88b73384b9e8b0e'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'decided_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '489bd1408b0b4b09a7da7f79bd7c566b'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'question_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '49837c9f4ed74a8aaee952e7fb2f392b'
                        key: {
                            sys_ui_action: '5c0a9f0e514b45fd82e2f43d42240a36'
                            sys_user_role: {
                                id: '82764b727e2046fe85cc37393947e897'
                                key: {
                                    name: 'x_1503283_vrm.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49aacdcb193a409f85eedf26ad9eb911'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'resolution'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49aea98fbc7d44358080d349500d5a1c'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'applicable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '49bcafef380a409fb3cd9fae5a98a048'
                        key: {
                            sys_ui_action: 'f13b499b3dca415994914a2dd2b2f8de'
                            sys_user_role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49c7d925d9554453bdec1e089360a279'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'risk_band'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49dd25ff82854aa9bef64d8f2944a2be'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a1e22de1d644fbe9f9417c93c84f12e'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            value: 'never'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a2b91f2fb4845f48c7542f3a08a7335'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '4aa3a83f62874470b4f13f2d0e93c291'
                        key: {
                            name: 'x_1503283_vrm.remediation_owner'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4af37296ae8d4041b88a1048322a8cfb'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'valid_until'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4af84451669a4ed19642bf1d1da56fdb'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4b1f1c2b0f6b4e29b57eecc2180a4ed2'
                        key: {
                            list_id: {
                                id: '93f2ce7ef1474880b2380ee975649141'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'details'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b3cb0dd9efb4f8cb84c2cb49354649c'
                        key: {
                            sys_security_acl: 'fee5ae0e122c47be9eeccc04ac87afa8'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b412430a4534b6d921316dd117cf503'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b445a031ee8459893cb98857731d8cc'
                        key: {
                            sys_security_acl: '710565f0ac9440cf86cb8004ecbe4dc8'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b578ab1c66743938209dcc1e731688c'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'request_key'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c064bd793ad40cfb56459ce99056d8d'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'justification'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c1c2e0e539b4116b78327dbcb1e8e98'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c29a03e7f5b42fea9ef536aa2a79210'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c315b67e41c4e58abd42e838cb2cb98'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ce03b55ae434112ae87738600e68c9d'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'decided_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d4fb1e75c4a4f74a11658281f12386e'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'next_review'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '4d5db1dd712448f1bb2a1a934b832fb3'
                        key: {
                            category: 'x_1503283_vrm_assessment'
                            prefix: 'VRA'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4d69486f2bba48269736c6d6eabac1a7'
                        key: {
                            list_id: {
                                id: '7c6e687eb52041709a6399e37b620f3b'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4eeec0fbf1834edab236f5fb4f707ce5'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_activity'
                            caption: 'Vendor Risk Activity'
                            view: {
                                id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '4f59dc1b09754da9a12acc0193718d1c'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4f63f4636c2c4a4eb373b90d0f2de4b8'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '503e7ac6e2dc4a48bc0f47d338ad1152'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'exception'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '508e41436a064d7e9e4202251b628876'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'request_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50bb1feaa770469c85814221fd033f64'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'decided_by'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '50cc9a7745bd45b5984a6da94a8c447b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'questionnaire'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '50e2f997b4304730a12748c929f2de9e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'evidence_required'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5193b0fba5224a9ca6ce45d980d2cf8c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessor'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '519de0cb64e745809f51a112d0f2c839'
                        key: {
                            model: '248610507b7542c7a8873aea1cf59866'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '51d628bfa2f444169720c9d7b2beecaa'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'next_review'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5246e3cc1edb40a890e71acf6e5b5dbb'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'critical_failed'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                        key: {
                            name: 'x_1503283_vrm.app_admin'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '52c28fa9b02546a18317047c16a9d91a'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            caption: 'Vendor Risk Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '534069f8c12d4cc390cdae836a0441ef'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '4eeec0fbf1834edab236f5fb4f707ce5'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'actor'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '537c334aa9634be38d906c33def53f61'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'state'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5414bad1f56848889ee1fc333fed4e9a'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'occurred_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '543be475893546e4b033aa52fa25110d'
                        key: {
                            logical_table_name: 'x_1503283_vrm_questionnaire'
                            col_name_string: 'code,version'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '54ffbc4813df4f34b605f9fd1630bd97'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'a03fec765ac3419d89ec44c66972639d'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '4eeec0fbf1834edab236f5fb4f707ce5'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5513bf7e418d4dee8ef59064f4beb1f0'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finding'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5566fa6d816641539feb0bdbdaf9d4c2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55bf65897be647ab82f9f8f82e1dde7d'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5676f68970b647af8e8d390a2e013357'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verified_by'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '56be09fc0f1b43c0aa9d8aad948ad5e5'
                        key: {
                            sys_security_acl: '3bde403efa234b6b87ef31ff7033b30a'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56c35e4f76464f91bafc29ee1f232e07'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56d34aa5de944f3695a8ec80f03e79c5'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'answer'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56dd5cef78ed49a393ceb9d901c7cc10'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57016fa2e0c34865bc22f5795ed32f57'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'latest_assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '573f0d0414144d768480e130a5d6f484'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '57851f35bc50481d922384046a342632'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'score'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '57b2253aff3c4394addfede081eb9308'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5805a0b927f74580b0e153d4d3bd1a9b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5889f6bdf80b478bafc75d115ee529f6'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '4eeec0fbf1834edab236f5fb4f707ce5'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'occurred_at'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58ba9567d39642ec9135df0eb45854e7'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '59120b98e2654351b67bba8e6aafc503'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'state'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '5a72f720e25a422e866d9c101b17635d'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b06a2aee0454a2aa69193e6ffae5cc4'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'exception_reason'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '5b5745e1318c4f6bb190a39c6c7b0c36'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5b6342ee3b6a4ee5aa2c8a3c60257e69'
                        key: {
                            list_id: {
                                id: '93f2ce7ef1474880b2380ee975649141'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assessment'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5b6c6f9137cf4d34b66b202127d424dd'
                        key: {
                            list_id: {
                                id: '93f2ce7ef1474880b2380ee975649141'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5bb5719058d34e56a86c508a1e32c0f4'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'description'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5c4589ac538e4d2e8a4f38af3fd94ce6'
                        key: {
                            name: 'x_1503283_vrm_exception'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5d1e8f0cdb8542aab37c67ac118dd9a9'
                        key: {
                            sys_ui_action: '2881c8b16f91461cac79bf889dc3a593'
                            sys_user_role: {
                                id: 'ffd9667de5dc42beb0b5bbcbec732cb9'
                                key: {
                                    name: 'x_1503283_vrm.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5d44bb09d0af4f77bb0829d97fef0df4'
                        key: {
                            sys_ui_action: 'a321baa65a78464eb13c6de394e6b914'
                            sys_user_role: {
                                id: 'ffd9667de5dc42beb0b5bbcbec732cb9'
                                key: {
                                    name: 'x_1503283_vrm.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '5d4c528aa80046eaa76fe8feef3d6ada'
                        key: {
                            role: {
                                id: 'ffd9667de5dc42beb0b5bbcbec732cb9'
                                key: {
                                    name: 'x_1503283_vrm.assessor'
                                }
                            }
                            contains: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5db0cfd23dd44271b7a4fbf5209b04d7'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5dbdc0f305bb4931a903f2ceae20d155'
                        key: {
                            list_id: {
                                id: '14f6c461871542d9a723016e082666f2'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e10610a2bd44791913993e3867ac748'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'state'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5f2171b4a7a342609fae3c18830a82c3'
                        key: {
                            list_id: {
                                id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '600c17d2b80e4d06a91d0165b226e4f1'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'decided_by'
                            position: '8'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '60657623ce1940f3bf2eeba4b48b03d9'
                        key: {
                            name: 'x_1503283_vrm_finding'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '60d420c24fbf42588ed8710c722b6629'
                        key: {
                            logical_table_name: 'x_1503283_vrm_finding'
                            col_name_string: 'assessment,question_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '612b44c657ee4b2b990cd75dad124ee4'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'justification'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '616fcdd6731940fd8b8c10c566d70f3c'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '62a45df6f7d4426daf9aca8b8470b70e'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'state'
                            value: 'expired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6302abd985404193978ae3e851c8c6bb'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '63634378e5754cc68cf43aac523a978b'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'options_json'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6364b0cbbe4a4bef9b57db10811c68d8'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'options_json'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '639dfd598ff14c908bd7f521c1531f23'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6420a135aab048be8d5b306a96b5594f'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'snapshot_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '650c416a257c46f5821f1c8dc2be43e6'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'critical_failed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '655fbd6ba8ba42cca3ff5f2f797765fd'
                        key: {
                            sys_security_acl: 'ced55286b7774a93a61aa742fa8d7fcb'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65b8b4026e674d04994f49bdf3503140'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '65c162ec34c0430b81f03608b6c1f609'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'expires_at'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6633d89304044e9683728812abeb010a'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'state'
                            value: 'published'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '664281d46e3f4fb4ace8ed5ae346b45e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '666ad8ed70d543769425ebcbbe57dce2'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '668a048194e141aa919a70e6666d993b'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_approval'
                            caption: 'Vendor Approval'
                            view: {
                                id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66ac9019652e423c82c3171a8eeecb6b'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'question_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '679bb0c3629c4313bd4c870a6ec9e972'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'details'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '679f0d172cd84272ab57945963a70be1'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: '33ec4a75b11841d9b306b89afc3422c0'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '67b4ba691bcc48428c1bd0a867d8dfa9'
                        key: {
                            sys_ui_form: {
                                id: '74d50a68189c458f91f921495c69e132'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '67fb4c0025c3416197880a6d17bddd5c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'latest_assessment'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68d6f9f0d9994a1eac28ab28ccc2deca'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68d9ebfb00294e48a491171c1487bca4'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68f454ac56f941d988bdfa4ece2e4a05'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'evidence_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '69834dff2a31494595b41ea0798f366e'
                        key: {
                            sys_security_acl: '522e07e4040349589eceddc6a37aa7bc'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '699f8656afef45099b9630171061ecca'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6a60309da871441aa1181643e029ba29'
                        key: {
                            list_id: {
                                id: 'bd14e342059649fdb284fe1fab67041c'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6a60bfe564a74df0a139d2e850505c89'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessor'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6adc0589e499468485311593524255eb'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'definition_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6ae607124ee84cc1939264007945c515'
                        key: {
                            sys_ui_action: 'f2a4df1a549e4d199c5f659de1affbec'
                            sys_user_role: {
                                id: 'ffd9667de5dc42beb0b5bbcbec732cb9'
                                key: {
                                    name: 'x_1503283_vrm.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6af4c68e45774cf992a199c5e08285a6'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a953fcf8384d453f8abc380741302ac3'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'definition_json'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6bede9bf1e3b4676b95da86267ae5863'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'owner'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6bfe361128184ae5b706fd80ba52ff63'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c2cf30bd7194289829c1f14349e2803'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'state'
                            value: 'issued'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '6c2eb55dfaa04d1b8785b3ae500da453'
                        key: {
                            category: 'x_1503283_vrm_vendor'
                            prefix: 'VRV'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c61949797ea4ac38c5df5a9ba183ff7'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'risk_band'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d077a052dae4ed5aba318bd561dc441'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6d5a9c5a29e0436f9295a325387435d9'
                        key: {
                            sys_security_acl: 'bed55695112e41b9b87eb57f71ab5046'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d73f2942ea448d8a780d2a470e0c397'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6daa9516a49c4841ade0ba06b327dc19'
                        key: {
                            list_id: {
                                id: 'bd14e342059649fdb284fe1fab67041c'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6eeb68f06a194d25a5e40b75b4f1a43e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question_id'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6f95216bc7c24401b9cebda311aa8b72'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_band'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6fd03d7749a648fb862dfd34fa527d0c'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7013a785958e4d6bae9c56ab9d2e96f9'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'state'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7015f482587340358b6ba188280cc18b'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'questionnaire'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '706b64bb1a7c4443b58d5ee87b667625'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'verified_by'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7081a6d2841a46228ea1e9ee86c36a1e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'finding'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '709b40538a424f638068b4e7eb2cf77f'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '70f64fdfe7294fcc9535f7011e4c40e4'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '712f8df214c84beb88d21b0c485343c7'
                        key: {
                            sys_ui_section: {
                                id: '52c28fa9b02546a18317047c16a9d91a'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'occurred_at'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '714a15c82c0d4c11b747245b53a8baa3'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'e4cfc55637484d6d801c7105c253c872'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '717cedbcc124430f868cd72caaf5386d'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72c17c1246554b0ca1e3a9ee650f1abd'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_band'
                            value: 'critical'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '72e122c53254463ca01b9a10b770e4fb'
                        key: {
                            list_id: {
                                id: '5a72f720e25a422e866d9c101b17635d'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assessor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7360f07e8ea840b5a7bfbec3401a66ca'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'valid_until'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '74d50a68189c458f91f921495c69e132'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75b13a82d97f4d31b8409137f56d4fce'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '763707aca81e4f319a54af70a301c132'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7669904975644a1b9e763f0f072bd7df'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '76b602de6bac44a5880b68cf85e8a225'
                        key: {
                            list_id: {
                                id: 'bd14e342059649fdb284fe1fab67041c'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '771b6287642942f0bde58d4b6e930643'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7766d2b4cd3248aaa1efe87917ef08b2'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '77f94ae73bdd43bc9718562415ddc59b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '784365c700cc4342b0aa8c443a1f402d'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '78d9337c6e8d40ca89b8298218a6d900'
                        key: {
                            name: 'x_1503283_vrm_exception'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79db31461d2b40e3bd0b3bd4fb496e9a'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'justification'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7a1086ee25384f419bb116ff08caf815'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7a9527d128b74c129fe57466464b8934'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7a9a9f75bdad4b8aa24c4580131f9e89'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'owner'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ac361101efe401c9a1f4ad36b871c2c'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7b1aec9441944eab95b495266430a3ba'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            caption: 'Risk Exception'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7b717b95d7284a29bbdf36950b709555'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approver'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '7c6e687eb52041709a6399e37b620f3b'
                        key: {
                            name: 'x_1503283_vrm_response'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7cfe1d22ede64d4085490b2f00606c92'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approver'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d1d4b36765041e1a0e95778452a3fa3'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'assessor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7d21697ec87e42189b8cd4ba3c445f7e'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d524fb1469a4d189d1bba623622d5ef'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'allow_na'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7dd2009b2b1847ad9db738426e10a1e0'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_score'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7eececb1c84c4a4a8d14e0390dcf5229'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f41faf3850748dbb2753a23ac4df66e'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'review_due'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7fb3ec533ba344e58d1d404078f7aa2b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'critical'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '803193ae7333430bbf6dcc9188099fd2'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'state'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8068f9850e4349dabf03a2dcd859f6e7'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception_until'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '807ae40d926b431e903aa594539c20a0'
                        key: {
                            sys_ui_action: 'f13b499b3dca415994914a2dd2b2f8de'
                            sys_user_role: {
                                id: 'ffd9667de5dc42beb0b5bbcbec732cb9'
                                key: {
                                    name: 'x_1503283_vrm.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '811feddcc15c4e87b39c931929be336b'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'owner'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '818dd23b03374f83945ee064c27cdf97'
                        key: {
                            sys_security_acl: '5eae3777d90a41e3b5a66945653465ae'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '819e874ecd9345e7958c870e4c90da26'
                        key: {
                            sys_security_acl: '1a925c7e9c8c44ee923ba605271ac6f6'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '81a7f679f8a54114b6d73f2b465b7c02'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'decision_notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '81ecbf6b89bd445894a58054f502c5ee'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '82764b727e2046fe85cc37393947e897'
                        key: {
                            name: 'x_1503283_vrm.approver'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82b78476b1ac4d11b3e6563e2ff65ed7'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8405a880cc33487d95defce09192c62d'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '847c1082233348f9838cf8a26b08ea9d'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84a03878b90c4bf2bb1786d684742233'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84fe7b69c8e0497684401f0621e57e75'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'options_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '850dde4f65a8497fa90e481829bca288'
                        key: {
                            list_id: {
                                id: 'bd14e342059649fdb284fe1fab67041c'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'finding'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8543112104854f9391e301b5206c111c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a953fcf8384d453f8abc380741302ac3'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'version'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '854b121e5a6b43dd9e8acc6d277f526e'
                        key: {
                            name: 'x_1503283_vrm_finding'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '855a5920ce0c402ba3945da5a4bba4cd'
                        key: {
                            ui_policy: {
                                id: '1f83ed04f39a4bb0b3bfa198e863ae50'
                                key: {
                                    table: 'x_1503283_vrm_finding'
                                    short_description: 'Critical findings cannot request risk exceptions'
                                }
                            }
                            field: 'exception_until'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '857072d7a87e41759a9295528c8823b7'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_band'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8593e3fd92e247adaa383bc3198fbbec'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'decided_by'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '85f79b4a81a14245895340b3b234362d'
                        key: {
                            role: {
                                id: '4aa3a83f62874470b4f13f2d0e93c291'
                                key: {
                                    name: 'x_1503283_vrm.remediation_owner'
                                }
                            }
                            contains: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8624de3e9fd846cab5915b98df6f5ed1'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '868eed76550c4083bd1a3873b0d4ab7d'
                        key: {
                            list_id: {
                                id: 'b36e72c35feb426384b1a262df0567ba'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assessor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '874a99f976a74404b0c492e8971b1075'
                        key: {
                            sys_security_acl: '21c96fc00f6c4ff98653fe1cef35f71e'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '878d5b2d752d44f5b6f7e1800d9e5dda'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: '25eef5d76858477d9bbbdbf56ede753e'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8832ab1b7ddb4962b4ab5b8f212a9ec3'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'remediation_owner'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '883ee4996c974f7694f86cce065581a3'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'next_review'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8897a1c455f14700992b13c274504e5e'
                        key: {
                            sys_security_acl: 'cb12ce17cb61458a95bed7de2175ed1d'
                            sys_user_role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '88c45952d8fe4fafbc6f323adc7423e6'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: '13cf8cb5773542d5a352e509e4a2e5d1'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '88d9cc89ef1d48cabd53a73ee270323e'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '8935a4bbcbf24d629dc53a9209392fba'
                        key: {
                            category: 'x_1503283_vrm_finding'
                            prefix: 'VRF'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '89a91b3cf6164c7a9a669e2e7cee8fc1'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approved_by'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89ca30dd8d024550b28280f30b4fc64f'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89d73e8bf74c4d10a1c92c63ceb3d32d'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8a7cf66388364efdb96cd4ab8780253e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'justification'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8aa6ad20eb1f47f4ac5b8930b33af507'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b68f799b8e04d7d8258ce0b025615ca'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            value: 'partial'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8bea9a1cbeaa483b90305e871b7a3d7a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8c705327cb5b40b789c8e03edf9465b1'
                        key: {
                            role: {
                                id: '2492f636d85d45e49692483f55a48666'
                                key: {
                                    name: 'x_1503283_vrm.requester'
                                }
                            }
                            contains: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d00a773068045a39284bb7bf95c7047'
                        key: {
                            sys_ui_section: {
                                id: 'd38b84c1f0fd408a912bf3f65fd431b6'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'version'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d71332de3874517a7f36be2e7639620'
                        key: {
                            sys_ui_section: {
                                id: '52c28fa9b02546a18317047c16a9d91a'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8d742dc2ae9d4a83950c95dbc88055f2'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            caption: 'Vendor Assessment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8dead407d9c94571b7a3a3420b45fd6b'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'options_json'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f55798e1be44177b00411660537d02a'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8ffddeb3374b4fed93d0ce5c9ae750ad'
                        key: {
                            list_id: {
                                id: '5a72f720e25a422e866d9c101b17635d'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'remediation_owner'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '915fbc3a0470495093135e841beec281'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '918f5cc01698483e98b9ed79ca640466'
                        key: {
                            category: 'x_1503283_vrm_remediation'
                            prefix: 'VRT'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91de7a8e6b7141afa715143abf260560'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'question_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '923e30aded1d48d4b49fafe9940f7410'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'flow_processed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '92c968b11d9f4352b413abaf379bea8e'
                        key: {
                            document_key: '61c1f47370de48fa9c7980824a0204b7'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '93f2ce7ef1474880b2380ee975649141'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9440c2c150bb44baac26f0d9b03a44fe'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'decision_notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94611da948a9478cae4e147f6b095e1e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'answer'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9466022cdaf140bdbb2c5a4374e7bb3d'
                        key: {
                            list_id: {
                                id: 'b36e72c35feb426384b1a262df0567ba'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'questionnaire'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '946d13a6da704bafa8b65e37577c9e28'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9480ad9a889743c18c9a3aa7d90120d9'
                        key: {
                            list_id: {
                                id: '5a72f720e25a422e866d9c101b17635d'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '948d3e27dbb440b3a8ef771e39cf7cc2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94a5396e42884dc18178293eba5b4d53'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9519080a670e4d1daa25072233fa115a'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessor'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '954916fcd9d74f1991c6485012faafa1'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a953fcf8384d453f8abc380741302ac3'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'code'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '954c849efa1c44d6a7d9362af363d075'
                        key: {
                            sys_security_acl: '27eac8ec6d59495aa9e2bfd8c4266a41'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9694e6ab726f45dcbae74eb60cccf23c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '96b7d43646c64dceac61bdbdd80e2321'
                        key: {
                            sys_ui_section: {
                                id: '52c28fa9b02546a18317047c16a9d91a'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '96bab99af8b94d3c9d4773f7186ccb2e'
                        key: {
                            sys_security_acl: '4708af7daa884759830ed19f829ef9c2'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '972d492e670f4f1588f1df7f6dc30e64'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '97afdcbb18c14fec81399fd3407eff8a'
                        key: {
                            list_id: {
                                id: '5a72f720e25a422e866d9c101b17635d'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '982479d79e6f4526b17c72377edd37d9'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'decided_by'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '98271c7bd1274837acf60aa6ccd8eeb1'
                        key: {
                            list_id: {
                                id: 'f4ae8d8f86d44018ab89b41a3670a4e1'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9877e8121c78419cb4107aa9334c64d8'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'state'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '98b3b2b41fbb4efc8b1f781142c8262c'
                        key: {
                            list_id: {
                                id: '2e9c94aa74ad43e4bdac4085dc55390c'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '994db48ef2c74a50880a08b925370251'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '997180283bb0498abe3e398e47b8a4fa'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99a59c1e540d49fc94da6fb0adb2ec6e'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99b8f40a22dc40b6955b12c7b5b66e99'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9a6ef5f13bf64aeabd4c1569786dc907'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allow_na'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a74b9e6e823474183f05808f6360b0e'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'justification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9a93c50b7feb45b5b8893a03e8535b0f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approver'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b0bbbbcbe8b46eb9444f089d98f95ea'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9b235f081d7c4a4d87e12d4563338f15'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_approval'
                            view: {
                                id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9b351a68bdcc422fa76aa8f6cc8253bd'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'verified_by'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b60aaa811b24f8a929f1b7152c8e3b4'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'definition_json'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9c10c3def65e4cb181441112d3943660'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad888b9a9f574985acd90a161cee4484'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c36ff2dd03e40eeb3a3c8e213e97c83'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9c52e0cb2c4342908a8e40c5b46170ba'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9ca5923e51a54e39813c43e65417c2c7'
                        key: {
                            sys_security_acl: '4f8cd40e4d034b938e335f18c2f16ca7'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9cbb8c7125b14a66b3e181756afee129'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'expires_at'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '9d03fc41543a4da89a8bd7a1ad595ba1'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: 'cd14ee54ad404e4e825c5100f889ec92'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d08fa443dd74634af92f9d631117907'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9d20b3dcf3e84105814f5c8e0f2af394'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allow_na'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9d4a3150e238469cbc43d35e03d85758'
                        key: {
                            sys_security_acl: '9a92b0970bf446dc8e32ed6586dec86f'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9d7ff2767f90435788a230b784c6ed5d'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9df06c74f61a415fa7e2ee4bf5c995b0'
                        key: {
                            list_id: {
                                id: '93f2ce7ef1474880b2380ee975649141'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'occurred_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9e85652e7fb349e091f5ff049f8e379f'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'verified_by'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'a03fec765ac3419d89ec44c66972639d'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_activity'
                            view: {
                                id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a05446e60c50410b965e87200538c062'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a101790010e14f7781dc6420cb658f6b'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'finding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a145c474c99842cc95ab936d0f921614'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            caption: 'Risk Finding'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'a147d7ffbe2c467e89b906b7f95a3d02'
                        key: {
                            model: '248610507b7542c7a8873aea1cf59866'
                            element: 'activity_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a17e3a4d3b7f4489a7e93c8559999c73'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a1acbe5839774b5aa1a7c184be0f18b8'
                        key: {
                            sys_ui_section: {
                                id: '52c28fa9b02546a18317047c16a9d91a'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'details'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1e48f95fee44415afdfd4a3521d8ee6'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a209077b387a4202b932191d12f6bca5'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception_reason'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'a41fc5bf254946a586c5df6f86d2971c'
                        key: {
                            endpoint: 'x_1503283_vrm_overview.do'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a447028dc4544defa8e438aee0183ae0'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a54553780e8b46b6b59fa8528cb2ff7d'
                        key: {
                            list_id: {
                                id: 'bd14e342059649fdb284fe1fab67041c'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5698f3a336b46bc9509e73f666d879f'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'remediation_owner'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a605415365da4f6ab7f9c351efb5cc61'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resolution'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            caption: 'Remediation Task'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a709b6b5e7724690841491b8346a5ecf'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: '478affa556d542bb9de5f64d2c43f025'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    view: {
                                        id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a953fcf8384d453f8abc380741302ac3'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a7128bcb49b046b9a1db2430a91f6e85'
                        key: {
                            sys_security_acl: '4178615e48fd41f6b3b1c47902a59f54'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a78cd9e38dd24596956afc36cf04bf7e'
                        key: {
                            list_id: {
                                id: 'b36e72c35feb426384b1a262df0567ba'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a81045aee2f5403aaa07943c00129921'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'decision_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a88d1c05db0e4d0d8b419e892b30294e'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a953fcf8384d453f8abc380741302ac3'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            caption: 'Questionnaire Version'
                            view: {
                                id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a9d3fb790cff47fcb5affe6fde32a258'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            caption: 'Vendor'
                            view: {
                                id: '3385dd17f91e461b995021169ee1e79c'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aa756b5213fd45b3adea3673fe454f84'
                        key: {
                            sys_security_acl: 'a34ae4fea6cb4f029d0b0b83ea8f5200'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aaa0f2bd8aa04fd589f2adb60e07c2ec'
                        key: {
                            sys_security_acl: 'a1740c45525a4a8abd0e602d9fd30586'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aafc479b02e142a0bcc165bcd8942edc'
                        key: {
                            sys_security_acl: 'c6d25a5e54694a8d8d397805df9c720c'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'ab5c3a04e3334d60bfd46d6431b80f3d'
                        key: {
                            ui_policy: {
                                id: '1e615f9b1bb14ae59cfdf1f23bdf0041'
                                key: {
                                    table: 'x_1503283_vrm_remediation'
                                    short_description: 'Require resolution details before submitting remediation for verification'
                                }
                            }
                            field: 'resolution'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab5f3d750d984c1b85a88b477cd0e316'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'assessor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab834fd9013548ddb5c5cf398b847886'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab9a020871174bd98d96f4c9adbc199c'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ac6581446d34471fb66ca094be090e6a'
                        key: {
                            list_id: {
                                id: '93f2ce7ef1474880b2380ee975649141'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ac75f13f320e44429fc44ea5ab1194a0'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lifecycle'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ad21f25307a3436a924b1284549f9486'
                        key: {
                            document_key: '61c1f47370de48fa9c7980824a0204b7'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ad6c4e29d47643288b60a41028a317c8'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_response'
                            caption: 'Assessment Response'
                            view: {
                                id: '72172120194242bca9e562dce2629143'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ad888b9a9f574985acd90a161cee4484'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            caption: 'Remediation Task'
                            view: {
                                id: '0216bfe5e99941dcbf1fb89b77f36d1c'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'ae12cbd1d2d14613b1bcef2ea0e884a2'
                        key: {
                            category: 'x_1503283_vrm_approval'
                            prefix: 'VRP'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aef1f9fb67d6437d8507f9b37fe02c85'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'actor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af94ddedca8b4340b6765f4658a3a37d'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'risk_band'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b0dfacfb6f4647c8ba915a6351f3aeed'
                        key: {
                            name: 'x_1503283_vrm_approval'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b0fabc059c724c529dd3a72f5e8bc3f4'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'state'
                            value: 'closed_verified'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b10a698bcf8948c094e24c2f3a3d9f6e'
                        key: {
                            list_id: {
                                id: '14f6c461871542d9a723016e082666f2'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b166df6df9ed4926a930e904e17e32a3'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitted_at'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b19665a6883841489ac5b536591c998b'
                        key: {
                            list_id: {
                                id: '14f6c461871542d9a723016e082666f2'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b1c559169748419096225c5ad6a31713'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question_text'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'b2379d9d81b14130b3de749780af277b'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            view: {
                                id: '437b76b552334383a194d6305581a729'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b36a5ebbb6c1459280b84f0d43434cd6'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_band'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'b36e72c35feb426384b1a262df0567ba'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b4600e7e004d472585588212c845e289'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_band'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b499d05ed5b94a32af7ee0b654aaad4b'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'risk_band'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4b969d3803e44e4afece777dc5b619a'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'flow_processed'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b4c1efbf80ae4909b71ff45a29dcfefb'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b4ebb2576f974eb9894073c7b8ad5575'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b5647a7f0c064ea3838cec5f01185305'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            value: 'annually'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b595b668889845b3b2c22b590d7c497c'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5b702d471f34a5c8bf2392966a969a6'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'remediation'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b63afa45b12d41828bfbd82c8387563a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a953fcf8384d453f8abc380741302ac3'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'b4647b36805f4c1fa752897fe64f8fd7'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b71305d4bc6748bbbbae4c476dc5ad3f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b77a641520b4408ca72b6789c6aaf5e7'
                        key: {
                            sys_security_acl: '01cca2306e6d466db5cd101cceddaeb7'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b77d568f94f249f390b05925205208f0'
                        key: {
                            sys_security_acl: '2a5fc6040b114802a8640d8af09e6420'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b7ea871019a14fbbb763cc41424d39cd'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b8c0de379cfa460da26a26540939ecfd'
                        key: {
                            sys_ui_section: {
                                id: '7b1aec9441944eab95b495266430a3ba'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approver'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b8d4429c67564d41b57eb22dff46a45c'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b92abc5593fa46caac51fa833afe57e8'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ba7ce0e21e9e451f8f6c824ad3c96182'
                        key: {
                            sys_security_acl: 'c379e8a6272442a1a2aaf9dbf8694bb2'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bab57afba3a9439f90566255150862bf'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'state'
                            value: 'resolved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'badf6ec7af0740aa83496263fa8d6d83'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception_until'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'badffde59554499e9a1bcbb0500b99c1'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'remediation'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'bb82ffef5e1647e8879d95291d10f1d2'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: '9b235f081d7c4a4d87e12d4563338f15'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bb86c77d6f2f41aea1d9c4d2de5fe823'
                        key: {
                            name: 'x_1503283_vrm_activity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bb8d5fb61fc14d9fb492ce114af6d4e0'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_score'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bbb2acdb08f14cc1b99a7a176e5b2069'
                        key: {
                            list_id: {
                                id: '5a72f720e25a422e866d9c101b17635d'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bbf66c638000438c8f298daf33352366'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'approved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'bd14e342059649fdb284fe1fab67041c'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd3cdc0fe67f4f7f8e0274d83690c47a'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'risk'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd9d51afbea645f49e6a952bb426f53a'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'latest_assessment'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'bedd22ebbfa74a788d2e20e688e96047'
                        key: {
                            name: 'x_1503283_vrm_response'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf3e8ddff4884b4582057e60e267a704'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c0f4ade0f1b74a62aac75687857a55e5'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c10bd46ec6584e05a8dbf2a91847508b'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'occurred_at'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c12cc5e2c39f453ab34690e023a9628c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_score'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c1ed195ce389423f82f00003f38193ca'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approved_by'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c22dc767de974c9da576b466f150f2b2'
                        key: {
                            sys_ui_section: {
                                id: '2c5b819794344a82b33bf5e6f4d90325'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'remediation_owner'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c300d2a87361492d93c9b5c1a0322345'
                        key: {
                            sys_ui_form: {
                                id: 'dc3734f2824040ed8b060890a4deef03'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'd38b84c1f0fd408a912bf3f65fd431b6'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3b89adfc0f14349b3e7ac913b66a3cc'
                        key: {
                            name: 'var__m_sys_hub_action_input_248610507b7542c7a8873aea1cf59866'
                            element: 'activity_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4161028073049639f4093aa386222d4'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'submitted_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c417e01d26d64f8bb8b34dbf2c2f6b01'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c4a01974b1d54a0092715a8a87c290fb'
                        key: {
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c530af0ebd43433ca8d6a4deadd20b61'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c54d9991746f4637bdd31d7281c9edd9'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6305a93e4e64c16be414c5825519da2'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c6b2915ba52044edba50bb11636597cb'
                        key: {
                            list_id: {
                                id: '2e9c94aa74ad43e4bdac4085dc55390c'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c712c81c1e2a4d888bc38bf8079b3e81'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'finding'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c7f295187a37458993df1adb8e65006b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'justification'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c830324328db42f1a87fb92e4e40c273'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c84198ba7a4c43aa90b8ce833c990e68'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'critical'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c874d752b77948eea7a903d3c7407c0a'
                        key: {
                            sys_security_acl: '64908fc1acda446aae8982da97eb4e30'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c923ff57bc6b415891326a1d8a8f8830'
                        key: {
                            list_id: {
                                id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'risk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca0240bfe6464b2fbcaeb4146ff4b327'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'lifecycle'
                            value: 'ready_for_approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ca2617da95ef4bec838afee84491827d'
                        key: {
                            sys_ui_section: {
                                id: 'a669fde626dc40fa8a32af9a7ee6ded7'
                                key: {
                                    name: 'x_1503283_vrm_remediation'
                                    caption: 'Remediation Task'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cb4f5b69a7144443af0626aef2aba876'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cb617ae160fd4c0ca0f0a7758e31a780'
                        key: {
                            list_id: {
                                id: '2e9c94aa74ad43e4bdac4085dc55390c'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'cd14ee54ad404e4e825c5100f889ec92'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_response'
                            view: {
                                id: '72172120194242bca9e562dce2629143'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd4ac0cdc9294a2393518ee3e6daddc9'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ce4a96d114074d609b5ec929600eafb3'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approved_at'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cf6cf82ff1bf4d2ebdb97316b4f1867c'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question_text'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf85c2b2da3d48849576f2a63dc595bd'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfc66a48fa8044fbbbb32ec19c76aea8'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'evidence_required'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd0d1cfa02f934b18910ac6a0fc800437'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'ad6c4e29d47643288b60a41028a317c8'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: '72172120194242bca9e562dce2629143'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'applicable'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd1200ef64a0a4d68ba7ce44df1fe4928'
                        key: {
                            list_id: {
                                id: '2e9c94aa74ad43e4bdac4085dc55390c'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd142d3ba666f4a4b92c56d042510cb90'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd213ff2606714453b23ab8e4a11274d3'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd21fd809180b4c03805a0d7ceb934a7d'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd27e525c24d34659abf65aa3d14d6745'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'version'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd2a2c2e46a214d77b15798f0d766001c'
                        key: {
                            list_id: {
                                id: '14f6c461871542d9a723016e082666f2'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'finding'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd2c3153df8ef48a6a6471d9c9c15bc7a'
                        key: {
                            list_id: {
                                id: 'b36e72c35feb426384b1a262df0567ba'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'score'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'd38b84c1f0fd408a912bf3f65fd431b6'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            caption: 'Questionnaire Version'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd46d8b92801d4ee1b3178641c8bbe956'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'state'
                            value: 'requested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5106cd4b264456abbf3712aadc006e6'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'expires_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd559a19fec05426184bc92ffe11c48bd'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd6475b7bc96f4ec285cd07d0a1893f7a'
                        key: {
                            list_id: {
                                id: '93f2ce7ef1474880b2380ee975649141'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'actor'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd69f9f6d21eb4eb5ba46c0311aa696a7'
                        key: {
                            list_id: {
                                id: 'b36e72c35feb426384b1a262df0567ba'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'risk_band'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd7ea83d2a5d54908af30a94d231b52dd'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '4eeec0fbf1834edab236f5fb4f707ce5'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'details'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd7f92ef2ffa8470fb874730aab88dcdf'
                        key: {
                            sys_ui_action: '0f5c13caed2e4070b793111771ad7387'
                            sys_user_role: {
                                id: 'ffd9667de5dc42beb0b5bbcbec732cb9'
                                key: {
                                    name: 'x_1503283_vrm.assessor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd8268ad8976747459ec9cb76de80a27e'
                        key: {
                            list_id: {
                                id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd84953f30b5c4c04bb0e7a08933c889b'
                        key: {
                            sys_ui_action: '0f5c13caed2e4070b793111771ad7387'
                            sys_user_role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd901ebc1688c4a2b9caad603b4edf76c'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'state'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd92e964a44ce4acca3579967b466a11c'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9a06a9d14b8452dacf14d19b614d3ed'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'da54b826b28d4e078ec9dd3843e33fb3'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '4eeec0fbf1834edab236f5fb4f707ce5'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'aed5a0b5eb6e4ea181b2d9ea7074019a'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dae3e5b682a14b0e8eccec29710d3b65'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'db0dcd0b212d46f0a7c9747248fe52a7'
                        key: {
                            sys_ui_section: {
                                id: 'd38b84c1f0fd408a912bf3f65fd431b6'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    caption: 'Questionnaire Version'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'code'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'db225c67db6d42caac80e5fb4953b73a'
                        key: {
                            sys_ui_form: {
                                id: '37c72b48d0944566a91b5109ce3b59f6'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1f1807c491ed4bbd9eb03dbe4c2f2eb9'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'db75315601514b5f87f1dcb2c4779d94'
                        key: {
                            list_id: {
                                id: 'f4ae8d8f86d44018ab89b41a3670a4e1'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db9273f4050441a1b5110186e10d3ff4'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'expires_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dbb066d550fe42f49fb9729190a30da2'
                        key: {
                            sys_security_acl: 'caa2ac8a6e92471aa3a96824d0327ed0'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc0692ff2cdb4ff69ae02cd70607d6b1'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'verified_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'dc3734f2824040ed8b060890a4deef03'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd2a9657b28e4ebf8f9de1395f852f5e'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'justification'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ddfa35b7d3c649ac89af248bef027ac7'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'de1451cc4ec7474c8aae51dfe9b2d887'
                        key: {
                            sys_ui_action: '1774cdc573f040009630dec599b3523c'
                            sys_user_role: {
                                id: '82764b727e2046fe85cc37393947e897'
                                key: {
                                    name: 'x_1503283_vrm.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de6c078a5d26427d8ec8b7945878969e'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'approved_at'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'de7f837d335e4a17aed1231b72974bf2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '10c3a71395b74bc2b1b3332bce337dc7'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'ed30185167b745b49b21c182dcf486fc'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception_reason'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df0c53c041a54477be63f3a90405135c'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'decided_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df1b45bfa9df44de9c90347fb6ef911d'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'resolution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df6efac3ccc94832a092b36881e191da'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dfc061ebabab440aa1dfb4dfe50f330e'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'dfeee4b3330345a48155a38929a851b7'
                        key: {
                            sys_ui_action: '20a1c954c26a41678f0c778d80c65a38'
                            sys_user_role: {
                                id: '82764b727e2046fe85cc37393947e897'
                                key: {
                                    name: 'x_1503283_vrm.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e1ff77fc9c974caaa8134ec982618325'
                        key: {
                            list_id: {
                                id: '7c6e687eb52041709a6399e37b620f3b'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'question_text'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e21185e03cfe4f04a2e64b210106a2b3'
                        key: {
                            sys_security_acl: '71185217b08c48d6bfd54268a2afbe1c'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e27a323f94ea4382b896c6df51368d20'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e27e8141d9df4cf0a1c908d05b6df34b'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'risk_band'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e2bd60f2d7d144058ce0527ec471c27d'
                        key: {
                            sys_security_acl: 'bed66d86e7b94d85911bb5eb9a2a1169'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e2e670d1fee44724bff93af503c6013a'
                        key: {
                            sys_ui_section: {
                                id: '8d742dc2ae9d4a83950c95dbc88055f2'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'critical_failed'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e320e165c24a48ed974410b0d5e7945a'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'question_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e32d39abd57a467881fca5849be49bd3'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'critical_failed'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e33d8fa9b3cd48f1ba2da80baf8a4fd0'
                        key: {
                            list_id: {
                                id: '7c6e687eb52041709a6399e37b620f3b'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'justification'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'e3dee6e8380d4c9fa0cd7c08beaba4f6'
                        key: {
                            sys_ui_action: '66fb901b9aca4b0a909a7effb1dbadcd'
                            sys_user_role: {
                                id: '82764b727e2046fe85cc37393947e897'
                                key: {
                                    name: 'x_1503283_vrm.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e441c22fd7d546a78f7070696a96ece2'
                        key: {
                            model: '248610507b7542c7a8873aea1cf59866'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'e4cfc55637484d6d801c7105c253c872'
                        deleted: true
                        key: {
                            name: 'x_1503283_vrm_finding'
                            view: {
                                id: 'ed30185167b745b49b21c182dcf486fc'
                                key: {
                                    name: 'default_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e4e3b8bd8c7f42acb3c4a63ef4359375'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e556eb1ce5cb4dddba9323e76a3b580c'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e674502d4c88450b9bf8c67e3c898e78'
                        key: {
                            sys_security_acl: 'ac9f0069ba8240e1820eea37c7e1a613'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'e7030573595c470a822705a31a74435f'
                        key: {
                            ui_policy: {
                                id: '1f83ed04f39a4bb0b3bfa198e863ae50'
                                key: {
                                    table: 'x_1503283_vrm_finding'
                                    short_description: 'Critical findings cannot request risk exceptions'
                                }
                            }
                            field: 'exception_reason'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e7461c3ce5074ae9b8ba45b8d8c6bea6'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e79fa86421bb47b6899e676ca94da8f4'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8057457301740578c1bf1cae8429cc8'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e94443c23eb1486e909037e792d03dcb'
                        key: {
                            list_id: {
                                id: '5a72f720e25a422e866d9c101b17635d'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e9bd8c9b84dc4d43908327efa082e6a5'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea4b5ddcec9345759e9dfa5d123a8d0f'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ea6d74bfa05c49ae98149a59fa2f7fa3'
                        key: {
                            sys_security_acl: '2ab7c86c79ac4905a47a4f4f1af2f5b0'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ec35303b5ad44e82b09edd4555f32a93'
                        key: {
                            sys_security_acl: 'fda0948143264f3faec82e234f2603f3'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec3be73cbabc4cc19cce09dee091124b'
                        key: {
                            name: 'x_1503283_vrm_exception'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee49a787b0d24d02998498576aa4feff'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'questionnaire'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f07d177f40954efc816c07df2913a59a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '39d59010eed44caf9f7a188e51774002'
                                key: {
                                    name: 'x_1503283_vrm_exception'
                                    caption: 'Risk Exception'
                                    view: {
                                        id: '22074f08fde84e5f991e1ffe48938934'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f093a94209ab490db748cc23f6db28a5'
                        key: {
                            name: 'var__m_sys_hub_action_output_248610507b7542c7a8873aea1cf59866'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f096d1464e4d464b9741244fe23a8baa'
                        key: {
                            sys_ui_action: 'a321baa65a78464eb13c6de394e6b914'
                            sys_user_role: {
                                id: '52c1299e0a1d4411a7ff96d1a5cb1b29'
                                key: {
                                    name: 'x_1503283_vrm.app_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1cd0bdb1a04420382e98140423637fc'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2064eb9774c4271a21e0c0a27f1a452'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f2891e121f6947d9be0bfc08b0a20c95'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'state'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f2c6b266024344ddbe58d4c2589df40f'
                        key: {
                            id: '61c1f47370de48fa9c7980824a0204b7'
                            table: 'var__m_sys_hub_step_ext_input_61c1f47370de48fa9c7980824a0204b7'
                            field: 'activity_id'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f2e22b316a374d0d8970c009c33c3429'
                        key: {
                            list_id: {
                                id: '5a72f720e25a422e866d9c101b17635d'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f314190138a4404399bc46a783f92ca0'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f37ab1ca3eff4fecb966006694749146'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f451ac46bae04be8a643857a655894ea'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'exception_until'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4551f6e96c84d85b5d8f439baeb9f64'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'next_review'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4667b94aa784d22b5f160c9243b0938'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'f4ae8d8f86d44018ab89b41a3670a4e1'
                        key: {
                            name: 'x_1503283_vrm_questionnaire'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4c1f1ab568349aabf9325a60d759c06'
                        key: {
                            name: 'x_1503283_vrm_remediation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4ce5408793f4675a73b6aa0be1e3709'
                        key: {
                            name: 'x_1503283_vrm_assessment'
                            element: 'score'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f51b6de70b624d259afb131c1f7d6045'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            element: 'remediation'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'f58ea2c5a9c448cb8ed2e64295acf7eb'
                        key: {
                            name: 'x_1503283_vrm_finding'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f6d9db71cf1747b99567c2d3fdb7dfa4'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f748424f68a04eff87519932eb0a273d'
                        key: {
                            list_id: {
                                id: '7c6e687eb52041709a6399e37b620f3b'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'applicable'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f80cf482564a4658b376243b2808a048'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '668a048194e141aa919a70e6666d993b'
                                key: {
                                    name: 'x_1503283_vrm_approval'
                                    caption: 'Vendor Approval'
                                    view: {
                                        id: 'bb44260d47f446828ccc7f5bbbc35dca'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assessment'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f88ce77a0fc7423786a01c9fb76559ad'
                        key: {
                            name: 'x_1503283_vrm_response'
                            element: 'answer'
                            value: 'quarterly'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8fe594f77dd4b26a6aec9805bb190b1'
                        key: {
                            name: 'x_1503283_vrm_activity'
                            element: 'details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f91767ed012b4db6a5d5682be5c479be'
                        key: {
                            sys_security_acl: 'f62af2e7c5ac4da4b9b57e3ce52bcf02'
                            sys_user_role: {
                                id: '2678cb27f9ee49b186be15db9085268e'
                                key: {
                                    name: 'x_1503283_vrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f986d35437de40aabc78d586b99191ab'
                        key: {
                            sys_ui_section: {
                                id: '52c28fa9b02546a18317047c16a9d91a'
                                key: {
                                    name: 'x_1503283_vrm_activity'
                                    caption: 'Vendor Risk Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'action'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fae2b61cb2d44853b8db88f51c789784'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'remediation_owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'faf3c5041c7549e5a92256a01da35e79'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '293d581163d74046b5bbd7175e2e228f'
                                key: {
                                    name: 'x_1503283_vrm_assessment'
                                    caption: 'Vendor Assessment'
                                    view: {
                                        id: '437b76b552334383a194d6305581a729'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'score'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fbcc8d3355284eb5bcd8cbb8f44680a0'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'a9d3fb790cff47fcb5affe6fde32a258'
                                key: {
                                    name: 'x_1503283_vrm_vendor'
                                    caption: 'Vendor'
                                    view: {
                                        id: '3385dd17f91e461b995021169ee1e79c'
                                        key: {
                                            name: 'default_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd36666984994a4f89371fb5403b2ffe'
                        key: {
                            name: 'x_1503283_vrm_approval'
                            element: 'decision_notes'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fd6438b92d7847538b71fbd630e91aaa'
                        key: {
                            list_id: {
                                id: 'f4ae8d8f86d44018ab89b41a3670a4e1'
                                key: {
                                    name: 'x_1503283_vrm_questionnaire'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fe8c93137d6048228782c636327844df'
                        key: {
                            name: 'x_1503283_vrm_vendor'
                            element: 'risk_band'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fed5cd019b224f1b827c5bea6774715b'
                        key: {
                            sys_ui_section: {
                                id: '109fbd077c594b0fbc8b7d6719ae57b0'
                                key: {
                                    name: 'x_1503283_vrm_response'
                                    caption: 'Assessment Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'evidence_required'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ffd46932449944d8a012fae35bb1d16b'
                        key: {
                            sys_ui_section: {
                                id: 'a145c474c99842cc95ab936d0f921614'
                                key: {
                                    name: 'x_1503283_vrm_finding'
                                    caption: 'Risk Finding'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'critical'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ffd9667de5dc42beb0b5bbcbec732cb9'
                        key: {
                            name: 'x_1503283_vrm.assessor'
                        }
                    },
                ]
            }
        }
    }
}
