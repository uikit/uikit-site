# Image

<p class="uk-text-lead">Use background images with lazy loading, responsive images and different image sources</p>

The Image component emulates browser features of the `<img>` element, but for background images. This includes `loading="lazy"`, `srcset` and `sizes` attributes as well as the `<source>` element from the `<picture>` element. This speeds up page loading times and decreases traffic by only loading background images as they enter the viewport. Optimized background images are served for different device widths and high resolution (retina) displays.

***

## Usage

To apply this component, add the `uk-img` and the `data-src` attribute containing the image path for the background image to a `div` or any other element. By default, the background image will be lazy loaded as it enters the viewport when scrolling.

```html
<div data-src="" uk-img>…</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80" uk-img>
  <h1>Background Image</h1>
</div>
```

****

## Eager loading

To avoid lazy loading background images for the first visible viewport but still use other features of this component, add the `loading="eager"` parameter to the `uk-img` attribute.

```html
<div data-src="" uk-img="loading: eager">…</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://images.unsplash.com/photo-1495321308589-43affb814eee?fit=crop&w=650&h=433&q=80" uk-img="loading: eager">
  <h1>Background Image</h1>
</div>
```

***

## Srcset

To use the `srcset` feature for background images, just add the `data-srcset` attribute. Optionally, add the `sizes` attribute but without prefix.

```html
<div data-src="" data-srcset="" sizes="" uk-img>…</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover"
     data-src="https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?fit=crop&w=1300&h=866&q=80 1300w"
     sizes="(min-width: 650px) 650px, 100vw" uk-img>
    <h1>Background Image</h1>
</div>
```

***

## Picture sources

To use different image sources just like the `<picture>` element that contains `<source>` elements does, add the `source` attribute with `srcset`, `media` and `type` parameters.

```html
<div sources="srcset: ____; media: ____" data-src="" uk-img>…</div>

<div sources="srcset: ____; type: ____" data-src="" uk-img>…</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
     sources="srcset: https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?fit=crop&w=650&h=433&q=80; media: (min-width: 1200px)"
     data-src="https://images.unsplash.com/photo-1546349851-64285be8e9fa?fit=crop&w=650&h=433&q=80"
     uk-img>
    <h1>Background Image</h1>
</div>
```

It's possible to offer multiple image sources and also multiple resolutions for each source using `srcset`.

```html
<div sources="srcset: ____; media: ____" data-src="" data-srcset="" sizes="" uk-img>…</div>
```

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
     sources="srcset: https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?fit=crop&w=650&h=433&q=80 650w,
                      https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?fit=crop&w=1300&h=866&q=80 1300w;
              media: (min-width: 1200px)"
     data-src="https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?fit=crop&w=1300&h=866&q=80 1300w"
     sizes="(min-width: 650px) 650px, 100vw" uk-img>
    <h1>Background Image</h1>
</div>
```

Multiple sources can be defined using JSON syntax.

```json
[
    {
        "srcset": "____",
        "media": "____"
    },
    {
        "srcset": "____",
        "type": "____"
    }
]
```

The JSON needs to be HTML encoded.

```html
<div sources="[{&quot;type&quot;: &quot;____&quot;,
                &quot;srcset&quot;: &quot;____&quot;
               },
               {&quot;type&quot;: &quot;____&quot;,
                &quot;srcset&quot;: &quot;____&quot;
               }]"
     data-src="" uk-img>…</div>
```

This example offers alternative image formats like *WebP* and *AVIF*.

```example
<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover"
     sources="[{&quot;srcset&quot;: &quot;images/image-type.avif&quot;,
                &quot;type&quot;: &quot;image\/avif&quot;
                },
                {&quot;srcset&quot;: &quot;images/image-type.webp&quot;,
                &quot;type&quot;: &quot;image\/webp&quot;
                }]"
        data-src="images/image-type.jpg"
        uk-img>
    <h1>Background Image</h1>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option    | Value  | Default | Description                                                                                                                                                                             |
|-----------|--------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `dataSrc` | String | ''      | The image's `src` attribute.                                                                                                                                                            |
| `sources` | String | ''      | The image's sources. This option is used for background images only. The sources attributes be passed in `key: value;` format for a single source. For multiple sources in JSON format. |
| `loading` | `lazy` | `eager` | `lazy`                                                                                                                                                                                  | Enable lazy/eager loading. Set to `eager` for images within the first visible viewport.                                                                                                           |
| `margin`  | String | `50%`   | The margin is added to the viewport's bounding box, before computing an intersection with the image. The value must be in px or % units.                                                |
| `target`  | String | false   | A list of targets whose bounding boxes will be used to compute an intersection with the image. Defaults to the image itself.                                                            |

`dataSrc` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.img(element, options);
```

**Note** The Image component keeps records of already loaded images in the Session Storage. That's how it tries to determine if an image is already cached. A cached image is loaded immediately, without the lazy loading mechanism to prevent any rendering flashes. Prior to testing the Image component, make sure to clear these records from your browser's Session Storage.
