<template>

    <div class="uk-panel">

        <ul class="uk-nav uk-nav-default">
            <li class="uk-nav-header">General</li>
            <li><a :href="root+'index.html'">Home</a></li>
            <li><a :href="root+'download.html'">Download</a></li>
        </ul>

        <ul class="uk-nav uk-nav-default uk-margin-top" v-for="(pages, category, index) in navigation">
            <li class="uk-nav-header">{{category}}</li>
            <li v-for="(p, label) in pages" exact><a :href="root+'docs/'+p">{{label}}</a></li>
        </ul>
    </div>

</template>

<script>

import $ from 'jquery';

const navigation = require('../docs/app/navigation.json');

export default {
    props: {
        root: {
            default: ''
        }
    },

    data() {
        return { navigation }
    }
}

</script>
