# JavaScript

## Installation

You have the following options to get UIkit:

- Download the [latest release](https://github.com/uikit/uikit/releases/latest) with pre-built JavaScript.
- Install with [Bower](https://bower.io) to get the pre-built JavaScript. This is recommended when using UIkit for a typical web project: ```bower install uikit```
- Clone the repo to get all source files including build scripts: `git clone git://github.com/uikit/uikit.git`
- Install with [Npm](https://npmjs.com) to get all source files as they are available on Github: ```npm install uikit```
- Directly load UIkit from [CDNJS](https://cdnjs.com): https://cdnjs.com/libraries/uikit

Once you have the files, include them on your page by adding them to the `<head>` section. You can also choose to use the `defer` attribute, to delay script execution.

```html
<script src="js/jquery.min.js"></script>
<script src="js/uikit.min.js"></script>
```

***

## Component usage

You can use UIkit components by adding `uk-*` attributes to your HTML elements without writing a single line of JavaScript. This is UIkit's best practice of using its components and should always be considered first.

```html
<div id="sticky" uk-sticky="offset: 50;"></div>
```

You can also initialize components via JavaScript and apply them to elements in your document.

```js
var stickys = UIkit.sticky('#sticky', {
    offset: 50
});
```

***

## Component configuration

Each component comes with a set of configuration options that let you customize their behaviour.

You can set the options on a per instance level or globally.

### Instance

Options can be set:

with the `key: value;` format,

```html
<div uk-sticky="offset: 50; top: 100;"></div>
```

in valid JSON format,

```html
<div uk-sticky='{"offset": 50, "top": 100}'></div>
```

or with single attributes.

```html
<div uk-sticky offset="50" top="100"></div>
```

If an option is marked as `Primary`, its key may be omitted, only if it is the only custom value. Please see the component's individual options table to the find the `Primary` option.

```html
<span uk-icon="home"></span>
```

Programmatically components can pass options to the components constructor method.

```js
// Passing an options object.
UIkit.sticky('.sticky', {
    offset: 50,
    top: 100
});

// If the component supports Primary options.
UIkit.drop('#drop', 'top-left');
```

### Precedence

Options passed via the components attribute will have the highest precedence, followed by single attributes and then JavaScript.

```html
<div uk-sticky="offset: 50;" offset="100"></div>

<!-- The offset will be 50 -->
```

### Globally

Component options can be changed globally by changing the component's `defaults` property.

```js
UIkit.components.sticky.options.defaults.offset = 50;
UIkit.components.sticky.options.defaults.top = 100;
```

***

## Programmatic use

Programmatically components may be initialized with the `element, options` arguments format in JavaScript. The `element` argument may be any `Node`, `jQuery selector` or `jQuery object`. You'll receive an `array` of initialized components as return value. `Functional Components` (e.g. `Notification`) should omit the `element` parameter.

```js
// Passing a selector and an options object.
var stickys = UIkit.sticky('.sticky', {
    offset: 50,
    top: 100
});

// Functional components should omit the 'element' argument.
var notifications = UIkit.notification('MyMessage', 'danger');
```

Initializing your components programmatically gives you the possibility to invoke their functions directly.

```js
UIkit.offcanvas('#offcanvas')[0].toggle();
```

We consider component functions and variables prefixed with an underscore as internal API, which may change at any given time.

Each component triggers DOM events that you can react to. For example when an Modal is shown or a Scrollspy element becomes visible.

```js
$('#offcanvas').on('show', function () {
    // do something
});
```

The component's documentation page lists its events.

Sometimes components, like Grid or Tab are hidden in the markup. This may happen when used in combination with the Switcher, Modal or Dropdown. Once they become visible, they need to adjust or fix their height and other dimensions.

UIkit offers several ways of updating a component.

```js
// Calls the update hook on all registered instances.
UIkit.update();

// Updates the component itself and components nested beneath the component.
component.$update();

// Updates the component itself and components attached to the component's parents.
component.$updateParents();
```

If you need to make sure a component is properly destroyed, for example upon removal from the DOM, you can call its `destroy` function.

```js
// Destroys the component. For example unbind its event listeners.
component.$destroy();

// Also destroys the component, but also removes the element from the DOM.
component.$destroy(true);
```

***

## Component initialization

UIkit is listening for DOM manipulations and will automatically initialize, connect and disconnect components as they are inserted or removed from the DOM. That way it can easily be used with JavaScript Frameworks like Vue.js. Head over to [Github](https://github.com/uikit/uikit-site) to see a working example of how Vue.js and UIkit work together on this site.
