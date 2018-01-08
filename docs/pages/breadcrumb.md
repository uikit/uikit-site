# Breadcrumb

<p class="uk-text-lead">Create breadcrumbs to show users their location within a website.</p>

## Usage

The Breadcrumb component consists of links, which are aligned side by side and separated by a divider. Add the `.uk-breadcrumb` class to a `<ul>` element to define the component. Use `<a>` elements as breadcrumb items within the list.

An active state is automatically applied to the last `<li>` element. Use a `<span>` instead of the `<a>` element to disable the item.

```
<ul class="uk-breadcrumb">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><span></span></li>
</ul>
```

**Note** You can also disable any other item within the list. Just add the `.uk-disabled` class to the `<li>` element.

```example
<ul class="uk-breadcrumb">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li class="uk-disabled"><a href="#">Disabled</a></li>
    <li><span>Active</span></li>
</ul>
```
