<template>

    <div class="uk-section-primary tm-section-texture uk-preserve-color">

        <navbar class="uk-light" uk-sticky="media: 960;show-on-up: true;animation: uk-animation-slide-top;cls-inactive: uk-navbar-transparent"></navbar>

        <div class="uk-section" uk-height-viewport="expand: true">
            <div class="uk-container uk-container-small">

                <div class="uk-card uk-card-default uk-card-body">

                    <h1 class="uk-margin-medium uk-text-center">Changelog</h1>

                    <div ref="changelog"></div>

                </div>

            </div>
        </div>

    </div>

</template>

<script>

    import $ from 'jquery';

    export default {

        mounted() {

            $.get('assets/uikit/CHANGELOG.md', {nc: Math.random()}, body => {
                this.$refs.changelog.innerHTML = this.parse(body);
            });
        },

        methods: {

            parse(markdown)  {

                var renderer = new marked.Renderer(), section;

                renderer.list = text => '<ul class="uk-list">' + text + '</ul>';

                renderer.listitem = function (text) {

                    var label = '';

                    switch (section) {

                        case 'Added':
                            label = 'uk-label-success';
                            break;

                        case 'Removed':
                        case 'Deprecated':
                            label = 'uk-label-warning';
                            break;

                        case 'Fixed':
                        case 'Security':
                            label = 'uk-label-danger';
                    }

                    return '<li><span class="uk-label ' + label + ' uk-margin-right uk-text-center uk-width-small tm-width-small">' + section + '</span> ' + text + '</li>';
                };

                renderer.heading = (text, level) => {

                    text = text.replace(/(\(.*?\))/, '<span class="uk-text-muted">$1</span>');

                    if (level == 2) {
                        return '<h' + level + ' class="uk-h3">' + text + '</h' + level + '>';
                    }

                    if (level == 3) {
                        section = text;
                    }

                    return '';
                };

                return marked(markdown, {renderer: renderer});
            }
        }
    }

</script>
