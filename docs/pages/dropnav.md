# Dropnav

<p class="uk-text-lead">Create dropdown menus for any navigation.</p>

The Dropnav component initializes all dropdowns in a navigation with the same options, so they don't have to be initialized individually. All dropdowns within the dropnav are aim-aware. This means the dropdowns stay open as long as the mouse pointer moves towards the dropdown. An additional delay ensures that dropdowns stay open even if the mouse pointer shortly moves in another direction. In hover mode dropdowns close immediately if another menu item is hovered.

## Usage

The Dropnav component consists of a number of toggles and their related dropdowns. Add the `uk-dropnav` attribute to a list element which contains the toggles or its parent container element. Use the [Dropdown component](dropdown.md) by adding the `.uk-dropdown` class to the dropdowns and the `.uk-dropdown-nav` class to navs inside the dropdown.

The Dropnav toggles are styled through other components, some of which will be shown here.

```html
<ul uk-dropnav>
    <li>
        <a href=""></a>
        <div class="uk-dropdown">
            <ul class="uk-nav uk-dropdown-nav">…</ul>
        </div>
    </li>
</ul>
```

In this example we are using the [Subnav component](subnav.md).

```example
<nav uk-dropnav>
    <ul class="uk-subnav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</nav>
```

***

## Dropbar

A dropbar extends to the full width of the dropnav and displays the dropdown without its default styling. To place dropdowns inside such a dropbar, add the `dropbar: true` option to the `uk-dropnav`. Optionally, use `dropbar-anchor` option to select after which element the dropbar will be injected into the markup.

```html
<nav uk-dropnav="dropbar: true">…</nav>
```

```example
<nav uk-dropnav="dropbar: true">

    <ul class="uk-subnav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href="#">Item</a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li class="uk-nav-header">Header</li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                    <li class="uk-nav-divider"></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href="#">Item</a>
            <div class="uk-dropdown uk-width-large">
                <div class="uk-child-width-1-2" uk-grid>
                    <div>
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </ul>

</nav>
```

***

## Click mode

A parent item inside the dropnav can be enabled by either hovering or clicking the toggle. Just add the `mode: click` option to the `uk-dropnav` attribute.

```html
<nav uk-dropnav="mode: click">…</nav>
```

```example
<nav uk-dropnav="mode: click">
    <ul class="uk-subnav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</nav>
```

***

## Alignment

By default, the dropdowns are positioned below the dropbar item and are aligned to the left. To change the alignment, set the `align` option to the `uk-dropbar` attribute.

| Position | Description                         |
| -------- | ----------------------------------- |
| `left`   | Aligns the dropdowns to the left.   |
| `right`  | Aligns the dropdowns to the right.  |
| `center` | Aligns the dropdowns to the center. |

```html
<nav uk-dropbar="align: center">…</nav>
```

```example
<nav uk-dropnav="align: center">
    <ul class="uk-subnav uk-flex-center">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</nav>
```

***

## Target

By default, the dropdowns are aligned to their toggle item. To position the dropdown to a different element, just add `target: SELECTOR` option to the `uk-dropbar` attribute.

```html
<nav uk-dropbar="target: !.uk-section">…</nav>
```

```example
<div class="uk-section uk-section-muted uk-section-small">
    <nav uk-dropnav="target: !.uk-section; align: center">

        <ul class="uk-subnav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="uk-dropdown">
                    <ul class="uk-nav uk-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Parent</a>
                <div class="uk-dropdown uk-width-large">
                    <div class="uk-child-width-1-2" uk-grid>
                        <div>
                            <ul class="uk-nav uk-dropdown-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li class="uk-nav-header">Header</li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                                <li class="uk-nav-divider"></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul class="uk-nav uk-dropdown-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li class="uk-nav-header">Header</li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                                <li class="uk-nav-divider"></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    </nav>
</div>
```

***

## Stretch

To stretch a dropdown, use the [Drop component](drop.md) and its `stretch` option. In the following example the dropdown is aligned to the boundary of the dropnav.

```html
<nav uk-dropnav="boundary: true; stretch: x; flip: false">…</nav>
```

