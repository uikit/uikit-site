# JavaScript Utilities

UIkit comes with its own, rather small but yet powerful JavaScript Framework, of which you can make use as well.
The provided JavaScript utilities allow you to write simplified Vanilla JS and replace the most common functions of jQuery.
Once UIkit is [installed correctly](installation.md) they are accessible under the `UIkit.util` namespace.

**Note** You can import all functions, e.g. `var { $, addClass } = UIkit.util` and then use them like so `addClass($('#my-id'), 'example');`.
This approach makes your code much smaller and clean.

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

**Note** If the attribute does not already exist, it gets created simultaneously.

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
    <ul class="uk-slideshow-items">
        <li><img src="..." alt="" uk-cover></li>
        <li id="example"><img src="..." alt="" uk-cover></li>
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
<input id="example" type="text" class="uk-input">
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

The Dimensions object makes three handy functions accessible, which are the following.

***

#### ratio

This function returns the aspect ratio of an elements dimensions compared to a certain value.
The following parameters may be passed to the function.

| Parameter    | Type   | Default | Description                                                 |
|:-------------|:-------|:--------|:------------------------------------------------------------|
| `dimensions` | Object | `null`  | The `width` and `height` of some element                    |
| `prop`       | String | `null`  | The property to compare against, either `width` or `height` |
| `value`      | Number | `null`  | The value to compare against                                |

HTML

```html
<div class="uk-inline">
    <img id="example" width="480" height="360" src="..." alt="Example image">
</div>
```

JavaScript

```javascript
var element = document.getElementById('example');
var Dimensions = UIkit.util.Dimensions;

var dimensions = {
  width: element.width,
  height: element.height
};

// Get ratio for 100px width
console.log(Dimensions.ratio(dimensions, 'width', 100));
```

Result

```log
{height: 75, width: 100}
```

***

#### contain

This function returns a dimension, which is contained inside a certain maximum dimension.
The following parameters may be passed to the function.

| Parameter       | Type   | Default | Description                                           |
|:----------------|:-------|:--------|:------------------------------------------------------|
| `dimensions`    | Object | `null`  | The `width` and `height` of some element              |
| `maxDimensions` | Object | `null`  | The maximum `width` and `height` to be compliant with |

HTML

```html
<div class="uk-inline">
    <img id="example" width="480" height="360" src="..." alt="Example image">
</div>
```

JavaScript

```javascript
var element = document.getElementById('example');
var Dimensions = UIkit.util.Dimensions;

var dimensions = {
  width: element.width,
  height: element.height
};

var maxDimensions = {
  width: 360,
  height: 240
};

// Get the contained dimension
console.log(Dimensions.contain(dimensions, maxDimensions));
```

Result

```log
{width: 320, height: 240}
```

***

#### cover

This function returns a dimension, which covers a certain maximum dimension.
The following parameters may be passed to the function.

| Parameter       | Type   | Default | Description                                           |
|:----------------|:-------|:--------|:------------------------------------------------------|
| `dimensions`    | Object | `null`  | The `width` and `height` of some element              |
| `maxDimensions` | Object | `null`  | The maximum `width` and `height` to be compliant with |

HTML

```html
<div class="uk-inline">
    <img id="example" width="480" height="360" src="..." alt="Example image">
</div>
```

JavaScript

```javascript
var element = document.getElementById('example');
var Dimensions = UIkit.util.Dimensions;

var dimensions = {
  width: element.width,
  height: element.height
};

var maxDimensions = {
  width: 360,
  height: 240
};

// Get the covering dimension
console.log(Dimensions.cover(dimensions, maxDimensions));
```

Result

```log
{height: 270, width: 360}
```

***

### isVisible

This function is used to detect, whether an element is visible or not.
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

// Is the element visible?
if (UIkit.util.isVisible(element)) {
  console.log('The element is visible!');
} else {
  console.log('The element is hidden!');
}
```

Result

```log
'The element is visible!'
```

***

### isInput

This function is used to detect, whether an element is visible or not.
The following parameter may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `element` | String | `null`  | The HTML element |

HTML

```html
<input class="example uk-input" type="text" placeholder="Input">

<select class="example uk-select">
    <option>Option 01</option>
    <option>Option 02</option>
</select>

<textarea class="example uk-textarea" rows="5" placeholder="Textarea"></textarea>

