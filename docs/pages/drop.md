# Drop

<p class="uk-text-lead">Position any element in relation to another element.</p>

## Usage

To apply this component, just add the `uk-drop` attribute to a block element placed next to another block element.

```html
<div></div>
<div uk-drop></div>
```

**Note:** The Drop component has no default styling. In this example, we've used a card from the [Card component](card.md) for visualization. A button toggles the drop.

```example
<button class="uk-button uk-button-default">Hover</button>
<div uk-drop>
    <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>
```

***

## Position

Add one of the following options to the `uk-drop` attribute to adjust the drop's alignment.

```html
<div></div>
<div uk-drop="pos: top-left"></div>
```

```example
<div class="uk-inline">
    <button class="uk-button uk-button-default">Top Right</button>
    <div uk-drop="pos: top-right">
        <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>
</div>
<div class="uk-inline">
    <button class="uk-button uk-button-default">Bottom Justify</button>
    <div uk-drop="pos: bottom-justify">
        <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>
</div>
<div class="uk-inline">
    <button class="uk-button uk-button-default">Right Center</button>
    <div uk-drop="pos: right-center">
        <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>
</div>
```

| Class                 | Description                                                                   |
|-----------------------|-------------------------------------------------------------------------------|
| `pos: bottom-left`    | Aligns the drop to the bottom left.                                           |
| `pos: bottom-center`  | Aligns the drop to the bottom center.                                         |
| `pos: bottom-right`   | Aligns the drop to the bottom right.                                          |
| `pos: bottom-justify` | Aligns the drop to the bottom and justifies its width to the related element. |
| `pos: top-left`       | Aligns the drop to the top left.                                              |
| `pos: top-center`     | Aligns the drop to the top center.                                            |
| `pos: top-right`      | Aligns the drop to the top right.                                             |
| `pos: top-justify`    | Aligns the drop to the top and justifies its width to the related element.    |
| `pos: left-top`       | Aligns the drop to the left top.                                              |
| `pos: left-center`    | Aligns the drop to the left center.                                           |
| `pos: left-bottom`    | Aligns the drop to the left bottom.                                           |
| `pos: right-top`      | Aligns the drop to the right top.                                             |
| `pos: right-center`   | Aligns the drop to the right center.                                          |
| `pos: right-bottom`   | Aligns the drop to the right bottom.                                          |

***

## Boundary

By default, the drop flips automatically when it exceeds the viewport's edge. If you want to flip it according to a container's boundary, just add the the `boundary: .my-class` option to the `uk-drop` attribute, using a selector for the container. That way you can determine any parent element as the drop's boundary.

```html
<div class="my-class">
    <button></button>
    <div uk-drop="boundary: .my-class"></div>
</div>
```

```example
<div class="boundary uk-width-2-3@s uk-clearfix uk-padding-small" style="border: 1px dashed #e7e7e7;">
    <button class="uk-button uk-button-default uk-align-left uk-margin-remove">Hover</button>
    <div uk-drop="boundary: .boundary">
        <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>
    <button class="uk-button uk-button-default uk-align-right uk-margin-remove">Hover</button>
    <div uk-drop="boundary: .boundary">
        <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>
</div>
```

***

### Boundary align

You can also align the drop to its boundary. To do so, add the `boundary-align: true` option to the attribute.

```html
<div class="my-class">
    <button></button>
    <div uk-drop="boundary: .my-class; boundary-align: true"></div>
</div>
```

```example
<div class="boundary-align uk-clearfix uk-padding-small" style="border: 1px dashed #e7e7e7;">
    <button class="uk-button uk-button-default uk-align-left uk-margin-remove">Justify</button>
    <div uk-drop="pos: bottom-justify; boundary: .boundary-align; boundary-align: true">
        <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>
    <button class="uk-button uk-button-default uk-align-right uk-margin-remove">Center</button>
    <div uk-drop="pos: bottom-center; boundary: .boundary-align; boundary-align: true">
        <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>
</div>
```

***

## Offset

To define a custom offset between the drop container and the toggle, add the `offset: 10` option with a value for the offset, measured in pixels.

```html
<div uk-drop="offset: 80"></div>
```

```example
<button class="uk-button uk-button-default">Hover</button>
<div uk-drop="offset: 80">
    <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>
```

***

## Animation

Apply one or more animations to the dropdown by adding the `animation: uk-animation-*` option with one of the classes from the [Animation component](animaton.md). You can also determine the animation's duration. Just add the `duration: 500` option with your value.

```html
<div uk-drop="animation: uk-animation-scale-up; duration: 1000"></div>
```

```example
<button class="uk-button uk-button-default">Hover</button>
<div uk-drop="animation: uk-animation-scale-up; duration: 1000">
    <div class="uk-card uk-card-body uk-card-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>
```

***

## Component options

| Option           | Value                  | Default       | Description                                                                      |
|------------------|------------------------|---------------|----------------------------------------------------------------------------------|
| `toggle`         | String, Boolean  | `true`          | CSS selector for the element to be used as the toggler. By default, the preceding element is used.  |
| `pos`            | String                 | `bottom-left` | The position of the drop.                                                               |
| `mode`           | String           | `hover`         | The drop trigger, either `hover` or `click` behavior.                                                       |
| `delay-show`     | Number                 | `0`             | Delay time in milliseconds before a drop is displayed in hover mode.                       |
| `delay-hide`     | Number                 | `800`           | Delay time in milliseconds before a drop is hidden in hover mode.                          |
| `boundary`       | String           | `window`        | CSS selector of the element to maintain the drop's visibility.                            |
| `boundary-align` | Boolean                | `false`         | Align the drop to its boundary.                                                  |
| `flip`           | Boolean, String | `true`          | Automatically flip the drop. Possible values are `false`, `true`, `x` or `y`.                                                     |
| `offset`         | Number                 | `0`             | The offset of the drop's container.                                              |
| `animation`      | String                 | `false`         | Space separated names of animations to apply. Comma separate for out animations. |
| `duration`       | Number                 | `200`           | Animation duration in milliseconds.                                                          |
