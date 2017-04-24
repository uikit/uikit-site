import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Page from './page.vue';
import navigation from './navigation.json';

const routes = [
    {path: '*/docs/', redirect: '*/docs/introduction'},
    {path: '*/docs/:page', component: Page}
];

const router = new VueRouter({
    routes,
    mode: 'history',
    history: true,
    linkActiveClass: 'uk-active'
});

router.afterEach(({path}) => {

    if (typeof ga == 'function') {
        ga('set', 'page', path);
        ga('send', 'pageview');
    }

});

window.DocsApp = new Vue({

    router,

    el: '#app',

    extends: App,

    data: () => ({
        navigation,
        ids: {},
        page: false,
        component: false
    })

});