<div class="example uk-card uk-card-default uk-card-body">Card</div>
```

JavaScript

```javascript
var elements = document.getElementsByClassName('example');

for (var i=0; i < elements.length; i++) {
  if (UIkit.util.isInput(elements[i])) {
    console.log('A ' + elements[i].tagName.toLowerCase() + ' is an input type element!');
  } else {
    console.log('A ' + elements[i].tagName.toLowerCase() + ' is NOT an input type element!');
  }
}
```

Result

```log
'A input is an input type element!'
'A select is an input type element!'
'A textarea is an input type element!'
'A div is NOT an input type element!'
```

***

### empty

This function is used to empty an element. The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `element` | String | `null`  | The HTML element |

HTML

```html
<div id="example" class="uk-card uk-card-default uk-card-body">
    This card is not empty!
</div>
```

JavaScript

```javascript
var element = document.getElementById('example');

UIkit.util.empty(element);
```

Result

```html
<div id="example" class="uk-card uk-card-default uk-card-body"></div>
```

***

### html

This function is used to fill an element with some content. The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `parent`  | String | `null`  | The HTML element |
| `html` | String | `null`  | The HTML content |

HTML

```html
<div id="example" class="uk-card uk-card-default uk-card-body"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');
var content = '<p>This was injected by JavaScript!</p>';

UIkit.util.html(element, content);
```

Result

```html
<div id="example" class="uk-card uk-card-default uk-card-body">
    <p>This was injected by JavaScript!</p>
</div>
```

***

### prepend

This function is used to insert some content before any other child nodes inside another element.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `parent`  | String | `null`  | The HTML element |
| `element` | String | `null`  | The HTML content |

HTML

```html
<select id="example" class="uk-select">
    <option>Option 01</option>
    <option>Option 02</option>
</select>
```

JavaScript

```javascript
var element = document.getElementById('example');
var content = '<option>Injected by Javascript</option>';

UIkit.util.prepend(element, content);
```

Result

```html
<select id="example" class="uk-select">
    <option>Injected by Javascript</option>
    <option>Option 01</option>
    <option>Option 02</option>
</select>
```

***

### append

This function is used to insert some content after any other child nodes inside another element.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `parent`  | String | `null`  | The HTML element |
| `element` | String | `null`  | The HTML content |

HTML

```html
<select id="example" class="uk-select">
    <option>Option 01</option>
    <option>Option 02</option>
</select>
```

JavaScript

```javascript
var element = document.getElementById('example');
var content = '<option>Injected by Javascript</option>';

UIkit.util.prepend(element, content);
```

Result

```html
<select id="example" class="uk-select">
    <option>Option 01</option>
    <option>Option 02</option>
    <option>Injected by Javascript</option>
</select>
```

***

### before

This function is used to insert some content before another element.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `ref`     | String | `null`  | The HTML element |
| `element` | String | `null`  | The HTML content |

HTML

```html
<select class="uk-select">
    <option>Option 01</option>
    <option id="example">Option 02</option>
</select>
```

JavaScript

```javascript
var element = document.getElementById('example');
var content = '<option>Injected by Javascript</option>';

UIkit.util.before(element, content);
```

Result

```html
<select class="uk-select">
    <option>Option 01</option>
    <option>Injected by Javascript</option>
    <option id="example">Option 02</option>
</select>
```

***

### after

This function is used to insert some content after another element.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `ref`     | String | `null`  | The HTML element |
| `element` | String | `null`  | The HTML content |

HTML

```html
<select class="uk-select">
    <option id="example">Option 01</option>
    <option>Option 02</option>
</select>
```

JavaScript

```javascript
var element = document.getElementById('example');
var content = '<option>Injected by Javascript</option>';

UIkit.util.after(element, content);
```

Result

```html
<select class="uk-select">
    <option id="example">Option 01</option>
    <option>Injected by Javascript</option>
    <option>Option 02</option>
</select>
```

***

### remove

This function is used to remove a certain element from the DOM.
The following parameter may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `element` | String | `null`  | The HTML element |

HTML

```html
<select class="uk-select">
    <option id="example">Option 01</option>
    <option>Option 02</option>
</select>
```

JavaScript

```javascript
var element = document.getElementById('example');

UIkit.util.remove(element);
```

Result

```html
<select class="uk-select">
    <option>Option 02</option>
