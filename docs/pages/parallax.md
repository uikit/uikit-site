# Parallax

<p class="uk-text-lead">Animate CSS properties depending on the scroll position of the document.</p>

## Usage

To apply this component, add the `uk-parallax` attribute to a container element. Add an option with the desired animation target value for each CSS property you want to animate.

You can use explicit CSS property names (e.g. `width` or `scale`) and a number of shorthands and special properties (e.g. `bgy` for `background-position-y`). See the full table at the bottom of this page.

```html
<div uk-parallax="bgy: -200">...</div>
```

```example
<div uk-parallax="bgy: -200" class="uk-flex uk-flex-center uk-flex-middle uk-light uk-height-large uk-background-cover" style="background-image: url('images/dark.jpg');">

    <div class="uk-width-1-2@m uk-text-center">
        <p class="uk-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

</div>
```

***

## Start and end values

Properties are always animated from their current value to the target value you set in the option. However, you can also define a start value yourself. This is done by passing two values separated by comma.

**Note** Some properties, like [colors](#colors), always require a start and a stop value.

```html
<div uk-parallax="opacity: 0,1">...</div>
```

```example
<div id="test-reverse" class="uk-height-large uk-background-cover uk-margin uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');" uk-parallax="bgy: -400">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="target: #test-reverse; opacity: 0,1; y: -200,0; scale: 2,1; viewport: 0.5">Headline</h1>
        <p uk-parallax="target: #test-reverse; opacity: 0,1; y: 200,0; scale: 0,1; viewport: 0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

***

## Viewport position

Using the <code>viewport</code> option you can adjust the animation duration. The value defines how far inside the viewport the element is scrolled until the animation is completed. With the value <code>1</code> or <code>false</code>, the animation lasts as long as the element is in the viewport (default behavior). Setting it to <code>0.5</code>, for example, animates the property only in the first half of the viewport.

```html
<div uk-parallax="viewport: 0.5">...</div>
```

```example
<div class="uk-text-center uk-flex uk-flex-center uk-flex-middle uk-light"  style="height: 350px; background-image: url('images/dark.jpg');">

    <div class="uk-width-1-2@m uk-text-center">

        <p class="uk-h2" uk-parallax="opacity: 0.1,1; viewport: 0.5">This text is animated until it reaches the middle of the viewport.</p>

    </div>

</div>
```

***

## Nested Animation

Using different animations for nested elements is a simple task. Just create another container within the first parallax container and add your options to a new `uk-parallax` attribute.


```html
<div uk-parallax="bgx: -50">
    <div uk-parallax="x: -100, 100">...</div>
</div>
```


```example
<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg'); height: 350px" uk-parallax="bgx: -50">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <p class="uk-h2" uk-parallax="x: -100,100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
```


***

## Target Option

Usually, the animation lasts as long as the element itself is in the viewport. To start and stop the animation based on the viewport visibility of another element, use the `target` option. This can be helpful when using nested animations.

```html
<div id="target">
    <div uk-parallax="target: #target">...</div>
</div>
```

```example
<div id="test-target-nested" class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg'); height: 350px">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <p class="uk-h2" uk-parallax="target: #test-target-nested; opacity: 0,1; scale: 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
```

***

## Easing

To adjust the easing of the animation, add the `easing` option. Lower values will cause a faster transition in the beginning, higher values will cause a faster transition in the end of the animation.

**Note** The option will change the easing from start to end value. If you want to reduce or increase the overall movement, you need to change the start and end values instead.

```example
<div id="test-easing" class="uk-height-large uk-background-cover uk-margin uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
     <div class="uk-grid uk-margin-auto uk-margin-auto-vertical uk-flex-inline">
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; y: 200; easing: 0">0</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; y: 200; easing: 0.5">0.5</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; y: 200; easing: 0.6">0.6</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; y: 200; easing: 0.8">0.8</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; y: 200; easing: 1">1</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; y: 200; easing: 2">2</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="target: #test-easing; y: 200; easing: 4;">4</div></div>
    </div>
</div>

```

***

## Colors

You can also transition from one color to another, for example for borders, backgrounds or text colors. You may define colors using `rgb()` definitions, color keywords or hex values.

```html
<div uk-parallax="borderColor: #00f,#f00">...</div>
```

```example
<div id="test-color" class="test-color uk-height-large uk-margin uk-overflow-hidden uk-flex" uk-parallax="backgroundColor: yellow,white; borderColor: #00f,#f00; viewport: 0.6" style="border: 5px solid #000;">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">

        <p class="uk-h2" uk-parallax="target: #test-color; color: #0f0; viewport: 0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    </div>
</div>
```

***

## Filters

CSS filters are an easy way to add graphical effects to any element on your page. While they are still an experimental feature for [some browsers](https://caniuse.com/filter), you can safely use them as long as your usability does not suffer. Using the Parallax component, you can dynamically change the amount of a filter on your element.

```html
<div uk-parallax="blur: 10; sepia: 100;">...</div>
```

```example
<div id="test-filter" class="uk-height-large uk-background-cover uk-margin uk-overflow-hidden uk-flex" style="background-image: url('images/light.jpg');" uk-parallax="sepia: 100; viewport: 0.5">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <p class="uk-h2" uk-parallax="target: #test-filter; blur: 0,10;">On a modern browser, this text will get blurred as you scroll.</p>
    </div>
</div>
```

***

## Options

UIkit provides a number of options that you can add to the `uk-parallax` attribute:

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `easing` | Number | `1` | Animation easing during scrolling |
| `target` | String | `false` | Element dimension reference for animation duration. |
| `viewport` | Number | `1` | Animation range depending on the viewport. |
| `media` | Mixed | `false` | Condition for the active status with a width as integer (e.g. 640) or a css media query |

***

## Animated Properties

UIkit provides a number of properties that you can animate by just adding them to the `uk-parallax` attribute.

| Option | Description |
| --- | --- |
| `x` | Animate translateX in pixels or percent. |
| `y` | Animate translateY in pixels or percent. |
| `bgy` | Animate a background image (y-axis). |
| `bgx` | Animate a background image (x-axis). |
| `rotate` | Animate rotation clockwise in degree. |
| `scale` | Animate scaling. |
| `color` | Animate color (needs start and stop value). |
| `backgroundColor` | Animate background-color (needs start and stop value). |
| `borderColor` | Animate border color (needs start and stop value). |
| `opacity` | Animate the opacity. |
| `blur` | Animate the blur filter. |
| `hue` | Animate the hue rotation filter. |
| `grayscale` | Animate the grayscale filter. |
| `invert` | Animate the invert filter. |
| `saturate` | Animate the saturate filter. |
| `sepia` | Animate the sepia filter. |

**Note** You can basically animate any CSS property that has a single value, like `width` and `height`, by adding it to the attribute.
