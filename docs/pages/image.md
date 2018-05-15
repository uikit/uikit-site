# Image

<p class="uk-text-lead">Speed up page loading times and decrease traffic by only loading images as they enter the viewport.</p>

The Image component improves page speed significantly by following methods:

- Only images which are initially in the viewport are loaded.
- Other images are lazy loaded as they enter the viewport when scrolling.
- An empty placeholder image is generated instantly to prevent content jumping while images are being loaded or not yet in the viewport.
- Optionally, the placeholder image can have any kind of background or preload animation.

It supports the `img` element and the CSS `background-image` property. The `srcset` attribute for images is supported as well to serve the optimal image for different device widths and high resolution (retina) displays. The Image component even makes it possible to use `srcset` for the CSS `background-image` property.

***

## Usage

To apply this component, add the `uk-img` attribute to an `<img>` element and prefix the `src` attribute as `data-src`.

```html
<img data-src="" width="" height="" alt="" uk-img>
```

A `width` and `height` attribute are required too, so an empty placeholder can be generated in the exact same size as the image. Alternatively, use `data-width` and `data-height`, if you don't want to set the explicit attributes.

```example
<img data-src="../docs/images/light.jpg" width="1800" height="1200" alt="" uk-img>
```

***

## Srcset

To use the `srcset` attribute, just prefix it as `data-srcset`.

```html
<img data-src="" data-srcset="" sizes="" width="" height="" alt="" uk-img>
```

```example
<img data-src="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80 650,
                  https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=1300&h=866&q=80 1300"
     sizes="(min-width: 650px) 650px, 100vw" width="650" height="433" alt="" uk-img>

```

***

## Background image

To use this component with the CSS `background-image` property, add it to a `<div>` or any other element.

```html
<div data-src="" uk-img>...</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="../docs/images/photo.jpg" uk-img>
  <h1>Background Image</h1>
</div>
```

***

### Background image with Srcset

The Image component allows to use `srcset` for background images. Just add the `data-srcset` attribute. If you need the `sizes` attribute, prefix it as well as `data-sizes`.

```html
<div data-src="" data-srcset="" data-sizes="" uk-img>...</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
     data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w"
     data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
    <h1>Background Image</h1>
</div>
```

***

## Target

Usually, the image starts loading when it enters the viewport. To start loading based on the viewport visibility of another element, use the `target` option. This is very useful to lazy load images in the [Slideshow](slideshow.md) and [Slider](slider.md) components.

```html
<img data-src="" width="" height="" alt="" uk-img="target: .my-class">
```

The following example loads all images in the slides as soon as the whole slideshow enters the viewport. It uses `!.uk-slideshow-items` as target selector. The `!` looks up the DOM to find the next element with the `.uk-slideshow-item` class.

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img data-src="../docs/images/photo.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
        <li>
            <img data-src="../docs/images/dark.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
        <li>
            <img data-src="../docs/images/light.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

### Load previous and next

It's also possible to load only the image of the active slide and lazy load the images on the other slides. Just target the previous and next slide for each image by using the `target: !* -*, !* +*` option. There are two expeptions where you have to select the first and last slides.

| Selector                              | Description                                                                           |
|:--------------------------------------|:--------------------------------------------------------------------------------------|
| `!* -*`                               | Looks one element up (`!*`) and selects the preceding element (`-*`).                 |
| `!* +* `                              | Looks one element up (`!*`) and selects the succeeding element (`+*`).                |
| `!.uk-slideshow-items > :last-child`  | Looks up till the next element with `.uk-slideshow-item` and selects the last child.  |
| `!.uk-slideshow-items > :first-child` | Looks up till the next element with `.uk-slideshow-item` and selects the first child. |

```html
<ul class="uk-slideshow-items">
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !.uk-slideshow-items > :last-child, !* +*">
    </li>
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !* -*, !* +*">
    </li>
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !* -*, !* +*">
    </li>
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !* -*, !.uk-slideshow-items > :first-child">
    </li>
</ul>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img data-src="../docs/images/photo.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items > :last-child, !* +*">
        </li>
        <li>
            <img data-src="../docs/images/dark.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !* -*, !* +*">
        </li>
        <li>
            <img data-src="../docs/images/light.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !* -*, !.uk-slideshow-items > :first-child">
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

## Custom placeholder

By default, the placeholder image is transparent. Use the `img[data-src][src*='data:image']` selector to add a custom background or preload animation.

```css
img[data-src][src*='data:image'] { background: rgba(0,0,0,0.1); }
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option       | Value  | Default | Description                                                                                                                    |
|:-------------|:-------|:--------|:-------------------------------------------------------------------------------------------------------------------------------|
| `dataSrc`    | String | ''      | The image's `src` attribute.                                                                                                   |
| `dataSrcset` | String | false   | The image's `srcset` attribute.                                                                                                |
| `sizes`      | String | false   | The image's `sizes` attribute.                                                                                                 |
| `dataSizes`  | String | false   | See `sizes` option.                                                                                                            |
| `width`      | String | false   | The image's `width` attribute. It will be used to determine the placeholder's width and the images position in the document.   |
| `dataWidth`  | String | false   | See `width` option. Use this option, if you do not want an actual `width` attribute on your image.                             |
| `height`     | String | false   | The image's `height` attribute. It will be used to determine the placeholder's height and the images position in the document. |
| `dataHeight` | String | false   | See `height` option. Use this option, if you do not want an actual `height` attribute on your image.                           |
| `offsetTop`  | String | '50vh'  | The offset increases the viewport's bounding box vertically, before computing an intersection with the image.                   |
| `offsetLeft` | String | 0       | The offset increases the viewport's bounding box horizontally, before computing an intersection with the image.                |
| `target`     | String | false   | A list of targets who's bounding boxes will be used to compute an intersection with the image. (Defaults to the image itself)                |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.img(element, options);
```