</select>
```

***

### wrapAll

This function is used to wrap some element inside a HTML structure.
The following parameters may be passed to the function.

| Parameter   | Type   | Default | Description        |
|:------------|:-------|:--------|:-------------------|
| `element`   | String | `null`  | The HTML element   |
| `structure` | String | `null`  | The HTML structure |

HTML

```html
<p id="example">This is a paragraph!</p>
```

JavaScript

```javascript
var element = document.getElementById('example');

UIkit.util.wrapAll(element, '<div class="uk-card uk-card-primary uk-card-body">');
```

Result

```html
<div class="uk-card uk-card-primary uk-card-body">
    <p id="example">This is a paragraph!</p>
</div>
```

***

### wrapInner

This function is used to wrap the content of some element with a HTML structure.
The following parameters may be passed to the function.

| Parameter   | Type   | Default | Description        |
|:------------|:-------|:--------|:-------------------|
| `element`   | String | `null`  | The HTML element   |
| `structure` | String | `null`  | The HTML structure |

HTML

```html
<p id="example">This is a paragraph!</p>
```

JavaScript

```javascript
var element = document.getElementById('example');

UIkit.util.wrapInner(element, '<span class="uk-text-danger">');
```

Result

```html
<p id="example"><span class="uk-text-danger">This is a paragraph!</span></p>
```

***

### unwrap

This function is used to unwrap some element, basically remove its direct parent.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `element` | String | `null`  | The HTML element |

HTML

```html
<div class="uk-card uk-card-primary uk-card-body">
    <p id="example">This is a paragraph!</p>
</div>
```

JavaScript

```javascript
var element = document.getElementById('example');

UIkit.util.unwrap(element);
```

Result

```html
<p id="example">This is a paragraph!</p>
```

***

### fragment

This function is used to transform HTML fragments into whole HTML elements.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description       |
|:----------|:-------|:--------|:------------------|
| `html`    | String | `null`  | The HTML fragment |

JavaScript

```javascript
console.log(UIkit.util.fragment('<div><p class="uk-text-danger">Some incomplete HTML!'));
```

Result

```html
<div><p class="uk-text-danger">Some incomplete HTML!</p></div>
```

***

### index

This function is used to find the index of an element inside a group of other elements.
The following parameters may be passed to the function.

| Parameter  | Type   | Default | Description                                          |
|:-----------|:-------|:--------|:-----------------------------------------------------|
| `element`  | String | `null`  | The HTML element to be indexed or a list of elements |
| `ref`      | String | `null`  | The element to index inside the element list         |

HTML

```html
<div id="grid" class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 1</div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body">Item 2</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 4</div>
    </div>
    <div id="grid-item">
        <div class="uk-card uk-card-primary uk-card-body">Item 5</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 6</div>
    </div>
</div>
```

JavaScript

```javascript
var grid = document.getElementById('grid');
var gridItem = document.getElementById('grid-item')

console.log(UIkit.util.index(gridItem));
console.log(UIkit.util.index(grid.children, gridItem));
```

Result

```log
4
4
```

***

## Events

The following functions are to work with DOM events.
They either are used for triggering, creating events or reacting on them.

***

### on

This function is used to react on a event, whenever it occurs. The following parameters may be passed to the function.

| Parameter    | Type     | Default | Description                                                                                                                                                 |
|:-------------|:---------|:--------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `target`     | String   | `null`  | The HTML element                                                                                                                                            |
| `type`       | String   | `null`  | The event type, e.g. `click`, `scroll` etc.                                                                                                                 |
| `selector`   | String   | `null`  | Used for dynamically added HTML elements                                                                                                                    |
| `listener`   | Function | `null`  | The callback function to run some code                                                                                                                      |
| `useCapture` | Boolean  | `false` | Indicating that events of this type will be dispatched to the registered `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree |

HTML

```html
<div id="example">
    <a class="uk-button uk-button-default" href="https://getuikit.com/docs/images/photo.jpg">Open Lightbox</a>
</div>
```

JavaScript

```javascript
var element = document.getElementById('example');
var lightbox = UIkit.lightbox(element);

// React on event
UIkit.util.on('a', 'click', function() {
  lightbox.show(0);
});

// React on event, which is attached to a dynamically created HTML element
UIkit.util.on(document, 'shown', '.uk-lightbox.uk-open', function() {
  console.log('Lightbox is displayed!');
});
```

Result

```log
'Lightbox is displayed!'
```

***

### off

