<template>

    <div>
        <div class="uk-alert uk-alert-danger" v-if="error">{{ error }}</div>
        <div ref="container" v-html="doc"></div>
    </div>

</template>

<script>

    import $ from 'jquery';
    import copy from 'copy-to-clipboard';
    import { parse, openOnCodepen } from './util';

    const navigation = require('./navigation.json');

    var components = Object.keys(navigation['Components']).map(label => navigation['Components'][label]);

    export default {

        data: () => ({
            loading: false,
            page: null,
            error: null,
            cache: {},
            doc: ''
        }),

        mounted() {

            $(this.$refs.container)

                .on('click', 'a.js-copy', e => {

                    e.preventDefault();
                    e.stopImmediatePropagation();
                    if (copy($(e.currentTarget.getAttribute('rel')).text())) {
                        UIkit.notification({message: "Copied!", pos: 'bottom-right'});
                    } else {
                        UIkit.notification({message: "Copy failed!", status: 'danger', pos: 'bottom-right'});
                    }

                })

                .on('click', 'a.js-codepen', e => {

                    e.preventDefault();
                    e.stopImmediatePropagation();

                    openOnCodepen($(e.currentTarget.getAttribute('rel')).text());

                })

                .on('click', '[href="#"]', e => e.preventDefault());

        },

        watch: {

            $route: {

                handler() {

                    var page = this.$route.params.page;

                    scrollTo(0, 0);

                    this.loading = true;
                    this.error = null;
                    this.ids = {};

                    this.$parent.page = page;
                    this.$parent.component = components.indexOf(page) != -1 ? page : false;

                    var defer = $.Deferred();

                    defer.then(
                        content => this.doc = content,
                        () => this.error = 'Failed loading page'
                    ).always(() => this.loading = false);

                    if (this.cache[page]) {
                        defer.resolve(this.cache[page]);
                        return;
                    }

                    $.get(`pages/${page}.md`, {nc: Math.random()}).then(content => parse(content, (err, content) => {

                        if (err) {
                            defer.reject(err);
                            return;
                        }

                        this.cache[page] = content;
                        defer.resolve(content);

                    }), err => reject(err));

                },

                immediate: true
            },

            doc() {

                this.$nextTick(() => {

                    $('pre code', this.$refs.container).each((i, block) => hljs.highlightBlock(block));

                    this.$parent.ids = $('h1,h2', this.$refs.container).toArray().reduce((ids, el) => {

                        el = $(el);

                        let text = el.text().replace('#', ''), id = text.toLowerCase().replace(/ /g, '-');

                        el.attr('id', id);

                        if (el.is('h2')) {
                            ids[text] = id;
                        }

                        return ids;

                    }, {});

                    if (location.hash && $(location.hash).length) {
                        scrollTo(0, $(location.hash).offset().top);
                    }

                });

            }

        }

    }

</script>
