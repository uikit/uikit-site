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

This function is used to check if an element contains a specific class.
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

| Parameter | Type             | Default | Description                                                                                                                                                                                                              |
|:----------|:-----------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `element` | String           | `null`  | The HTML element                                                                                                                                                                                                         |
| `...args` | Arguments object | `null`  | An array like object, accepting multiple data entries                                                                                                                                                                    |
| `force`   | Boolean          | `null`  | Turns the toggle into a one way-only operation. If set to false, the class(es) will only be removed but not added again and vice versa. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) |

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

## DOM (Document Object Model)

The following functions are to work with the DOM. They either are used for conditional statements,
DOM manipulation, event triggers or setting/retrieving values.

***

### isReady

This constant contains either true or false, whether the base direction of text is set to RTL (right to left).

HTML

```html
<html dir="rtl"></html>
```

JavaScript

```javascript
// Check if base direction of text is set to RTL
if (UIkit.util.isRtl) {
    console.log('Direction is set to RTL!');
} else {
    console.log('Direction is set to LTR!');
}
```

Result

```log
Direction is set to RTL!
```

***

### ready

This function triggers as soon as the page's Document Object Model (DOM) becomes safe to manipulate.

JavaScript

```javascript
// Run callback once DOM is ready
UIkit.util.ready(function() {
    console.log('DOM is now safely manipulable.');
});
```

Result

```log
DOM is now safely manipulable.
```

***

### transition

This function is used for transitioning a CSS value. The following parameters may be passed to the function.

| Parameter    | Type   | Default   | Description                                                                                        |
|:-------------|:-------|:----------|:---------------------------------------------------------------------------------------------------|
| `element`    | String | `null`    | The HTML element                                                                                   |
| `props`      | Object | `null`    | The CSS properties to be changed                                                                   |
| `duration`   | Number | `400`     | The transition's duration (in milliseconds)                                                        |
| `transition` | String | `linear`  | Timing functions: `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`, `step-end` |

HTML

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Transition a CSS property to a certain value
UIkit.util.transition(element, { 'opacity': 0 }).then(console.log('Transition finished!'));
```

Result

```log
Transition finished!
```

**Note** Before starting a transition, a value for the CSS property to be transitioned has to be present!

***

### Transition

The Transition object makes four handy functions accessible, which are the following.

| Method       | Description                                                                |
|:-------------|:---------------------------------------------------------------------------|
| `start`      | Is an alias of the above mentioned `transition` function                   |
| `stop`       | Stops the transition                                                       |
| `cancel`     | Cancels the transition                                                     |
| `inProgress` | Either returns true or false, whether the transition is in progress or not |

HTML

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

JavaScript

```javascript
var element = document.getElementById('example');
var Transition = UIkit.util.Transition;

// Start the transition
Transition.start(element, { 'background': '#000', 'color': '#fff' }, 500, 'ease');

// Check whether transition is in progress
console.log(Transition.inProgress(element) ? 'Transition in progress!' : 'No transition running!');

// Stop the transition
Transition.stop(element);

// Cancel the transition
Transition.cancel(element);

// Check whether transition is in progress
console.log(Transition.inProgress(element) ? 'Transition in progress!' : 'No transition running!');
```

Result

```log
Transition in progress!
No transition running!
```

***

### animate

This function is used for animating an element. The following parameters may be passed to the function.

| Parameter   | Type    | Default | Description                                                                                                    |
|:------------|:--------|:--------|:---------------------------------------------------------------------------------------------------------------|
| `element`   | String  | `null`  | The HTML element                                                                                               |
| `animation` | String  | `null`  | The animation name, list of [available animations](animation.md#usage)                                         |
| `duration`  | Number  | `200`   | The animation's duration (in milliseconds)                                                                     |
| `origin`    | String  | `null`  | Origin modifier (works only with scaling animations), list of [available origins](utility.md#transform-origin) |
| `out`       | Boolean | `null`  | Reverse modifier to change whether the animation is incoming or not                                            |

HTML

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Animate an element
UIkit.util.animate(element, 'uk-animation-scale-up', 200, 'bottom-right', false).then(console.log('Animation finished!'));
```

Result

```log
Animation finished!
```

***

### Animation

