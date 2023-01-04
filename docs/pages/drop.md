# Drop

<p class="uk-text-lead">Position any element in relation to another element.</p>

## Usage

Any content, like a button, can toggle the drop component. Just add the `uk-drop` attribute to a block element following the toggle.

```html
<button type="button"></button>
<div uk-drop></div>
```

To group the toggle and the dropdown, just wrap them with a container element and add the `.uk-inline` class from the [Utility component](utility.md#inline).

```html
<div class="uk-inline">
    <button type="button"></button>
    <div uk-drop></div>
</div>
```

**Note** The Drop component has no default styling. In this example, we've used a card from the [Card component](card.md) for visualization.

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover, Click</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>
```

***

## Mode

By default, the drop is toggled on hover and on click. Set the `mode` option to change the toggle behavior.

| Mode          | Description                     |
| ------------- | ------------------------------- |
| `click,hover` | Toggle drop on click and hover. |
| `click`       | Toggle drop on click only.      |
| `hover`       | Toggle drop on hover only.      |

```html
<div uk-drop="mode: click"></div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="mode: hover">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Click</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="mode: click">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>
```

***

## Grid in drop

You can place a grid from the [Grid component](grid.md) inside a drop. Just wrap the content with a `<div>` element and add the `uk-grid` attribute. If the grid should stack automatically whenever the drop no longer fits its container, just add the `.uk-drop-grid` class.

```html
<div class="uk-width-large" uk-drop>
    <div class="uk-drop-grid uk-child-width-1-2@m" uk-grid>…</div>
</div>
```

Use one of the classes from the [Width component](width.md) to adjust the drop's width.

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div class="uk-card uk-card-body uk-card-default uk-width-large" uk-drop>
    <div class="uk-drop-grid uk-child-width-1-2@m" uk-grid>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
    </div>
</div>
```

***

## Position

By default, the drop is positioned below the toggle. To change its position, set the `pos` option to the `uk-drop` attribute. The first part of the value refers to the side where the drop is positioned, while the second part defines its alignment to the toggle.

| Position        | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| `top-left`      | Positions the drop above the toggle and aligns it to the left.             |
| `top-center`    | Positions the drop above the toggle and aligns it to the center.           |
| `top-right`     | Positions the drop above the toggle and aligns it in the right.            |
| `bottom-left`   | Positions the drop below the toggle and aligns it to the left.             |
| `bottom-center` | Positions the drop below the toggle and aligns it to the center.           |
| `bottom-right`  | Positions the drop below the toggle and aligns it in the right.            |
| `left-top`      | Positions the drop to the left of the toggle and aligns it to the top.     |
| `left-center`   | Positions the drop to the left of the toggle and aligns it to the center.  |
| `left-bottom`   | Positions the drop to the left of the toggle and aligns it to the bottom.  |
| `right-top`     | Positions the drop to the right of the toggle and aligns it to the top.    |
| `right-center`  | Positions the drop to the right of the toggle and aligns it to the center. |
| `right-bottom`  | Positions the drop to the right of the toggle and aligns it to the bottom. |

```html
<div uk-drop="pos: top-left"></div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Top Right</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: top-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Bottom Center</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Right Top</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: right-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>
```

***

## Boundary

By default, the drop automatically changes its positions if it exceeds the viewport or any other parent scrolling ancestor. It will flip its position to the other side to prevent it from covering the toggle and shift its alignment to fit into the viewport. To set a different boundary other than the scrolling ancestor, just add the `boundary: SELECTOR` option to the `uk-drop` attribute using a selector for the boundary. To set a boundary on one axis only, use `boundary-x: SELECTOR` or `boundary-y: SELECTOR`.

```html
<div class="my-class">
    <button type="button"></button>
    <div uk-drop="boundary: !.my-class"></div>
</div>
```

```example
<div class="boundary uk-panel uk-placeholder uk-height-medium">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Right</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-right; boundary: !.boundary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Left</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-left; boundary: !.boundary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

</div>
```

***

## Shift and flip

To disable automatic shifting and flipping, add the `shift: false` or `flip: false` option to the `uk-drop` attribute.

```html
<div uk-drop="shift: false; flip: false"></div>
```

```example
<div class="boundary uk-panel uk-placeholder uk-height-medium">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Right</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-right; boundary: !.boundary; shift: false; flip: false">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Left</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-left; boundary: !.boundary; shift: false; flip: false">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

</div>
```

***

## Auto Update

By default, the drop repositions on scrolling. To disable dynamic positioning, add `auto-update: false` option to the `uk-drop` attribute. The drop will only be positioned once when opened.

```html
<div uk-drop="auto-update: false"></div>
```

***

## Target

By default, the drop is aligned to its toggle. To position the drop to a different element, just add `target: SELECTOR` option to the `uk-drop` attribute. To change just the side where the drop is positioned or the alignment to another element, use `target-x: SELECTOR` or `target-y: SELECTOR`.

```html
<div class="my-class">
    <button type="button"></button>
    <div uk-drop="target: !.my-class"></div>
</div>
```

```example
<div class="target uk-panel uk-placeholder uk-height-medium">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Left</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-left; target: !.target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Right</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-right; target: !.target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

</div>
```

***

## Inset

By default, the drop is positioned outside the toggle. To change the position to the inside, add the `inset: true` option to the `uk-drop` attribute. This option should only be used if the `target` option is also set so the drop doesn't cover its toggle.

```html
<div uk-drop="target: .my-class; inset: true"></div>
```

```example
<div class="target uk-panel uk-placeholder uk-height-medium">

    <button class="uk-button uk-button-default uk-float-left" type="button">Bottom Left</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-left; target: !.target; inset: true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

    <button class="uk-button uk-button-default uk-float-right" type="button">Bottom Right</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="pos: bottom-right; target: !.target; inset: true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

</div>
```

***

## Stretch

To stretch the drop to fill the size of its closest scrolling ancestor, add the `stretch: true` option to the `uk-drop` attribute. To only stretch to one axis, use `stretch: x` or `stretch: y`. If the `boundary` option is set, the drop stretches to the defined boundary.

```html
<div uk-drop="stretch: true"></div>
```

```example
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li>
                <a href="#">Hover</a>
                <div class="uk-navbar-dropdown" uk-drop="boundary: !.uk-navbar; stretch: x; flip: false">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            </li>
        </ul>

    </div>
</nav>
```

***

## Animation

Apply one or more animations to the dropdown by adding the `animation: uk-animation-*` option with one of the classes from the [Animation component](animation.md). You can also determine the animation's duration. Just add the `duration` option with a value in milliseconds. Set `animate-out: true` to also show an animation when closing the drop.

```html
<div uk-drop="animation: uk-animation-slide-top-small; duration: 1000"></div>
```

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div class="uk-card uk-card-body uk-card-default" uk-drop="animation: uk-animation-slide-top-small; animate-out: true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
```

Alternatively, the Drop component has two additional animation types which are not covered by the Animation component. `slide-*` animations slide the drop and its content from a selected direction, while with the `reveal-*` animations, the content of the drop stays static and is revealed from a selected direction.

| Animation       | Description                       |
| --------------- | --------------------------------- |
| `slide-top`     | Slides the drop from the top.     |
| `slide-bottom`  | Slides the drop from the bottom.  |
| `slide-left`    | Slides the drop from the left.    |
| `slide-right`   | Slides the drop from the right.   |
| `reveal-top`    | Reveals the drop from the top.    |
| `reveal-bottom` | Reveals the drop from the bottom. |
| `reveal-left`   | Reveals the drop from the left.   |
| `reveal-right`  | Reveals the drop from the right.  |

```html
<div uk-drop="animation: slide-top; animate-out: true"></div>
```

```example
<div class="uk-margin" uk-margin>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Slide Top</button>
        <div class="uk-card uk-card-body uk-card-default" uk-drop="animation: slide-top; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Reveal Top</button>
        <div class="uk-card uk-card-body uk-card-default" uk-drop="animation: reveal-top; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Slide Left</button>
        <div class="uk-card uk-card-body uk-card-default" uk-drop="animation: slide-left; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>

    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Reveal Left</button>
        <div class="uk-card uk-card-body uk-card-default" uk-drop="animation: reveal-left; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>

</div>
```

***

## Offset

To define a custom offset between the drop and its toggle, add the `offset` option with a value in pixels.

```html
<div uk-drop="offset: 80"></div>
```

```example
<button class="uk-button uk-button-default" type="button">Hover</button>
<div class="uk-card uk-card-body uk-card-default" uk-drop="offset: 80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option        | Value                 | Default             | Description                                                                                              |
|---------------|-----------------------|---------------------|----------------------------------------------------------------------------------------------------------|
| `toggle`      | CSS selector          | `- *`               | CSS selector for the element to be used as toggle. By default, the preceding element.                    |
| `pos`         | String                | `bottom-left`       | Drop position.                                                                                           |
| `stretch`     | Boolean, `x`, `y`     | `true`              | Stretch drop on both (true) or given axis.                                                               |
| `mode`        | click, hover          | click, hover        | Comma-separated list of drop trigger behavior modes.                                                     |
| `delay-show`  | Number                | `0`                 | Delay time in hover mode before a drop is shown in ms.                                                   |
| `delay-hide`  | Number                | `800`               | Delay time in hover mode before a drop is hidden in ms.                                                  |
| `auto-update` | Boolean               | `true`              | Disable dynamic positioning while scrolling by setting this option to `false`.                           |
| `boundary`    | CSS selector          | `false`             | The area the drop can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `boundary-x`  | CSS selector          | `false`             | The area on the x-axis the drop can't exceed causing it to flip and shift.                               |
| `boundary-y`  | CSS selector          | `false`             | The area on the y-axis the drop can't exceed causing it to flip and shift.                               |
| `target`      | Boolean, CSS selector | `false`             | The element the drop is positioned to (`true` for window).                                               |
| `target-x`    | Boolean, CSS selector | `false`             | The element's X axis the drop is positioned to (`true` for window).                                      |
| `target-y`    | Boolean, CSS selector | `false`             | The element's Y axis the drop is positioned to (`true` for window).                                      |
| `inset`       | Boolean               | `false`             | Position inside its target.                                                                              |
| `flip`        | Boolean               | `true`              | Flip the drop along the main axis if it overflows the boundary.                                          |
| `shift`       | Boolean               | `true`              | Shift the drop along the cross axis if it overflows the boundary.                                        |
| `offset`      | Number                | `0`                 | The drop offset.                                                                                         |
| `animation`   | String                | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                  |
| `animate-out` | Boolean               | `false`             | Use animation when closing the drop.                                                                     |
| `bg-scroll`   | Boolean               | `true`              | Allow background scrolling while drop is opened.                                                         |
| `duration`    | Number                | `200`               | The animation duration.                                                                                  |
| `container`   | Boolean               | `false`             | Define a target container via a selector to specify where the drop should be appended in the DOM.        |

`pos` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

```html
<span uk-drop="top-left"></span>
```

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.drop(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
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
UIkit.drop(element).show();
```

Shows the drop.

#### Hide

```js
UIkit.drop(element).hide(delay);
```

Hides the drop.

| Name    | Type    | Default | Description            |
| ------- | ------- | ------- | ---------------------- |
| `delay` | Boolean | true    | Delay hiding the drop. |


***

## Accessibility

Adheres to the [Menu Button WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/).

The Drop component handles setting the appropriate WAI-ARIA Roles, States and Properties.

The Toggle element has the role `button`, the state `aria-expanded` and the property `aria-haspopup="true"`.
