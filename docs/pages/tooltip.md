# Tooltip

<p class="uk-text-lead">Easily create a nice looking tooltip.</p>

## Usage

To apply this component, add the `uk-tooltip` attribute to an element. You also need to add a _title_ attribute, whose value will represent your tooltip's text.

```html
<div title="" uk-tooltip></div>
```

```example
<button class="uk-button uk-button-default" title="Hello World" uk-tooltip>Hover</button>
```

***

## Alignment

Add one of the following options to the `uk-tooltip` attribute to adjust the tooltip's alignment.

```html
<button title="" uk-tooltip="pos: top-left"></button>
```

| Attribute | Description |
| --------- | ----------- |
| `pos: top`          | Aligns the tooltip to the top.          |
| `pos: top-left`     | Aligns the tooltip to the top left.     |
| `pos: top-right`    | Aligns the tooltip to the top right.    |
| `pos: bottom`       | Aligns the tooltip to the bottom.       |
| `pos: bottom-left`  | Aligns the tooltip to the bottom left.  |
| `pos: bottom-right` | Aligns the tooltip to the bottom right. |
| `pos: left`         | Aligns the tooltip to the left.         |
| `pos: right`        | Aligns the tooltip to the right.        |

```example
<p uk-margin>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>Top</button>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: top-left">Top Left</button>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: top-right">Top Right</button>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: bottom">Bottom</button>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: bottom-left">Bottom Left</button>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: bottom-right">Bottom Right</button>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: left">Left</button>
    <button class="uk-button uk-button-default" title="Hello World" uk-tooltip="pos: right">Right</button>
</p>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

Learn more about [component configuration](javascript.md#component-configuration).

| Option | Value | Default | Description |
| --- | --- |
| `pos` | String | 'bottom-left' | Tooltip position. |
| `offset` | Number | 0 | The offset of the Tooltip. |
| `animation` | String | false | The space separated names of animations to use. Comma separate for animation out. |
| `duration` | Number | 200 | The animation duration. |
| `delay` | Number | 0 | The show delay. |
| `cls` | String | uk-active | The active class. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.tooltip(element, options);
```

### Events

These events will be triggered on elements with this component attached.

| Name | Description |
| --- | --- |
| `beforeShow` | Fires before an item is shown. Can prevent showing by returning `false`. |
| `show` | Fires after an item is shown. |
| `beforeHide` | Fires before an item is hidden. Can prevent showing by returning `false`. |
| `hide` | Fires after an item is hidden. |
