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
                return `<ul uk-tab>
                    <li><a href="#">Preview</a></li>
                    <li><a href="#">Markup</a></li>
                </ul>
                <ul class="uk-switcher uk-margin">
                    <li>${code}</li>
                    <li><pre><code class="lang-html">${escape(code)}</code></pre>
                    </li>
                    <li></li>
                </ul>`;
            }

            renderer.list = text => `<ul class="uk-list uk-list-bullet">${text}</ul>`;
            renderer.image = (href, title, text) => href.match(/modal$/) ? modal(href, text) : base.image(href, title, text);
            renderer.link = (href, title, text) => href.match(/\.md/) ? base.link(href.replace(/.md(.*)/, '$1'), title, text) : base.link(href, title, text);
            renderer.code = (code, lang, escaped) => lang == 'example' ? example(code) : '<div class="uk-margin-medium">'+base.code(code, lang, escaped)+'</div>';
            renderer.hr = () => `<hr class="uk-margin-large">`;
            renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-striped"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
            renderer.heading = (text, level) => {
                return level == 2
                    ? `<h${level} class="uk-position-relative uk-h${level>1 ? level+1 : level}"><a class="uk-text-muted uk-link-muted uk-position-absolute uk-visible@m" href="#${text.toLowerCase().replace(/ /g,"-")}" style="transform:translateX(-30px)">#</a>${text}</h${level}>`
                    : `<h${level} class="uk-h${level>1 ? level+1 : level}">${text}</h${level}>`;
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
