# Lightbox



## Usage



***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

### Lightbox

| Option    | Value                     | Default | Description                                      |
|-----------|---------------------------|---------|--------------------------------------------------|
| `animation`    | String | `slide`   | Lightbox animation mode: `slide`, `fade` or `scale`.  |
| `toggle`    | CSS selector | `a`   | Toggle selector - triggers the lightbox.                |

### Lightbox Panel

| Option    | Value                     | Default | Description                                      |
|-----------|---------------------------|---------|--------------------------------------------------|
| `animation` | String | `slide` | Lightbox animation mode: `slide`, `fade` or `scale`.  |
| `duration`  | Number | `400`   | The animation duration. |
| `index`     | Number | `0`   | The initial item to show. (zero based) |
| `preload`   | Number | `1`   | The number of items to preload. (left and right of the currently active item) |
| `items`     | Array  | `[]`   | An array of items to display_ (\[{source: 'images/size1.jpg', title: '900x600'}]) |
| `template`     | String  | ``   | The template string. |
| `delay-controls`     | Number  | `300`   | Delay time before controls fade out in ms. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
// To apply lightbox to a group of links
UIkit.lightbox(element, options);

// To dynamically initialize the lightbox
UIkit.lightboxPanel(options);
```

### Events

These events will be triggered on elements with this component attached.

| Name | Description |
| --- | --- |
| `beforeshow` | Fires before the Lightbox is shown. |
| `show` | Fires after the Lightbox is shown. |
| `shown` | Fires after the Lightbox's show animation has completed. |
| `beforehide` | Fires before the Lightbox is hidden. |
| `hide` | Fires after the Lightbox's hide animation has started. |
| `hidden` | Fires after the Lightbox is hidden. |
| `itemload` | Fires when an item loads. |
| `itemshow` | Fires before an item is shown. |
| `itemshown` | Fires after an item is shown. |
| `itemhide` | Fires before an item is hidden. |
| `itemhidden` | Fires after an item is hidden. |
