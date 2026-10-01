// Disable superseded synthetic personas. Preserve the latest accepted demonstration users.
const fs = require('node:fs');
const path = require('node:path');
const { request, query } = require('./instance-client.cjs');
async function main() {
    const report = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../test-results/instance-tests.json'), 'utf8'));
    if (!report.complete) throw new Error('Cleanup requires a completed acceptance run');
    const keep = new Set(Object.values(report.personas).map(persona => persona.id));
    const response = await query('sys_user', 'user_nameSTARTSWITHvrm.test.^active=true', 'sys_id,user_name');
    if (!response.ok || !Array.isArray(response.body.result)) throw new Error('Could not list synthetic personas');
    let count = 0;
    for (const user of response.body.result) {
        if (keep.has(user.sys_id)) continue;
        if (!/^vrm\.test\.(requester|assessor|owner|approver|outsider)\.[a-z0-9]+$/.test(user.user_name)) continue;
        const result = await request('/api/now/table/sys_user/' + user.sys_id, { method: 'PATCH', data: { active: false, locked_out: true } });
        if (!result.ok) throw new Error('Failed to disable superseded synthetic persona');
        count++;
    }
    console.log(`Disabled ${count} superseded synthetic personas; preserved ${keep.size} accepted demo personas.`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
