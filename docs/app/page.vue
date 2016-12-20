<template>
    <div>
        <div class="uk-alert uk-alert-danger" v-if="error">{{ error }}</div>
        <div ref="page"></div>
    </div>
</template>

<script>

import $ from 'jquery';
import { escape } from 'he'

const navigation = require('./navigation.json');

let components = [];

Object.keys(navigation['Components']).forEach((label) => {
    components.push(navigation['Components'][label]);
});

function copyToClipboard(code) {

    let successful;

    $('<textarea></textarea>')
        .css({opacity: '0', position : 'fixed' })
        .val(code)
        .appendTo('body')
        .select()
        .each(function() { successful = document.execCommand('copy') })
        .remove();

    return successful;
}

function openOnCodepen(code) {

    let data = {
        title              : '',
        description        : '',
        html               : code,
        html_pre_processor : 'none',
        css                : '',
        css_pre_processor  : 'none',
        css_starter        : 'neither',
        css_prefix_free    : false,
        js                 : '',
        js_pre_processor   : 'none',
        js_modernizr       : false,
        js_library         : '',
        html_classes       : '',
        css_external       : '',
        js_external        : ''
    };

    data =  JSON.stringify(data)
      // Quotes will screw up the JSON
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");


    var form =$(`
        <form action="http://codepen.io/pen/define" method="POST" target="_blank">
        <input type="hidden" name="data" value='${data}'>
        </form>
    `);

    form.appendTo('body');

    setTimeout(()=>{
        form[0].submit();
        form.remove();
    }, 10);

}

export default {

    data() {
        return {
            loading: false,
            page: null,
            error: null,
            cache: {}
        }
    },

    mounted() {
        this.$page = $(this.$refs.page);
        this.loadPage(this.$route.params.page);
    },

    watch: {
        $route () {
            this.loadPage(this.$route.params.page);
        }
    },

    methods: {

        loadPage(page) {

            scrollTo(0, 0);

            this.loading = true;
            this.$page.html('');
            this.error = null;
            this.ids = {};

            this.$parent.component = false;
            this.$parent.page = page;

            var defer = $.Deferred();

            defer.promise().done(content => {
                this.loading = false;
                this.$page.html(content);
                Vue.nextTick(() => {

                    $('pre code').each((i, block) => {
                        hljs.highlightBlock(block);
                    });

                    $('a.js-copy').on('click', function(e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();

                        if (copyToClipboard($(this.getAttribute('rel')).text())) {
                            UIkit.notification({message: "Copied to clipboard", pos: 'bottom-right'});
                        } else {
                            UIkit.notification({message: "Copy failed", status: 'danger', pos: 'bottom-right'});
                        }
                    });

                    $('a.js-codepen').on('click', function(e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();

                        openOnCodepen($(this.getAttribute('rel')).text());
                    });

                    $('[href="#"]', this.$el).on('click', e => {
                        e.preventDefault();
                    });

                    this.createIds();

                    this.$parent.component = components.indexOf(page) != -1 ? page : false;

                    if (location.hash && $(location.hash.length)) {
                        scrollTo(0, $(location.hash).offset().top);
                    }
                });

            }).fail(() => {
                this.loading = false;
                this.error = 'Failed loading page';
            });

            if (this.cache[page]) {
                defer.resolve(this.cache[page]);
                return;
            }

            $.get(`pages/${page}.md`, {nc: Math.random()}).done(content => {

                this.parse(content, (err, content) => {

                    if (err) {
                        defer.reject(err);
                        return;
                    }

                    this.cache[page] = content;
                    defer.resolve(content)
                });

            }).fail(err => reject(err));
        },

        parse(markdown, cb) {

            var renderer = new marked.Renderer({langPrefix: 'lang-'});
            var base = new marked.Renderer({langPrefix: 'lang-'});
            var slugify = text => text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
            var modal = (href, text) => {
                var slug = 'modal-'+slugify(text);
                return `<a href="#${slug}" uk-toggle><p class="uk-margin-large-bottom"><img src="${href}" alt="${text}"></p></a>
                    <div id="${slug}" class="uk-modal-full" uk-modal>
                    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
                    <button class="uk-modal-close-full" type="button" uk-close></button>
                    <img src="${href}" alt="${text}">
                    </div></div>`;
            };
            var example = code => {

                let id = 'code'+Math.floor((1 + Math.random()) * 0x10000).toString(16);

                return `
                <div class="uk-position-relative">

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
                            <li><a class="js-copy" rel="#${id}"><i uk-icon="icon: copy;ratio:0.8"></i></a></li>
                            <li><a class="js-codepen" rel="#${id}"><i uk-icon="icon: file-edit;ratio:0.8"></i></a></li>
                        </ul>
                    </div>
                </div>
                `;
            }

            renderer.list = text => `<ul class="uk-list uk-list-bullet">${text}</ul>`;
            renderer.image = (href, title, text) => href.match(/modal$/) ? modal(href, text) : base.image(href, title, text);
            renderer.link = (href, title, text) => href.match(/\.md/) ? base.link(href.replace(/.md(.*)/, '$1'), title, text) : base.link(href, title, text);
            renderer.code = (code, lang, escaped) => lang == 'example' ? example(code) : '<div class="uk-margin-medium">'+base.code(code, lang, escaped)+'</div>';
            renderer.hr = () => `<hr class="uk-margin-large">`;
            renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-striped"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
            renderer.heading = (text, level) => {
                return `<h${level} class="uk-h${level>1 ? level+1 : level} tm-docs-heading"><a href="#${text.toLowerCase().replace(/ /g,"-")}">${text}</a></h${level}>`;
            }

            return marked(markdown, {renderer}, cb);
        },

        createIds () {

            let $this = this;

            this.$parent.ids = {};

            $('h1,h2', this.$el).each(function () {

                let $element = $(this), text = $(this).text().replace('#', ''), id = text.toLowerCase().replace(/ /g, '-');

                $element.attr('id', id);

                if ($element.is('h2')) {
                    $this.$parent.ids[text] = id;
                }
            });

        }
    }

}

</script>
