# Video

<p class="uk-text-lead">Display videos as animated images with precise autoplay control, and load them lazily or on click — even from YouTube.</p>

The Video component allows you to seamlessly display videos as animated images with a consistent autoplay behavior across all browsers. Videos automatically pause when they become hidden, for example inside a slideshow, and seamlessly resume from the same position once visible again. It also ensures the muted attribute is correctly applied even when videos are inserted into the DOM dynamically with JavaScript.

***

## Usage

To apply this component, add the `uk-video` attribute to a `<video>` element. Autoplay is handled automatically, so the `autoplay` attribute is not required. The video continues playing when it leaves the viewport but pauses if its visibility changes to hidden. Don't add any controls but the `playsinline`, `loop` and `muted` attributes instead to display the video as animated image.

```html
<video src="" width="" height="" playsinline loop muted uk-video></video>
```

```example
<button class="uk-button uk-button-default uk-margin" type="button" uk-toggle="target: +">Toggle Video</button>

<video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" playsinline loop muted hidden uk-video></video>
```

***

## Autoplay

There are three autoplay modes. Just add the `autoplay` option to the `uk-video` attribute and set it to one of the following values.

| Values     | Description                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------- |
| `inview`   | Play video when it enters the viewport and pause it again when it leaves the viewport.       |
| `hover`    | Play video when the mouse hovers the video and pause it again when the mouse leaves.         |
| `parallax` | Connect video playback to scrolling and move through the video based on the scroll position. |

```html
<video src="" width="" height="" playsinline loop muted uk-video="autoplay: inview"></video>
<video src="" width="" height="" playsinline loop muted uk-video="autoplay: hover"></video>
<video src="" width="" height="" playsinline muted uk-video="autoplay: parallax"></video>
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

To rewind the video after hovering out, add the `hover-rewind` option. Higher values rewind faster. The default is `0`, which disables rewinding.

**Note** The `hover` and `parallax` autoplay modes only work with the `<video>` element, not with embedded iframes.

***

## Autoplay parallax

To connect the video playback to scrolling, set `autoplay: parallax`. The video playback is then controlled by the scroll position in the viewport instead of playing automatically over time.

```html
<video src="" width="" height="" playsinline muted uk-video="autoplay: parallax"></video>
```

```example
<video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" playsinline muted uk-video="autoplay: parallax; parallax-start: 100%; parallax-end: 100%"></video>
```

To adjust the scroll range that drives the video playback, set the `parallax-start` and `parallax-end` options. Use `parallax-target` to reference another element for the parallax duration and `parallax-easing` to adjust the animation easing. Learn more in the [Parallax component](parallax.md).

***

## Lazy loading

To load a video lazy, add the `preload="none"` attribute to the video. The Video component removes the attribute once the video enters the viewport, ensuring it loads lazily.

```html
<video src="" width="" height="" playsinline loop muted preload="none" uk-video="autoplay: hover"></video>
```

```example
<video src="https://yootheme.com/site/images/media/yootheme-pro.mp4" width="1920" height="1080" playsinline loop muted preload="none" uk-video></video>
```

To change the viewport area in which the `inview` autoplay mode becomes active, add the `inview-margin` option. This is useful if videos should start later, for example when they are more centered in the viewport.

```html
<video src="" width="" height="" playsinline loop muted uk-video="autoplay: inview; inview-margin: -40% 0px -40% 0px"></video>
```

```example
<div class="uk-child-width-1-3@s" uk-grid>
    <div>
        <video src="https://videos.pexels.com/video-files/8675550/8675550-hd_1920_1080_30fps.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: inview; inview-margin: -40% 0px -40% 0px"></video>
    </div>
    <div>
        <video src="https://videos.pexels.com/video-files/8675542/8675542-hd_1920_1080_30fps.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: inview; inview-margin: -40% 0px -40% 0px"></video>
    </div>
    <div>
        <video src="https://videos.pexels.com/video-files/8675544/8675544-hd_1920_1080_30fps.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: inview; inview-margin: -40% 0px -40% 0px"></video>
    </div>
</div>
```

If multiple videos are visible at the same time, use the `inview-queued` option to limit how many of them are allowed to play. The value is a ratio from `0` to `1` relative to the number of queued videos currently in view. For example, if three queued videos are in view and `inview-queued` is set to `0.3`, only one video will play at a time.

```html
<video src="" width="" height="" playsinline loop muted uk-video="autoplay: inview; inview-queued: 0.3"></video>
```

```example
<div class="uk-child-width-1-3@s" uk-grid>
    <div>
        <video src="https://videos.pexels.com/video-files/8675550/8675550-hd_1920_1080_30fps.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: inview; inview-queued: 0.3"></video>
    </div>
    <div>
        <video src="https://videos.pexels.com/video-files/8675542/8675542-hd_1920_1080_30fps.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: inview; inview-queued: 0.3"></video>
    </div>
    <div>
        <video src="https://videos.pexels.com/video-files/8675544/8675544-hd_1920_1080_30fps.mp4" width="1920" height="1080" playsinline loop muted uk-video="autoplay: inview; inview-queued: 0.3"></video>
    </div>
</div>
```

***

## Reduced motion

If the `prefers-reduced-motion` media query prevents autoplay, add the `reduced-motion-time` option to seek to a specific frame and display the paused video at that position.

```html
<video src="" width="" height="" playsinline loop muted uk-video="autoplay: inview; reduced-motion-time: 1.5"></video>
```

***

## On-click loading

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

| Option                | Value                 | Default | Description                                                                                                                                                                                                                 |
| --------------------- | --------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoplay`            | Boolean, String       | `true`  | The video automatically plays or pauses as it becomes visible or hidden on the page. Use `inview` to pause it when leaving the viewport, `hover` to play it only on hover, and `parallax` to connect playback to scrolling. |
| `restart`             | Boolean               | `false` | Video will seek to the beginning whenever the autoplay option pauses it.                                                                                                                                                    |
| `hover-target`        | Boolean, CSS Selector | `false` | The element that functions as hover toggle when `autoplay` is set to `hover`. Defaults to the element itself.                                                                                                               |
| `hover-rewind`        | Number                | `0`     | The rate at which the video rewinds once the element is no longer hovered, when `autoplay` is set to `hover`.                                                                                                               |
| `inview-margin`       | String                | `0px`   | Margin added to the viewport when determining whether the element is in view.                                                                                                                                               |
| `inview-queued`       | Number                | `0`     | Limits the number of simultaneously playing videos when multiple videos are in view. The value is a ratio from `0` to `1`.                                                                                                  |
| `reduced-motion-time` | Number                | `0`     | The time in seconds to seek to when autoplay is prevented by the `prefers-reduced-motion` media query.                                                                                                                      |

`autoplay` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

When `autoplay` is set to `parallax`, the following parallax options are available.

| Option            | Value        | Default | Description                                                                                                        |
| ----------------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `parallax-target` | CSS Selector | `false` | Element dimension reference for the parallax duration. Defaults to the video element.                              |
| `parallax-start`  | Length       | `0`     | Start offset. The value can be set in `vh`, `%` and `px`, and it supports basic mathematics operands, `+` and `-`. |
| `parallax-end`    | Length       | `0`     | End offset. The value can be set in `vh`, `%` and `px`, and it supports basic mathematics operands, `+` and `-`.   |
| `parallax-easing` | Number       | `0`     | Animation easing during scrolling.                                                                                 |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.video(element, options);
```
