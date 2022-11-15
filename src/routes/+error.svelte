<script>
    import { page } from '$app/stores';
</script>

<div class="uk-section-primary tm-section-texture">
    <navbar class="uk-navbar-transparent" />

    <div
        class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center"
        uk-height-viewport
    >
        <div class="uk-width-1-1">
            <div class="uk-container">
                <h1 class="uk-heading-2xlarge uk-margin-medium uk-text-center">{$page.status}</h1>

                <p class="uk-text-large">{$page.error.message}</p>
            </div>
        </div>
    </div>
</div>
