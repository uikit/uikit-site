# Countdown

<p class="uk-text-lead">A collection of useful utility classes to style your content.</p>

## Usage

To create a countdown, add the `uk-countdown="endtime: yyyy-mm-dd"` attribute to a `<div>` element and use the date when the countdown should expire. You can apply the [Grid component](grid.md) or `<span>` elements to create the countdown's layout. Add the following classes to child elements to apply the necessary functionality and styling.

| Class                   | Description                                    |
| ----------------------- | ---------------------------------------------- |
|`.uk-countdown-number`   | This class defines each child element as a countdown number, i.e. days, hours, minutes and seconds.                         |
|`.uk-countdown-days`<br> `.uk-countdown-hours`<br> `.uk-countdown-minutes`<br> `.uk-countdown-seconds`    | Add one of these classes to the same element(s) to indicate the days, hours, minutes or seconds to be counted down.                  |
|`.uk-countdown-label` | This class creates a label for each countdown number.                 |
|`uk-countdown-separator`    | This class creates a separator between countdown numbers.      |

```html
<!-- This is a countdown using a grid -->
<div uk-countdown="endtime: yyyy-mm-dd" uk-grid>
    <div>
        <div class="uk-countdown-number uk-countdown-days"></div>
        <div class="uk-countdown-label">...</div>
    </div>
    <div class="uk-countdown-separator">:</div>
    ...
</div>

<!-- This is a countdown using spans -->
<div uk-countdown="endtime: 2017-05-04">
    <span class="uk-countdown-number">
        <span class="uk-countdown-days"></span><small>d</small>
    </span>

</div>
```

```example
<p class="uk-text-meta">Countdown using a grid</p>

<div class="uk-grid-small" uk-grid uk-countdown="endtime: 2017-09-31">
    <div>
        <div class="uk-countdown-number uk-countdown-days"></div>
        <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
    </div>
    <div class="uk-countdown-separator">:</div>
    <div>
        <div class="uk-countdown-number uk-countdown-hours"></div>
        <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
    </div>
    <div class="uk-countdown-separator">:</div>
    <div>
        <div class="uk-countdown-number uk-countdown-minutes"></div>
        <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
    </div>
    <div class="uk-countdown-separator">:</div>
    <div>
        <div class="uk-countdown-number uk-countdown-seconds"></div>
        <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
    </div>
</div>

<p class="uk-text-meta uk-margin-medium-top">Countdown using <code>&lt;span&gt;</code> elements</p>

<div uk-countdown="endtime: 2017-09-31">
    <span class="uk-countdown-number">
        <span class="uk-countdown-days"></span><small>d</small>
    </span>
    <span class="uk-countdown-number">
        <span class="uk-countdown-hours"></span><small>h</small>
    </span>
    <span class="uk-countdown-number">
        <span class="uk-countdown-minutes"></span><small>m</small>
    </span>
    <span class="uk-countdown-number">
        <span class="uk-countdown-seconds"></span><small>s</small>
    </span>
</div>
```
