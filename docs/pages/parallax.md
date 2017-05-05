# Parallax

<p class="uk-text-lead">Animate CSS properties depending on the scroll position of the document.</p>

## Usage

To apply this component, add the `uk-parallax` attribute to a container element. Add an option with the desired animation target value for each CSS property you want to animate.

```html
<div data-uk-parallax="{bg: '-200'}">...</div>
```

```example
<div class="uk-margin uk-text-contrast uk-text-center uk-flex uk-flex-center uk-flex-middle" data-uk-parallax="{bg: '-200'}" style="height: 350px; background-image: url('images/placeholder_800x400_2.jpg'); background-size: 1223px 612px; background-repeat: no-repeat; background-position: 50% -0.134048px;">
    <div class="uk-width-medium-1-2">
        <h1 class="uk-text-contrast">Heading</h1>
        <p class="uk-text-large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

***

## Start and end values

By default, the specified properties transition to the target value you pass in. You can also specify a start value when you use a comma as the separator.

```html
<div uk-parallax="opacity: 0,1"></div>
```

```example
<div id="test-reverse" class="uk-height-large uk-background-cover uk-margin uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');" uk-parallax="bg: -200">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="target: #test-reverse; opacity: 0,1; y: -200,0; scale: 2,1; viewport: 0.5">Headline</h1>
        <p uk-parallax="target: #test-reverse; opacity: 0,1; y: 200,0; scale: 0,1; viewport: 0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

***

## Finish transition at viewport position

By default, a transition during scrolling starts at the very bottom of the screen and is animated all the way during the scrolling. The animation finishes when the element leaves the vieport at the top of the screen.

However, you might want to start the animation at the bottom of the screen but finish it before it has scrolled the whole viewport height. Text in particular is way easier to read when the animation stops early.

To achieve this, use the `viewport` option. To only animate on the bottom half of the screen, use `viewport: 0.5`. Smaller values means that the animations finishes earlier, larger values make it last longer.


```html
<div uk-parallax="viewport: 0.5"></div>
```

```example
TODO
```

***

## Transition velocity

TODO

***

## Color transitions

TODO

***

## Filter transitions

TODO

***

## Options

UIkit provides a number of options that you can add to the `uk-parallax` attribute:

<div class="uk-overflow-container">

<table class="uk-table uk-text-nowrap">

<thead>

<tr>

<th>Option</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>`x`</td>

<td>Animate translateX in pixels.</td>

</tr>

<tr>

<td>`xp`</td>

<td>Animate translateX in percent.</td>

</tr>

<tr>

<td>`y`</td>

<td>Animate translateY in pixels.</td>

</tr>

<tr>

<td>`yp`</td>

<td>Animate translateY in percent.</td>

</tr>

<tr>

<td>`bg`</td>

<td>Animate a background image.</td>

</tr>

<tr>

<td>`bgp`</td>

<td>Animate a background image in percent.</td>

</tr>

<tr>

<td>`rotate`</td>

<td>Animate rotation clockwise in degree.</td>

</tr>

<tr>

<td>`scale`</td>

<td>Animate scaling.</td>

</tr>

<tr>

<td>`color`</td>

<td>Animate color (needs start and stop value).</td>

</tr>

<tr>

<td>`background-color`</td>

<td>Animate background-color (needs start and stop value).</td>

</tr>

<tr>

<td>`border-color`</td>

<td>Animate border color (needs start and stop value).</td>

</tr>

<tr>

<td>`opacity`</td>

<td>Animate the opacity.</td>

</tr>

<tr>

<td>`blur`</td>

<td>Animate the blur filter.</td>

</tr>

<tr>

<td>`hue`</td>

<td>Animate the hue rotation filter.</td>

</tr>

<tr>

<td>`grayscale`</td>

<td>Animate the grayscale filter.</td>

</tr>

<tr>

<td>`invert`</td>

<td>Animate the invert filter.</td>

</tr>

<tr>

<td>`saturate`</td>

<td>Animate the saturate filter.</td>

</tr>

<tr>

<td>`sepia`</td>

<td>Animate the sepia filter.</td>

</tr>

</tbody>

</table>

</div>

<span class="uk-badge">NOTE</span> You can basically animate any CSS property that has a single value, like width and height, by adding it to the attribute.

### Markup

    <div data-uk-parallax="{y: '-200', opacity: '0'}">...</div>

* * *

### [Start and stop values](#start-stop-value)

Properties are always animated from the current value to the target value which you set in the option. However, you can also define a start value yourself. This is done by passing a string to the option which contains two values separated by comma.

<span class="uk-badge">NOTE</span> Some properties, like colors, require a start and a stop value!

#### Markup

    <div data-uk-parallax="{x: '-100,100', 'background-color': '#EBF7FD,#FFF1F0'}">...</div>

* * *

## [Nested animation](#nested-animation)

Using different animations for nested elements is a simple task. Just create another container within the first parallax container and add your options to a new `data-uk-parallax` attribute.

### Example

<div class="uk-margin uk-text-contrast uk-text-center uk-flex uk-flex-center uk-flex-middle" data-uk-parallax="{bg: -200}" style="height: 350px; background-image: url(&quot;images/placeholder_800x400_1.jpg&quot;); background-size: 1223px 612px; background-repeat: no-repeat; background-position: 50% 0px;">

