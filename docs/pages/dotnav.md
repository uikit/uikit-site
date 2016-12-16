# Dotnav

<p class="uk-text-lead">Create a dot navigation to operate slideshows or to scroll to different page sections.</p>

## Usage

To create a navigation with dots, just add the `.uk-dotnav` class to an `<ul>` element and nest `<a>` elements within the list. This is perfect to create a typical slideshow navigation. This component is built with Flexbox. So to align a dotnav, you can use [Flex component](flex.md).

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
    <li><a href="#">Item 6</a></li>
</ul>
```

***

## Vertical dotnav

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
    <li><a href="#">Item 6</a></li>
</ul>
```


***

## Dotnav and images

For better visibility on images, for example when using the dotnav as a slideshow navigation, just put it inside a container with the `.uk-light` class.

```html
<div class="uk-inline">
    <img src="" alt="">
    <ul class="uk-dotnav">...</ul>
</div>
```

```example
<div class="uk-child-width-1-2@m uk-grid-small" uk-grid>
    <div>
        <div class="uk-position-relative uk-light">
            <img src="../docs/images/dark.jpg" alt="">
            <ul class="uk-dotnav uk-position-medium uk-position-bottom-center">
                <li class="uk-active"><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
                <li><a href="#">Item 5</a></li>
                <li><a href="#">Item 6</a></li>
            </ul>
        </div>
    </div>
    <div>
        <div class="uk-position-relative">
            <img src="../docs/images/light.jpg" alt="">
            <ul class="uk-dotnav uk-dotnav-vertical uk-position-medium uk-position-center-right">
                <li class="uk-active"><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
                <li><a href="#">Item 5</a></li>
                <li><a href="#">Item 6</a></li>
            </ul>
        </div>
    </div>
</div>
```

***

## Vertically center in viewport

The dotnav can also be centered vertically inside your viewport using the [Position component](position.md). This is useful for typical onepage websites.

```html
<div class="uk-position-medium uk-position-center-right uk-position-fixed">
    <ul class="uk-dotnav uk-dotnav-vertical">...</ul>
</div>
```
