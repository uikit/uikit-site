import $ from 'jquery';
import Vue from 'vue';
import Page from './page.vue';

const routes = [

    {
        path: './', redirect: '/index'
    },

    {
        path: '*/:page', component: Page
    }

];

const navigation = require('../docs/app/navigation.json');

$(function () {
    new Vue({
        router: new VueRouter({mode:'history', history: true,routes, linkActiveClass: 'uk-active'}),
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
