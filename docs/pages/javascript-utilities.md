# JavaScript Utilities

UIkit comes with its own, rather small but yet powerful JavaScript Framework, of which you can make use as well.
The provided JavaScript utilities allow you to write simplified Vanilla JavaScript and replace the most common
functions of jQuery. Once UIkit is [installed correctly](installation.md) they are accessible under the
`UIkit.util` namespace.

**Note** The parameter types make use of a couple of [Pseudo Types](#pseudo-types).

***

## Ajax

The following functions are to work with asynchronous tasks. They are used for executing code asynchronously.

***

## ajax

Make asynchronous calls to a specific URL and pass it some data.

```javascript
ajax(url [, options]);
```

| Parameter | Type   | Description                                |
|:----------|:-------|:-------------------------------------------|
| `url`     | String | The URL to call                            |
| `options` | Object | Additional options passed to the ajax call |

The options object consists of the following key value pairs. Those values may be adapted to your needs.

| Option         | Type     | Description                                                           |
|:---------------|:---------|:----------------------------------------------------------------------|
| `data`         | Object   | Additional data passed to the request                                 |
| `method`       | String   | Method to call the URL, e.g. `GET`, `POST`, `PUT`, `DELETE`           |
| `headers`      | Object   | Request headers, e.g. `{'X-Requested-With': 'XMLHttpRequest'}`        |
| `xhr`          | Object   | The request object to perform the request with                        |
| `beforeSend`   | Function | The callback function, which is executed before sending the data      |
| `responseType` | String   | Response type, e.g. `arraybuffer`, `blob`, `document`, `json`, `text` |

### Usage

```javascript
util.ajax('/api/users', { responseType: 'json' })
  .then(function(xhr) {
    console.log(xhr.response);
  });
```

#### Result

```log
{parsed: 'json-object', with: 'some', example: 'data'}
```

***

## getImage

Load an image asynchronously.

```javascript
getImage(src);
```

| Parameter | Type   | Description                                |
|:----------|:-------|:-------------------------------------------|
| `src`     | String | Source path of the image to be loaded      |

### Usage

```javascript
util.getImage('/path/to/image.jpeg')
  .then(function(img) {
    console.log(img);
  });
```

#### Result

```log
<img src="/path/to/image.jpeg">
```

***

## Animations

The following functions are to animate elements. They are either used to transition some CSS properties or 
animate whole elements, using UIkit's CSS animations.

***

## transition

Transition a CSS value.

```javascript
transition(element, props [, duration, timing]);
```

| Parameter  | Type                  | Description                                                                   |
|:-----------|:----------------------|:------------------------------------------------------------------------------|
| `element`  | [Node](#pseudo-types) | The HTML element                                                              |
| `props`    | Object                | The CSS properties to be changed                                              |
| `duration` | Number                | The transition's duration (in milliseconds)                                   |
| `timing`   | String                | Timing functions, e.g. `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out` |

### Usage

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

```javascript
var element = util.$('#example');

// Transition a CSS property to a certain value
util.transition(element, { 'opacity': 0 })
  .then(console.log('Card was faded out!'));
```

#### Result

```log
Card was faded out!
```

**Note** Before starting a transition, a value for the CSS property to be transitioned has to be present!

***

## Transition

The Transition object makes four handy functions accessible.

| Method       | Description                                                                    |
|:-------------|:-------------------------------------------------------------------------------|
| `start`      | Is an alias of the above mentioned `transition` function                       |
| `stop`       | Stops the transition                                                           |
| `cancel`     | Cancels the transition                                                         |
| `inProgress` | Either returns `true` or `false`, whether the transition is in progress or not |

### Usage

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

```javascript
var element = util.$('#example');

// Start the transition
util.Transition.start(element, {
  'background': '#000',
  'color': '#fff'
}, 500, 'ease');

// Check whether transition is in progress
console.log(
  util.Transition.inProgress(element)
  ? 'Transition in progress!'
  : 'No transition running!'
);

// Stop the transition
util.Transition.stop(element);

// Cancel the transition
util.Transition.cancel(element);

// Check whether transition is in progress
console.log(
  util.Transition.inProgress(element)
  ? 'Transition in progress!'
  : 'No transition running!'
);
```

#### Result

```log
Transition in progress!
No transition running!
```

***

## animate

Animate an element.

```javascript
animate(element, animation [, duration, origin, out]);
```

| Parameter   | Type                  | Description                                                               |
|:------------|:----------------------|:--------------------------------------------------------------------------|
| `element`   | [Node](#pseudo-types) | The HTML element                                                          |
| `animation` | String                | The animation name, list of [available animations](animation.md#usage)    |
| `duration`  | Number                | The animation's duration (in milliseconds)                                |
| `origin`    | String                | Origin modifier, list of [available origins](utility.md#transform-origin) |
| `out`       | Boolean               | Reverse modifier to change whether the animation is incoming or not       |

**Note** The origin modifiers work only with scaling animations.

### Usage

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
``

```javascript
var element = util.$('#example');

// Animate an element
util.animate(element, 'uk-animation-scale-up', 200, 'bottom-right', false)
  .then(console.log('Card was scaled up!'));
```

#### Result

```log
Card was scaled up!
```

***

## Animation

The Animation object makes four handy functions accessible.

| Method       | Description                                                                    |
|:-------------|:-------------------------------------------------------------------------------|
| `in`         | Is an alias of the above mentioned `animate` function, but always animates in  |
| `out`        | Is an alias of the above mentioned `animate` function, but always animates out |
| `inProgress` | Either returns true or false, whether the animation is in progress or not      |
| `cancel`     | Cancels the animation                                                          |

### Usage

```html
<div id="example" class="uk-card uk-card-primary uk-card-body">Primary Card</div>
```

```javascript
var element = util.$('example');

// Animate in
util.Animation.in(element, 'uk-animation-fade', 400, 'ease-in');

// Check whether animation is in progress
console.log(
  util.Animation.inProgress(element)
  ? 'Animation in progress!'
  : 'No animation running!'
);

// Animate out
util.Animation.out(element, 'uk-animation-fade', 400, 'ease-out');

// Cancel the transition
util.Animation.cancel(element);

// Check whether animation is in progress
console.log(
  util.Animation.inProgress(element)
  ? 'Animation in progress!'
  : 'No animation running!'
);
```

#### Result

```log
Animation in progress!
No animation running!
```

***

## Attributes

The following functions are to work with HTML attributes. They either are used for conditional statements,
DOM manipulation or retrieving/setting values.

***

## attr

Get or set an element's attribute value.

```javascript
attr(element, name [, value]);
```

| Parameter | Type                   | Description           |
|:----------|:-----------------------|:----------------------|
| `element` | [Nodes](#pseudo-types) | The HTML element      |
| `name`    | String                 | The attribute's name  |
| `value`   | [mixed](#pseudo-types) | The attribute's value |

The return value is the value of the attribute or `undefined` if used as setter with the `value` parameter.

**Note** If used as setter and the attribute doesn't yet exist, it is created simultaneously.

### Usage

```html
<a href="#" id="example"></a>
```

```javascript
var element = util.$('#example');

// Get attribute value
var attrValue = util.attr(element, 'id');

// Set attribute value
util.attr(element, 'title', attrValue);
```

#### Result

```html
<a href="#" id="example" title="example"></a>
```

***

## hasAttr

Check if an element has an attribute.

```javascript
hasAttr(element, name);
```

| Parameter | Type                   | Description          |
|:----------|:-----------------------|:---------------------|
| `element` | [Nodes](#pseudo-types) | The HTML element     |
| `name`    | String                 | The attribute's name |

### Usage

```html
<div id="example" uk-grid></div>
```

```javascript
var element = util.$('#example');

// Check if some element has some attribute
if (util.hasAttr(element, 'uk-grid')) {
    console.log('This is a grid!');
} else {
    console.log('This is NOT a grid!');
}
```

#### Result

```log
This is a grid!
```

***

## removeAttr

Remove an attribute from an element.

```javascript
removeAttr(element, name);
```

| Parameter | Type                  | Description          |
|:----------|:----------------------|:---------------------|
| `element` | [Node](#pseudo-types) | The HTML element     |
| `name`    | String                | The attribute's name |

### Usage

```html
<div id="example" invalid="non-sense"></div>
```

```javascript
var element = util.$('#example');

// Remove attribute
util.removeAttr(element, 'invalid');
```

#### Result

```html
<div id="example"></div>
```

***

## filterAttr

Search an replace functionality for an attribute's value.

```javascript
filterAttr(element, attribute, pattern, replacement);
```

| Parameter     | Type                  | Description             |
|:--------------|:----------------------|:------------------------|
| `element`     | [Node](#pseudo-types) | The HTML element        |
| `attribute`   | String                | The attribute's name    |
| `pattern`     | String                | The search pattern      |
| `replacement` | String                | The replacement value   |

### Usage

```html
<div id="example" class="uk-position-top uk-overlay uk-overlay-default"></div>
```

```javascript
var element = util.$('#example');

// Filter an attribute's value
var pattern = new RegExp('(^|\\s)uk-position-top(?!\\S)', 'g');
util.filterAttr(element, 'class', pattern, 'uk-position-bottom');
```

#### Result

```html
<div id="example" class="uk-position-bottom uk-overlay uk-overlay-default"></div>
```

***

### data

Retrieve the value of a `data-*` prefixed attribute.

```javascript
data(element, attribute);
```

| Parameter     | Type                  | Description               |
|:--------------|:----------------------|:--------------------------|
| `element`     | [Node](#pseudo-types) | The HTML element          |
| `attribute`   | String                | The data-attribute's name |

### Usage

```html
<div id="example" data-columns="3"></div>
```

```javascript
var element = util.$('#example');

// Get value of the data-attribute
var columns = util.data(element, 'columns');
console.log('Column count: ' + columns);
```

#### Result

```log
Column count: 3
```

***

## Classes

The following functions are to work with HTML classes. They either are used for conditional statements,
DOM manipulation or setting/retrieving values.

***

## addClass

Add one or multiple classes to an element.

```javascript
addClass(element, ...args);
```

| Parameter | Type                  | Description                                                  |
|:----------|:----------------------|:-------------------------------------------------------------|
| `element` | [Node](#pseudo-types) | The HTML element                                             |
| `...args` | Arguments object      | An array like object, accepting one or multiple data entries |

### Usage

```html
<div id="example"></div>
```

```javascript
var element = util.$('#example');

// Add class(es)
util.addClass(element, 'uk-section', 'uk-section-primary');
```

#### Result

```html
<div id="example" class="uk-section uk-section-primary"></div>
```

**Note** If the class attribute doesn't yet exist, it is created simultaneously.

***

## removeClass

Remove one or multiple classes from an element.

```javascript
removeClass(element, ...args);
```

| Parameter | Type                  | Description                                                  |
|:----------|:----------------------|:-------------------------------------------------------------|
| `element` | [Node](#pseudo-types) | The HTML element                                             |
| `...args` | Arguments object      | An array like object, accepting one or multiple data entries |

### Usage

```html
<div id="example" class="uk-section uk-section-primary uk-section-small"></div>
```

```javascript
var element = util.$('#example');

// Remove class(es)
util.removeClass(element, 'uk-section-primary', 'uk-section-small');
```

#### Result

```html
<div id="example" class="uk-section"></div>
```

***

## removeClasses

Remove a range of classes, based on a pattern.

```javascript
removeClasses(element, cls);
```

| Parameter | Type                  | Description                 |
|:----------|:----------------------|:----------------------------|
| `element` | [Node](#pseudo-types) | The HTML element            |
| `cls`     | String                | The class(es) to be removed |

### Usage

```html
<div id="example" class="uk-position-top uk-overlay uk-overlay-default"></div>
```

```javascript
var element = util.$('#example');

// Remove classes based on a pattern
var cls = 'uk-position-(top|bottom|left|right)(-[a-z]+)?';
util.removeClasses(element, cls);
```

#### Result

```html
<div id="example" class=" uk-overlay uk-overlay-default"></div>
```

***

## replaceClass

Replace a class.

```javascript
replaceClass(element, ...args);
```

| Parameter | Type                  | Description                                                  |
|:----------|:----------------------|:-------------------------------------------------------------|
| `element` | [Node](#pseudo-types) | The HTML element                                             |
| `...args` | Arguments object      | An array like object, accepting one or multiple data entries |

### Usage

```html
<div id="example" class="uk-card uk-card-default"></div>
```

```javascript
var element = util.$('#example');

// Replace class
util.replaceClass(element, 'uk-card-default', 'uk-card-primary');
```

#### Result

```html
<div id="example" class="uk-card uk-card-primary"></div>
```

***

### hasClass

Check if an element has a specific class.

```javascript
hasClass(element, cls);
```

| Parameter | Type                  | Description             |
|:----------|:----------------------|:------------------------|
| `element` | [Node](#pseudo-types) | The HTML element        |
| `cls`     | String                | The class to be checked |

### Usage

```html
<div id="example" class="uk-position-relative"></div>
```

```javascript
var element = util.$('#example');

// Check if some element has some class
if (util.hasClass(element, 'uk-position-relative')) {
    console.log('Class was found!');
} else {
    console.log('Class was NOT found!');
}
```

#### Result

```log
Class was found!
```

***

## toggleClass

Toggle a class.

```javascript
toggleClass(element, ...args);
```

| Parameter | Type                  | Description                                                  |
|:----------|:----------------------|:-------------------------------------------------------------|
| `element` | [Node](#pseudo-types) | The HTML element                                             |
| `...args` | Arguments object      | An array like object, accepting one or multiple data entries |

### Usage

```html
<div id="example" class="uk-card uk-card-default"></div>
```

```javascript
var element = util.$('#example');

// Toggle a class
for (var i = 0; i < 3; i++) { 
  util.toggleClass(element, 'uk-card-default');
}
```

#### Result

```html
<div id="example" class="uk-card"></div>
```

***

## Dimensions

The following function are to work with dimensions of elements. They either are used for conditional statements
or setting/retrieving values.

***

## positionAt

TODO

```javascript
positionAt(element, target [, elAttach, targetAttach, elOffset, targetOffset, flip, boundary])
```

| Parameter      | Type                  | Description                 |
|:---------------|:----------------------|:----------------------------|
| `element`      | [Node](#pseudo-types) | ...                         |
| `target`       | [Node](#pseudo-types) | ...                         |
| `elAttach`     | ...                   | ...                         |
| `targetAttach` | ...                   | ...                         |
| `elOffset`     | ...                   | ...                         |
| `targetOffset` | ...                   | ...                         |
| `flip`         | ...                   | ...                         |
| `boundary`     | ...                   | ...                         |

### Usage

```javascript
TODO
```

#### Result

```log
TODO
```

***

## offset

Either retrieve an element's dimensions or set new `top` and/or `left` values.

```javascript
offset(element [, coordinates])
```

| Parameter     | Type                  | Description                                     |
|:--------------|:----------------------|:------------------------------------------------|
| `element`     | [Node](#pseudo-types) | The HTML Element                                |
| `coordinates` | Object                | An object containing `top` and/or `left` values |

### Usage

```html
<div id="example" class="uk-card uk-card-default uk-card-body uk-width-medium">Offset Card</div>
```

```javascript
var element = util.$('#example');

// Read dimensions before and after setting new coordinates
var before = util.offset(element);

offset(element, {
  top: 100,
  left: 100
});

var after = util.offset(element);

console.log(before, after);
```

#### Result

```log
{height: 104, width: 300, top: 0, left: 0, bottom: 104, right: 300}
{height: 104, width: 300, top: 100, left: 100, bottom: 204, rigth: 400}
```

***

## position

Read the current `top` and `left` coordinates of an element.

```javascript
position(element)
```

| Parameter | Type                  | Description      |
|:----------|:----------------------|:-----------------|
| `element` | [Node](#pseudo-types) | The HTML Element |

### Usage

```html
<div id="example" class="uk-card uk-card-default"></div>
```

```javascript
var element = util.$('#example');

// Retrieve current position
var pos = util.position(element);

console.log(pos);
```

#### Result

```log
{top: 0, left: 0}
```

***

## height

Get or set the inner height of an element.

```javascript
height(element [, value])
```

| Parameter | Type                  | Description                     |
|:----------|:----------------------|:--------------------------------|
| `element` | [Node](#pseudo-types) | The HTML Element                |
| `value`   | Number                | New inner height of the element |

### Usage

```html
<div id="example" class="uk-card uk-card-default uk-card-body uk-height-medium">Example Card</div>
```

```javascript
var element = util.$('#example');

// Retrieve current position
var before = util.height(element);
util.height(element, 100);
var after = util.height(element);

console.log(before, after);
```

#### Result

```log
220 100
```

***

## width

Get or set the inner width of an element.

```javascript
width(element [, value])
```

| Parameter | Type                  | Description                     |
|:----------|:----------------------|:--------------------------------|
| `element` | [Node](#pseudo-types) | The HTML Element                |
| `value`   | Number                | New inner width of the element |

### Usage

```html
<div id="example" class="uk-card uk-card-default uk-card-body uk-width-medium">Example Card</div>
```

```javascript
var element = util.$('#example');

// Retrieve current position
var before = util.width(element);
util.width(element, 100);
var after = util.width(element);

console.log(before, after);
```

#### Result

```log
220 100
```

***

## boxModelAdjust

Calculate the box model of an element vertically or horizontally.

```javascript
boxModelAdjust(prop, element [, sizing])
```

| Parameter | Type                  | Description                                        |
|:----------|:----------------------|:---------------------------------------------------|
| `prop`    | String                | Either `width` or `height`                         |
| `element` | [Node](#pseudo-types) | The HTML Element                                   |
| `sizing`  | String                | CSS box sizing values, e.g. `border-box` (default) |

### Usage

```html
<div id="example" class="uk-card uk-card-default uk-card-body">Box Model Adjust</div>
```

```javascript
var element = util.$('#example');

// Calculate the vertical box model size
var boxModel = util.boxModelAdjust('height', element);

console.log(boxModel);
```

#### Result

```log
80
```

***

## flipPosition

Get the opposite position property.

```javascript
flipPosition(pos)
```

| Parameter | Type   | Description                                             |
|:----------|:-------|:--------------------------------------------------------|
| `pos`     | String | The initial position property, e.g. `top`, `left`, etc. |

### Usage

```javascript
// Get the opposite position property
var flipTop = util.flipPosition('top');
var flipLeft = util.flipPosition('left');

console.log(flipTop, flipLeft);
```

#### Result

```log
bottom right
```

***

## isInView

Check if an element is inside the viewport.

```javascript
isInView(element [, topOffset, leftOffset, relativeToViewport])
```

| Parameter            | Type                  | Description                                      |
|:---------------------|:----------------------|:-------------------------------------------------|
| `element`            | [Node](#pseudo-types) | The HTML Element                                 |
| `topOffset`          | Number                | Offset from top                                  |
| `leftOffset`         | Number                | Offset from left                                 |
| `relativeToViewport` | Boolean               | Whether the check is relative to viewport or not |

### Usage

```html
<div id="example" class="uk-card uk-card-primary uk-card-body"></div>
```

```javascript
var element = util.$('#example');

console.log(util.isInView(element));
```

#### Result

```log
true
```

***

## scrolledOver

Check how much an element has been scrolled over.

```javascript
scrolledOver(element [, heightOffset])
```

| Parameter      | Type                  | Description            |
|:---------------|:----------------------|:-----------------------|
| `element`      | [Node](#pseudo-types) | The HTML Element       |
| `heightOffset` | Number                | Height offset from top |

### Usage

```html
<div class="uk-height-viewport"></div>
<div id="example" class="uk-card uk-card-primary uk-card-body"></div>
<div id="scrollHere" class="uk-height-viewport"></div>
```

```javascript
var element = util.$('#example');

UIkit.scroll(element).scrollTo(util.$('#scrollHere'));

function checkScrolledOver() {
  console.log(util.scrolledOver(element));
}

checkScrolledOver();
util.on(window, 'scroll', function() {
  checkScrolledOver();
});
```

#### Result

```log
0
0.002544529262086514
0.0063613231552162855
...
0.9974554707379134
0.9987277353689566
1
```

***

## DOM (Document Object Model)

The following functions are to work with the DOM. Check its state, manipulate elements or get information from them.

***

## isReady

Check if the DOM is loaded and ready to be safely manipulated or not.

```javascript
isReady()
```

### Usage

```javascript
console.log(util.isReady());

util.on(document, 'DOMContentLoaded', function () {
  console.log(isReady());
});
```

#### Result

```log
false
true
```

***

## ready

Triggers a callback function as soon as `isReady()` condition is true.

```javascript
ready(fn)
```

| Parameter | Type     | Description                                         |
|:----------|:---------|:----------------------------------------------------|
| `fn`      | Function | The callback function to be executed on `isReady()` |

### Usage

```javascript
// Run callback function once DOM is ready
util.ready(function () {
  console.log('DOM is now safely manipulable.');
});
```

#### Result

```log
DOM is now safely manipulable.
```

***

## index

Get the index of an element inside of a element list.

```javascript
index(element [, ref])
```

| Parameter | Type                     | Description                                                |
|:----------|:-------------------------|:-----------------------------------------------------------|
| `element` | [Node(s)](#pseudo-types) | The HTML element to get the index of or a list of elements |
| `ref`     | [Node](#pseudo-types)    | The HTML element to get the index of inside the list       |

### Usage

```html
<div class="uk-child-width-expand uk-text-center" uk-grid>
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

```javascript
var list = util.$$('div[uk-grid] > div');
var element = util.$('#grid-item');

console.log(util.index(element));
console.log(util.index(list, element));
```

#### Result

```log
4
4
```

***

## getIndex

Get the index of an item inside of a list.

```javascript
getIndex(i, elements [, current, finite])
```

| Parameter  | Type                           | Description                           |
|:-----------|:-------------------------------|:--------------------------------------|
| `i`        | [Node](#pseudo-types) / String | An HTML element, `next` or `previous` |
| `elements` | [Nodes](#pseudo-types)         | A list of HTML elements               |
| `current`  | Number                         | Start value to count from             |
| `finite`   | Boolean                        | Whether the list is finite or not     |

### Usage

```html
<div class="uk-child-width-expand uk-text-center" uk-grid>
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

```javascript
var list = util.$$('div[uk-grid] > div');

console.log(getIndex('next', list, 6));
console.log(getIndex('next', list, 6, true));
```

#### Result

```log
1
5
```

***

## empty

Empty the content of a HTML element.

```javascript
empty(element)
```

| Parameter | Type                  | Description                           |
|:----------|:----------------------|:--------------------------------------|
| `element` | [Node](#pseudo-types) | The HTML element to empty its content |

### Usage

```html
<div id="example" class="uk-card uk-card-default uk-card-body">
    This card is not empty!
</div>
```

```javascript
var element = util.$('#example');

util.empty(element);
```

#### Result

```html
<div id="example" class="uk-card uk-card-default uk-card-body"></div>
```

***

## html

Get the content of a HTML element or add new content to it.

```javascript
html(element [, html])
```

| Parameter | Type                   | Description                            |
|:----------|:-----------------------|:---------------------------------------|
| `element` | [Node](#pseudo-types)  | The HTML element                       |
| `element` | [mixed](#pseudo-types) | New HTML content to add to the element |

### Usage

```html
<div id="example" class="uk-card uk-card-default uk-card-body"></div>
```

```javascript
var element = util.$('#example');
var content = '<p>This was injected by JavaScript!</p>';

util.html(element, content);
```

#### Result

```html
<div id="example" class="uk-card uk-card-default uk-card-body">
    <p>This was injected by JavaScript!</p>
</div>
```

***

## $

Select a single HTML element.

```javascript
$(selector [, context]);
```

| Parameter  | Type                  | Description                          |
|:-----------|:----------------------|:-------------------------------------|
| `selector` | String                | A valid CSS selector for an element  |
| `context`  | [Node](#pseudo-types) | A HTML element to be searched within |

### Usage

```javascript
// Select a single HTML element
var element = util.$('#example');

console.log(element);
```

#### Result

```log
<div id="example"></div>
```

***

## $$

Select multiple HTML elements.

```javascript
$$(selector [, context]);
```

| Parameter  | Type                  | Description                          |
|:-----------|:----------------------|:-------------------------------------|
| `selector` | String                | A valid CSS selector for an element  |
| `context`  | [Node](#pseudo-types) | A HTML element to be searched within |

### Usage

```javascript
// Select multiple HTML elements
var elements = util.$$('.example');

console.log(elements);
```

#### Result

```log
(3) [div.example, div.example, div.example]
```

***

### isInView

TODO: to check if an element is currently visible inside the viewport.

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
var element = util.$('#example');

// Check if element comes into view, when scrolling
util.on(window, 'scroll', function () {
  if (util.isInView(element)) {
    console.log('Element is visible!');
  } else {
    console.log('Element is not yet visible!');
  }
});
```

#### Result

```log
'Element is visible!'
```

***

### scrolledOver

TODO: to return the percentage value of how an element is currently positioned compared to the viewport.
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
var element = util.$('#example');

// Check if you scrolled past an element
util.on(window, 'scroll', function () {
  if (util.scrolledOver(element) < 1) {
    console.log('The element has not been "scrolled over" yet.');
  } else {
    console.log('You have scrolled past the element.');
  }
});
```

#### Result

```log
'The element has not been "scrolled over" yet.'
```

***

### isVoidElement

TODO: to detect if an element is a self-closing HTML tag.

| Parameter | Type   | Default | Description      |
|:----------|:-------|:--------|:-----------------|
| `element` | String | `null`  | The HTML element |

HTML

```html
<input id="example" type="text" class="uk-input">
```

JavaScript

```javascript
var element = util.$('#example');

// Check if element is a void element (self-closing)
if (util.isVoidElement(element)) {
  console.log('This is a void element!');
} else {
  console.log('This is not a self-closing HTML tag.');
}
```

#### Result

```log
'This is a void element!'
```

***

### Dimensions

The Dimensions object makes three handy functions accessible, which are the following.

***

#### ratio

This function returns the aspect ratio of an elements dimensions compared to a certain value.

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
var element = util.$('#example');
var Dimensions = util.Dimensions;

var dimensions = {
  width: element.width,
  height: element.height
};

// Get ratio for 100px width
console.log(Dimensions.ratio(dimensions, 'width', 100));
```

#### Result

```log
{height: 75, width: 100}
```

***

#### contain

This function returns a dimension, which is contained inside a certain maximum dimension.

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
var element = util.$('#example');
var Dimensions = util.Dimensions;

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

#### Result

```log
{width: 320, height: 240}
```

***

#### cover

This function returns a dimension, which covers a certain maximum dimension.

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
var element = util.$('#example');
var Dimensions = util.Dimensions;

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

#### Result

```log
{height: 270, width: 360}
```

***

### isVisible

TODO: to detect, whether an element is visible or not.
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
var element = util.$('#example');

// Is the element visible?
if (util.isVisible(element)) {
  console.log('The element is visible!');
} else {
  console.log('The element is hidden!');
}
```

#### Result

```log
'The element is visible!'
```

***

### isInput

TODO: to detect, whether an element is an input type or not.
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
  if (util.isInput(elements[i])) {
    console.log('A ' + elements[i].tagName.toLowerCase() + ' is an input type element!');
  } else {
    console.log('A ' + elements[i].tagName.toLowerCase() + ' is NOT an input type element!');
  }
}
```

#### Result

```log
'A input is an input type element!'
'A select is an input type element!'
'A textarea is an input type element!'
'A div is NOT an input type element!'
```

***

### prepend

TODO: to insert some content before any other child nodes inside another element.

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
var element = util.$('#example');
var content = '<option>Injected by Javascript</option>';

util.prepend(element, content);
```

#### Result

```html
<select id="example" class="uk-select">
    <option>Injected by Javascript</option>
    <option>Option 01</option>
    <option>Option 02</option>
</select>
```

***

### append

TODO: to insert some content after any other child nodes inside another element.

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
var element = util.$('#example');
var content = '<option>Injected by Javascript</option>';

util.prepend(element, content);
```

#### Result

```html
<select id="example" class="uk-select">
    <option>Option 01</option>
    <option>Option 02</option>
    <option>Injected by Javascript</option>
</select>
```

***

### before

TODO: to insert some content before another element.

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
var element = util.$('#example');
var content = '<option>Injected by Javascript</option>';

util.before(element, content);
```

#### Result

```html
<select class="uk-select">
    <option>Option 01</option>
    <option>Injected by Javascript</option>
    <option id="example">Option 02</option>
</select>
```

***

### after

TODO: to insert some content after another element.

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
var element = util.$('#example');
var content = '<option>Injected by Javascript</option>';

util.after(element, content);
```

#### Result

```html
<select class="uk-select">
    <option id="example">Option 01</option>
    <option>Injected by Javascript</option>
    <option>Option 02</option>
</select>
```

***

### remove

TODO: to remove a certain element from the DOM.
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
var element = util.$('#example');

util.remove(element);
```

#### Result

```html
<select class="uk-select">
    <option>Option 02</option>
</select>
```

***

### wrapAll

TODO: to wrap some element inside a HTML structure.

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
var element = util.$('#example');

util.wrapAll(element, '<div class="uk-card uk-card-primary uk-card-body">');
```

#### Result

```html
<div class="uk-card uk-card-primary uk-card-body">
    <p id="example">This is a paragraph!</p>
</div>
```

***

### wrapInner

TODO: to wrap the content of some element with a HTML structure.

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
var element = util.$('#example');

util.wrapInner(element, '<span class="uk-text-danger">');
```

#### Result

```html
<p id="example"><span class="uk-text-danger">This is a paragraph!</span></p>
```

***

### unwrap

TODO: to unwrap some element, basically remove its direct parent.

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
var element = util.$('#example');

util.unwrap(element);
```

#### Result

```html
<p id="example">This is a paragraph!</p>
```

***

### fragment

TODO: to transform HTML fragments into whole HTML elements.

| Parameter | Type   | Default | Description       |
|:----------|:-------|:--------|:------------------|
| `html`    | String | `null`  | The HTML fragment |

JavaScript

```javascript
console.log(util.fragment('<div><p class="uk-text-danger">Some incomplete HTML!'));
```

#### Result

```html
<div><p class="uk-text-danger">Some incomplete HTML!</p></div>
```

***

## Events

The following functions are to work with DOM events.
They either are used for triggering, creating events or reacting on them.

***

### on

TODO: to react on a event, whenever it occurs.

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
var element = util.$('#example');
var lightbox = UIkit.lightbox(element);

// React on event
util.on('a', 'click', function () {
  lightbox.show(0);
});

// React on event, which is attached to a dynamically created HTML element
util.on(document, 'shown', '.uk-lightbox.uk-open', function () {
  console.log('Lightbox is displayed!');
});
```

#### Result

```log
'Lightbox is displayed!'
```

***

### off

TODO: to remove a previously registered event listener.

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
util.on(bind, 'click', function () {
  util.on(trigger, 'click', showNotification);
});

// Unbinds the event listener from the example button
util.on(unbind, 'click', function () {
  util.off(trigger, 'click', showNotification);
});
```

#### Result

By default the `Trigger` button does nothing.
After clicking the `Bind` button, another click on the `Trigger` button shows a notification.
If the `Unbind` button is clicked, the `Trigger` button no longer shows a notification.

***

### once

TODO: to react on a event only once.

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
var element = util.$('#example');

// Show a message, but only once
util.once(element, 'click', function () {
  UIkit.notification('Some message...');
});
```

#### Result

By clicking the `Show message` button a notification is displayed.
Any further clicks on the same button won't fire another notification.

***

### trigger

TODO: to manually triggering an event on an element.

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
var element = util.$('#example');

// React on custom event
util.on(element, 'MyEvent', function (e) {
  console.log(e.type, e.detail.data);
});

// Trigger a custom event
util.trigger(element, 'MyEvent', { data: 'was triggered!' });
```

#### Result

```log
'MyEvent was triggered!'
```

***

### createEvent

TODO: to create a custom event.

| Parameter    | Type    | Default | Description                                                    |
|:-------------|:--------|:--------|:---------------------------------------------------------------|
| `e`          | String  | `null`  | The name of the event                                          |
| `bubbles`    | Boolean | `true`  | Indicating whether the event bubbles up through the DOM or not |
| `cancelable` | Boolean | `false` | Indicating whether the event is cancelable or not              |
| `detail`     | Any     | `null`  | The data passed when initializing the event                    |

JavaScript

```javascript
// Create a custom event
var customEvent = util.createEvent('MyEvent', true, true, { data: 'was created!' });

console.log(customEvent.type, customEvent.detail.data);
```

#### Result

```log
'MyEvent was created!'
```

***

## Language

The following functions might be helpful when working with JavaScript based transformations, requests, etc.
Hence the reason this chapter is called language.

***

### hasOwn

TODO: to check if a JavaScript object has some key.

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
console.log(util.hasOwn(object, 'data'));
```

#### Result

```log
true
```

***

### classify

TODO: to format a string to a correct JavaScript class name.
The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'my-javascript-class';

// Format to the correct class format
console.log(util.classify(string));
```

#### Result

```log
'MyJavascriptClass'
```

***

### hyphenate

TODO: to hyphenate a string. The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'someCamelcasedString';

// Hyphenate the string
console.log(util.hyphenate(string));
```

#### Result

```log
'some-camelcase-string'
```

***

### camelize

TODO: to camelcase a string. The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'some-hyphenated-string';

// Camelcase the string
console.log(util.camelize(string));
```

#### Result

```log
'someHyphenatedString'
```

***

### ucfirst

TODO: to uppercase the first letter of a string. The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                          |
|:----------|:-------|:--------|:-------------------------------------|
| `str`     | String | `null`  | The string to be formatted correctly |

JavaScript

```javascript
var string = 'uppercase';

// Uppercase the first letter
console.log(util.ucfirst(string));
```

#### Result

```log
'Uppercase'
```

***

### startsWith

TODO: to check if a string starts with some value.

| Parameter | Type   | Default | Description             |
|:----------|:-------|:--------|:------------------------|
| `str`     | String | `null`  | The string to search in |
| `search`  | String | `null`  | The string to look for  |

JavaScript

```javascript
var string = 'This is a string!';

console.log(util.startsWith(string, 'This'));
```

#### Result

```log
true
```


***

### endsWith

TODO: to check if a string ends with some value.

| Parameter | Type   | Default | Description             |
|:----------|:-------|:--------|:------------------------|
| `str`     | String | `null`  | The string to search in |
| `search`  | String | `null`  | The string to look for  |

JavaScript

```javascript
var string = 'This is a string!';

console.log(util.endsWith(string, 'string!'));
```

#### Result

```log
true
```

***

### includes

TODO: to check if either a string or an array contains some value.

| Parameter | Type          | Default | Description                      |
|:----------|:--------------|:--------|:---------------------------------|
| `obj`     | String, Array | `null`  | The string or array to search in |
| `search`  | String        | `null`  | The string to look for           |

JavaScript

```javascript
var string = 'This is a string!';
var array = ['This', 'is', 'an', 'array', '!'];

console.log(util.includes(string, 'string'));
console.log(util.includes(array, 'array'));
```

#### Result

```log
true
true
```

***

### isFunction

TODO: to check whether an object is a function or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
function example() {}

// Is this a function?
console.log(util.isFunction(example));
```

#### Result

```log
true
```

***

### isObject

TODO: to check whether a variable is a JavaScript Object or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var image = new Image();

// Is this a JavaScript object?
console.log(util.isObject(image));
```

#### Result

```log
true
```

***

### isPlainObject

TODO: to check whether a variable was created by the Object constructor.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var object = {};

// Is this a plain Object?
console.log(util.isPlainObject(object));
```

#### Result

```log
true
```

***

### isWindow

TODO: to check whether a variable is a Window Object.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var win = window;

// Is this a Window Object?
console.log(util.isWindow(win));
```

#### Result

```log
true
```

**Note** This function does not detect, if the operating system `Microsoft Windows` is used.

***

### isDocument

TODO: to check whether a variable is a Document Object.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                         |
|:----------|:-----|:--------|:------------------------------------|
| `obj`     | Any  | `null`  | The object to run the query against |

JavaScript

```javascript
var doc = document || window.document;

// Is this a Document Object?
console.log(util.isDocument(doc));
```

#### Result

```log
true
```

***

### isBoolean

TODO: to check whether a value is a boolean type or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = false;

// Is this a boolean?
console.log(util.isBoolean(example));
```

#### Result

```log
true
```

***

### isString

TODO: to check whether a value is a string type or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = 'This is a string!';

// Is this a string?
console.log(util.isString(example));
```

#### Result

```log
true
```

***

### isNumber

TODO: to check whether a value is a number type or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = 12;

// Is this a number?
console.log(util.isNumber(example));
```

#### Result

```log
true
```

***

### isNumeric

TODO: to check whether a value is numeric or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example = '12';

// Is this value numeric?
console.log(util.isNumeric(example));
```

#### Result

```log
true
```

***

### isUndefined

TODO: to check whether a value is undefined or not.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                        |
|:----------|:-----|:--------|:-----------------------------------|
| `value`   | Any  | `null`  | The value to run the query against |

JavaScript

```javascript
var example;

// Is this value undefined?
console.log(util.isUndefined(example));
```

#### Result

```log
true
```

***

### toBoolean

TODO: to turn a value, if possible into a boolean value.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = util.toBoolean('1');

console.log(example);
```

#### Result

```log
true
```

***

### toNumber

TODO: to turn a value, if possible into a number.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = util.toNumber('12.75');

console.log(example);
```

#### Result

```log
12.75
```

***

### toFloat

TODO: to turn a value, if possible into a float number.
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = util.toNumber('12.75');

console.log(example);
```

#### Result

```log
12.75
```

***

### toList

TODO: to turn a value, if possible into an array. 
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = util.toList('array, list, 12, true');

console.log(example);
```

#### Result

```log
(4) ['array', 'list', 12, true]
```

***

### toMedia

TODO: to turn a value, if possible into an array. 
The following parameter may be passed to the function.

| Parameter | Type | Default | Description                 |
|:----------|:-----|:--------|:----------------------------|
| `value`   | Any  | `null`  | The value to be transformed |

JavaScript

```javascript
var example = util.toMedia('200');

console.log(example);
```

#### Result

```log
'(min-width: 200px)'
```

***

### coerce

TODO: to coerce a value into some type of data. 

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
    console.log(util.coerce(types[i], values[i]));
}
```

#### Result

```log
true
12.5
<div id=​"example">​</div>​
(3) ['Hello', 'world', '!']
'(min-width: 640px)'
```


***

### toMs

TODO: to turn a value, if possible into milliseconds. 
The following parameter may be passed to the function.

| Parameter | Type           | Default | Description                |
|:----------|:---------------|:--------|:---------------------------|
| `time`    | String, Number | `null`  | The time to be transformed |

JavaScript

```javascript
var example = util.toMs('10s');

console.log(example);
```

#### Result

```log
10000
```

***

### swap

TODO: to swap a substring with another value. 
The following parameter may be passed to the function.

| Parameter | Type   | Default | Description                       |
|:----------|:-------|:--------|:----------------------------------|
| `value`   | String | `null`  | The string to perform the swap on |
| `a`       | String | `null`  | The value to be exchanged         |
| `b`       | String | `null`  | The value to be pasted in         |

JavaScript

```javascript
var example = util.swap('uk-position-left', 'left', 'right');

console.log(example);
```

#### Result

```log
'uk-position-right'
```

***

### assign

TODO: to assign all values of one or multiple objects to another object. 

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

var example = util.assign(target, source);

console.log(example);
```

#### Result

```log
{firstName: 'Jane', lastName: 'Smith', married: true}
```

***

### each

TODO: to loop through either an array or object. 

| Parameter | Type          | Default | Description                                        |
|:----------|:--------------|:--------|:---------------------------------------------------|
| `obj`     | Array, Object | `null`  | The object to loop through                         |
| `cb`      | Function      | `null`  | The callback function to access the object's items |

JavaScript

```javascript
var array = ['Apple', 'Banana', 'Kiwi', 'Mango'];

util.each(array, function (item) {
  console.log(item);
});
```

#### Result

```log
'Apple'
'Banana'
'Kiwi'
'Mango'
```

***

### clamp

TODO: to return a number, which is guaranteed to be in a predefined range. 

| Parameter | Type   | Default | Description                               |
|:----------|:-------|:--------|:------------------------------------------|
| `number`  | Number | `null`  | The default number passed to the function |
| `min`     | Number | `0`     | Minimum value to be returned              |
| `max`     | Number | `1`     | Maximum value to be returned              |

JavaScript

```javascript
var array = ['Apple', 'Banana', 'Kiwi', 'Mango'];

util.each(array, function (item) {
  console.log(item);
});
```

#### Result

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
something like `util.noop` could execute.

***

### intersectRect

Wait on [pull request](https://github.com/uikit/uikit/pull/3129).

***

### pointInRect

TODO: to detect wheter a point lies inside of a rectangle or not. 

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
var example = util.$('#example').getBoundingClientRect();

util.on(document, 'click', function (e) {
  console.log(util.pointInRect({ x: e.pageX, y: e.pageY }, example));
});
```

#### Result

```log
If you click onto the card this function returns true, otherwise false.
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
var tracker = new util.MouseTracker();
var example = util.$('#example');
var target = util.$('#target');

// Initialize the mouse tracker
util.on(example, 'mouseenter', function () {
  tracker.init();
});

// Unbind the mouse tracker
util.on(example, 'mouseleave', function () {
  tracker.cancel();
});

// Detect mouse movement
util.on(example, 'mousemove', function () {
  console.log(tracker.movesTo(target));
});
```

#### Result

```log
If the mouse moves towards the target this returns true otherwise false.
```

***

## Player

***

## Promises

***

## Viewport

***

## scrollIntoView

Scroll smoothly to a desired section.

```javascript
scrollIntoView(element [, options])
```

| Parameter  | Type                   | Description                                                   |
|:-----------|:-----------------------|:--------------------------------------------------------------|
| `element`  | [Nodes](#pseudo-types) | The HTML element                                              |
| `options`  | Object                 | Allows to configure the duration (in milliseconds) and offset |   


### Usage

```javascript
var element = util.$('#example');

util.scrollIntoView(element, { duration: 1000, offset: 0 });
```

## Selectors

***

## Styles

***

## Touch

***

## Pseudo-types

Pseudo-types are keywords used in this documentation to specify the types or values an argument can have.

### mixed

_mixed_ indicates that a parameter may accept multiple (but not necessarily all) types.

### Nodes

_Nodes_ may be a DOM Node, a NodeList, an Array of Nodes or a jQuery object. It will be filtered.

### Node

_Node_ may be a DOM Node or the first node of a NodeList, an Array of Nodes or a jQuery object.
