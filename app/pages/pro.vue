<template>
    <div>

        <div class="uk-section-primary tm-section-intro">

            <navbar class="uk-light" uk-sticky="media: 960;show-on-up: true;animation: uk-animation-slide-top;cls-inactive: uk-navbar-transparent;top: 400"/>

            <div class="uk-section uk-padding-remove-bottom">
                <div class="uk-container">

                    <div class="" uk-grid>
                        <div class="uk-width-1-3@l uk-width-expand@xl uk-text-center uk-text-left@l">

                            <div class="tm-intro-text uk-inline uk-width-xlarge">
                                <h1 class="uk-h6 tm-h6 uk-margin-remove">YOOtheme Pro</h1>
                                <h2 class="uk-h1 uk-margin-top uk-margin-medium-bottom">A theme and page builder for WordPress &amp; Joomla from the UIkit creators</h2>

                                <div class="uk-grid-medium uk-flex-middle uk-flex-inline" uk-grid>
                                    <div>

                                        <a class="uk-button uk-button-default uk-button-large tm-button-primary tm-button-large uk-visible@s" href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Top">Buy Now</a>

                                        <a class="uk-button uk-button-default tm-button-primary uk-hidden@s" href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Top">Buy Now</a>

                                    </div>
                                    <div>

                                        <a class="uk-button uk-button-text" href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Learn+Top">Learn More</a>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="uk-width-2-3@l uk-width-auto@xl uk-text-center">

                            <div class="tm-intro-image">
                                <div class="uk-inline">
                                    <canvas v-show="!imgLoaded" width="960" height="670"></canvas>
                                    <img v-show="imgLoaded" src="images/pro/device-laptop.png" width="960" height="670" alt="Laptop Device" @load="imgLoaded = true">
                                    <div style="position: absolute; top: 5%; left: 12%; right: 12%;">
                                        <img src="images/pro/page-builder.gif" width="730" height="456" alt="Animated Gif YOOtheme Pro Page Builder" uk-gif>
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
                        <p>Want to use UIkit in your WordPress or Joomla website? YOOtheme Pro integrates it into everything – from menus and widgets to pages.</p>

                    </div>
                    <div>

                        <h3 class="uk-h4">Page builder</h3>
                        <p>Create websites on the fly with the drag and drop page builder. It generates perfect UIkit markup, tailored for your needs.</p>

                    </div>
                    <div>

                        <h3 class="uk-h4">Live preview</h3>
                        <p>Customize every aspect of UIkit visually, build and arrange your content, all in one comprehensive and intuitive interface.</p>

                    </div>
                    <div>

                        <h3 class="uk-h4">Element library</h3>
                        <p>Build pages with ready-to-use elements made from UIkit components, like buttons, cards, accordions and much more.</p>

                    </div>
                </div>

            </div>
        </div>

        <div class="uk-container">
            <hr>
        </div>

        <div class="uk-section uk-section-default uk-section-large">
            <div class="uk-container">

                <div class="uk-grid-large uk-flex-middle uk-text-center uk-text-left@l" uk-grid>
                    <div class="uk-width-1-3@l uk-flex-last@l">

                        <div class="uk-inline uk-width-xlarge">
                            <h1 class="uk-h6 tm-h6 uk-margin-remove">Style Customizer</h1>
                            <h2 class="uk-h1 uk-margin-top">Create your style</h2>
                            <p class="uk-font-large tm-text-large">Modify the visual appearance of your site – including colors, fonts, margins and other style related properties – with a sophisticated style customizer for UIkit.</p>
                        </div>

                    </div>
                    <div class="uk-width-2-3@l">

                        <img src="images/pro/style-customizer.gif" class="tm-box-shadow-large">

                    </div>
                </div>

                <div class="uk-width-xlarge uk-margin-auto uk-text-center uk-margin-large-bottom">
                    <h2 class="uk-text-center uk-margin-xlarge-top">Pre-built styles</h2>
                    <p class="uk-font-large tm-text-large">Try out any UIkit theme with one click. You can switch between styles from the library and your content adapts automatically.</p>
                </div>

                <div class="uk-child-width-1-4@m uk-child-width-1-2@s" uk-grid>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-copper-hill.jpg" alt="Copper Hill Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/copper-hill/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-sonic.jpg" alt="Sonic Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/sonic/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-fjord.jpg" alt="Fjord Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/fjord/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-joline.jpg" alt="Joline Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/joline/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-max.jpg" alt="Max Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/max/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-horizon.jpg" alt="Horizon Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/horizon/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-fuse.jpg" alt="Fuse Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/fuse/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/style-juno.jpg" alt="Juno Style">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/juno/" data-modal></a>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <div class="uk-container">
            <hr>
        </div>

        <div class="uk-section uk-section-default uk-section-large">
            <div class="uk-container">

                <div class="uk-width-xlarge uk-margin-auto uk-text-center uk-margin-large-bottom">
                    <h1 class="uk-h6 tm-h6 uk-margin-remove">The Layout Library</h1>
                    <h2 class="uk-h1 uk-margin-top">Incredible layouts</h2>
                    <p class="uk-font-large tm-text-large">Load existing layouts or create your own and save it to the library. Anything you can think of can be built with YOOtheme Pro.</p>
                </div>

                <div class="uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2" uk-grid>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-copper-hill.jpg" alt="Copper Hill Frontpage Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/copper-hill/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-horizon-overview.jpg" alt="Horizon Overview Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/horizon/?page_id=19" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-sonic.jpg" alt="Sonic Frontpage Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/sonic/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-joline.jpg" alt="Joline Frontpage Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/joline/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-sonic-location.jpg" alt="Sonic Location Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/sonic/?page_id=22" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-max.jpg" alt="Max Frontpage Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/max/" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-joline-spots-case-study.jpg" alt="Joline Case Study Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/joline/?page_id=24" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-fjord.jpg" alt="Fjord Frontpage Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/fjord/" data-modal></a>
                        </div>

                    </div>
                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-horizon.jpg" alt="Horizon Frontpage Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/horizon/" data-modal></a>
                        </div>

                    </div>
                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-fuse.jpg" alt="Fuse Frontpage Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/fuse/" data-modal></a>
                        </div>

                    </div>
                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-fjord-resources.jpg" alt="Fjord Resources Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/fjord/?page_id=21" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-copper-hill-lunch.jpg" alt="Copper Hill Lunch Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/copper-hill/?page_id=28" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-sonic-speakers.jpg" alt="Sonic Speakers Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/sonic/?page_id=20" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-horizon-products.jpg" alt="Horizon Products Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2016/horizon/?page_id=13" data-modal></a>
                        </div>

                    </div>

                    <div>

                        <div class="uk-inline tm-box-shadow-medium uk-transition-toggle" tabindex="0">
                            <img src="images/pro/layout-joline-about.jpg" alt="Joline About Layout">
                            <a class="tm-overlay-default uk-position-cover uk-transition-fade" href="https://demo.yootheme.com/themes/wordpress/2017/joline/?page_id=20" data-modal></a>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <div class="uk-section uk-section-primary tm-section-primary uk-section-xlarge uk-padding-remove-bottom">
            <div class="uk-container uk-text-center">

                <h2 class="uk-h1">Get YOOtheme Pro</h2>
                <p class="uk-font-large tm-text-large uk-margin-medium-bottom">The all-in-one theme and page builder for WordPress &amp; Joomla</p>

                <div class="uk-grid-medium uk-flex-middle uk-flex-center" uk-grid>
                    <div>

                        <a class="uk-button uk-button-default uk-button-large tm-button-primary tm-button-large uk-visible@s" href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Top">Buy Now</a>

                        <a class="uk-button uk-button-default tm-button-primary uk-hidden@s" href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Bottom">Buy Now</a>

                    </div>
                    <div>

                        <a class="uk-button uk-button-text" href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Learn+Bottom">Learn More</a>

                    </div>
                </div>

                <hr class="uk-margin-remove-bottom uk-margin-xlarge-top">

                <div class="uk-margin-top uk-margin-bottom">
                    <div class="uk-child-width-auto@m uk-flex-middle" uk-grid>
                        <div>

                            <div class="uk-text-left@m uk-text-center">
                                <a class="uk-logo" href="./index">
                                    <canvas class="uk-margin-small-right" width="28" height="34" uk-svg src="./images/uikit-logo.svg"></canvas>
                                    UIkit
                                </a>
                            </div>

                        </div>
                        <div class="uk-margin-auto">

                            <ul class="uk-subnav uk-flex-center" uk-margin>
                                <li><a href="./pro">Pro</a></li>
                                <li><a href="./docs">Documentation</a></li>
                                <li><a href="./changelog">Changelog</a></li>
                                <li><a href="./download">Download</a></li>
                            </ul>

                        </div>
                        <div>

                            <div class="uk-text-right@m uk-text-center">
                                <div class="uk-child-width-auto uk-grid-small uk-flex-center" uk-grid>
                                    <div><a href="https://github.com/uikit/uikit" class="uk-icon-link" uk-icon="icon: github"></a></div>
                                    <div><a href="https://discordapp.com/invite/NEt4Pv7" class="uk-icon-link" uk-icon="icon: commenting"></a></div>
                                    <div><a href="https://twitter.com/getuikit" class="uk-icon-link" uk-icon="icon: twitter"></a></div>
                                    <div><a href="https://www.facebook.com/getuikit" class="uk-icon-link" uk-icon="icon: facebook"></a></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

        <!-- Modal -->

        <div id="modal-demo" ref="modal" class="uk-modal-full" uk-modal>
            <div class="uk-modal-dialog tm-modal-dialog uk-flex uk-flex-column" uk-height-viewport>
                <button class="uk-modal-close-full tm-modal-close-full uk-close-large" type="button" uk-close></button>
                <div class="tm-modal-header">

                    <div class="uk-grid-medium uk-flex-middle" uk-grid>
                        <div>

                            <a class="uk-button uk-button-primary tm-button-primary uk-button-large tm-button-large uk-visible@s" href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Modal">Buy YOOtheme Pro</a>

                            <a class="uk-button uk-button-primary tm-button-primary uk-hidden@s" href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Buy+Modal">Buy</a>

                        </div>
                        <div>

                            <a class="uk-button uk-button-text" href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=UIkit&amp;utm_medium=referral&amp;utm_content=Learn+Modal">Learn More</a>

                        </div>
                    </div>

                </div>
                <div class="tm-modal-body uk-flex-1 uk-flex">
                    <iframe ref="iframe" class="uk-width-1-1 tm-box-shadow-modal" src=""></iframe>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

    import {modal} from 'uikit';
    import {on} from 'uikit-util';

    export default {

        data: () => ({
            imgLoaded: false
        }),

        mounted() {

            on(this.$el, 'click', '[data-modal]', e => {

                const {iframe, modal: modalEl} = this.$refs;

                e.preventDefault();

                const el = e.target;

                if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                    window.open(el.href);
                    return;
                }

                iframe.src = '';
                modal(modalEl).show();

                requestAnimationFrame(() => iframe.src = el.href);

            });
        }

    };

</script>
