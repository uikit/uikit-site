<template>
    <div>
        <div v-if="error" class="uk-alert uk-alert-danger">
            {{ error }}
        </div>
        <div ref="container"></div>
    </div>
</template>

<script>
/* global ClipboardJS, hljs */

import { notification } from 'uikit';
import { html, parse, openOnCodepen } from './util';
import { $, $$, attr, offset, on, startsWith, ucfirst } from 'uikit-util';
import navigation from './navigation.json';

const components = Object.keys(navigation['Components']).map(
    (label) => navigation['Components'][label]
);

export default {
    inject: ['router'],

    data: () => ({
        error: null,
        cache: {},
    }),

    watch: {
        $route: {
            handler() {
                const { page } = this.$route.params;

                this.error = null;

                this.$parent.page = page;

                new Promise((resolve, reject) => {
                    if (this.cache[page]) {
                        resolve(this.cache[page]);
                        return;
                    }

                    fetch(`pages/${page}.md?{{BUILD}}`).then(
                        async (response) => {
                            response = await response.text();
                            if (startsWith(response.trim(), '<!DOCTYPE html>')) {
                                response = `<h1>Not Found</h1>
                                            <p class="uk-text-lead">We Couldn't Find Your Page!</p>`;
                            }

                            this.cache[page] = response;
                            resolve(response);
                        },
                        (err) => reject(err)
                    );
                }).then(
                    (page) => {
                        parse(page, (err, content) => {
                            if (err) {
                                this.page = null;
                                this.error = err;
                            } else {
                                this.setPage(content);
                            }
                        });
                    },
                    () => (this.error = 'Failed loading page')
                );
            },

            immediate: true,
        },
    },

    mounted() {
        new ClipboardJS('a.js-copy', { text: (trigger) => $(attr(trigger, 'rel')).innerText })

            .on('success', () => {
                notification({ message: 'Copied!', pos: 'bottom-right' });
            })
            .on('error', () => {
                notification({ message: 'Copy failed!', status: 'danger', pos: 'bottom-right' });
            });

        on(this.$refs.container, 'click', 'a.js-codepen', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            openOnCodepen($(attr(e.current, 'rel')).innerText);
        });

        on(this.$refs.container, 'click', '[href="#"]', (e) => e.preventDefault());

        on(
            this.$refs.container,
            'click',
            'a[href]:not([href^="http"]):not([href^="#"]):not([href^="/"]):not([href^="../"]):not([href^="images/"])',
            (e) => {
                e.preventDefault();
                this.router.replace(e.target.pathname + e.target.hash);
            }
        );

        on(
            window,
            'click',
            'a[href^="#"]:not([href="#"])',
            (e) => !e.defaultPrevented && history.pushState({}, '', e.target.href)
        );

        on(window, 'popstate', () => {
            setTimeout(() => {
                if (location.hash && $(location.hash)) {
                    scrollTo(0, offset($(location.hash)).top - 100);
                }
            });
        });
    },

    methods: {
        setPage(page) {
            document.title = `${this.$parent.page.split('-').map(ucfirst).join(' ')} - UIkit`;

            html(this.$refs.container, page);

            this.$parent.component = ~components.indexOf(this.$route.params.page)
                ? this.$route.params.page
                : false;

            this.$parent.ids = $$('> h2 a[href^="#"]', this.$refs.container).reduce((ids, el) => {
                ids[el.innerText] = attr(el, 'href').substr(1);
                return ids;
            }, {});

            if (location.hash && $(location.hash)) {
                scrollTo(0, offset($(location.hash)).top - 100);
            } else {
                scrollTo(0, 0);
            }

            setTimeout(() =>
                $$('pre code', this.$refs.container).forEach((block) => hljs.highlightBlock(block))
            );
        },
    },
};
</script>
