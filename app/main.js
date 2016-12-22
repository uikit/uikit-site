import $ from 'jquery';
import Vue from 'vue';
import App from './app.vue';
import Page from './page.vue';

const routes = [

    {
        path: '/',
        redirect: '/index'
    },

    {
        path: '*/:page',
        component: Page
    }

];

let base = '/';

if (location.pathname && location.pathname != '/') {
    base = location.pathname.split('/').slice(0, -1).join('/');
}

$(function () {

    new Vue({

        el: '#app',

        extends: App,

        data: () => ({
            loading: false,
            page: false
        }),

        router: new VueRouter({
            base,
            routes,
            mode: 'history',
            history: true,
            linkActiveClass: 'uk-active'
        })

    });

});
