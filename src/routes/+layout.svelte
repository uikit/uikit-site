<script>
    import Offcanvas from './Offcanvas.svelte';
    import { assets } from '$app/paths';
    import { page } from '$app/state';
    import { PUBLIC_CACHE } from '$env/static/public';
    import { dev } from '$app/environment';

    let { data, children } = $props();

    const analyticsScript = `${assets}/analytics.js?${PUBLIC_CACHE}`;
</script>

<svelte:head>
    {#if !dev}
        <script src={analyticsScript} defer></script>
    {/if}
</svelte:head>

<div class="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto">
    <div class="uk-notification-message">
        <a href="#tm-main">Skip to main content</a>
    </div>
</div>

{@render children?.()}

<Offcanvas navigation={data.navigation} />

{#if !page.route.id?.startsWith('/docs')}
    <div>
        <script>
            sessionStorage.setItem('scroll', 0);
        </script>
    </div>
{/if}
