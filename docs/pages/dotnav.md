# Dotnav

<p class="uk-text-lead">Create a dot navigation to operate slideshows or to scroll to different page sections.</p>

## Usage

The Dotnav component is perfect to create a typical slideshow navigation. To create a navigation with dots, use the following classes. This component is built with Flexbox. So to align a dotnav, you can use [Flex component](flex.md).

| Class           | Description                                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------------------|
| `.uk-dotnav`    | Add this class to a `<ul>` element to define the Dotnav component. Use `<a>` elements as nav items within the list. |
| `.uk-active `   | Add this class to a list item to apply an active state.                                                             |

```html
<ul class="uk-dotnav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

```example
<ul class="uk-dotnav">
    <li class="uk-active"><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
</ul>
```

***

## Vertical alignment

The dotnav can also be displayed vertically. Just add the `.uk-dotnav-vertical` modifier.

```html
<ul class="uk-dotnav uk-dotnav-vertical">...</ul>
```

```example
<ul class="uk-dotnav uk-dotnav-vertical">
    <li class="uk-active"><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
</ul>
```


***

## Dotnav and images

To position the dotnav on top of an element, add one of the `.uk-position-*` classes from the [Position component](position.md) to a `div` element wrapping the dotnav. For better visibility on images, for example when using the dotnav as a slideshow navigation, just put it inside a container with the `.uk-light` class from the [Inverse component](inverse.md).

```html
<div class="uk-inline uk-light">
    <img src="" alt="">
    <div class="uk-position-bottom-center uk-position-medium">
        <ul class="uk-dotnav">...</ul>
    </div>
</div>
```

```example
<div class="uk-child-width-1-2@m uk-grid-small" uk-grid>
    <div>
        <div class="uk-position-relative uk-light">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-bottom-center uk-position-medium">
                <ul class="uk-dotnav uk-flex-nowrap">
                    <li class="uk-active"><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-position-relative">
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center-right uk-position-medium">
                <ul class="uk-dotnav uk-dotnav-vertical">
                    <li class="uk-active"><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

***

## Vertically center in viewport

The dotnav can also be centered vertically inside your viewport by adding the `.uk-position-center-right` and `.uk-position-fixed` classes from the [Position component](position.md). This is useful for typical onepage websites.

```html
<div class="uk-position-center-right uk-position-medium uk-position-fixed">
    <ul class="uk-dotnav uk-dotnav-vertical">...</ul>
</div>
```
