# Link

<p class="uk-text-lead">Define different styles to integrate links into specific content.</p>

## Link muted

The [Base component](base.md) determines the default link color. If you want the link to a apply a muted style instead, just add the `.uk-link-muted` class to the anchor element.

```html
<a class="uk-link-muted" href=""></a>
```

You can also add the class to a parent element and it will be applied to all `<a>` elements inside it.

```example
<div class="uk-margin-small">
    <a class="uk-link-muted" href="#">Link</a>
</div>

<ul class="uk-link-muted">
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
</ul>
```

***

## Link reset

To reset a link's color, so that it inherits the color from its parent, add the `.uk-link-reset` class.

```example
<a class="uk-link-reset" href="#">Link</a>
```