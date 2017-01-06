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


Vue.directive('scrollspynav', {

    componentUpdated: function (el) {

        if (el.__uikit__ && el.__uikit__.scrollspyNav) {
            el.__uikit__.scrollspyNav.$destroy()
        }

        UIkit.scrollspyNav(el, {closest: 'li', scroll: true, offset: 100});
    }
});



new Vue({

    el: '#app',

    extends: App,

    data: () => ({
        navigation,
        ids: {},
        component: false,
        loading: false,
        page: false
    }),

    router: new VueRouter({
        routes,
        mode: 'history',
        history: true,
        linkActiveClass: 'uk-active'
    }),

    directives: {

        scroll: {

            inserted: function (el) {
                UIkit.scroll(el);
            }

        }

    }

});
