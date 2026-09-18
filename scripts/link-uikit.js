import {mkdir, readlink, symlink, unlink} from 'node:fs/promises';
import {dirname, relative, resolve} from 'node:path';

const target = resolve('node_modules/uikit');
const destination = resolve('static/assets/uikit');

await mkdir(dirname(destination), {recursive: true});

try {

    const existingTarget = resolve(dirname(destination), await readlink(destination));
    if (existingTarget === target) {
        process.exit(0);
    }

    await unlink(destination);
} catch (error) {
    if (error.code !== 'ENOENT') {
        throw error;
    }
}

await symlink(relative(dirname(destination), target), destination, 'dir');
