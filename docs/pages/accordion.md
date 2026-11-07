# Accordion

<p class="uk-text-lead">Create a list of items that can be shown individually by clicking an item's header.</p>

## Usage

The Accordion component consists of a parent container with the `uk-accordion` attribute, and a title and content part for each accordion item.

| Class                   | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| `.uk-accordion-title`   | Defines and styles the title for each accordion item.                      |
| `.uk-accordion-content` | Defines the content part for each accordion item.                          |

Use a heading element containing an `<a>` element for each title. Choose the heading level to fit your page structure.

To apply a style to the accordion add the `.uk-accordion-default` modifier.

```html
<ul class="uk-accordion-default" uk-accordion>
    <li>
        <h3 class="uk-accordion-title">
            <a href></a>
        </h3>
        <div class="uk-accordion-content"></div>
    </li>
</ul>
```

```example
<ul class="uk-accordion-default" uk-accordion>
    <li class="uk-open">
        <h3 class="uk-accordion-title">
            <a href>Item 1</a>
        </h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 2</a>
        </h3>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 3</a>
        </h3>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>
```

***

## Icon

To create an accordion icon, just add a `span` element with the `uk-accordion-icon` attribute at the end of the anchor inside the accordion title.

```html
<h3 class="uk-accordion-title">
    <a href>Item 1 <span uk-accordion-icon></span></a>
</h3>
```

```example
<ul class="uk-accordion-default" uk-accordion>
    <li class="uk-open">
        <h3 class="uk-accordion-title">
            <a href>Item 1 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 2 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 3 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>
```

***

## Details and summary

Alternatively, use a `<details>` element for each accordion item and a `<summary>` element with the `.uk-accordion-title` class for its title. Wrap the items in a container with the `uk-accordion` attribute. Add the `open` attribute to a `<details>` element to open it initially.

```html
<div class="uk-accordion-default" uk-accordion>
    <details open>
        <summary class="uk-accordion-title">Item 1 <span uk-accordion-icon></span></summary>
        <div class="uk-accordion-content">…</div>
    </details>
    <details>
        <summary class="uk-accordion-title">Item 2 <span uk-accordion-icon></span></summary>
        <div class="uk-accordion-content">…</div>
    </details>
</div>
```

```example
<div class="uk-accordion-default" uk-accordion>
    <details open>
        <summary class="uk-accordion-title">Item 1 <span uk-accordion-icon></span></summary>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </details>
    <details>
        <summary class="uk-accordion-title">Item 2 <span uk-accordion-icon></span></summary>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </details>
</div>
```

***

## Custom style

To use the accordion without the default style, omit the `.uk-accordion-default` class. You can then use other UIkit classes to control the title size, spacing and icon alignment. The following example uses `<h3>` headings with classes from the [Grid](grid.md), [Flex](flex.md), [Link](link.md) and [Margin](margin.md) components.

```html
<ul class="uk-grid uk-child-width-1-1 uk-grid-small" uk-accordion>
    <li>
        <h3 class="uk-accordion-title uk-margin-remove">
            <a class="uk-flex uk-flex-middle uk-link-reset" href>
                <div class="uk-flex-1">Heading H3</div>
                <div class="uk-margin-xsmall-left" uk-accordion-icon></div>
            </a>
        </h3>
        <div class="uk-accordion-content uk-margin-small-top">…</div>
    </li>
</ul>
```

```example
<ul class="uk-grid uk-child-width-1-1 uk-grid-small" uk-accordion>
    <li class="uk-open">
        <h3 class="uk-accordion-title uk-margin-remove">
            <a class="uk-flex uk-flex-middle uk-link-reset" href>
                <div class="uk-flex-1">Heading H3</div>
                <div class="uk-margin-xsmall-left" uk-accordion-icon></div>
            </a>
        </h3>
        <div class="uk-accordion-content uk-margin-small-top">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title uk-margin-remove">
            <a class="uk-flex uk-flex-middle uk-link-reset" href>
                <div class="uk-flex-1">Item 2</div>
                <div class="uk-margin-xsmall-left" uk-accordion-icon></div>
            </a>
        </h3>
        <div class="uk-accordion-content uk-margin-small-top">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title uk-margin-remove">
            <a class="uk-flex uk-flex-middle uk-link-reset" href>
                <div class="uk-flex-1">Item 3</div>
                <div class="uk-margin-xsmall-left" uk-accordion-icon></div>
            </a>
        </h3>
        <div class="uk-accordion-content uk-margin-small-top">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </li>
</ul>
```

***

## No collapsing

By default, all accordion items can be collapsed. To prevent this behavior and always maintain one open item, add the `collapsible: false` option to the attribute.

```html
<ul uk-accordion="collapsible: false">…</ul>
```

```example
<ul uk-accordion="collapsible: false">
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 1 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 2 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 3 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>
```

***

## Multiple open items

To display multiple content sections at the same time without one collapsing when the other one is opened, add the `multiple: true` option to the `uk-accordion` attribute.

```html
<ul uk-accordion="multiple: true">…</ul>
```