<div class="uk-width-medium-1-2" data-uk-parallax="{opacity: '0,1', scale: '0,1'}" style="transform: scale(0); opacity: 0;">

# Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</div>

</div>

### Markup

    <div data-uk-parallax="{bg: -200}">
        <div data-uk-parallax="{opacity: '0,1', scale: '0,1'}">...</div>
    </div>

* * *

## [Target Option](#target-option)

Usually, the animation lasts as long as the element itself is in the viewport. To start and stop the animation based on the viewport visibility of another element, use the `target` option. This can be helpful when using nested animations.

### Example

<div class="uk-margin uk-text-contrast uk-text-center uk-flex uk-flex-center uk-flex-middle" data-uk-parallax="{bg: -200}" style="height: 350px; background-image: url(&quot;images/placeholder_800x400_2.jpg&quot;); background-size: 1223px 612px; background-repeat: no-repeat; background-position: 50% 0px;">

<div class="uk-width-medium-1-2" data-uk-parallax="{opacity: '0,1', scale: '0,1', target: '#target-option'}" style="transform: scale(0); opacity: 0;">

# Heading

This text is animated as long as the headline "Target Option" is in the viewport.

</div>

</div>

### Markup

    <div id="target-id">...</div>
    <div data-uk-parallax="{target: '#target-id'}">...</div>

* * *

## [Velocity](#velocity)

To adjust the easing of the animation, add the `velocity` option.

### Example

<div id="test-velocity" class="uk-margin uk-text-contrast uk-text-center uk-flex uk-flex-center uk-flex-middle" style="height: 350px; background-image: url('images/placeholder_800x400_3.jpg'); background-size: cover;">

<div class="uk-grid uk-flex-center uk-flex-middle">

<div>

<div class="uk-panel uk-panel-box" data-uk-parallax="{target:'#test-velocity', y: '150', velocity: '0.04', viewport: '0.9'}" style="transform: translate3d(0px, 0px, 0px);">0.04</div>

</div>

<div>

<div class="uk-panel uk-panel-box" data-uk-parallax="{target:'#test-velocity', y: '150', velocity: '0.2', viewport: '0.9'}" style="transform: translate3d(0px, 0px, 0px);">0.2</div>

</div>

<div>

<div class="uk-panel uk-panel-box" data-uk-parallax="{target:'#test-velocity', y: '150', velocity: '0.6', viewport: '0.9'}" style="transform: translate3d(0px, 0px, 0px);">0.6</div>

</div>

<div>

<div class="uk-panel uk-panel-box" data-uk-parallax="{target:'#test-velocity', y: '150', velocity: '1', viewport: '0.9'}" style="transform: translate3d(0px, 0px, 0px);">1</div>

</div>

<div>

<div class="uk-panel uk-panel-box" data-uk-parallax="{target:'#test-velocity', y: '150', velocity: '2', viewport: '0.9'}" style="transform: translate3d(0px, 0px, 0px);">2</div>

</div>

<div>

<div class="uk-panel uk-panel-box" data-uk-parallax="{target:'#test-velocity', y: '150', velocity: '3', viewport: '0.9'}" style="transform: translate3d(0px, 0px, 0px);">3</div>

</div>

<div>

<div class="uk-panel uk-panel-box" data-uk-parallax="{target:'#test-velocity', y: '150', velocity: '4', viewport: '0.9'}" style="transform: translate3d(0px, 0px, 0px);">4</div>

</div>

</div>

</div>

### Markup

    <div data-uk-parallax="{velocity: '0.5'}">
        ...
    </div>

* * *

## Viewport

Using the `viewport` option, the animation duration can be adjusted. With the value `1` or `false` the animation lasts as long as the element is in the viewport. Setting it to `0.5`, for example, animates the property only in the first half of the viewport.

### Example

<div class="uk-margin uk-text-contrast uk-text-center uk-flex uk-flex-center uk-flex-middle" data-uk-parallax="{bg: -200}" style="height: 350px; background-image: url(&quot;images/placeholder_800x400_1.jpg&quot;); background-size: 1223px 612px; background-repeat: no-repeat; background-position: 50% 0px;">

<div class="uk-width-medium-1-2" data-uk-parallax="{opacity: '0,1', scale: '0,1', viewport: '0.5'}" style="transform: scale(0); opacity: 0;">

# Heading

This text is animated until it reaches the middle of the viewport.

</div>

</div>

### Markup

    <div data-uk-parallax="{viewport: '0.5'}">...</div>

* * *

## [JavaScript options](#javascript-options)

<div class="uk-overflow-container">

<table class="uk-table uk-table-striped uk-text-nowrap">

<thead>

<tr>

<th>Option</th>

<th>Possible value</th>

<th>Default</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>`velocity`</td>

<td>float</td>

<td>0.5</td>

<td>Animation velocity during scrolling</td>

</tr>

<tr>

<td>`target`</td>

<td>mixed</td>

<td>false</td>

<td>Element dimension reference for animation duration.</td>

</tr>

<tr>

<td>`viewport`</td>

<td>float (0 to 1)</td>

<td>false</td>

<td>Animation range depending on the viewport.</td>

</tr>

<tr>

<td>`media`</td>

<td>integer / string</td>

<td>false</td>

<td>Condition for the active status with a width as integer (e.g. 640) or a css media query</td>

</tr>

</tbody>

</table>

</div>

### Init element manually

    var parallax = UIkit.parallax(element, { /* options */ });
