# Inverse

<p class="uk-text-lead">Inverse the style of any component for light or dark backgrounds.</p>

## Usage

Add the `.uk-light` class to improve the visibility of objects on dark backgrounds in a light style. When using a dark style, add the `.uk-dark` class to elements on a light background.

**Note** Only one class will come to effect, depending on the style you are using. For example, when using a style with a light background, you can only apply the `.uk-light` class to optimize content on dark backgrounds, as text will already be displayed in a dark color on light backgrounds—and vice versa.

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
