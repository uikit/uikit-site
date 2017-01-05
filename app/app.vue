<template>

    <div>

        <div class="uk-navbar-container tm-navbar-container" uk-sticky="top: 1; media: 960">

            <nav class="uk-navbar">

                <div class="uk-navbar-left">

                    <a href="./" class="uk-navbar-item uk-logo">
                        <span class="uk-margin-small-right" uk-icon="icon: uikit; ratio: 2"></span> UIkit
                    </a>

                </div>

                <div class="uk-navbar-right">

                    <ul class="uk-navbar-nav uk-visible@m">
                        <li><a href="./docs/">Documentation</a></li>
                        <li><a href="./changelog">Changelog</a></li>
                    </ul>

                    <div class="uk-navbar-item uk-visible@m">
                        <a class="uk-button uk-button-default tm-button-default" href="./download">
                            <span class="uk-text-middle">Download</span>
                            <span uk-icon="icon: download"></span>
                        </a>
                    </div>

                    <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>

                </div>

            </nav>

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
