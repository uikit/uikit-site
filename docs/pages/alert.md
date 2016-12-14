# Alert

<p class="uk-text-lead">Display success, warning and error messages.</p>

## Usage

To apply this component, add the `uk-alert` attribute to a block element.

```html
<div uk-alert></div>
```

```example
<div uk-alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

***

## Close button

To create a close button and enable its functionality, add the `.uk-alert-close` class to a `<button>` or `<a>` element inside the alert box. To apply a close icon, add the `uk-close` attribute from the [Close component](close.md).

```html
<div uk-alert>
    <a class="uk-alert-close" uk-close></a>
</div>
```

```example
<div uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <h3>Notice</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

***

## Color modifiers

There are several color modifiers available. Just add one of the following classes to apply a different look.

| Class               | Description                                                |
|---------------------|------------------------------------------------------------|
| `.uk-alert-primary` | Add this class to give the message a less subtle styling.  |
| `.uk-alert-success` | Add this class to indicate success or a positive message.  |
| `.uk-alert-warning` | Add this class to indicate a message containing a warning. |
| `.uk-alert-danger`  | Add this class to indicate an important message.           |

```example
<div class="uk-alert-primary" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>

<div class="uk-alert-success" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>

<div class="uk-alert-warning" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>

<div class="uk-alert-danger" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `animation` | Boolean or String | `true` | Fade out or use the [Animation component](animation.md). |
| `duration` | Number | `150` | Animation duration in milliseconds. |
| `close` | CSS selector | `.uk-alert-close` | The close trigger element. |
