import { readFile } from 'node:fs/promises';

export async function load() {
    return {
        version: JSON.parse(
            await readFile('./static/assets/uikit/package.json', { encoding: 'utf8' }),
        ).version,
    };
}
