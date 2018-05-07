# Image

<p class="uk-text-lead">Speed up page loading times and decrease traffic by only loading images as they enter the viewport.</p>

The Image component improve page speed significantly by following methods:

- Only images which are initialy in the viewport are loaded.
- Other images are lazy loaded as they enter the viewport when scrolling.
- An empty placeholder image is generated instantly to prevent content jumping when images are loaded.
- Optionally, the placeholder image can have any kind of background or preload animation.

It supports the `img` element and the CSS `background-image` property. The `srcset` attribute for images is supported as well to serve the optimal image to different device widths and high resolution (retina) displays. The Image component even makes it possible to use `srcset` for the CSS `background-image` property.

## Usage

To apply this component, add the `uk-img` attribute to an `<img>` element and prefix the `src` attribute as `data-src`. Set also `width` and `height` attributes so an empty placeholder can be generated in the exact same size as the image.

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