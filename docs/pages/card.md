# Card

<p class="uk-text-lead">Create layout boxes with different styles.</p>

UIkit uses cards to outline certain sections of your content, which can be styled differently. Typically, cards are arranged in grid columns from the [Grid component](grid.md).

***

## Usage

The Card component consists of the card itself, the card body and the card title.

| Class          | Description                                                                |
|------------------|----------------------------------------------------------------------------|
| `.uk-card`       | Add this class to a `<div>` element to define the Card component.          |
| `.uk-card-body`  | Add this class to a `<div>` element inside the card to create padding between the card and its content. |
| `.uk-card-title` | Add this class to a heading to define the card title.                     |

```html
<div class="uk-card">
    <div class="uk-card-body">
        <h3 class="uk-card-title"></h3>
    </div>
</div>
```

```example
<div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-body">
        <h3 class="uk-card-title">Default</h3>
        <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
```

**Note:** By default, a card is blank. That is why it is important to add a modifier class for styling. In our example we are using the `.uk-card-default` class.

***

## Header & Footer

You can also divide a card into header and footer — around the default body. Just add the `.uk-card-header` or `.uk-card-footer` class to a `<div>` element inside the card.

```html
<div class="uk-card">
    <div class="uk-card-header">
        <h3 class="uk-card-title"></h3>
    </div>
    <div class="uk-card-body"></div>
    <div class="uk-card-footer"></div>
</div>
```

```example
<div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
            <div class="uk-first-column"><img class="uk-border-circle" width="40" height="40" src="../docs/images/avatar.jpg"></div>
            <div>
                <h3 class="uk-width-expand uk-card-title uk-margin-remove-bottom">Title</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
</div>
```

***

## Style Modifiers

UIkit includes a number of modifiers that can be used to add a specific style to cards.

### Default

Add the `.uk-card-default` class to create a visually styled box.

```html
<div class="uk-card uk-card-default"></div>
```

```example
<div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-body">
        <h3 class="uk-panel-title">Title</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <code>.uk-card-default</code>
    </div>
</div>
```

***

### Primary

Add the `.uk-card-primary` class to modify the card and emphasize it with a different color.

```html
<div class="uk-card uk-card-primary"></div>
```

```example
<div class="uk-card uk-card-primary uk-width-1-2@m uk-light">
    <div class="uk-card-body">
        <h3 class="uk-panel-title">Title</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <code>.uk-card-primary</code>
    </div>
</div>
```

***

### Secondary

Add the `.uk-card-secondary` class to modify the card and give it an alternative background.

```html
<div class="uk-card uk-card-secondary"></div>
```

```example
<div class="uk-card uk-card-secondary uk-width-1-2@m uk-light">
    <div class="uk-card-body">
        <h3 class="uk-panel-title">Title</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <code>.uk-card-secondary</code>
    </div>
</div>
```

***

### Hover

To create a hover effect on the card, add the `.uk-card-hover` class. This comes in handy when working with anchors and can be combined with the other card modifiers.

```html
<div class="uk-card uk-card-hover"></div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid uk-height-match="target: > div > .uk-card">
    <div>
        <div class="uk-card uk-card-hover">
            <div class="uk-card-body">
                <h3 class="uk-panel-title">Title</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <code>.uk-card-hover</code>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-body">
                <h3 class="uk-panel-title">Title</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <code>.uk-card-hover</code><br><code>.uk-card-default</code>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-hover uk-light">
            <div class="uk-card-body">
                <h3 class="uk-panel-title">Title</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <code>.uk-card-hover</code><br><code>.uk-card-primary</code>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-hover uk-light">
            <div class="uk-card-body">
                <h3 class="uk-panel-title">Title</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <code>.uk-card-hover</code><br><code>.uk-card-secondary</code>
            </div>
        </div>
    </div>
</div>
```

***

## Size Modifiers

You can apply different size modifiers to cards that will decrease or increase their padding.

### Small

To apply a smaller padding, add the `.uk-card-small` class.

```html
<div class="uk-card uk-card-small uk-card-default"></div>
```

```example
<div class="uk-card uk-card-default uk-card-small uk-width-1-2@m">
    <div class="uk-card-header">
        <h3 class="uk-width-expand uk-card-title uk-margin-remove-bottom">Title</h3>
    </div>
    <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
</div>
```

***

### Large

To apply a larger padding, add the `.uk-card-large` class.

```html
<div class="uk-card uk-card-large uk-card-default"></div>
```

```example
<div class="uk-card uk-card-default uk-card-large uk-width-1-2@m">
    <div class="uk-card-header">
        <h3 class="uk-width-expand uk-card-title uk-margin-remove-bottom">Title</h3>
    </div>
    <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
</div>
```

***

## Media

To display an image inside a card without any spacing, add the `.uk-card-media` class to a `<div>` around the `<img>` element.

```html
<div class="uk-card uk-card-default">
    <div class="uk-card-media">
        <img src="" alt="">
    </div>
    <div class="uk-card-body">
    </div>
</div>
```

```example
<div class="uk-card uk-card-default uk-width-1-2@s">
    <div class="uk-card-media">
        <img src="../docs/images/light.jpg" alt="">
    </div>
    <div class="uk-card-body">
        <h3 class="uk-card-title">Media</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
</div>
```

***

### Alignment

Add the `.uk-card-media-top` class to align the image to the top of the card or the `.uk-card-media-bottom` class to align it to the bottom. Mind that you need to modify the source order accordingly.

```example
<div class="uk-child-width-1-2@m" uk-grid>

    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="../docs/images/light.jpg" alt="">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Bottom</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-media-bottom">
                <img src="../docs/images/light.jpg" alt="">
            </div>
        </div>
    </div>

</div>
```

Add the `.uk-card-media-left` class when aligning the image to the left or the `.uk-card-media-right` class when aligning it to the right. Also, add the `.uk-cover-container` class. Use the [Grid](grid.md) and [Width](width.md) components to achieve the actual alignment.

Create a `<canvas>` element with your image's width and height, so that it will retain its dimensions, if the grid stacks on smaller viewports.

```html
<div class="uk-card uk-card-default uk-child-width-1-2" uk-grid>
    <div class="uk-card-media-left uk-cover-container">
        <img src="" alt="">
        <canvas width="" height=""></canvas>
    </div>
    <div>
        <div class="uk-card-body"></div>
    </div>
</div>
```

```example
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>

    <div class="uk-card-media-left uk-cover-container">
        <img src="../docs/images/light.jpg" alt="" uk-cover>
        <canvas width="600" height="400"></canvas>
    </div>

    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">Media Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>

</div>

<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>

    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
        <img src="../docs/images/light.jpg" alt="" uk-cover>
        <canvas width="600" height="400"></canvas>
    </div>

    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">Media Right</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>

</div>
```
