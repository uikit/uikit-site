# Slider

<p class="uk-text-lead">Create a responsive carousel slider.</p>

The Slider component is fully responsive and supports touch and swipe navigation as well as mouse drag for desktops. It even accelerates to keep up with your pace when you click through previous and next navigation. All animations are hardware accelerated for a smoother performance.

## Usage

To apply this component, add the `uk-slider` attribute to a container element and create a list of slides with the `.uk-slider-items` class. Add an image or any other content to each item.

To define the widths of the slider items, use the [Width component](width.md). Either apply the `.uk-child-width-*` classes to define the width of all slider items or apply individual widths for each list item using the `.uk-width-*` classes. If no specific width is set, each item's width depends on the dimensions of the content itself.

```html
<div uk-slider>
    <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
        <li>
            <img src="" alt="">
        </li>
    </ul>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider>

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        <li>
            <img src="../docs/images/slider1.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider2.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider3.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider4.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider5.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider1.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider2.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider3.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider4.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>9</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider5.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

***

## Container

The `.uk-slider-container` class is responsible for the clipping of the slider items. By default, the `uk-slider` attribute applies this class to the same element. Alternatively, you can add this class manually to any element within the slider. That way, you can control which container clips the slider items.

```html
<div uk-slider>

    <div class="uk-slider-container">
        <ul class="uk-slider-items uk-child-width-1-4">
            <li>
                <img src="" alt="">
            </li>
        </ul>
    </div>

</div>
```

***

## Gutter

To apply a gutter to the slider items, use the [Grid component](grid.md) and add the `.uk-grid` class to the slider. The elements will then be spaced according to the grid gutter. You can use the modifiers like `.uk-grid-small` to change the gutter.

```html
<div uk-slider>
    <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
        <li>
            <img src="" alt="">
        </li>
    </ul>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider>

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider1.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>1</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider2.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>2</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider3.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>3</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider4.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>4</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider5.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>5</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider1.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>6</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider2.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>7</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider3.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>8</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider4.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>9</h1></div>
            </div>
        </li>
        <li>
            <div class="uk-panel">
                <img src="../docs/images/slider5.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>10</h1></div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

***

## Center

By default, items of the slider always are aligned to the left. To center the list items, just add `center: true` to the attribute.

```html
<div uk-slider="center: true">...</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider="center: true">

    <ul class="uk-slider-items uk-grid">
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../docs/images/photo.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>1</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../docs/images/dark.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>2</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../docs/images/light.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>3</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../docs/images/photo2.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>4</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img src="../docs/images/photo3.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>5</h1></div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

**Note** In this example, we add the `.uk-width-3-4` class to each item, which makes the slider look very similar to a slideshow.

***

## Autoplay

To activate autoplay, just add the `autoplay: true` option to the attribute. You can also set the interval in milliseconds between switching slides using `autoplay-interval: 6000`. To pause autoplay when hovering the slider, use `pause-on-hover: true`.

```html
<div uk-slider="autoplay: true">...</div>
```

***

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable this behavior, just add the `finite: true` option to the attribute.

```html
<div uk-slider="finite: true">...</div>
```

***

## Slide Sets

To loop through a set of slides instead of single items, just add `sets: true` to the attribute.

```html
<div uk-slider="sets: true">...</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider="sets: true">

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
        <li>
            <img src="../docs/images/slider1.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider2.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider3.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider4.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider5.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider1.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider2.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider3.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider4.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>9</h1></div>
        </li>
        <li>
            <img src="../docs/images/slider5.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

***

## Navigation

To navigate through your slides, just use the `uk-slider-item` attribute. To target the slides, set the attribute of every nav item to the index number of the respective slider item. The elements with the `uk-slider-item` attribute need to be inside the `uk-slider` container. Setting the attribute to `next` and `previous` will switch to the adjacent slides.

```html
<div uk-slider>

    <ul class="uk-slider-items">...</ul>

    <a href="#" uk-slider-item="previous">...</a>
    <a href="#" uk-slider-item="next">...</a>

    <ul>
        <li uk-slider-item="0"><a href="#">...</a></li>
        <li uk-slider-item="1"><a href="#">...</a></li>
        <li uk-slider-item="2"><a href="#">...</a></li>
    </ul>

</div>
```

The flexibility of the Slideshow component allows you to use any of the other UIkit components to navigate through items. For example the [Slidenav](slidenav.md), [Dotnav](dotnav.md) and [Thumbnav](thumbnav.md) components can be used to style the slideshow navigations.

If there is no item specific content in the navigation items, you can also add the `.uk-slideshow-nav` class instead of adding navigation items manually. It will generate its items automatically using `<li><a href="#"></a></li>` as markup. This is a useful shortcut when using the [Dotnav](dotnav.md).

```html
<div uk-slider>

    <ul class="uk-slider-items">...</ul>

    <ul class="uk-slider-nav uk-dotnav"></ul>

</div>
```

