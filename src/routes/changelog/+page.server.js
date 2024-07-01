import { Marked } from 'marked';
import { readFile } from 'node:fs/promises';

export async function load() {
    return {
        changelog: await parse(
            await readFile('./static/assets/uikit/CHANGELOG.md', { encoding: 'utf8' }),
        ),
    };
}

const labels = {
    Added: 'success',
    Removed: 'warning',
    Deprecated: 'warning',
    Fixed: 'danger',
    Security: 'danger',
};

async function parse(markdown) {
    let section;
    const renderer = {
        list: (text) => `<ul class="uk-list">${text}</ul>`,

        listitem: ({ text }) => `<li class="uk-flex uk-flex-top">
                    <span class="uk-label uk-label-${labels[section]} uk-margin-right uk-text-center uk-width-small tm-label-changelog uk-flex-none">${section}</span>
                    <div>${text}</div>
                </li>`,

        heading(text, level) {
            text = text.replace(/\(.*?\)/, '<span class="uk-text-muted">$&</span>');

            if (level === 2) {
                return `<h${level} class="uk-h3">${text}</h${level}>`;
            }

            if (level === 3) {
                section = text;
            }

            return '';
        },
    };

    return new Marked({ renderer }).parse(markdown, { async: true });
}
