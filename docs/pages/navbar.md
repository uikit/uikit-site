# Navbar

<p class="uk-text-lead">Create a navigation bar with dropdown menus for the main site navigation.</p>

The Navbar component initializes all dropdowns with the same options, so they don't have to be initialized individually. All dropdowns within the navbar are aim-aware. This means the dropdowns stay open as long as the mouse pointer moves towards the dropdown. An additional delay ensures that dropdowns stay open even if the mouse pointer shortly moves in another direction. In hover mode dropdowns close immediately if another menu item is hovered.

## Usage

The Navbar component consists of a navbar container, the navbar itself and one or more navigations.

| Element                                                           | Description                                                                                                    |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `uk-navbar`                                                       | Add this attribute to a `<nav>` element to define the Navbar component.                                        |
| `.uk-navbar-container`                                            | Add this class to the same `<nav>` element or a parent element to add the navbar background style.             |
| `.uk-navbar-left`<br> `.uk-navbar-center`<br>  `.uk-navbar-right` | Add one of these classes to a `<div>` element to align the navigation.                                         |
| `.uk-navbar-nav`                                                  | Add this class to a `<ul>` element to create the navigation. Use `<a>` elements as menu items within the list. |
| `.uk-parent`                                                      | Add this class to indicate a parent menu item.                                                                 |
| `.uk-active`                                                      | Add this class to indicate an active menu item.                                                                |

```html
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href=""></a></li>
            <li class="uk-parent"><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</nav>
```

```example
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
</nav>
```

Neither the navbar, nor the navbar container have horizontal padding. To set the same horizontal padding as the rest of the page use the [Container component](container.md).

```html
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>…</div>
    </div>
</nav>
```

```example
<nav class="uk-navbar-container">
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
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Item</a></li>
                </ul>

            </div>

        </div>
    </div>
</nav>
```

***

## Multiple navigations

You can place more than one navigation inside a navbar container. That way you can have a left-aligned, a centered and a right-aligned navigation inside the same navbar.

```html
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">…</div>
    <div class="uk-navbar-center">…</div>
    <div class="uk-navbar-right">…</div>
</nav>
```

```example
<nav class="uk-navbar-container">
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
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Item</a></li>
                </ul>

            </div>

            <div class="uk-navbar-right">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li>
                        <a href="#">Parent</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Item</a></li>
                </ul>

            </div>

        </div>
    </div>
</nav>
```

***

## Transparent modifier

When using an image or colored background for the hero section of your website, you might want to turn the navbar transparent. Just add the `.uk-navbar-transparent` class to the `<nav>` element. If necessary, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md) to adjust the navbar color.

```html
<nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>…</nav>
```

```example
<div class="uk-position-relative">
    <img src="images/light.jpg" width="1800" height="1200" alt="">
    <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent">
            <div class="uk-container">
                <div uk-navbar>

                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
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
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    </div>
</div>
```

***

## Subtitle

To define a subtitle, create a `<div>` element inside an item's `<a>` element. Add the `.uk-navbar-subtitle` class to another `<div>` element.

```html
<li>
    <a href="">
        <div>
            …
            <div class="uk-navbar-subtitle"></div>
        </div>
    </a>
</li>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>
                
            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <a href="#">
                            <div>
                                Active
                                <div class="uk-navbar-subtitle">Subtitle</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                Parent
                                <div class="uk-navbar-subtitle">Subtitle</div>
                            </div>
                        </a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                Item
                                <div class="uk-navbar-subtitle">Subtitle</div>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    </div>
</nav>
```

***

## Content item

You can also add custom content to the navbar, like text, icons, buttons or forms. Add the `.uk-navbar-item` class to a `<div>` element that serves as a container for your content.

```html
<div class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <a href="" class="uk-navbar-item uk-logo"></a>
        <ul class="uk-navbar-nav">…</ul>
        <div class="uk-navbar-item">…</div>
    </div>
</div>
```

Add the `.uk-logo` class from the [Utility component](utility.md) to an `<a>` or `<div>` element to indicate your brand.

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">

                <a class="uk-navbar-item uk-logo" href="#" aria-label="Back to Home">Logo</a>

                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                            Features
                        </a>
                    </li>
                </ul>

                <div class="uk-navbar-item">
                    <div>Some <a href="#">Link</a></div>
                </div>

                <div class="uk-navbar-item">
                    <form action="javascript:void(0)">
                        <input class="uk-input uk-form-width-small" type="text" placeholder="Input" aria-label="Input">
                        <button class="uk-button uk-button-default">Button</button>
                    </form>
                </div>

            </div>

        </div>
    </div>
