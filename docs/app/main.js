import $ from 'jquery';
import Vue from 'vue';
import Page from './page.vue';

const routes = [

    {
        path: '*/docs/', redirect: '*/docs/introduction'
    },

    {
        path: '*/docs/:page', component: Page
    }

];

const navigation = require('./navigation.json');

$(function () {
    new Vue({
        router: new VueRouter({mode:'history', history: true,routes, linkActiveClass: 'uk-active'}),
        data() {
            return {
                ids: {},
                loading: false,
                component: false,
                page: false,
                navigation
            }
        },
        mounted() {
            this.$el.classList.remove('uk-invisible');
        }
    }).$mount('#app');

});
