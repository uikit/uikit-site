# Slideshow

<p class="uk-text-lead">Create a responsive slideshow with images and videos.</p>


## Usage



***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Lightbox

| Option      | Value        | Default | Description                                          |
|-------------|--------------|---------|------------------------------------------------------|
| `animation` | String       | `slide` | Slideshow animation mode: `slide`, `fade` or `scale`. |
| `autoplay` | Number | `0` | Slideshow autoplays. (Delay in milliseconds)|
| `autoplay-interval`  | Number | `0`   | The delay between switching slides in autoplay mode. |
| `pause-on-hover` | Boolean | false | Pause autoplay mode on hover.|
| `velocity` | Number | 1 | The animation velocity (pixel/ms). |
| `ratio` | Boolean, String | 16:9 | The ratio. (`false` prevents height adjustment) |
| `minHeight` | Boolean, Number | `false` | The minimum height. |
| `maxHeight` | Boolean, Number | `false` | The maximum height. |
| `index` | String, Integer | 0 | Slideshow item to show. 0 based index.|

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.slideshow(element, options);
```

### Events

These events will be triggered on elements with this component attached.

| Name | Description |
| --- | --- |
| `beforeshow` | Fires before the Slideshow is shown. |
| `beforehide` | Fires before the Slideshow is hidden. |
| `show` | Fires after the Slideshow is shown. |
| `shown` | Fires after the Slideshow's show animation has completed. |
| `hide` | Fires after the Slideshow's hide animation has started. |
| `hidden` | Fires after the Slideshow is hidden. |
| `beforeitemshow` | Fires before an item is shown. |
| `itemshow` | Fires after an item is shown. |
| `itemshown` | Fires after an item's show animation has completed. |
| `beforeitemhide` | Fires before an item is hidden. |
| `itemhide` | Fires after an item's hide animation has started. |
| `itemhidden` | Fires after an item's hide animation has completed. |

### Methods

These methods are available on the component.

#### Show

```js
UIkit.slideshow(element).show(index);
```

Shows the Slideshow's item.

#### startAutoplay

```js
UIkit.slideshow(element).startAutoplay();
```

Starts the Slideshow's autoplay.

#### stopAutoplay

```js
UIkit.slideshow(element).stopAutoplay();
```

Stops the Slideshow's autoplay.
