# Lightbox

<p class="uk-text-lead">Create a responsive lightbox gallery with images and videos.</p>

The Lightbox component is fully responsive and supports touch and swipe navigation, as well as mouse drag for desktops. When swiping between slides the animation literally sticks to your fingertip or mouse cursor. Clicking fast on the previous and next navigation, will make animations even accelerate to keep up with your pace. All animations are hardware accelerated for a smoother performance.

## Usage

To apply this component, add the `uk-lightbox` attribute to a container to turn all anchors inside that container into lightbox links.

```html
<div uk-lightbox>
    <a href="image.jpg"></a>
</div>
```

```example
<div uk-lightbox>
    <a class="uk-button uk-button-default" href="images/photo.jpg">Open Lightbox</a>
</div>
```

***

## Alt attribute

To add an `alt` attribute to the image in the lightbox, set the `data-alt` attribute on an anchor.

```html
<div uk-lightbox>
    <a href="image.jpg" data-alt="Image"></a>
</div>
```

```example
<div uk-lightbox>
    <a class="uk-button uk-button-default" href="images/photo.jpg" data-alt="Image">Open Lightbox</a>
</div>
```

***

## Caption

To display a caption at the bottom of the lightbox, set the `data-caption` attribute on an anchor.

```html
<div uk-lightbox>
    <a href="image.jpg" data-caption="Caption"></a>
</div>
```

```example
<div uk-lightbox>
    <a class="uk-button uk-button-default" href="images/photo.jpg" data-caption="Caption">Open Lightbox</a>
</div>
```

***

## Animations

By default, the Lightbox gallery uses a slide animation. You can set the `animation` option to use a different one. Possible values are `slide`, `fade` and `scale`.

```html
<div uk-lightbox="animation: fade">
    <a href="image.jpg"></a>
</div>
```

```example
<div class="uk-h3">Slide</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
    <div>
        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>

<div class="uk-h3">Fade</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: fade">
    <div>
        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>

<div class="uk-h3">Scale</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: scale">
    <div>
        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>
```

***

## Navigations

By default, the lightbox shows a slidenav from the [Slidenav component](slidenav.md). To hide the slidenav set the `slidenav: false` option. To show a item based navigation, for example from the [Thumbnav component](thumbnav.md) or [Dotnav component](dotnav.md), set the `nav` option to `thumbnav` or `dotnav`. 

```html
<div uk-lightbox="slidenav: false; nav: thumbnav">
    <a href="image.jpg"></a>
</div>
```

```example
<div class="uk-h3">Thumbnav</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="nav: thumbnav; slidenav: false">
    <div>
        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>

<div class="uk-h3">Dotnav</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="nav: dotnav; slidenav: false">
    <div>
        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>
```

***

## Counter

To show a counter with the current item number and the total number of items, add the `counter: true` option.

```html
<div uk-lightbox="counter: true">
    <a href="image.jpg"></a>
</div>
```

```example
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="counter: true">
    <div>
        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>
```

***

## Color mode

To adapt the color of the overlaying controls for better visibility depending on the lightbox content, use the `data-attrs` option to add the `.uk-inverse-light` or `.uk-inverse.dark` class from the [Inverse component](inverse.md).

```html
<div uk-lightbox="slidenav: false; nav: thumbnav">
    <a href="image.jpg" attrs='{"class": "uk-inverse-light"}'></a>
</div>
```

```example
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="nav: thumbnav; slidenav: false">
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2" attrs='{"class": "uk-inverse-light"}'>
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3" attrs='{"class": "uk-inverse-dark"}'>
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>
```

***

## Content sources

A lightbox is not restricted to images. Other media, like videos, can be displayed as well. The video will pause whenever it's not visible and resume once it becomes visible again. To display a poster image for a video, set the `data-poster` attribute.

