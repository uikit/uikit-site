# Description list

<p class="uk-text-lead">Easily create nicely looking description lists, which come in different styles.</p>

## Usage

Add the `.uk-description-list` class to display terms and descriptions below each other.

```html
<dl class="uk-description-list">
    <dt></dt>
    <dd></dd>
</dl>
```

```example
<dl class="uk-description-list">
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
</dl>
```

***

## Divider modifier

Add the `.uk-description-list-divider` class to add a horizontal line between list items.

```html
<dl class="uk-description-list uk-description-list-divider">
    <dt></dt>
    <dd></dd>
</dl>
```

```example
<dl class="uk-description-list uk-description-list-divider">
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
    <dt>Description term</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
</dl>
```

***

## Display as grid

To display terms and descriptions side by side, you can use the Description list component in combination with the [Grid](grid.md) and [Width](width.md) components. That way you can also define the responsive behavior, so that the style will change back to the stacked description list on narrow viewports, like phones.

```html
<dl class="uk-description-list" uk-grid>
    <dt class="uk-width-1-3@s"></dt>
    <dd class="uk-width-2-3@s"></dd>
</dl>
```

```example
<dl class="uk-description-list" uk-grid>
    <dt class="uk-width-1-3@s">Description term</dt>
    <dd class="uk-width-2-3@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
    <dt class="uk-width-1-3@s">Description term</dt>
    <dd class="uk-width-2-3@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
    <dt class="uk-width-1-3@s uk-text-truncate">A long term is truncated</dt>
    <dd class="uk-width-2-3@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
</dl>
```
