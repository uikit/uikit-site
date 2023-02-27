import adapter from '@sveltejs/adapter-static';
import { readFile } from 'node:fs/promises';
import crypto from 'crypto';

process.env.PUBLIC_CACHE = createHash(await readFile('./package.json', 'utf-8'), 2);

const config = {
    kit: {
        adapter: adapter(),
    },
};

export default config;

function createHash(data, length) {
    return crypto.createHash('shake256', { outputLength: length }).update(data).digest('hex');
}
