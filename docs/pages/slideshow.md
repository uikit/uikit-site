# Slideshow

<p class="uk-text-lead">Create a responsive slideshow with images and videos.</p>

The Slideshow component is fully responsive and supports touch and swipe navigation as well as mouse drag for desktops. When swiping between slides, the animation literally sticks at your fingertips or mouse cursor. It accelerates to keep up with your pace when you click through the previous and next navigation. All animations are hardware accelerated for a smoother performance.

## Usage

To apply this component, add the `uk-slideshow` attribute to a container element and create a list of slides with the `.uk-slideshow-items` class.

Add an image in the background of each slide using the `uk-cover` attribute from the [Cover component](cover.md).

```html
<div uk-slideshow>
    <div class="uk-slideshow-items">
        <div>
            <img src="" alt="" uk-cover>
        </div>
    </div>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

**Note** To lazy load images in the slides, use the `loading="lazy"` attribute. The Slideshow will automatically remove the attribute from images in adjacent slides.

***

## Animations

By default, the slideshow uses a `slide` animation. You can set the `animation` option to use a different animation. Possible values are as follows:

| Animation | Description                        |
| --------- | ---------------------------------- |
| `slide`   | Slides slide in side by side.      |
| `fade`    | Slides fade in.                    |
| `scale`   | Slides are scaled up and fade out. |
| `pull`    | Slides are pulled from the deck.   |
| `push`    | Slides are pushed to the deck.     |


```html
<div uk-slideshow="animation: fade">…</div>
```

```example
<div class="uk-child-width-1-2@m" uk-grid>
    <div>

        <div class="uk-h3">Slide</div>

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

            <div class="uk-slideshow-items">
                <div>
                    <img src="images/photo.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/dark.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/light.jpg" alt="" uk-cover>
                </div>
            </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="uk-h3">Fade</div>

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade">

            <div class="uk-slideshow-items">
                <div>
                    <img src="images/photo.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/dark.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/light.jpg" alt="" uk-cover>
                </div>
            </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="uk-h3">Scale</div>

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: scale">

            <div class="uk-slideshow-items">
                <div>
                    <img src="images/photo.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/dark.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/light.jpg" alt="" uk-cover>
                </div>
            </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="uk-h3">Pull</div>

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: pull">

            <div class="uk-slideshow-items">
                <div>
                    <img src="images/photo.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/dark.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/light.jpg" alt="" uk-cover>
                </div>
            </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
    <div>

        <div class="uk-h3">Push</div>

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push">

            <div class="uk-slideshow-items">
                <div>
                    <img src="images/photo.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/dark.jpg" alt="" uk-cover>
                </div>
                <div>
                    <img src="images/light.jpg" alt="" uk-cover>
                </div>
            </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
</div>
```

***

## Autoplay

To activate autoplay, just add the `autoplay: true` option to the attribute. You can also set the interval in milliseconds between switching slides using `autoplay-interval: 6000`. To pause autoplay when hovering the slideshow, use `pause-on-hover: true`.

```html
<div uk-slideshow="autoplay: true">…</div>
```

***

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable this behavior, just add the `finite: true` option to the attribute.

```html
<div uk-slideshow="finite: true">…</div>
```

***

## Ratio

The slideshow always takes up the full width of its parent container. The height adapts according to the defined ratio. To change the default ratio of 16:9, just add the `ratio` option to the attribute. It's recommended to use the same ratio as the background images. For example, just use their width and height, like `1600:1200`.

```html
<div uk-slideshow="ratio: 7:3">…</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

## Min/Max height

By default, the slideshow height adopts the defined ratio. A minimum or maximum height can be set using the `min-height` and `max-height` options.

```html
<div uk-slideshow="min-height: 300; max-height: 600">…</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="min-height: 300; max-height: 600; animation: push">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

## Viewport height

Adding the `uk-height-viewport` attribute from the [Height component](height.md#viewport-height) to the list of slideshow items will stretch the height to fill the whole viewport. You can set the `min-height` option to define a minimum height.

```html
<div uk-slideshow="ratio: false">
    <ul class="uk-slideshow-items" uk-height-viewport="min: 300">…</ul>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: false">

    <div class="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 30">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

**Note** This example is set to 70% of the viewport height.

***

## Navigation

