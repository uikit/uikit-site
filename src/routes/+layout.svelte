<script>
    import Offcanvas from './Offcanvas.svelte';
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    export let data;
</script>

<slot />

<Offcanvas navigation={data.navigation} />

{#if !$page.url.pathname.startsWith(`${base}/docs`)}
    <div>
        <script>
            sessionStorage.setItem('scroll', 0);
        </script>
    </div>
{/if}
