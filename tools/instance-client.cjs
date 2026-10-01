const { execFileSync } = require('node:child_process');
const path = require('node:path');
const BASE = 'https://dev311438.service-now.com';
let token;
function getToken() {
    if (!token) {
        token = execFileSync(process.execPath, [path.resolve(__dirname, '../node_modules/@servicenow/sdk/bin/index.js'),
            'auth', '--print', 'vendor-risk-pdi', '--format', 'bearer'], {
            encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 45000
        }).trim();
        if (!token || /\s/.test(token)) throw new Error('SDK did not return a valid authentication token');
    }
    return token;
}
async function request(route, { method = 'GET', data, auth, rawBody, headers = {} } = {}) {
    if (!route.startsWith('/api/')) throw new Error('Only the designated PDI REST APIs are permitted');
    const response = await fetch(BASE + route, {
        method, signal: AbortSignal.timeout(90000),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization: auth || 'Bearer ' + getToken(), ...headers },
        body: rawBody === undefined ? (data === undefined ? undefined : JSON.stringify(data)) : rawBody
    });
    const text = await response.text();
    let body; try { body = JSON.parse(text); } catch { body = { message: text.slice(0, 500) }; }
    return { status: response.status, ok: response.ok, body };
}
async function query(table, encoded, fields, auth) {
    const params = new URLSearchParams({ sysparm_query: encoded || '', sysparm_limit: '1000', sysparm_exclude_reference_link: 'true' });
    if (fields) params.set('sysparm_fields', fields);
    return request('/api/now/table/' + table + '?' + params, { auth });
}
module.exports = { BASE, request, query };
