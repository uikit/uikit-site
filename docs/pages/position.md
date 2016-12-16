# Position

<p class="uk-text-lead">A collection of utility classes to position content.</p>

## Usage

To apply this component, add one of the `.uk-position-*` classes to a block element. Make sure the parent container has **relative** positioning, for example by adding the `.uk-panel` class from the [Utility component](component.md).

| Class                        | Description                                              |
|------------------------------|----------------------------------------------------------|
| `.uk-position-top`      | Positions the element at the top.                        |
| `.uk-position-left`      | Positions the element at the left.                        |
| `.uk-position-right`      | Positions the element at the right.                        |
| `.uk-position-top-left`      | Positions the element at the top left.                        |
| `.uk-position-top-center`    | Positions the element at the top center.                 |
| `.uk-position-top-right`     | Positions the element at the top right.                  |
| `.uk-position-center`        | Positions the element vertically centered in the middle. |
| `.uk-position-center-left`   | Positions the element vertically centered on the left.   |
| `.uk-position-center-right`  | Positions the element vertically centered on the right.  |
| `.uk-position-bottom`   | Positions the element at the bottom.                |
| `.uk-position-bottom-left`   | Positions the element at the bottom left.                |
| `.uk-position-bottom-center` | Positions the element at the bottom center.              |
| `.uk-position-bottom-right`  | Positions the element at the bottom right.               |

```html
<div class="uk-panel">
    <div class="uk-position-center"></div>
</div>
```

Use the [Cover component](cover.md) to place the position elements on top of a media element that covers its container.

```example
<div class="uk-child-width-1-2@xl uk-grid-small" uk-grid>
    <div>
        <div class="uk-cover-container uk-height-medium">
            <img src="../docs/images/photo.jpg" alt="" uk-cover>
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
    </div>
    <div>
        <div class="uk-cover-container uk-height-medium">
            <img src="../docs/images/photo.jpg" alt="" uk-cover>
            <div class="uk-position-top uk-overlay uk-overlay-default uk-text-center">Top Left</div>
            <div class="uk-position-bottom uk-overlay uk-overlay-default uk-text-center">Top Center</div>
            <div class="uk-position-left uk-overlay uk-overlay-default uk-flex uk-flex-middle">Center Left</div>
            <div class="uk-position-right uk-overlay uk-overlay-default uk-flex uk-flex-middle">Top Right</div>
        </div>
    </div>
```

***

## Small Modifier

To apply a small margin to position elements, add the `.uk-position-small` class.

```html
<div class="uk-position-small uk-position-center"></div>
```

```example
<div class="uk-cover-container uk-height-medium">
    <img src="../docs/images/photo.jpg" alt="" uk-cover>
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
<div class="uk-cover-container uk-height-medium">
    <img src="../docs/images/photo.jpg" alt="" uk-cover>
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

## Cover Modifier

If you want a position element to cover its container, just add the `.uk-position-cover` class.

```html
<div class="uk-position-cover"></div>
```

This can be combined with the `.uk-position-small` and `.uk-position-medium` modifiers.

```example
<div class="uk-child-width-1-3@l uk-grid-small" uk-grid>
    <div>
        <div class="uk-cover-container uk-height-small">
            <img src="../docs/images/photo.jpg" alt="" uk-cover>
            <div class="uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-middle uk-flex-center">Cover</div>
        </div>
    </div>
    <div>
        <div class="uk-cover-container uk-height-small">
            <img src="../docs/images/photo.jpg" alt="" uk-cover>
            <div class="uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle uk-flex-center">Small</div>
        </div>
    </div>
    <div>
        <div class="uk-cover-container uk-height-small">
            <img src="../docs/images/photo.jpg" alt="" uk-cover>
            <div class="uk-position-cover uk-position-medium uk-overlay uk-overlay-default uk-flex uk-flex-middle uk-flex-center">Medium</div>
        </div>
    </div>
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