This function is used to remove a previously registered event listener.
The following parameters may be passed to the function.

| Parameter    | Type     | Default | Description                                                                                      |
|:-------------|:---------|:--------|:-------------------------------------------------------------------------------------------------|
| `target`     | String   | `null`  | The HTML element                                                                                 |
| `type`       | String   | `null`  | The event type, e.g. `click`, `scroll` etc.                                                      |
| `listener`   | Function | `null`  | The callback function to run some code                                                           |
| `useCapture` | Boolean  | `false` | Specifies whether the `EventListener` to be removed is registered as a capturing listener or not |

HTML

```html
<button id="trigger" class="uk-button uk-button-primary">Trigger</button>
<button id="bind" class="uk-button uk-button-default">Bind</button>
<button id="unbind" class="uk-button uk-button-default">Unbind</button>
```

JavaScript

```javascript
var trigger = document.getElementById('trigger');
var bind = document.getElementById('bind');
var unbind = document.getElementById('unbind');

// Dummy function
function showNotification() {
  UIkit.notification('Some message...');
}

// Binds the event listener to the example button
UIkit.util.on(bind, 'click', function() {
  UIkit.util.on(trigger, 'click', showNotification);
});

// Unbinds the event listener from the example button
UIkit.util.on(unbind, 'click', function() {
  UIkit.util.off(trigger, 'click', showNotification);
});
```

Result

By default the `Trigger` button does nothing.
After clicking the `Bind` button, another click on the `Trigger` button shows a notification.
If the `Unbind` button is clicked, the `Trigger` button no longer shows a notification.

***

### once

This function is used to react on a event only once. The following parameters may be passed to the function.

| Parameter    | Type     | Default | Description                                                                                                                                                 |
|:-------------|:---------|:--------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `element`    | String   | `null`  | The HTML element                                                                                                                                            |
| `type`       | String   | `null`  | The event type, e.g. `click`, `scroll` etc.                                                                                                                 |
| `selector`   | String   | `null`  | Used for dynamically added HTML elements                                                                                                                    |
| `listener`   | Function | `null`  | The callback function to run some code                                                                                                                      |
| `useCapture` | Boolean  | `false` | Indicating that events of this type will be dispatched to the registered `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree |
| `condition`  | Boolean  | `false` | As soon the condition becomes false, the `EventListener` will be attached and is therefore ready to fire                                                    |

HTML

```html
<button id="trigger" class="uk-button uk-button-primary">Show message</button>
```

JavaScript

```javascript
var element = document.getElementById('example');

// Show a message, but only once
UIkit.util.once(element, 'click', function() {
  UIkit.notification('Some message...');
});
```

Result

By clicking the `Show message` button a notification is displayed.
Any further clicks on the same button won't fire another notification.

***

### trigger

This function is used to manually triggering an event on an element.
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description                                 |
|:----------|:-------|:--------|:--------------------------------------------|
| `target`  | String | `null`  | The HTML element to attach the event on     |
| `event`   | String | `null`  | The event type, e.g. `click`, `scroll` etc. |
| `detail`  | Any    | `null`  | The data passed when triggering the event   |

HTML

```html
<div id="example"></div>
```

JavaScript

```javascript
var element = document.getElementById('example');

// React on custom event
UIkit.util.on(element, 'MyEvent', function(e) {
  console.log(e.type, e.detail.data);
});

// Trigger a custom event
UIkit.util.trigger(element, 'MyEvent', { data: 'was triggered!' });
```

Result

```log
'MyEvent was triggered!'
```

***

### createEvent

This function is used to create a custom event. The following parameters may be passed to the function.

| Parameter    | Type    | Default | Description                                                    |
|:-------------|:--------|:--------|:---------------------------------------------------------------|
| `e`          | String  | `null`  | The name of the event                                          |
| `bubbles`    | Boolean | `true`  | Indicating whether the event bubbles up through the DOM or not |
| `cancelable` | Boolean | `false` | Indicating whether the event is cancelable or not              |
| `detail`     | Any     | `null`  | The data passed when initializing the event                    |

JavaScript

```javascript
// Create a custom event
var customEvent = UIkit.util.createEvent('MyEvent', true, true, { data: 'was created!' });

