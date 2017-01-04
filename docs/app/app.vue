<template>

    <div>

        <div class="uk-navbar-container tm-navbar-container" uk-sticky="top: 1; media: 960">

            <nav class="uk-navbar">

                <div class="uk-navbar-left">

                    <a href="../index" class="uk-navbar-item uk-logo">
                        <span class="uk-margin-small-right" uk-icon="icon: uikit; ratio: 2"></span> UIkit
                    </a>

                </div>

                <div class="uk-navbar-right">

                    <ul class="uk-navbar-nav uk-visible@m">
                        <li><a href="../docs/">Documentation</a></li>
                        <li><a href="../changelog">Changelog</a></li>
                    </ul>

                    <div class="uk-navbar-item uk-visible@m">
                        <a class="uk-button uk-button-default tm-button-default" href="../download">Download <span class="uk-margin-small-left" uk-icon="icon: download"></span></a>
                    </div>

                    <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>

                </div>

            </nav>

        </div>

        <div class="tm-sidebar-left uk-visible@m">

            <h3>Documentation</h3>

            <ul class="tm-nav uk-nav uk-nav-default" v-bind:class="{ 'uk-margin-top': index }" v-for="(pages, category, index) in navigation">
                <li class="uk-nav-header">{{category}}</li>
                <router-link tag="li" :to="p" v-for="(p, label) in pages" exact><a>{{label}}</a></router-link>
            </ul>

        </div>

        <div class="tm-main uk-section uk-section-default">
            <div class="uk-container uk-container-small uk-position-relative">

                <router-view></router-view>

                <div class="tm-sidebar-right uk-visible@l">
                    <div v-if="!loading" uk-sticky="offset: 160">

                        <ul class="tm-nav uk-nav uk-nav-default uk-nav-parent-icon" v-scrollspynav>
                            <li v-for="(id, subject) in ids">
                                <a v-scroll :href="'#'+id">{{ subject }}</a>
                            </li>
                            <li class="uk-nav-divider"></li>
                            <li v-if="component">
                                <a :href="'../assets/uikit/tests/'+component+'.html'" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: push"></span>
                                    <span class="uk-text-middle">Open Test</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/uikit/uikit/issues" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: warning"></span>
                                    <span class="uk-text-middle">Report Issue</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://gitter.im/uikit/uikit" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: commenting"></span>
                                    <span class="uk-text-middle">Get Help</span>
                                </a>
                            </li>
                            <li>
                                <a :href="'https://github.com/uikit/uikit/tree/develop/docs/'+page+'.md'" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: pencil"></span>
                                    <span class="uk-text-middle">Edit this Page</span>
                                </a>
                            </li>
                        </ul>

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