</nav>
```

***

## Centered logo

You can create a split menu with a centered logo. Just add the `uk-navbar-center-left` class to one navbar and the `uk-navbar-center-right` class to another within the same navbar container. This will keep your logo centered and align the menus to the left and right.

```html
<div class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">…</div>
        <a href="" class="uk-navbar-item uk-logo"></a>
        <div class="uk-navbar-center-right">…</div>
    </div>
</div>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-center">

                <div class="uk-navbar-center-left">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li>
                            <a href="#">Parent</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li class="uk-active"><a href="#">Active</a></li>
                                    <li><a href="#">Item</a></li>
                                    <li><a href="#">Item</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <a class="uk-navbar-item uk-logo" href="#">Logo</a>
                <div class="uk-navbar-center-right">
                    <ul class="uk-navbar-nav">
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</nav>
```


***

## Toggle item

Add the `.uk-navbar-toggle` class and the `uk-navbar-toggle-icon` attribute to an `<a>` or `<div>` element to create an icon as a toggle. By default, there is no JavaScript attached to the toggle. As an example, you can add an offcanvas navigation from the [Offcanvas component](offcanvas.md) or a modal from the [Modal component](modal.md).

```html
<div class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <a class="uk-navbar-toggle" uk-navbar-toggle-icon href=""></a>
    </div>
</div>
```

```example
<nav class="uk-navbar-container uk-margin">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#"></a>
            </div>
        
        </div>
    </div>
</nav>

<nav class="uk-navbar-container uk-margin">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle" href="#">
                    <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
                </a>
            </div>

        </div>
    </div>
</nav>
```

To change toggle icon from a menu icon to a close icon with a smooth animation, add the `.uk-navbar-toggle-animate` class.

```html
<a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href=""></a>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"></a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</nav>
```

***

## Dropdowns

A navbar can contain a dropdown from the [Dropdown component](dropdown.md). Just add the `.uk-navbar-dropdown` modifier to the dropdown, so it fits perfectly into the navbar styling. Add the `.uk-navbar-dropdown-nav` class to navs inside the dropdown.

```html
<ul class="uk-navbar-nav">
    <li>
        <a href=""></a>
        <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">…</ul>
        </div>
    </li>
</ul>
```

```example
<nav class="uk-navbar-container">
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
                    <li><a href="#">Item</a></li>
                </ul>

            </div>
            <div class="uk-navbar-right">

                <ul class="uk-navbar-nav">
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
                </ul>
            </div>

        </div>
    </div>
</nav>
```

***

### Click mode

A parent item inside the navbar can be enabled by either hovering or clicking the toggle. Just add the `mode: click` option to the `uk-navbar` attribute.

```html
<nav class="uk-navbar-container" uk-navbar="mode: click">…</nav>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar="mode: click">

            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li>
                        <a href="#">Parent</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Item</a></li>
                </ul>

            </div>

        </div>
    </div>
</nav>
```

***

### Alignment

By default, the dropdowns are positioned below the navbar item and are aligned to the left. To change the alignment, set the `align` option to the `uk-navbar` attribute.

| Position | Description                         |
| -------- | ----------------------------------- |
| `left`   | Aligns the dropdowns to the left.   |
| `right`  | Aligns the dropdowns to the right.  |
| `center` | Aligns the dropdowns to the center. |

```html
<div uk-navbar="align: center"></div>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar="align: center">

            <div class="uk-navbar-center">

                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">Parent</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    </div>
</nav>
```

***

### Target

By default, the dropdowns are aligned to their navbar item. To position the dropdown to a different element, just add `target: SELECTOR` option to the `uk-navbar` attribute.

```html
<nav class="uk-navbar-container" uk-navbar="target: !.uk-navbar">…</nav>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar="target: !.uk-navbar; align: center">

            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
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
                    <li>
                        <a href="#">Parent</a>
                        <div class="uk-navbar-dropdown uk-navbar-dropdown-width-3">
                            <div class="uk-drop-grid uk-child-width-1-3" uk-grid>
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

            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
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
                </ul>
            </div>

        </div>
    </div>
</nav>
```

***

### Dropbar

A dropbar extends to the full width of the navbar and displays the dropdown without its default styling. To place dropdowns inside such a dropbar, add the `dropbar: true` option to the `uk-navbar`. Optionally, use `dropbar-anchor` option to select after which element the dropbar will be injected into the markup.

```html
<nav class="uk-navbar-container" uk-navbar="dropbar: true">…</nav>
```

```example
<div class="uk-position-relative">

    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar="dropbar: true; dropbar-anchor: !.uk-navbar-container; target-y: !.uk-navbar-container">

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

                <div class="uk-navbar-right">

                    <ul class="uk-navbar-nav">
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
                    </ul>

                </div>

            </div>
        </div>
    </nav>

