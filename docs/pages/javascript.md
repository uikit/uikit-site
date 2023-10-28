# JavaScript

Once you have [installed UIkit](installation.md), include the JavaScript files on your page by adding them to the `<head>` section. You can also choose to use the `defer` attribute to delay script execution.

```html
<script src="js/uikit.min.js"></script>
<script src="js/uikit-icons.min.js"></script>
```

***

## UIkit and reactive JavaScript frameworks

UIkit is listening for DOM manipulations and will automatically initialize, connect and disconnect components as they are inserted or removed from the DOM. That way it can easily be used with JavaScript frameworks like [Vue.js](http://vuejs.org/) and React.

***

## Component usage

You can use UIkit components by adding `uk-*` or `data-uk-*` attributes to your HTML elements without writing a single line of JavaScript. This is UIkit's best practice of using its components and should always be considered first.

```html
<div uk-sticky="offset: 50;"></div>

<div data-uk-sticky="offset: 50;"></div>
```

**Note** [React](https://facebook.github.io/react/) will work with `data-uk-*` prefixes only.

You can also initialize components via JavaScript and apply them to elements in your document.

```js
var sticky = UIkit.sticky('#sticky', {
    offset: 50
});
```

You can retrieve an already initialized component by passing a selector or an element as a first Argument to the component function.

 ```js
 var sticky = UIkit.sticky('#sticky');
 ```

Omitting the second parameter will not re-initialize the component but serve as a getter function.

***

## Component configuration

Each component comes with a set of configuration options that let you customize their behavior. You can set the options on a per-instance level or globally.

### Instance

Options can be set as shown in the following examples. 

With the `key: value;` format:

```html
<div uk-sticky="start: 100; offset: 50;"></div>
```

In valid JSON format:

```html
<div uk-sticky='{"start": 100, "offset": 50}'></div>
```

As single attributes:

```html
<div uk-sticky start="100" offset="50"></div>
```

Or as single attributes prefixed with `data-`:

```html
<div uk-sticky data-start="100" data-offset="50"></div>
```

For _Primary_ options, its key may be omitted, if it's the only option in the attribute value. Please take a look at the specific component documentation to find which option is the _Primary_ option.

```html
<span uk-icon="home"></span>
```

You can also pass options to the component constructor programmatically.

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

Options passed via the component attribute will have the highest precedence, followed by single attributes and then JavaScript.

```html
<div uk-sticky="offset: 50;" offset="100"></div>

<!-- The offset will be 50 -->
```

### Globally

Component options can be changed globally by extending a component. It will affect newly created instances only.

```js
UIkit.mixin({
    data: {
        offset: 50,
        top: 100
    }
}, 'sticky');
```

Omitting the second parameter, will apply the custom behavior to every UIkit instance created afterwards.

***

## Programmatic use

Programmatically, components may be initialized with the `element, options` arguments format in JavaScript. The `element` argument may be any `Node`, `selector` or `jQuery object`. You'll receive the initialized component as a return value. `Functional Components` (e.g. `Notification`) should omit the `element` parameter.

```js
// Passing a selector and an options object.
var sticky = UIkit.sticky('.sticky', {
    offset: 50,
    top: 100
});

// Functional components should omit the 'element' argument.
var notifications = UIkit.notification('MyMessage', 'danger');
```

**Note**
The options names must be in their camel-cased representation, e.g. `show-on-up` becomes `showOnUp`.

After initialization, you can get your component by calling the same initialization function, omitting the `options` parameter.

```javscript
// Sticky is now the prior initialised components
var sticky = UIkit.sticky('.sticky');
```

**Note**
Using `UIkit[componentName](selector)` with CSS selectors will always return the first occurrence only!
If you need to access all instances do [query](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) the elements first. Then apply the getter to each element separately - `UIkit[componentName](element)`.


Initializing your components programmatically gives you the possibility to invoke their functions directly.

```js
UIkit.offcanvas('#offcanvas').toggle();
```

Any component functions and variables prefixed with an underscore are considered as part of the internal API, which may change at any given time.

Each component triggers DOM events that you can react to. For example when a Modal is shown or a Scrollspy element becomes visible.

```js
UIkit.util.on('#offcanvas', 'show', function () {
    // do something
});
```

The component's documentation page lists its events.

**Note** Components often trigger events with the same name (e.g. 'show'). Usually events [bubble through the DOM](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture). Check the event target, to ensure the event was triggered by the desired component.

Sometimes, components like Grid or Tab are hidden in the markup. This may happen when used in combination with the Switcher, Modal or Dropdown. Once they become visible, they need to adjust or fix their height and other dimensions.

UIkit offers several ways of updating a component. Omitting the `type` parameter will trigger an `update` event.

```js
// Calls the update hook on components registered on the element itself, its parents and children.
UIkit.update(element = document.body, type = 'update');

// Updates the component itself.
component.$emit(type = 'update');

```

If you need to make sure a component is properly destroyed, for example upon removal from the DOM, you can call its `$destroy` function.

```js
// Destroys the component. For example unbind its event listeners.
component.$destroy();

// Also destroys the component, but also removes the element from the DOM.
component.$destroy(true);
```

***

## UIkit initialization

You might need to execute code after UIkit is loaded, but before it initializes its components on the page.

This hook allows you to register custom components or component mixins.

You can hook into this step in the lifecycle by listening for the `uikit:init` event UIkit triggers on the document.

```js
document.addEventListener('uikit:init', () => {
    // do something
})
```
