# Dropdown

<p class="uk-text-lead">Defines different styles for a toggleable dropdown.</p>

## Usage

Basically, a dropdown is a specific case of the [drop](drop.md) that provides its own styling. Any content, like a button, can toggle a dropdown. Just add the `uk-dropdown` attribute to a block element following the toggle.

```html
<button type="button"></button>
<div uk-dropdown></div>
```

A dropdown can be enabled by hovering and clicking the toggle. Just add the `mode: click` option to the attribute to force `click` mode only. If you want to group the toggle and the dropdown, you can just add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both.

```html
<div class="uk-inline">
    <button type="button"></button>
    <div uk-dropdown="mode: click"></div>
</div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover</button>
    <div uk-dropdown>
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Click</button>
    <div uk-dropdown="mode: click">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>
```

***

## Nav in dropdown

A dropdown can contain a nav from the [Nav component](nav.md). Just add the `.uk-nav` class and the `.uk-dropdown-nav` modifier to a `<ul>` element.

```html
<button type="button"></button>
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">...</ul>
</div>
```

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>
```

***

## Grid in dropdown

You can place a grid from the [Grid component](grid.md) inside a dropdown. Just wrap the content with a `<div>` element and add the `uk-grid` attribute. If the grid should stack automatically, whenever the dropdown no longer fits its container, just add the `.uk-dropdown-grid` class.

```html
<div class="uk-width-large" uk-dropdown>
    <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>...</div>
</div>
```

Use one of the classes from the [Width component](width.md) to adjust the dropdown's width.

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div class="uk-width-large" uk-dropdown>
    <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
        <div>
            <ul class="uk-nav uk-dropdown-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-nav uk-dropdown-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
    </div>
</div>
```

***

## Large modifier

Add the `.uk-dropdown-large` class for a dropdown with larger padding.


```html
<div class="uk-dropdown-large" uk-dropdown></div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Large</button>
    <div class="uk-dropdown-large" uk-dropdown>
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>
```

***

## Position

By default, the dropdown is positioned below the toggle. To change its position set the `pos` option to the `uk-dropdown` attribute. The first part of the value refers to the side where the dropdown is positioned while the second part defines its alignment to the toggle.

| Position        | Description                                                                |
| :-------------- | :------------------------------------------------------------------------- |
| `top-left`      | Positions the dropdown above the toggle and aligns it to the left.             |
| `top-center`    | Positions the dropdown above the toggle and aligns it to the center.           |
| `top-right`     | Positions the dropdown above the toggle and aligns it in the right.            |
| `bottom-left`   | Positions the dropdown below the toggle and aligns it to the left.             |
| `bottom-center` | Positions the dropdown below the toggle and aligns it to the center.           |
| `bottom-right`  | Positions the dropdown below the toggle and aligns it in the right.            |
| `left-top`      | Positions the dropdown to the left of the toggle and aligns it to the top.     |
| `left-center`   | Positions the dropdown to the left of the toggle and aligns it to the center.  |
| `left-bottom`   | Positions the dropdown to the left of the toggle and aligns it to the bottom.  |
| `right-top`     | Positions the dropdown to the right of the toggle and aligns it to the top.    |
| `right-center`  | Positions the dropdown to the right of the toggle and aligns it to the center. |
| `right-bottom`  | Positions the dropdown to the right of the toggle and aligns it to the bottom. |

```html
<div uk-dropdown="pos: top-left"></div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Top Right</button>
    <div uk-dropdown="pos: top-right">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Bottom Center</button>
    <div uk-dropdown="pos: bottom-center">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Right Top</button>
    <div uk-dropdown="pos: right-top">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>
```

***

## Boundary

By default, the dropdown automatically changes its positions if it exceeds the viewport or any other parent scrolling ancestor. It will flip its position to the other side to prevent it from covering the toggle and shift its alignment to fit into the viewport. To set a different boundary other than the scrolling ancestors, just add the `boundary: SELECTOR` option to the `uk-dropdown` attribute using a selector for the boundary.

```html
<div class="my-class">
    <button type="button"></button>
    <div uk-dropdown="boundary: !.my-class"></div>
</div>
```

```example
<div class="boundary uk-panel uk-placeholder uk-height-medium">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Right</button>
    <div uk-dropdown="pos: bottom-right; boundary: !.boundary">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Left</button>
    <div uk-dropdown="pos: bottom-left; boundary: !.boundary">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

</div>
```

***

## Shift and Flip

To disable automatic shifting and flipping, add the `shift: false` or `flip: false` option to the `uk-dropdown` attribute.

```html
<div uk-dropdown="shift: false; flip: false"></div>
```

```example
<div class="boundary uk-panel uk-placeholder uk-height-medium">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Right</button>
    <div uk-dropdown="pos: bottom-right; boundary: !.boundary; shift: false; flip: false">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Left</button>
    <div uk-dropdown="pos: bottom-left; boundary: !.boundary; shift: false; flip: false">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

</div>
```

***

## Display

By default, the dropdown repositions on scrolling. To disable dynamic positioning, add `display: static` option to the `uk-dropdown` attribute. The dropdown will only be positioned once when opened.

```html
<div uk-dropdown="display: static"></div>
```

***

## Target

By default, the dropdown is aligned to its toggle. To position the dropdown to a different element, just add `target: SELECTOR` option to the `uk-dropdown` attribute. To change just the side where the dropdown is positioned or the alignment to another element, use `target-x: SELECTOR` or `target-y: SELECTOR`.

```html
<div class="my-class">
    <button type="button"></button>
    <div uk-dropdown="target: !.my-class"></div>
</div>
```

