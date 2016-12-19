# Inverse

<p class="uk-text-lead">Inverse the style of any component for light or dark backgrounds.</p>

This component is extremely useful, as it allows you to optimize elements for all kinds of backgrounds – like primary colors or images. That way you can easily display a navbar on an image as well as a light, plain background, for example.

***

## Usage

Just add the `.uk-light` class to improve the visibility of objects on dark backgrounds in a light style. When using a dark style, add the `.uk-dark` class to elements on a light background.

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

