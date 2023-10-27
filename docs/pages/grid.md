# Grid

<p class="uk-text-lead">Create a fully responsive, fluid and nestable grid layout.</p>

The Grid system of UIkit allows you to arrange block elements in columns. It works closely together with the [Width component](width.md) to determine how much space of the container each item will take up, and it can also be combined with the [Flex component](flex.md) to align and order grid items.

***

## Usage

To create the grid container, add the `uk-grid` attribute to a `<div>` element. Add child `<div>` elements to create the cells. By default, all grid cells are stacked. To place them side by side, add one of the classes from the [Width component](width.md). Using `.uk-child-width-expand` will automatically apply equal width to items, regardless of how many there are.

**Note** There's no need to add a `.uk-grid` class as it will be added via JavaScript. However, if UIkit's JavaScript is [deferred](https://developer.mozilla.org/docs/Web/HTML/Element/script#attr-defer), the class should be added to prevent stacking while loading.

```html
<div uk-grid>
    <div></div>
    <div></div>
</div>
```
**Note** Often cards from the [Card component](card.md) are used inside a grid. This also goes for the following examples for visualization.

```example
<div class="uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>
```

***

## Gap modifiers

The Grid component comes with a default gap that is decreased automatically from a certain breakpoint usually on a smaller desktop viewport width. To apply a different gap, add one of the following classes.

| Class               | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| `.uk-grid-small`    | Add this class to apply a small gap.                                                 |
| `.uk-grid-medium`   | Add this class to apply a medium gap like the default one, but without a breakpoint. |
| `.uk-grid-large`    | Add this class to apply a large gap with breakpoints.                                |
| `.uk-grid-collapse` | Add this class to remove the grid-gap entirely.                                      |

```html
<div class="uk-grid-small" uk-grid>…</div>
```

```example
<div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>

<div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>

<div class="uk-grid-large uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>

<div class="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" uk-grid>
    <div>
        <div class="uk-background-muted uk-padding">Item</div>
    </div>
    <div>
        <div class="uk-background-primary uk-padding uk-light">Item</div>
    </div>
    <div>
        <div class="uk-background-secondary uk-padding uk-light">Item</div>
    </div>
</div>
```

***

### Column and Row

To apply a different gap to just the column or row, add one of the following classes.

| Class                                                 | Description                                                                      |
| ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| `.uk-grid-column-small`<br>`.uk-grid-row-small`       | Add one of these classes to apply a small gap to the column or row.              |
| `.uk-grid-column-medium`<br>`.uk-grid-row-medium`     | Add one of these classes to apply a medium gap to the column or row.             |
| `.uk-grid-column-large`<br>`.uk-grid-row-large`       | Add one of these classes to apply a large gap to the column or row.              |
| `.uk-grid-column-collapse`<br>`.uk-grid-row-collapse` | Add one of these classes to remove the grid-gap entirely from the column or row. |

```html
<div class="uk-grid-column-small uk-grid-row-large" uk-grid>…</div>
```

```example
<div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>
```

***

## Nested grid

You can easily extend your grid layout with nested grids.

```html
<div uk-grid>
    <div>
        <div uk-grid>
            <div></div>
            <div></div>
        </div>
    </div>
    <div>
        <div uk-grid>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
```

```example
<div class="uk-child-width-1-2 uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-child-width-1-2 uk-text-center" uk-grid>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">Item</div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">Item</div>
            </div>
        </div>
    </div>
</div>
```

***

## Divider modifier

Add the `.uk-grid-divider` class to separate grid cells with lines. This class can be combined with the gap modifiers. As soon as the grid stacks, the divider lines will become horizontal.

```html
<div class="uk-grid-divider" uk-grid>…</div>
```

```example
<div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
</div>
```

***

## Match height

To match the height of the direct child of each cell, add the `.uk-grid-match` class. This is needed to match the height of cards from the [Card component](card.md).

```html
<div class="uk-grid-match" uk-grid>…</div>
```

```example
<div class="uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
     </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>…</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>…<br>…</div>
    </div>
</div>
```

***

### Match only one cell

You can also match the height of the direct child of just one cell. To do so, add the `.uk-grid-item-match` class to the grid item whose child you want to match.

```html
<div uk-grid>
    <div class="uk-grid-item-match"></div>
    <div></div>
</div>
```

```example
<div class="uk-child-width-expand@s" uk-grid>
    <div class="uk-grid-item-match">
        <div class="uk-card uk-card-default uk-card-body">
            <h3>Heading</h3>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
     </div>
    <div>
        <h3>Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
</div>
```

***

### Targets

For a more specific selection of the elements whose heights should be matched, add the `target: SELECTOR` option to the `uk-height-match` attribute from the [Height component](height.md#match-height).

```html
<div uk-grid uk-height-match="target: > div > .uk-card">
    <div>
        <div class="uk-card uk-card-default"></div>
    </div>
    <div>
        <div class="uk-card uk-card-default"></div>
    </div>
</div>
```

```example
<div class="uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="target: > div > .uk-card">
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
     </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>…</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>…<br>…</div>
    </div>
</div>
```

***

## Grid and width

The grid is mostly used in combination with the [Width component](width.md). This allows for great flexibility when determining the column widths.

```html
<div uk-grid>
    <div class="uk-width-auto@m"></div>
    <div class="uk-width-1-3@m"></div>
    <div class="uk-width-expand@m"></div>
</div>
```

```example
<div class="uk-text-center" uk-grid>
    <div class="uk-width-auto@m">
        <div class="uk-card uk-card-default uk-card-body">Auto</div>
    </div>
    <div class="uk-width-1-3@m">
        <div class="uk-card uk-card-default uk-card-body">1-3</div>
    </div>
    <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default uk-card-body">Expand</div>
    </div>
</div>
```

***

### Child width

If the grid columns are evenly split, you can add one of the `.uk-child-width-*` classes to the grid container instead of adding a class to each of the items.

```html
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>…</div>
```

```example
<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>
```

For more detailed information, take a look at the [Width component](width.md).

***

## Grid and flex

You can easily combine the grid with the [Flex component](flex.md). That way you can modify the items' alignment, ordering, direction and wrapping. This allows you, for example, to flip the cells' display order for wider viewports. All this works together with the gap and divider modifiers.

```html
<div class="uk-flex-center" uk-grid>
    <div></div>
    <div class="uk-flex-first"></div>
</div>
```

```example
<div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 1</div>
    </div>
    <div class="uk-flex-last">
        <div class="uk-card uk-card-secondary uk-card-body">Item 2</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 4</div>
    </div>
    <div class="uk-flex-first">
        <div class="uk-card uk-card-primary uk-card-body">Item 5</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 6</div>
    </div>
</div>
```

***

## Masonry

If grid cells have different heights, set the `masonry` option to either `pack` or `next` to create a layout free of gaps.


| Masonry | Description                                                                              |
| ------- | ---------------------------------------------------------------------------------------- |
| `pack`  | Sorts items into columns with the most room to make column heights as equal as possible. |
| `next`  | Uses the natural item order.                                                             |


```html
<div uk-grid="masonry: pack">…</div>
```

```example
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: pack">
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 100px">Item 1</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 150px">Item 2</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 300px">Item 3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 120px">Item 4</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 180px">Item 5</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 250px">Item 6</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 140px">Item 7</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 210px">Item 8</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 200px">Item 9</div>
    </div>
</div>
```

**Note** You can view more examples in the tests for the [Grid Masonry](../assets/uikit/tests/grid-masonry.html).

***

## Filter and order

Grid items can also be filtered and sorted by category, date or other metadata. Take a look at the [Filter component](filter.md).

***

## Parallax

To move single columns of a grid at different speeds while scrolling, just add `parallax: NUMBER` to the attribute. The number sets the parallax translation in pixels.

```html
<div uk-grid="parallax: 150">…</div>
```

```example
<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center" uk-grid="parallax: 150">
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>
```

To adjust the grid parallax duration, set the `parallax-start` and `parallax-end` options. The `parallax-start` option defines when the animation starts. The default value of `0` means that the grid's top border and the viewport's bottom border intersect. The `end` option defines when the animation ends. The default value of `0` means that the grid's bottom border and the viewport's top border intersect. Values can be set in any dimension units, namely `vh`, `%` and `px`. The `%` unit relates to the grid's height. Both options allow basic mathematics operands, `+` and `-`.

```html
<div uk-grid="parallax: 150; parallax-start: 100%; parallax-end: 100%;">…</div>
```

To justify the grid parallax if columns have different heights, for example in masonry grids, set the `parallax-justify: true` option so all grid columns reach the bottom at the same time. Set `parallax: 0` to only move the columns by their height until they justify. But of course an additional parallax translation value can be set as well.

```html
<div uk-grid="parallax: 0; parallax-justify: true; masonry: pack">…</div>
```

```example
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="parallax: 0; parallax-justify: true; masonry: pack">
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 100px">Item 1</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 150px">Item 2</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 300px">Item 3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 120px">Item 4</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 180px">Item 5</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 250px">Item 6</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 140px">Item 7</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 210px">Item 8</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 200px">Item 9</div>
    </div>
</div>
```

**Note** You can view more examples in the [Grid Parallax](../assets/uikit/tests/grid-parallax.html) tests.

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option             | Value           | Default                 | Description                                                                                                                                                                                         |
| ------------------ | --------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `margin `          | String          | `uk-grid-margin`        | This class is added to items that break into the next row, typically to create margin to the previous row.                                                                                          |
| `first-column`     | String          | `uk-first-column`       | This class is added to the first element in each row.                                                                                                                                               |
| `masonry`          | String, Boolean | `false`, `pack`, `next` | Enables masonry layout for this grid.                                                                                                                                                               |
| `parallax`         | Number          | `0`                     | Parallax translation value. The value can be in vh, % and px. Falsy disables the parallax effect (default).                                                                                         |
| `parallax-start`   | Length          | `0`                     | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's top border and viewport's bottom border intersect.   |
| `parallax-end`     | Length          | `0`                     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's bottom border and the viewport's top border intersect. |
| `parallax-justify` | Boolean         | `false`                 | With parallax enabled, all columns will reach the bottom at the same time.                                                                                                                          |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.grid(element, options);
```
