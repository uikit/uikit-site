# Flex

<p class="uk-text-lead">Utilize the power of Flexbox to create a wide range of layouts.</p>

The Flex component has an essential role in building layouts in UIkit. A lot of components, for example the [Grid](grid.md) as well as horizontal navigations, like the [Navbar](navbar.md), [Subnav](subnav.md), [Breadcrumb](breadcrumb.md), [Pagination](pagination.md), [Tab](tab.md) and [Dotnav](dotnav.md) rely on the Flex component.

***

## Usage

To apply this component, add the `.uk-flex` class to a `<div>` element. This will create the flex container. By default, all flex items are aligned to the left and matched in height and width.

```html
<div class="uk-flex">
    <div></div>
</div>
```

```example
<div class="uk-flex uk-text-center">
    <div class="uk-width-1-3 uk-card uk-card-default"><div class="uk-card-body">Flex Item</div></div>
    <div class="uk-width-1-3 uk-card uk-card-default uk-margin-left"><div class="uk-card-body">Flex Item</div></div>
    <div class="uk-width-1-3 uk-card uk-card-default uk-margin-left"><div class="uk-card-body">Flex Item</div></div>
</div>
```

***

## Flex Inline

By default, the flex container is displayed as a block element. To apply the behavior of an inline element while still laying out its content according to the flexbox model, use the `.uk-flex-inline` class instead of `.uk-flex`.

***

## Modifiers

You can add a number of different classes to modify the flex behavior.

### Alignment

These classes define the horizontal and vertical alignment of flex items and distribute the space between them. Add one or more of them to the flex container in order to configure the alignments of the flex items.

| Class              | Description                                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------------------------|
| `.uk-flex-left`    | Add this class to align flex items to the left.                                                                            |
| `.uk-flex-center`  | Add this class to center flex items along the main axis.                                                                          |
| `.uk-flex-right`   | Add this class to align flex items to the right.                                                                           |
| `.uk-flex-between` | Add this class to distribute items evenly, with the first item at the beginning and last item at the end of the main axis. |
| `.uk-flex-around`  | Add this class to distribute items evenly with equal space on both sides of each item.                                     |
| `.uk-flex-stretch` | Add this class to expand flex items to fill the height of their parent.                                                    |
| `.uk-flex-top`     | Add this class to align flex items to the top.                                                                             |
| `.uk-flex-middle`  | Add this class to center flex items along the cross axis.                                                                            |
| `.uk-flex-bottom`  | Add this class to align flex items to the bottom.                                                                          |

```html
<div class="uk-flex uk-flex-middle uk-flex-around"></div>
```

```example
<div class="uk-flex uk-flex-middle uk-flex-around uk-text-center">
   <div class="uk-width-1-4 uk-card uk-card-default uk-card-small"><div class="uk-card-body">Item</div></div>
   <div class="uk-width-1-4 uk-card uk-card-default"><div class="uk-card-body">Item</div></div>
   <div class="uk-width-1-4 uk-card uk-card-default uk-card-large"><div class="uk-card-body">Item</div></div>
</div>
```

***

### Direction

These classes define the axis that flex items are placed on and their direction. By default, items run horizontally from left to right.

| Class                     | Description                                               |
|---------------------------|-----------------------------------------------------------|
| `.uk-flex-row`            | Add this class to lay out flex items as horizontal rows.  |
| `.uk-flex-row-reverse`    | Add this class to lay out flex items from right to left.  |
| `.uk-flex-column`         | Add this class to lay out flex items as vertical columns. |
| `.uk-flex-column-reverse` | Add this class to lay out flex items from bottom to top.  |

```example
<div class="uk-flex uk-flex-column uk-flex-column-reverse">
   <div class="uk-width-1-3 uk-card uk-card-default"><div class="uk-card-body">1</div></div>
   <div class="uk-width-1-3 uk-card uk-card-default uk-margin-bottom"><div class="uk-card-body">2</div></div>
   <div class="uk-width-1-3 uk-card uk-card-default uk-margin-bottom"><div class="uk-card-body">3</div></div>
</div>
```

