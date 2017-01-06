<template>

    <div class="uk-navbar-container tm-navbar-container" uk-sticky="media: 960">

        <nav class="uk-navbar">

            <div class="uk-navbar-left">

                <router-link class="uk-navbar-item uk-logo" to="/">
                    <canvas class="uk-margin-small-right" uk-icon="icon: uikit; ratio: 2" width="40" height="40"></canvas> UIkit
                </router-link>

            </div>

            <div class="uk-navbar-right">

                <ul class="uk-navbar-nav uk-visible@m">
                    <li><a href="./docs/introduction">Documentation</a></li>
                    <router-link to="/changelog" tag="li"><a>Changelog</a></router-link>
                </ul>

                <div class="uk-navbar-item uk-visible@m">
                    <router-link class="uk-button uk-button-default tm-button-default" to="/download">Download <canvas uk-icon="icon: download" width="40" height="40"></canvas>
                    </router-link>
                </div>

                <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>

            </div>

        </nav>

    </div>

</template>
