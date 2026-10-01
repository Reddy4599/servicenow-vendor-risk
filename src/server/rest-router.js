(function process(request, response) {
    try {
        var service = new VrmService();
        var payload = request.body.data || {};
        var action = String(request.pathParams.action || '');
        var result;
        if (action === 'create-vendor') { result = service.createVendor(payload); }
        else if (action === 'issue') { result = service.issue(payload.vendorId, payload.questionnaireId, payload.requestKey); }
        else if (action === 'save-responses') { result = service.saveResponses(payload.assessmentId, payload.answers); }
        else if (action === 'submit') { result = service.submit(payload.assessmentId); }
        else if (action === 'resolve') { result = service.resolve(payload.taskId, payload.resolution); }
        else if (action === 'verify') { result = service.verify(payload.taskId); }
        else if (action === 'request-exception') { result = service.exception(payload.findingId, payload.justification, payload.expiresAt); }
        else if (action === 'decide-exception') { result = service.decideException(payload.exceptionId, payload.decision); }
        else if (action === 'request-approval') { result = service.requestApproval(payload.vendorId); }
        else if (action === 'decide-approval') { result = service.decideApproval(payload.approvalId, payload.decision, payload.notes); }
        else if (action === 'maintenance') { result = service.maintenance(); }
        else { service.error('Unknown workflow action', 404); }
        response.setStatus(200); response.setBody({ ok: true, data: result });
    } catch (error) {
        response.setStatus(error.httpStatus || 400);
        response.setBody({ ok: false, error: String(error.message || error) });
    }
})(request, response);
