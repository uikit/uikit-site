# Sticky

<p class="uk-text-lead">Make elements remain at the top of the viewport, like a sticky navigation.</p>

## Usage

To create an element that remains at the top of the viewport when scrolling down the site, add the `uk-sticky` attribute to that element.

```html
<div uk-sticky></div>
```

```example
<div class="uk-card uk-card-default" uk-sticky="bottom: #sticky-on-scroll-up">
    <div class="uk-card-body">
        Stick to the top
    </div>
</div>
```

***

### Animation

Add an animation from the [Animation component](animation.md) in order to have the sticky element reappear smoothly.

```html
<div uk-sticky="animation: uk-animation-slide-top"></div>
```

```example
<div class="uk-card uk-card-default" uk-sticky="animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
    <div class="uk-card-body">
        Animation Slide Top
    </div>
</div>
```

***

## Sticky on scroll up

You can also make the sticky element only show when scrolling up to save space. Together with an animation, this makes for a very smooth experience.

```html
<div uk-sticky="show-on-up: true"></div>
```

```example
<div class="uk-card uk-card-default" uk-sticky="show-on-up: true; animation: uk-animation-slide-top">
    <div class="uk-card-body">
        Slide on scroll up
    </div>
</div>
```

***

## Offset

You can also position the element below the viewport edge. Add the `offset` attribute and the distance in pixels.

```html
<div uk-sticky="offset: 100"
```

```example
<div class="uk-card uk-card-default" uk-sticky="offset: 100; bottom: #top">
    <div class="uk-card-body">
        Stick 100px below the top
    </div>
</div>
```

***

## Top

To apply the sticky behavior with a delay, add the `top` attribute, which can be defined either by a number representing the offset in pixels, but also viewport height or a CSS selector.

```html
<!-- Sticks after 100px of scrolling -->
<div uk-sticky="top: 100">

<!-- Sticks after 100vh -->
<div uk-sticky="top: 100vh">

<!-- Sticks to the top of the container -->
<div id="my-id">
    <div uk-sticky="top: #my-id"></div>
</div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-background-muted uk-height-large">
            <div class="uk-card uk-card-default" uk-sticky="top: 100; bottom: #bottom">
                <div class="uk-card-body">
                Stick to the top but only after 100px scrolling
                </div>
            </div>
        </div>
    </div>
    <div>
        <div id="container-1" class="uk-background-muted  uk-height-large">
            <div class="uk-card uk-card-default" uk-sticky="top: #container-1; bottom: #bottom">
                <div class="uk-card-body">
                    Stick below the box
                </div>
            </div>
        </div>
    </div>
</div>
```

***

## Bottom

Bind the sticky behavior to a specific element, so that it disappears after scrolling past that point of the page

```html
<!-- Sticks until the bottom of its parent container -->
<div>
    <div uk-sticky="bottom: true"></div>
</div>

<!-- Sticks until the second container -->
<div uk-sticky="bottom: #my-id"></div>
<div id="my-id"></div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-background-muted uk-height-large">
            <div class="uk-height-medium uk-background-secondary">
                <div class="uk-card uk-card-default" uk-sticky="bottom: true">
                    <div class="uk-card-body">
                        Stick until the bottom of its parent container
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div id="container-2" class="uk-background-muted  uk-height-large">
            <div class="uk-card uk-card-default" uk-sticky="bottom: #container-2">
                <div class="uk-card-body">
                    Stick until the bottom of the box
                </div>
            </div>
        </div>
    </div>
</div>
```

***

## Responsive

You also have the possibility of disabling the sticky behavior for different devices by applying the `media` option to the `uk-sticky` attribute and adding the appropriate viewport width.

```html
<div uk-sticky="media: 640"></div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Option          | Value                                 | Default   | Description                                                                                                   |
|-----------------|---------------------------------------|-----------|---------------------------------------------------------------------------------------------------------------|
| `top`           | Number, viewport height, CSS selector | 0         | The top offset from where the element should be stick.                                                        |
| `bottom `       | Boolean, CSS selector                 | false     | The bottom offset until the element should stick. (true: parent element, prefixed with '!' a parent selector) |
| `offset `       | Number                                | 0         | The offset the Sticky should be fixed to.                                                                     |
| `animation `    | String                                | false     | The animation to use when the element becomes sticky.                                                         |
| `cls-active`    | String                                | uk-active | The active class.                                                                                             |
| `cls-inactive`  | String                                | ''        | The inactive class.                                                                                           |
| `width-element` | CSS selector                          | false     | The element the Sticky should get its width from in active mode.                                              |
| `show-on-up`    | Boolean                               | false     | Only show sticky element when scrolling up.                                                                   |
| `media `        | Integer, String                       | false     | Condition for the active status with a width as integer (e.g. 640) or a css media query.                      |
| `target `       | Boolean                               | false     | Initially make sure that the Sticky is not over a targeted element via location hash.                         |