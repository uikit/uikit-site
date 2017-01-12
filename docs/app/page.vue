<script>

    import $ from 'jquery';
    import { parse, openOnCodepen, sluggify } from './util';
    import Page from '../../app/page.vue';

    const navigation = require('./navigation.json');

    var components = Object.keys(navigation['Components']).map(label => navigation['Components'][label]);

    export default {

        extends: Page,

        data: () => ({
            extension: 'md'
        }),

        mounted() {

            (new Clipboard('a.js-copy', {
                text: trigger => $(trigger.getAttribute('rel')).text()
            })).on('success', e => {
                UIkit.notification({message: 'Copied!', pos: 'bottom-right'});
            }).on('error', e => {
                UIkit.notification({message: 'Copy failed!', status: 'danger', pos: 'bottom-right'});
            });

            $(this.$refs.container)

                .on('click', 'a.js-codepen', e => {

                    e.preventDefault();
                    e.stopImmediatePropagation();

                    openOnCodepen($(e.currentTarget.getAttribute('rel')).text());

                })

                .on('click', '[href="#"]', e => e.preventDefault());

        },

        watch: {

            page() {

                this.$parent.component = components.indexOf(this.$route.params.page) != -1 ? this.$route.params.page : false;

                this.$nextTick(() => {

                    $('pre code', this.$refs.container).each((i, block) => hljs.highlightBlock(block));

                    this.$parent.ids = $('h1,h2', this.$refs.container).filter((i, el) => !$(el).parents('.uk-switcher').length).toArray().reduce((ids, el) => {

                        el = $(el);

                        let text = el.text().replace('#', ''), id = sluggify(text);

                        el.attr('id', id);

                        if (el.is('h2')) {
                            ids[text] = id;
                        }

                        return ids;

                    }, {});

                });

            }

        },

        methods: {

            setPage(page) {

                parse(page, (err, content) => {

                    if (err) {
                        this.page = null;
                        this.error = err;
                    } else {
                        this.page = content;
                    }

                });

            }

        }

    }

</script>