</div>
```

***

### Stretch

To stretch a dropdown, use the [Drop component](drop.md) and its `stretch` option. In the following example the dropdown is aligned to the boundary of the parent navbar.

```html
<div class="uk-navbar-dropdown" uk-drop="boundary: !.uk-navbar; stretch: x; flip: false">…</div>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li>
                        <a href="#">Parent</a>
                        <div class="uk-navbar-dropdown" uk-drop="boundary: !.uk-navbar; stretch: x; flip: false">
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
                        <div class="uk-navbar-dropdown" uk-drop="boundary: !.uk-navbar; stretch: x; flip: false">
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
```

***

## Parent icon

To create a parent icon, just add the `uk-navbar-parent-icon` attribute to a `<span>` element.

```html
<ul class="uk-navbar-nav">
    <li>
        <a href="">Parent <span uk-navbar-parent-icon></span></a>
        <div class="uk-navbar-dropdown">…</div>
    </li>
</ul>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                    <li>
                        <a href="#">Parent <span uk-navbar-parent-icon></span></a>
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
                    <li><a href="#">Item</a></li>
                </ul>

            </div>
            <div class="uk-navbar-right">

                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">Parent <span uk-navbar-parent-icon></span></a>
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
                </ul>
            </div>

        </div>
    </div>
</nav>
```

***

## Width and Grid

You can place a grid from the [Grid component](grid.md) inside a dropdown. Just wrap the content with a `<div>` element and add the `uk-grid` attribute. If the grid should stack automatically whenever the dropdown no longer fits its container, just add the `.uk-drop-grid` class.

To accommodate up to five columns, you also need to add one of the following classes. Columns will stack if they no longer fit into the container.

| Class                         | Description                                              |
| ----------------------------- | -------------------------------------------------------- |
| `.uk-navbar-dropdown-width-2` | Add this class to double the dropdown's width.           |
| `.uk-navbar-dropdown-width-3` | Add this class to triple the dropdown's width.           |
| `.uk-navbar-dropdown-width-4` | Add this class to multiply the dropdown's width by four. |
| `.uk-navbar-dropdown-width-5` | Add this class to multiply the dropdown's width by five. |

```html
<div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
    <div class="uk-drop-grid uk-child-width-1-2" uk-grid>
        <div>
            <ul class="uk-nav uk-navbar-dropdown-nav">…</ul>
        </div>
        <div>…</div>
    </div>
</div>
```

```example
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">Two Columns</a>
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
```

***

## Sticky Navbar

For a basic sticky navbar, wrap the navbar inside a container with the `uk-sticky` attribute from the [Sticky component](sticky.md).

The navbar itself has a modifier class `uk-navbar-sticky` that ensures an optimized styling for the sticky state (for example, an additional box shadow). To let the Sticky component dynamically add and remove that class, set `cls-active: uk-navbar-sticky`. To ensure that the class is added to the navbar container, set `sel-target: .uk-navbar-container`.

**Note** You can view more examples in the tests for the [Sticky Navbar](../assets/uikit/tests/sticky-navbar.html).

```html
<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>…</nav>
</div>
```

```example
<div class="uk-background-primary uk-height-large">

    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: !.uk-height-large; offset: 200">

        <nav class="uk-navbar-container">
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
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">Item</a></li>
                        </ul>

                    </div>

                </div>
            </div>
        </nav>
    </div>

</div>
```

Instead of using a Dropdown, you can show a Dropbar, which means that the subnavigation is displayed in a full width below the navbar. Simply set `dropbar: true` inside the `uk-navbar` attribute.

```html
<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar="dropbar: true">…</nav>
</div>
```

```example
<div class="uk-background-primary uk-height-large">

    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: !.uk-height-large; offset: 200">

        <nav class="uk-navbar-container">
            <div class="uk-container">
                <div uk-navbar="dropbar: true; dropbar-anchor: !.uk-navbar-container; target-y: !.uk-navbar-container">

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
```

***

### Transparent sticky navbar

When you use a [transparent navbar](navbar.md#transparent-modifier), your markup contains the `.uk-navbar-transparent` class together with `.uk-light` or `.uk-dark`. When the navbar is sticky, it is usually required to remove these classes and add them when the navbar returns to the non-sticky state. To do that, set `cls-inactive: uk-navbar-transparent uk-light`.

By default, the immediate toggling of classes does not look ideal. Instead, we can set `start: 200` to let the navbar disappear and then re-appear when the user has scrolled 200px past the navbar. In that case you can also allow the navbar to slide in with an animation. Just set `animation: uk-animation-slide-top`.

```html
<div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light">
    <nav class="uk-navbar-container" uk-navbar>…</nav>
