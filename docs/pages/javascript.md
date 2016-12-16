# JavaScript

<p class="uk-text-lead">Use data attributes to apply JavaScript to UIkit components.</p>

You can use all UIkit components by just adding `uk-*` attributes to your HTML elements without writing a single line of JavaScript. This is UIkit's best practice of using its components and should always be considered first.

```html
<div id="sticky" uk-sticky="offset: 50;"></div>
```

You can also use the components directly and apply them to elements in your document.

```js
UIkit.sticky('#sticky', {
    offset: 50
});
```
