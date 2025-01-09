# Pagination

<p class="uk-text-lead">Easily create a nice looking pagination to navigate through pages.</p>

## Usage

The Pagination component consists of button-like styled links, that are aligned side by side in a horizontal list.

| Class            | Description                                                                                                                    |
|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `.uk-pagination` | Add this class to a `<ul>` element to define the Pagination component. Use `<a>` elements as pagination items within the list. |
| `.uk-active`     | Add this class to a list item to apply an active state and use a `<span>` instead of an `<a>` element.                         |
| `.uk-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

```html
<ul class="uk-pagination">
    <li><a href=""></a></li>
    <li class="uk-active"><span></span></li>
    <li class="uk-disabled"><span></span></li>
</ul>
```

```example
<nav aria-label="Pagination">
    <ul class="uk-pagination" uk-margin>
        <li><a href="#"><span uk-pagination-previous></span></a></li>
        <li><a href="#">1</a></li>
        <li class="uk-disabled"><span>…</span></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li class="uk-active"><span aria-current="page">7</span></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">10</a></li>
        <li class="uk-disabled"><span>…</span></li>
        <li><a href="#">20</a></li>
        <li><a href="#"><span uk-pagination-next></span></a></li>
    </ul>
</nav>
```

***

## Alignment

The Pagination component utilizes flexbox, so navigations can easily be aligned with the [Flex component](flex.md).

```html
<ul class="uk-pagination uk-flex-center">…</ul>
```

```example
<nav aria-label="Pagination">
    <ul class="uk-pagination uk-flex-center" uk-margin>
        <li><a href="#"><span uk-pagination-previous></span></a></li>
        <li><a href="#">1</a></li>
        <li class="uk-disabled"><span>…</span></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li class="uk-active"><span aria-current="page">7</span></li>
        <li><a href="#">8</a></li>
        <li><a href="#"><span uk-pagination-next></span></a></li>
    </ul>
</nav>

<nav aria-label="Pagination">
    <ul class="uk-pagination uk-flex-right uk-margin-medium-top" uk-margin>
        <li><a href="#"><span uk-pagination-previous></span></a></li>
        <li><a href="#">1</a></li>
        <li class="uk-disabled"><span>…</span></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li class="uk-active"><span aria-current="page">7</span></li>
        <li><a href="#">8</a></li>
        <li><a href="#"><span uk-pagination-next></span></a></li>
    </ul>
</nav>
```

***

## Previous and next

To apply a previous and next button, add the `uk-pagination-previous` or `uk-pagination-next` attribute to a `<span>` element inside a pagination item.

```html
<ul class="uk-pagination">
    <li><a href=""><span uk-pagination-previous></span></a></li>
    <li><a href=""><span uk-pagination-next></span></a></li>
</ul>
```

```example
<nav>
    <ul class="uk-pagination">
        <li><a href="#"><span class="uk-margin-xsmall-right" uk-pagination-previous></span> Previous</a></li>
        <li class="uk-margin-auto-left"><a href="#">Next <span class="uk-margin-xsmall-left" uk-pagination-next></span></a></li>
    </ul>
</nav>
```


***

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the Pagination component.

- Contain the pagination list within a `nav` element and set the `aria-label` property to describe the type of the provided navigation.
- Set the `aria-current="page"` property to the active item.

```html
<nav aria-label="Pagination">
    <ul class="uk-pagination">…</ul>
</nav>
```

The previous/next pagination adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *prev/next pagination items* have the `button` role and the `aria-label` property.

### Internationalization

The Pagination component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key          | Default              | Description             |
|--------------|----------------------|-------------------------|
| `label`      | `Next/Previous page` | `aria-label` attribute. |