```html
<div uk-lightbox>
    <a class="uk-button" href="video.mp4" data-poster="image.jpg"></a>
    <a class="uk-button" href="https://www.youtube.com/watch?v=c2pz2mlSfXA"></a>
    <a class="uk-button" href="https://vimeo.com/1084537"></a>
    <a class="uk-button" href="https://www.google.com/maps"></a>
</div>
```

```example
<div uk-lightbox>
    <a class="uk-button uk-button-default" href="images/photo.jpg" data-caption="Image">Image</a>
    <a class="uk-button uk-button-default" href="https://yootheme.com/site/images/media/yootheme-pro.mp4" data-caption="Video">Video</a>
    <a class="uk-button uk-button-default" href="https://www.youtube.com/watch?v=c2pz2mlSfXA" data-caption="YouTube">YouTube</a>
    <a class="uk-button uk-button-default" href="https://vimeo.com/1084537" data-caption="Vimeo">Vimeo</a>
    <a class="uk-button uk-button-default" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938" data-caption="Google Maps" data-type="iframe">Google Maps</a>
</div>
```

**Note** Use `youtube-nocookie.com` within the YouTube link and the lightbox will use the domain to embed the YouTube video.

***

###  Manual content type

The Lightbox uses the `href` attribute to figure out the type of the linked content. If no filename extension is defined in the path, just add the `data-type` attribute to the `<a>` tag.

**Hint** YouTube and Vimeo URLs will be handled automatically.

| Option               | Description                            |
| -------------------- | -------------------------------------- |
| `data-type="image"`  | The content type is an image.          |
| `data-type="video"`  | The content type is a video.           |
| `data-type="iframe"` | The content type is a regular website. |

***

## Delay controls

By default, the controls are hidden after a short if the mouse doesn't move. Set the `delay-controls: 0` option to show the controls always.

```html
<div uk-lightbox="delay-controls: 0">
    <a href="image.jpg"></a>
</div>
```

```example
<div uk-lightbox="delay-controls: 0">
    <a class="uk-button uk-button-default" href="images/photo.jpg" data-caption="Caption">Open Lightbox</a>
</div>
```

***

## BG close

By default the lightbox closes if the background is clicked. To prevent this behavior set the `bg-close: false` option.

```html
<div uk-lightbox="bg-close: false">
    <a href="image.jpg"></a>
</div>
```

```example
<div uk-lightbox="bg-close: false">
    <a class="uk-button uk-button-default" href="images/photo.jpg" data-caption="Caption">Open Lightbox</a>
</div>
```

***

## Custom attributes

You can add custom attributes to lightbox content items by using the `data-attrs` attribute. The attributes are passed like the usual component options, e.g. `data-attrs="width: 1280; height: 720;"`

```html
<div uk-lightbox>
    <a class="uk-button" href="https://www.youtube.com/watch?v=c2pz2mlSfXA" data-attrs="width: 1280; height: 720;"></a>
</div>
```

```example
<div uk-lightbox>
    <a class="uk-button uk-button-default" href="https://www.youtube.com/watch?v=c2pz2mlSfXA" data-caption="YouTube" data-attrs="width: 1280; height: 720;">YouTube</a>
</div>
```

***

## Custom template

This is the default lightbox template.

```html
<div class="uk-lightbox uk-overflow-hidden">
    <div class="uk-lightbox-items"></div>
    <div class="uk-position-top-right uk-position-small uk-transition-fade" uk-inverse>
        <button class="uk-lightbox-close uk-close-large" type="button" uk-close></button>
    </div>
    <div class="uk-position-center-left uk-position-medium uk-transition-fade" uk-inverse>
        <a class="uk-lightbox-slidenav" href uk-slidenav-previous uk-lightbox-item="previous"></a>
    </div>
    <div class="uk-position-center-right uk-position-medium uk-transition-fade" uk-inverse>
        <a class="uk-lightbox-slidenav" href uk-slidenav-next uk-lightbox-item="next"></a>
    </div>
    <div class="uk-position-center-right uk-position-medium" uk-inverse uk-toggle="cls: uk-position-center-right uk-position-bottom-center; mode: media; media: @s">
        <ul class="uk-lightbox-thumbnav uk-thumbnav uk-thumbnav-vertical" uk-toggle="cls: uk-thumbnav-vertical; mode: media; media: @s"></ul>
        <ul class="uk-lightbox-dotnav uk-dotnav uk-dotnav-vertical" uk-toggle="cls: uk-dotnav-vertical; mode: media; media: @s"></ul>
    </div>
    <div class="uk-lightbox-counter uk-text-large uk-position-top-left uk-position-small uk-transition-fade" uk-inverse></div>
    <div class="uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div>
</div>
```

