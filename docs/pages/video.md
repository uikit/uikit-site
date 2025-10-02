# Video

<p class="uk-text-lead">Display videos as animated images with precise autoplay control, and load them lazily or on click — even from YouTube.</p>

The Video component allows you to seamlessly display videos as animated images with a consistent autoplay behavior across all browsers. Videos automatically pause when they become hidden, for example inside a slideshow, and seamlessly resume from the same position once visible again. It also ensures the muted attribute is correctly applied even when videos are inserted into the DOM dynamically with JavaScript.

***

## Usage

To apply this component, add the `uk-video` attribute to a `<video>` element. Autoplay is handled automatically, so the `autoplay` attribute is not required. The video continues playing when when it leaves the viewport but pauses if its visibility changes to hidden. Don't add any controls but the `playsinline`, `loop` and `muted` attributes instead to display the video as animated image. 

```html
<video src="" width="" height="" playsinline loop muted uk-video></video>
```

```example
<button class="uk-button uk-button-default uk-margin" type="button" uk-toggle="target: +">Toggle Video</button>

<video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" playsinline loop muted hidden uk-video></video>
```

***

## Autoplay

There are two autoplay modes. Just add the `autoplay` option to the `uk-video` attribute and set it to one of the following values.

| Values   | Description                                                                            |
| -------- | -------------------------------------------------------------------------------------- |
| `inview` | Play video when it enters the viewport and pause it again when it leaves the viewport. |
| `hover`  | Play video when the mouse hovers the video and pause it again when the mouse leaves.   |

```html
<video src="" width="" height="" playsinline loop muted uk-video="autoplay: inview"></video>
<video src="" width="" height="" playsinline loop muted uk-video="autoplay: hover"></video>
```

```example
<div class="uk-child-width-1-2@m" uk-grid>
    <div>

        <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: inview"></video>

    </div>
    <div>

        <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: hover"></video>

    </div>
</div>
```

To restart the video from the very beginning after pausing it, add the `restart` option to the `uk-video` attribute.

To toggle autoplay on hover using an element other than the video itself, just add `hover-target: SELECTOR` option to the `uk-video` attribute.

***

## Lazy Loading

To load a video lazy, add the `preload="none"` attribute to the video. The Video component removes the attribute once the video enters the viewport, ensuring it loads lazily.

```html
<video src="" width="" height="" playsinline loop muted preload="none" uk-video="autoplay: hover"></video>
```

```example
<video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" playsinline loop muted preload="none" uk-video></video>
```

***

## On-Click Loading

To load a video with a poster image not before pressing play, add the `uk-video="autoplay: false"` and `preload="none"` attributes to the video.

```html
<video src="" width="" height="" poster="" controls preload="none" uk-video="autoplay: false"></video>
```

```example
<video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" poster="images/photo.jpg" width="1920" height="1080" controls preload="none" uk-video="autoplay: false"></video>
```

Alternatively display a placeholder image that is replaced by the video element. Just place the hidden video and the linked image side by side within a container element, and add the `uk-toggle` attribute from the [Toggle component](toggle.md) to the image link. Then, target both the hidden video and the linked image to toggle their visibility.

```html
<div class="uk-inline">
    <video src="" width="" height="" controls preload="none" hidden uk-video></video>
    <a href uk-toggle="target: ! > *">
        <img src="" width="" height="" alt="">
    </a>
</div>
```

```example
<div class="uk-inline uk-light">
    <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" controls preload="none" hidden uk-video></video>
    <a href uk-toggle="target: ! > *">
        <img src="images/photo.jpg" width="1800" height="1200" alt="">
        <span class="uk-position-center uk-icon-overlay" uk-icon="icon: youtube; ratio: 3"></span>
    </a>
</div>
```

This also works for embedded iframe videos from YouTube or Vimeo too. Here, no external requests will be sent to their servers, and no JavaScript will be loaded until the placeholder image is clicked, which is great for privacy and GDPR.

```html
<div class="uk-inline">
    <iframe src="" width="" height="" allowfullscreen loading="lazy" hidden uk-responsive uk-video></iframe>
    <a href uk-toggle="target: ! > *">
        <img src="" width="" height="" alt="">
    </a>
</div>
```

```example
<div class="uk-inline uk-light">
    <video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" controls preload="none" hidden uk-video></video>
    <a href uk-toggle="target: ! > *">
        <img src="images/photo.jpg" width="1800" height="1200" alt="">
        <span class="uk-position-center uk-icon-overlay" uk-icon="icon: youtube; ratio: 3"></span>
    </a>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option         | Value                 | Default | Description                                                                                                                                                                       |
|----------------|-----------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `autoplay`     | Boolean, String       | `true`  | The video automatically plays/pauses as it's visible/hidden on the page. Additionally, the video can play when its in the viewport or hovered with the mouse (`inview`, `hover`). |
| `restart`      | Boolean               | `false` | Video will seek to the beginning whenever video element's autoplay option pauses the video.                                                                                       |
| `hover-target` | Boolean, CSS Selector | `false` | The element that functions as hover toggle when autoplay option is set to `hover`. Defaults to the element itself.                                                                |

`autoplay` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.video(element, options);
```
