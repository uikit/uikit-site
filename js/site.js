
import Offcanvas from './site-offcanvas.vue';

Vue.component('site-offcanvas', Offcanvas);

$(() => {

    new Vue({
      el: '#site-offcanvas'
    });
});
