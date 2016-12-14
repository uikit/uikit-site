# Slidenav

<p class="uk-text-lead">Defines a navigation with previous and next buttons to flip through slideshows.</p>

## Usage

To create a navigation with previous and next buttons, just add the `uk-slidenav` attribute to `<a>` elements. Add the `previous` or `next` parameter to the attribute to style the nav items as previous or next buttons.

```html
<a href="" uk-slidenav="next">
<a href="" uk-slidenav="previous">
```

```example
<a href="#" uk-slidenav="previous"></a>
<a href="#" uk-slidenav="next"></a>
```

***

## Large Modifier

To increase the size of the slidenav icons, add the `.uk-slidenav-large` class.

```html
<a href="" class="uk-slidenav-large" uk-slidenav="next">
<a href="" class="uk-slidenav-large" uk-slidenav="previous">
```

```example
<a href="#" class="uk-slidenav-large" uk-slidenav="previous"></a>
<a href="#" class="uk-slidenav-large" uk-slidenav="next"></a>
```

***

## Position Slidenav

To position the slidenav over any content, like a slideshow or an image, just add one of the `.uk-position-*` classes from the [Position component](position.md). Wrap the nav and content inside a container element and add the `.uk-inline` class.

Use the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md) to apply a light or dark color for better visibility.

```html
<div class="uk-inline uk-light">
    <img src="" alt="">
    <a class="uk-position-center-left" href="" uk-slidenav="previous"></a>
    <a class="uk-position-center-right" href="" uk-slidenav="next"></a>
</div>
```

Note: You can also apply the [Visibility component](visibility.md), so that the slidenav only appears on hover.

```example
<div class="uk-inline uk-visible-toggle uk-light">
    <img src="../docs/images/placeholder_600x400.svg" alt="">
    <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large" href="#" uk-slidenav="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large" href="#" uk-slidenav="next"></a>
</div>
```

***

## Slidenav Container

To display a conjoint slidenav, wrap the slidenav items inside a `<div>` element and add the `.uk-slidenav-container` class, as well as one of the `.uk-position-*` classes.

```html
<div class="uk-inline">
    <img src="" alt="">
    <div class="uk-slidenav-container uk-position-bottom-right">
        <a href="" uk-slidenav="previous"></a>
        <a href="" uk-slidenav="next"></a>
    </div>
</div>
```

```example
<div class="uk-inline uk-light">
    <img src="../docs/images/placeholder_600x400.svg" alt="">

    <div class="uk-slidenav-container uk-position-top-left uk-position-small">
        <a class="uk-slidenav-large" href="#" uk-slidenav="previous"></a>
        <a class="uk-slidenav-large" href="#" uk-slidenav="next"></a>
    </div>

    <div class="uk-slidenav-container uk-position-top-right uk-position-small">
        <a class="uk-slidenav-large" href="#" uk-slidenav="previous"></a>
        <a class="uk-slidenav-large" href="#" uk-slidenav="next"></a>
    </div>

    <div class="uk-slidenav-container uk-position-bottom-left uk-position-small">
        <a class="uk-slidenav-large" href="#" uk-slidenav="previous"></a>
        <a class="uk-slidenav-large" href="#" uk-slidenav="next"></a>
    </div>

    <div class="uk-slidenav-container uk-position-bottom-right uk-position-small">
        <a class="uk-slidenav-large" href="#" uk-slidenav="previous"></a>
        <a class="uk-slidenav-large" href="#" uk-slidenav="next"></a>
    </div>
</div>
```