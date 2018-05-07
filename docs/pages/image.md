# Image

<p class="uk-text-lead">Speed up page loading times and decrease traffic by only loading images as they enter the viewport.</p>

The Image component improves page speed significantly by following methods:

- Only images which are initially in the viewport are loaded.
- Other images are lazy loaded as they enter the viewport when scrolling.
- An empty placeholder image is generated instantly to prevent content jumping while images are being loaded or not yet in the viewport.
- Optionally, the placeholder image can have any kind of background or preload animation.

It supports the `img` element and the CSS `background-image` property. The `srcset` attribute for images is supported as well to serve the optimal image for different device widths and high resolution (retina) displays. The Image component even makes it possible to use `srcset` for the CSS `background-image` property.

## Usage

To apply this component, add the `uk-img` attribute to an `<img>` element and prefix the `src` attribute as `data-src`. A `width` and `height` attribute (optionally prefixed with `data-`) are required too, so an empty placeholder can be generated in the exact same size as the image.

```html
<img data-src="" width="" height="" alt="" uk-img>
```

```example
<img data-src="../docs/images/light.jpg" width="1800" height="1200" alt="" uk-img>
```

## Srcset

To use the `srcset` attribute, just prefix it as `data-srcset`.

```html
<img data-src="" data-srcset="" sizes="" width="" height="" alt="" uk-img>
```

```example
<img data-src="../docs/images/light-900w.jpg"
     data-srcset="../docs/images/light-450w.jpg 450w,
                  ../docs/images/light-900w.jpg 900w,
                  ../docs/images/light-1800w.jpg 1800w"
     sizes="(min-width: 900px) 900px"
     width="900" height="600" alt="" uk-img>
```

## Background image

To use this component with the CSS `background-image` property, add it to a `<div>` or any other element.

```html
<div data-src="" uk-img></div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover" data-src="../docs/images/light.jpg" uk-img>Headline</div>
```

The Image component allows to use `srcset` for background images. Just add the `data-srcset` attribute. If you need the `sizes` attribute, prefix it as well as `data-sizes`.

```html
<div data-src="" data-srcset="" data-sizes="" uk-img>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover"
     data-src="../docs/images/light-900w.jpg"
     data-srcset="../docs/images/light-450w.jpg 450w,
                  ../docs/images/light-900w.jpg 900w,
                  ../docs/images/light-1800w.jpg 1800w"
     data-sizes="(min-width: 900px) 900px"
     uk-img>Headline</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option         | Value  | Default         | Description                                                                                                |
|:---------------|:-------|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `dataSrc`    | String | ''  | The image's `src` attribute. |
| `dataSrcset` | String | false     | The image's `srcset` attribute. |
| `dataSizes` | String | false     | The image's `sizes` attribute. |
| `width` | String | false     | The image's `width` attribute. It will be used to determine the placeholder's width and the images position in the document. |
| `height` | String | false     | The image's `height` attribute. It will be used to determine the placeholder's height and the images position in the document. |
| `dataWidth` | String | false     | The image's `width` attribute. It will be used to determine the placeholder's width and the images position in the document. Use this option, if you do not want an actual `width` attribute on your image. |
| `dataHeight` | String | false     | The image's `height` attribute. It will be used to determine the placeholder's height and the images position in the document. Use this option, if you do not want an actual `height` attribute on your image. |
| `offsetTop` | String | '100vh'     | The offset increases the viewport's bounding box vertically, before computing an intersection with the image. |
| `offsetLeft` | String | 0     | The offset increases the viewport's bounding box horizontally, before computing an intersection with the image. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.img(element, options);
```
