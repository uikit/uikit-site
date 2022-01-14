<template>
    <div class="uk-navbar-container tm-navbar-container" uk-sticky="media: 960">
        <div class="uk-container uk-container-expand">
            <nav class="uk-navbar">
                <div class="uk-navbar-left">
                    <router-link class="uk-navbar-item uk-logo" to="/">
                        <canvas class="uk-margin-small-right" width="28" height="34" uk-svg src="./images/uikit-logo.svg"></canvas> UIkit
                    </router-link>
                </div>

                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav uk-visible@m">
                        <router-link to="/pro" tag="li">
                            <a>Pro</a>
                        </router-link>
                        <li><a href="docs/introduction">Documentation</a></li>
                        <router-link to="/changelog" tag="li">
                            <a>Changelog</a>
                        </router-link>
                    </ul>

                    <div class="uk-navbar-item uk-visible@m">
                        <router-link class="uk-button uk-button-default tm-button-default uk-icon" to="/download" active-class="page-active">
                            Download <canvas uk-icon="download" width="20" height="20"></canvas>
                        </router-link>
                    </div>

                    <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>
                </div>
            </nav>
        </div>
    </div>
</template>
