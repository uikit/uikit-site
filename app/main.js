import $ from 'jquery';
import Vue from 'vue';
import App from './app.vue';
import Navbar from './navbar.vue';

// Pages
import IndexPage from './pages/index.vue';
import ChangelogPage from './pages/changelog.vue';
import DownloadPage from './pages/download.vue';

const routes = [

    {path: '/', component: IndexPage },
    {path: '/index', component: IndexPage },
    {path: '/changelog', component: ChangelogPage },
    {path: '/download', component: DownloadPage }

];

let base = '/';

if (location.pathname && location.pathname != '/') {
    base = location.pathname.split('/').slice(0, -1).join('/');
}

Vue.component('navbar', Navbar);

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
