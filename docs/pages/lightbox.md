# Lightbox

<p class="uk-text-lead">Create a responsive lightbox gallery with images and videos.</p>


## Usage

To apply this component, add the `uk-lightbox` attribute to a container to turn all anchors inside that container into lightbox links.

```html
<div uk-lightbox>
    <a href="image.jpg"></a>
</div>
```

```example
<div uk-lightbox>
    <a class="uk-button uk-button-default" href="../docs/images/photo.jpg">Open Lightbox</a>
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
    <a class="uk-button uk-button-default" href="../docs/images/photo.jpg" data-caption="Caption">Open Lightbox</a>
</div>
```

***

## Animations

By default, the Lightbox gallery uses a slide animation. You can set the `animation` property to use a different one. Possible values are `slide`, `fade` and `scale`.

```html
<div uk-lightbox="animation: fade">
    <a href="image.jpg"></a>
</div>
```

```example
<div class="uk-h3">Slide</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
    <div>
        <a class="uk-inline" href="../docs/images/photo.jpg" caption="Caption 1">
            <img src="../docs/images/photo.jpg" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="../docs/images/dark.jpg" caption="Caption 2">
            <img src="../docs/images/dark.jpg" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="../docs/images/light.jpg" caption="Caption 3">
            <img src="../docs/images/light.jpg" alt="">
        </a>
    </div>
</div>

<div class="uk-h3">Fade</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: fade">
    <div>
        <a class="uk-inline" href="../docs/images/photo.jpg" caption="Caption 1">
            <img src="../docs/images/photo.jpg" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="../docs/images/dark.jpg" caption="Caption 2">
            <img src="../docs/images/dark.jpg" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="../docs/images/light.jpg" caption="Caption 3">
            <img src="../docs/images/light.jpg" alt="">
        </a>
    </div>
</div>

<div class="uk-h3">Scale</div>
<div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: scale">
    <div>
        <a class="uk-inline" href="../docs/images/photo.jpg" caption="Caption 1">
            <img src="../docs/images/photo.jpg" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="../docs/images/dark.jpg" caption="Caption 2">
            <img src="../docs/images/dark.jpg" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="../docs/images/light.jpg" caption="Caption 3">
            <img src="../docs/images/light.jpg" alt="">
        </a>
    </div>
</div>
```

***

## Content Sources

A lightbox is not restricted to images. Other media, like videos, can be displayed as well.

```html
<div uk-lightbox>
    <a class="uk-button" href="video.mp4"></a>
    <a class="uk-button" href="https://www.youtube.com/watch?v=YE7VzlLtp-4"></a>
    <a class="uk-button" href="https://vimeo.com/1084537"></a>
</div>
```

```example
<div uk-lightbox>
    <a class="uk-button uk-button-default" href="../docs/images/photo.jpg" caption="Image">Image</a>
    <a class="uk-button uk-button-default" href="//www.quirksmode.org/html5/videos/big_buck_bunny.mp4" caption="Video">Video</a>
    <a class="uk-button uk-button-default" href="//www.youtube.com/watch?v=YE7VzlLtp-4" caption="YouTube">YouTube</a>
    <a class="uk-button uk-button-default" href="//vimeo.com/1084537" caption="Vimeo">Vimeo</a>
</div>
```

***

###  Manual content type

The Lightbox uses the `href` attribute to figure out the type of the linked content. If no filename extension is defined in the image path, just add the `data-type="image"` attribute to the `<a>` tag. You can also set `data-type="video"` when linking to a video. Otherwise, the lightbox will show an iframe by default.

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Lightbox

| Option      | Value        | Default | Description                                          |
|-------------|--------------|---------|------------------------------------------------------|
| `animation` | String       | `slide` | Lightbox animation mode: `slide`, `fade` or `scale`. |
| `toggle`    | CSS selector | `a`     | Toggle selector - triggers the lightbox.             |

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

These methods are available on the component.

#### Show

```js
UIkit.lightbox(element).show(index);
```

Shows the Lightbox's Panel and item.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | String, Integer | 0 | Lightbox item to show. 0 based index.|

#### Hide

```js
UIkit.lightbox(element).hide();
```

Hides the Lightbox's Panel.

### Lightbox Panel Options

If you only want to use the lightbox panel directly through the JS API, you can set the following options.

| Option    | Value                     | Default | Description                                      |
|-----------|---------------------------|---------|--------------------------------------------------|
| `animation` | String | `slide` | Lightbox animation mode: `slide`, `fade` or `scale`.  |
| `duration`  | Number | `400`   | The animation duration. |
| `index`     | Number | `0`   | The initial item to show. (zero based) |
| `preload`   | Number | `1`   | The number of items to preload. (left and right of the currently active item) |
| `items`     | Array  | `[]`   | An array of items to display, e.g. `[{source: 'images/size1.jpg', title: '900x600'}]` |
| `template`     | String  | Default markup   | The template string. |
| `delay-controls`     | Number  | `3000`   | Delay time before controls fade out in ms. |

### Events

These events will be triggered on elements with this component attached.

| Name | Description |
| --- | --- |
| `beforeshow` | Fires before the Lightbox is shown. |
| `show` | Fires after the Lightbox is shown. |
| `shown` | Fires after the Lightbox's show animation has completed. |
| `beforehide` | Fires before the Lightbox is hidden. |
| `hide` | Fires after the Lightbox's hide animation has started. |
| `hidden` | Fires after the Lightbox is hidden. |
| `itemload` | Fires when an item loads. |
| `itemshow` | Fires before an item is shown. |
| `itemshown` | Fires after an item is shown. |
| `itemhide` | Fires before an item is hidden. |
| `itemhidden` | Fires after an item is hidden. |

### Methods

These methods are available on the component.

#### Show

```js
UIkit.lightboxPanel(element).show(index);
```

Shows the Lightbox Panel's item.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | String, Integer | 0 | Lightbox item to show. 0 based index.|

#### Hide

```js
UIkit.lightbox(element).hide();
```

Hides the Lightbox Panel.
