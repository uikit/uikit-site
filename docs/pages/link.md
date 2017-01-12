# Link

<p class="uk-text-lead">Define different styles to integrate links into specific content.</p>

## Link muted

The [Base component](base.md) determines the default link color. If you want the link to a apply a muted style instead, just add the `.uk-link-muted` class to the anchor element. You can also add the class to a parent element and it will be applied to all `<a>` elements inside it.

```html
<a class="uk-link-muted" href=""></a>
```

```example
<a class="uk-link-muted" href="#">Link</a>

<p class="uk-link-muted">Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit, sed do <a href="#">eiusmod</a> tempor incididunt ut <a href="#">labore et</a> dolore magna aliqua.</p>
```

***

## Link reset

To reset a link's color, so that it inherits the color from its parent, add the `.uk-link-reset` class. You can also add the class to a parent element and it will be applied to all `<a>` elements inside it.

```example
<a class="uk-link-reset" href="#">Link</a>
```