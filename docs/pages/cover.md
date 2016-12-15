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

```example
<div class="uk-cover-container" style="height: 300px">
    <img src="../docs/images/dark.jpg" alt="" uk-cover>
</div>
```


***

## Cover with content

To position content absolutely on top of the covering element, add the `.uk-position-cover` class from the [Utility component](utility.md) to a container element following your image or video. If you want to center the content vertically and horizontally, just use the [Flex component](flex.md).

```html
<div class="uk-cover-container">
    <img src="" alt="" uk-cover>
    <div class="uk-position-cover"></div>
</div>
```

```example
<div class="uk-cover-container uk-light" style="height: 300px">
    <img src="../docs/images/dark.jpg" alt="" uk-cover>
    <div class="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
        <h1>Heading</h1>
    </div>
</div>
```

***

## Video

To create a video that covers its parent container, add the `uk-cover` attribute to a video. Wrap a container element around the video and add the `.uk-cover-container` class to clip the content.

```html
<div class="uk-cover-container">
    <video uk-cover></video>
    <div class="uk-position-cover"></div>
</div>
```

```example
<div class="uk-cover-container uk-light" style="height: 300px">
    <video uk-cover autoplay loop muted controls>
        <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4?test1" type="video/mp4">
        <source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.ogv?test1" type="video/ogg">
    </video>
    <div class="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
        <h1>Heading</h1>
    </div>
</div>
```

***

## Iframe

To apply the Cover component to an iframe, you need to add the `uk-cover` attribute to the iframe. Now add the `.uk-cover-container` class to a container element around the iframe to clip the content.

```html
<div class="uk-cover-container">
    <iframe src="" uk-cover></iframe>
    <div class="uk-position-cover">...</div>
</div>
```

```example
<div class="uk-cover-container uk-light" style="height: 300px">
    <iframe src="http://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent" width="560" height="315" frameborder="0" allowfullscreen uk-cover></iframe>
    <div class="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
        <h1>Heading</h1>
    </div>
</div>
```

***

## Responsive Height

To add responsive behavior to your cover image, you need to create an invisible `<canvas>` element and assign `width` and `height` values to it, according to the aspect ratio you want the covered area to have. That way it will adapt the responsive behavior of the image.

```html
<div class="uk-cover-container">
    <canvas width="" height=""></canvas>
    <video uk-cover></video>
    <div class="uk-position-cover"></div>
</div>
```

```example
<div class="uk-cover-container uk-light" style="height: 300px">
    <canvas width="600" height="400"></canvas>
    <img uk-cover src="../docs/images/dark.jpg" alt="">
    <div class="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
        <h1>Heading</h1>
    </div>
</div>
```

***

## Viewport Height

Adding the `.uk-height-viewport` class from the [Utility component](utility.md) will stretch the height of the parent element to fill the whole viewport.

```html
<div class="uk-cover-container" uk-height-viewport>
    <img uk-cover src="" alt="">
    <div class="uk-position-cover"></div>
</div>
```

***

## Component options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `automute` | Boolean | true | Tries to automute the iframe's video. |
| `width` | Number | undefined | The element's width. |
| `height` | Number | undefined | The element's height. |
