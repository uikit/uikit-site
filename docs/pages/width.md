# Width

<p class="uk-text-lead">Use responsive width classes to determine the proportions of elements.</p>

UIkit's width component is often used in combination with [grids](grid.md) to split content into responsive columns. You can apply fractions, automatic width or expand units to fill the remaining space and combine these modes.

***

## Usage

Add one of the `.uk-width-*` classes to a container element to determine its size. Typically, you would use a grid from the [Grid component](grid.md) and its child elements to create the units.

| Class                              | Description                        |
|------------------------------------|------------------------------------|
| `.uk-width-1-1`                    | Fills 100% of the available width. |
| `.uk-width-1-2`                    | Divides the grid into halves.      |
| `.uk-width-1-3` to `.uk-width-2-3` | Divides the grid into thirds.      |
| `.uk-width-1-4` to `.uk-width-3-4` | Divides the grid into fourths.     |
| `.uk-width-1-5` to `.uk-width-4-5` | Divides the grid into fifths.      |
| `.uk-width-1-6` to `.uk-width-5-6` | Divides the grid into sixths.      |

```html
<div uk-grid>
    <div class="uk-width-1-2"></div>
    <div class="uk-width-1-2"></div>
</div>
```

```example
<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-3"><div class="uk-card uk-card-default"><div class="uk-card-body">1-3</div></div></div>
    <div class="uk-width-1-3"><div class="uk-card uk-card-default"><div class="uk-card-body">1-3</div></div></div>
    <div class="uk-width-1-3"><div class="uk-card uk-card-default"><div class="uk-card-body">1-3</div></div></div>
</div>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2"><div class="uk-card uk-card-default"><div class="uk-card-body">1-2</div></div></div>
    <div class="uk-width-1-2"><div class="uk-card uk-card-default"><div class="uk-card-body">1-2</div></div></div>
</div>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-5"><div class="uk-card uk-card-default"><div class="uk-card-body">1-5</div></div></div>
    <div class="uk-width-4-5"><div class="uk-card uk-card-default"><div class="uk-card-body">4-5</div></div></div>
</div>
```

***

## Auto & Expand

The width component provides additional modifiers to give you more flexibility in the distribution of items.

Add the `.uk-width-auto` class to an item, so it will only expand to the width of its own content. Add the `.uk-width-expand` class, so that the column expands to fill up the remaining space inside the container.

```html
<div uk-grid>
    <div class="uk-width-auto"></div>
    <div class="uk-width-expand"></div>
</div>
```

```example
<div class="uk-text-center" uk-grid>
    <div class="uk-width-auto"><div class="uk-card uk-card-default"><div class="uk-card-body">Auto</div></div></div>
    <div class="uk-width-expand"><div class="uk-card uk-card-default"><div class="uk-card-body">Expand</div></div></div>
</div>
```

***

## Equal Child Widths

To create a grid whose child elements' widths are evenly split, you don't have to apply the same class to each list item within the grid. Just add one of the `.uk-child-width-*` classes to the grid itself.

| Class                    | Description                    |
|--------------------------|--------------------------------|
| `.uk-child-width-1-2`    | Divides the grid into halves.  |
| `.uk-child-width-1-3`    | Divides the grid into thirds.  |
| `.uk-child-width-1-4`    | Divides the grid into fourths. |
| `.uk-child-width-1-5`    | Divides the grid into fifths.  |
| `.uk-child-width-1-6`    | Divides the grid into sixths.  |
| `.uk-child-width-auto`<br> `.uk-child-width-expand`   | Divides the grid into equal units depending on the content size and the available space. |

```html
<div class="uk-child-width-1-5" uk-grid>
    <div></div>
    <div></div>
    ...
</div>
```

```example
<div class="uk-child-width-1-5 uk-grid-small uk-text-center" uk-grid>
    <div><div class="uk-card uk-card-default"><div class="uk-card-body">Item</div></div></div>
    <div><div class="uk-card uk-card-default"><div class="uk-card-body">Item</div></div></div>
    <div><div class="uk-card uk-card-default"><div class="uk-card-body">Item</div></div></div>
    <div><div class="uk-card uk-card-default"><div class="uk-card-body">Item</div></div></div>
    <div><div class="uk-card uk-card-default"><div class="uk-card-body">Item</div></div></div>
</div>
```

