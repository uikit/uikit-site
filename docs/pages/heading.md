# Heading

<p class="uk-text-lead">Define different styles for headings.</p>

Combine this component with the [Font component](font.md) and the [Text component](text.md) and to style your headings.

***

## Style modifiers

Add one of the following classes to apply a different font family and style to your headings.

| Class                   | Description                                    |
| :---------------------- | :--------------------------------------------- |
| `.uk-heading-primary`   | Add this class to apply the primary heading.   |
| `.uk-heading-secondary` | Add this class to apply the secondary heading. |

**Note** You need to style these classes in your theme. By default, UIkit doesn't apply any style.

```html
<div class="uk-heading-primary"></div>
```

```example
<div class="uk-heading-primary">Heading Primary</div>
<div class="uk-heading-secondary">Heading Secondary</div>
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