To override the default lightbox template, add the `template: #ID` option to link to a `template` element with the new lightbox layout.

```html
<template id="js-lightbox-template">…</template>

<div uk-lightbox="template: #js-lightbox-template">…</div>
```

```example
<template id="js-lightbox-template">
    <div class="uk-lightbox uk-overflow-hidden">
        <div class="uk-lightbox-items"></div>
        <div class="uk-position-top-right uk-position-small uk-transition-fade" uk-inverse>
            <button class="uk-lightbox-close uk-close-large" type="button" uk-close></button>
        </div>
        <div class="uk-position-bottom uk-position-medium uk-text-center uk-transition-fade" uk-inverse>
            <div class="uk-grid-small uk-width-auto uk-flex-inline uk-flex-middle" uk-grid>
                <div><a class="uk-lightbox-slidenav" href uk-slidenav-previous uk-lightbox-item="previous"></a></div>
                <div><div class="uk-lightbox-counter"></div></div>
                <div><a class="uk-lightbox-slidenav" href uk-slidenav-next uk-lightbox-item="next"></a></div>
            </div>
        </div>
    </div>
</template>

<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="template: #js-lightbox-template; counter: true">
    <div>
        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
            <img src="images/photo.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
            <img src="images/dark.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
            <img src="images/light.jpg" width="1800" height="1200" alt="">
        </a>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option              | Value          | Default | Description                                            |
| ------------------- | -------------- | ------- | ------------------------------------------------------ |
| `animation`         | String         | `slide` | Lightbox animation mode (`slide`, `fade` or `scale`).  |
| `autoplay`          | Boolean        | `false` | Lightbox autoplays.                                    |
| `autoplay-interval` | Number         | `7000`  | The delay between switching slides in autoplay mode.   |
| `pause-on-hover`    | Boolean        | `false` | Pause autoplay mode on hover.                          |
| `video-autoplay`    | Boolean        | `false` | Lightbox videos autoplay.                              |
| `index`             | String, Number | `0`     | Lightbox item to show. 0 based index.                  |
| `toggle`            | CSS selector   | `a`     | Toggle selector - opens the Lightbox Panel upon click. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
// To apply lightbox to a group of links
UIkit.lightbox(element, options);

// To dynamically initialize the lightbox panel
UIkit.lightboxPanel(panelOptions);
```

### Methods

The following methods are available for the component:

#### Show

```js
UIkit.lightbox(element).show(index);
```

Shows the Lightbox's Panel and item.

#### Hide

```js
UIkit.lightbox(element).hide();
```

Hides the Lightbox's Panel.

### Lightbox Panel Options

If you only want to use the lightbox panel directly through the JS API, you can set the following options.