***

## Fixed Width

In addition to the calculated width classes, you can also add one of the following classes, which apply fixed widths.

| Class               | Description                       |
|---------------------|-----------------------------------|
| `.uk-width-small`   | Applies a fixed width of _150px_. |
| `.uk-width-medium`  | Applies a fixed width of _300px_. |
| `.uk-width-large`   | Applies a fixed width of _450px_. |
| `.uk-width-xlarge`  | Applies a fixed width of _600px_. |
| `.uk-width-xxlarge` | Applies a fixed width of _750px_. |

```html
<div class="uk-width-medium"></div>
```

```example
<div class="uk-width-small uk-margin"><div class="uk-card uk-card-small uk-card-default"><div class="uk-card-body">Small</div></div></div>
<div class="uk-width-medium uk-margin"><div class="uk-card uk-card-small uk-card-default"><div class="uk-card-body">Medium</div></div></div>
<div class="uk-width-large uk-margin"><div class="uk-card uk-card-small uk-card-default"><div class="uk-card-body">Large</div></div></div>
<div class="uk-width-xlarge uk-margin"><div class="uk-card uk-card-small uk-card-default"><div class="uk-card-body">X Large</div></div></div>
<div class="uk-width-xxlarge uk-margin"><div class="uk-card uk-card-small uk-card-default"><div class="uk-card-body">XX Large</div></div></div>
```

***

## Responsive Width

UIkit provides a number of responsive widths classes. Basically they work just like the usual width classes, except that they have suffixes that represent the breakpoint from which they come to effect. These classes can be combined with the [Visibility component](visibility.md). This is great to adjust your layout and content for different device sizes.

| Class                                   | Description                                                                             |
|-----------------------------------------|-----------------------------------------------------------------------------------------|
| `.uk-width-*`<br> `.uk-child-width-*`       | Affects all device widths, grid columns stay side by side.                              |
| `.uk-width-*@s`<br> `.uk-child-width-*@s`   | Affects device widths of _640px_ and larger. Grid columns will stack on smaller sizes.  |
| `.uk-width-*@m`<br> `.uk-child-width-*@m` | Affects device widths of _960px_ and larger. Grid columns will stack on smaller sizes.  |
| `.uk-width-*@l`<br> `.uk-child-width-*@l`   | Affects device widths of _1200px_ and larger. Grid columns will stack on smaller sizes. |
| `.uk-width-@xl`<br> `.uk-child-width-*@xl`   | Affects device widths of _1600px_ and larger. Grid columns will stack on smaller sizes. |

```example
<div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
    <div class="uk-width-1-2@m"><div class="uk-card uk-card-default"><div class="uk-card-body">1-2@m</div></div></div>
    <div class="uk-width-1-4@m"><div class="uk-card uk-card-default"><div class="uk-card-body">1-4@m</div></div></div>
    <div class="uk-width-1-4@m"><div class="uk-card uk-card-default"><div class="uk-card-body">1-4@m</div></div></div>
    <div class="uk-width-1-5@m uk-hidden@l"><div class="uk-card uk-card-secondary"><div class="uk-card-body">1-5@m<br>hidden@l</div></div></div>
    <div class="uk-width-1-5@m uk-width-1-3@l"><div class="uk-card uk-card-default"><div class="uk-card-body">1-5@m<br>1-3@l</div></div></div>
    <div class="uk-width-3-5@m uk-width-2-3@l"><div class="uk-card uk-card-default"><div class="uk-card-body">3-5@m<br>2-3@l</div></div></div>
</div>

<div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>
    <div class="uk-width-auto@m uk-visible@l"><div class="uk-card uk-card-primary"><div class="uk-card-body">auto@m<br>visible@l</div></div></div>
    <div class="uk-width-1-3@m"><div class="uk-card uk-card-default"><div class="uk-card-body">1-3@m</div></div></div>
    <div class="uk-width-expand@m"><div class="uk-card uk-card-default"><div class="uk-card-body">expand@m</div></div></div>
</div>
```
