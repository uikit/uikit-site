<script>
    import Header from '../Header.svelte';
    import { assets, base } from '$app/paths';

    function titleCase(str) {
        return str
            .replaceAll('-', ' ')
            .replace(/\b\w+/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
</script>

<svelte:head>
    <title>YOOtheme Pro - UIkit</title>
</svelte:head>

<div class="uk-section-primary tm-section-intro">
    <Header
        class="uk-light"
        uk-sticky="start: 400; show-on-up: true; animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent; media: 960"
    />

    <div class="uk-section uk-padding-remove-bottom">
        <div class="uk-container">
            <div uk-grid>
                <div class="uk-width-1-3@l uk-width-expand@xl uk-text-center uk-text-left@l">
                    <div class="tm-intro-text uk-inline uk-width-xlarge">
                        <h1 class="uk-h6 tm-h6 uk-margin-remove">YOOtheme Pro</h1>
                        <h2 class="uk-h1 uk-margin-top uk-margin-medium-bottom">
                            A theme and page builder for WordPress &amp; Joomla from the UIkit
                            creators
                        </h2>

                        <div class="uk-grid-medium uk-flex-middle uk-flex-inline" uk-grid>
                            <div>
                                <a
                                    class="uk-button uk-button-default uk-button-large tm-button-primary tm-button-large uk-visible@s"
                                    href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Top"
                                    >Buy Now</a
                                >

                                <a
                                    class="uk-button uk-button-default tm-button-primary uk-hidden@s"
                                    href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Top"
                                    >Buy Now</a
                                >
                            </div>
                            <div>
                                <a
                                    class="uk-button uk-button-text"
                                    href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Learn+Top"
                                    >Learn More</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-width-2-3@l uk-width-auto@xl uk-text-center">
                    <div class="tm-intro-image">
                        <div class="uk-inline">
                            <img
                                src="{assets}/images/pro/device-laptop.png"
                                width="960"
                                height="670"
                                alt="Laptop Device"
                            />
                            <div style="position: absolute; top: 5%; left: 12%; right: 12%">
                                <img
                                    src="{assets}/images/pro/page-builder.gif"
                                    width="730"
                                    height="456"
                                    alt="Animated Gif YOOtheme Pro Page Builder"
                                    uk-gif
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="uk-section uk-section-large uk-section-default uk-padding-remove-top">
    <div class="uk-container">
        <div class="uk-child-width-expand@m uk-child-width-1-2@s" uk-grid>
            <div>
                <h3 class="uk-h4">A perfect fit</h3>
                <p>
                    Want to use UIkit in your WordPress or Joomla website? YOOtheme Pro integrates
                    it into everything – from menus and widgets to pages.
                </p>
            </div>
            <div>
                <h3 class="uk-h4">Page builder</h3>
                <p>
                    Create websites on the fly with the drag and drop page builder. It generates
                    perfect UIkit markup, tailored for your needs.
                </p>
            </div>
            <div>
                <h3 class="uk-h4">Live preview</h3>
                <p>
                    Customize every aspect of UIkit visually, build and arrange your content, all in
                    one comprehensive and intuitive interface.
                </p>
            </div>
            <div>
                <h3 class="uk-h4">Element library</h3>
                <p>
                    Build pages with ready-to-use elements made from UIkit components, like buttons,
                    cards, accordions and much more.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="uk-container">
    <hr />
</div>

<div class="uk-section uk-section-default uk-section-large">
    <div class="uk-container">
        <div class="uk-grid-large uk-flex-middle uk-text-center uk-text-left@l" uk-grid>
            <div class="uk-width-1-3@l uk-flex-last@l">
                <div class="uk-inline uk-width-xlarge">
                    <h1 class="uk-h6 tm-h6 uk-margin-remove">Style Customizer</h1>
                    <h2 class="uk-h1 uk-margin-top">Create your style</h2>
                    <p class="uk-text-large tm-text-large">
                        Modify the visual appearance of your site – including colors, fonts, margins
                        and other style related properties – with a sophisticated style customizer
                        for UIkit.
                    </p>
                </div>
            </div>
            <div class="uk-width-2-3@l">
                <img
                    class="tm-box-shadow-large"
                    src="{assets}/images/pro/style-customizer.gif"
                    width="780"
                    height="456"
                    alt="Animated Gif YOOtheme Pro Style Customizer"
                    loading="lazy"
                />
            </div>
        </div>

        <div class="uk-width-xlarge uk-margin-auto uk-text-center uk-margin-large-bottom">
            <h2 class="uk-text-center uk-margin-xlarge-top">Pre-built styles</h2>
            <p class="uk-text-large tm-text-large">
                Try out any of UIkit theme with one click. You can switch between 100+ styles from
                the library, and your content will adapt automatically.
            </p>
        </div>

        <div class="uk-child-width-1-4@m uk-child-width-1-2@s" uk-grid>
            {#each ['line-gallery', 'union-dental', 'devstack', 'design-escapes', 'paladin', 'kitchen-daily', 'creative-hub', 'tech-space'] as id}
                <div>
                    <div class="uk-inline tm-box-shadow-medium uk-transition-toggle">
                        <img
                            src="{assets}/images/pro/style-{id}.jpg"
                            width="1200"
                            height="900"
                            alt={`${titleCase(id)} Style`}
                            loading="lazy"
                        />
                        <a
                            class="tm-overlay-default uk-position-cover uk-transition-fade"
                            href={`https://demo.yootheme.com/wordpress/themes/${id}/`}
                            aria-label={`Show ${titleCase(id)} style demo`}
                            data-modal
                        />
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="uk-container">
    <hr />
</div>

<div class="uk-section uk-section-default uk-section-large">
    <div class="uk-container">
        <div class="uk-width-xlarge uk-margin-auto uk-text-center uk-margin-large-bottom">
            <h1 class="uk-h6 tm-h6 uk-margin-remove">The Layout Library</h1>
            <h2 class="uk-h1 uk-margin-top">Incredible layouts</h2>
            <p class="uk-text-large tm-text-large">
                Load existing layouts or create your own and save it to the library. Anything you
                can think of can be built with YOOtheme Pro.
            </p>
        </div>

        <div class="uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2" uk-grid>
            {#each ['line-gallery', 'union-dental', 'devstack', 'design-escapes', 'paladin', 'kitchen-daily', 'creative-hub', 'tech-space', 'framerate', 'design-bites', 'matthew-taylor', 'soda', 'makai', 'balou', 'yoko'] as id}
                <div>
                    <div class="uk-inline tm-box-shadow-medium uk-transition-toggle">
                        <img
                            src={`images/pro/layout-${id}.jpg`}
                            width="800"
                            height="1250"
                            alt={`${titleCase(id)} Home Layout`}
                            loading="lazy"
                        />
                        <a
                            class="tm-overlay-default uk-position-cover uk-transition-fade"
                            href={`https://demo.yootheme.com/wordpress/themes/${id}/`}
                            aria-label={`Show ${titleCase(id)} layout demo`}
                            data-modal
                        />
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<div
    class="uk-section uk-section-primary tm-section-primary uk-section-xlarge uk-padding-remove-bottom"
>
    <div class="uk-container uk-text-center">
        <h2 class="uk-h1">Get YOOtheme Pro</h2>
        <p class="uk-text-large tm-text-large uk-margin-medium-bottom">
            The all-in-one theme and page builder for WordPress &amp; Joomla
        </p>

        <div class="uk-grid-medium uk-flex-middle uk-flex-center" uk-grid>
            <div>
                <a
                    class="uk-button uk-button-default uk-button-large tm-button-primary tm-button-large uk-visible@s"
                    href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Top"
                    >Buy Now</a
                >

                <a
                    class="uk-button uk-button-default tm-button-primary uk-hidden@s"
                    href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Bottom"
                    >Buy Now</a
                >
            </div>
            <div>
                <a
                    class="uk-button uk-button-text"
                    href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Learn+Bottom"
                    >Learn More</a
                >
            </div>
        </div>

        <hr class="uk-margin-remove-bottom uk-margin-xlarge-top" />

        <div class="uk-margin-top uk-margin-bottom">
            <div class="uk-child-width-auto@m uk-flex-middle" uk-grid>
                <div>
                    <div class="uk-text-left@m uk-text-center">
                        <a class="uk-logo uk-flex" href="{base}/" aria-label="Back to Home">
                            <img
                                src="{assets}/images/uikit-logo.svg"
                                class="uk-margin-small-right"
                                width="28"
                                height="34"
                            />
                            UIkit
                        </a>
                    </div>
                </div>
                <div class="uk-margin-auto">
                    <ul class="uk-subnav uk-flex-center" uk-margin>
                        <li><a href="{base}/pro"> Pro </a></li>
                        <li><a href="{base}/docs/introduction">Documentation</a></li>
                        <li>
                            <a href="{base}/changelog">Changelog</a>
                        </li>
                        <li>
                            <a href="{base}/download">Download</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="uk-text-right@m uk-text-center">
                        <div class="uk-child-width-auto uk-grid-small uk-flex-center" uk-grid>
                            <div>
                                <a
                                    href="https://github.com/uikit/uikit"
                                    class="uk-icon-link"
                                    uk-icon="github"
                                    aria-label="Go to GitHub"
                                />
                            </div>
                            <div>
                                <a
                                    href="https://discordapp.com/invite/NEt4Pv7"
                                    class="uk-icon-link"
                                    uk-icon="commenting"
                                    aria-label="Go to Discord"
                                />
                            </div>
                            <div>
                                <a
                                    href="https://twitter.com/getuikit"
                                    class="uk-icon-link"
                                    uk-icon="twitter"
                                    aria-label="Go to Twitter"
                                />
                            </div>
                            <div>
                                <a
                                    href="https://www.facebook.com/getuikit"
                                    class="uk-icon-link"
                                    uk-icon="facebook"
                                    aria-label="Go to Facebook"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->

<div id="modal-demo" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog tm-modal-dialog uk-flex uk-flex-column" uk-height-viewport>
        <button
            class="uk-modal-close-full tm-modal-close-full uk-close-large"
            type="button"
            uk-close
        />
        <div class="tm-modal-header">
            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                <div>
                    <a
                        class="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s"
                        href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Modal"
                        >Buy YOOtheme Pro</a
                    >

                    <a
                        class="uk-button uk-button-primary tm-button-primary uk-hidden@s"
                        href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Modal"
                        >Buy</a
                    >
                </div>
                <div>
                    <a
                        class="uk-button uk-button-text"
                        href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Learn+Modal"
                        >Learn More</a
                    >
                </div>
            </div>
        </div>
        <div class="tm-modal-body uk-flex-1 uk-flex">
            <iframe class="uk-width-1-1 tm-box-shadow-modal" title="YOOtheme Pro Layout Demo" />
        </div>
    </div>
    <script>
        const { modal } = UIkit;
        const { $, on } = UIkit.util;

        on(document, 'click', '[data-modal]', (e) => {
            const modalEl = $('#modal-demo');

            e.preventDefault();

            const el = e.target;

            if (window.innerWidth < 960) {
                window.open(el.href);
                return;
            }

            modal(modalEl).show();
            $('iframe', modalEl).src = el.href;
        });

        on('#modal-demo', 'hidden', (e) => {
            $('iframe', e.target).src = '';
        });
    </script>
</div>
