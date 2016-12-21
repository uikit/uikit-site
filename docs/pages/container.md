# Container

<p class="uk-text-lead">This component allows you to align and center your page and sections inside it.</p>

## Usage

Add one of the following classes to a block element to give it a max-width and wrap the main content of your website. The element will be centered and have padding on the sides, that adapts automatically for large screens.

**Note** The padding of nested containers will be removed to avoid unnecessary spacing.

| Class                  | Description                                                                                                |
|------------------------|------------------------------------------------------------------------------------------------------------|
| `.uk-container`        | Add this class to create a default container.                                                                  |
| `.uk-container-small`  | Add this class for a narrower container.                                                                       |
| `.uk-container-large`  | Add this class for a wider container.                                                                          |
| `.uk-container-expand` | Add this class, if you do not want to limit the container width but still want the dynamic horizontal padding. |

```html
<div class="uk-container"></div>

<div class="uk-container uk-container-small"></div>

<div class="uk-container uk-container-large"></div>

<div class="uk-container uk-container-expand"></div>
```

***

## Sections

You can apply this component to modify the width of content inside sections from the [Section component](section.md).

```html
<div class="uk-section uk-section-primary">
    <div class="uk-container uk-container-small"></div>
</div>
```
