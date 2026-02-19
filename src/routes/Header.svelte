<script>
    import { page } from '$app/state';
    import { asset, resolve } from '$app/paths';
    import Algolia from './Algolia.svelte';

    let { ...props } = $props();
</script>

<div
    class={`uk-navbar-container tm-navbar-container ${props.class ?? ''}`}
    uk-sticky={`media: 960; target-offset: 0; ${props['uk-sticky'] ?? ''}`}
>
    <div class="uk-container uk-container-expand">
        <nav class="uk-navbar" uk-navbar>
            <div class="uk-navbar-left">
                <a
                    class="uk-navbar-item uk-logo"
                    class:uk-active={page.route.id === '/'}
                    href={resolve('/')}
                    aria-label="Back to Home"
                    aria-current={page.route.id === '/' ? 'page' : null}
                >
                    <img
                        src={asset('/images/uikit-logo.svg')}
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
                    <li class:uk-active={page.route.id === '/pro'}>
                        <a
                            href={resolve('/pro')}
                            aria-current={page.route.id === '/pro' ? 'page' : null}
                        >
                            Pro
                        </a>
                    </li>
                    <li class:uk-active={page.route.id?.startsWith('/docs')}>
                        <a
                            href={resolve('/docs/introduction')}
                            aria-current={page.route.id?.startsWith('/docs') ? 'page' : null}
                            >Documentation</a
                        >
                    </li>
                    <li class:uk-active={page.route.id === '/changelog'}>
                        <a
                            href={resolve('/changelog')}
                            aria-current={page.route.id === '/changelog' ? 'page' : null}
                            >Changelog</a
                        >
                    </li>
                </ul>

                <div class="uk-navbar-item uk-visible@m">
                    <a
                        class:uk-active={page.route.id === '/download'}
                        class="uk-button uk-button-default tm-button-default uk-icon"
                        href={resolve('/download')}
                        aria-current={page.route.id === '/download' ? 'page' : null}
                    >
                        Download <canvas uk-icon="download" width="20" height="20"></canvas>
                    </a>
                </div>

                <a
                    class="uk-navbar-toggle uk-hidden@m"
                    uk-navbar-toggle-icon
                    href="#offcanvas"
                    uk-toggle
                    aria-label="Open menu"
                ></a>
            </div>
        </nav>
    </div>
</div>