</div>
```

```example
<div class="uk-section-primary uk-preserve-color">

    <div uk-sticky="start: 170; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; end: !.uk-section-primary;">

        <nav class="uk-navbar-container">
            <div class="uk-container uk-container-expand">
                <div uk-navbar>

                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li>
                            <a href="#">Parent</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li class="uk-active"><a href="#">Active</a></li>
                                    <li><a href="#">Item</a></li>
                                    <li><a href="#">Item</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Item</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>

    <div class="uk-section uk-light">
        <div class="uk-container">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        </div>
    </div>

</div>
```

### Dropbar transparent mode

| Mode     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| `remove` | Removes transparency of the navbar when the dropbar is opened. |
| `behind` | Opens the dropbar behind the navbar.                           |

#### Remove mode

If a transparent navbar is only in the hero section, but not when sticky, it looks better to remove transparency in the hero section when opening a dropbar. To do that, set `dropbar-transparent-mode: remove`.

#### Behind mode

Alternatively, if a navbar is always transparent even when sticky, set `dropbar-transparent-mode: behind` to open the dropbar behind the navbar so it also no longer looks transparent.

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option            | Value                 | Default             | Description                                                                                                  |
| ----------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `align`           | String                | `left`              | Dropdown alignment: `left`, `right`, `center`                                                                |
| `dropbar `        | Boolean               | `false`             | Enable or disable dropbar behavior.                                                                          |
| `dropbar-anchor`  | CSS selector          | `false`             | If set, dropbar will be inserted after the anchor element.                                                   |
| `stretch`         | Boolean, String       | `false`             | Stretch dropdown on both (true) or given axis (`x`, `y`).                                                    |
| `mode`            | String                | `click, hover`      | Comma-separated list of dropdown trigger behavior modes (`click`, `hover`).                                  |
| `delay-show`      | Number                | `0`                 | Delay time in hover mode before a dropdown is shown in ms.                                                   |
| `delay-hide`      | Number                | `800`               | Delay time in hover mode before a dropdown is hidden in ms.                                                  |
| `boundary`        | CSS selector          | `true`              | The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `target`          | Boolean, CSS selector | `false`             | The element the dropdown is positioned to (`true` for window).                                               |
| `target-x`        | Boolean, CSS selector | `false`             | The element's X axis the dropdown is positioned to (`true` for window).                                      |
| `target-y`        | Boolean, CSS selector | `false`             | The element's Y axis the dropdown is positioned to (`true` for window).                                      |
| `offset`          | Number                | `0`                 | The dropdown offset.                                                                                         |
| `animation`       | String                | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                      |
| `animate-out`     | Boolean               | `false`             | Use animation when closing the dropdown.                                                                     |
| `bg-scroll`       | Boolean               | `true`              | Allow background scrolling while dropdown is opened.                                                         |
| `close-on-scroll` | Boolean               | `false`             | Close the dropdown on scrolling a parent scroll container.                                                   |
| `duration`        | Number                | `200`               | The animation duration.                                                                                      |
| `container`       | Boolean               | `false`             | Define a target container via a selector to specify where the dropdown should be appended in the DOM.        |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.navbar(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

***

## Accessibility

The Navbar component adheres to the [Disclosure Navigation Menu WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/) and automatically sets the appropriate WAI-ARIA states and properties. 

- The *nav items* and *toggle items* have the `aria-expanded` state and the `aria-haspopup` property.
- The *toggle items* also have the `aria-label` property.

### Keyboard interaction

The Navbar component can be accessed through keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys place focus inside or outside the navbar. 
- The <kbd>left/right arrow</kbd> keys navigate through the navbar items. In hover mode the dropdown will open automatically. If the focus is on the last item, it moves to the first item. 
- The <kbd>enter</kbd> or <kbd>space</kbd> keys open and close the dropdown of the focused navbar item. 
- The <kbd>up/down arrow</kbd> keys navigates through the nav items in a dropdown. If the focus is on the last item, it moves to the first item.
- The <kbd>esc</kbd> key closes any dropdown even if focus has moved to another element.

### Internationalization

The Toggle Item component uses the following translation strings. Learn more about [translating components](accessibility.md#internationalization).

| Key     | Default     | Description             |
| ------- | ----------- | ----------------------- |
| `label` | `Open Menu` | `aria-label` attribute. |
