<template>

    <div>
        <div class="uk-alert uk-alert-danger" v-if="error">{{ error }}</div>
        <div ref="container" v-html="page"></div>
    </div>

</template>

<script>

    import $ from 'jquery';

    export default {

        data: () => ({
            page: null,
            error: null,
            cache: {},
            extension: 'html'
        }),

        watch: {

            $route: {

                handler() {

                    var page = this.$route.params.page;

                    scrollTo(0, 0);

                    this.error = null;

                    this.$parent.page = page;

                    var defer = $.Deferred();

                    defer.then(page => this.setPage(page), () => this.error = 'Failed loading page');

                    if (this.cache[page]) {
                        defer.resolve(this.cache[page]);
                        return;
                    }

                    $.get(`pages/${page}.${this.extension}`, {nc: Math.random()}).then(content => {

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
            },

            page() {

                this.$nextTick(() => {

                    requestAnimationFrame(() => {
                        if (location.hash && $(location.hash).length) {
                            scrollTo(0, $(location.hash).offset().top - 80);
                        }
                    });

                    $(this.$refs.container).find('script').remove().appendTo(this.$refs.container);

                });

            }

        },

        methods: {

            setPage(page) {
                this.page = page;
            }

        }

    }

</script>