***

### Wrap

By default, flex items are fit into one line. Add the `.uk-flex-wrap` class to make them wrap into another line when they no longer fit the viewport. To change the items' direction so that they run from right to left, add the `.uk-flex-wrap-reverse` class. The following classes modify the alignment of wrapping flex items. To force the flex items into one line, just add the `.uk-flex-nowrap` class.

| Class                   | Description                                                                                                                |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `.uk-flex-wrap-stretch` | Add this class, so that item lines stretch to take up the remaining space                                                  |
| `.uk-flex-wrap-top`     | Add this class to align multiline flex items to the top.                                                                   |
| `.uk-flex-wrap-middle`  | Add this class to vertically center multirow flex items.                                                                   |
| `.uk-flex-wrap-bottom`  | Add this class to align multiline flex items to the bottom.                                                                |
| `.uk-flex-wrap-between` | Add this class to distribute item lines evenly, with the first row at the top and last row at the bottom of the container. |
| `.uk-flex-wrap-around`  | Add this class to distribute lines evenly with equal space at the top and bottom of each row.                              |

```example
<div class="uk-flex uk-flex-wrap uk-flex-wrap-reverse uk-flex-wrap-around uk-background-muted" style="height: 300px;">
    <div class="uk-width-1-3 uk-card uk-card-default uk-card-small"><div class="uk-card-body">1</div></div>
    <div class="uk-width-1-2 uk-card uk-card-default uk-card-small uk-margin-left"><div class="uk-card-body">2</div></div>
    <div class="uk-width-1-3 uk-card uk-card-default uk-card-small"><div class="uk-card-body">3</div></div>
    <div class="uk-width-1-3 uk-card uk-card-default uk-card-small uk-margin-left"><div class="uk-card-body">4</div></div>
    <div class="uk-width-1-2 uk-card uk-card-default uk-card-small"><div class="uk-card-body">5</div></div>
    <div class="uk-width-1-3 uk-card uk-card-default uk-card-small uk-margin-left"><div class="uk-card-body">6</div></div>
</div>
```

***

### Item Order

By default, flex items are laid out according to the source order. To display a certain item as the first or last one, just add one of these classes.

| Class                                   | Description                                   |
|-----------------------------------------|-----------------------------------------------|
| `.uk-flex-first`                        | Displays the item as the first one.           |
| `.uk-flex-last`                         | Displays the item as the last one.            |
| `.uk-flex-first@s`<br> `.uk-flex-last@s`   | Affects device widths of _640px_ and higher.  |
| `.uk-flex-first@m`<br> `.uk-flex-last@m`   | Affects device widths of _960px_ and higher.  |
| `.uk-flex-first@l`<br> `.uk-flex-last@l`   | Affects device widths of _1200px_ and higher. |
| `.uk-flex-first@xl`<br> `.uk-flex-last@xl` | Affects device widths of _1600px_ and higher. |

```example
<div class="uk-flex uk-text-center">
   <div class="uk-width-1-3 uk-card uk-card-default uk-margin-left"><div class="uk-card-body">1</div></div>
   <div class="uk-width-1-3 uk-card uk-card-default uk-margin-left"><div class="uk-card-body">2</div></div>
   <div class="uk-width-1-3 uk-card uk-card-default uk-flex-first"><div class="uk-card-body">3</div></div>
</div>
```

***

## Flex and Grid

The Flex component can be combined with a grid from the [Grid component](grid.md).

```example
<div class="uk-flex-middle" uk-grid>
    <div class="uk-width-2-3@m">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
    <div class="uk-width-1-3@m uk-flex-first">
        <img src="../docs/images/light.jpg" alt="Image">
    </div>
</div>
```
