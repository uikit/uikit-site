import Vue from 'vue';
import App from './app.vue';
import Navbar from './navbar.vue';

// Pages
import IndexPage from './pages/index.vue';
import ProPage from './pages/pro.vue';
import ChangelogPage from './pages/changelog.vue';
import DownloadPage from './pages/download.vue';
import ErrorPage from './pages/404.vue';

const routes = [

    {path: '/', component: IndexPage },
    {path: '/index', component: IndexPage },
    {path: '/pro', component: ProPage },
    {path: '/changelog', component: ChangelogPage },
    {path: '/download', component: DownloadPage },
    {path: '/*', component: ErrorPage }
];

let base = '/';

if (location.pathname && location.pathname != '/') {
    base = location.pathname.split('/').slice(0, -1).join('/');
}

Vue.component('navbar', Navbar);

const navigation = require('../docs/app/navigation.json');

new Vue({

    el: '#app',

    extends: App,

    data: () => ({
        navigation,
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
