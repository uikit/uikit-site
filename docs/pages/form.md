# Form

<p class="uk-text-lead">Easily create nicely looking forms with different styles and layouts.</p>

## Usage

To apply this component, create a `<form>` element. Add one of the following classes to form controls to define them.

| Class         | Description                                                   |
|---------------|---------------------------------------------------------------|
| `.uk-fieldset` | Add this class to `<fieldset>` elements.                    |
| `.uk-legend`   | Add this class to `<legend>` elements to create form legends. |
| `.uk-input`   | Add this class to `<input>` elements.                         |
| `.uk-select`   | Add this class to `<select>` elements.                        |
| `.uk-textarea` | Add this class to `<textarea>` elements.                      |
| `.uk-radio`    | Add this class to `<input>` elements to create radio buttons. |
| `.uk-checkbox` | Add this class to `<input>` elements to create checkboxes.    |

```html
<form>
    <fieldset class="uk-fieldset">
        <legend class="uk-legend"></legend>
        <input class="uk-input"></input>
        <select class="uk-select">
            <option></option>
            <option></option>
        </select>
        <textarea class="uk-textarea"></textarea>
        <input class="uk-radio"></input>
        <input class="uk-checkbox"></input>
    </fieldset>
</form>
```

```example
<form>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend">Legend</legend>

        <div class="uk-margin">
            <div class="uk-form-controls">
                <input class="uk-input" type="text" placeholder="Input ...">
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-form-controls">
                <select class="uk-select">
                    <option>Option 01</option>
                    <option>Option 02</option>
                </select>
            </div>
        </div>

        <div class="uk-margin">
            <textarea class="uk-textarea" rows="5" placeholder="Textarea ..."></textarea>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto" uk-grid>
            <label><input class="uk-radio" type="radio" name="radio2"> A</label>
            <label><input class="uk-radio" type="radio" name="radio2" checked> B</label>
            <label><input class="uk-radio" type="radio" name="radio2"> C</label>
            <label><input class="uk-radio" type="radio" name="radio2"> D</label>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto" uk-grid>
            <label><input class="uk-checkbox" type="checkbox" checked> A</label>
            <label><input class="uk-checkbox" type="checkbox"> B</label>
            <label><input class="uk-checkbox" type="checkbox" checked> C</label>
            <label><input class="uk-checkbox" type="checkbox"> D</label>
        </div>

    </div>
</form>
```

***

## Control states

Provide the user with basic information through feedback states on form controls.

### Disabled

Add the `disabled` attribute to a form control and it will be appear muted.

```example
<div class="uk-margin-small uk-grid-small uk-child-width-1-2@s uk-grid" uk-grid="">
    <div class="uk-first-column">
        <input class="uk-input" type="text" placeholder="Input" disabled>
    </div>
    <div>
        <select class="uk-select" disabled>
            <option>Option 01</option>
            <option>Option 02</option>
        </select>
    </div>
</div>
```

***

### Validation States

Add the `.uk-form-danger` or `.uk-form-success` class to a form control to notify the user, whether or not the value is validated.

```example
<div class="uk-margin-small">
    <input class="uk-input uk-form-danger uk-form-width-medium" type="text" placeholder="form-danger" value="form-danger">
</div>

<div class="uk-margin-small">
    <input class="uk-input uk-form-success uk-form-width-medium" type="text" placeholder="form-success" value="form-success">
</div>
```

***

## Control modifiers

### Size

Add the `.uk-form-large` or `.uk-form-small` class to an `<input>`, `<select>` or `<textarea>` element to make it smaller or larger.

```example
<form>

    <div class="uk-margin" uk-margin>
        <input class="uk-input uk-form-width-medium uk-form-large" type="text" placeholder="Large">
    </div>

    <div class="uk-margin" uk-margin>
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Default">
    </div>

    <div class="uk-margin" uk-margin>
        <input class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Small">
    </div>

</form>
```

***

### Width

Add one of the following classes to an `<input>`, `<select>` or `<textarea>` element to adjust its width.

| Class                   | Description               |
|-------------------------|---------------------------|
| `.uk-form-width-large`  | Applies a width of _500px_. |
| `.uk-form-width-medium` | Applies a width of _200px_. |
| `.uk-form-width-small`  | Applies a width of _130px_. |
| `uk-form-width-xsmall`  | Applies a width of _40px_.  |

