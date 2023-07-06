import { readFile } from 'node:fs/promises';

export async function load() {
    return {
        stargazers_count: (await (await fetch('https://api.github.com/repos/uikit/uikit')).json())
            .stargazers_count,
        version: JSON.parse(
            await readFile('./static/assets/uikit/package.json', { encoding: 'utf8' }),
        ).version,
    };
}
