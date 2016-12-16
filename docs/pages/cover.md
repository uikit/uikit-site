# Cover

<p class="uk-text-lead">Expand images or videos to cover their entire container.</p>

This component allows you to create fullscreen teasers using images, objects or even iframes. Regardless what kind of element, it will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or an image, on top of the image or video.

***

## Usage

To have an image cover its parent element, add the `.uk-cover-container` class to the parent and the `uk-cover` attribute to the image.

```html
<div class="uk-cover-container">
    <img src="" alt="" uk-cover>
</div>
```

To position content on top of the covering element, use the [Position component](position.md).

```example
<div class="uk-cover-container uk-light uk-height-medium">
    <img src="../docs/images/dark.jpg" alt="" uk-cover>
</div>
```

***

## Video

To create a video that covers its parent container, add the `uk-cover` attribute to a video. Wrap a container element around the video and add the `.uk-cover-container` class to clip the content.

```html
<div class="uk-cover-container">
    <video uk-cover></video>
</div>
```

```example
<div class="uk-cover-container uk-light uk-height-medium">
    <video uk-cover autoplay loop muted controls>
        <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4?test1" type="video/mp4">
        <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.ogv?test1" type="video/ogg">
    </video>
</div>
```

***

## Iframe

To apply the Cover component to an iframe, you need to add the `uk-cover` attribute to the iframe. Now add the `.uk-cover-container` class to a container element around the iframe to clip the content.

```html
<div class="uk-cover-container">
    <iframe src="" uk-cover></iframe>
</div>
```

```example
<div class="uk-cover-container uk-light uk-height-medium">
    <iframe src="http://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent" width="560" height="315" frameborder="0" allowfullscreen uk-cover></iframe>
</div>
```

***

## Responsive Height

To add responsive behavior to your cover image, you need to create an invisible `<canvas>` element and assign `width` and `height` values to it, according to the aspect ratio you want the covered area to have. That way it will adapt the responsive behavior of the image.

```html
<div class="uk-cover-container">
    <canvas width="" height=""></canvas>
    <video uk-cover></video>
</div>
```

```example
<div class="uk-cover-container uk-light uk-height-medium">
    <canvas width="600" height="400"></canvas>
    <img uk-cover src="../docs/images/dark.jpg" alt="">
</div>
```

***

## Viewport Height

Adding the `.uk-height-viewport` class from the [Utility component](utility.md) will stretch the height of the parent element to fill the whole viewport.

```html
<div class="uk-cover-container" uk-height-viewport>
    <img src="" alt="" uk-cover>
</div>
```

***

## Component options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `automute` | Boolean | true | Tries to automute the iframe's video. |
| `width` | Number | undefined | The element's width. |
| `height` | Number | undefined | The element's height. |
