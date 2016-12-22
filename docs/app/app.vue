<template>

    <div>

        <nav class="uk-navbar-container" uk-sticky="top: 1">

            <div class="uk-navbar">

                <div class="uk-navbar-left">
                    <a href="../index" class="uk-navbar-item uk-logo">
                        <span class="uk-margin-small-right" uk-icon="icon: uikit; ratio: 2"></span> UIkit
                    </a>
                </div>

                <div class="uk-navbar-right">
                    <div class="uk-navbar-item uk-visible@m">
                        <div class="uk-grid uk-flex-middle uk-grid" uk-grid>
                            <div>
                                <a class="uk-button uk-button-text" href="../docs/" title="Documentation">Documentation</a>
                            </div>
                            <div>
                                <a class="uk-button uk-button-text" href="../changelog" title="View Changelog">Changelog</a>
                            </div>
                            <div>
                                <a class="uk-button uk-button-secondary" href="../download" title="Download">
                                    Download <span class="uk-margin-small-left" uk-icon="icon: download"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>
                </div>

            </div>

        </nav>

        <aside class="tm-docs-navigation uk-visible@m">

            <ul class="uk-nav uk-nav-default" v-bind:class="{ 'uk-margin-top': index }" v-for="(pages, category, index) in navigation">
                <li class="uk-nav-header">{{category}}</li>
                <router-link tag="li" :to="p" v-for="(p, label) in pages" exact><a>{{label}}</a></router-link>
            </ul>

        </aside>

        <div class="tm-docs-view" style="padding-top: 80px">
            <div class="uk-container">
                <div class="uk-grid uk-child-width-expand">

                    <router-view></router-view>

                    <div class="uk-width-medium uk-visible@m">
                        <aside v-if="!loading" uk-sticky="offset: 120">

                            <ul class="uk-nav uk-nav-default uk-nav-parent-icon">
                                <li v-for="(id, subject) in ids">
                                    <a v-scroll :href="'#'+id">{{ subject }}</a>
                                </li>
                                <li class="uk-nav-divider"></li>
                                <li v-if="component"><a :href="'../assets/uikit/tests/'+component+'.html'" target="_blank"><span class="uk-margin-small-right" uk-icon="icon: push"></span> Open Test</a></li>
                                <li><a href="https://github.com/uikit/uikit/issues" target="_blank"><span class="uk-margin-small-right" uk-icon="icon: github"></span> Report Issue</a></li>
                                <li><a href="https://gitter.im/uikit/uikit" target="_blank"><span class="uk-margin-small-right" uk-icon="icon: question"></span> Get Help</a></li>
                                <li><a :href="'https://github.com/uikit/uikit/tree/develop/docs/'+page+'.md'" target="_blank"><span class="uk-margin-small-right" uk-icon="icon: pencil"></span> Edit this Page</a></li>
                            </ul>

                        </aside>
                    </div>
                </div>
            </div>
        </div>

        <div id="offcanvas" uk-offcanvas="mode: push">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">

                    <ul class="uk-nav uk-nav-default">
                        <li class="uk-nav-header">General</li>
                        <li><a href="../index">Home</a></li>
                        <li><a href="../changelog">Changelog</a></li>
                        <li><a href="../download">Download</a></li>
                    </ul>

                    <ul class="uk-nav uk-nav-default uk-margin-top" v-for="(pages, category, index) in navigation">
                        <li class="uk-nav-header">{{category}}</li>
                        <li v-for="(p, label) in pages" exact><a :href="'./'+p">{{label}}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>
