import $ from 'jquery';
import Vue from 'vue';
import Page from './page.vue';

const routes = [

    {
        path: '/', redirect: '/index'
    },

    {
        path: '*/:page', component: Page
    }

];

const navigation = require('../docs/app/navigation.json');

let base = '/';

if (location.pathname && location.pathname != '/') {
    base = location.pathname.split('/').slice(0, -1).join('/');
}

$(function () {
    new Vue({
        router: new VueRouter({
            mode:'history',
            history: true,
            linkActiveClass: 'uk-active',
            base,
            routes
        }),
        data() {
            return {
                loading: false,
                page: false,
                navigation
            }
        },
        mounted() {
            this.$el.classList.remove('uk-invisible');
        }
    }).$mount('#pages');

});
