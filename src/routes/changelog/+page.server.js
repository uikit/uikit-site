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
        list({ items }) {
            return `<ul class="uk-list">${items.map((item) => this.listitem(item)).join('')}</ul>`;
        },

        listitem({ tokens }) {
            return `<li class="uk-flex uk-flex-top">
                    <span class="uk-label uk-label-${labels[section]} uk-margin-right uk-text-center uk-width-small tm-label-changelog uk-flex-none">${section}</span>
                    <div>${this.parser.parse(tokens)}</div>
                </li>`;
        },

        heading({ text, depth }) {
            text = text.replace(/\(.*?\)/, '<span class="uk-text-muted">$&</span>');

            if (depth === 2) {
                return `<h${depth} class="uk-h3">${text}</h${depth}>`;
            }

            if (depth === 3) {
                section = text;
            }

            return '';
        },
    };

    return new Marked({ renderer }).parse(markdown, { async: true });
}
