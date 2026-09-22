import {$} from 'execa';

await $`git checkout develop`;

const branch = (await $`git branch --show-current`).stdout;

if (branch !== 'develop') {
    console.error('Current branch is not develop');
    process.exit(1);
}

await $`git pull`;

const porcelain = (await $`git status --porcelain`).stdout;
if (porcelain) {
    console.error('The repository is not clean');
    process.exit(1);
}

const version = (await $`pnpm view uikit version`).stdout;
await $`pnpm update uikit@${version}`;
const changes = (await $`git status --porcelain`).stdout;
if (!changes) {
    console.log(`UIkit is already at version ${version}`);
    process.exit(0);
}

const message = `Bump UIkit to version ${version}`;
await $`git commit -am ${message}`;

await $`git push origin`;
await $`git checkout main`;
await $`git merge develop`;
await $`git push origin`;
await $`git checkout develop`;
