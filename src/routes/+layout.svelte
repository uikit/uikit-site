<script>
    import Offcanvas from './Offcanvas.svelte';
    import { assets, base } from '$app/paths';
    import { page } from '$app/stores';

    import { PUBLIC_CACHE } from '$env/static/public';
    import { dev } from '$app/environment';

    export let devMode = dev;

    export let data;
</script>

<svelte:head>
    {#if !devMode}
        <script
            src="{assets}/analytics.js?{PUBLIC_CACHE}"
            onload={`analytics('UA-42150424-1', { anonymize_ip: true })`}
            defer
        ></script>
    {/if}
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
