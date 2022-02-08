# Image

<p class="uk-text-lead">Speed up page loading times and decrease traffic by only loading images as they enter the viewport.</p>

The Image component improves page speed significantly by following these methods:

- Only images which are initially in the viewport are loaded.
- Other images are lazy loaded as they enter the viewport when scrolling.

The Image components supports the `img` element and the CSS `background-image` property. The `srcset` attribute for images is supported as well creating the optimal images for different device widths and high resolution (retina) displays. The Image component even makes it possible to use `srcset` for the CSS `background-image` property.

**Note** To prevent images from causing jank on page load, use `height` and `width` attributes.

***

## Usage

To apply this component, add the `uk-img` attribute to an `<img>` element and add the `data-` prefix to the `src` attribute so that it reads `data-src`.

```html
<img data-src="" width="" height="" alt="" uk-img>
```

The `width` and `height` attributes are required so an empty placeholder can be generated in the exact same size as the image. Alternatively, use `data-width` and `data-height` if you don't want to set the explicit attributes.

```example
<img data-src="images/light.jpg" width="1800" height="1200" alt="" uk-img>
```

### Inline SVG

To lazy load SVG images which are injected as inline SVG using the [SVG component](svg.md), make sure to apply the `data-src` option in the component attribute and not as data attribute.

```html
<img width="" height="" alt="" uk-img="data-src:" uk-svg>
```

***

## Srcset

To use the `srcset` attribute, just prefix it as `data-srcset`.

```html
<img data-src="" data-srcset="" sizes="" width="" height="" alt="" uk-img>
```

```example
<img data-src="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=1300&h=866&q=80 1300w"
     sizes="(min-width: 650px) 650px, 100vw" width="650" height="433" alt="" uk-img>

```

***

## Background image

To use this component with the CSS `background-image` property, add it to a `<div>` or any other element.

```html
<div data-src="" uk-img>...</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="images/photo.jpg" uk-img>
  <h1>Background Image</h1>
</div>
```

***

### Background image with Srcset

The Image component allows you to use `srcset` for background images. Just add the `data-srcset` attribute. If you need the `sizes` attribute, prefix it as `data-sizes`.

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

Usually, the image starts loading when it enters the viewport. To start loading images based on the viewport visibility of another element, use the `target` option. This is very useful to lazy load images in the [Slideshow](slideshow.md) and [Slider](slider.md) components.

```html
<img data-src="" width="" height="" alt="" uk-img="target: .my-class">
```

The following example loads all images in the slides as soon as the slideshow enters the viewport. It uses `!.uk-slideshow-items` as a target selector. The `!` looks up the DOM to find the next parent element with the `.uk-slideshow-items` class.

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img data-src="images/photo.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
        <li>
            <img data-src="images/dark.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
        <li>
            <img data-src="images/light.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
```

***

### Load previous and next

It's also possible to load only the image of the active slide and lazy load the images of the other slides. Just target the previous and next slides for each image by using the `target: !* -*, !* +*` option. There are two exceptions where you have to select the first and the last slides.

| Selector                              | Description                                                                                        |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------|
| `!* -*`                               | Looks for the direct parent (`!*`) and selects the preceding element (`-*`).                       |
| `!* +* `                              | Looks for the direct parent (`!*`) and selects the succeeding element (`+*`).                      |
| `!.uk-slideshow-items > :last-child`  | Looks for the next parent element with the `.uk-slideshow-item` class and selects the last child.  |
| `!.uk-slideshow-items > :first-child` | Looks for the next parent element with the `.uk-slideshow-item` class and selects the first child. |

```html
<ul class="uk-slideshow-items">
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !ul > :last-child, !* +*">
    </li>
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !* -*, !* +*">
    </li>
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !* -*, !* +*">
    </li>
    <li>
        <img data-src="" width="" height="" alt="" uk-img="target: !* -*, !ul > :first-child">
    </li>
</ul>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img data-src="images/photo.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !ul > :last-child, !* +*">
        </li>
        <li>
            <img data-src="images/dark.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !* -*, !* +*">
        </li>
        <li>
            <img data-src="images/light.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !* -*, !ul > :first-child">
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

| Option       | Value  | Default | Description                                                                                                                          |
|:-------------|:-------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------|
| `dataSrc`    | String | ''      | The image's `src` attribute.                                                                                                         |
| `dataSrcset` | String | false   | The image's `srcset` attribute.                                                                                                      |
| `sizes`      | String | false   | The image's `sizes` attribute.                                                                                                       |
| `width`      | String | false   | The image's `width` attribute. It will be used to determine the placeholder's width and the position of the image in the document.   |
| `height`     | String | false   | The image's `height` attribute. It will be used to determine the placeholder's height and the position of the image in the document. |
| `offsetTop`  | String | '50vh'  | The offset increases the viewport's bounding box vertically before computing an intersection with the image.                         |
| `offsetLeft` | String | 0       | The offset increases the viewport's bounding box horizontally before computing an intersection with the image.                       |
| `target`     | String | false   | A list of targets who's bounding boxes will be used to compute an intersection with the image. Defaults to the image itself.         |

`dataSrc` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.img(element, options);
```

**Note** The Image component keeps records of already loaded images in the Session Storage. That's how it tries to determine if an image is already cached. A cached image is loaded immediately, without the lazy loading mechanism to prevent any rendering flashes. Prior to testing the Image component, make sure to clear these records from your browser's Session Storage.