```example
<ul uk-accordion="multiple: true">
    <li class="uk-open">
        <h3 class="uk-accordion-title">
            <a href>Item 1 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 2 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 3 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>
```

***

## Set open items

To specify which items should be opened initially, add the `.uk-open` class to the item. You can also use this to open multiple items. Just make sure to add the option `multiple: true` to the `uk-accordion` attribute.

**Note** Alternatively, you can open a single item by adding the `active: <index>` option to the `uk-accordion` attribute, e.g. `active: 1` to show the second element (the index is zero-based). Note that this will overwrite the `uk-open` class.

```html
<ul uk-accordion>
    <li></li>
    <li class="uk-open"></li>
    <li></li>
</ul>
```

```example
<ul uk-accordion>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 1 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li class="uk-open">
        <h3 class="uk-accordion-title">
            <a href>Item 2 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <h3 class="uk-accordion-title">
            <a href>Item 3 <span uk-accordion-icon></span></a>
        </h3>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>
```

When using `details` and `summary` elements, set the `open` attribute on the `<details>` element instead of adding the `.uk-open` class.

```html
<div uk-accordion>
    <details></details>
    <details open></details>
    <details></details>
</div>
```

***

## Connect related content

To toggle related content containers in sync with the active accordion item, add the `switcher-connect: SELECTOR` option and target the corresponding switcher container. Each child in the connected container is toggled together with the matching accordion item.

```html
<ul uk-accordion="switcher-connect: #my-id">…</ul>

<ul id="my-id" class="uk-switcher">…</ul>
```

```example
<div class="uk-child-width-1-2@m" uk-grid>
    <div>
        <ul uk-accordion="collapsible: false; switcher-connect: #accordion-media; animation: uk-animation-fade">
            <li>
                <h3 class="uk-accordion-title">
                    <a href>Item 1 <span uk-accordion-icon></span></a>
                </h3>
                <div class="uk-accordion-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </li>
            <li>
                <h3 class="uk-accordion-title">
                    <a href>Item 2 <span uk-accordion-icon></span></a>
                </h3>
                <div class="uk-accordion-content">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </li>
            <li>
                <h3 class="uk-accordion-title">
                    <a href>Item 3 <span uk-accordion-icon></span></a>
                </h3>
                <div class="uk-accordion-content">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </li>
        </ul>
    </div>
    <div>
        <ul id="accordion-media" class="uk-switcher uk-margin-remove">
            <li><img src="images/light.jpg" width="1800" height="1200" alt="Light"></li>
            <li><img src="images/dark.jpg" width="1800" height="1200" alt="Dark"></li>
            <li><img src="images/photo.jpg" width="1800" height="1200" alt="Photo"></li>
        </ul>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option             | Value           | Default                   | Description                                                                                                                                                                                              |
|--------------------|-----------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `active`           | Number          | `false`                   | Index of the element to open initially.                                                                                                                                                                  |
| `animation`        | Boolean, String | `true`                    | Reveal item directly or with a transition. When using `switcher-connect`, accepts space-separated animation names and an optional comma-separated animation-out value.                                   |
| `collapsible`      | Boolean         | `true`                    | Allow all items to be closed.                                                                                                                                                                            |
| `content`          | String          | `.uk-accordion-content`   | The content selector, which selects the accordion content elements.                                                                                                                                      |
| `duration`         | Number          | `200`                     | Animation duration in milliseconds.                                                                                                                                                                      |
| `multiple`         | Boolean         | `false`                   | Allow multiple open items.                                                                                                                                                                               |
| `targets`          | String          | `> *`                     | CSS selector of the element(s) to toggle.                                                                                                                                                                |
| `toggle`           | String          | `.uk-accordion-title`     | The toggle selector, which toggles accordion items.                                                                                                                                                      |
| `transition`       | String          | `ease`                    | The transition to use when revealing items. Use keyword for [easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions). |
| `offset`           | Number          | `0`                       | Pixel offset added to scroll top.                                                                                                                                                                        |
| `switcher-connect` | String          | `false`                   | Related switcher items container. Children are toggled in sync with the active accordion item.                                                                                                           |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.accordion(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has been completed.                                      |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

### Methods

The following methods are available for the component:

#### Toggle

```js
UIkit.accordion(element).toggle(index, animate);
```

Toggles the content pane.

| Name      | Type                 | Default | Description                                  |
| --------- | -------------------- | ------- | -------------------------------------------- |
| `index`   | String, Number, Node | 0       | Accordion pane to toggle. 0 based index.     |
| `animate` | Boolean              | true    | Suppress opening animation by passing false. |

***

## Accessibility

The Accordion component adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *titles* have an ID, the `aria-expanded` state and the `aria-controls` property set to the ID of the respective content. When the title itself is an `<a>` element, it also receives the `button` role.
- The *contents* have an ID, the `region` role and the `aria-labelledby` property set to the ID of the respective title.

### Keyboard interaction

The Accordion component can be accessed through the keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys navigate through accordion titles.
- The <kbd>enter</kbd> or <kbd>space</kbd> key toggles the content of the focused title.