The Animation object makes four handy functions accessible, which are the following.

| Method       | Description                                                                    |
|:-------------|:-------------------------------------------------------------------------------|
| `in`         | Is an alias of the above mentioned `animate` function, but always animates in  |
| `out`        | Is an alias of the above mentioned `animate` function, but always animates out |
| `inProgress` | Either returns true or false, whether the animation is in progress or not      |
| `cancel`     | Cancels the animation                                                          |

HTML

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

JavaScript

```javascript
var element = document.getElementById('example');
var Animation = UIkit.util.Animation;

// Animate in
Animation.in(element, 'uk-animation-fade', 400, 'ease-in');

// Check whether animation is in progress
console.log(Animation.inProgress(element) ? 'Animation in progress!' : 'No animation running!');

// Animate out
Animation.out(element, 'uk-animation-fade', 400, 'ease-out');

// Cancel the transition
Animation.cancel(element);

// Check whether animation is in progress
console.log(Animation.inProgress(element) ? 'Animation in progress!' : 'No animation running!');
```

Result

```log
Animation in progress!
No animation running!
```

***

### isInView

This function is used to check if an element is currently visible inside the viewport.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description          |
|:----------|:-------|:--------|:---------------------|
| `element` | String | `null`  | The HTML element     |
| `top`     | Number | `0`     | Offset from the top  |
| `left`    | Number | `0`     | Offset from the left |

HTML

```html
<div id="example" class="uk-card uk-card-default uk-card-body"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Check if element comes into view, when scrolling
window.addEventListener('scroll', function() {
  if (UIkit.util.isInView(element)) {
    console.log('Element is visible!');
  } else {
    console.log('Element is not yet visible!');
  }
});
```

Result

```log
'Element is visible!'
```

***

### scrolledOver

This function is used to return the percentage value of how an element is currently positioned compared to the viewport.
Example: If the element is at the very top of your current viewport, this function will return a value of `0`.
As soon as the element leaves the viewport, the function now returns a value of `1`. If the element is "scrolled over"
exactly half of its height, the function returns the value of `0.5`.
The following parameter may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `element` | String | `null`  | The HTML element |

HTML

```html
<div id="example" class="uk-card uk-card-default uk-card-body"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Check if you scrolled past an element
window.addEventListener('scroll', function() {
  if (UIkit.util.scrolledOver(element) < 1) {
    console.log('The element has not been "scrolled over" yet.');
  } else {
    console.log('You have scrolled past the element.');
  }
});
```

Result

```log
'The element has not been "scrolled over" yet.'
```

***

### getIndex

This function is used to find the index of an element inside a group of other elements.
The following parameters may be passed to the function.

| Parameter  | Type           | Default | Description                           |
|:-----------|:---------------|:--------|:--------------------------------------|
| `i`        | Number, String | `null`  | The HTML element to be indexed        |
| `elements` | String         | `null`  | The list of HTML elements to count in |
| `current`  | Number         | `0`     | Start value for counting the index    |

HTML

```html
<div class="uk-position-relative" uk-slideshow>
    <ul id="example" class="uk-slideshow-items">
        <li><img src="..." alt="" uk-cover></li>
        <li><img src="..." alt="" uk-cover></li>
        <li><img src="..." alt="" uk-cover></li>
    </ul>
</div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Get index for a specific element
console.log('Index is ' + UIkit.util.getIndex(element.children[1], element.children));
```

Result

```log
'Index is 1'
```

***

### isVoidElement

This function is used to detect if an element is a self-closing HTML tag.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `element` | String | `null`  | The HTML element |

HTML

```html
<input id="example" type="text">
```

JavaScript

```javascript
var element = document.getElementById('example');

// Check if element is a void element (self-closing)
if (UIkit.util.isVoidElement(element)) {
  console.log('This is a void element!');
} else {
  console.log('This is not a self-closing HTML tag.');
}
```

Result

```log
'This is a void element!'
```

***

### Dimensions

***

### preventClick

***

### isVisible

***

### selInput

***

### isInput

***

### empty

***

### html

***

### prepend

***

### append

***

### before

***

### after

***

### remove

***

### wrapAll

***

### wrapInner

***

### unwrap

***

### fragment

***

### index

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


