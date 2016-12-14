# Position

<p class="uk-text-lead">A collection of utility classes to position content.</p>

## Usage

To apply this component, add one of the `.uk-position-*` classes to a block element. Make sure the parent container has **relative** positioning, for example by adding the `.uk-panel` class from the [Utility](component.md).

| Class                        | Description                                              |
|------------------------------|----------------------------------------------------------|
| `.uk-position-top-left`      | Positions the element at the top.                        |
| `.uk-position-top-center`    | Positions the element at the top center.                 |
| `.uk-position-top-right`     | Positions the element at the top right.                  |
| `.uk-position-center-left`   | Positions the element vertically centered on the left.   |
| `.uk-position-center`        | Positions the element vertically centered in the middle. |
| `.uk-position-center-right`  | Positions the element vertically centered on the right.  |
| `.uk-position-bottom-left`   | Positions the element at the bottom left.                |
| `.uk-position-bottom-center` | Positions the element at the bottom center.              |
| `.uk-position-bottom-right`  | Positions the element at the bottom right.               |

```html
<div class="uk-panel">
    <div class="uk-position-center"></div>
</div>
```

```example
<div class="uk-panel uk-background-muted uk-height-medium">
    <div class="uk-position-top-left uk-overlay uk-overlay-default">Top Left</div>
    <div class="uk-position-top-center uk-overlay uk-overlay-default">Top Center</div>
    <div class="uk-position-top-right uk-overlay uk-overlay-default">Top Right</div>
    <div class="uk-position-center-left uk-overlay uk-overlay-default">Center Left</div>
    <div class="uk-position-center uk-overlay uk-overlay-default">Center</div>
    <div class="uk-position-center-right uk-overlay uk-overlay-default">Center Right</div>
    <div class="uk-position-bottom-left uk-overlay uk-overlay-default">Bottom Left</div>
    <div class="uk-position-bottom-center uk-overlay uk-overlay-default">Bottom Center</div>
    <div class="uk-position-bottom-right uk-overlay uk-overlay-default">Bottom Right</div>
</div>
```

***

## Small Modifier

To apply a small margin to position elements, add the `.uk-position-small` class.

```html
<div class="uk-position-small uk-position-center"></div>
```

```example
<div class="uk-panel uk-background-muted uk-height-medium">
    <div class="uk-position-small uk-position-top-left uk-overlay uk-overlay-default">Top Left</div>
    <div class="uk-position-small uk-position-top-center uk-overlay uk-overlay-default">Top Center</div>
    <div class="uk-position-small uk-position-top-right uk-overlay uk-overlay-default">Top Right</div>
    <div class="uk-position-small uk-position-center-left uk-overlay uk-overlay-default">Center Left</div>
    <div class="uk-position-small uk-position-center uk-overlay uk-overlay-default">Center</div>
    <div class="uk-position-small uk-position-center-right uk-overlay uk-overlay-default">Center Right</div>
    <div class="uk-position-small uk-position-bottom-left uk-overlay uk-overlay-default">Bottom Left</div>
    <div class="uk-position-small uk-position-bottom-center uk-overlay uk-overlay-default">Bottom Center</div>
    <div class="uk-position-small uk-position-bottom-right uk-overlay uk-overlay-default">Bottom Right</div>
</div>
```

***

## Medium Modifier

To apply a slightly larger margin to position elements, add the `.uk-position-medium` class.

```html
<div class="uk-position-medium uk-position-center"></div>
```

```example
<div class="uk-panel uk-background-muted uk-height-medium">
    <div class="uk-position-medium uk-position-top-left uk-overlay uk-overlay-default">Top Left</div>
    <div class="uk-position-medium uk-position-top-center uk-overlay uk-overlay-default">Top Center</div>
    <div class="uk-position-medium uk-position-top-right uk-overlay uk-overlay-default">Top Right</div>
    <div class="uk-position-medium uk-position-center-left uk-overlay uk-overlay-default">Center Left</div>
    <div class="uk-position-medium uk-position-center uk-overlay uk-overlay-default">Center</div>
    <div class="uk-position-medium uk-position-center-right uk-overlay uk-overlay-default">Center Right</div>
    <div class="uk-position-medium uk-position-bottom-left uk-overlay uk-overlay-default">Bottom Left</div>
    <div class="uk-position-medium uk-position-bottom-center uk-overlay uk-overlay-default">Bottom Center</div>
    <div class="uk-position-medium uk-position-bottom-right uk-overlay uk-overlay-default">Bottom Right</div>
</div>
```

***

## Utility

This component also a number of general position utility classes:

| Class                   | Description                                   |
|-------------------------|-----------------------------------------------|
| `.uk-position-relative` | Add this class to apply relative positioning. |
| `.uk-position-absolute` | Add this class to apply absolute positioning. |
| `.uk-position-fixed`    | Add this class to apply fixed positioning.    |
| `.uk-position-z-index`  | Add this class to apply a z-index of 1.       |