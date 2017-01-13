# Section

<p class="uk-text-lead">Create horizontal layout sections with different background colors and styles.</p>

## Usage

To apply this component, just add the `.uk-section` class to a container element.

```html
<div class="uk-section"></div>
```

By default, a section is blank. That is why it is important to add a modifier class for styling. In our example we are using the `.uk-section-muted` class.

```example
<div class="uk-section uk-section-muted">
    <div class="uk-container">

        <h3>Section</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>
```

***

## Section and Container

You can place a container from the [Container component](container.md) to modify the width of content inside sections and add horizontal padding. Note that the padding of a nested container will be reset.

```html
<div class="uk-section uk-section-muted">
    <div class="uk-container"></div>
</div>
```

***

## Style modifiers

To apply different background colors and paddings, add one of the following classes.

| Class                   | Description                                                  |
|-------------------------|--------------------------------------------------------------|
| `.uk-section-default`   | Adds the default background color of your site.              |
| `.uk-section-muted`     | Adds a muted background color.                               |
| `.uk-section-primary`   | Adds a primary background color.                             |
| `.uk-section-secondary` | Adds a secondary background color.                           |
| `.uk-section-media`     | Use it if a section has a custom background image            |

```html
<div class="uk-section uk-section-primary"></div>
```

```example
<div class="uk-section uk-section-default">
    <div class="uk-container">

        <h3>Section Default</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="uk-section uk-section-muted">
    <div class="uk-container">

        <h3>Section Muted</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="uk-section uk-section-primary uk-light">
    <div class="uk-container">

        <h3>Section Primary</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="uk-section uk-section-secondary uk-light">
    <div class="uk-container">

        <h3>Section Secondary</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

<div class="uk-section uk-section-media uk-light uk-background-cover" style="background-image: url(../docs/images/dark.jpg)">
    <div class="uk-container">

        <h3>Section Media</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
</div>
```

***

### Preserve color

The `.uk-section-primary` and `.uk-section-secondary` classes are extending the inverse style from the [Inverse component](inverse.md) automatically. If you want to prevent this behavior, for example because you are using [cards](cards.md) in these sections, add the `.uk-preserve-color` class.

```html
<div class="uk-section uk-section-primary uk-preserve-color"></div>
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
```

***

## Size modifier

You can add different paddings to each section or remove it altogether.

### X-Small

To decrease a section's padding to a minimum, add the `.uk-section-xsmall` class.

```example
<div class="uk-section uk-section-xsmall uk-section-muted">
    <div class="uk-container">

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

    </div>
</div>
```

***

### Small

To decrease a section's padding, add the `.uk-section-small` class.

```example
<div class="uk-section uk-section-small uk-section-muted">
    <div class="uk-container">

        <h3>Section Small</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
</div>
```

***

### Large

To increase a section's padding, add the `.uk-section-large` class.

```example
<div class="uk-section uk-section-large uk-section-muted">
    <div class="uk-container">

        <h3>Section Large</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
</div>
```

***

### X-Large

To further increase a section's padding, add the `.uk-section-xlarge` class.

```example
<div class="uk-section uk-section-xlarge uk-section-muted">
    <div class="uk-container">

        <h3>Section Large</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
</div>
```

***

### Remove padding

To remove a section's padding, add the `.uk-padding-remove-vertical` class from the [Padding component](padding.md).

```example
<div class="uk-section uk-section-muted uk-padding-remove-vertical">
    <div class="uk-container">

        <h3>Remove Padding</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
</div>
```

***

## Overlap modifier

Some UIkit themes use richer styles, including textured backgrounds and borders. In this case, you can add the `.uk-section-overlap` class, to apply a border image and a negative offset to the following section. Note that this only works in styles that implement the feature, if there are subsequent sections.

```html
<div class="uk-section uk-section-overlap"></div>
```