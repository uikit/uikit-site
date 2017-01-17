# Progress

<p class="uk-text-lead">Defines progress bars that indicate how far along a process is.</p>

## Usage

To apply this component, add the `.uk-progress` class to a `<progress>` element.

```html
<progress class="uk-progress" value="" max=""></progress>
```

```example
<progress id="progressbar" class="uk-progress" value="10" max="100"></progress>

<script>

    jQuery(function () {

        var animate = setInterval(function () {

            window.progressbar && (progressbar.value += 10);

            if (!window.progressbar || progressbar.value >= progressbar.max) {
                clearInterval(animate);
            }

        }, 1000);

    });

</script>
```
