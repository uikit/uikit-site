# JavaScript Utilities

Introduction text

***

## Attributes

Description text, maybe a table?

***

### attr

Description text

| Parameter | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| `element` | text | text    | text        |
| `name`    | text | text    | text        |
| `value`   | text | text    | text        |

HTML

```html
<input id="thanks">
```

JavaScript

```javascript
var element = document.getElementById('thanks');

// Get value
var elementId = UIkit.util.attr(element, 'id');

// Set value
// This also creates the attribute, if it doesn't already exist.
UIkit.util.attr(element, 'butno', elementId);
```

Result

```html
<input id="thanks" butno="thanks">
```

***

### hasAttr

***

### removeAttr

***

### filterAttr

***

### data

***

## Classes

***

## DOM

***

## Environment ?

***

## Events

***

## Position

***

## Selectors

***

## Styles


