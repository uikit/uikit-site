# Visibility

<p class="uk-text-lead">Use responsive visibility classes to display or hide elements on different devices.</p>

## Basic visibility classes

Add one of these classes hide an element.

| Class	| Description |
| --- | --- |
| `.uk-hidden`	| Hides the element on any device. |
| `.uk-invisible`	| Hides the element without removing it from the document flow. |

*** 

## Hidden

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
<div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-text-center" uk-grid>
    <div>
        <div class="uk-visible@s uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">Small</div>
        </div>
        <div class="uk-hidden@s uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ Small</div>
        </div>
    </div>
    <div>
        <div class="uk-visible@m uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">Medium</div>
        </div>
        <div class="uk-hidden@m uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ Medium</div>
        </div>
    </div>
    <div>
        <div class="uk-visible@l uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">Large</div>
        </div>
        <div class="uk-hidden@l uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ Large</div>
        </div>
    </div>
    <div>
        <div class="uk-visible@xl uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">XLarge</div>
        </div>
        <div class="uk-hidden@xl uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ XLarge</div>
        </div>
    </div>
</div>
```

***

## Visible

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
<div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-text-center" uk-grid>
    <div>
        <div class="uk-hidden@s uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">Small</div>
        </div>
        <div class="uk-visible@s uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ Small</div>
        </div>
    </div>
    <div>
        <div class="uk-hidden@m uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">Medium</div>
        </div>
        <div class="uk-visible@m uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ Medium</div>
        </div>
    </div>
    <div>
        <div class="uk-hidden@l uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">Large</div>
        </div>
        <div class="uk-visible@l uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ Large</div>
        </div>
    </div>
    <div>
        <div class="uk-hidden@xl uk-card uk-card-default uk-card-small">
            <div class="uk-card-body">XLarge</div>
        </div>
        <div class="uk-visible@xl uk-card uk-card-default uk-card-small">
            <div class="uk-card-body uk-text-success"> ✔ XLarge</div>
        </div>
    </div>
</div>
```

***

## Hover

Use one of the following classes to display elements only when they are hovered.

| Class	| Description |
| --- | --- |
| `uk-visible-toggle` | Add this class to the element's parent to enable the toggling on hover. |
| `uk-hidden-hover` | Hides content when not hovered using `display: none` |
| `uk-invisible-hover` | Hides content when not hovered, but reserves its space in the document using `visibility: invisible` |

```html
<div class="uk-visible-toggle">
    <div class="uk-hidden-hover"></div>
</div>
```

```example
<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-visible-toggle">
            <div class="uk-hidden-hover uk-card uk-card-default uk-card-small">
                <div class="uk-card-body uk-text-success">Here it is!</div>
            </div>
            <p>Hover me!</p>
        </div>
    </div>
    <div>
        <div class="uk-visible-toggle">
            <div class="uk-invisible-hover uk-card uk-card-default uk-card-small">
                <div class="uk-card-body uk-text-success">Here it is!</div>
            </div>
        </div>
        <p>Hover the area vaguely above me!</p>
    </div>
</div>


```