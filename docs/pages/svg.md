# SVG

<p class="uk-text-lead">Inject inline SVG images into the page markup and style them with CSS.</p>

SVGs or Scalable Vector Graphics are really handy, for example to display a logo that remains crisp when scaling or that is animated. The SVG component provides more control to style and animate the image and its vector parts. It injects the image into the markup as an inline SVG including all attributes, like IDs, classes, width and height, so that they can easily be targeted using CSS.

***

## Usage

To apply this component, add the `uk-svg` attribute to an `<img>` element.

```html
<img src="" uk-svg>
```

Using the `uk-svg` attribute also allows you to inject a symbol from the SVG file. Just append the symbol's ID to the image path as you would in any fragmented URL.

```example
<!-- Targets the SVG image -->
<img src="../assets/uikit/src/images/icons/cloud-download.svg" width="40" height="40" uk-svg>

<!-- Targets a symbol inside the SVG image -->
<img src="../assets/uikit/tests/images/icons.svg#cloud-upload" width="40" height="40" uk-svg>
```

**Note** SVGs will adapt the current color for their stroke and fill color. To prevent this behavior, add the `.uk-preserve` class to the SVG itself or the elements inside the SVG.

Inline SVG images can also be lazy loaded using the [Image component](image.md#inline-svg).

***

## Stroke Animation

There are two ways to animate SVG strokes. First by using the [Animation component](animation.md#svg-strokes) and `uk-svg="stroke-animation: true"`, and second by using the [Parallax component](parallax.md#svg-strokes).

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option             | Value   | Default | Description                                                                                                   |
|:-------------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------|
| `src`              | String  | `''`    | The SVG source URL. If a location hash is present, only the `<symbol>` of the SVG with the given ID is shown. |
| `stroke-animation` | Boolean | `false` | Animate all elements with the `stroke` attribute in the SVG.                                                  |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.svg(element, options);
```

### Properties

#### svg

A JavaScript Promise that will resolve with the added SVG Node.

```js
UIkit.svg(element).svg.then(function(svg) { svg.querySelector('path').style.stroke = 'red'; })
```
