import { readFile } from 'node:fs/promises';
import { marked } from 'marked';

export async function load() {
    return {
        changelog: parse(
            await readFile('./static/assets/uikit/CHANGELOG.md', { encoding: 'utf8' })
        ),
    };
}

function parse(markdown) {
    let section;
    const renderer = new marked.Renderer();

    renderer.list = (text) => `<ul class="uk-list">${text}</ul>`;

    renderer.listitem = function (text) {
        let label = '';

        switch (section) {
            case 'Added':
                label = 'uk-label-success';
                break;

            case 'Removed':
            case 'Deprecated':
                label = 'uk-label-warning';
                break;

            case 'Fixed':
            case 'Security':
                label = 'uk-label-danger';
        }

        return `<li class="uk-flex uk-flex-top">
                                <span class="uk-label ${label} uk-margin-right uk-text-center uk-width-small tm-label-changelog uk-flex-none">${section}</span>
                                <div>${text}</div>
                            </li>`;
    };

    renderer.heading = (text, level) => {
        text = text.replace(/\(.*?\)/, '<span class="uk-text-muted">$&</span>');

        if (level === 2) {
            return '<h' + level + ' class="uk-h3">' + text + '</h' + level + '>';
        }

        if (level === 3) {
            section = text;
        }

        return '';
    };

    return marked(markdown, { renderer });
}
