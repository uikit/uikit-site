<script>
    import Header from './Header.svelte';
    import { assets, base } from '$app/paths';
    let { data } = $props();
</script>

<svelte:head>
    <title>UIkit</title>
</svelte:head>

<div class="uk-section-primary tm-section-texture">
    <Header class="uk-navbar-transparent" />

    <div
        id="tm-main"
        class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center"
        uk-height-viewport="offset-top: true; offset-bottom: true"
    >
        <div class="uk-width-1-1">
            <div class="uk-container">
                <p>
                    <img
                        src="{assets}/images/uikit-logo-large.svg"
                        width="168"
                        height="155"
                        alt="UIkit Logo"
                    />
                </p>

                <h1 class="uk-margin-medium uk-text-lead">
                    UIkit is a lightweight and modular front-end framework<br
                        class="uk-visible@s"
                    />
                    for developing fast and powerful web interfaces.
                </h1>

                <div
                    class="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center"
                    uk-grid
                >
                    <div>
                        <a
                            class="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s"
                            href="{base}/docs/introduction">Get Started</a
                        >
                        <a
                            class="uk-button uk-button-primary tm-button-primary uk-hidden@s"
                            href="{base}/docs/introduction">Get Started</a
                        >
                    </div>
                    <div>
                        <a
                            class="uk-button uk-button-default tm-button-default uk-button-large tm-button-large uk-visible@s"
                            href="https://github.com/uikit/uikit">GitHub</a
                        >
                        <a
                            class="uk-button uk-button-default tm-button-default uk-hidden@s"
                            href="https://github.com/uikit/uikit">GitHub</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="uk-section-small">
        <div class="uk-container uk-container-expand uk-text-center uk-position-relative">
            <ul
                class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom"
                uk-margin
            >
                <li>
                    <span>Version {data.version}</span>
                </li>
                <li>
                    <a href="https://github.com/uikit/uikit/stargazers"
                        ><span class="uk-margin-xsmall-right" uk-icon="star"
                        ></span>{data.stargazers_count} Stargazers</a
                    >
                </li>
                <li>
                    <a class="uk-text-lowercase" href="https://twitter.com/getuikit"
                        ><span class="uk-margin-xsmall-right" uk-icon="x"></span>@getuikit</a
                    >
                </li>
                <li>
                    <a href="https://discordapp.com/invite/NEt4Pv7"
                        ><span class="uk-margin-xsmall-right" uk-icon="commenting"
                        ></span>Community</a
                    >
                </li>
            </ul>
        </div>
    </div>
</div>
