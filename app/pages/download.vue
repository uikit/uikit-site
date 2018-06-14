<template>

    <div class="uk-section-primary tm-section-texture">

        <navbar class="uk-navbar-transparent"></navbar>

        <div class="uk-section uk-flex uk-flex-middle uk-text-center" uk-height-viewport="offset-top: true">
            <div class="uk-width-1-1">
                <div class="uk-container">

                    <p class="uk-margin-large-bottom">
                        <canvas style="color: #fff" width="142" height="117" uk-svg src="./images/download.svg"></canvas>
                    </p>

                    <h1>Thanks for giving UIkit a try.</h1>

                    <p class="uk-margin-medium-bottom uk-text-large">Please support our open source project and share the love on<br class="uk-visible@s"> Twitter or Facebook. It would really mean a lot to us.</p>

                    <div class="uk-grid-medium uk-child-width-auto uk-flex-inline uk-flex-center" uk-grid>
                        <div>
                            <a class="uk-button uk-button-primary tm-button-primary uk-button-large" href="https://twitter.com/intent/tweet?text=I'm+excited+to+try+@getuikit,+a+modern+front-end+framework.+Check+it+out+at+https%3a%2f%2fgetuikit.com" target="_blank">
                                <span class="uk-margin-small-right" uk-icon="icon: twitter"></span>
                                <span class="uk-text-middle">Share on Twitter</span>
                            </a>
                        </div>
                        <div>
                            <a class="uk-button uk-button-primary tm-button-primary uk-button-large" href="https://www.facebook.com/sharer/sharer.php?u=https://getuikit.com" target="_blank">
                                <span class="uk-margin-small-right" uk-icon="icon: facebook"></span>
                                <span class="uk-text-middle">Post on Facebook</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script>

    var {ajax} = UIkit.util;

    export default {

        mounted() {

            ajax(`assets/uikit/package.json`, {responseType: 'json'}).then(({response}) =>
                setTimeout(() => location.href = `https://github.com/uikit/uikit/releases/download/v${response.version}/uikit-${response.version}.zip`, 100)
            );

        }
    }

</script>
