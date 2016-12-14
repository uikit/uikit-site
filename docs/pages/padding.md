# Padding

<p class="uk-text-lead">A collection of utility classes to add spacing between elements and their content.</p>

## Usage

To apply this component, add one of the following classes to a block element.

| Class               | Description                          |
|---------------------|--------------------------------------|
| `.uk-padding`       | Adds default padding to the element. |
| `.uk-padding-small` | Adds small padding to the element.   |
| `.uk-padding-large` | Adds large padding to the element.   |

```html
<div class="uk-padding"></div>
```

```example
<div class="uk-padding uk-background-muted uk-width-1-2@s">
    <div class="uk-padding-small uk-background">
        The gray area represents the regular padding that has been added to the parent container of this <code>&lt;div&gt;</code> element.
    </div>
</div>
```

***

## Remove Padding

In some cases you want to remove padding from an element, rather than adding it. To do so, apply one of the following classes.

| Class                           | Description                                     |
|---------------------------------|-------------------------------------------------|
| `.uk-padding-remove`            | Removes all padding from an element.            |
| `.uk-padding-remove-top`        | Removes top padding from an element.            |
| `.uk-padding-remove-bottom`     | Removes bottom padding from an element.         |
| `.uk-padding-remove-vertical`   | Removes top and bottom padding from an element. |
| `.uk-padding-remove-horizontal` | Removes left and right padding from an element. |

```example
<div class="uk-padding uk-padding-remove-bottom uk-background-muted uk-width-1-2@s">
    <div class="uk-padding-small uk-background">
        The gray area represents the regular padding that has been added to the parent container of this <code>&lt;div&gt;</code> element.
    </div>
</div>
```
