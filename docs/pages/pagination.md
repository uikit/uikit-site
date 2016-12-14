# Pagination

<p class="uk-text-lead">Easlily create a nicely looking pagination to navigate through pages.</p>

## Usage

The Pagination component consists of button-like styled links, that are aligned side by side in a horizontal list.

| Class            | Description                                                                                                                    |
|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `.uk-pagination` | Add this class to a `<ul>` element to define the Pagination component. Use `<a>` elements as pagination items within the list. |
| `.uk-active`     | Add this class to a list item to apply an active state and use a `<span>` instead of an `<a>` element.                         |
| `.uk-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

To apply an ellipsis without any styling, just use a `<span>` element instead of an `<a>` element.

```html
<ul class="uk-pagination">
    <li><a href="">...</a></li>
    <li class="uk-active"><span>...</span></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><span>...</span></li>
</ul>
```

```example
<ul class="uk-pagination" uk-margin>
    <li class="uk-disabled"><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="#">10</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
    <li class="uk-disabled"><a href="#"><span uk-pagination-next></span></a></li>
</ul>
```

***

## Alignment

The pagination component utilizes flexbox, so navigations can easily be aligned with the [Flex component](flex.md).

```html
<ul class="uk-pagination uk-flex-center">...</ul>
```

```example
<ul class="uk-pagination uk-flex-center" uk-margin>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>

<ul class="uk-pagination uk-flex-right uk-margin-medium-top" uk-margin>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span>7</span></li>
    <li><a href="#">8</a></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>
```

***

## Previous and Next

To apply a previous and next button, add the `uk-pagination-previous` or `uk-pagination-next` attribute to a `<span>` element inside a pagination item.

```html
<ul class="uk-pagination">
    <li><a href=""><span uk-pagination-previous></span>
    <li><a href=""><span uk-pagination-next></span>
</ul>
```

```example
<ul class="uk-pagination uk-flex-between">
    <li><a href="#"><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</a></li>
    <li><a href="#">Next <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
</ul>
```
