<script>
    import { page } from '$app/stores';
    import { assets, base } from '$app/paths';
    import Algolia from './Algolia.svelte';
</script>

<div
    class={`uk-navbar-container tm-navbar-container ${$$props.class || ''}`}
    uk-sticky={`media: 960; ${$$props['uk-sticky'] || ''}`}
>
    <div class="uk-container uk-container-expand">
        <nav class="uk-navbar" uk-navbar>
            <div class="uk-navbar-left">
                <a
                    class="uk-navbar-item uk-logo"
                    class:uk-active={$page.url.pathname === `${base}/`}
                    href="{base}/"
                    aria-label="Back to Home"
                    aria-current={$page.url.pathname === `${base}/` ? 'page' : undefined}
                >
                    <img
                        src="{assets}/images/uikit-logo.svg"
                        class="uk-margin-small-right"
                        width="28"
                        height="34"
                        alt="UIkit"
                    />
                    UIkit
                </a>
            </div>
            <div class="uk-navbar-right">
                <div class="uk-navbar-item">
                    <Algolia />
                </div>
                <ul class="uk-navbar-nav uk-visible@m">
                    <li class:uk-active={$page.url.pathname === `${base}/pro`}>
                        <a
                            href="{base}/pro"
                            aria-current={$page.url.pathname === `${base}/pro` ? 'page' : undefined}
                        >
                            Pro
                        </a>
                    </li>
                    <li class:uk-active={$page.url.pathname.startsWith(`${base}/docs`)}>
                        <a
                            href="{base}/docs/introduction"
                            aria-current={$page.url.pathname.startsWith(`${base}/docs`)
                                ? 'page'
                                : undefined}>Documentation</a
                        >
                    </li>
                    <li class:uk-active={$page.url.pathname === `${base}/changelog`}>
                        <a
                            href="{base}/changelog"
                            aria-current={$page.url.pathname === `${base}/changelog`
                                ? 'page'
                                : undefined}>Changelog</a
                        >
                    </li>
                </ul>

                <div class="uk-navbar-item uk-visible@m">
                    <a
                        class:uk-active={$page.url.pathname === `${base}/download`}
                        class="uk-button uk-button-default tm-button-default uk-icon"
                        href="{base}/download"
                        aria-current={$page.url.pathname === `${base}/download`
                            ? 'page'
                            : undefined}
                    >
                        Download <canvas uk-icon="download" width="20" height="20" />
                    </a>
                </div>

                <a
                    class="uk-navbar-toggle uk-hidden@m"
                    uk-navbar-toggle-icon
                    href="#offcanvas"
                    uk-toggle
                />
            </div>
        </nav>
    </div>
</div>
