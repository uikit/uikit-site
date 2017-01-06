<template>

    <div>

        <div class="uk-navbar-container tm-navbar-container" uk-sticky="media: 960">

            <navbar></navbar>

        </div>

        <router-view></router-view>

        <div id="offcanvas" uk-offcanvas="mode: push">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">

                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">General</li>
                        <li><a href="./index">Home</a></li>
                        <li><a href="./changelog">Changelog</a></li>
                        <li><a href="./download">Download</a></li>
                    </ul>

                    <ul class="uk-nav uk-nav-default tm-nav uk-margin-top" v-for="(pages, category, index) in navigation">
                        <li class="uk-nav-header">{{category}}</li>
                        <li v-for="(p, label) in pages" exact><a :href="'./docs/'+p">{{label}}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>
