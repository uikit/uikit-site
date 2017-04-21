# Inverse

<p class="uk-text-lead">Inverse the style of any component for light or dark backgrounds.</p>

## Usage

Add the `.uk-light` class to improve the visibility of objects on dark backgrounds in a light style. When using a dark style, add the `.uk-dark` class to elements on a light background.

**Note** Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the `.uk-light` class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds — and vice versa.

```html
<div class="uk-light"></div>

<div class="uk-dark"></div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-light uk-background-secondary uk-padding">
            <h3>Light</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="uk-button uk-button-default">Button</button>
        </div>
    </div>
    <div>
        <div class="uk-dark uk-background-muted uk-padding">
            <h3>Dark</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="uk-button uk-button-default">Button</button>
        </div>
    </div>
</div>
```

**Note** Some modifiers from the [Section](section.md), [Card](card.md), [Overlay](overlay.md) and [Off-canvas](offcanvas.md) component are extending the inverse style automatically, so you don't have to add any class.

***

## Customize using Less

The Inverse components includes additional styles to implement the flexible inverse behaviour. If your project does not make use of these styles, you can leave them out when [compiling Less](less.md). This allows smaller file sizes of the compiled CSS. To do so, search for Less variables containing `color-mode` (e.g. `@card-primary-color-mode`), and set them to `none`.

To disable the inverse styles completely, set:

```less
@inverse-global-color-mode: none;
```

You can also disable the inverse mode for specific components:

```less
// Card
@card-primary-color-mode: none;
@card-secondary-color-mode: none;

// Navbar
@navbar-color-mode: none;

// Off-canvas
@offcanvas-bar-color-mode: none;

// Overlay
@overlay-primary-color-mode: none;

// Section
@section-primary-color-mode: none;
@section-secondary-color-mode: none;

// Tile
@tile-primary-color-mode: none;
@tile-secondary-color-mode: none;
```
