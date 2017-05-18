# Grid Parallax

<p class="uk-text-lead">Create an effect to scroll the single columns of a grid at different speeds.</p>

The Grid Parallax allows you to add a scrolling parallax effect to columns within a Grid from the [Grid component](grid.md). To do so you need to add the attribute `uk-grid-parallax` to the grid.

```html
<div uk-grid uk-grid-parallax>...</div>
```

You can either apply this effect to a defined column of items or to a column depending on the current screen width.

```example
<div class="uk-child-width-1-3@m" uk-grid uk-grid-parallax>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Second</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Second</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Second</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Third</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Third</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Third</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
```
***

With the `translate` and `smooth` option you can adjust the speed of the scrolling, by default both these settings have the value 150.

```example
<div class="uk-child-width-1-2@m uk-child-width-1-3@l" uk-grid uk-grid-parallax="translate:200; smooth:100">
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Second</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Third</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Second</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Third</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Second</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Third</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value  | Default | Descriptio                                 |
|-------------|--------|---------|--------------------------------------------|
| `target`    | String | `false` | Selector string for elements to translate. |
| `translate` | Number | `150`   | Translate value.                           |
| `smooth`    | Number | `150`   | Delayed translate duration.                |