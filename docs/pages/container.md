# Container

<p class="uk-text-lead">This component allows you to align and center your page content.</p>

## Usage

Add the `.uk-container` class to a block element to give it a max-width and wrap the main content of your website. The element will be centered and have padding on the sides, that adapts automatically for large screens.

**Note** The padding of nested containers will be removed to avoid unnecessary spacing.

```html
<div class="uk-container"></div>
```

***

## Size modifiers

Add one of the following classes to the container to apply a different max-width.

| Class                  | Description                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------|
| `.uk-container-xsmall` | Add this class for a xsmall container.                                                                         |
| `.uk-container-small`  | Add this class for a small container.                                                                          |
| `.uk-container-large`  | Add this class for a large container.                                                                          |
| `.uk-container-xlarge` | Add this class for a xlarge container.                                                                         |
| `.uk-container-expand` | Add this class, if you do not want to limit the container width but still want the dynamic horizontal padding. |

```html
<div class="uk-container uk-container-xsmall"></div>

<div class="uk-container uk-container-small"></div>

<div class="uk-container uk-container-large"></div>

<div class="uk-container uk-container-xlarge"></div>

<div class="uk-container uk-container-expand"></div>
```

***

## Expand modifiers

Add one of the following classes to the container to expand one side only.

| Class                        | Description             |
|------------------------------|-------------------------|
| `.uk-container-expand-left`  | Expand left side only.  |
| `.uk-container-expand-right` | Expand right side only. |

```html
<div class="uk-container uk-container-expand-left"></div>

<div class="uk-container uk-container-expand-right"></div>
```

***

## Padding modifiers

Add one of the following classes to the container to reset container on the left or right side

**Note** There has to be negative margin on the item, because it's specific to the item.

| Class                                     | Description           |
|-------------------------------------------|-----------------------|
| `.uk-container-item-padding-remove-left`  | Remove left padding.  |
| `.uk-container-item-padding-remove-right` | Remove right padding. |

```html
<div class="uk-container uk-container-item-padding-remove-left"></div>

<div class="uk-container uk-container-item-padding-remove-right"></div>
```

***

## Container in sections

You can apply this component to modify the width of content inside sections from the [Section component](section.md).

```html
<div class="uk-section uk-section-primary">
    <div class="uk-container uk-container-small"></div>
</div>
```
