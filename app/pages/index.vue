<template>

    <div class="uk-section-primary tm-section">

        <navbar></navbar>

        <div class="uk-section uk-flex uk-flex-middle uk-text-center" uk-height-viewport="offset-top: true; offset-bottom: true">
            <div class="uk-width-1-1">
                <div class="uk-container">

                    <p class="uk-margin-large-bottom">
                        <img uk-svg :src="'./images/uikit-logo-large.svg'">
                    </p>

                    <p class="uk-margin-large uk-text-lead">
                        A lightweight and modular front-end framework<br class="uk-visible@s">
                        for developing fast and powerful web interfaces.
                    </p>

                    <div class="uk-child-width-auto uk-flex-inline uk-flex-center" uk-grid>
                        <div>
                            <a class="uk-button uk-button-primary tm-button-primary" href="./docs">Get Started</a>
                        </div>
                        <div>
                            <a class="uk-button uk-button-default tm-button-default" href="https://github.com/uikit/uikit">Github</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="uk-section-small">
            <div class="uk-container uk-container-expand uk-text-center uk-position-relative">

                <ul class="uk-subnav tm-subnav uk-flex-inline uk-margin-remove-bottom">
                    <li>
                        <span>Version <span uikit-version></span></span>
                    </li>
                    <li>
                        <a href="https://github.com/uikit/uikit/stargazers"><span class="uk-margin-small-right" uk-icon="icon: star"></span><span uikit-stargazers>8100</span> Stargazers</a>
                    </li>
                    <li>
                        <a class="uk-text-lowercase" href="https://twitter.com/getuikit"><span class="uk-margin-small-right" uk-icon="icon: twitter"></span>@getuikit</a>
                    </li>
                    <li>
                        <a href="https://gitter.im/uikit/uikit"><span class="uk-margin-small-right" uk-icon="icon: commenting"></span>Community</a>
                    </li>
                </ul>

                <a class="uk-button uk-button-default tm-button-default uk-position-center-right uk-position-medium" href="./docs">UIkit 2 <span uk-icon="icon: arrow-right"></span></a>

            </div>
        </div>

    </div>

</template>

<script>

    import $ from 'jquery';

    export default {

        mounted() {

            $.ajax({
                dataType : "jsonp",
                url      : "https://api.github.com/repos/uikit/uikit?callback=ukghapi&nocache="+Math.random(),
                success  : data => {

                    if (!data) return;

                    if (data.data.watchers){
                        $("[uikit-stargazers]").html(data.data.watchers);
                    }

                    if (data.data.forks){
                        $("[uikit-forks]").html(data.data.forks);
                    }
                }
            });

            $.get("assets/uikit/package.json", {nocache: Math.random()}, data => {
                $("[uikit-version]").text(data.version);
            }, 'json');

        }
    }

</script>
