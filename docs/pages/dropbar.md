# Dropbar

<p class="uk-text-lead">Create a toggleable, full-width section called dropbar.</p>

The Dropbar component provides a section-like style for the [Drop component](drop.md). In opposite to the dropdown which is positioned anywhere on a page with space around, the dropbar extends to the full width or height of the viewport, so it perfectly fits three edges without spacing.

The Dropbar component is aim-aware. This means the dropbar stays open as long as the mouse pointer moves towards the dropbar. An additional delay ensures that the dropbar stays open even if the mouse pointer shortly moves in another direction. A dropbar closes immediately if another dropbar is opened.

## Usage

To apply this component, add the `.uk-dropbar` class and add a modifier class for the direction from which the dropbar appears, for example `.uk-dropbar-top`.

```html
<div class="uk-dropbar uk-dropbar-top"></div>
```

Additionally, add the `uk-drop` attribute to the dropbar and a toggle element before. Any content, like a button, can toggle the drop component. Since the dropbar visually requires to extend to the full width or height of the viewport, add the `stretch: true` option to the `uk-drop` attribute. To only stretch to one axis, use `stretch: x` or `stretch: y`. For all the animation details take a look at the [Drop component](drop.md).

```html
<button type="button"></button>
<div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x"></div>
```

```example
<div class="uk-overflow-auto uk-height-medium">
    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button">Hover</button>
        <div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
</div>
```

The dropbar is typically used together with the [Navbar component](navbar.md).

```example
<div class="uk-overflow-auto uk-height-medium">

    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar>

                <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                        <li>
                            <a class="uk-navbar-toggle uk-navbar-toggle-animate" href uk-navbar-toggle-icon></a>
                            <div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    </nav>

</div>
```

Mind, that there is a dedicated implementation for multiple dropbars in the [Navbar component](navbar.md#dropbar) and [Dropnav component](dropnav.md#dropbar).

***

## Direction

To set the appropriate dropbar style, add one of the following direction modifier classes.

| Direction           | Description                       |
| ------------------- | --------------------------------- |
| `uk-dropbar-top`    | Open the dropbar from the top.    |
| `uk-dropbar-bottom` | Open the dropbar from the bottom. |
| `uk-dropbar-left`   | Open the dropbar from the left.   |
| `uk-dropbar-right`  | Open the dropbar from the right.  |

To open the dropbar from a specific direction use the `pos` and `stretch` option from the [Drop component](drop.md).

| Position                       | Description                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------- |
| `pos: top-left; stretch: x`    | Positions the dropbar above the toggle and stretches it horizontally.         |
| `pos: bottom-left; stretch: x` | Positions the dropbar below the toggle and stretches it horizontally          |
| `pos: left-top; stretch: y`    | Positions the dropbar to the left of the toggle and stretches it vertically   |
| `pos: right-top; stretch: y`   | Positions the dropbar  to the right of the toggle and stretches it vertically |

```html
<div class="uk-dropbar uk-dropbar-left" uk-drop="pos: left-top; stretch: y"></div>
```

```example
<div class="uk-overflow-auto uk-height-medium">

    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar>

                <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                        <li>
                            <a href>Top</a>
                            <div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x; target: !.uk-navbar-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                        <li>
                            <a href>Left</a>
                            <div class="uk-dropbar uk-dropbar-left" uk-drop="stretch: y; target: !.uk-navbar-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </li>
                        <li>
                            <a href>Right</a>
                            <div class="uk-dropbar uk-dropbar-right" uk-drop="pos: bottom-right; stretch: y; target: !.uk-navbar-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    </nav>

</div>
```

***

## Animation

To animate the dropbar use the `slide-*` or `reveal-*` animations from the [Drop component](drop.md). `slide-*` animations slide the dropbar and its content from a selected direction, while in the `reveal-*` animations, the content of the dropbar stays static and is revealed from a selected direction. Set `animate-out: true` to also show an animation when closing the dropbar.

| Animation       | Description                           |
| --------------- | ------------------------------------- |
| `slide-top`     | Slides the dropbar from the top.     |
| `slide-bottom`  | Slides the dropbar from the bottom.  |
| `slide-left`    | Slides the dropbar from the left.    |
| `slide-right`   | Slides the dropbar from the right.   |
| `reveal-top`    | Reveals the dropbar from the top.    |
| `reveal-bottom` | Reveals the dropbar from the bottom. |
| `reveal-left`   | Reveals the dropbar from the left.   |
| `reveal-right`  | Reveals the dropbar from the right.  |

```html
<div uk-drop="animation: slide-top; animate-out: true"></div>
```

```example
<div class="uk-overflow-auto uk-height-medium">
    
    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar>

                <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                        <li>
                            <a href>Slide Top</a>
                            <div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x; target: !.uk-navbar-container; animation: slide-top; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                        <li>
                            <a href>Reveal Top</a>
                            <div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x; target: !.uk-navbar-container; animation: reveal-top; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                        <li>
                            <a href>Slide Left</a>
                            <div class="uk-dropbar uk-dropbar-left" uk-drop="stretch: y; target: !.uk-navbar-container; animation: slide-left; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </li>
                        <li>
                            <a href>Reveal Left</a>
                            <div class="uk-dropbar uk-dropbar-left" uk-drop="stretch: y; target: !.uk-navbar-container; animation: reveal-left; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </li>
                        <li>
                            <a href>Slide Right</a>
                            <div class="uk-dropbar uk-dropbar-right" uk-drop="pos: bottom-right; stretch: y;  target: !.uk-navbar-container; animation: slide-right; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </li>
                        <li>
                            <a href>Reveal Right</a>
                            <div class="uk-dropbar uk-dropbar-right" uk-drop="pos: bottom-right; stretch: y;  target: !.uk-navbar-container; animation: reveal-right; animate-out: true; duration: 700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    </nav>

</div>
```

***

## Nav in dropbar

A dropbar can contain a nav from the [Nav component](nav.md). Just add the `.uk-nav` class to a `<ul>` element and use the same `.uk-dropdown-nav` modifier from the [Dropdown component](dropdown.md) to have the same nav style.

```html
<button type="button"></button>
<div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x">
    <ul class="uk-nav uk-dropdown-nav">…</ul>
</div>
```

```example
<div class="uk-overflow-auto uk-height-large">

    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar>

                <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                        <li>
                            <a href>Hover</a>
                            <div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
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
                    </ul>

                </div>

            </div>
        </div>
    </nav>

</div>
```

***

## Large modifier

Add the `.uk-dropbar-large` class for a dropbar with larger vertical padding.


```html
<div class="uk-dropbar uk-dropbar-top uk-dropbar-large" uk-drop="stretch: x"></div>
```

```example
<div class="uk-overflow-auto uk-height-large">
    
    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar>

                <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                        <li>
                            <a href>Hover</a>
                            <div class="uk-dropbar uk-dropbar-top uk-dropbar-large" uk-drop="stretch: x">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
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
                    </ul>

                </div>

            </div>
        </div>
    </nav>

</div>
```

***

## Accessibility

The Drop component adheres to the [Menu Button WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The *toggle* has the `button` role, the `aria-expanded` state and the `aria-haspopup` property.

### Keyboard interaction

The Drop component can be accessed through keyboard using the following keys.

- The <kbd>enter</kbd> or <kbd>space</kbd> keys open and close the drop. 
- The <kbd>esc</kbd> key closes the drop even if focus has moved to another element.
