# Parallax

<p class="uk-text-lead">Animate CSS properties depending on the scroll position of the document.</p>

## Usage

To apply this component, add the `uk-parallax` attribute to any element. Add an option with the desired animation target value for each CSS property you want to animate.

```html
<div uk-parallax="bgy: -200">...</div>
```

```example
<div class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Headline</h1>

</div>
```

***

## Animated properties

You can use the following options to animate a number of CSS property.

| Option             | Description                        | Default&nbsp;Unit | Default Start |
| :----------------- | :--------------------------------- | ----------------- | :------------ |
| `x`                | Animate translateX.                | `px`              | `0`           |
| `y`                | Animate translateY.                | `px`              | `0`           |
| `bgy`              | Animate background Y position.     | `px`              | *Current*     |
| `bgx`              | Animate background X position.     | `px`              | *Current*     |
| `rotate`           | Animate rotation clockwise.        | `deg`             | `0`           |
| `scale`            | Animate scaling.                   |                   | `1`           |
| `color`            | Animate color                      |                   | *Current*     |
| `background-color` | Animate background-color           |                   | *Current*     |
| `border-color`     | Animate border color               |                   | *Current*     |
| `opacity`          | Animate the opacity.               |                   | *Current*     |
| `blur`             | Animate the blur filter.           | `px`              | `0`           |
| `hue`              | Animate the hue rotation filter.   | `deg`             | `0`           |
| `grayscale`        | Animate the grayscale filter.      | `%`               | `0`           |
| `invert`           | Animate the invert filter.         | `%`               | `0`           |
| `saturate`         | Animate the saturate filter.       | `%`               | `0`           |
| `sepia`            | Animate the sepia filter.          | `%`               | `0`           |
| `stroke`           | Animate strokes within SVG images. |                   | `0`           |

The value can define any allowed unit type, e.g. `x: 20vw`. For some options, the unit of a value can be left out. It will be mapped to the default unit. For example, `x: 200` is the same as `x: 200px`.

***

## Start and end values

Options are always animated from their default start value to the target value set in the option. However, you can also define a start value yourself. This is done by passing two values separated by comma.

```html
<div uk-parallax="opacity: 0,1">...</div>
```

```example
<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style="background-image: url('images/dark.jpg');">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
        <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

### Multiple steps

Define multiple steps for a property by using a comma separated list of values.

```html
<div uk-parallax="x: 0,50,150">...</div>
```

```example
<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style="background-image: url('images/dark.jpg');">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">Headline</h1>
        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

***

## Viewport position

Using the `viewport` option you can adjust the animation duration. The value defines how far inside the viewport the target element is scrolled until the animation is completed. With the value `1` or `false`, the animation lasts as long as the element is in the viewport (default behavior). Setting it to `0.5`, for example, animates the property until the scroll position reaches the middle of the target element.

```html
<div uk-parallax="viewport: 0.5">...</div>
```

```example
<div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="opacity: 0,1; y: 100,0; viewport: 0.5">Headline</h1>

</div>
```

***

## Nesting

Different parallax animations can easily be nested.

```html
<div uk-parallax="bgx: -50">
    <div uk-parallax="x: -100, 100">...</div>
</div>
```

```example
<div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="y: 100,0">Headline</h1>

</div>
```

***

## Target

Usually, the animation lasts as long as the element itself is in the viewport. To start and stop the animation based on the viewport visibility of another element, use the `target` option. This can be helpful when using nested animations.

```html
<div id="target">
    <div uk-parallax="target: #target">...</div>
</div>
```

```example
<div id="test-target" class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-target; y: 100,0">Headline</h1>

</div>
```

***

## Easing

To adjust the easing of the animation, add the `easing` option. `0` transitions at an even speed. A positive value starts off quickly slowing down until complete while a negative value starts off slowly increasing the speed until complete.

```example
<div id="test-easing" class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
     <div class="uk-grid uk-margin-auto uk-margin-auto-vertical uk-flex-inline">
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: -2">-2</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: -1">-1</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: -0.5">-0.5</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 0">0</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 0.5">0.5</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 1">1</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 2">2</div></div>
    </div>
</div>
```

***

## Colors

Transition from one color to another, for example for borders, backgrounds or text colors. Define colors using `rgb()` definitions, color keywords or hex values.

```html
<div uk-parallax="border-color: #00f,#f00">...</div>
```

```example
<div id="test-color" class="test-color uk-height-large uk-overflow-hidden uk-flex uk-flex-top" uk-parallax="background-color: yellow,white; border-color: #00f,#f00; viewport: 0.5" style="border: 10px solid #000;">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-target; color: #0f0; viewport: 0.5">Headline</h1>

</div>
```

***

## Filters

CSS filters are an easy way to add graphical effects to any element on your page. While they are still an experimental feature for [some browsers](https://caniuse.com/filter), you can safely use them as long as your usability does not suffer. Using the Parallax component, you can dynamically change the amount of a filter on your element.

```html
<div uk-parallax="blur: 10; sepia: 100;">...</div>
```

```example
<div id="test-filter" class="uk-height-large uk-background-cover uk-overflow-hidden uk-flex uk-flex-top" uk-parallax="sepia: 100;" style="background-image: url('images/light.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-filter; blur: 0,10;">Headline</h1>

</div>
```

***

## SVG Strokes

The Parallax component can be used to animate SVG strokes. The effect looks like the SVG strokes are drawn before your eyes. The SVG image has to be injected into the markup as an inline SVG. This can be done manually or by using the [SVG component](svg.md). Since the SVG component injects the SVG after the image element, the `uk-parallax` attribute has to be added to a parent element.

```html
<div uk-parallax="stroke: 45">
    <img src="" alt="" uk-svg>
</div>
```

```example
<div class="uk-text-center" uk-parallax="stroke: 100%; viewport: 0.7">
    <img src="images/strokes.svg" alt="" uk-svg>
</div>
```

**Note** It's recommended to use percent unit `%`, so you don't have to know the exact length of the strokes.

***

## SVG Images

The Parallax component can be applied to the elements of inline SVG images, like `rect`, `circle` and `path`. 

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="10" height="10" uk-parallax="rotate: 360"/>
</svg>
```

***

## Responsive

It's recommended to use `vw` or `vh` as length units instead of pixels. The parallax will adapt depending on the viewport.

The parallax can also be applied to certain viewports only. Add the `media` option with one of possible values. For example, add a number in pixel, e.g. `640`, or a breakpoint, e.g. `@s`, `@m`, `@l` or `@xl`. The parallax will be shown for the specified viewport width and larger.

```html
<div uk-parallax="media: @m"></div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option     | Value           | Default | Description                                                                                                                                                |
| :--------- | :-------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `easing`   | Number          | `1`     | Animation easing during scrolling                                                                                                                          |
| `target`   | String          | `false` | Element dimension reference for animation duration.                                                                                                        |
| `viewport` | Number          | `1`     | Animation range depending on the viewport.                                                                                                                 |
| `media`    | Integer, String | `false` | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.parallax(element, options);
```
