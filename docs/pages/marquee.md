# Marquee

<p class="uk-text-lead">Create continuously scrolling marquee for images, cards, and any other custom content.</p>

## Usage

To apply this component, add the `uk-marquee` attribute to a container element and wrap the
scrolling items inside an element with the `.uk-marquee-items` class.

| Class                  | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `.uk-marquee-items`    | Defines the element containing the scrolling items.      |
| `.uk-marquee-vertical` | Displays the marquee vertically instead of horizontally. |

```html
<div class="uk-marquee" uk-marquee>
    <div class="uk-marquee-items">
        <div></div>
    </div>
</div>
```

```example
<div class="uk-marquee" uk-marquee>
    <div class="uk-marquee-items">
        <div class="uk-card uk-card-default uk-card-body uk-width-medium">
            <h3 class="uk-card-title">Design</h3>
            <p>Create expressive layouts with flexible UI components.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body uk-width-medium">
            <h3 class="uk-card-title">Motion</h3>
            <p>Guide attention with a smooth continuous animation.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body uk-width-medium">
            <h3 class="uk-card-title">Content</h3>
            <p>Combine cards, images, logos, or any custom markup.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-width-medium">
            <h3 class="uk-card-title">Flexible</h3>
            <p>Use the marquee horizontally or vertically.</p>
        </div>
    </div>
</div>
```

***

## Vertical marquee

To scroll the marquee vertically, add the `.uk-marquee-vertical` class. Since the items now move
along the Y axis, set a height on the marquee container.

```html
<div class="uk-marquee uk-marquee-vertical uk-height-medium" uk-marquee>
    <div class="uk-marquee-items">...</div>
</div>
```

```example
<div class="uk-marquee uk-marquee-vertical uk-height-medium" uk-marquee>
    <div class="uk-marquee-items">
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Item 1</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body">
            <h3 class="uk-card-title">Item 2</h3>
            <p>Consectetur adipiscing elit.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body">
            <h3 class="uk-card-title">Item 3</h3>
            <p>Sed do eiusmod tempor incididunt.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Item 4</h3>
            <p>Ut labore et dolore magna aliqua.</p>
        </div>
    </div>
</div>
```

***

## Pause on hover

To pause the marquee on hover, add the `pause: true` option. Use the `pause-velocity` option to
control how fast the content should continue moving while hovered. Set `pause-velocity: 0` to stop
it completely.

```html
<div uk-marquee="pause: true; pause-velocity: 0">...</div>
```

```example
<div class="uk-marquee" uk-marquee="pause: true; pause-velocity: 0">
    <div class="uk-marquee-items">
        <div class="uk-card uk-card-default uk-card-body uk-width-medium">Pause on hover</div>
        <div class="uk-card uk-card-primary uk-card-body uk-width-medium">Set pause-velocity: 0</div>
        <div class="uk-card uk-card-secondary uk-card-body uk-width-medium">To stop completely</div>
        <div class="uk-card uk-card-default uk-card-body uk-width-medium">Or use a small value</div>
    </div>
</div>
```

***

## Fade out

To softly fade out the marquee content at the edges, add the `fade-size` option. The value can be
set in `vh`, `%` and `px`, and it supports basic mathematics operands, `+` and `-`.

```html
<div uk-marquee="fade-size: 80px">...</div>
```

```example
<div class="uk-marquee" uk-marquee="fade-size: 80px">
    <div class="uk-marquee-items">
        <div class="uk-card uk-card-default uk-card-body uk-width-medium">Fade</div>
        <div class="uk-card uk-card-primary uk-card-body uk-width-medium">At the edges</div>
        <div class="uk-card uk-card-secondary uk-card-body uk-width-medium">For a softer look</div>
        <div class="uk-card uk-card-default uk-card-body uk-width-medium">On long content rows</div>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a
semicolon. [Learn more](javascript.md#component-configuration)

| Option           | Value   | Default | Description                                                                                            |
| ---------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `reverse`        | Boolean | `false` | Reverse direction.                                                                                     |
| `velocity`       | Number  | `25`    | The animation velocity in pixels per second.                                                           |
| `start`          | Number  | `0`     | The animation start position from `0` to `100`.                                                        |
| `pause`          | Boolean | `false` | Pause the marquee on hover.                                                                            |
| `pause-velocity` | Number  | `10`    | The animation velocity while hovered. Set it to `0` to stop the marquee completely.                    |
| `fade-size`      | Length  | `0`     | The fade size. The value can be set in `vh`, `%` and `px`, and it supports basic mathematics operands. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.marquee(element, options);
```
