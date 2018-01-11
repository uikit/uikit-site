# Slider

<p class="uk-text-lead">Create a responsive carousel slider.</p>

The Slider component is fully responsive and supports touch and swipe navigation as well as mouse drag for desktops. It even accelerates to keep up with your pace when you click through previous and next navigation. All animations are hardware accelerated for a smoother performance.

## Usage

To apply this component, add the `uk-slider` attribute to a container element and create a list of slides with the `.uk-slider-items` class. Add an image or any other content to each item. If no specific width is set, each item's width depends on the dimensions of the content itself.

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
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider>

    <ul class="uk-slider-items">
        <li>
            <img src="../docs/images/photo.jpg" width="300" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="../docs/images/avatar.jpg" width="200" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="../docs/images/size-v.jpg" width="50" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" width="300" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" width="300" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="../docs/images/size-h.jpg" width="800" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="../docs/images/size1.jpg" width="300" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="../docs/images/size2.jpg" width="280" height="200" alt="">
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

**Note** To activate autoplay, just add the `autoplay: true` option to the attribute.

***

## Item Widths

To define the widths of the slider items, use the [Width component](width.md). Either apply the `.uk-child-width-*` classes to define the width of all slider items or apply individual widths for each list item using the `.uk-width-*` classes.

```html
<div uk-slider>
    <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m">
        <li>
            <img src="" alt="">
        </li>
    </ul>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider>

    <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m">
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>9</h1></div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

## Gutter

To apply a gutter to the slider items, use the [Grid component](grid.md) and add the `.uk-grid` class to the slider. The elements will then be spaced according to the grid gutter. You can use the modifiers like `.uk-grid-small` to change the gutter.

```html
<div uk-slider>
    <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m uk-grid">
        <li>
            <img src="" alt="">
        </li>
    </ul>
</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider>

    <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m uk-grid">
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>9</h1></div>
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
        <li class="uk-width-4-5">
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li class="uk-width-4-5">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li class="uk-width-4-5">
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
```

***

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable this behavior, just add `finite: true` to the attribute.

```html
<div uk-slider="finite: true">...</div>
```

***

## Slide Sets

To loop through a set of slides instead of single items, just add `set: true` to the attribute.

```html
<div uk-slider="set: true">...</div>
```

```example
<div class="uk-position-relative uk-visible-toggle uk-light" uk-slider="set: true">

    <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m">
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="../docs/images/photo.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>9</h1></div>
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

        <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@m">
            <li>
                <img src="../docs/images/photo.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>1</h1></div>
            </li>
            <li>
                <img src="../docs/images/dark.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>2</h1></div>
            </li>
            <li>
                <img src="../docs/images/light.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>3</h1></div>
            </li>
            <li>
                <img src="../docs/images/photo.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>4</h1></div>
            </li>
            <li>
                <img src="../docs/images/dark.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>5</h1></div>
            </li>
            <li>
                <img src="../docs/images/light.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>6</h1></div>
            </li>
            <li>
                <img src="../docs/images/photo.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>7</h1></div>
            </li>
            <li>
                <img src="../docs/images/dark.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>8</h1></div>
            </li>
            <li>
                <img src="../docs/images/light.jpg" alt="">
                <div class="uk-position-center uk-panel"><h1>9</h1></div>
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

## Viewport height

Adding the `uk-height-viewport` attribute from the [Utility component](utility.md) to the list of slider items will stretch the height to fill the whole viewport.

```html
<div uk-slider>
    <ul class="uk-slider-items" uk-height-viewport="min-height: 300">...</ul>
</div>
```

***

## Item Content

The slider is not restricted to images. Any content can be used like text, videos, images with text overlays or ken burns effect. Here is an example using the [Card component](card.md).

```example
<div uk-slider>

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
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Slider

| Option              | Value           | Default | Description                                          |
|:--------------------|:----------------|:--------|:-----------------------------------------------------|
| `autoplay`          | Boolean         | `false` | Slider autoplays.                                    |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode. |
| `center`            | Boolean         | `false` | Center the active slide.                             |
| `finite`            | Boolean         | `false` | Disable infinite sliding.                            |
| `pause-on-hover`    | Boolean         | `false` | Pause autoplay mode on hover.                        |
| `sets`              | Boolean         | `false` | Slide in sets.                                       |
| `velocity`          | Number          | `1`     | The animation velocity (pixel/ms).                   |
| `index`             | String, Integer | `0`     | Slider item to show. 0 based index.                  |

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
