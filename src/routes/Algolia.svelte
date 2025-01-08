<script>
    import AlgoliaJs from '@docsearch/js/dist/umd/index?url';
</script>

<svelte:head>
    <script src={AlgoliaJs} defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            window.docsearch({
                container: '#docsearch',
                appId: 'BW86W6HUZF',
                indexName: 'getuikit',
                apiKey: '25c7e368fd59df85d31b2cf75a9b3d4d',
            });
        });
    </script>
</svelte:head>

<span id="docsearch"></span>
