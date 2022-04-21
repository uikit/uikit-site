# Sticky

<p class="uk-text-lead">Make elements remain at the top of the viewport, like a sticky navigation.</p>

## Usage

To create an element that remains at the top of the viewport when scrolling down the site, add the `uk-sticky` attribute to that element.

```html
<div uk-sticky></div>
```

```example
<div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="end: ~ .uk-height-large">Stick to the top</div>

<div class="uk-height-large"></div>
```

**Note** Example elements on this page are only sticky until you scroll down to the next heading and disappear afterwards. This was done so as not to clutter your screen with all variations of sticky containers.

***

## Position
`autoplay: true` option to the attribute
By default, the element sticks to the top of the viewport. You can set the `position: bottom` option to stick to the bottom of the viewport.

```html
<div uk-sticky="position: bottom"></div>
```

```example
<div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="position: bottom; end: ~ .uk-height-large">Stick to the  bottom</div>

<div class="uk-height-large"></div>
```

***

## Start

To apply an offset to when the element should start being sticky, add the `start` option. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the element's top border and viewport's top border intersect. A CSS Selector will set start to the referenced element's bottom border and the elements top border.

```html
<!-- Sticks after 200px scrolling -->
<div uk-sticky="start: 200"></div>

<!-- Sticks after scrolling the elements height -->
<div uk-sticky="start: 100%"></div>

<!-- Sticks after 20vh scrolling -->
<div uk-sticky="start: 20vh"></div>

<!-- Sticks after the top of the selected element -->
<div id="my-id">
    <div uk-sticky="start: #my-id"></div>
</div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="start: 200; end: ![uk-grid] ~ .uk-height-large">Start being sticky after 200px scrolling</div>
    </div>
    <div>
        <div id="container-1" class="uk-background-muted uk-height-medium">
            <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="start: #container-1; end: ![uk-grid] ~ .uk-height-large">Start being sticky after the top of the box</div>
        </div>
    </div>
</div>

<div class="uk-height-large"></div>
```

***

## End

To apply an offset to when the element should stop being sticky, add the `stop` option. The value can be in vh, % and px. It supports basic mathematics operands + and -. A value of `0` means that the element's top border and viewport's top border intersect, which would cause the element not to be sticky at all if start is also set to `0`. A CSS Selector will set the end to the referenced element's bottom and the element's bottom border. `false` will make the element stick until the end of the page. `true` selects the parent element.

```html
<!-- Sticks until 500px scrolling -->
<div uk-sticky="end: 500"></div>

<!-- Sticks until scrolling the elements height -->
<div uk-sticky="end: 100%"></div>

<!-- Sticks until 50vh scrolling -->
<div uk-sticky="end: 20vh"></div>

<!-- Sticks until the bottom of the selected element -->
<div uk-sticky="end: #my-id"></div>
<div id="my-id"></div>

<!-- Sticks until the bottom of its parent container -->
<div>
    <div uk-sticky="end: true"></div>
</div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div>
            <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="end: #container-2">Stick until the next headline</div>
        </div>
    </div>
    <div>
        <div class="uk-background-muted uk-height-medium">
            <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="end: true">Stick until the bottom of its parent container</div>
        </div>
    </div>
</div>

<h3 id="container-2" style="margin-start: 300px;">Some Headline</h3>

```

***

## Offset

To set an offset to the viewports edge when the element is sticky, add the `offset` option. The value can be in vh, % and px. It supports basic mathematics operands + and -.

```html
<div uk-sticky="offset: 100"></div>
```

```example
<div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="offset: 100; end: ~ .uk-height-large">Stick 100px below the top</div>

<div class="uk-height-large"></div>
```

***

## Animation

Add an animation from the [Animation component](animation.md) in order to have the sticky element reappear smoothly.

```html
<div uk-sticky="animation: uk-animation-slide-top"></div>
```

```example
<div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="start: 100; end: ~ .uk-height-large; animation: uk-animation-slide-top">Animation Slide Top</div>

<div class="uk-height-large"></div>
```

***

## Show On Up

You can make the sticky element show only when scrolling up to save space. Together with an animation, this makes for a very smooth experience.

```html
<div uk-sticky="show-on-up: true"></div>
```

```example
<div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="end: ~ .uk-height-large; show-on-up: true; animation: uk-animation-slide-top">Slide in on scroll up</div>

<div class="uk-height-large"></div>
```

***

## Responsive

It's possible to disable the sticky behavior for different devices widths by applying the `media` option to the attribute and adding the appropriate viewport width. Add a number in pixel, for example `media: 640`, or a breakpoint, for example `media: @m`. The element will be sticky from the specified viewport width and upwards, but not below.

```html
<div uk-sticky="media: 640"></div>
```

***

## Oversized Content

Sticky content that is larger than the viewport will scroll down and stick to the bottom of the viewport. Changing the scroll direction will immediately scroll the sticky content up and change the sticky behavior to stick to the top of the viewport.

```example
<div id="js-oversized" class="uk-child-width-1-2@s" uk-grid>
    <div>

        <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="end: #js-oversized">
        
            <h3>Sticky 1</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 2</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 3</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 4</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Sticky 5</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
        </div>

    </div>
    <div>
        <div class="uk-background-muted uk-padding">

            <h3>Headline 1</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 2</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 3</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 4</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 5</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 6</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 7</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3>Headline 8</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

    </div>
</div>

```

***

## Overflow Flip

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option           | Value                         | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :--------------- | :---------------------------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `position`       | `top`, `bottom`               | `top`       | The position the element should be stuck to.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `start`          | Length, CSS Selector          | `0`         | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the element's top border and viewport's top border intersect. A CSS Selector will set start to the referenced element's bottom border and the elements top border.                                                                                                                                                                         |
| `end `           | Length, CSS Selector, Boolean | `false`     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. A value of `0` means that the element's top border and viewport's top border intersect, which would cause the element not to be sticky at all if start is also set to `0`. A CSS Selector will set the end to the referenced element's bottom and the element's bottom border. `false` will make the element stick until the end of the page. `true` selects the parent element. |
| `offset `        | Length                        | `0`         | The offset the Sticky should be fixed to. The value can be in vh, % and px. It supports basic mathematics operands + and -.                                                                                                                                                                                                                                                                                                                                                    |
| `overflow-flip ` | Boolean                       | `false`     | Flip the Sticky's position option if the element overflows the viewport and disables overflow scrolling.                                                                                                                                                                                                                                                                                                                                                                       |
| `animation `     | String                        | `false`     | The animation to use when the element becomes sticky.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `cls-active`     | String                        | `uk-active` | The active class.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `cls-inactive`   | String                        | `''`        | The inactive class.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `show-on-up`     | Boolean                       | `false`     | Only show sticky element when scrolling up.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `media `         | Number, String                | `false`     | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).                                                                                                                                                                                                                                                                                                                     |
| `target-offset ` | `false`, Length               | `false`     | Initially make sure that the Sticky element is not over a referenced element via the page's location hash. The offset defines by how far the element will be above the referenced element. `false` will disable this behavior.                                                                                                                                                                                                                                                 |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.sticky(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name       | Description                                  |
| :--------- | :------------------------------------------- |
| `active`   | Fires after the element becomes sticky.      |
| `inactive` | Fires after the element is no longer sticky. |
