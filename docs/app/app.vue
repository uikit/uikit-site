<template>

    <div>

        <div class="uk-navbar-container tm-navbar-container" uk-sticky="media: 960">
            <div class="uk-container uk-container-expand">
                <nav class="uk-navbar">

                    <div class="uk-navbar-left">

                        <a href="../" class="uk-navbar-item uk-logo">
                            <img class="uk-margin-small-right" uk-svg :src="'../images/uikit-logo.svg'"> UIkit
                        </a>

                    </div>

                    <div class="uk-navbar-right">

                        <ul class="uk-navbar-nav uk-visible@m">
                            <li><a href="../pro">Pro</a></li>
                            <li class="uk-active"><a href="./">Documentation</a></li>
                            <li><a href="../changelog">Changelog</a></li>
                        </ul>

                        <div class="uk-navbar-item uk-visible@m">
                            <a class="uk-button uk-button-default tm-button-default uk-icon" href="../download">Download <canvas uk-icon="icon: download" width="20" height="20"></canvas>
                            </a>
                        </div>

                        <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>

                    </div>

                </nav>
            </div>
        </div>

        <div class="tm-sidebar-left uk-visible@m">

            <h3>Documentation</h3>

            <ul v-for="(pages, category, index) in navigation" class="uk-nav uk-nav-default tm-nav" :class="{'uk-margin-top': index}">
                <li class="uk-nav-header">{{ category }}</li>
                <router-link v-for="(p, label) in pages" :key="p" tag="li" :to="p"><a>{{ label }}</a></router-link>
            </ul>

        </div>

        <div class="tm-main uk-section uk-section-default">
            <div class="uk-container uk-container-small uk-position-relative">

                <router-view/>

                <div class="tm-sidebar-right uk-visible@l">
                    <div uk-sticky="offset: 160">

                        <ul class="uk-nav uk-nav-default tm-nav uk-nav-parent-icon" uk-scrollspy-nav="closest: li; scroll: true; offset: 100">
                            <li v-for="(id, subject) in ids">
                                <a :href="`#${id}`">{{ subject }}</a>
                            </li>
                            <li class="uk-nav-divider"></li>
                            <li v-if="component">
                                <a :href="`../assets/uikit/tests/${component}.html`" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: push"></span>
                                    <span class="uk-text-middle">Open test</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/uikit/uikit/issues" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: warning"></span>
                                    <span class="uk-text-middle">Report issue</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://discordapp.com/invite/NEt4Pv7" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: commenting"></span>
                                    <span class="uk-text-middle">Get help</span>
                                </a>
                            </li>
                            <li>
                                <a :href="`https://github.com/uikit/uikit-site/tree/develop/docs/pages/${page}.md`" target="_blank">
                                    <span class="uk-margin-small-right" uk-icon="icon: pencil"></span>
                                    <span class="uk-text-middle">Edit this page</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>

        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">

                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">General</li>
                        <li><a href="../index">Home</a></li>
                        <li><a href="../pro">Pro</a></li>
                        <li><a href="../changelog">Changelog</a></li>
                        <li><a href="../download">Download</a></li>
                    </ul>

                    <ul v-for="(pages, category) in navigation" class="uk-nav uk-nav-default tm-nav uk-margin-top">
                        <li class="uk-nav-header">{{ category }}</li>
                        <li v-for="(p, label) in pages" exact><a :href="`./${p}}`">{{ label }}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>