To navigate through your slides, just use the `uk-slideshow-item` attribute. To target the slides, set the attribute of every nav item to the index number of the respective slideshow item. The elements with the `uk-slideshow-item` attribute need to be inside the `uk-slideshow` container. Setting the attribute to `next` and `previous` will switch to the adjacent slides.

```html
<div uk-slideshow>

    <div class="uk-slideshow-items">…</div>

    <a href uk-slideshow-item="previous">…</a>
    <a href uk-slideshow-item="next">…</a>

    <ul>
        <li uk-slideshow-item="0"><a href>…</a></li>
        <li uk-slideshow-item="1"><a href>…</a></li>
        <li uk-slideshow-item="2"><a href>…</a></li>
    </ul>

</div>
```

The flexibility of the Slideshow component allows you to use any of the other UIkit components to navigate through items. For example the [Slidenav](slidenav.md), [Dotnav](dotnav.md) and [Thumbnav](thumbnav.md) components can be used to style the slideshow navigations.

If there is no item specific content in the navigation items, you can also add the `.uk-slideshow-nav` class instead of adding navigation items manually. It will generate its items automatically using `<li><a href></a></li>` as markup. This is a useful shortcut when using the [Dotnav](dotnav.md).

```html
<div uk-slideshow>

    <div class="uk-slideshow-items">…</div>

    <ul class="uk-slideshow-nav uk-dotnav"></ul>

</div>
```

```example
<div uk-slideshow="animation: push">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <div class="uk-slideshow-items">
            <div>
                <img src="images/photo.jpg" alt="" uk-cover>
            </div>
            <div>
                <img src="images/dark.jpg" alt="" uk-cover>
            </div>
            <div>
                <img src="images/light.jpg" alt="" uk-cover>
            </div>
        </div>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
```

**Note** For better visibility of overlaying navigations, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

***

## Parallax animation

Instead of a step-by-step animation using navigation controls, the slideshow can use a stepless parallax animation based on its scroll position in the viewport. Just add `parallax: true` to the attribute. If a navigation is set in the markup it won't be clickable but it will get the active state of the current slide.

```html
<div uk-slideshow="parallax: true">…</div>
```

```example
<div uk-slideshow="animation: push; parallax: true;">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
        </div>
    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
```

To adjust the parallax duration, set the `parallax-start` and `parallax-end` options. The `parallax-start` option defines when the animation starts. The default value of `0` means that the slideshow's top border and viewport's bottom border intersect. The `end` option defines when the animation ends. The default value of `0` means that the slideshow's bottom border and the viewport's top border intersect. Values can be set in any dimension units, namely `vh`, `%` and `px`. The `%` unit relates to the slideshow's height. Both options allow basic mathematics operands, `+` and `-`.

```html
<div uk-slideshow="parallax: true; parallax-start: 100%; parallax-end: 100%;">…</div>
```

```example
<div uk-slideshow="animation: push; parallax: true; parallax-start: 100%; parallax-end: 100%;">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
        </div>
    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
```

***

## Videos

The slideshow is not restricted to images. Other media, like videos, can be positioned in the background of each slide using the `uk-cover` attribute from the [Cover component](cover.md). Videos are muted, and play automatically. The video will pause whenever it's not visible, and resume once it becomes visible again.

```html
<div uk-slideshow>
    <div class="uk-slideshow-items">
        <div>
            <video src="" autoplay loop muted playsinline uk-cover></video>
        </div>
        <div>
            <iframe src="" uk-cover></iframe>
        </div>
    </div>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
        </div>
        <div>
            <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" autoplay loop muted playsinline uk-cover></video>
        </div>
        <div>
            <iframe src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?playsinline=1&amp;rel=0&amp;controls=0&amp;loop=1" width="1920" height="1080" allowfullscreen uk-cover></iframe>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

## Ken Burns effect

To add a simple Ken Burns effect, wrap the image with a `div` and add the `.uk-position-cover` and `.uk-animation-kenburns` classes. You can also apply the `.uk-animation-reverse` or one of the `.uk-transform-origin-*` classes from the [Utility component](utility.md#transform-origin) to modify the effect.

```html
<div uk-slideshow>
    <div class="uk-slideshow-items">
        <div>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                <img src="" alt="" uk-cover>
            </div>
        </div>
    </div>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push">

    <div class="uk-slideshow-items">
        <div>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                <img src="images/photo.jpg" alt="" uk-cover>
            </div>
        </div>
        <div>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                <img src="images/dark.jpg" alt="" uk-cover>
            </div>
        </div>
        <div>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left">
                <img src="images/light.jpg" alt="" uk-cover>
            </div>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

