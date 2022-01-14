<template>
    <div>
        <router-view/>

        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-panel">
                    <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-nav-header">
                            General
                        </li>
                        <router-link tag="li" to="index">
                            <a>Home</a>
                        </router-link>
                        <router-link tag="li" to="pro">
                            <a>Pro</a>
                        </router-link>
                        <router-link tag="li" to="changelog">
                            <a>Changelog</a>
                        </router-link>
                        <router-link tag="li" to="download">
                            <a>Download</a>
                        </router-link>
                    </ul>

                    <ul v-for="(pages, category) in navigation" :key="category" class="uk-nav uk-nav-default tm-nav uk-margin-top">
                        <li class="uk-nav-header">
                            {{ category }}
                        </li>
                        <li v-for="(p, label) in pages" :key="p">
                            <a :href="`docs/${p}`">{{ label }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
