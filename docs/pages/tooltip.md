# Tooltip

<p class="uk-text-lead">Easily create a nice looking tooltip.</p>

## Usage

To apply this component, add the `uk-tooltip` attribute to an element. You also need to add a _title_ attribute, whose value will represent your tooltip's text.

```html
<div title="" uk-tooltip></div>
```

```example
<button class="uk-button uk-button-default" title="Hello World" uk-tooltip>Hover Me</button>
```

***

## Alignment

Add one of the following options to the `uk-tooltip` attribute to adjust the tooltip's alignment.

```html
<button title="" uk-tooltip="pos: top-left"></button>
```

| Example | Attribute | Description |
| --- | --- | --- |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>Top</button> | `pos: top` | Aligns the tooltip to the top. |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: top-left">Top Left</button> | `pos: top-left` | Aligns the tooltip to the top left. |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: top-right">Top Right</button> | `pos: top-right` | Aligns the tooltip to the top right. |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: bottom">Bottom</button> | `pos: bottom` | Aligns the tooltip to the bottom. |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: bottom-left">Bottom Left</button> | `pos: bottom-left` | Aligns the tooltip to the bottom left. |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: bottom-right">Bottom Right</button> | `pos: bottom-right` | Aligns the tooltip to the bottom right. |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: left">Left</button> | `pos: left` | Aligns the tooltip to the left. |
| <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: right">Right</button> | `pos: right` | Aligns the tooltip to the right. |

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Option | Value | Default | Description |
| --- | --- |
| `pos` | String | 'bottom-left' | Tooltip position. |
| `offset` | Number | 0 | The offset of the Tooltip. |
| `animation` | String | false | The space separated names of animations to use. Comma separate for animation out. |
| `duration` | Number | 200 | The animation duration. |
| `delay` | Number | 0 | The show delay. |
| `cls` | String | uk-active | The active class. |