# Grid

<p class="uk-text-lead">Create a fully responsive, fluid and nestable grid layout.</p>

The Grid system of UIkit allows you to arrange block elements in columns and works closely together with the [Width component](width.md) to determine, how much space of the container each item will take up.
It can also be combined with the [Flex component](flex.md).

***

## Usage

To create the grid container, add the `uk-grid` attribute to a `<div>` element. There's no need to add a class. Add child `<div>` elements to create the units.

```html
<div uk-grid>
    <div></div>
    <div></div>
</div>
```


```example
<div class="uk-child-width-1-1 uk-child-width-1-3@s uk-text-center" uk-grid>
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

## Small Gutter

To apply a smaller gutter between grid columns, add the `.uk-grid-small` class.

```html
<div class="uk-grid-small" uk-grid>...</div>
```

```example
<div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-3@s uk-text-center" uk-grid>
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

## Medium Gutter

To apply a medium gutter between grid columns, add the `.uk-grid-medium` class.

```html
<div class="uk-grid-medium" uk-grid>...</div>
```

```example
<div class="uk-grid-medium uk-child-width-1-1 uk-child-width-1-3@s uk-text-center" uk-grid>
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

## Large Gutter

To apply a large gutter between grid columns, add the `.uk-grid-large` class.

```html
<div class="uk-grid-large" uk-grid>...</div>
```

```example
<div class="uk-grid-large uk-child-width-1-1 uk-child-width-1-3@s uk-text-center" uk-grid>
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

## Collapse Gutter

To remove the grid gutter entirely, add the `.uk-grid-collapse` class.

```html
<div class="uk-grid-collapse" uk-grid>...</div>
```

```example
<div class="uk-grid-collapse uk-child-width-1-3@s uk-text-center" uk-grid>
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

## Divider

Add the `.uk-grid-divider` class to separate grid columns with lines. This class can be combined with the size modifiers.

```html
<div class="uk-grid-divider" uk-grid>...</div>
```

```example
<div class="uk-grid-divider uk-child-width-1-3@s uk-text-center" uk-grid>
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

## Match Height

To match the height of grid columns, add the `.uk-grid-match` class as a CSS only solution.

```html
<div class="uk-grid-match" uk-grid>....</div>
```

```example
<div class="uk-grid-match uk-child-width-1-3@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">
            Item<br><code>.uk-grid-match</code></div>
     </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
       <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>
```

Alternatively, you can also match items via JavaScript. Just add the `uk-height-match` attribute from the [Utility component](utility.md).

```
<div uk-grid uk-height-match="target: SELECTOR;">
    <div></div>
    <div></div>
</div>
```

```example
<div class="uk-child-width-1-3@s uk-text-center" uk-grid uk-height-match="target: > div > .uk-card;">
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br><code>uk-height-match</code></div>
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

## Grid and Width

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

### Child Width

If the grid columns are evenly split, you can add one of the `.uk-child-width-*` classes to the grid container, instead of adding a class to each of the items.

```html
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>...</div>
```

```example
<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">1-3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">1-3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">1-3</div>
    </div>
</div>
```

For more detailed information, take a look at the [Width component](width.md).

***

## Grid and Flex

You can easily combine the grid with the [Flex component](flex.md). That way you can center items, if they wrap into the next row or change the source ordering. This allows you, for example, to flip the columns' display order for wider viewports.

```html
<div class="uk-flex-center" uk-grid>
    <div></div>
    <div class="uk-flex-first"></div>
</div>
```

```example
<div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">1</div>
    </div>
    <div class="uk-flex-last">
        <div class="uk-card uk-card-secondary uk-card-body">2</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">4</div>
    </div>
    <div class="uk-flex-first">
        <div class="uk-card uk-card-primary uk-card-body">5</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">6</div>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Class          | Value  | Default         | Description                                                                                                |
|----------------|--------|-----------------|------------------------------------------------------------------------------------------------------------|
| `margin `      | String | uk-grid-margin  | This class is added to items that break into the next row, typically to create margin to the previous row. |
| `first-column` | String | uk-first-column | This class is added to the first element in each row.                                                      |