```example
<form>

    <div class="uk-margin" uk-margin>
        <input class="uk-input uk-form-width-large" type="text" placeholder="Large">
    </div>

    <div class="uk-margin" uk-margin>
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Medium">
    </div>

    <div class="uk-margin" uk-margin>
        <input class="uk-input uk-form-width-small" type="text" placeholder="Small">
    </div>

    <div class="uk-margin" uk-margin>
        <input class="uk-input uk-form-width-xsmall" type="text" placeholder="XSmall">
    </div>

</form>
```

You can also apply the `.uk-width-*` classes from the [Width component](width.md) to form controls.

```example
<form>
    <input class="uk-input uk-width-1-2" type="text" placeholder="uk-width-1-2">
</form>
```

***

### Form blank

Add the `.uk-form-blank` class to minimize the styling of form controls.

```example
<form>
    <input class="uk-input uk-form-blank uk-form-width-medium" type="text" placeholder="Form blank">
</form>
```

***

### Text

Use the `.uk-form-controls-text` class to add block level help texts to the controls.

```example
<form>
    <input class="uk-input uk-form-width-large" type="text" placeholder="Input">
    <p class="uk-form-controls-text">The <code>.uk-form-controls-text</code> class creates an associated paragraph.</p>
</form>
```

***

## Layout modifiers

Define labels and controls and apply a stacked or horizontal layout to form elements. Layout modifiers can also be added to a `<fieldset>` element. This makes it possible to have different form layouts for each fieldset.

| Class                 | Description                                                 |
|-----------------------|-------------------------------------------------------------|
| `.uk-form-stacked`    | Add this class to display labels on top of controls.        |
| `.uk-form-horizontal` | Add this class to display labels and controls side by side. |
| `.uk-form-label`    | Add this class to define form labels.        |
| `.uk-form-controls`    | Add this class to define form controls.        |

```html
<form class="uk-form-stacked">
    <label class="uk-form-label"></label>
    <div class="uk-form-controls">...</div>
</form>

<form class="uk-form-horizontal">
    <label class="uk-form-label"></label>
    <div class="uk-form-controls">...</div>
</form>
```

```example
<form class="uk-form-stacked">

    <div class="uk-margin">
        <label class="uk-form-label" for="form-h-text">Text</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-h-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-h-select">Select</label>
        <div class="uk-form-controls">
            <select class="uk-select" id="form-h-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

</form>

<form class="uk-form-horizontal uk-margin-large">

    <div class="uk-margin">
        <label class="uk-form-label" for="form-h-text">Text</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-h-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-h-select">Select</label>
        <div class="uk-form-controls">
            <select class="uk-select" id="form-h-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

</form>
```

***

## Form and icons

To use an icon from the [Icon component](icon.md) with a form, add the `.uk-form-icon` class to a `<span>` or `<a>` element. By default, the icon will be placed on the left side of the form. To change the alignment, add the `.uk-form-icon-flip` class.

```html
<form>
    <span class="uk-form-icon" uk-icon="icon: user"></span>
    <input class="uk-input"></input>
</form>

<form>
    <a class="uk-form-icon uk-form-icon-flip" uk-icon="icon: user"></a>
    <input class="uk-input"></input>
</form>

```

```example
<form class="uk-form-stacked uk-child-width-auto@m" uk-grid>
    <div>

        <div class="uk-margin">
            <span class="uk-form-label">Not clickable</span>
            <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input class="uk-input" type="text">
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-inline">
                <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input class="uk-input" type="text">
            </div>
        </div>

    </div>
    <div>

        <div class="uk-margin">
            <span class="uk-form-label">Clickable</span>
            <div class="uk-inline">
                <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
                <input class="uk-input" type="text">
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-inline">
                <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: link"></a>
                <input class="uk-input" type="text">
            </div>
        </div>

    </div>
</form>
```

***

## Form and grid

You can also use the [Grid](grid.md) and [Width](width.md) components to define the layout of a form.

```example
<form class="uk-grid-small" uk-grid>
    <div class="uk-width-1-1">
        <input class="uk-input" type="text" placeholder="100"></input>
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="50"></input>
    </div>
    <div class="uk-width-1-4@s">
        <input class="uk-input" type="text" placeholder="25"></input>
    </div>
    <div class="uk-width-1-4@s">
        <input class="uk-input" type="text" placeholder="25"></input>
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="50"></input>
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="50"></input>
    </div>
</form>
```
