<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar">
        <div class="uk-panel">
            <ul class="uk-nav uk-nav-default tm-nav">
                <li class="uk-nav-header">General</li>
                <li class:uk-active={$page.url.pathname === `${base}/`}>
                    <a
                        href="{base}/"
                        aria-current={$page.url.pathname === `${base}/` ? 'page' : undefined}
                        >Home</a
                    >
                </li>
                <li class:uk-active={$page.url.pathname === `${base}/pro`}>
                    <a
                        href="{base}/pro"
                        aria-current={$page.url.pathname === `${base}/pro` ? 'page' : undefined}
                        >Pro</a
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
                <li class:uk-active={$page.url.pathname === `${base}/download`}>
                    <a
                        href="{base}/download"
                        aria-current={$page.url.pathname === `${base}/download`
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
                    {#each Object.entries(pages) as [label, p]}
                        <li class:uk-active={$page.url.pathname === `${base}/docs/${p}`}>
                            <a
                                href="{base}/docs/{p}"
                                aria-current={$page.url.pathname === `${base}/docs/${p}`
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
