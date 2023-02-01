import { stat, readFile } from 'node:fs/promises';
import hljs from 'highlight.js';
import { marked } from 'marked';
import algoliasearch from 'algoliasearch';
import striptags from 'striptags';
const appid = import.meta.env.VITE_APP_ID;
const indexname = import.meta.env.VITE_INDEX_NAME;
const adminkey = import.meta.env.VITE_ADMIN_KEY;
const production = import.meta.env.PROD;
const client = algoliasearch(appid, adminkey);
const index = client.initIndex(indexname);
let cleared = false;
if (production) {
    index.clearObjects().then(() => {
        cleared = true;
    });
}

export async function load({ params }) {
    return {
        test: await exists(`./static/assets/uikit/tests/${params.slug}.html`),
        doc: parse(await readFile(`./docs/pages/${params.slug}.md`, { encoding: 'utf8' })),
    };
}

function sluggify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&amp;| & /g, '-and-')
        .replace(/&.+?;/g, '')
        .replace(/[\s\W-]+/g, '-');
}

let _id = 0;
let curcontent = '';
let curlvl1 = '';
let curlvl2 = '';
let curlvl3 = '';
function parse(markdown) {
    const renderer = new marked.Renderer({ langPrefix: 'lang-' });
    const base = new marked.Renderer({ langPrefix: 'lang-' });
    const modal = (href, text) => {
        const slug = `modal-${sluggify(text)}`;
        return `<a href="#${slug}" uk-toggle><p class="uk-margin-large-bottom"><img src="${href}" alt="${text}"></p></a>
                <div id="${slug}" class="uk-modal-full" uk-modal>
                    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
                        <button class="uk-modal-close-full" type="button" uk-close></button>
                        <img src="${href}" alt="${text}">
                    </div>
                </div>`;
    };
    const example = (code) => {
        const id = 'code-example-' + _id++;

        return `<div class="uk-position-relative uk-margin-medium js-example">

                    <ul uk-tab="swiping: false">
                        <li><a href="#">Preview</a></li>
                        <li><a href="#">Markup</a></li>
                    </ul>

                    <ul class="uk-switcher uk-margin">
                        <li>${code}</li>
                        <li><pre><code id="${id}" class="lang-html">${
            hljs.highlightAuto(code).value
        }</code></pre></li>
                    </ul>

                    <div class="uk-position-top-right uk-margin-small-top">
                        <ul class="uk-iconnav">
                            <li><a href class="js-copy" uk-tooltip="Copy to Clipboard" rel="#${id}"><img class="uk-icon" src="../images/icon-clipboard.svg" uk-svg></a></li>
                            <li><a href class="js-codepen" uk-tooltip="Edit on Codepen" rel="#${id}"><img class="uk-icon" src="../images/icon-flask.svg" uk-svg></a></li>
                        </ul>
                    </div>
                </div>`;
    };

    renderer.strong = (text) =>
        text === 'Note' ? `<span class="uk-label">${text}</span>` : `<strong>${text}</strong>`;
    renderer.list = (text) => `<ul class="uk-list uk-list-disc">${text}</ul>`;
    renderer.image = (href, title, text) =>
        href.match(/modal$/) ? modal(href, text) : base.image(href, title, text);
    renderer.text = (text) => {
        if (curlvl1 != '') {
            curcontent = curcontent + ' ' + text;
        }
        return text;
    };
    renderer.html = (html) => {
        curcontent = curcontent + ' ' + striptags(html);
        return html;
    };
    renderer.link = (href, title, text) =>
        href.match(/\.md/)
            ? base.link(href.replace(/(.*?).md(.*)/, '/docs/$1$2'), title, text)
            : base.link(href, title, text);
    renderer.code = (code, lang) => {
        return lang === 'example'
            ? example(code)
            : `<div class="uk-margin-medium"><pre><code>${
                  hljs.highlightAuto(code).value
              }</code></pre></div>`;
    };
    renderer.hr = () => '<hr class="uk-margin-large">';
    renderer.table = (header, body) => {
        let edited = body.replaceAll(/<\w+>|<\/\w+>?/g, ' ');
        edited = edited.replaceAll(/\s\s+/g, ' ');
        if (curlvl1 != '') {
            curcontent = curcontent + edited;
        }
        return `<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    };

    let pageTitle;
    let ids = [];
    let found = new Set();
    renderer.heading = (text, level) => {
        if (level === 1) {
            pageTitle = text;
        }

        if (production) {
            if (curlvl1 != '' && curcontent != '') {
                const urlbase = 'https://getuikit.com/docs/';
                let id = '';
                let url = '';
                let weight = 0;
                let lvl0 = 'Components';
                let lvl1 = curlvl1;
                let lvl2 = curlvl2 == '' ? null : curlvl2;
                let lvl3 = curlvl3 == '' ? null : curlvl3;
                const general = ['Home', 'Pro', 'Changelog', 'Download'];
                const getstarted = [
                    'Introduction',
                    'Installation',
                    'Less',
                    'Sass',
                    'JavaScript',
                    'Webpack',
                    'Custom icons',
                    'Avoiding conflicts',
                    'RTL support',
                    'Migration',
                ];
                if (general.indexOf(curlvl1) > -1) {
                    lvl0 = 'General';
                }
                if (getstarted.indexOf(curlvl1) > -1) {
                    lvl0 = 'Getting Started';
                }
                curcontent = curcontent.replaceAll('&#39;s', "'s");
                curcontent = curcontent.replaceAll(/&\w+;/g, '');
                if (curcontent.lastIndexOf(text) != -1) {
                    curcontent = curcontent.slice(0, curcontent.lastIndexOf(text));
                }
                let hierarchy = {
                    lvl0: lvl0,
                    lvl1: lvl1,
                    lvl2: lvl2,
                    lvl3: lvl3,
                    lvl4: null,
                    lvl5: null,
                };

                url = urlbase + lvl1.toLowerCase();

                if (lvl3 != null) {
                    id = (lvl0 + lvl1 + lvl2 + lvl3).toLowerCase().replaceAll(' ', '');
                    url = url + '#' + lvl3.toLowerCase().replaceAll(' ', '-');
                    weight = 3;
                } else if (lvl2 != null) {
                    id = (lvl0 + lvl1 + lvl2).toLowerCase().replaceAll(' ', '');
                    url = url + '#' + lvl2.toLowerCase().replaceAll(' ', '-');
                    weight = 2;
                } else {
                    id = (lvl0 + lvl1).toLowerCase().replaceAll(' ', '');
                    weight = 1;
                }

                const object = {
                    objectID: id,
                    content: curcontent,
                    hierarchy: hierarchy,
                    url: url,
                    weight: weight,
                    anchor: null,
                };
                if (cleared === false) {
                    setTimeout(() => {
                        index.saveObject(object).then(() => {});
                    }, 1000);
                } else {
                    index.saveObject(object).then(() => {});
                }
                curcontent = '';
            }
            if (level === 1) {
                curlvl1 = text;
                curlvl2 = '';
                curlvl3 = '';
                return `<h1>${text}</h1>`;
            } else if (level === 2) {
                curlvl2 = text;
                curlvl3 = '';
            } else if (level == 3) {
                curlvl3 = text;
            }
        }

        const title = text.replaceAll(/<(\w+)>(.*?)<\/\1>/g, '$2');
        let id = sluggify(title);

        while (found.has(id)) {
            id += '-2';
        }

        found.add(id);
        if (level === 2) {
            ids.push({ id, title });
        }

        return `<h${level} id="${id}" class="uk-h${
            level + 1
        } tm-heading-fragment"><a href="#${id}">${text}</a></h${level}>`;
    };

    return marked(markdown, { renderer }, (err, content) => {
        if (err) {
            throw err;
        }

        if (content.includes('{%isodate%}')) {
            content = content.replace(
                /{%isodate%}/g,
                new Date(Date.now() + 604800000).toISOString().replace(/\.\d+Z/, '+00:00')
            );
        }

        return { ids, content, title: pageTitle };
    });
}

async function exists(file) {
    try {
        return Boolean(await stat(file));
    } catch (e) {
        return false;
    }
}
