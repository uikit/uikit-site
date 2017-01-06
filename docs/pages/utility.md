# Utility

<p class="uk-text-lead">A collection of useful utility classes to style your content.</p>

## Panel

UIkit uses panels to outline certain sections of your content. These can be arranged in grid columns from the [Grid component](grid.md) component, for example. 

Add the `.uk-panel` class to a `<div>` element to create a position context, set box-sizing to border-box, apply a clearfix and to remove the bottom margin of its last child element. 

```example
<div class="uk-child-width-1-3@s" uk-grid>
    <div class="uk-panel">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="uk-panel">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="uk-panel">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
</div>
```

***

### Scrollable panel

Add the `.uk-panel-scrollable` class to give the panel _170px_ height and make it scrollable, if its content exceeds the height. You can also add one of the `.uk-height-*` [classes](#height) from this component to apply a different height.

```example
<div class="uk-panel uk-panel-scrollable">
    <ul class="uk-list">
        <li><label><input class="uk-checkbox" type="checkbox"> Category 1</label></li>
        <li>
            <label><input class="uk-checkbox" type="checkbox"> Category 2</label>
            <ul>
                <li><label><input class="uk-checkbox" type="checkbox"> Category 2.1</label></li>
                <li><label><input class="uk-checkbox" type="checkbox"> Category 2.2</label></li>
                <li>
                    <label><input class="uk-checkbox" type="checkbox"> Category 2.3</label>
                    <ul>
                        <li><label><input class="uk-checkbox" type="checkbox"> Category 2.3.1</label></li>
                        <li><label><input class="uk-checkbox" type="checkbox"> Category 2.3.2</label></li>
                    </ul>
                </li>
                <li><label><input class="uk-checkbox" type="checkbox"> Category 2.4</label></li>
            </ul>
        </li>
        <li><label><input class="uk-checkbox" type="checkbox"> Category 3</label></li>
        <li><label><input class="uk-checkbox" type="checkbox"> Category 4</label></li>
    </ul>

</div>
```

***

## Clearing and floating

Floating elements are taken from the document flow and aligned to the left or right side of their container. It is important to clear floats or in the worst case, you might end up with a scrambled site. The following classes will help you to set up basic layouts.

| Class | Description |
| --- | --- |
| `.uk-float-left` | Add this class to float the element to the left. |
| `.uk-float-right` |  Add this class to float the element to the right. |
| `.uk-clearfix` | Add this class to a parent container to clear floats. Alternatively, you can create a new block format context by adding the `.uk-overflow-hidden` class. |


```example
<div class="uk-clearfix">
    <div class="uk-float-right">
        <div class="uk-card uk-card-default uk-card-body">Right</div>
    </div>
    <div class="uk-float-left">
        <div class="uk-card uk-card-default uk-card-body">Left</div>
    </div>
</div>
```

***

## Overflow

This component provides different classes to modify an element's overflow behavior. 

| Class                 | Description                                                                                                                                                                               |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-overflow-hidden` | Add this class to clip content that exceeds the dimensions of its container and to create a new block format context.                                                                     |
| `.uk-overflow-auto`   | Add this class to a `<div>` element to create a container that provides a horizontal or vertical scrollbar whenever the elements inside it are wider or higher than the container itself. |

**Note** The `.uk-overflow-auto` class is useful when having to handle tables on a responsive website, which at some point would just get too big. It also works great on `<pre>` elements.

```example
<div class="uk-overflow-auto uk-height-small uk-margin-large-bottom">
<table class="uk-table uk-table-striped uk-table-condensed uk-text-nowrap">
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
</table>
```

***

## Resize

This component provides different classes for resizing block elements. 

| Class                 | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| `.uk-resize-vertical` | Add this class to enable vertical resizing of block elements.                |
| `.uk-resize`          | Add this class to enable horizontal and vertical resizing of block elements. |

<p>Grab and drag the bottom right corner of each box below to resize it</p>

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <pre class="uk-resize-vertical">
            <code>
&lt;!-- Resize vertically --&gt;
&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="uk-child-width-1-2" uk-grid&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
            </code>
        </pre>
    </div>
    <div>
        <pre class="uk-resize">
            <code>
&lt;!-- Resize horizontally and vertically --&gt;
&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="uk-child-width-1-2" uk-grid&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
            </code>
        </pre>
    </div>
</div>
```

***

## Display utilities

Add one of these classes to change the display properties of an element.

| Class    | Description |
| --- | --- |
| `.uk-display-block` | Forces the element to behave like a block element.|
| `.uk-display-inline` | Forces the element to behave like an inline element.|
| `.uk-display-inline-block` | Forces the element to behave like an inline-block element.|

***

## Inline

These classes work great together with the [Position component](position.md). For example, when you are using an overlay on an image that is smaller than its parent block element, the overlay will not exceed the image dimensions.

| Class             | Description                                                                                                                                                  |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-inline`      | Add this class to add inline-block behavior to an element, prevent content overflow and to create a position context. |
| `.uk-inline-clip` | Add this class to clip overflowing child elements.                                                                                                           |

```html
<div class="uk-inline">
    <img alt="">
    <div class="uk-position-cover"></div>
</div>
```

```example
<div class="uk-inline">

    <img src="../docs/images/photo.jpg" width="300" alt="">

    <div class="uk-position-medium uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">Overlay</div>

</div>
```

***

## Height

UIkit provides a number of useful classes to alter a block element's height.

| Class                                          | Description                                                                       |
|------------------------------------------------|-----------------------------------------------------------------------------------|
| `.uk-height-1-1`                               | This class applies a height of 100%. This only works, if the parent element has a set height.                                              |
| `.uk-height-small `<br> `.uk-max-height-small `   | These classes apply a height or max-height of _150px_.                              |
| `.uk-height-medium `<br> `.uk-max-height-medium ` | These classes apply a height or max-height of _300px_.                              |
| `.uk-height-large `<br> `.uk-max-height-large `   | These classes apply a height or max-height of _450px_.                              |

```html
<div class="uk-height-small"></div>
```

```example
<div class="uk-child-width-1-3@s uk-grid-small" uk-grid>
    <div>
        <div class="uk-height-small uk-card uk-card-default uk-card-body uk-flex uk-flex-middle"><code>.uk-height-small</code></div>
    </div>
    <div>
        <div class="uk-height-medium uk-card uk-card-default uk-card-body uk-flex uk-flex-middle"><code>.uk-height-medium</code></div>
    </div>
    <div>
        <div class="uk-height-large uk-card uk-card-default uk-card-body uk-flex uk-flex-middle"><code>.uk-height-large</code></div>
    </div>
</div>
```

***

### Viewport height

Add the the `uk-height-viewport` attribute to create a container that fills the height of the entire viewport. You can change the height behavior by adding the `offset-top`, `offset-bottom` or `expand` option to the attribute.

| Option | Description |
| ------ | ----------- |
| `offset-top: true` | Subtracts the element's top offset from its height.  |
| `offset-bottom: true` | Subtracts the element's bottom offset from its height.  |
| `expand: true` | Expand the element's height to make a short page fill the viewport. |

```html
<div uk-height-viewport></div>

<div uk-height-viewport="offset-top: true"></div>

<div uk-height-viewport="expand: true"></div>
```

You can view examples in the tests for [Height Viewport](../assets/uikit/tests/height-viewport.html) and [Height Expand](../assets/uikit/tests/height-expand.html).

***

## Match Height

To expand all children of a container to the same height, regardless of their content – for example, inside a grid – add the `uk-height-match` attribute.

**Note** Once grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports.

```html
<div uk-height-match>
    <div></div>
    <div></div>
</div>
```

***

### Match Cards

You can also target and match specific elements inside the container, like cards. Just add the `target: SELECTOR` option to the attribute.

```html
<div uk-grid uk-height-match="target: SELECTOR">...</div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid uk-height-match="target: > div > .uk-card">
    <div>
        <div class="uk-card uk-card-default uk-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
    </div>
</div>
```

***

### Match All

If your grid wraps into multiple rows, only grid columns within the same row are matched. To match grid columns across all rows just add the `row: false` option to the attribute.

```html
<div uk-grid uk-height-match="row: false">...</div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid uk-height-match="target: > div > .uk-card; row: false">
    <div class="uk-first-column">
        <div class="uk-card uk-card-default uk-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
    </div>
    <div class="uk-grid-margin uk-first-column">
        <div class="uk-card uk-card-default uk-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <div class="uk-grid-margin">
        <div class="uk-card uk-card-default uk-card-body">Lorem Ipsum</div>
    </div>
</div>
```

***

### Component options

The table below lists the available settings of the `uk-height-match` attribute.

| Option | Value | Default | Description |
| --- | --- |
| `target`| CSS selector | false | Elements that should match. By default, direct children will match. |
| `row` | Boolean | true | If your targets wrap into multiple rows, only grid columns within the same row are matched. |

***

## Responsive objects

In UIkit `<img>`, `<canvas>`, `<aufio>` and `<video>` elements adapt to the width of their parent container by default. To apply responsive behavior to iframes, add the `uk-responsive` attribute . For other element or to apply a different behavior, just add one of the following classes.

| Class	| Description |
| --- | --- |
| `.uk-responsive-width` | Adjusts the object's width according to its parent's width, keeping the original aspect ratio. |
| `.uk-responsive-height` | Adjusts the object's height according to its parent's height, keeping the original aspect ratio. |
| `.uk-preserve-width` | Add this class to avoid the responsive behavior and preserve the original image dimensions. |

```html
<img class="uk-responsive-width" src="" alt="">
```

***

## Border Radius

To modify the border radius of an element, like an image, add one of the following classes.

| Class                | Description                                            |
|----------------------|--------------------------------------------------------|
| `.uk-border-rounded` | Add this class to apply rounded corners. |
| `.uk-border-circle`  | Add this class to a apply a circled shape.             |

```example
<img class="uk-border-rounded" src="images/avatar.jpg" width="200" height="200" alt="Border rounded">
<img class="uk-border-circle" src="images/avatar.jpg" width="200" height="200" alt="Border circle">
```

***

## Box Shadow

You can apply different box shadows to elements. Just add one of the following classes.

| Class                   | Description                                      |
|-------------------------|--------------------------------------------------|
| `.uk-box-shadow-small`  | Add this class to apply a small box shadow.      |
| `.uk-box-shadow-medium` | Add this class to apply a medium box shadow.     |
| `.uk-box-shadow-large`  | Add this class to apply a large box shadow.      |
| `.uk-box-shadow-xlarge` | Add this class to apply a very large box shadow. |

```html
<div class="uk-box-shadow-small"></div>
```

```example
<div class="uk-child-width-1-2@s uk-text-center" uk-grid>
    <div>
        <div class="uk-box-shadow-small uk-padding">
            <p class="uk-h4 uk-margin-remove">Small</p>
        </div>
    </div>

    <div>
        <div class="uk-box-shadow-medium uk-padding">
            <p class="uk-h4 uk-margin-remove">Medium</p>
        </div>
    </div>

    <div>
        <div class="uk-box-shadow-large uk-padding">
            <p class="uk-h4 uk-margin-remove">Large</p>
        </div>
    </div>

    <div>
        <div class="uk-box-shadow-xlarge uk-padding">
            <p class="uk-h4 uk-margin-remove">X-Large</p>
        </div>
    </div>
</div>
```

***

## Drop Cap

With the `.uk-dropcap` class you can achieve a drop cap within a text by adding it directly to the `<p>` element.

```example
<p class="uk-dropcap">Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

***

## Logo

With the new `.uk-logo` class you can easily define your logo, for example within your navbar. Add the `.uk-light` class from the [Inverse component](inverse.md) when displaying the image on dark backgrounds, so that its color will automatically be inverted for better visibility.

```html
<a class="uk-logo" href=""></a>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-position-relative">
            <img src="../docs/images/light.jpg" alt="">
            <div class="uk-position-medium uk-position-center">
                <a class="uk-logo" href="#">
                    Logo
                </a>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-position-relative">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-position-medium uk-position-center uk-light">
                <a class="uk-logo" href="#">
                    Logo
                </a>
            </div>
        </div>
    </div>
</div>
```

You can use text or an `<img>` element, for example an SVG, as a logo.

```html
<a class="uk-logo" href="">
    <img src="" alt="">
</a>
```

```example
<a class="uk-logo" href="#">
    <img src="../docs/images/logo-placeholder.svg" alt="">
</a>
```

***

## Inline SVG

SVGs or Scaleable Vector Graphics are really handy, for example to display a logo that remains crisp when scaling or that is animated. To be able to control your SVG via CSS, just add the `uk-svg` attribute to the image tag. This will turn your image into an inline SVG including all attributes, like IDs, classes, width and height, which you can now easily target using CSS.

```html
<img src="" uk-svg>
```

```example
<img src="../assets/uikit/src/images/symbols/cloud-download.svg" uk-svg>
```

***

## Gif

To start playing an animated Gif only when it comes into the viewport, add the `uk-gif` attribute. That way a user will see the animation right when he is supposed to.

```html
<img src="" alt="" uk-gif
```

```example
<img src="../docs/images/animated.gif" alt="" uk-gif>
```

***

## Blend Modes

Add one of the following classes to apply different blend modes to your backgrounds, for example when placing them on images. You can combine these with the [Overlay component](overlay.md). For a better understanding of how background blend modes work, take a look at this [CSS Tricks article](https://css-tricks.com/almanac/properties/b/background-blend-mode/).


| Class                              | Description                                               |
|------------------------------------|-----------------------------------------------------------|
| `.uk-blend-multiply`    | This class sets the blend mode to multiply.    |
| `.uk-blend-screen`      | This class sets the blend mode to screen.      |
| `.uk-blend-overlay`     | This class sets the blend mode to overlay.     |
| `.uk-blend-darken`      | This class sets the blend mode to darken.      |
| `.uk-blend-lighten`     | This class sets the blend mode to lighten.     |
| `.uk-blend-color-dodge` | This class sets the blend mode to color dodge. |
| `.uk-blend-color-burn`  | This class sets the blend mode to color burn.  |
| `.uk-blend-hard-light`  | This class sets the blend mode to hard light.  |
| `.uk-blend-soft-light`  | This class sets the blend mode to soft light.  |
| `.uk-blend-difference`  | This class sets the blend mode to difference.  |
| `.uk-blend-exclusion`   | This class sets the blend mode to exclusion.   |
| `.uk-blend-hue`         | This class sets the blend mode to hue.         |
| `.uk-blend-saturation`  | This class sets the blend mode to saturation.  |
| `.uk-blend-color`       | This class sets the blend mode to color.       |
| `.uk-blend-luminosity`  | This class sets the blend mode to luminosity.  |

```html
<div class="uk-position-relative">
    <div class="uk-blend-multiply uk-overlay uk-overlay-primary"></div>
    <img src="" alt="">
</div>
```

```example
<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small uk-light" uk-grid>
    <div>
        <div class="uk-inline">
            <div class="uk-blend-multiply uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Multiply">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Multiply</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-screen uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Screen">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Screen</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-overlay uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Overlay">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Overlay</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-darken uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Darken">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Darken</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-lighten uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Lighten">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Lighten</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-color-dodge uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Color Dodge">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Color Dodge</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-color-burn uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Color Burn">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Color Burn</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-hard-light uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Hard Light">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Hard Light</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
        <div class="uk-blend-soft-light uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Soft Light">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Soft Light</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-difference uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Difference">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Difference</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-exclusion uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Exclusion">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Exclusion</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-hue uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Hue">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Hue</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-saturation uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Saturation">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Saturation</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-color uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Color">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Color</p>
            </div>
        </div>
    </div>

    <div>
        <div class="uk-inline">
            <div class="uk-blend-luminosity uk-overlay uk-background-primary uk-position-cover uk-flex uk-flex-middle uk-flex-center"></div>
            <img src="images/dark.jpg" alt="Blend Luminosity">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Luminosity</p>
            </div>
        </div>
    </div>

</div>
```

***

## Transform Origin

To modify the origin of an animation, like scaling, add one of the `uk-transform-origin-*` classes. This can be combined with the [Animation component](animation.md).

| Class                                | Description                                      |
|--------------------------------------|--------------------------------------------------|
| `.uk-transform-origin-top-left`      | The transition originates from the top left.     |
| `.uk-transform-origin-top-center`    | The transition originates from the top.          |
| `.uk-transform-origin-top-right`     | The transition originates from the top right.    |
| `.uk-transform-origin-center-left`   | The transition originates from the left.         |
| `.uk-transform-origin-center-right`  | The transition originates from the right.        |
| `.uk-transform-origin-bottom-left`   | The transition originates from the bottom left.  |
| `.uk-transform-origin-bottom-center` | The transition originates from the bottom.       |
| `.uk-transform-origin-bottom-right`  | The transition originates from the bottom right. |

```
<div class="uk-transform-origin-bottom-right uk-animation-scale-up"></div>
```

```example
<div class="uk-child-width-1-3@m" uk-grid>
    <div class="uk-animation-toggle">
        <div class="uk-transform-origin-bottom-right uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Bottom Right</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-transform-origin-top-center uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Top Center</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-transform-origin-bottom-center uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Bottom Center</p>
        </div>
    </div>
</div>
```

***

## Disabled

To disable the click behavior of an element, like a button from the [Button component](button.md) add the `.uk-disabled` class.

```example
<button class="uk-disabled uk-button uk-button-default">Disabled</button>
```

***

## Drag

To apply a move cursor to elements that are being dragged, add the `.uk-drag` class.

```html
<div class="uk-drag"></div>
```

```example
<div class="uk-drag uk-width-small uk-padding uk-background-muted uk-text-center">
    <i uk-icon="icon: move; ratio: 2"></i>
</div>
```

To create a box shadow on an [upload area](upload.md) when dragging a file over it, add the `.uk-dragover` class.
