# Inverse

<p class="uk-text-lead">Inverse colors of any component for light or dark backgrounds.</p>

In general, there are UIkit styles which have light backgrounds, like the default UIkit style, or the styles with dark backgrounds. Depending on the background color, the default text color is either dark on light. But if the same style different background colors or background images are used, the opposite text color may be needed. Use the Inverse component to inverse the text color for such backgrounds. 

## Usage

Add the `.uk-light` class to color the text and all containing content to make it look great on dark backgrounds. Add the `.uk-dark` class to color the text and all containing content on light backgrounds correspondingly.

Since there is already a default text color, for light styles it is dark, and for dark styles it's light, only one of the classes is needed to change the text color for different backgrounds. In light styles, the `.uk-light` is needed and in dark styles the `.uk-dark` class. This also means that if one of the classes is used, the color cannot be changed back.

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

***

## Disable inverse component

The Inverse component generates CSS to color all component for the according background color. If your project does not need to inverse content colors, you can [disable the Inverse component](less.md#disable-inverse-component) when compiling Less.