```example
<div class="target uk-panel uk-placeholder uk-height-medium">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Left</button>
    <div uk-dropdown="pos: bottom-left; target: !.target">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Right</button>
    <div uk-dropdown="pos: bottom-right; target: !.target">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

</div>
```

***

## Inset

By default, the dropdown is positioned outside the toggle. To change the position to the inside, add the `inset: true` option to the `uk-dropdown` attribute. This option should only be used if the `target` option is also set, the dropdown doesn't cover its toggle.

```html
<div uk-dropdown="target: .my-class; inset: true"></div>
```

```example
<div class="target uk-panel uk-placeholder uk-height-large">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Left</button>
    <div uk-dropdown="pos: bottom-left; target: !.target; inset: true">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Right</button>
    <div uk-dropdown="pos: bottom-right; target: !.target; inset: true">
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>

</div>
```

***

## Stretch

To stretch the dropdown to fill the size of the viewport, add the `stretch: true` option to the `uk-dropdown` attribute. To only stretch to one axis, use `stretch: x` or `stretch: y`. If the `boundary` option is set, the dropdown stretches to the defined boundary.

```html
<button type="button"></button>
<div uk-dropdown="boundary: .my-class; boundary-align: true"></div>
```

```example
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li>
                <a href="#">Stretch to Navbar</a>
                <div class="uk-navbar-dropdown" uk-dropdown="boundary: !.uk-navbar; stretch: x; flip: false">
                    <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
                </div>
            </li>
        </ul>

    </div>
</nav>
```

***

## Animation

Apply one or more animations to the dropdown by adding the `animation: uk-animation-*` option with one of the classes from the [Animation component](animation.md). You can also determine the animation's duration. Just add the `duration` option with a value in milliseconds. Set `animate-out: true` to also show an animation when closing the drop.

```html
<div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000"></div>
```

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div uk-dropdown="animation: uk-animation-slide-top-small; animate-out: true">
    <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
</div>
```

Alternatively, the Drop component has two additional animation types which are not covered by the Animation component. `slide-*` animations slide the dropdown and its content from a selected direction, while in the `reveal-*` animations, the content of the dropdown stays static and is revealed from a selected direction.

| Animation       | Description                       |
| :-------------- | :-------------------------------- |
| `slide-top`     | Slides the dropdown from the top.     |
| `slide-bottom`  | Slides the dropdown from the bottom.  |
| `slide-left`    | Slides the dropdown from the left.    |
| `slide-right`   | Slides the dropdown from the right.   |
| `reveal-top`    | Reveals the dropdown from the top.    |
| `reveal-bottom` | Reveals the dropdown from the bottom. |
| `reveal-left`   | Reveals the dropdown from the left.   |
| `reveal-right`  | Reveals the dropdown from the right.  |

```html
<div uk-dropdown="animation: slide-top; animate-out: true"></div>
```

```example
<div class="uk-margin" uk-margin>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Slide Top</button>
        <div uk-dropdown="animation: slide-top; animate-out: true">
            <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
        </div>
    </div>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Reveal Top</button>
        <div uk-dropdown="animation: reveal-top; animate-out: true">
            <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
        </div>
    </div>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Slide Left</button>
        <div uk-dropdown="animation: slide-left; animate-out: true">
            <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
        </div>
    </div>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Reveal Left</button>
        <div uk-dropdown="animation: reveal-left; animate-out: true">
            <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
        </div>
    </div>

</div>
```

***

## Offset

To define a custom offset between the dropdown and its toggle, add the `offset` option with a value in pixels.

```html
<div uk-dropdown="offset: 80"></div>
```

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div uk-dropdown="offset: 80">
    <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option           | Value           | Default        | Description                                                                                   |
|:-----------------|:----------------|:---------------|:----------------------------------------------------------------------------------------------|
| `toggle`         | String, Boolean | `- *`          | CSS selector for the element to be used as toggle. By default, the preceding element is used. |
| `pos`            | String          | `bottom-left`  | The position of the dropdown.                                                                 |
| `mode`           | String          | `click, hover` | Comma-separated list of dropdown trigger behaviour modes: `hover`, `click`                    |
| `delay-show`     | Number          | `0`            | Delay time in milliseconds before a dropdown is displayed in hover mode.                      |
| `delay-hide`     | Number          | `800`          | Delay time in milliseconds before a dropdown is hidden in hover mode.                         |
| `boundary`       | String          | `window`       | CSS selector of the element to maintain the drop's visibility.                                |
| `boundary-align` | Boolean         | `false`        | Align the dropdown to its boundary.                                                           |
| `flip`           | Boolean, String | `true`         | Automatically flip the drop. Possible values are `false`, `true`, `x` or `y`.                 |
| `offset`         | Number          | `0`            | The offset of the dropdown's container.                                                       |
| `animation`      | String          | `false`        | Space separated names of animations to apply.                                                 |
| `duration`       | Number          | `200`          | Animation duration in milliseconds.                                                           |                                                      |
***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.dropdown(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
|:-------------|:-----------------------------------------------------------------------------------------------|
| `toggle`     | Fires before an item is toggled.                                                               |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires before an item is hidden.                                                                |
| `hidden`     | Fires after an item is hidden.                                                                 |
| `stack`      | Fires when the `drop-stack`class is applied.                                                   |

### Methods

The following methods are available for the component:

#### Show

```js
UIkit.dropdown(element).show();
```

Shows the Dropdown.

#### Hide

```js
UIkit.dropdown(element).hide(delay);
```

Hides the Dropdown.

| Name        | Type    | Default | Description                      |
|:------------|:--------|:--------|:---------------------------------|
| `delay`     | Boolean | true    | Delay hiding the Dropdown.       |
