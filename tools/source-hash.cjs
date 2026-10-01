const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
function sourceHash() {
    const hash = crypto.createHash('sha256');
    function walk(dir) {
        for (const name of fs.readdirSync(dir).sort()) {
            if (name === 'generated') continue;
            const file = path.join(dir, name);
            if (fs.statSync(file).isDirectory()) walk(file);
            else hash.update(path.relative(root, file).replaceAll('\\', '/')).update(fs.readFileSync(file));
        }
    }
    walk(path.join(root, 'src'));
    hash.update(fs.readFileSync(path.join(root, 'now.config.json')));
    hash.update(fs.readFileSync(path.join(root, 'tools/generate-metadata.cjs')));
    return hash.digest('hex');
}
module.exports = { sourceHash };
