# Inverse

<p class="uk-text-lead">Inverse colors of any component for light or dark backgrounds.</p>

In general, there are UIkit styles which have light backgrounds, like the default UIkit style, or the styles with dark backgrounds. Depending on the background color, the default text color is either dark on light. But if different background colors or background images are used, the opposite text color may be needed. Use the Inverse component to inverse the text color for such backgrounds. 

## Usage

Add the `.uk-light` class to color the text and all containing content to make it look great on dark backgrounds, and add the `.uk-dark` class on light backgrounds correspondingly.

Since there is already a default text color, for light styles it is dark, and for dark styles it's light, only one of the classes is needed to change the text color for different backgrounds. In light styles, the `.uk-light` class is needed and in dark styles the `.uk-dark` class. Mind that if one of the classes is used, the color cannot be changed back.

```html
<div class="uk-light"></div>

<div class="uk-dark"></div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-light uk-background-secondary uk-padding">
            <h3>Light</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="uk-button uk-button-default">Button</button>
        </div>
    </div>
    <div>
        <div class="uk-dark uk-background-muted uk-padding">
            <h3>Dark</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="uk-button uk-button-default">Button</button>
        </div>
    </div>
</div>
```

*** 

## Extending components

Style modifiers from components which create backgrounds, like [Section](section.md), [Tile](tile.md), [Card](card.md), [Overlay](overlay.md), [Off-canvas](offcanvas.md), [Navbar](navbar.md), [Dropdown](dropdown.md) and [Dropbar](dropbar.md), extend the inverse style automatically to change the text color, so there is no need to add any class.

The [Section](section.md) and [Tile](tile.md) components can prevent this behavior. Simply add the `.uk-preserve-color` class. This is needed, for example, when they contain [cards](card.md).

```html
<div class="uk-section uk-section-primary uk-preserve-color"></div>

<div class="uk-tile uk-tile-primary uk-preserve-color"></div>
```

```example
<div class="uk-section uk-section-primary uk-preserve-color">
    <div class="uk-container">

        <div class="uk-panel uk-light uk-margin-medium">
            <h3>Section Primary with cards</h3>
        </div>

        <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

    </div>
</div>
<div class="uk-child-width-1-2@s uk-grid-collapse uk-grid-match uk-text-center" uk-grid>
    <div>
        <div class="uk-tile uk-tile-primary">

            <div class="uk-panel uk-light uk-margin-medium">
                <h3>Tile Primary with card</h3>
            </div>

            <div class="uk-card uk-card-default uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

        </div>
    </div>
    <div>
        <div class="uk-tile uk-tile-secondary">

            <div class="uk-panel uk-light uk-margin-medium">
                <h3>Tile Secondary with card</h3>
            </div>

            <div class="uk-card uk-card-default uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

        </div>
    </div>
</div>
```

***

## Overlapping content

The `.uk-light` and `.uk-dark` classes are set on container elements and color their containing content. But there are cases where elements are not nested but have a position context and overlap each other. For example, a sticky navbar overlaps different sections behind while scrolling. To color content depending on intersecting elements, add the `uk-inverse` attribute. It will set the `.uk-light` or `.uk-dark` class depending on the section behind.

```html
<div class="uk-position-relative">

    <div class="uk-position-top">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-inverse uk-navbar>…</nav>
        </div>
    </div>

    <div class="uk-section uk-section-default">…</div>

    <div class="uk-section uk-section-primary">…</div>

    <div class="uk-section uk-section-muted">…</div>

    <div class="uk-section uk-section-secondary">…</div>

</div>
```

```example
<div class="uk-position-relative">

    <div class="uk-position-top">

        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: !.uk-position-relative; offset: 80">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-inverse>
                <div class="uk-container">
                    <div uk-navbar>
                        <div class="uk-navbar-left">

                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li>
                                    <a href="#">Parent</a>
                                    <div class="uk-navbar-dropdown">
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
                                <li>
                                    <a href="#">Parent</a>
                                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                        <div class="uk-drop-grid uk-child-width-1-2" uk-grid>
                                            <div>
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
                                            <div>
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
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="uk-section uk-section-default">
        <div class="uk-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        </div>
    </div>

    <div class="uk-section uk-section-primary">
        <div class="uk-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        </div>
    </div>

    <div class="uk-section uk-section-muted">
        <div class="uk-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        </div>
    </div>

    <div class="uk-section uk-section-secondary">
        <div class="uk-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        </div>
    </div>

</div>
```

This works because the `.uk-light` and `.uk-dark` classes as well as all extending components also set the `--uk-inverse` custom property to either light or dark. The JavaScript looks for the `--uk-inverse` custom property in the closest intersecting element in the stacking context and sets the `.uk-light` or `.uk-dark` class correspondingly.

### Color multiple parts separately