```example
<nav uk-dropnav="boundary: true; stretch: x; flip: false">

    <ul class="uk-subnav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href="#">Parent</a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li class="uk-nav-header">Header</li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                    <li class="uk-nav-divider"></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href="#">Parent</a>
            <div class="uk-dropdown">
                <div class="uk-child-width-1-2" uk-grid>
                    <div>
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </ul>

</nav>
```

***

## Parent icon

To create a parent icon, just use the [Drop component](drop.md) and add the `uk-drop-parent-icon` attribute to a `<span>` element.

```html
<ul uk-dropnav>
    <li>
        <a href="">Parent <span uk-drop-parent-icon></span></a>
        <div class="uk-dropdown">…</div>
    </li>
</ul>
```

```example
<nav uk-dropnav>
    <ul class="uk-subnav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</nav>
```

***

## Dropnav and tab

The dropnav is easily applied to the [Tab component](tab.md).

```html
<nav uk-dropnav>
    <ul class="uk-tab">…</ul>
<nav>
```

```example
<nav uk-dropnav>
    <ul class="uk-tab">
        <li class="uk-active"><a href="#">Active</a></li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a href="#">Parent <span uk-drop-parent-icon></span></a>
            <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Item</a></li>
    </ul>
</nav>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option           | Value                 | Default             | Description                                                                                                  |
|------------------|-----------------------|---------------------|--------------------------------------------------------------------------------------------------------------|
| `align`          | String                | `left`              | Dropdown alignment: `left`, `right`, `center`                                                                |
| `dropbar `       | Boolean               | `false`             | Enable or disable dropbar behavior.                                                                          |
| `dropbar-anchor` | CSS selector          | `false`             | If set, dropbar will be inserted after the anchor element.                                                   |
| `stretch`        | Boolean, `x`, `y`     | `true`              | Stretch dropdown on both (true) or given axis.                                                               |
| `mode`           | click, hover          | click, hover        | Comma-separated list of dropdown trigger behavior modes.                                                     |
| `delay-show`     | Number                | `0`                 | Delay time in hover mode before a dropdown is shown in ms.                                                   |
| `delay-hide`     | Number                | `800`               | Delay time in hover mode before a dropdown is hidden in ms.                                                  |
| `boundary`       | CSS selector          | `true`              | The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `target`         | Boolean, CSS selector | `false`             | The element the dropdown is positioned to (`true` for window).                                               |
| `target-x`       | Boolean, CSS selector | `false`             | The element's X axis the dropdown is positioned to (`true` for window).                                      |
| `target-y`       | Boolean, CSS selector | `false`             | The element's Y axis the dropdown is positioned to (`true` for window).                                      |
| `offset`         | Number                | `0`                 | The dropdown offset.                                                                                         |
| `animation`      | String                | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                      |
| `animate-out`    | Boolean               | `false`             | Use animation when closing the drop.                                                                         |
| `duration`       | Number                | `200`               | The animation duration.                                                                                      |
| `container`      | Boolean               | `false`             | Define a target container via a selector to specify where the dropdown should be appended in the DOM.        |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.dropnav(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
|--------------|------------------------------------------------------------------------------------------------|
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

***

## Accessibility

The Dropnav component adheres to the [Disclosure Navigation Menu WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/) and automatically sets the appropriate WAI-ARIA states and properties.

- The *nav items* and *toggle items* have the `aria-expanded` state and the `aria-haspopup` property.
- The *toggle items* also have the `aria-label` property.

### Keyboard interaction

The Dropnav component can be accessed through keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys place focus inside or outside the dropnav. 
- The <kbd>left/right arrow</kbd> keys navigate through the dropnav items. In hover mode the dropdown will open automatically. If the focus is on the last item, it moves to the first item. 
- The <kbd>enter</kbd> or <kbd>space</kbd> keys open and close the dropdown of the focused dropnav item. 
- The <kbd>up/down arrow</kbd> keys navigates through the nav items in a dropdown. If the focus is on the last item, it move to the first item.
- The <kbd>esc</kbd> key closes any dropdown even if focus has moved to another element.

### Internationalization

The Toggle Item component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key     | Default     | Description             |
|---------|-------------|-------------------------|
| `label` | `Open Menu` | `aria-label` attribute. |
