# Table

<p class="uk-text-lead">Easily create nicely looking tables, which come in different styles.</p>

## Usage

To apply this component, add the `.uk-table` class to a `<table>` element.

```html
<table class="uk-table">
    <caption></caption>
    <thead>
        <tr>
            <th></th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td></td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td></td>
        </tr>
    </tbody>
</table>
```

```example
<table class="uk-table">
    <caption>Table Caption</caption>
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

***

## Columns

To modify the column width or content, you can use other components. Here are some useful examples:

| Style            | Description                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------|
| _Column width_   | Add one of the `.uk-width-*` classes from the [Width component](width.md).                               |
| _Text alignment_ | Add the `.uk-text-left`, `.uk-text-right` or `.uk-text-center` class from the [Text component](text.md). |
| _Text style_     | Take a look at the [Text component](text.md), for example add the `.uk-text-bold` class.                 |

```html
<td class="uk-width-1-3 uk-text-right"></td>

<td class="uk-width-large uk-text-bold"></td>
```

***

### Shrink and Expand

Add the `.uk-table-shrink` or `.uk-table-expand` class to a `<th>` or `<td>` element to reduce the column width to fit its content or to expand it to a specific min-width.

```html
<td class="uk-table-shrink"></td>

<td class="uk-table-expand"></td>
```

```example
<table class="uk-table">
    <thead>
        <tr>
            <th class="uk-table-shrink">Shrink</th>
            <th class="uk-table-expand">Expand</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Shrink</td>
            <td>Expand</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Shrink</td>
            <td>Expand</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

***

## Modifiers

To display the table in a different style, just add a modifier to the the `.uk-table` class.

### Middle

To vertically center table content, just add the `.uk-table-middle` class to the `<tr>` or `<td>` elements.

```html
<table class="uk-table">
    <thead>...</thead>
    <tbody>
        <tr class="uk-table-middle">...</tr>
    </tbody>
</table>
```

***

### Hover

Add the `.uk-table-hover` class to display a hover state on table rows.

```html
<table class="uk-table uk-table-hover">...</table>
```

```example
<table class="uk-table uk-table-hover">
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

***

### Striped

Add zebra-striping to a table by adding the `.uk-table-striped` class.

```html
<table class="uk-table uk-table-striped">...</table>
```

```example
<table class="uk-table uk-table-striped">
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

***

### Small

Add the `.uk-table-small` class to make table cells more compact.

```html
<table class="uk-table uk-table-small">...</table>
```

```example
<table class="uk-table uk-table-small">
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

***

## Combine Modifiers

The modifiers of the Table component are combinable.

```html
<table class="uk-table uk-table-hover uk-table-striped uk-table-small">...</table>
```

```example
<table class="uk-table uk-table-hover uk-table-striped uk-table-small">
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

***

## Responsive Table

If your table happens to be wider than its container element or would eventually get too big on a specific viewport width, just wrap it inside a `<div>` element and add the `.uk-overflow-auto` class. This creates a container that provides a horizontal scrollbar whenever the elements inside it are wider than the container itself.

```html
<div class="uk-overflow-auto">
    <table class="uk-table">...</table>
</div>
```

```example
<div class="uk-overflow-auto">
    <table class="uk-table uk-table-small">
        <thead>
            <tr>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>
```