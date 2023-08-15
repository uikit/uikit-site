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
                    class:uk-active={$page.route.id === '/'}
                    href="{base}/"
                    aria-label="Back to Home"
                    aria-current={$page.route.id === '/' ? 'page' : null}
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
                    <li class:uk-active={$page.route.id === '/pro'}>
                        <a
                            href="{base}/pro"
                            aria-current={$page.route.id === '/pro' ? 'page' : null}
                        >
                            Pro
                        </a>
                    </li>
                    <li class:uk-active={$page.route.id?.startsWith('/docs')}>
                        <a
                            href="{base}/docs/introduction"
                            aria-current={$page.route.id?.startsWith('/docs') ? 'page' : null}
                            >Documentation</a
                        >
                    </li>
                    <li class:uk-active={$page.route.id === '/changelog'}>
                        <a
                            href="{base}/changelog"
                            aria-current={$page.route.id === '/changelog' ? 'page' : null}
                            >Changelog</a
                        >
                    </li>
                </ul>

                <div class="uk-navbar-item uk-visible@m">
                    <a
                        class:uk-active={$page.route.id === '/download'}
                        class="uk-button uk-button-default tm-button-default uk-icon"
                        href="{base}/download"
                        aria-current={$page.route.id === '/download' ? 'page' : null}
                    >
                        Download <canvas uk-icon="download" width="20" height="20" />
                    </a>
                </div>

                <a
                    class="uk-navbar-toggle uk-hidden@m"
                    uk-navbar-toggle-icon
                    href="#offcanvas"
                    uk-toggle
                    aria-label="Open menu"
                />
            </div>
        </nav>
    </div>
</div>
