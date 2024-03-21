<script>
    import Header from '../Header.svelte';
    export let data;
</script>

<svelte:head>
    <title>Changelog - UIkit</title>
</svelte:head>

<div class="uk-section-primary tm-section-texture uk-preserve-color">
    <Header
        class="uk-light"
        uk-sticky="start: 400; show-on-up: true; animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent"
    />

    <div id="tm-main" class="uk-section" uk-height-viewport="expand: true">
        <div class="uk-container uk-container-small">
            <div class="uk-card uk-card-default uk-card-body">
                <h1 class="uk-margin-medium uk-text-center">Changelog</h1>

                <div>{@html data.changelog}</div>
            </div>
        </div>
    </div>
</div>