## Content overlays

Add content overlays using the [Position component](position.md). It allows you to place the content anywhere inside the slide.

```html
<div uk-slideshow>
    <div class="uk-slideshow-items">
        <div>
            <img src="" alt="" uk-cover>
            <div class="uk-position-center uk-position-small">

                <!-- The content goes here -->

            </div>
        </div>
    </div>
</div>
```

**Note** To adapt your content for better visibility on each image, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md) or use the [Overlay](overlay.md) to add any style to the overlay box.

```example
<div class="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slideshow="animation: push">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
            <div class="uk-position-center uk-position-small uk-text-center uk-light">
                <h2 class="uk-margin-remove">Center</h2>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
            <div class="uk-position-bottom uk-position-medium uk-text-center uk-light">
                <h3 class="uk-margin-remove">Bottom</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
                <h3 class="uk-margin-remove">Overlay Bottom</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                <h3 class="uk-margin-remove">Overlay Bottom Right</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>

    <div class="uk-light">
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>
    </div>

</div>
```

***

## Content parallax

Add the `uk-slideshow-parallax` attribute to any element inside the slides to animate it together with the slideshow animation. Add an option with the desired animation values for each CSS property you want to animate. Define at least one start and end value. It can be done by passing two values separated by a comma.

This functionality is inherited from the [Parallax component](parallax.md), and it allows animating CSS properties depending on the scroll position of the slideshow animation. Take a look at the [possible properties](parallax.md#usage) that can be animated.

```html
<div uk-slideshow>
    <div class="uk-slideshow-items">
        <div>
            <img src="" alt="" uk-cover>
            <div class="uk-position-center uk-position-small">

                <div uk-slideshow-parallax="x: 100,-100">

                    <!-- The content goes here -->

                </div>

            </div>
        </div>
    </div>
</div>
```

In the example above, the content will start at `100` and animate halfway to `0` while the slide moves in. When the slide starts again to move out, the content will continue to animate to `-100`. This works because the start and end values have the same distance. For different distances, three values are needed: _Start_ (Slide animates in), _Middle_ (Slide is centered), _End_ (Slide animates out).

```html
<div uk-slideshow-parallax="x: 300,0,-100">…</div>
```

The next example defines different in and out animations. The content slides in by moving from `100` to `0` and fades out from `1` to `0`.

```html
<div uk-slideshow-parallax="x: 100,0,0; opacity: 1,1,0">…</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
            <div class="uk-position-center uk-position-small uk-text-center">
                <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
                <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
            <div class="uk-position-center uk-position-small uk-text-center">
                <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
                <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
            <div class="uk-position-center uk-position-small uk-text-center">
                <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Heading</h2>
                <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

### Advanced effects

The parallax attribute can be used to add additional effects to the slideshow animations. In the following example the `push` animation is extended by dimming out and scaling down the image when it's sliding out.

```html
<div uk-slideshow="animation: push">
    <div class="uk-slideshow-items">
        <div>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="" alt="" uk-cover>
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
        </div>
    </div>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push">

    <div class="uk-slideshow-items">
        <div>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="images/photo.jpg" alt="" uk-cover>
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
                <div uk-slideshow-parallax="scale: 1,1,0.8">
                    <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                    <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <div>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="images/dark.jpg" alt="" uk-cover>
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
                <div uk-slideshow-parallax="scale: 1,1,0.8">
                    <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                    <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <div>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                <img src="images/light.jpg" alt="" uk-cover>
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
                <div uk-slideshow-parallax="scale: 1,1,0.8">
                    <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                    <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

## Content transitions

Transition classes from the [Transition component](transition.md) are triggered automatically inside slides. Contrary to the parallax effect, transitions are not attached to the slideshow animation and start playing independently after the slideshow animation.

```html
<div uk-slideshow>
    <div class="uk-slideshow-items">
        <div>
            <img src="" alt="" uk-cover>
            <div class="uk-position-bottom uk-position-small">

                <div class="uk-transition-slide-bottom">

                    <!-- The content goes here -->

                </div>

            </div>
        </div>
    </div>
</div>
```

Together with the [Overlay component](overlay.md), content transitions are used to build a classic caption for the slideshow.

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade">

    <div class="uk-slideshow-items">
        <div>
            <img src="images/photo.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Bottom</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <img src="images/dark.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Bottom</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <img src="images/light.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
                <h3 class="uk-margin-remove">Left</h3>
                <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Slideshow

| Option              | Value           | Default | Description                                                            |
|---------------------|-----------------|---------|------------------------------------------------------------------------|
| `animation`         | String          | `slide` | Slideshow animation mode (`slide`, `fade`, `scale`, `pull` or `push`). |
| `autoplay`          | Boolean         | `false` | Slideshow autoplays.                                                   |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode.                   |
| `draggable`         | Boolean         | `true ` | Enable pointer dragging.                                               |
| `easing`            | String          | `ease`  | The animation easing (CSS timing functions or cubic-bezier).           |
| `finite`            | Boolean         | `false` | Disable infinite sliding.                                              |
| `pause-on-hover`    | Boolean         | `true`  | Pause autoplay mode on hover.                                          |
| `index`             | Number          | `0`     | Slideshow item to show. 0 based index.                                 |
| `velocity`          | Number          | `1`     | The animation velocity (pixel/ms).                                     |
| `ratio`             | Boolean, String | `16:9`  | The ratio. (`false` prevents height adjustment)                        |
| `min-height`        | Boolean, Number | `false` | The minimum height.                                                    |
| `max-height`        | Boolean, Number | `false` | The maximum height.                                                    |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.slideshow(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name             | Description                                              |
| ---------------- | ---------------------------------------------------------|
| `beforeitemshow` | Fires before an item is shown.                           |
| `itemshow`       | Fires after an item is shown.                            |
| `itemshown`      | Fires after an item's show animation has been completed. |
| `beforeitemhide` | Fires before an item is hidden.                          |
| `itemhide`       | Fires after an item's hide animation has started.        |
| `itemhidden`     | Fires after an item's hide animation has been completed. |

### Methods

The following methods are available for the component:

#### Show

```js
UIkit.slideshow(element).show(index);
```

Shows the slideshow item.

#### startAutoplay

```js
UIkit.slideshow(element).startAutoplay();
```

Starts the slideshow autoplay.

#### stopAutoplay

```js
UIkit.slideshow(element).stopAutoplay();
```

Stops the slideshow autoplay.

***

## Accessibility

The Slideshow component adheres to the [Carousel WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *slideshow* has the `aria-roledescription` property set to `carousel`. 
- The *slide list* has an ID and the `aria-live` property.
- The *slides* have an ID, the `group` role if the slideshow has only a previous/next navigation or the `tabpanel` role if it has a tab navigation, the `aria-roledescription` property set to `slide` and an `aria-label` property.

The tab navigation adheres to the [tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/).

- The *tab navigation* has the `tablist` role. 
- The *tab navigation items* have the `presentation` role. 
- The *tab navigation links* have the `tab` role, the `aria-selected` state, the `aria-controls` property set to the ID of the respective slide, and an `aria-label` property.

The previous/next navigation adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/). 

- The *prev/next navigation items* have an `aria-label` property, the `aria-controls` property set to the ID of the slide list, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

Autoplay stops when any element in the Slideshow component receives focus. The tab navigation can be accessed through the keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys place focus on the active tab in the tab navigation. If the focus already is on the active tab, the focus will move to the next element outside the tab navigation. 
- The <kbd>left/right arrow</kbd> or <kbd>up/down arrow</kbd> keys, depending on the orientation, navigate through the tabs. The corresponding slide will get active automatically. If the focus is on the last tab, it moves to the first tab. 
- The <kbd>home</kbd> or <kbd>end</kbd> keys move the focus to the first or last tab.

### Internationalization

The Slideshow component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key          | Default          | Description                               |
| ------------ | ---------------- | ----------------------------------------- |
| `next`       | `Next Slide`     | `aria-label` for next slide button.       |
| `previous`   | `Previous Slide` | `aria-label` for previous slide button.   |
| `slideX`     | `Slide %s`       | `aria-label` for pagination slide button. |
| `slideLabel` | `%s of %s`       | `aria-label` for slide.                   |
