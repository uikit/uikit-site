<script>
    import Offcanvas from './Offcanvas.svelte';
    import { assets } from '$app/paths';
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
            onload={`analytics('G-CFB78X3F60', { anonymize_ip: true })`}
            defer
        ></script>
    {/if}
</svelte:head>

<div class="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto">
    <div class="uk-notification-message">
        <a href="#tm-main">Skip to main content</a>
    </div>
</div>

<slot />

<Offcanvas navigation={data.navigation} />

{#if !$page.route.id?.startsWith('/docs')}
    <div>
        <script>
            sessionStorage.setItem('scroll', 0);
        </script>
    </div>
{/if}
