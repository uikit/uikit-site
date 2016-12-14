# List

<p class="uk-text-lead">Easily create nicely looking lists, which come in different styles.</p>

## Usage

To apply this component, add the `.uk-list` class to an unordered or ordered list. The list will now display without any spacing or list-style.

```html
<ul class="uk-list">
    <li></li>
    <li></li>
    <li></li>
</ul>
```

```example
<ul class="uk-list">
    <li>List item 1</li>
    <li>List item 1</li>
    <li>List item 1</li>
</ul>
```

***

## Modifiers

To display the list in a different style, just add a modifier class to the the `.uk-list` class.

### Bullet list

Add the `.uk-list-bullet` class to display bullets in front of the list items.

```html
<ul class="uk-list uk-list-bullet">...</ul>
```

```example
<ul class="uk-list uk-list-bullet">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

### Divider list

Add the `.uk-list-divider` class to separate list items with lines.

```html
<ul class="uk-list uk-list-divider">...</ul>
```

```example
<ul class="uk-list uk-list-divider">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

### Striped list

Add zebra-striping to a list using the `.uk-list-striped` class.

```html
<ul class="uk-list uk-list-striped">...</ul>
```

```example
<ul class="uk-list uk-list-striped">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

***

### List space

Add the `.uk-list-large` class to increase the spacing between list items.

```html
<ul class="uk-list uk-list-large">...</ul>
```

```example
<div uk-grid class="uk-child-width-1-3@s">
    <div>
        <h4>Default</h4>  
        <ul class="uk-list uk-list-large">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Divider</h4>  
        <ul class="uk-list uk-list-large uk-list-divider">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>

    <div>
        <h4>Striped</h4>  
        <ul class="uk-list uk-list-large uk-list-striped">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>
</div>
```
