<script>
    import { page } from '$app/stores';
    import { assets, base } from '$app/paths';
</script>

<div
    class={`uk-navbar-container tm-navbar-container ${$$props.class || ''}`}
    uk-sticky={`media: 960; ${$$props['uk-sticky'] || ''}`}
>
    <div class="uk-container uk-container-expand">
        <nav class="uk-navbar">
            <div class="nav-overlay uk-navbar-left">
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
                <a
                    class="uk-navbar-toggle"
                    uk-search-icon
                    uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
                    href="#"
                />
            </div>
            <div class="nav-overlay uk-navbar-right">
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
            <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
                <div class="uk-navbar-item uk-width-expand">
                    <form class="uk-search uk-search-navbar uk-width-1-1">
                        <input
                            id="uk-search-input"
                            class="uk-search-input"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            autofocus
                        />
                    </form>
                </div>

                <a
                    id="uk-close-btn"
                    class="uk-navbar-toggle"
                    uk-close
                    uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
                    href="#"
                />
            </div>
        </nav>
    </div>
</div>
