# Font

<p class="uk-text-lead">A collection of utility classes to style fonts.</p>

Combine this component with the [Text component](text.md) or the [Heading component](heading.md) to style your content.

***

## Style modifiers

Add one of the following classes to set the font family and style of your text.

| Class                | Description                                                                                     |
| :------------------- | :---------------------------------------------------------------------------------------------- |
| `.uk-font-default`   | Add this class to apply the default font. Typically the font for the running text.              |
| `.uk-font-primary`   | Add this class to apply the primary font. Typically the font for headings.                      |
| `.uk-font-secondary` | Add this class to apply the secondary font. Typically an alternative font for smaller headings. |
| `.uk-font-tertiary`  | Add this class to apply the tertiary font. Typically a fancy font for headings.                 |

**Note** You need to style these classes in your theme. By default, UIkit doesn't apply any style.

```html
<div class="uk-font-primary"></div>
```

```example
<div class="uk-font-default">Font Default</div>
<div class="uk-font-primary">Font Primary</div>
<div class="uk-font-secondary">Font Secondary</div>
<div class="uk-font-tertiary">Font Tertiary</div>
```

***

## Size modifiers

Add one of the following classes to modify the font size of your text.

| Class              | Description                                                                                                     |
| :----------------- | :-------------------------------------------------------------------------------------------------------------- |
| `.uk-font-2xsmall` | Add this class to apply a 2x-small font size.                                                                   |
| `.uk-font-xsmall`  | Add this class to apply a x-small font size. By default, it's the font size of small text and the `h6` element. |
| `.uk-font-small`   | Add this class to apply a small font size. By default, it's the font size of running text and the `h5` element. |
| `.uk-font-medium`  | Add this class to apply a medium font size. By default, it's the font size of the  `h4` element.                |
| `.uk-font-large`   | Add this class to apply a large font size. By default, it's the font size of the  `h3` element.                 |
| `.uk-font-xlarge`  | Add this class to apply a x-large font size. By default, it's the font size of the  `h2` element.               |
| `.uk-font-2xlarge` | Add this class to apply a 2x-large font size. By default, it's the font size of the  `h1` element.              |
| `.uk-font-3xlarge` | Add this class to apply a 3x-large font size.                                                                   |
| `.uk-font-4xlarge` | Add this class to apply a 4x-large font size.                                                                   |
| `.uk-font-5xlarge` | Add this class to apply a 5x-large font size.                                                                   |
| `.uk-font-6xlarge` | Add this class to apply a 6x-large font size.                                                                   |
| `.uk-font-7xlarge` | Add this class to apply a 7x-large font size.                                                                   |

```html
<div class="uk-font-medium"></div>
```

```example
<div class="uk-font-2xsmall">2X-Small</div>
<div class="uk-font-xsmall">X-Small</div>
<div class="uk-font-small">Small</div>
<div class="uk-font-medium">Medium</div>
<div class="uk-font-large">Large</div>
<div class="uk-font-xlarge">X-Large</div>
<div class="uk-font-2xlarge">2X-Large</div>
<div class="uk-font-3xlarge">3X-Large</div>
<div class="uk-font-4xlarge">4X-Large</div>
<div class="uk-font-5xlarge">5X-Large</div>
<div class="uk-font-6xlarge">6X-Large</div>
<div class="uk-font-7xlarge">7X-Large</div>
```

***

## Font weight

Add one of the following classes to modify the font weight of your text.

| Class             | Description                                                                       |
| :---------------- | :-------------------------------------------------------------------------------- |
| `.uk-font-light`  | <span class="uk-font-light">Add this class to apply a light font weight.</span>   |
| `.uk-font-normal` | <span class="uk-font-normal">Add this class to apply a normal font weight.</span> |
| `.uk-font-bold`   | <span class="uk-font-bold">Add this class to apply a bold font weight.</span>     |

***

## Font style

Add the `.uk-font-italic` class to create <span class="uk-font-italic">italic text</span>.