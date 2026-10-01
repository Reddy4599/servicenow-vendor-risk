const fs = require('node:fs');
const path = require('node:path');
const { sourceHash } = require('./source-hash.cjs');
const report = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../test-results/instance-tests.json'), 'utf8'));
if (!report.complete || report.failed !== 0 || report.passed !== 23) throw new Error('All 23 live acceptance cases must pass before release');
if (report.sourceHash !== sourceHash()) throw new Error('Source changed after acceptance; rerun live tests before release');
if (Date.now() - Date.parse(report.timestamp) > 86400000) throw new Error('Acceptance evidence must be less than 24 hours old');
console.log('Release gate passed: 23 live acceptance cases and matching source fingerprint.');
