# JavaScript Utilities

UIkit comes with its own, rather small but yet powerful JavaScript Framework, of which you can make use as well.
The provided JavaScript utilities allow you to write simplified Vanilla JS and replace the most common functions of jQuery.
Once UIkit is [installed correctly](installation.md) they are accessible under the `UIkit.util` namespace.

***

## Attributes

The following functions are to work with HTML attributes. They either are used for conditional statements,
DOM manipulation or setting/retrieving values.

***

### attr

This function is used for setting or retrieving an attribute value. The following parameters may be passed to the function.

| Parameter | Type   | Default | Description           |
|:----------|:-------|:--------|:----------------------|
| `element` | String | `null`  | The HTML element      |
| `name`    | String | `null`  | The attribute's name  |
| `value`   | String | `null`  | The attribute's value |

HTML

```html
<a href="#" id="example"></a>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Get attribute value
var attrValue = UIkit.util.attr(element, 'id');

// Set attribute value
UIkit.util.attr(element, 'title', attrValue);
```

Result

```html
<a href="#" id="example" title="example"></a>
```

**Note** If the attribute doesn't already exist, it gets created simultaneously.

***

### hasAttr

This function is used for testing if an element has a specific attribute or not.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description          |
|:----------|:-------|:--------|:---------------------|
| `element` | String | `null`  | The HTML element     |
| `name`    | String | `null`  | The attribute's name |

HTML

```html
<div id="example" uk-grid></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Check if some element has some attribute
if (UIkit.util.hasAttr(element, 'uk-grid')) {
    console.log('This is a grid!');
} else {
    console.log('This is NOT a grid!');
}
```

Result

```log
This is a grid!
```

***

### removeAttr

This function is used for removing an attribute. The following parameters may be passed to the function.

| Parameter | Type   | Default | Description          |
|:----------|:-------|:--------|:---------------------|
| `element` | String | `null`  | The HTML element     |
| `name`    | String | `null`  | The attribute's name |

HTML

```html
<div id="example" invalid="non-sense"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Remove attribute
UIkit.util.removeAttr(element, 'invalid');
```

Result

```html
<div id="example"></div>
```

***

### filterAttr

This function is used for filtering an attribute's value. The following parameters may be passed to the function.

| Parameter     | Type   | Default | Description             |
|:--------------|:-------|:--------|:------------------------|
| `element`     | String | `null`  | The HTML element        |
| `attribute`   | String | `null`  | The attribute's name    |
| `pattern`     | String | `null`  | The replacement pattern |
| `replacement` | String | `null`  | The replacement's value |

HTML

```html
<div id="example" class="uk-position-top uk-overlay uk-overlay-default"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Filter an attribute's value
var pattern = new RegExp('(^|\\s)uk-position-top(?!\\S)', 'g');
UIkit.util.filterAttr(element, 'class', pattern, 'uk-position-bottom');
```

Result

```html
<div id="example" class="uk-position-bottom uk-overlay uk-overlay-default"></div>
```

***

### data

This function is an alias of the function `attr`. The only difference is its `data-` prefix, which makes things
a bit more convenient when working with the HTML5 `data-*` attributes. The following parameters may be passed to the function.

| Parameter     | Type   | Default | Description               |
|:--------------|:-------|:--------|:--------------------------|
| `element`     | String | `null`  | The HTML element          |
| `attribute`   | String | `null`  | The data-attribute's name |

HTML

```html
<div id="example" data-columns="3"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Get value of data-attribute
var columns = UIkit.util.data(element, 'columns');
console.log('Column count: ' + columns);
```

Result

```log
Column count: 3
```

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


