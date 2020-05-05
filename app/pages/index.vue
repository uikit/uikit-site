<template>

    <div class="uk-section-primary tm-section-texture">

        <navbar class="uk-navbar-transparent"/>

        <div class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center" uk-height-viewport="offset-top: true; offset-bottom: true">
            <div class="uk-width-1-1">
                <div class="uk-container">

                    <p>
                        <canvas style="color: #fff" width="168" height="155" uk-svg src="./images/uikit-logo-large.svg"></canvas>
                    </p>

                    <p class="uk-margin-medium uk-text-lead">
                        A lightweight and modular front-end framework<br class="uk-visible@s">
                        for developing fast and powerful web interfaces.
                    </p>

                    <div class="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center" uk-grid>
                        <div>
                            <a class="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s" href="docs/introduction">Get Started</a>
                            <a class="uk-button uk-button-primary tm-button-primary uk-hidden@s" href="docs/introduction">Get Started</a>
                        </div>
                        <div>
                            <a class="uk-button uk-button-default tm-button-default uk-button-large tm-button-large uk-visible@s" href="https://github.com/uikit/uikit">Github</a>
                            <a class="uk-button uk-button-default tm-button-default uk-hidden@s" href="https://github.com/uikit/uikit">Github</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="uk-section-small">
            <div class="uk-container uk-container-expand uk-text-center uk-position-relative">

                <ul class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom" uk-margin>
                    <li>
                        <span>Version <span uikit-version></span></span>
                    </li>
                    <li>
                        <a href="https://github.com/uikit/uikit/stargazers"><span class="uk-margin-small-right" uk-icon="star"></span><span uikit-stargazers>13728</span> Stargazers</a>
                    </li>
                    <li>
                        <a class="uk-text-lowercase" href="https://twitter.com/getuikit"><span class="uk-margin-small-right" uk-icon="twitter"></span>@getuikit</a>
                    </li>
                    <li>
                        <a href="https://discordapp.com/invite/NEt4Pv7"><span class="uk-margin-small-right" uk-icon="commenting"></span>Community</a>
                    </li>
                </ul>

                <a class="uk-button uk-button-default tm-button-default uk-position-center-right uk-position-medium uk-visible@m" href="./v2">UIkit 2 <span uk-icon="arrow-right"></span></a>

            </div>
        </div>

    </div>

</template>

<script>

    import {$, ajax, noop} from 'uikit-util';

    export default {

        mounted() {

            ajax('https://api.github.com/repos/uikit/uikit', {responseType: 'json'}).then(({response}) => {

                if (response && response.stargazers_count) {
                    $('[uikit-stargazers]').innerText = response.stargazers_count;
                }

            }, noop);

            ajax('assets/uikit/package.json', {responseType: 'json'}).then(({response}) => $('[uikit-version]').innerText = response.version);

        }
    };

</script>
