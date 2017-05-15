# Marker

<p id="toptext" class="uk-text-lead">Create a marker icon that can be displayed on top of images.</p>

## Usage

To apply this component, add the `uk-marker` attribute to an `<a>` element. You can use the [Position component](position.md) to place the marker on top of an image.

```html
<a href="" uk-marker></a>
```

```example
<div class="uk-inline uk-dark">
    <img src="images/light.jpg" alt="">
    <a class="uk-position-absolute uk-transform-center" style="left: 20%; top: 30%" href="#" uk-marker></a>
    <a class="uk-position-absolute uk-transform-center" style="left: 60%; top: 40%" href="#" uk-marker></a>
    <a class="uk-position-absolute uk-transform-center" style="left: 80%; top: 70%" href="#" uk-marker></a>
</div>
```