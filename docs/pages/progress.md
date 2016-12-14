# Progress

<p class="uk-text-lead">Defines different styles for progress bars.</p>

## Usage

To apply this component, add the `.uk-progress` class to a `<progress>` element.

```html
<progress class="uk-progress" value="" max=""></progress>
```

```example
<progress id="progressbar" class="uk-progress" value="10" max="80"></progress>
```


<script>

    jQuery(function () {

        var animate = setInterval(function () {

            progressbar.value += 10;

            if (progressbar.value >= progressbar.max) {
                clearInterval(animate);
            }

        }, 1000);

    });

</script>