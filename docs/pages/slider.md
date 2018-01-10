# Slider

<p class="uk-text-lead">Create a responsive carousel slider</p>

The slider is a fully customizable and responsive component that supports touch and swipe navigation as well as mouse drag for desktops. 

## Usage

To apply this component, add the `uk-slider` attribute and create a list of slides with the class `uk-slider-items`. 
<
```html
<div uk-slider>
    <ul class="uk-slider-items">
        <li>
            <img src="" alt="">
        </li>
    </ul>
</div>
```

```example

```

**Note** To activate autoplay, just add `autoplay: true` to the attribute.

***

## Widths and Gutter

To set the widths of the slider items, use width classes from the UIkit grid. Either apply the `uk-child-width-*` classes for the slider to define width of all items of the slider or apply individual widths for each list item using `the uk-width-*` classes. 

If you want some spacing between your elements, add the `.uk-grid` class to the slider. The elements will then be spaced according to the grid gutter.

**Note** You can use the modifiers `uk-grid-medium` and `uk-grid-small` to change the gutter.

***

## Auto Widths

If no width class is applied, the width of your content will define the width of the list items.

***

## Center

By default, elements of the slider always align to the left edge of the slider. To center the list items set the attribute `center` to `"true"`.

***

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable infinite scrolling, set the attribute `finite` to `"false"`.

***

## Slide Sets





***

## Navigation

To navigate through your slides, just use the `uk-slideshow-item` attribute. To target the slides, set the attribute of every nav item to the number of the respective slideshow item. The elements with the `uk-slideshow-item` attribute need to be inside the `uk-slideshow`. Setting the attribute to `next` and `previous` will switch to the adjacent slides.

```html
<div uk-slider>

    <ul class="uk-slider-items">...</ul>

    <a href="#" uk-slider-item="previous">...</a>
    <a href="#" uk-slider-item="next">...</a>

    <ul class="uk-slider-nav"></ul>

</div>
```

The flexibility of the Slideshow component allows you to use any of the other UIkit components to navigate through items. For example the [Slidenav](slidenav.md), [Dotnav](dotnav.md) and [Thumbnav](thumbnav.md) components can be used to style the slideshow navigations as shown below.

**Note** For better visibility of overlaying navigations, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

```example

```

***

## Viewport height

Adding the `uk-height-viewport` attribute from the [Utility component](utility.md) to the list of slideshow items will stretch the height to fill the whole viewport. You can set the `min-height` option to define a minimum height.

```html
<div uk-slider>
    <ul class="uk-slider-items" uk-height-viewport>...</ul>
</div>
```

***

## Component options

...