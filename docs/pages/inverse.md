# Inverse

<p class="uk-text-lead">Inverse the style of any component for light or dark backgrounds.</p>

## Usage

Add the `.uk-light` class to improve the visibility of content on dark backgrounds in a light style. When using a dark style, add the `.uk-dark` class to elements on a light background. These classes will color all containing content accordingly.

Only one class, `.uk-light` or `.uk-dark`, actually changes the color of nested content depending on the UIkit style. For example, when using a style which has light backgrounds text is already displayed in a dark color and all content looks great by default. This is why the `.uk-dark` doesn't have to apply any CSS and only the `.uk-light` class does to actually change the color of its containing content. If the UIkit style has dark backgrounds it's  vice versa. Text is displayed in a light color, which is why `.uk-light` doesn't apply any CSS but `.uk-dark` does.

Mind, that if the contents color is changed one time it can not be changed back.


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

**Note** Some modifiers from the [Section](section.md), [Card](card.md), [Tile](tile.md), [Overlay](overlay.md) and [Off-canvas](offcanvas.md) component are extending the inverse style automatically, so you don't have to add any class.

***

## Overlapping content

The `.uk-light` and `.uk-dark` classes are set on container elements and color their containing content. But there are cases where elements are not nested but have a position context and overlap each other. For example, a sticky navbar overlaps different sections beneath while scrolling. To color content depending on intersecting elements, add the `uk-inverse` attribute. It will set the `.uk-light` or `.uk-dark` class depending on the section beneath.

It detects the color mode by looking for the `--uk-inverse` custom property which is set by the content beneath. For example, the `.uk-light` or `.uk-dark` classes set the property their self, as well as section or tiles which inverse the colors of their content. If for some reason the content beneath is and should not inverse its content colors, but only overlapping content should be colored use the `.uk-inverse-light` or `.uk-inverse-dark` classes. They only set the `--uk-inverse` custom property to the corresponding color but without coloring the containing content.

## Disable inverse component

The Inverse component generates CSS to color all component for the according background color. If your project does not need to inverse content colors, you can [disable the Inverse component](less.md#disable-inverse-component) when compiling Less.
