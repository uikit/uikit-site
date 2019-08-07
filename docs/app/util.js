/* global marked */

import uniqid from 'uniqid';
import {escape} from 'he';
import {append, includes, remove} from 'uikit-util';

export function sluggify(text) {
    return text.toLowerCase().trim().replace(/(&amp;| & )/g, '-and-').replace(/&(.+?);/g, '').replace(/[\s\W-]+/g, '-');
}

export function parse(markdown, cb) {

    const renderer = new marked.Renderer({langPrefix: 'lang-'});
    const base = new marked.Renderer({langPrefix: 'lang-'});
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
    const example = code => {

        const id = uniqid('code-');

        return `<div class="uk-position-relative uk-margin-medium">

                    <ul uk-tab="swiping: false">
                        <li><a href="#">Preview</a></li>
                        <li><a href="#">Markup</a></li>
                    </ul>

                    <ul class="uk-switcher uk-margin">
                        <li>${code}</li>
                        <li><pre><code id="${id}" class="lang-html">${escape(code)}</code></pre></li>
                    </ul>

                    <div class="uk-position-top-right uk-margin-small-top">
                        <ul class="uk-iconnav">
                            <li><a class="js-copy" uk-tooltip="Copy to Clipboard" rel="#${id}"><img class="uk-icon" src="../images/icon-clipboard.svg" uk-svg></a></li>
                            <li><a class="js-codepen" uk-tooltip="Edit on Codepen" rel="#${id}"><img class="uk-icon" src="../images/icon-flask.svg" uk-svg></a></li>
                        </ul>
                    </div>
                </div>`;
    };

    renderer.strong = text => {
        switch(text) {
            case 'Note':
                return `<span class="uk-label">${text}</span>`;
            case 'Danger':
                return `<span class="uk-label uk-label-danger">${text}</span>`;
            default:
                return `<strong>${text}</strong>`;
        }
    }
    renderer.list = text => `<ul class="uk-list uk-list-bullet">${text}</ul>`;
    renderer.image = (href, title, text) => href.match(/modal$/) ? modal(href, text) : base.image(href, title, text);
    renderer.link = (href, title, text) => href.match(/\.md/) ? base.link(href.replace(/.md(.*)/, '$1'), title, text) : base.link(href, title, text);
    renderer.code = (code, lang, escaped) => lang === 'example' ? example(code) : '<div class="uk-margin-medium">' + base.code(code, lang, escaped) + '</div>';
    renderer.hr = () => '<hr class="uk-margin-large">';
    renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    renderer.heading = (text, level) => `<h${level} id="${sluggify(text)}" class="uk-h${level > 1 ? level + 1 : level} tm-heading-fragment"><a href="#${sluggify(text)}">${text}</a></h${level}>`;

    return marked(markdown, {renderer}, (err, content) => {

        if (includes(content, '{%isodate%}')) {
            content = content.replace(/{%isodate%}/g, (new Date(Date.now() + 864e5 * 7)).toISOString().replace(/\.(\d+)Z/, '+00:00'));
        }

        if (cb) {
            cb.apply(this, [err, content]);
        }
    });
}

// https://blog.codepen.io/documentation/api/prefill/
export function openOnCodepen(code) {

    const regexp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const scripts = (code.match(regexp) || []).join('\n').replace(/<\/?script>/g, '');
    const base = location.href.substring(0, location.href.lastIndexOf('/'));

    code = code
        .replace(regexp, '')
        .replace(/<(?:img|a)[^>]+(?:src|href)="(?!\/|#|[a-z0-9\-.]+:)(.+?)"|url\((?!\/|#|[a-z0-9\-.]+:)(.+?)\)/g, (match, src, url) => match.replace(src || url, `${base}/${src || url}`));

    const nc = Date.now() % 9999;
    let data = {
        title: '',
        description: '',
        html: code,
        html_pre_processor: 'none',
        css: '',
        css_pre_processor: 'none',
        css_starter: 'neither',
        css_prefix_free: false,
        js: scripts || '',
        js_pre_processor: 'none',
        js_modernizr: false,
        html_classes: '',
        css_external: `https://getuikit.com/assets/uikit/dist/css/uikit.css?nc=${nc}`,
        js_external: `https://getuikit.com/assets/uikit/dist/js/uikit.js?nc=${nc};https://getuikit.com/assets/uikit/dist/js/uikit-icons.js?nc=${nc}`
    };

    data = JSON.stringify(data)
        // Quotes will screw up the JSON
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

    const [form] = append(document.body, `<form action="https://codepen.io/pen/define" method="POST" target="_blank">
            <input type="hidden" name="data" value='${data}'>
        </form>`);

    form.submit();
    remove(form);

}

export function html(el, html) {
    el.innerHTML = '';
    const range = document.createRange();
    range.selectNode(el);
    el.appendChild(range.createContextualFragment(html));
}
