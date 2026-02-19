<script>
    import { page } from '$app/state';
    import { resolve } from '$app/paths';

    let { navigation } = $props();
</script>

<div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar">
        <div class="uk-panel">
            <ul class="uk-nav uk-nav-default tm-nav">
                <li class="uk-nav-header">General</li>
                <li class:uk-active={page.route.id === '/'}>
                    <a href={resolve('/')} aria-current={page.route.id === '/' ? 'page' : null}
                        >Home</a
                    >
                </li>
                <li class:uk-active={page.route.id === '/pro'}>
                    <a
                        href={resolve('/pro')}
                        aria-current={page.route.id === '/pro' ? 'page' : null}>Pro</a
                    >
                </li>
                <li class:uk-active={page.route.id === '/changelog'}>
                    <a
                        href={resolve('/changelog')}
                        aria-current={page.route.id === '/changelog' ? 'page' : null}>Changelog</a
                    >
                </li>
                <li class:uk-active={page.route.id === '/download'}>
                    <a
                        href={resolve('/download')}
                        aria-current={page.route.id === '/download' ? 'page' : null}>Download</a
                    >
                </li>
            </ul>

            <ul class="uk-nav uk-nav-default tm-nav uk-margin-top">
                {#each Object.entries(navigation) as [category, pages] (category)}
                    <li class="uk-nav-header">
                        {category}
                    </li>
                    {#each Object.entries(pages) as [label, slug] (slug)}
                        <li class:uk-active={page.params.slug === slug}>
                            <a
                                href={resolve(`/docs/${slug}`)}
                                aria-current={page.params.slug === slug ? 'page' : null}>{label}</a
                            >
                        </li>
                    {/each}
                {/each}
            </ul>
        </div>
    </div>
</div>
