# List

<p class="uk-text-lead">Easily create nice looking lists, which come in different styles.</p>

## Usage

To apply this component, add the `.uk-list` class to an unordered or ordered list. The list will now display without any spacing or list-style.

```html
<ul class="uk-list">
    <li></li>
    <li></li>
    <li></li>
</ul>
```

```example
<ul class="uk-list">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Style type modifiers

Add one of the following classes to set the marker of a list item.

| Class              | Description                                      |
|:-------------------|:-------------------------------------------------|
| `.uk-list-disc`    | Use filled circle as marker.                     |
| `.uk-list-circle`  | Use a hollow circle as marker.                   |
| `.uk-list-square`  | Use a filled square as marker                    |
| `.uk-list-decimal` | Use decimal numbers as marker. Beginning with 1. |
| `.uk-list-hyphen`  | Use a hyphen as marker                           |

```html
<ul class="uk-list uk-list-disc">…</ul>
```

```example
<div class="uk-child-width-expand@s" uk-grid>

    <div>
        <h4>Disc</h4>
        <ul class="uk-list uk-list-disc">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Circle</h4>
        <ul class="uk-list uk-list-circle">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Square</h4>
        <ul class="uk-list uk-list-square">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Decimal</h4>
        <ul class="uk-list uk-list-decimal">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Hyphen</h4>
        <ul class="uk-list uk-list-hyphen">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>
```

***

## Color modifiers

Add one of the following classes to set the marker color.

| Class                | Description                                                      |
|:---------------------|:-----------------------------------------------------------------|
| `.uk-list-muted`     | Add this class to mute the marker.                               |
| `.uk-list-emphasis`  | Add this class to emphasize the marker.                          |
| `.uk-list-primary`   | Add this class to emphasize the marker with the primary color.   |
| `.uk-list-secondary` | Add this class to emphasize the marker with the secondary color. |

```html
<ul class="uk-list uk-list-disc uk-list-primary">…</ul>
```

```example
<div class="uk-child-width-expand@s" uk-grid>

    <div>
        <h4>Muted</h4>
        <ul class="uk-list uk-list-disc uk-list-muted">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Emphasis</h4>
        <ul class="uk-list uk-list-disc uk-list-emphasis">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Primary</h4>
        <ul class="uk-list uk-list-disc uk-list-primary">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Secondary</h4>
        <ul class="uk-list uk-list-disc uk-list-secondary">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>
```

**Note** The color modifiers don't work in Chrome and Edge because the `::marker` pseudo-element is not supported yet. Vote this [Chromium issue](https://bugs.chromium.org/p/chromium/issues/detail?id=457718) up, to give it more attention.

***

## Image bullet modifier

Add the `.uk-list-bullet` class to set a custom image bullet as marker of a list item. Mind, that it can not be combined with color modifiers.

```html
<ul class="uk-list uk-list-bullet">…</ul>
```

```example
<ul class="uk-list uk-list-bullet">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Divider modifier

Add the `.uk-list-divider` class to separate list items with lines.

```html
<ul class="uk-list uk-list-divider">…</ul>
```

```example
<ul class="uk-list uk-list-divider">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Striped modifier

Add zebra-striping to a list using the `.uk-list-striped` class.

```html
<ul class="uk-list uk-list-striped">…</ul>
```

```example
<ul class="uk-list uk-list-striped">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

## Size modifier

Add one of the following classes to increase or decrease the spacing between list items. You can combine this with any of the other list modifiers.

| Class               | Description                              |
|:--------------------|:-----------------------------------------|
| `.uk-list-large`    | Increase the spacing between list items. |
| `.uk-list-collapse` | Remove the spacing between list items.   |

```html
<ul class="uk-list uk-list-large">…</ul>
```

```example
<h4>Large</h4>

<div class="uk-child-width-expand@s" uk-grid>

    <div>
        <ul class="uk-list uk-list-large">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="uk-list uk-list-large uk-list-disc">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="uk-list uk-list-large uk-list-divider">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="uk-list uk-list-large uk-list-striped">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>

<h4>Collapse</h4>

<div class="uk-child-width-expand@s" uk-grid>

    <div>
        <ul class="uk-list uk-list-collapse">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="uk-list uk-list-collapse uk-list-disc">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="uk-list uk-list-collapse uk-list-divider">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <ul class="uk-list uk-list-collapse uk-list-striped">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

</div>
```
