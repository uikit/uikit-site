# Background

<p class="uk-text-lead">A collection of utility classes to add different backgrounds to elements.</p>

## Usage

To apply a background color to an element, add one of the following classes. The actual color for each modifier is defined by the UIkit style that you have chosen or customized.

| Class                      | Description                                              |
|----------------------------|----------------------------------------------------------|
| `.uk-background`           | Applies the default background color.    |
| `.uk-background-muted`     | Applies a muted background color.        |
| `.uk-background-primary`   | Applies the primary background color.    |
| `.uk-background-secondary` | Applies an alternative background color. |

```html
<div class="uk-background-primary"></div>
```

**Note:** To adapt your content for better visibility on each background, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

```example
<div class="uk-child-width-1-2@s uk-text-center" uk-grid>
    <div>
        <div class="uk-background uk-padding"><code>.uk-background</code></div>
    </div>
    <div>
        <div class="uk-background-muted uk-padding"><code>.uk-background-muted</code></div>
    </div>
    <div>
        <div class="uk-background-primary uk-padding uk-light"><code>.uk-background-primary</code></div>
    </div>
    <div>
        <div class="uk-background-secondary uk-padding uk-light"><code>.uk-background-secondary</code></div>
    </div>
</div>
```

***

## Size

This component features classes to specify the size of background images by keeping its intrinsic ratio.

| Class                    | Description                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------|
| `.uk-background-cover`   | Scales the background image to completely cover the containing area.                           |
| `.uk-background-contain` | Scales the background image as far as its width and height can fit inside the containing area. |

```html
<div class="uk-background-cover"></div>
```

```example
<div class="uk-child-width-1-2@s uk-light" uk-grid>
    <div>
        <div class="uk-background-cover uk-height-medium uk-flex uk-flex-center uk-flex-middle" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <code>.uk-background-cover</code>
        </div>
    </div>
    <div>
        <div class="uk-background-contain uk-background-muted uk-height-medium uk-flex uk-flex-center uk-flex-middle" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <code>.uk-background-contain</code>
        </div>
    </div>
</div>
```

***

## Position

To alter the background position of your image — which is in the top left hand corner of the area by default, add one of the following classes.

**Note:** When using the `.uk-background-cover` or `.uk-background-contain` class, the background position automatically shifts to the middle.

| Class                          | Description                                                          |
|--------------------------------|----------------------------------------------------------------------|
| `.uk-background-top-left`      | The initial position of the image is in the top left hand corner.     |
| `.uk-background-top-center`    | The initial position of the image is at the top.                      |
| `.uk-background-top-right`     | The initial position of the image is in the top right hand corner.    |
| `.uk-background-center-left`   | The initial position of the image is on the left.                     |
| `.uk-background-center-center` | The initial position of the image is in the middle.                   |
| `.uk-background-center-right`  | The initial position of the image is on the right.                    |
| `.uk-background-bottom-left`   | The initial position of the image is in the bottom left hand corner.  |
| `.uk-background-bottom-center` | The initial position of the image is at the bottom.                   |
| `.uk-background-bottom-right`  | The initial position of the image is in the bottom right hand corner. |

```html
<div class="uk-background-top-left"></div>
```

```example
<div class="uk-child-width-1-2@s uk-light" uk-grid>
    <div>
        <div class="uk-background-top-right uk-height-medium uk-flex uk-flex-middle uk-flex-center" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <code>.uk-background-top-right</code>
        </div>
    </div>
    <div>
        <div class="uk-background-bottom-left uk-height-medium uk-flex uk-flex-middle uk-flex-center" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <code>.uk-background-bottom-left</code>
        </div>
    </div>
</div>
```

***

### No Repeat

To keep smaller images from repeating to fill the background area, add the `.uk-background-no-repeat` class. This can be very useful in combination with the background position classes.

```html
<div class="uk-background-norepeat"></div>
```

```example
<div class="uk-background-norepeat uk-background-center-center uk-background-muted uk-height-medium uk-width-large" style="background-image: url(../docs/images/placeholder_200x150_2.svg);"></div>
```

***

### Attachment

You can also apply a fixed background attachment, so that the image remains in its position while scrolling the site.

```html
<div class="uk-background-fixed"></div>
```

```example
<div class="uk-position-relative">
    <div class="uk-background-fixed uk-background-cover uk-height-medium uk-width-large" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);"></div>
</div>
```

***

## Responsive background image

Add one of the following classes to limit the display of background images to certain viewport sizes.

| Class                     | Description                                                         |
|---------------------------|---------------------------------------------------------------------|
| `.uk-background-image@s`  | Displays the background image on device widths of _640px_ and larger.  |
| `.uk-background-image@m`  | Displays the background image on device widths of _960px_ and larger.  |
| `.uk-background-image@l`  | Displays the background image on device widths of _1200px_ and larger. |
| `.uk-background-image@xl` | Displays the background image on device widths of _1600px_ and larger. |

```html
<div class="uk-background-image@m"></div>
```

Resize your browser window to see the effect in the example below.

```example
<div class="uk-background-image@m uk-height-medium uk-width-large" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);"></div>
```

***

## Blend Modes

Add one of the following classes to apply different blend modes to your background image. You can combine these with the background color classes, as well.


| Class                              | Description                                               |
|------------------------------------|-----------------------------------------------------------|
| `.uk-background-blend-multiply`    | This class sets the background blend mode to multiply.    |
| `.uk-background-blend-screen`      | This class sets the background blend mode to screen.      |
| `.uk-background-blend-overlay`     | This class sets the background blend mode to overlay.     |
| `.uk-background-blend-darken`      | This class sets the background blend mode to darken.      |
| `.uk-background-blend-lighten`     | This class sets the background blend mode to lighten.     |
| `.uk-background-blend-color-dodge` | This class sets the background blend mode to color dodge. |
| `.uk-background-blend-color-burn`  | This class sets the background blend mode to color burn.  |
| `.uk-background-blend-hard-light`  | This class sets the background blend mode to hard light.  |
| `.uk-background-blend-soft-light`  | This class sets the background blend mode to soft light.  |
| `.uk-background-blend-difference`  | This class sets the background blend mode to difference.  |
| `.uk-background-blend-exclusion`   | This class sets the background blend mode to exclusion.   |
| `.uk-background-blend-hue`         | This class sets the background blend mode to hue.         |
| `.uk-background-blend-saturation`  | This class sets the background blend mode to saturation.  |
| `.uk-background-blend-color`       | This class sets the background blend mode to color.       |
| `.uk-background-blend-luminosity`  | This class sets the background blend mode to luminosity.  |

```html
<div class="uk-background-blend-multiply uk-background-primary"></div>
```

```example
<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small uk-light" uk-grid>

    <div class="uk-inline">
        <div class="uk-background-blend-multiply uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Multiply</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-screen uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Screen</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-overlay uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Overlay</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-darken uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Darken</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-lighten uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Lighten</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-color-dodge uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Color Dodge</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-color-burn uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Color Burn</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-hard-light uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Hard Light</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Soft Light</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-difference uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Difference</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-exclusion uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Exclusion</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-hue uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Hue</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-saturation uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Saturation</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-color uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Color</div>
        </div>
    </div>

    <div class="uk-inline">
        <div class="uk-background-blend-luminosity uk-background-primary uk-background-cover uk-height-small" style="background-image: url(../docs/images/placeholder_800x400_2.jpg);">
            <div class="uk-position-center">Luminosity</div>
        </div>
    </div>

</div>
```
