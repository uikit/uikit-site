# Countdown

<p class="uk-text-lead">A collection of useful utility classes to style your content.</p>

## Usage

To create a countdown, add the `uk-countdown` attribute to a `<div>` element. To define a date when the countdown should expire, add `endtime: YYYY-MM-DDThh:mm:ssTZD` option to the attribute, using the [ISO 8601 format](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#ECMAScript_5_ISO-8601_format_support). You can apply the [Grid component](grid.md) or `<span>` elements to create the countdown's layout. Add the following classes to child elements to apply the necessary functionality and styling.

| Class                   | Description                                    |
| ----------------------- | ---------------------------------------------- |
|`.uk-countdown-number`   | This class defines each child element as a countdown number, i.e. days, hours, minutes and seconds.                         |
|`.uk-countdown-days`<br> `.uk-countdown-hours`<br> `.uk-countdown-minutes`<br> `.uk-countdown-seconds`    | Add one of these classes to the same element(s) to indicate the days, hours, minutes or seconds to be counted down.                  |
|`.uk-countdown-label` | This class creates a label for each countdown number.                 |
|`uk-countdown-separator`    | This class creates a separator between countdown numbers.      |

```html
<!-- This is a countdown using a grid -->
<div uk-countdown="endtime: 2017-07-01T22:00:00+00:00" uk-grid>
    <div>
        <div class="uk-countdown-number uk-countdown-days"></div>
        <div class="uk-countdown-label">...</div>
    </div>
    <div class="uk-countdown-separator">:</div>
    ...
</div>

<!-- This is a countdown using spans -->
<div uk-countdown="endtime: 2017-07-01T22:00:00+00:00">
    <span class="uk-countdown-number">
        <span class="uk-countdown-days"></span><small>d</small>
    </span>
</div>
```

```example
<p class="uk-text-meta">Countdown using a grid</p>

<div class="uk-grid-small" uk-grid uk-countdown="endtime: 2017-07-01T22:00:00+00:00">
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

<div uk-countdown="endtime: 2017-07-01T22:00:00+00:00">
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
