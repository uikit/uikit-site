# Description list

<p class="uk-text-lead">Easily create nicely looking description lists, which come in different styles.</p>


There is no component class necessary to create a description list, but UIkit provides a couple of modifier classes to display the list in a different style.

***

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
    <dt>Description lists</dt>
    <dd>A description list defines terms and their corresponding descriptions.</dd>
    <dt>Lorem ipsum</dt>
    <dd>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>A long term is truncated</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
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
    <dt>Description lists</dt>
    <dd>A description list defines terms and their corresponding descriptions.</dd>
    <dt>Lorem ipsum</dt>
    <dd>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>A long term is truncated</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</dl>
```

***

## Display as grid

To display terms and descriptions side by side, you can use the Description list component in combination with the [Grid](grid.md) and [Width](width.md) components. That way you can also define the responsive behaviour, so that the style will change back to the stacked description list on narrow viewports, like phones.

```html
<dl class="uk-grid-medium" uk-grid>
    <dt class="uk-width-1-3@s"></dt>
    <dd class="uk-width-2-3@s"></dd>
</dl>
```

```example
<dl class="uk-grid-medium" uk-grid>
    <dt class="uk-width-1-3@s">Description lists</dt>
    <dd class="uk-width-2-3@s">A description list defines terms and their corresponding descriptions.</dd>
    <dt class="uk-width-1-3@s">Lorem ipsum</dt>
    <dd class="uk-width-2-3@s">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt class="uk-width-1-3@s uk-text-truncate">A long term is truncated</dt>
    <dd class="uk-width-2-3@s">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</dl>
```