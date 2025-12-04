<script>
    import Offcanvas from './Offcanvas.svelte';
    import { page } from '$app/state';
    import { dev } from '$app/environment';

    let { data, children } = $props();
</script>

<svelte:head>
    {#if !dev}
        <script src="https://stats.yootheme.com/script.js" data-website-id="f3d923d6-34da-4326-907d-fefe4962bde9" defer></script>
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
