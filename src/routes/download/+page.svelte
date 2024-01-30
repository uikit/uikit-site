<script>
    import Header from '../Header.svelte';
    import { assets } from '$app/paths';
    export let data;
</script>

<svelte:head>
    <title>Download - UIkit</title>
</svelte:head>

<div class="uk-section-primary tm-section-texture">
    <Header class="uk-navbar-transparent" />

    <div
        id="tm-main"
        class="uk-section uk-flex uk-flex-middle uk-text-center"
        uk-height-viewport="offset-top: true"
    >
        <div class="uk-width-1-1">
            <div class="uk-container">
                <p class="uk-margin-large-bottom">
                    <img src="{assets}/images/download.svg" alt="" width="142" height="117" />
                </p>

                <h1>Thanks for giving UIkit a try.</h1>

                <p class="uk-margin-medium-bottom uk-text-large">
                    Please support our open source project and share the love on<br
                        class="uk-visible@s"
                    />
                    X or Facebook. It would really mean a lot to us.
                </p>

                <div class="uk-grid-medium uk-child-width-auto uk-flex-inline" uk-grid>
                    <div>
                        <a
                            class="uk-button uk-button-primary tm-button-primary uk-button-large"
                            href="https://twitter.com/intent/tweet?text=I'm+excited+to+try+@getuikit,+a+modern+front-end+framework.+Check+it+out+at+https%3a%2f%2fgetuikit.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span class="uk-margin-small-right" uk-icon="x" />
                            <span class="uk-text-middle">Share on X</span>
                        </a>
                    </div>
                    <div>
                        <a
                            class="uk-button uk-button-primary tm-button-primary uk-button-large"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://getuikit.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span class="uk-margin-small-right" uk-icon="facebook" />
                            <span class="uk-text-middle">Post on Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script data-version={data.version}>
        const { on } = UIkit.util;
        const { version } = document.currentScript.dataset;

        on(window, 'load', () =>
            setTimeout(
                () =>
                    (location.href = `https://github.com/uikit/uikit/releases/download/v${version}/uikit-${version}.zip`),
                100,
            ),
        );
    </script>
</div>
