# Toggle

<p class="uk-text-lead">Hide, switch or change the appearence of different contents through a toggle.</p>

## Usage

To apply this component, just add the `uk-toggle="target: #ID"` attribute to a `<button>` or `<a>` element. You can use any selector with the toggle attribute.

The toggle will add or remove a class or attribute from the item. By default, it adds the `hidden` attribute to hide the element.

```html
<button uk-toggle="target: #my-id"></button>
<p id="my-id"></p>
```

```example
<div>
    <button class="uk-button uk-button-default" uk-toggle="target: #toggle">Toggle</button>
    <p id="toggle">What's up?</p>
</div>
```

***

## Multiple items

You can also toggle multiple items at the same time. Just add the `target: SELECTOR` option to the `uk-toggle` attribute and use a selector that applies to all items.

```html
<button uk-toggle="target: .my-class"></button>
<p class="my-class"></p>
<p class="my-class"></p>
```

```example
<button class="uk-button uk-button-default" uk-toggle="target: .toggle">Toggle</button>
<p class="toggle">Hello!</p>
<p class="toggle" hidden>Bazinga!</p>
```

**Note** In this example we added the `hidden` attribute to one of the items, so that only the other item will be shown. The toggle will switch visible states between both elements.

***

## Custom class

If you don't want to toggle the `hidden` attribute, you can also toggle a custom class. Just add the `cls: CLASS` option to the `uk-toggle` attribute. In this example we used the `.uk-card-primary` class to switch between different card styles.

```html
<button uk-toggle="target: #my-id; cls: uk-card-primary"></button>
<p id="my-id" class="uk-card uk-card-default"></p>
```

```example
<button class="uk-button uk-button-default" uk-toggle="target: #toggle-custom; cls: uk-card-primary">Toggle</button>
<div id="toggle-custom" class="uk-card uk-card-default uk-card-body uk-margin-small">Custom class</div>
```

***

## Animations

The Toggle component allows you to add animations to items when toggling between them. Just add one of the `.uk-animation-*` classes from the [Animation component](animation.md) to the animation parameter. The class will be applied to the in as well as the out animation. If you prefer a different out animation, just add another class.

```html
<button uk-toggle="target: #my-id; animation: uk-animation-fade"></button>
<p id="my-id"></p>
```

```example
<button href="#toggle-animation" class="uk-button uk-button-default" uk-toggle="target: #toggle-animation; animation: uk-animation-fade">Toggle</button>
<div id="toggle-animation" class="uk-card uk-card-default uk-card-body uk-margin-small">Animation</div>
```

***

### Multiple animations

You can also apply multiple animations from the [Animation component](animation). That way you can add different in and out animations.

```html
<button uk-toggle="target: #my-id; animation: uk-animation-slide-left, uk-animation-slide-bottom"></button>
<p id="my-id"></p>
```

```example
<button href="#toggle-animation-multiple" class="uk-button uk-button-default" uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-slide-left, uk-animation-slide-bottom">Toggle</button>
<div id="toggle-animation-multiple" class="uk-card uk-card-default uk-card-body uk-margin-small">Animation</div>
```

***

### Queued animations

When toggling multiple items with an animation, you might want to wait until the first animation has run through before animating the second item in. To do so, just add the `queued: true` option to the `uk-toggle` attribute.

```html
<button uk-toggle="target: .my-class; animation: uk-animation-fade; queued: true"></button>
<p class="my-class"></p>
<p class="my-class"></p>
```

```example
<button class="uk-button uk-button-default" uk-toggle="target: .toggle-animation-queued; animation: uk-animation-fade; queued: true; duration: 300">Toggle</button>
<p class="toggle-animation-queued uk-card uk-card-default uk-card-body uk-margin-small">Animation</p>
<p class="toggle-animation-queued uk-card uk-card-primary uk-card-body uk-margin-small" hidden>Animation</p>
```

***

## Modes

A toggle can be triggered in different ways. Just add the `mode` option to the `uk-toggle` attribute and apply one of these values.

| Value    | Description                                                                            |
|----------|----------------------------------------------------------------------------------------|
| `hover`  | The toggle will be triggered on hover.                                                 |
| `click ` | The toggle will be triggered on click. This is the default value.                      |
| `media`  | The toggling behavior depends on the viewport width. More information [below](#media). |


```html
<button uk-toggle="target: #my-id; mode: hover"></button>
<p id="my-id"></p>
```

```example
<div>
    <button class="uk-button uk-button-default" uk-toggle="target: #toggle-hover; mode: hover">hover</button>
    <p id="toggle-hover">What's up?</p>
</div>
```

***

### Media

When using the `media` mode, you also need to add the `media` option and apply a viewport value from `@s` to `@xl` to it. Without the `target` option, the toggle applies the toggled state to itself. So it will switch between the different states that are defined in the `cls` option depending on the viewport width that it is displayed on.

```html
<!-- The primary modifier will only be applied on large screens -->

<div class="uk-card uk-card-default" uk-toggle="cls: uk-card-primary; mode: media; media: @l"></div>
```

```example
<div class="uk-card uk-card-default uk-card-body uk-width-medium" uk-toggle="cls: uk-card-primary; mode: media; media: @l">
    Primary on large screens
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `target` | String | `false` | CSS selector of the element(s) to toggle. |
| `mode` | String | `click` | Trigger behavior, either `hover` or `click` |
| `cls` | String | `false` | The class that is being toggled. Defaults to the `hidden` attribute. |
| `animation` | String | `false` | Space separated names of [animations](animation.md) to use, comma separated for out animation. |
| `duration` | Number | `200` | Animation duration in milliseconds. |
| `queued` | Boolean | `true` | Toggle the targets successively. |