console.log(customEvent.type, customEvent.detail.data);
```

Result

```log
'MyEvent was created!'
```

***

## Language

The following functions might be helpful when working with JavaScript based transformations, requests, etc.
Hence the reason this chapter is called language.

***

### hasOwn

This function is used to check if a JavaScript object has some key.
The following parameters may be passed to the function.

| Parameter | Type    | Default | Description                        |
|:----------|:--------|:--------|:-----------------------------------|
| `obj`     | Object  | `null`  | The JavaScript object to search in |
| `key`     | String  | `null`  | The key name to look for           |

JavaScript

```javascript
var object = {
  data: 'sample'
};

// Check if object has some key
console.log(UIkit.util.hasOwn(object, 'data'));
```

Result

```log
true
```

***

### classify

This function is used to format a string to a correct JavaScript class name.
The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'my-javascript-class';

// Format to the correct class format
console.log(UIkit.util.classify(string));
```

Result

```log
'MyJavascriptClass'
```

***

### hyphenate

This function is used to hyphenate a string. The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'someCamelcasedString';

// Hyphenate the string
console.log(UIkit.util.hyphenate(string));
```

Result

```log
'some-camelcase-string'
```

***

### camelize

This function is used to camelcase a string. The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'some-hyphenated-string';

// Camelcase the string
console.log(UIkit.util.camelize(string));
```

Result

```log
'someHyphenatedString'
```

***

### ucfirst

This function is used to uppercase the first letter of a string. The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'uppercase';

// Uppercase the first letter
console.log(UIkit.util.ucfirst(string));
```

Result

```log
'Uppercase'
```

***

### startsWith

This function is used to check if a string starts with some value. The following parameters may be passed to the function.

| Parameter | Type   | Default | Description             |
|:----------|:-------|:--------|:------------------------|
| `str`     | String | `null`  | The string to search in |
| `search`  | String | `null`  | The string to look for  |

JavaScript

```javascript
var string = 'This is a string!';

console.log(UIkit.util.startsWith(string, 'This'));
```

Result

```log
true
```


***

### endsWith

This function is used to check if a string ends with some value. The following parameters may be passed to the function.

| Parameter | Type   | Default | Description             |
|:----------|:-------|:--------|:------------------------|
| `str`     | String | `null`  | The string to search in |
| `search`  | String | `null`  | The string to look for  |

JavaScript

```javascript
var string = 'This is a string!';

console.log(UIkit.util.endsWith(string, 'string!'));
```

Result

```log
true
```

***

### includes

This function is used to check if either a string or an array contains some value.
The following parameters may be passed to the function.

| Parameter | Type          | Default | Description                      |
|:----------|:--------------|:--------|:---------------------------------|
| `obj`     | String, Array | `null`  | The string or array to search in |
| `search`  | String        | `null`  | The string to look for           |

JavaScript

```javascript
var string = 'This is a string!';
var array = ['This', 'is', 'an', 'array', '!'];

console.log(UIkit.util.includes(string, 'string'));
console.log(UIkit.util.includes(array, 'array'));
```

Result

```log
true
true
```

***

### isFunction

This function is used to check whether an object is a function or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
function example() {}

// Is this a function?
console.log(UIkit.util.isFunction(example));
```

Result

```log
true
```

***

### isObject

This function is used to check whether a variable is a JavaScript Object or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var image = new Image();

// Is this a JavaScript object?
console.log(UIkit.util.isObject(image));
```

Result

```log
true
```

***

### isPlainObject

This function is used to check whether a variable was created by the Object constructor.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var object = {};

// Is this a plain Object?
console.log(UIkit.util.isPlainObject(object));
```

Result

```log
true
```

***

### isWindow

This function is used to check whether a variable is a Window Object.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var win = window;

// Is this a Window Object?
console.log(UIkit.util.isWindow(win));
```

Result

```log
true
```

**Note** This function does not detect, if the operating system `Microsoft Windows` is used.

***

### isDocument

This function is used to check whether a variable is a Document Object.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var doc = document || window.document;

// Is this a Document Object?
console.log(UIkit.util.isDocument(doc));
```

Result

```log
true
```

***

### isBoolean

This function is used to check whether a value is a boolean type or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = false;

// Is this a boolean?
console.log(UIkit.util.isBoolean(example));
```

Result

```log
true
```

***

### isString

This function is used to check whether a value is a string type or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = 'This is a string!';

// Is this a string?
console.log(UIkit.util.isString(example));
```

Result

```log
true
```

***

### isNumber

This function is used to check whether a value is a number type or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = 12;

