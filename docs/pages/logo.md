# Logo

<p class="uk-text-lead">Easily create and style your site logo with support for text, images, and automatic color inversion.</p>

## Usage

With the new `.uk-logo` class you can easily define your logo, for example within your navbar.

```html
<a class="uk-logo" href=""></a>
```

```example
<a class="uk-logo" href="#">Logo</a>
```

Add the `.uk-light` class from the [Inverse component](inverse.md) when displaying the image on dark backgrounds, so that its color will automatically be inverted for better visibility.

```example
<div class="uk-panel uk-padding uk-background-secondary uk-light">
    <a class="uk-logo" href="#">Logo</a>
</div>
```

***

## Logo image

You can also use an `<img>` element, for example an SVG, as a logo.

```html
<a class="uk-logo" href="">
    <img src="" width="" height="" alt="">
</a>
```

You can even automatically display alternative logos for light and dark backgrounds by using the [Inverse component](inverse.md). Just add the `.uk-logo-inverse` class to a second logo image. Depending on the color mode, the inverted logo will be displayed when the `.uk-light` or `.uk-dark` class is applied to the parent element.

```html
<div class="uk-light">
    <a class="uk-logo" href="">
        <img src="" width="" height="" alt="">
        <img class="uk-logo-inverse" src="" width="" height="" alt="">
    </a>
</div>
```

```example
<div class="uk-child-width-expand@s" uk-grid>
    <div>
        <div class="uk-panel uk-padding uk-background-muted">
            <a class="uk-logo" href="#" aria-label="Back to Home">
                <img src="images/logo-placeholder.svg" width="130" height="70" alt="">
                <img class="uk-logo-inverse" src="images/logo-placeholder-light.svg" width="130" height="70" alt="">
            </a>
        </div>
    </div>
    <div>
        <div class="uk-panel uk-padding uk-background-secondary uk-light">
            <a class="uk-logo" href="#" aria-label="Back to Home">
                <img src="images/logo-placeholder.svg" width="130" height="70" alt="">
                <img class="uk-logo-inverse" src="images/logo-placeholder-light.svg" width="130" height="70" alt="">
            </a>
        </div>
    </div>
</div>
```

**Note** To inject an SVG logo as inline SVG, use the [SVG component](svg.md).

