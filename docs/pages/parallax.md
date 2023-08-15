# Parallax

<p class="uk-text-lead">Animate CSS properties depending on the scroll position of the document.</p>

## Usage

To apply this component, add the `uk-parallax` attribute to any element. Use one of the following options to animate the corresponding CSS property.

| Option             | Description                        | Values         | Start Value |
| ------------------ | ---------------------------------- | -------------- | ----------- |
| `x`                | Animate translateX.                | Length         | `0`         |
| `y`                | Animate translateY.                | Length         | `0`         |
| `bgy`              | Animate background Y position.     | Length         | *Initial*   |
| `bgx`              | Animate background X position.     | Length         | *Initial*   |
| `rotate`           | Animate rotation clockwise.        | `deg`          | `0`         |
| `scale`            | Animate scaling.                   | Number, Length | `1`         |
| `color`            | Animate color                      | Color          | *Initial*   |
| `background-color` | Animate background-color           | Color          | *Initial*   |
| `border-color`     | Animate border color               | Color          | *Initial*   |
| `opacity`          | Animate the opacity.               | Number         | *Initial*   |
| `blur`             | Animate the blur filter.           | `px`           | `0`         |
| `hue`              | Animate the hue rotation filter.   | `deg`          | `0`         |
| `grayscale`        | Animate the grayscale filter.      | `%`            | `0`         |
| `invert`           | Animate the invert filter.         | `%`            | `0`         |
| `saturate`         | Animate the saturate filter.       | `%`            | `0`         |
| `sepia`            | Animate the sepia filter.          | `%`            | `0`         |
| `stroke`           | Animate strokes within SVG images. |                | `0`         |

You can use `px`, `%`, `vw` and `vh` units for the length values. The pixel unit can be left out. For example, `x: 200` is the same as `x: 200px`. Basic mathematics operands `+` and `-` are also supported.

Set one of the options to create an animation stop. The property is animated from its start value to the defined stop value.


```html
<div uk-parallax="bgy: -200">…</div>
```

```example
<div class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Headline</h1>

</div>
```

***

## Start stop

To set a custom start value, create another animation stop by using two values separated by comma.

```html
<div uk-parallax="opacity: 0,1">…</div>
```

```example
<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">Headline</h1>
        <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

***

## Multiple stops

To better control the property animation, you can set intermediate stops along the animation sequence. Just use a comma-separated list of values. The animation will be equally distributed between the stops.

```html
<div uk-parallax="x: 0,50,150">…</div>
```

```example
<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 50vh + 50%;">Headline</h1>
        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

***

## Stop positions

Set an optional stop position to specify percentage along the animation sequence when the stop occurs.

```html
<div uk-parallax="x: 0,50 10%,150 50%">…</div>
```

```example
<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 50vh + 50%;">Headline</h1>
        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

***

## Nesting

Different parallax animations can easily be nested.

```html
<div uk-parallax="bgx: -50">
    <div uk-parallax="x: -100, 100">…</div>
</div>
```

```example
<div class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="y: 100,0">Headline</h1>

</div>
```

***

## Target

The animation starts and stops depending on the element position in the viewport. To start and stop the animation based on the viewport visibility of another element, use the `target` option. This can be helpful when using nested animations.

```html
<div id="target">
    <div uk-parallax="target: #target">…</div>
</div>
```

```example
<div id="test-target" class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-target; y: 100,0">Headline</h1>

</div>
```

***

## Start and end

To adjust the animation duration, set the `start` and `end` options. The `start` option defines when the animation starts. The default value of `0` means that the target's top border and viewport's bottom border intersect. The `end` option defines when the animation ends. The default value of `0` means that the target's bottom border and the viewport's top border intersect. Values can be set in any dimension units, namely `vh`, `%` and `px`. The `%` unit relates to the target's height. Both options allow basic mathematics operands, `+` and `-`.

```html
<div uk-parallax="start: 100%; end: 100%;">…</div>
<div uk-parallax="start: 30vh; end: 30vh;">…</div>
<div uk-parallax="start: 100% + 100; end: 100% + 100;">…</div>
```

```example
<div id="test-start-end" class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
     <div class="uk-grid uk-margin-auto uk-flex-inline">
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-start-end; y: 398; easing: 0;">0 / 0</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-start-end; start: 100%; end: 100%; y: 398; easing: 0;">100% / 100%</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-start-end; start: 30vh; end: 30vh; y: 398; easing: 0;">30vh / 30vh</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-start-end; start: 100% + 100; end: 100% + 100; y: 398; easing: 0;">100% + 100 / 100% + 100</div></div>
    </div>