// Is this a number?
console.log(UIkit.util.isNumber(example));
```

Result

```log
true
```

***

### isNumeric

This function is used to check whether a value is numeric or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = '12';

// Is this value numeric?
console.log(UIkit.util.isNumeric(example));
```

Result

```log
true
```

***

### isUndefined

This function is used to check whether a value is undefined or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example;

// Is this value undefined?
console.log(UIkit.util.isUndefined(example));
```

Result

```log
true
```

***

### toBoolean

This function is used to turn a value, if possible into a boolean value.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = UIkit.util.toBoolean('1');

console.log(example);
```

Result

```log
true
```

***

### toNumber

This function is used to turn a value, if possible into a number.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = UIkit.util.toNumber('12.75');

console.log(example);
```

Result

```log
12.75
```

***

### toFloat

This function is used to turn a value, if possible into a float number.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = UIkit.util.toNumber('12.75');

console.log(example);
```

Result

```log
12.75
```

***

### toList

This function is used to turn a value, if possible into an array. 
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = UIkit.util.toList('array, list, 12, true');

console.log(example);
```

Result

```log
(4) ['array', 'list', 12, true]
```

***

### toMedia

This function is used to turn a value, if possible into an array. 
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = UIkit.util.toMedia('200');

console.log(example);
```

Result

```log
'(min-width: 200px)'
```

***

### coerce

This function is used to coerce a value into some type of data. 
The following parameters may be passed to the function.

| Parameter | Type     | Default | Description                                                       |
|:----------|:---------|:--------|:------------------------------------------------------------------|
| `type`    | String   | `null`  | The data type, e.g. `Boolean`, `Number`, `query`, `list`, `media` |
| `value`   | Any      | `null`  | The value to be transformed                                       |
| `context` | Selector | `null`  | If the type is `query`, you can define a context selector         |

HTML

```html
<div id="example"></div>
```

JavaScript

```javascript
var types = [Boolean, Number, 'query', 'list', 'media'];
var values = ['1', '12.5', '#example', 'Hello, world, !', 640];

for (i = 0; i < types.length; i++) {
    console.log(UIkit.util.coerce(types[i], values[i]));
}
```

Result

```log
true
12.5
<div id=​"example">​</div>​
(3) ['Hello', 'world', '!']
'(min-width: 640px)'
```


***

### toMs

This function is used to turn a value, if possible into milliseconds. 
The following parameter may be passed to the function.

| Parameter | Type           | Default | Description                |
|:----------|:---------------|:--------|:---------------------------|
| `time`    | String, Number | `null`  | The time to be transformed |

JavaScript

```javascript
var example = UIkit.util.toMs('10s');

console.log(example);
```

Result

```log
10000
```

***

### swap

This function is used to swap a substring with another value. 
The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                       |
|:----------|:-------|:--------|:----------------------------------|
| `value`   | String | `null`  | The string to perform the swap on |
| `a`       | String | `null`  | The value to be exchanged         |
| `b`       | String | `null`  | The value to be pasted in         |

JavaScript

```javascript
var example = UIkit.util.swap('uk-position-left', 'left', 'right');

console.log(example);
```

Result

```log
'uk-position-right'
```

***

### assign

This function is used to assign all values of one or multiple objects to another object. 
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description                       |
|:----------|:-------|:--------|:----------------------------------|
| `value`   | String | `null`  | The string to perform the swap on |
| `a`       | String | `null`  | The value to be exchanged         |

JavaScript

```javascript
var target = {
  firstName: 'Jane',
  lastName: 'Doe',
  married: false
};
var source = {
  lastName: 'Smith',
  married: true
};

var example = UIkit.util.assign(target, source);

console.log(example);
```

Result

```log
{firstName: 'Jane', lastName: 'Smith', married: true}
```

***

### each

This function is used to loop through either an array or object. 
The following parameters may be passed to the function.

| Parameter | Type          | Default | Description                                        |
|:----------|:--------------|:--------|:---------------------------------------------------|
| `obj`     | Array, Object | `null`  | The object to loop through                         |
| `cb`      | Function      | `null`  | The callback function to access the object's items |

JavaScript

```javascript
var array = ['Apple', 'Banana', 'Kiwi', 'Mango'];

UIkit.util.each(array, function(item) {
  console.log(item);
});
```

Result

```log
'Apple'
'Banana'
'Kiwi'
'Mango'
```

