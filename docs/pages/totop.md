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

The Totop component automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *totop icon* has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Internationalization

The Totop component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key     | Default       | Description             |
|---------|---------------|-------------------------|
| `label` | `Back to top` | `aria-label` attribute. |
