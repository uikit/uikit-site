import $ from 'jquery';
import Vue from 'vue';
import App from './app.vue';
import Page from './page.vue';

const routes = [

    {
        path: '*/docs/',
        redirect: '*/docs/introduction'
    },

    {
        path: '*/docs/:page',
        component: Page
    }

];

const navigation = require('./navigation.json');

$(function () {

    const app = new Vue({

        el: '#app',

        extends: App,

        data: () => ({
            navigation,
            ids: {},
            loading: false,
            component: false,
            page: false
        }),

        router: new VueRouter({
            routes,
            mode: 'history',
            history: true,
            linkActiveClass: 'uk-active'
        })

    });

});
