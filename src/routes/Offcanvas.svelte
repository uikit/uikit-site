<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar">
        <div class="uk-panel">
            <ul class="uk-nav uk-nav-default tm-nav">
                <li class="uk-nav-header">General</li>
                <li class:uk-active={$page.route.id === '/'}>
                    <a
                        href="{base}/"
                        aria-current={$page.route.id === '/' ? 'page' : undefined}
                        >Home</a
                    >
                </li>
                <li class:uk-active={$page.route.id === '/pro'}>
                    <a
                        href="{base}/pro"
                        aria-current={$page.route.id === '/pro' ? 'page' : undefined}
                        >Pro</a
                    >
                </li>
                <li class:uk-active={$page.route.id === '/changelog'}>
                    <a
                        href="{base}/changelog"
                        aria-current={$page.route.id === '/changelog'
                            ? 'page'
                            : undefined}>Changelog</a
                    >
                </li>
                <li class:uk-active={$page.route.id === '/download'}>
                    <a
                        href="{base}/download"
                        aria-current={$page.route.id === '/download'
                            ? 'page'
                            : undefined}>Download</a
                    >
                </li>
            </ul>

            <ul class="uk-nav uk-nav-default tm-nav uk-margin-top">
                {#each Object.entries($$props.navigation) as [category, pages]}
                    <li class="uk-nav-header">
                        {category}
                    </li>
                    {#each Object.entries(pages) as [label, slug]}
                        <li class:uk-active={$page.params.slug === slug}>
                            <a
                                href="{base}/docs/{slug}"
                                aria-current={$page.params.slug === slug
                                    ? 'page'
                                    : undefined}>{label}</a
                            >
                        </li>
                    {/each}
                {/each}
            </ul>
        </div>
    </div>
</div>