To color different parts inside the container separately, just add the `target: SELECTOR` option to the `uk-inverse` attribute.

```html
<div class="uk-position-relative">

    <div class="uk-position-top">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-inverse="target: .uk-navbar-left, .uk-navbar-center, .uk-navbar-right" uk-navbar>…</nav>
        </div>
    </div>

    <div class="uk-child-width-1-3@s uk-grid-collapse uk-grid-match" uk-grid>
        <div>
            <div class="uk-tile uk-tile-default">…</div>
        </div>
        <div>
            <div class="uk-tile uk-tile-primary">…</div>
        </div>
        <div>
            <div class="uk-tile uk-tile-secondary">…</div>
        </div>
    </div>

</div>
```

```example
<div class="uk-position-relative">

    <div class="uk-position-top">

        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: !.uk-position-relative; offset: 80">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-inverse="target: .uk-navbar-left, .uk-navbar-center, .uk-navbar-right">
                <div class="uk-container">
                    <div uk-navbar>
                        <div class="uk-navbar-left">

                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>

                        </div>
                        <div class="uk-navbar-center">

                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="">Active</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>

                        </div>
                        <div class="uk-navbar-right">

                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="">Active</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="uk-child-width-1-3@s uk-grid-collapse uk-grid-match" uk-grid>
        <div>

            <div class="uk-tile uk-tile-default">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        <div>

            <div class="uk-tile uk-tile-primary">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        <div>

            <div class="uk-tile uk-tile-secondary">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
    </div>

    <div class="uk-child-width-1-3@s uk-grid-collapse uk-grid-match" uk-grid>
        <div>

            <div class="uk-tile uk-tile-primary">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        <div>

            <div class="uk-tile uk-tile-muted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        <div>

            <div class="uk-tile uk-tile-default">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
    </div>

    <div class="uk-child-width-1-3@s uk-grid-collapse uk-grid-match" uk-grid>
        <div>

            <div class="uk-tile uk-tile-default">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        <div>

            <div class="uk-tile uk-tile-secondary">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
        <div>

            <div class="uk-tile uk-tile-muted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </div>
    </div>

</div>
```

### Inactive state

To prevent the element from changing its color automatically when it stops being transparent, just add the `sel-active: SELECTOR` option to the `uk-inverse` attribute.

```html
<div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent">
    <nav class="uk-navbar-container" uk-inverse="sel-active: .uk-navbar-transparent" uk-navbar>…</nav>
</div>
```

```example
<div class="uk-position-relative">

    <div class="uk-position-top">

        <div uk-sticky="start: 170; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; end: !.uk-position-relative; offset: 80">
            <nav class="uk-navbar-container" uk-inverse="sel-active: .uk-navbar-transparent">
                <div class="uk-container">
                    <div uk-navbar>
                        <div class="uk-navbar-left">

                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li>
                                    <a href="#">Parent</a>
                                    <div class="uk-navbar-dropdown">
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
                                <li>
                                    <a href="#">Parent</a>
                                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                        <div class="uk-drop-grid uk-child-width-1-2" uk-grid>
                                            <div>
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
                                            <div>
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
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="uk-section uk-section-secondary">
        <div class="uk-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        </div>
    </div>

</div>
```

### Color overlapping content only

If containing content should keep its text color, and only the overlapping content should inverse its color, use the `.uk-inverse-light` or `.uk-inverse-dark` classes. They set the `--uk-inverse` custom property to the corresponding color but without coloring the containing content.

```html
<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>…</nav>
</div>

<div class="uk-section uk-section-primary uk-preserve-color uk-inverse-light">
```

```example
<div class="uk-position-relative">

    <div class="uk-position-top">

        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: !.uk-position-relative; offset: 80">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-inverse>
                <div class="uk-container">
                    <div uk-navbar>
                        <div class="uk-navbar-left">

                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li>
                                    <a href="#">Parent</a>
                                    <div class="uk-navbar-dropdown">
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
                                <li>
                                    <a href="#">Parent</a>
                                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                        <div class="uk-drop-grid uk-child-width-1-2" uk-grid>
                                            <div>
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
                                            <div>
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
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="uk-section uk-section-primary uk-preserve-color uk-inverse-light">
        <div class="uk-container">

            <div class="uk-panel uk-light uk-margin-medium">
                <h3>Section Primary with cards</h3>
            </div>

            <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option       | Value        | Default | Description                                                                                                                 |
| ------------ | ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| `target`     | CSS selector | `false` | A list of targets that will be checked.                                                                                     |
| `sel-active` | CSS selector | `false` | A selector that needs to match for a color to be set, otherwise the color is removed. If omitted, color will always be set. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.inverse(element, options);
```

***

## Disable inverse component

The Inverse component generates CSS to color all components for the according background color. If your project does not need to inverse content colors, you can [disable the Inverse component](less.md#disable-inverse-component) when compiling Less.

