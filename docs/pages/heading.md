# Heading

<p class="uk-text-lead">Define different styles for headings.</p>

Combine this component with the [Text component](text.md) to style your headings.

## Size modifiers

Add one of the following classes to modify the size and style of headings. Usually, these classes would be used on heading elements but they work also with any other element like a `div` element. Note that these classes extend the heading classes from the [Base component](base.md#headings) upward, and the smallest modifier picks up the size after `h1` element.

| Class                 | Description                                      |
| :-------------------- | :----------------------------------------------- |
| `.uk-heading-small`   | Add this class to apply a small-sized heading.   |
| `.uk-heading-medium`  | Add this class to apply a medium-sized heading.  |
| `.uk-heading-large`   | Add this class to apply a large-sized heading.   |
| `.uk-heading-xlarge`  | Add this class to apply a xlarge-sized heading.  |
| `.uk-heading-2xlarge` | Add this class to apply a 2xlarge-sized heading. |

```html
<h1 class="uk-heading-medium"></h1>
```

```example
<h1 class="uk-heading-small">Small</h1>
<h1 class="uk-heading-medium">Medium</h1>
<h1 class="uk-heading-large">Large</h1>
<h1 class="uk-heading-xlarge">X-Large</h1>
<h1 class="uk-heading-2xlarge">2X-Large</h1>
```

***

## Divider modifier

To apply a divider to a heading, add the `.uk-heading-divider` class. You can combine it with any size modifier.

```html
<h1 class="uk-heading-divider"></h1>
```

```example
<h1 class="uk-heading-divider">Heading Divider</h1>
```

***

## Bullet modifier

To apply a bullet to a heading, add the `.uk-heading-bullet` class. You can combine it with any size modifier, and it works well with text alignment.

```html
<h1 class="uk-heading-bullet"></h1>
```

```example
<h1 class="uk-heading-bullet">Heading Bullet</h1>
```

***

## Line modifier

To apply a vertically centered line to a heading, add the `.uk-heading-line` class and place a `<span>` element inside the heading element. You can combine it with any size modifier, and it works well with text alignment.

```html
<h1 class="uk-heading-line"><span></span></h1>
```

```example
<h1 class="uk-heading-line"><span>Heading Line</span></h1>

<h1 class="uk-heading-line uk-text-center"><span>Heading Line</span></h1>

<h1 class="uk-heading-line uk-text-right"><span>Heading Line</span></h1>
```
