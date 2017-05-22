<template>

    <div>
        <div class="uk-alert uk-alert-danger" v-if="error">{{ error }}</div>
        <div ref="container"></div>
    </div>

</template>

<script>

    import $ from 'jquery';
    import { parse, openOnCodepen, sluggify } from './util';

    const navigation = require('./navigation.json');

    var components = Object.keys(navigation['Components']).map(label => navigation['Components'][label]);

    export default {

        data: () => ({
            error: null,
            cache: {}
        }),

        mounted() {

            (new Clipboard('a.js-copy', {
                text: trigger => $(trigger.getAttribute('rel')).text()
            })).on('success', e => {
                UIkit.notification({message: 'Copied!', pos: 'bottom-right'});
            }).on('error', e => {
                UIkit.notification({message: 'Copy failed!', status: 'danger', pos: 'bottom-right'});
            });

            $(this.$refs.container)

                .on('click', 'a.js-codepen', e => {

                    e.preventDefault();
                    e.stopImmediatePropagation();

                    openOnCodepen($(e.currentTarget.getAttribute('rel')).text());

                })

                .on('click', '[href="#"]', e => e.preventDefault());

            $(document).on('click', 'a[href^="#"]:not([href="#"])', function() {
                history.pushState({}, '', this.href);
            });

            $(this.$refs.container).on('click', 'a:not([href^="http"]):not([href^="#"]):not([href^="/"]):not([href^="../"])', function(e) {
                e.preventDefault();
                DocsApp.$router.replace(this.pathname+this.hash);
            });

        },

        watch: {

            $route: {

                handler() {

                    var page = this.$route.params.page;

                    this.error = null;

                    this.$parent.page = page;

                    var defer = $.Deferred();

                    defer.then(page => {

                        parse(page, (err, content) => {

                            if (err) {
                                this.page = null;
                                this.error = err;
                            } else {
                                this.setPage(content);
                            }

                        });

                    }, () => this.error = 'Failed loading page');

                    if (this.cache[page]) {
                        defer.resolve(this.cache[page]);
                        return;
                    }

                    $.get(`pages/${page}.md`, {nc: Math.random()}).then(content => {

                        if (content.trim().indexOf('<!DOCTYPE html>') === 0) {
                            content = `<div class="uk-text-center">
                                <h1>404</h1>
                                <p class="uk-text-large">Page not found!</p>
                            </div>`
                        }

                        this.cache[page] = content;
                        defer.resolve(content);

                    }, err => reject(err));

                },

                immediate: true
            }

        },

        methods: {

            setPage(page) {

                $(this.$refs.container).html(page);

                this.$parent.component = ~components.indexOf(this.$route.params.page) ? this.$route.params.page : false;

                this.$parent.ids = $('> h2 a[href^="#"]', this.$refs.container).toArray().reduce((ids, el) => {

                    el = $(el);
                    ids[el.text()] = el.attr('href').substr(1);
                    return ids;

                }, {});

                if (location.hash && $(location.hash).length) {
                    scrollTo(0, $(location.hash).offset().top - 100);
                } else {
                    scrollTo(0, 0);
                }

                setTimeout(() => {
                    $('pre code', this.$refs.container).each((i, block) => hljs.highlightBlock(block));
                    // UIkit.scroll($('a[href^="#"]:not([href="#"])', this.$refs.container), {offset: 100});
                });

            }

        }

    }

</script>
