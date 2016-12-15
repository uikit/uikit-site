# Transition

<p class="uk-text-lead">Create smooth transitions between two states when hovering an element.</p>

This component is mostly used in combination with the [Overlay component](overlay.md) as elements are transitioned from invisible to visible state.

***

## Usage

To apply this component, add the `.uk-transition-toggle` class to a parent element. This will trigger the transition when the element is hovered.

Add one of the `.uk-transition-*` classes to the element itself to apply the actual effect.

```html
<div class="uk-transition-toggle">
    <div class="uk-transition-fade"></div>
</div>
```

| Class | Description |
| --- | --- |
| `.uk-transition-fade` | Lets the element fade in |
| `.uk-transition-scale-up`<br> `.uk-transition-scale-down` | The element scales up or down. |
| `.uk-transition-slide-top`<br> `.uk-transition-slide-bottom`<br> `.uk-transition-slide-left`<br> `.uk-transition-slide-right` | Lets the element slide in from the top |
| `.uk-transition-slide-top-small`<br> `.uk-transition-slide-bottom-small`<br>  `.uk-transition-slide-left-small`<br> `.uk-transition-slide-right-small` | The element slides in from the top, bottom, left or right with a smaller distance. |
| `.uk-transition-slide-top-medium`<br> `.uk-transition-slide-bottom-medium`<br>  `.uk-transition-slide-left-medium`<br> `.uk-transition-slide-right-medium`   | The element slides in from the top, bottom, left or right with a medium distance. |

```example
<div class="uk-child-width-1-3@m uk-grid-match uk-grid-small" uk-grid>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-fade uk-overlay uk-overlay-default uk-position-cover uk-position-small uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Fade</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Fade</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-scale-up uk-overlay uk-overlay-default uk-position-cover uk-position-small uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Scale</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Scale Up</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-scale-down uk-overlay uk-overlay-default uk-position-cover uk-position-small uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Scale</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Scale Down</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-top uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Top</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-bottom uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Bottom</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-left uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Left</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-right uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
             </div>
        </div>
        <p class="uk-margin-small-top">Slide Right</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-top-small uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Top Small</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-bottom-small uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Bottom Small</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-left-small uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Left Small</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-right-small uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Right Small</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-top-medium uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Top Medium</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-bottom-medium uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Bottom Medium</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-left-medium uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Left Medium</p>
    </div>
    <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle">
            <img src="../docs/images/dark.jpg" alt="">
            <div class="uk-transition-slide-right-medium uk-overlay uk-overlay-default uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                <p class="uk-h4 uk-margin-remove">Slide</p>
            </div>
        </div>
        <p class="uk-margin-small-top">Slide Right Medium</p>
    </div>
</div>
```