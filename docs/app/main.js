import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Page from './page.vue';
import analytics from '../../app/analytics';
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

new Vue({

    router,

    provide: {router},

    el: '#app',

    extends: App,

    data: () => ({
        navigation,
        ids: {},
        page: false,
        component: false
    })

});

analytics('UA-42150424-1', {anonymize_ip: true});