| Option              | Value   | Default        | Description                                                                                           |
| ------------------- | ------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| `animation`         | String  | `slide`        | Lightbox animation mode (`slide`, `fade` or `scale`).                                                 |
| `autoplay`          | Boolean | `false`        | Lightbox autoplays.                                                                                   |
| `autoplay-interval` | Number  | `7000`         | The delay between switching slides in autoplay mode.                                                  |
| `pause-on-hover`    | Boolean | `false`        | Pause autoplay mode on hover.                                                                         |
| `video-autoplay`    | Boolean | `false`        | Lightbox videos autoplay.                                                                             |
| `index`             | Number  | `0`            | The initial item to show. (zero-based)                                                                |
| `velocity`          | Number  | `2`            | The animation velocity (pixel/ms).                                                                    |
| `preload`           | Number  | `1`            | The number of items to preload. (left and right of the currently active item)                         |
| `items`             | Array   | `[]`           | An array of items to display, e.g. `[{source: 'images/size1.jpg', caption: '900x600'}]`               |
| `template`          | String  | Default markup | The template string.                                                                                  |
| `delay-controls`    | Number  | `3000`         | Delay time before controls fade out in ms.                                                            |
| `container`         | String  | `body`         | Define a target container via a selector to specify where the Lightbox should be appended in the DOM. |

### Events

The following events will be triggered on elements with this component attached:

| Name             | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `beforeshow`     | Fires before the Lightbox is shown.                      |
| `beforehide`     | Fires before the Lightbox is hidden.                     |
| `show`           | Fires after the Lightbox is shown.                       |
| `shown`          | Fires after the Lightbox's show animation has completed. |
| `hide`           | Fires after the Lightbox's hide animation has started.   |
| `hidden`         | Fires after the Lightbox is hidden.                      |
| `itemload`       | Fires when an item loads.                                |
| `beforeitemshow` | Fires before an item is shown.                           |
| `itemshow`       | Fires after an item is shown.                            |
| `itemshown`      | Fires after an item's show animation has completed.      |
| `beforeitemhide` | Fires before an item is hidden.                          |
| `itemhide`       | Fires after an item's hide animation has started.        |
| `itemhidden`     | Fires after an item's hide animation has completed.      |

### Methods

The following methods are available for the component:

#### Show

```js
UIkit.lightboxPanel(element).show(index);
```

Shows the Lightbox Panel and item.

| Name    | Type           | Default | Description                           |
| ------- | -------------- | ------- | ------------------------------------- |
| `index` | String, Number | 0       | Lightbox item to show. 0 based index. |

#### Hide

```js
UIkit.lightboxPanel(element).hide();
```

Hides the Lightbox Panel.

#### startAutoplay

```js
UIkit.lightboxPanel(element).startAutoplay();
```

Starts the Lightbox's autoplay.

#### stopAutoplay

```js
UIkit.lightboxPanel(element).stopAutoplay();
```

Stops the Lightbox's autoplay.

***

## Accessibility

The Lightbox component adheres to the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/) and the [Carousel WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *lightbox* has the `dialog` role, the `aria-modal` property and the `aria-roledescription` property set to `carousel`. 
- The *slide list* has an ID, the `presentation` role and the `aria-live` property.
- The *slides* have an ID, the `group` role, the `aria-roledescription` property set to `slide` and an `aria-label` property.

The previous/next navigation adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/). 

- The *prev/next navigation items* have the `button` role, the `aria-controls` property set to the ID of the slide list, and an `aria-label` property.

The Close component automatically sets the appropriate WAI-ARIA roles and properties.

- The *close icon* has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

The lightbox gallery can be accessed through the keyboard using the following keys.

- The <kbd>left/right arrow</kbd> keys navigate through the slides. If the focus is on the last slide, it moves to the first slide. 
- The <kbd>home</kbd> or <kbd>end</kbd> keys move the focus to the first or last slide.
- The <kbd>esc</kbd> key closes the lightbox.

### Internationalization

The Lightbox component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key          | Default          | Description                             |
| ------------ | ---------------- | --------------------------------------- |
| `next`       | `Next Slide`     | `aria-label` for next slide button.     |
| `previous`   | `Previous Slide` | `aria-label` for previous slide button. |
| `slideLabel` | `%s of %s`       | `aria-label` for slide.                 |
| `close`      | `Close`          | `aria-label` for close button.          |
