<template>
    <div>
        <div class="uk-alert uk-alert-danger" v-if="error">{{ error }}</div>
        <div ref="page"></div>
    </div>
</template>

<script>

import $ from 'jquery';
import { escape } from 'he'

let components = [];

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

            this.$parent.page = page;

            var defer = $.Deferred();

            defer.promise().done(content => {
                this.loading = false;
                this.$page.html(content);
                Vue.nextTick(() => {

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

            $.get(`pages/${page}.html`, {nc: Math.random()}).done(content => {

                this.cache[page] = content;
                defer.resolve(content);

            }).fail(err => reject(err));
        }
    }

}

</script>
