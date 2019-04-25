<template>

    <div>

        <router-view/>

        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">

                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">General</li>
                        <li><a href="./index">Home</a></li>
                        <li><a href="./pro">Pro</a></li>
                        <li><a href="./changelog">Changelog</a></li>
                        <li><a href="./download">Download</a></li>
                    </ul>

                    <ul v-for="(pages, category) in navigation" class="uk-nav uk-nav-default tm-nav uk-margin-top">
                        <li class="uk-nav-header">{{ category }}</li>
                        <li v-for="(p, label) in pages" exact><a :href="`./docs/${p}`">{{ label }}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>
