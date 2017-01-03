import uniqueid from 'unique-id';
import $ from 'jquery';
import { escape } from 'he';

export function sluggify(text) {
    return text.toLowerCase().trim().replace(/(&amp;| & )/g, '-and-').replace(/&(.+?);/g, '').replace(/[\s\W-]+/g, '-');
}

export function parse(markdown, cb) {

    var renderer = new marked.Renderer({langPrefix: 'lang-'}),
        base = new marked.Renderer({langPrefix: 'lang-'}),
        modal = (href, text) => {
            var slug = 'modal-' + sluggify(text);
            return `<a href="#${slug}" uk-toggle><p class="uk-margin-large-bottom"><img src="${href}" alt="${text}"></p></a>
                    <div id="${slug}" class="uk-modal-full" uk-modal>
                    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
                    <button class="uk-modal-close-full" type="button" uk-close></button>
                    <img src="${href}" alt="${text}">
                    </div></div>`;
        },
        example = code => {

            let id = uniqueid(4);

            return `<div class="uk-position-relative">

                        <ul uk-tab>
                            <li><a href="#">Preview</a></li>
                            <li><a href="#">Markup</a></li>
                        </ul>

                        <ul class="uk-switcher uk-margin">
                            <li>${code}</li>
                            <li><pre><code id="${id}" class="lang-html">${escape(code)}</code></pre></li>
                        </ul>

                        <div class="uk-position-top-right uk-margin-small-top">
                            <ul class="uk-iconnav">
                                <li><a class="js-copy" rel="#${id}"><img src="../images/copy-to-clipboard.svg" uk-svg></a></li>
                                <li><a class="js-codepen" rel="#${id}"><img src="../images/test-flask.svg" uk-svg></a></li>
                            </ul>
                        </div>
                    </div>`;
        };

    renderer.strong = text => text=='Note' ? `<span class="uk-label">${text}</span>`:`<strong>${text}</strong>`;
    renderer.list = text => `<ul class="uk-list uk-list-bullet">${text}</ul>`;
    renderer.image = (href, title, text) => href.match(/modal$/) ? modal(href, text) : base.image(href, title, text);
    renderer.link = (href, title, text) => href.match(/\.md/) ? base.link(href.replace(/.md(.*)/, '$1'), title, text) : base.link(href, title, text);
    renderer.code = (code, lang, escaped) => lang == 'example' ? example(code) : '<div class="uk-margin-medium">' + base.code(code, lang, escaped) + '</div>';
    renderer.hr = () => `<hr class="uk-margin-large">`;
    renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-striped"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    renderer.heading = (text, level) => `<h${level} class="uk-h${level > 1 ? level + 1 : level} tm-heading-fragment"><a href="#${sluggify(text)}">${text}</a></h${level}>`;

    return marked(markdown, {renderer}, cb);
}

// https://blog.codepen.io/documentation/api/prefill/
export function openOnCodepen(code) {

    let data = {
        title: '',
        description: '',
        html: code,
        html_pre_processor: 'none',
        css: '',
        css_pre_processor: 'none',
        css_starter: 'neither',
        css_prefix_free: false,
        js: '',
        js_pre_processor: 'none',
        js_modernizr: false,
        js_library: '',
        html_classes: '',
        css_external: '',
        js_external: ''
    };

    data = JSON.stringify(data)
    // Quotes will screw up the JSON
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

    $(`<form action="http://codepen.io/pen/define" method="POST" target="_blank">
            <input type="hidden" name="data" value='${data}'>
        </form>`).appendTo('body').submit().remove();

}
