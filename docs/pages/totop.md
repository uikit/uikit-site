# Totop

<p id="toptext" class="uk-text-lead">Create a simple to-top scroller.</p>

## Usage

The Totop component allows you to apply an icon to your to-top scroller. Just add the `uk-totop` attribute to an `<a>` element.

To add a smooth effect when using the totop to jump up the page, use the [Scroll component](scroll.md).

```html
<a href="" uk-totop></a>
```

```example
<a href="#" uk-totop uk-scroll></a>
```

***

## Accessibility

The Totop component handles setting the appropriate WAI-ARIA Roles and Properties.

The element has a `role="button"` and a property `aria-label`.

***

## i18n

The Totop component uses the following translation strings. Learn more about [translating components](i18n.md).

| Key     | Default       | Description             |
|---------|---------------|-------------------------|
| `label` | `Back to top` | `aria-label` attribute. |
