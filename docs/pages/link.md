# Link

<p class="uk-text-lead">Define different styles to integrate links into specific content.</p>

## Muted modifier

The [Base component](base.md) determines the default link color. If you want the link to a apply a muted style instead, just add the `.uk-link-muted` class to the anchor element. You can also add the class to a parent element and it will be applied to all `<a>` elements inside it.

```html
<a class="uk-link-muted" href="#"></a>
```

```example
<a class="uk-link-muted" href="#">Link</a>

<p class="uk-link-muted">Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit, sed do <a href="#">eiusmod</a> tempor incididunt ut <a href="#">labore et</a> dolore magna aliqua.</p>
```

***

## Text modifier

To make a link appear like body text and apply a hover effect, add the `.uk-link-text` class to the anchor element. You can also add the class to a parent element and it will be applied to all `<a>` elements inside it. This is useful for link lists in the page footer.

```html
<a class="uk-link-text" href="#"></a>
```

```example
<ul class="uk-list uk-link-text">
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
</ul>
```

***

## Heading modifier

To style a link inside a heading element, add the `.uk-link-heading` class to the anchor element.

```html
<h3><a class="uk-link-heading" href="#"></a></h3>
```

```example
<h3><a class="uk-link-heading" href="#">Heading</a></h3>
```

***

## Reset modifier

To reset a link's color, so that it inherits the color from its parent, add the `.uk-link-reset` class. There won't be any hover effect at all. This is useful for links inside heading elements. You can also add the class to a parent element and it will be applied to all `<a>` elements inside it.

```example
<a class="uk-link-reset" href="#">Link</a>

<h3><a class="uk-link-reset" href="#">Heading</a></h3>
```

***

## Toggle

To toggle the hover state of a link when hovering a parent element, add the `.uk-link-toggle` class to a parent element. Add one of the `.uk-link-*` classes to any child element to apply the actual effect. This is useful if a whole card is linked but the heading should have a hover effect like it would have when it's linked.

```html
<a class="uk-link-reset" href="#">
    <span class="uk-link-heading"></span>
</a>
```

```example
<a href class="uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-width-medium">
    <h3 class="uk-card-title"><span class="uk-link-heading">Heading</span></h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</a>
```