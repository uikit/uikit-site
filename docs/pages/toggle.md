# Toggle

<p class="uk-text-lead">Hide, switch or change the appearence of different contents through a toggle.</p>

## Usage

To apply this component, just add the `uk-toggle="target: #ID"` attribute to a `<button>` or `<a>` element. You can use any selector with the toggle attribute.

The toggle will add or remove a class or attribute from the item. By default, it adds the `hidden` attribute to hide the element.

```html
<button uk-toggle="target: #toggle1"></button>
<p id="toggle1"></p>
```

```example
<p>
    <button class="uk-button uk-button-default" uk-toggle="target: #toggle1">Button</button>
    <a href="#" uk-toggle="target: #toggle1">Link</a>
</p>
<p id="toggle1">What's up?</p>
```

***

## Multiple items

You can also toggle multiple items at the same time. Just use the appropriate selector.

```example
<button class="uk-button uk-button-default" uk-toggle="target: .toggle2">Toggle</button>
<p class="toggle2">Hello!</p>
<p class="toggle2" hidden>Bazinga!</p>
```

**Note** In this example we added the `hidden` attribute to one of the items, so that only the other item will be shown. The toggle will switch visible states between both elements.

***

## Custom class

If you don't want to toggle the `.uk-hidden` class, you can also add your own custom class.

```example
<button class="uk-button uk-button-default" uk-toggle="target: #toggle3; cls: uk-card-primary">Toggle class</button>
<div id="toggle3" class="uk-card uk-card-default uk-margin-small"><div class="uk-card-body">Custom class? Yup.</div></div>
```

**Note** In this example we used the `.uk-card-primary` class to switch between different panel styles.

***

## Animations

The Toggle component allows you to add animations to items when toggling between them. Just add one of the .uk-animation-* classes from the Animation component to the animation parameter. The class will be applied to the in as well as the out animation. If you prefer a different out animation, just add another class.

```example
<button href="#toggle6" class="uk-button uk-button-default" uk-toggle="target: #toggle4; animation: uk-animation-fade">Toggle with animation</button>
<div id="toggle4" class="uk-card uk-card-default uk-margin-small"><div class="uk-card-body">Animation</div></div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `target` | String | `false` | CSS selector of the element(s) to toggle. |
| `mode` | String | `hover` | Trigger behavior, either `hover` or `click` |
| `cls` | String | `false` | The class that is being toggled. Defaults to the `hidden` attribute. |
| `animation` | String | `false` | Space separated names of [animations](animation.md) to use, comma separated for out animation. |
| `duration` | Number | `200` | Animation duration in milliseconds. |
| `queued` | Boolean | `true` | Toggle the targets successively. |
