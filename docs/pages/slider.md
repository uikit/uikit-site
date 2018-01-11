# Slider

<p class="uk-text-lead">Create a responsive carousel slider</p>

The slider is a fully customizable and responsive component that supports touch and swipe navigation as well as mouse drag for desktops. 

## Usage

To apply this component, add the `uk-slider` attribute and create a list of slides with the `.uk-slider-items` class. 

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

**Note** To activate autoplay, just add the `autoplay: 1` option to the attribute.

***

## Widths and Gutter

To define the widths of the slider items, use the [Width component](width.md). Either apply the `.uk-child-width-*` classes to define the width of all slider items or apply individual widths for each list item using the `.uk-width-*` classes. 

To apply some spacing between your elements, add the `.uk-grid` class to the slider. The elements will then be spaced according to the grid gutter.

**Note** You can use the modifiers `.uk-grid-medium` and `.uk-grid-small` to change the gutter.

***

## Auto Widths

If no width class is applied, the width of your content will define the width of the list items.

***

## Center

By default, elements of the slider always are aligned to the left. To center the list items, add the attribute `center="1"`.

***

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable this behavior, add the attribute `finite="1"`.

***

## Slide Sets

To loop through a set of slides instead of single items, add the attribute `set="1"`. 

***

## Navigation

To navigate through your slides, just use the `.uk-slider-item` class. To target the slides, set the attribute of every nav item to the number of the respective slider item. The elements with the `.uk-slider-item` class need to be inside the `uk-slider` container. Setting the attribute to `next` and `previous` will switch to the adjacent slides.

```html
<div uk-slider>

    <ul class="uk-slider-items">...</ul>

    <a href="#" uk-slider-item="previous">...</a>
    <a href="#" uk-slider-item="next">...</a>

    <ul class="uk-slider-nav"></ul>

</div>
```

The flexibility of the slider component allows you to use any of the other UIkit components to navigate through items. For example the [Slidenav](slidenav.md), [Dotnav](dotnav.md) and [Thumbnav](thumbnav.md) components can be used to style the slider navigations as shown below.

**Note** For better visibility of overlaying navigations, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

```example

```


If there is no item specific content in the navigation items, add the `.uk-slider-nav` class to the navigation to generate its items automatically using `<li><a href="#"></a></li>` as markup. This is a useful shortcut when using the [Dotnav](dotnav.md).

```html
<div uk-slider>

    <ul class="uk-slider-items">...</ul>

    <ul class="uk-slider-nav uk-dotnav"></ul>

</div>
```

***

## Viewport height

Adding the `uk-height-viewport` attribute from the [Utility component](utility.md) to the list of slider items will stretch the height to fill the whole viewport. 

```html
<div uk-slider>
    <ul class="uk-slider-items" uk-height-viewport>...</ul>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Slider

| Option              | Value           | Default | Description                                                           |
|:--------------------|:----------------|:--------|:----------------------------------------------------------------------|
| `autoplay`          | Boolean         | `0` | Slider autoplays.                                                  |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode.                  |
| `center`            | Boolean         | `0` | Center the active slide.                                              |
| `finite`            | Boolean         | `0` | Disable infinite sliding.                                             |
| `pause-on-hover`    | Boolean         | `0` | Pause autoplay mode on hover.                                         |
| `velocity`          | Number          | `1`     | The animation velocity (pixel/ms).                                    |
| `index`             | String, Integer | `0`     | Slider item to show. 0 based index.                                |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.slider(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name             | Description                                               |
|:-----------------|:----------------------------------------------------------|
| `beforeitemshow` | Fires before an item is shown.                            |
| `itemshow`       | Fires after an item is shown.                             |
| `itemshown`      | Fires after an item's show animation has completed.       |
| `beforeitemhide` | Fires before an item is hidden.                           |
| `itemhide`       | Fires after an item's hide animation has started.         |
| `itemhidden`     | Fires after an item's hide animation has completed.       |

### Methods

The following methods are available for the component:

#### Show

```js
UIkit.slider(element).show(index);
```

Shows the Slider item.

#### startAutoplay

```js
UIkit.slider(element).startAutoplay();
```

Starts the Slider autoplay.

#### stopAutoplay

```js
UIkit.slider(element).stopAutoplay();
```

Stops the Slider autoplay.
