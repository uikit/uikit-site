import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Navbar from './navbar.vue';
import analytics from './analytics.js';
import navigation from '../docs/app/navigation.json';

// Pages
import IndexPage from './pages/index.vue';
import ProPage from './pages/pro.vue';
import ChangelogPage from './pages/changelog.vue';
import DownloadPage from './pages/download.vue';
import ErrorPage from './pages/404.vue';

var base = '/';

if (location.pathname && location.pathname != '/') {
    base = location.pathname.split('/').slice(0, -1).join('/');
}

const routes = [
    {path: '/', component: IndexPage},
    {path: '/index', component: IndexPage},
    {path: '/pro', component: ProPage},
    {path: '/changelog', component: ChangelogPage},
    {path: '/download', component: DownloadPage},
    {path: '/*', component: ErrorPage}
];

const router = new VueRouter({
    base,
    routes,
    mode: 'history',
    history: true,
    linkActiveClass: 'uk-active'
});

Vue.component('navbar', Navbar);

new Vue({

    router,

    el: '#app',

    extends: App,

    data: () => ({
        navigation,
        page: false,
        loading: false
    })

});

analytics();
