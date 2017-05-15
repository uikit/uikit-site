# Grid Parallax

<p class="uk-text-lead">Animate a grids depending on the scroll position of the document.</p>

With the grid parallax you are able to animate a row of a grid to move it depending on the scroll of the document to ease the strict look of your grid. To do so you need to add the attribute `uk-grid-parallax` to the grid.

```html
<div uk-grid uk-grid-parallax>...</div>
```


```example
<div class="uk-child-width-1-3@m" uk-grid uk-grid-parallax>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value  | Default | Description                                                                                                |
|-------------|--------|---------|------------------------------------------------------------------------------------------------------------|
| `target`    | String | false   | Selector string for elements to translate. |
| `translate` | Number | 150     | Translate value.                                                      |
| `smooth`    | Number | 150     | Delayed translate duration.                                                      |