***

### clamp

This function is used to return a number, which is guaranteed to be in a predefined range. 
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description                               |
|:----------|:-------|:--------|:------------------------------------------|
| `number`  | Number | `null`  | The default number passed to the function |
| `min`     | Number | `0`     | Minimum value to be returned              |
| `max`     | Number | `1`     | Maximum value to be returned              |

JavaScript

```javascript
var array = ['Apple', 'Banana', 'Kiwi', 'Mango'];

UIkit.util.each(array, function(item) {
  console.log(item);
});
```

Result

```log
'Apple'
'Banana'
'Kiwi'
'Mango'
```

***

### noop

This function does not accept any arguments. You can use this empty function when you wish to pass around a function that will
do nothing. This is useful for plugin authors who offer optional callbacks; in the case that no callback is given,
something like `UIkit.util.noop` could execute.

***

### intersectRect

Wait on [pull request](https://github.com/uikit/uikit/pull/3129).

***

### pointInRect

This function is used to detect wheter a point lies inside of a rectangle or not. 
The following parameters may be passed to the function.

| Parameter | Type    | Default | Description                                            |
|:----------|:--------|:--------|:-------------------------------------------------------|
| `point`   | Object  | `null`  | A object with `x` and `y` properties                   |
| `rect`    | DOMRect | `null`  | This object contains dimensional info about an element |

HTML

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary card</div>
```

JavaScript

```javascript
var example = document.getElementById('example').getBoundingClientRect();

document.addEventListener('click', function(e) {
  console.log(UIkit.util.pointInRect({ x: e.pageX, y: e.pageY }, example));
});
```

Result

```log
If you click onto the card this function returns true, otherwise false.
```

***

### ajax

This function is used to make easy ajax calls to a specific url. 
The following parameters may be passed to the function.

| Parameter | Type   | Default | Description                                |
|:----------|:-------|:--------|:-------------------------------------------|
| `url`     | String | `null`  | The URL to call                            |
| `options` | Object | `null`  | Additional options passed to the ajax call |

The options consist of the following default values. Those values can be manipulated, like mentioned above.

| Option         | Type     | Default                | Description                                                           |
|:---------------|:---------|:-----------------------|:----------------------------------------------------------------------|
| `data`         | Object   | `null`                 | Additional data passed to the request                                 |
| `method`       | String   | `GET`                  | Method to call the URL                                                |
| `headers`      | Object   | `{}`                   | Request headers                                                       |
| `xhr`          | Object   | `new XMLHttpRequest()` | The request object to perform the request with                        |
| `beforeSend`   | Function | `noop`                 | The callback function, which gets called before sending the data      |
| `responseType` | String   | `''`                   | Response type, e.g. `arraybuffer`, `blob`, `document`, `json`, `text` |

JavaScript

```javascript
UIkit.util.ajax('/api/users', {
  responseType: 'json'
}).then(function(xhr) {
  console.log(xhr.response);
});
```

Result

```log
{parsed: 'json-object', with: 'some', example: 'data'}
```

***

## Mouse

The following functions might be helpful when working with mouse movements based on some elements position.

### MouseTracker

The MouseTracker object makes three handy functions accessible, which are the following.

| Method    | Description                                                                        |
|:----------|:-----------------------------------------------------------------------------------|
| `init`    | Initializes the mouse movement tracker                                             |
| `cancel`  | Unbinds the mouse movement tracker                                                 |
| `movesTo` | Either returns true or false, whether the mouse is moved towards an element or not |

HTML

```html
<div id="example" class="uk-position-relative">
    <img src="images/photo.jpg" alt="">
    <div id="target" class="uk-overlay uk-overlay-default uk-position-center"></div>
</div>
```

JavaScript

```javascript
var tracker = new UIkit.util.MouseTracker();
var example = document.getElementById('example');
var target = document.getElementById('target');

// Initialize the mouse tracker
example.addEventListener('mouseenter', function() {
  tracker.init();
});

// Unbind the mouse tracker
example.addEventListener('mouseleave', function() {
  tracker.cancel();
});

// Detect mouse movement
example.addEventListener('mousemove', function() {
  console.log(tracker.movesTo(target));
});
```

Result

```log
If the mouse moves towards the target this returns true otherwise false.
```

***

## Player

***

## Position

***

## Promise

***

## Selectors

***

## Styles


