# Breadcrumb

<p class="uk-text-lead">Create breadcrumbs to show users their location within a website.</p>

## Usage

The Breadcrumb component consists of links, which are aligned side by side and separated by a divider. Add the `.uk-breadcrumb` class to a `<ul>` element to define the component. Use `<a>` elements as breadcrumb items within the list. An active state is automatically applied to the last `<li>` element.

To add list items without a link, use a `<span>` element instead of an `<a>`. Alternatively, disable an `<a>` element by adding the `.uk-disabled` class to the `<li>` element and remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation.

```html
<ul class="uk-breadcrumb">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><span></span></li>
</ul>
```

```example
<nav aria-label="Breadcrumb">
    <ul class="uk-breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Linked Category</a></li>
        <li class="uk-disabled"><a>Disabled Category</a></li>
        <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
    </ul>
</nav>
```

***

## Accessibility

In order for the Breadcrumb component to adhere to the [Breadcrumb design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/), set the appropriate WAI-ARIA roles, states and properties.

- Contain the breadcrumb list within a `nav` element and set the `aria-label` property to describe the type of the provided navigation.
- If the last item is the current page and a link, set the `aria-current="page"` property.

```html
<nav aria-label="Breadcrumb">
    <ul class="uk-breadcrumb">…</ul>
</nav>
```
