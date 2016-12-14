# Animation

<p class="uk-text-lead">A collection of smooth animations to use within your page.</p>

## Usage

Add one of the `.uk-animation-*` classes to any element. The animation is shown when the class is added, so usually immediately on page load. To show the animation at another point, for example when the element enters the viewport, you would add the class using JavaScript—with the [Scrollspy component](scrollspy.md) for instance. This is what happens in many of UIkit's components that make use of animations. All animations themselves are implemented with CSS, so they do not require JavaScript to play.

| Class | Description |
| --- | --- |
| `.uk-animation-fade` | The element fades in. |
| `.uk-animation-scale-up`<br> `.uk-animation-scale-down` | The element scales up or down. |
| `.uk-animation-slide-top`<br> `.uk-animation-slide-bottom`  `.uk-animation-slide-left`<br> `.uk-animation-slide-right` | The element slides in from the top, bottom, left or right. |
| `.uk-animation-slide-top-small`<br> `.uk-animation-slide-bottom-small`   `.uk-animation-slide-left-small`<br> `.uk-animation-slide-right-small` | The element slides in from the top, bottom, left or right with a smaller distance. |
| `.uk-animation-slide-top-medium`<br> `.uk-animation-slide-bottom-medium`  `.uk-animation-slide-left-medium`<br> `.uk-animation-slide-right-medium` | The element slides in from the top, bottom, left or right with a medium distance. |
| `.uk-animation-kenburns` | The element scales very slowly up without fading in. |
| `.uk-animation-shake` | The element shakes. |


```html
<div class="uk-animation-toggle">
    <div class="uk-animation-fade"></div>
</div>
```

```example
<div class="uk-child-width-1-4@m uk-grid-match" uk-grid>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade">
            <p class="uk-text-center">Fade</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Scale Up</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-down">
            <p class="uk-text-center">Scale Down</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-shake">
            <p class="uk-text-center">Shake</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-left">
            <p class="uk-text-center">Left</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top">
            <p class="uk-text-center">Top</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-bottom">
            <p class="uk-text-center">Bottom</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-right">
            <p class="uk-text-center">Right</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-left-small">
            <p class="uk-text-center">Left Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-small">
            <p class="uk-text-center">Top Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-bottom-small">
            <p class="uk-text-center">Bottom Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-right-small">
            <p class="uk-text-center">Right Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-left-medium">
            <p class="uk-text-center">Left Medium</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-medium">
            <p class="uk-text-center">Top Medium</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-bottom-medium">
            <p class="uk-text-center">Bottom Medium</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-right-medium">
            <p class="uk-text-center">Right Medium</p>
        </div>
    </div>
</div>
```

To apply the hover effect, add the `.uk-animation-toggle` class on a parent element. This will trigger the animation when the element is hovered.

***

## Reverse modifier

By default, all animations are incoming. To reverse any animation, add the `.uk-animation-reverse` class.

```html
<div class="uk-animation-fade uk-animation-reverse"></div>
```

```example
<div class="uk-child-width-1-4@m uk-grid-match" uk-grid>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse">
            <p class="uk-text-center">Fade</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up uk-animation-reverse">
            <p class="uk-text-center">Scale Up</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-down uk-animation-reverse">
            <p class="uk-text-center">Scale Down</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-shake uk-animation-reverse">
            <p class="uk-text-center">Shake</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-left uk-animation-reverse">
            <p class="uk-text-center">Left</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top uk-animation-reverse">
            <p class="uk-text-center">Top</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-bottom uk-animation-reverse">
            <p class="uk-text-center">Bottom</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-right uk-animation-reverse">
            <p class="uk-text-center">Right</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-left-small uk-animation-reverse">
            <p class="uk-text-center">Left Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-small uk-animation-reverse">
            <p class="uk-text-center">Top Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-bottom-small uk-animation-reverse">
            <p class="uk-text-center">Bottom Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-right-small uk-animation-reverse">
            <p class="uk-text-center">Right Small</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-left-medium uk-animation-reverse">
            <p class="uk-text-center">Left Medium</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top-medium uk-animation-reverse">
            <p class="uk-text-center">Top Medium</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-bottom-medium uk-animation-reverse">
            <p class="uk-text-center">Bottom Medium</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-slide-right-medium uk-animation-reverse">
            <p class="uk-text-center">Right Medium</p>
        </div>
    </div>
</div>
```

***

## Fast modifier

To play animations at a faster speed, add the `.uk-animation-fast` class to the element.

```html
<div class="uk-animation-fade uk-animation-fast"></div>
```


```example
<div class="uk-child-width-1-3@m" uk-grid>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fast uk-animation-fade">
            <p class="uk-text-center">Fade</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fast uk-animation-scale-up">
            <p class="uk-text-center">Scale Up</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fast uk-animation-scale-down">
            <p class="uk-text-center">Scale Down</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fast uk-animation-shake">
            <p class="uk-text-center">Shake</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fast uk-animation-slide-left">
            <p class="uk-text-center">Left</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fast uk-animation-slide-top">
            <p class="uk-text-center">Top</p>
        </div>
    </div>
</div>
```

***

## Animation origin

By default, scaling animations originate from the center. To modify this behavior, add one of the `.uk-transform-origin-*` classes from the [Utility component](utility.md).

```
<div class="uk-animation-scale-up uk-transform-origin-bottom-right"></div>
```

```example
<div class="uk-child-width-1-3@m" uk-grid>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up uk-transform-origin-bottom-right">
            <p class="uk-text-center">Bottom Right</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up uk-transform-origin-top-center">
            <p class="uk-text-center">Top Center</p>
        </div>
    </div>
    <div class="uk-animation-toggle">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up uk-transform-origin-bottom-center">
            <p class="uk-text-center">Bottom Center</p>
        </div>
    </div>
</div>
```

***

## Ken Burns

To add a simple Ken Burns effect, add the `.uk-animation-kenburns` class to any image.

```html
<img class="uk-animation-kenburns" src="" alt="">
```

```example
<div class="uk-overflow-hidden">
    <img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt="Example image" uk-scrollspy="cls: uk-animation-kenburns; repeat: true">
</div>
```

By default the animation starts on page load. Within this example we used the [Scrollspy](scrollspy.md) component, to toggle the effect when the image enters the view.
