# Breadcrumb

<p class="uk-text-lead">Create breadcrumbs to show users their location within a website.</p>

## Usage

The Breadcrumb component consists of links, which are aligned side by side and separated by a divider.

| Class | Description |
| --- | --- |
| `.uk-breadcrumb` | Add this class to a `<ul>` element to define the Breadcrumb component. Use `<a>` elements as breadcrumb items within the list. |
| `.uk-disabled` | Add this class to a list item to apply a disabled state. |


```
<ul class="uk-breadcrumb">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li class="uk-disabled"><a href=""></a></li>
</ul>
```


```example
<ul class="uk-breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Category</a></li>
    <li class="uk-disabled"><a href="#">Post</a></li>
</ul>
```
