<script>
    import Header from '../../Header.svelte';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import Clipboard from 'clipboard/dist/clipboard.min?url';
    import Docs from '$lib/docs.js?url';
    export let data;
</script>

<svelte:head>
    <title>{data.doc.title} - UIkit</title>
    <script src={Clipboard} defer></script>
    <script src={Docs} defer></script>
</svelte:head>

<Header />

<div class="tm-sidebar-left uk-visible@m">
    <h3>Documentation</h3>

    {#each Object.entries(data.navigation) as [category, pages], index}
        <ul class="uk-nav uk-nav-default tm-nav" class:uk-margin-top={index}>
            <li class="uk-nav-header">
                {category}
            </li>
            {#each Object.entries(pages) as [label, slug]}
                <li class:uk-active={$page.params.slug === slug}>
                    <a
                        href="{base}/docs/{slug}"
                        aria-current={$page.params.slug === slug ? 'page' : null}>{label}</a
                    >
                </li>
            {/each}
        </ul>
    {/each}
</div>

<div id="tm-main" class="tm-main uk-section uk-section-default">
    <div class="uk-container uk-container-small uk-position-relative">
        {@html data.doc.content}

        <div class="tm-sidebar-right uk-visible@l uk-height-1-1">
            <div uk-sticky="offset: 160">
                <ul
                    class="uk-nav uk-nav-default tm-nav"
                    uk-scrollspy-nav="closest: li; scroll: true; offset: 20"
                >
                    {#each data.doc.ids as { title, id }}
                        <li>
                            <a href="#{id}">{title}</a>
                        </li>
                    {/each}
                    <li class="uk-nav-divider" />
                    {#if data.test}
                        <li>
                            <a
                                href="../assets/uikit/tests/{$page.params.slug}.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span class="uk-margin-small-right" uk-icon="push" />
                                <span class="uk-text-middle">Open test</span>
                            </a>
                        </li>
                    {/if}
                    <li>
                        <a
                            href="https://github.com/uikit/uikit/issues"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span class="uk-margin-small-right" uk-icon="warning" />
                            <span class="uk-text-middle">Report issue</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://discordapp.com/invite/NEt4Pv7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span class="uk-margin-small-right" uk-icon="commenting" />
                            <span class="uk-text-middle">Get help</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/uikit/uikit-site/tree/develop/docs/pages/{$page
                                .params.slug}.md"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span class="uk-margin-small-right" uk-icon="pencil" />
                            <span class="uk-text-middle">Edit this page</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