</div>
```

***

## Easing

To adjust the easing of the animation, add the `easing` option. `0` transitions at an even speed. A negative value starts off quickly slowing down until complete while a positive value starts off slowly increasing the speed until complete.

```example
<div id="test-easing" class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
     <div class="uk-grid uk-margin-auto uk-margin-auto-vertical uk-flex-inline">
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; start: 100%; end: 100%; y: 200; easing: -2">-2</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; start: 100%; end: 100%; y: 200; easing: -1">-1</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; start: 100%; end: 100%; y: 200; easing: -0.5">-0.5</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; start: 100%; end: 100%; y: 200; easing: 0">0</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; start: 100%; end: 100%; y: 200; easing: 0.5">0.5</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; start: 100%; end: 100%; y: 200; easing: 1">1</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; start: 100%; end: 100%; y: 200; easing: 2">2</div></div>
    </div>
</div>
```

***

## Colors

Transition from one color to another, for example for borders, backgrounds or text colors. Define colors using `rgb()` definitions, color keywords or hex values.

```html
<div uk-parallax="border-color: #00f,#f00">…</div>
```

```example
<div id="test-color" class="test-color uk-height-large uk-overflow-hidden uk-flex" uk-parallax="start: 100%; end: 100%; background-color: yellow,white; border-color: #00f,#f00;" style="border: 10px solid #000;">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-target; start: 100%; end: 100%; color: #0f0;">Headline</h1>

</div>
```

***

## Filters

CSS filters are an easy way to add graphical effects to any element on your page. While they are still an experimental feature for [some browsers](https://caniuse.com/filter), you can safely use them as long as your usability does not suffer. Using the Parallax component, you can dynamically change the amount of a filter on your element.

```html
<div uk-parallax="blur: 10; sepia: 100;">…</div>
```

```example
<div id="test-filter" class="uk-height-large uk-background-cover uk-overflow-hidden uk-flex" uk-parallax="start: 100%; end: 100%; sepia: 100;" style="background-image: url('images/light.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-filter; start: 100%; end: 100%; blur: 0,10;">Headline</h1>

</div>
```

***

## SVG Strokes

The Parallax component can be used to animate SVG strokes. The effect looks like the SVG strokes are drawn before your eyes. The SVG image has to be injected into the markup as an inline SVG. This can be done manually or by using the [SVG component](svg.md). Since the SVG component injects the SVG after the image element, the `uk-parallax` attribute has to be added to a parent element.

```html
<div uk-parallax="stroke: 45">
    <img src="" width="" height="" alt="" uk-svg>
</div>
```

```example
<div class="uk-text-center" uk-parallax="start: 100%; end: 100%; stroke: 100%;">
    <img src="images/strokes.svg" width="350" height="340" alt="" uk-svg>
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

## Sticky Parallax

Together with the [Sticky component](sticky.md) you can achieve complex sticky parallax effects. View some examples in the tests for the [Sticky Parallax](../assets/uikit/tests/sticky-parallax.html).

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option   | Value          | Default | Description                                                                                                                                                                                           |
|----------|----------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `easing` | Number         | `1`     | Animation easing during scrolling                                                                                                                                                                     |
| `target` | CSS Selector   | `false` | Element dimension reference for animation duration.                                                                                                                                                   |
| `start`  | Length         | `0`     | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the target's top border and viewport's bottom border intersect.   |
| `end`    | Length         | `0`     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the target's bottom border and the viewport's top border intersect. |
| `media`  | Number, String | `false` | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).                                            |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.parallax(element, options);
```
