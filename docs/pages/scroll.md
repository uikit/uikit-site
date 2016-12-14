# Scroll

<p class="uk-text-lead">Scroll smoothly when jumping to different sections on a page.</p>

## Usage

Simply add the `uk-scroll` attribute to any page-internal link that contains a URL fragment to add the smooth scrolling behavior.

```html
<a href="#my-id" uk-scroll></a>
```

```example
<a class="uk-button uk-button-primary" href="#target" uk-scroll>Scroll down</a>
```

***

## Callback after scroll

To receive a callback when scrolling has completed, you can listen to the `scrolled` event on the link element that triggered the scrolling.

```html
<a href="#my-id" id="scroll-trigger" uk-scroll></a>
```

```js
$('#scroll-trigger').on('scrolled', function () {
    alert('Done.');
});
```

```example
<a class="uk-button uk-button-primary" href="#target" id="scroll-trigger" uk-scroll>Down with callback</a>
```

***

## Component options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `duration` | Number | `1000` | Animation duration in milliseconds. |
| `transition` | String | `easeOutExpo` | Easing transition. Usable if you have the optional [easing plugin](http://gsgd.co.uk/sandbox/jquery/easing/) loaded on your page. |
| `offset` | Number | `0` | Pixel offset added to scroll top. |


<div style="height: 2000px;"></div>

<a id="target" class="uk-button uk-button-primary" href="#top" uk-scroll>Scroll up</a>

<script>
jQuery(function ($) {
    $('#scroll-trigger').on('scrolled', function () {
        alert('Done.');
    });
});
</script>
