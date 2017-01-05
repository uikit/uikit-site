<template>

    <div>

        <nav class="uk-navbar-container tm-navbar-container" v-if="page != 'index'">

            <div class="uk-navbar">

                <div class="uk-navbar-left">
                    <a href="./" class="uk-navbar-item uk-logo">
                        <span class="uk-margin-small-right" uk-icon="icon: uikit; ratio: 2"></span> UIkit
                    </a>
                </div>

                <div class="uk-navbar-right">
                    <div class="uk-navbar-item uk-visible@m">
                        <div class="uk-grid uk-flex-middle uk-grid" uk-grid>
                            <div>
                                <a class="uk-button uk-button-text" href="./docs/" title="Documentation">Documentation</a>
                            </div>
                            <div>
                                <a class="uk-button uk-button-text" href="./changelog" title="View Changelog">Changelog</a>
                            </div>
                            <div>
                                <a class="uk-button uk-button-default tm-button-default" href="./download" title="Download">
                                    Download <span class="uk-margin-small-left" uk-icon="icon: download"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>
                </div>

            </div>

        </nav>

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
