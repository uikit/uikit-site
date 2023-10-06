import GithubSlugger from 'github-slugger';
import hljs from 'highlight.js';
import { Marked, Renderer } from 'marked';
import { readFile, stat } from 'node:fs/promises';

export async function load({ params }) {
    return {
        test: await exists(`./static/assets/uikit/tests/${params.slug}.html`),
        doc: await parse(await readFile(`./docs/pages/${params.slug}.md`, { encoding: 'utf8' })),
    };
}

async function parse(markdown) {
    const base = new Renderer();
    const slugger = new GithubSlugger();

    let pageTitle;
    let ids = [];

    const renderer = {
        strong: (text) =>
            text === 'Note' ? `<span class="uk-label">${text}</span>` : `<strong>${text}</strong>`,

        list: (text) => `<ul class="uk-list uk-list-disc">${text}</ul>`,

        image: (href, title, text) =>
            href.match(/modal$/)
                ? modal(href, text, slugger.slug('modal'))
                : base.image(href, title, text),

        link: (href, title, text) =>
            href.match(/\.md/)
                ? base.link(href.replace(/(.*?).md(.*)/, '/docs/$1$2'), title, text)
                : base.link(href, title, text),

        code: (code, lang) =>
            lang === 'example'
                ? example(code, slugger.slug('code-example'))
                : `<div class="uk-margin-medium"><pre><code>${
                      hljs.highlightAuto(code).value
                  }</code></pre></div>`,

        hr: () => '<hr class="uk-margin-large">',

        table: (header, body) =>
            `<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`,

        heading(text, level) {
            if (level === 1) {
                pageTitle = text;
                return `<h1>${text}</h1>`;
            }

            const title = text.replaceAll(/<(\w+)>(.*?)<\/\1>/g, '$2');
            let id = slugger.slug(title);

            if (level === 2) {
                ids.push({ id, title });
            }

            return `<h${level} id="${id}" class="uk-h${
                level + 1
            } tm-heading-fragment"><a href="#${id}">${text}</a></h${level}>`;
        },
    };

    let content = await new Marked({ renderer }).parse(markdown, { async: true });

    if (content.includes('{%isodate%}')) {
        content = content.replace(
            /{%isodate%}/g,
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                .toISOString()
                .replace(/\.\d+Z/, '+00:00'),
        );
    }

    return { ids, content, title: pageTitle };
}

function modal(href, text, id) {
    return `<a href="#${id}" uk-toggle><p class="uk-margin-large-bottom"><img src="${href}" alt="${text}"></p></a>
            <div id="${id}" class="uk-modal-full" uk-modal>
                <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
                    <button class="uk-modal-close-full" type="button" uk-close></button>
                    <img src="${href}" alt="${text}">
                </div>
            </div>`;
}

function example(code, id) {
    return `<div class="uk-position-relative uk-margin-medium js-example">

                <ul uk-tab="swiping: false">
                    <li><a href="#">Preview</a></li>
                    <li><a href="#">Markup</a></li>
                </ul>

                <ul class="uk-switcher uk-margin">
                    <li>${code}</li>
                    <li><pre><code id="${id}">${hljs.highlightAuto(code).value}</code></pre></li>
                </ul>

                <div class="uk-position-top-right uk-margin-small-top">
                    <ul class="uk-iconnav">
                        <li><a href class="js-copy" uk-tooltip="Copy to Clipboard" rel="#${id}" role="button" aria-label="Copy to Clipboard"><img class="uk-icon" src="../images/icon-clipboard.svg" uk-svg></a></li>
                        <li><a href class="js-codepen" uk-tooltip="Edit on Codepen" rel="#${id}" aria-label="Edit on Codepen"><img class="uk-icon" src="../images/icon-flask.svg" uk-svg></a></li>
                    </ul>
                </div>
                
            </div>`;
}

async function exists(file) {
    try {
        return Boolean(await stat(file));
    } catch (e) {
        return false;
    }
}
