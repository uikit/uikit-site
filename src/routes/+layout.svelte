<script>
    import Offcanvas from './Offcanvas.svelte';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import DocSearch from 'docsearch.js/dist/cdn/docsearch.min.js?url';
    import DocStyle from 'docsearch.js/dist/cdn/docsearch.min.css?url';
    export let data;
</script>

<svelte:head>
    <meta name="searchkey" value="{import.meta.env.VITE_ALGOLIA_SEARCH_KEY}">
    <meta name="appid" value="{import.meta.env.VITE_ALGOLIA_APP_ID}">
    <meta name="indexname" value="{import.meta.env.VITE_ALGOLIA_INDEX_NAME}">
    <script src={DocSearch} defer/>
    <link rel="preload" as="style" href={DocStyle} onload="this.onload=null;this.rel='stylesheet'"/>
</svelte:head>

<slot />

<Offcanvas navigation={data.navigation} />

{#if !$page.url.pathname.startsWith(`${base}/docs`)}
    <div>
        <script>
            sessionStorage.setItem('scroll', 0);
        </script>
    </div>
{/if}
