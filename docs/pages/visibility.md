# Visibility

<p class="uk-text-lead">Use responsive visibility classes to display or hide elements on different devices.</p>

## Usage

Add one of these classes to hide an element.

| Class	| Description |
| --- | --- |
| `.uk-hidden`	| Hides the element on any device. This is more of a legacy class. The recommended way to do this, is to use the `hidden` attribute. |
| `.uk-invisible`	| Hides the element without removing it from the document flow. |

```html
<div hidden></div>

<div class="uk-invisible"></div>
```

***

## Responsive

This component provides responsive classes to hide or display elements on different viewports.

### Hidden

Add one of the `.uk-hidden-*` classes to hide the element from screens larger than a specified width.

| Class	| Description |
| --- | --- |
| `uk-hidden@s` | Only affects device widths of _640px_ and larger. |
| `uk-hidden@m` | Only affects device widths of _960px_ and larger. |
| `uk-hidden@l` | Only affects device widths of _1200px_ and larger. |
| `uk-hidden@xl` | Only affects device widths of _1600px_ and larger. |

```html
<!-- Hidden on tablets and larger -->
<div class="uk-hidden@m"></div>
```

**Note** In this example the green elements are hidden on screens that are larger than the defined breakpoint. Resize your browser window to see the effect.

```example
<div class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center" uk-grid>
    <div>
        <div class="uk-visible@s uk-card uk-card-default uk-card-body uk-card-small">Small</div>
        <div class="uk-hidden@s uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ Small</div>
    </div>
    <div>
        <div class="uk-visible@m uk-card uk-card-default uk-card-body uk-card-small">Medium</div>
        <div class="uk-hidden@m uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ Medium</div>
    </div>
    <div>
        <div class="uk-visible@l uk-card uk-card-default uk-card-body uk-card-small">Large</div>
        <div class="uk-hidden@l uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ Large</div>
    </div>
    <div>
        <div class="uk-visible@xl uk-card uk-card-default uk-card-body uk-card-small">X-Large</div>
        <div class="uk-hidden@xl uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ X-Large</div>
    </div>
</div>
```

***

### Visible

Use `.uk-visible-*` classes to show the element for screens larger then the specified width.

| Class	| Description |
| --- | --- |
| `uk-visible@s` |  Only affects device widths of _640px_ and larger. |
| `uk-visible@m` | Only affects device widths of _960px_ and larger. |
| `uk-visible@l` | Only affects device widths of _1200px_ and larger. |
| `uk-visible@xl` | Only affects device widths of _1600px_ and larger. |

```html
<!-- Visible on tablets and larger -->
<div class="uk-visible@m"></div>
```

**Note** In this example the green elements are displayed on screens that are larger than the defined breakpoint. Resize your browser window to see the effect.

```example
<div class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center" uk-grid>
    <div>
        <div class="uk-hidden@s uk-card uk-card-default uk-card-body uk-card-small">Small</div>
        <div class="uk-visible@s uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ Small</div>
    </div>
    <div>
        <div class="uk-hidden@m uk-card uk-card-default uk-card-body uk-card-small">Medium</div>
        <div class="uk-visible@m uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ Medium</div>
    </div>
    <div>
        <div class="uk-hidden@l uk-card uk-card-default uk-card-body uk-card-small">Large</div>
        <div class="uk-visible@l uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ Large</div>
    </div>
    <div>
        <div class="uk-hidden@xl uk-card uk-card-default uk-card-body uk-card-small">X-Large</div>
        <div class="uk-visible@xl uk-card uk-card-default uk-card-body uk-card-small uk-text-success">✔ X-Large</div>
    </div>
</div>
```

***

## Show on hover

Use one of the following classes to display elements only when they are being hovered.

| Class             	| Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| `.uk-visible-toggle`  | Add this class to any parent element of the element to hide. This enables the toggling on hover.                       |
| `.uk-hidden-hover`    | Add this class to the child element to hide the content and remove it from the document flow.                      |
| `.uk-invisible-hover` | Add this class to the child element to hide the content without removing it from the document flow.                |

```html
<div class="uk-visible-toggle">
    <div class="uk-hidden-hover"></div>
</div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div class="uk-visible-toggle">

        <h4>Hidden when not hovered</h4>

        <div uk-grid>
            <div class="uk-width-expand">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="uk-width-auto">
                <ul class="uk-hidden-hover uk-iconnav">
                    <li><a href="#" uk-icon="icon: pencil"></a></li>
                    <li><a href="#" uk-icon="icon: copy"></a></li>
                    <li><a href="#" uk-icon="icon: trash"></a></li>
                </ul>
            </div>
        </div>

    </div>
    <div class="uk-visible-toggle">

        <h4>Invisible when not hovered</h4>

        <div uk-grid>
            <div class="uk-width-expand">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="uk-width-auto">
                <ul class="uk-invisible-hover uk-iconnav">
                    <li><a href="#" uk-icon="icon: pencil"></a></li>
                    <li><a href="#" uk-icon="icon: copy"></a></li>
                    <li><a href="#" uk-icon="icon: trash"></a></li>
                </ul>
            </div>
        </div>

    </div>
</div>
```