```example
<div uk-slider>

    <div class="uk-position-relative uk-visible-toggle uk-light">

        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
            <li>
                <img src="../docs/images/slider1.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>1</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider2.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>2</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider3.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>3</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider4.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>4</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider5.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>5</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider1.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>6</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider2.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>7</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider3.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>8</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider4.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>9</h1></div>
            </li>
            <li>
                <img src="../docs/images/slider5.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>10</h1></div>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
```

**Note** For better visibility of overlaying navigations, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

***

## Navigation outside

To place a navigation outside of a slider, add the `.uk-position-center-left-out` and the `.uk-position-center-right-out` class from the [Position component](position.md) to the `previous` and `next` navigation. Make sure the `.uk-slider-container` class, which is responsible for the clipping of the slider items, doesn't clip the navigation, too.

```html
<div uk-slider>

    <div class="uk-position-relative">

        <div class="uk-slider-container">
            <ul class="uk-slider-items">...</ul>
        </div>

        <a class="uk-position-center-left-out" href="#" uk-slider-item="previous">...</a>
        <a class="uk-position-center-left-out" href="#" uk-slider-item="next">...</a>

    </div>

    <ul class="uk-slider-nav uk-dotnav"></ul>

</div>
```

```example
<div uk-slider>

    <div class="uk-position-relative">

        <div class="uk-slider-container uk-light">
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                <li>
                    <img src="../docs/images/slider1.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>1</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider2.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>2</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider3.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>3</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider4.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>4</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider5.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>5</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider1.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>6</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider2.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>7</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider3.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>8</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider4.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>9</h1></div>
                </li>
                <li>
                    <img src="../docs/images/slider5.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>10</h1></div>
                </li>
            </ul>
        </div>

        <div class="uk-hidden@s uk-light">
            <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>

        <div class="uk-visible@s">
            <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
```

***

## Viewport height

Adding the `uk-height-viewport` attribute from the [Utility component](utility.md#viewport-height) to the list of slider items will stretch the height of the `<ul>` and `<li>` elements to fill the whole viewport height. Since the width and height now aren't defined by the item's content anymore, you have to use absolute positioning for the content.

Use the [Cover component](cover.md) so that images cover the whole item area and are clipped. The `.uk-grid-match` class from the [Grid component](grid.md#match-height) matches the height of the direct child of each item. This is useful in this example, since the child element now applies the same width and height as the list item.

```html
<div uk-slider>
    <ul class="uk-slider-items uk-child-width-1-3@m uk-grid-match" uk-height-viewport="min-height: 300">
        <li>
            <div class="uk-cover-container">
                <img src="" alt="" uk-cover>
            </div>
        </li>
    </ul>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider="center: true">

    <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
        <li class="uk-width-3-4">
            <div class="uk-cover-container">
                <img src="../docs/images/photo.jpg" alt="" uk-cover>
                <div class="uk-position-center uk-panel"><h1>1</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-cover-container">
                <img src="../docs/images/dark.jpg" alt="" uk-cover>
                <div class="uk-position-center uk-panel"><h1>2</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-cover-container">
                <img src="../docs/images/light.jpg" alt="" uk-cover>
                <div class="uk-position-center uk-panel"><h1>3</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-cover-container">
                <img src="../docs/images/photo2.jpg" alt="" uk-cover>
                <div class="uk-position-center uk-panel"><h1>4</h1></div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-cover-container">
                <img src="../docs/images/photo3.jpg" alt="" uk-cover>
                <div class="uk-position-center uk-panel"><h1>5</h1></div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

**Note** This example is set to 70% of the viewport height.

***

## Item Content

The slider is not restricted to images. Any content can be used like text, videos, images with text overlays or ken burns effect. Here is an example using the [Card component](card.md).

```example
<div uk-slider="center: true">

    <div class="uk-position-relative uk-visible-toggle uk-light">

        <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../docs/images/photo.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../docs/images/dark.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../docs/images/light.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../docs/images/photo2.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../docs/images/photo3.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
```

**Note** Since the slider effect needs a clipping container, box shadows of content items are also clipped. To get the best visual result, it's recommended to use the `uk-slider="center: true"` mode if your content items have a box shadow.

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Slider

| Option              | Value   | Default | Description                                          |
|:--------------------|:--------|:--------|:-----------------------------------------------------|
| `autoplay`          | Boolean | `false` | Slider autoplays.                                    |
| `autoplay-interval` | Number  | `7000`  | The delay between switching slides in autoplay mode. |
| `center`            | Boolean | `false` | Center the active slide.                             |
| `finite`            | Boolean | `false` | Disable infinite sliding.                            |
| `index`             | Number  | `0`     | Slider item to show. 0 based index.                  |
| `pause-on-hover`    | Boolean | `false` | Pause autoplay mode on hover.                        |
| `sets`              | Boolean | `false` | Slide in sets.                                       |
| `velocity`          | Number  | `1`     | The animation velocity (pixel/ms).                   |

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

Shows the slider item.

#### startAutoplay

```js
UIkit.slider(element).startAutoplay();
```

Starts the slider autoplay.

#### stopAutoplay

```js
UIkit.slider(element).stopAutoplay();
```

Stops the slider autoplay.
