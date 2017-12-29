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

The following functions are to work with HTML classes. They either are used for conditional statements,
DOM manipulation or setting/retrieving values.

***

### addClass

This function is used to add a class to an element. The following parameters may be passed to the function.

| Parameter | Type             | Default | Description                                           |
|:----------|:-----------------|:--------|:------------------------------------------------------|
| `element` | String           | `null`  | The HTML element                                      |
| `...args` | Arguments object | `null`  | An array like object, accepting multiple data entries |

HTML

```html
<div id="example"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Add class(es)
UIkit.util.addClass(element, 'uk-section', 'uk-section-primary');
```

Result

```html
<div id="example" class="uk-section uk-section-primary"></div>
```

**Note** If the class attribute doesn't already exist, it gets created simultaneously.

***

### removeClass

This function is used to remove a class from an element. The following parameters may be passed to the function.

| Parameter | Type             | Default | Description                                           |
|:----------|:-----------------|:--------|:------------------------------------------------------|
| `element` | String           | `null`  | The HTML element                                      |
| `...args` | Arguments object | `null`  | An array like object, accepting multiple data entries |

HTML

```html
<div id="example" class="uk-section uk-section-primary uk-section-small"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Remove class(es)
UIkit.util.removeClass(element, 'uk-section-primary', 'uk-section-small');
```

Result

```html
<div id="example" class="uk-section"></div>
```

***

### removeClasses

This function is used to remove a range of classes, based on a pattern.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description                 |
|:----------|:-------|:--------|:----------------------------|
| `element` | String | `null`  | The HTML element            |
| `cls`     | String | `null`  | The class(es) to be removed |

HTML

```html
<div id="example" class="uk-position-top uk-overlay uk-overlay-default"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Remove classes based on a pattern
var cls = 'uk-position-(top|bottom|left|right)(-[a-z]+)?';
UIkit.util.removeClass(element, cls);
```

Result

```html
<div id="example" class=" uk-overlay uk-overlay-default"></div>
```

***

### replaceClass

This function is used to replace a classes. The following parameters may be passed to the function.

| Parameter | Type             | Default | Description                                           |
|:----------|:-----------------|:--------|:------------------------------------------------------|
| `element` | String           | `null`  | The HTML element                                      |
| `...args` | Arguments object | `null`  | An array like object, accepting multiple data entries |

HTML

```html
<div id="example" class="uk-card uk-card-default"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Replace class
UIkit.util.replaceClass(element, 'uk-card-default', 'uk-card-primary');
```

Result

```html
<div id="example" class="uk-card uk-card-primary"></div>
```

***

### hasClass

This function is used to remove a range of classes, based on a pattern.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description             |
|:----------|:-------|:--------|:------------------------|
| `element` | String | `null`  | The HTML element        |
| `cls`     | String | `null`  | The class to be checked |

HTML

```html
<div id="example" class="uk-position-relative"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Check if some element has some class
if (UIkit.util.hasClass(element, 'uk-position-relative')) {
    console.log('Class was found!');
} else {
    console.log('Class was NOT found!');
}
```

Result

```log
Class was found!
```

***

### toggleClass

This function is used to toggle classes. The following parameters may be passed to the function.

| Parameter | Type             | Default | Description                                           |
|:----------|:-----------------|:--------|:------------------------------------------------------|
| `element` | String           | `null`  | The HTML element                                      |
| `...args` | Arguments object | `null`  | An array like object, accepting multiple data entries |
| `force`   | Boolean          | `null`  | **Optional:** Turns the toggle into a one way-only operation. If set to false, the class(es) will only be removed but not added again and vice versa. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) |

HTML

```html
<div id="example" class="uk-card uk-card-default"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Toggle a class
for (i = 0; i < 3; i++) { 
  UIkit.util.toggleClass(element, 'uk-card-default');
}
```

Result

```html
<div id="example" class="uk-card"></div>
```

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


