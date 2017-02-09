# Compatibility

<p class="uk-text-lead">Out of the box, UIkit is compatible with third party CSS and JS. Additionally, it includes a no-conflict mode and the possibility to use a custom prefix.</p>

By default, all classes and attributes in UIkit start with the `uk-` prefix. This avoids name collisions when introducing UIkit to existing projects or when combining it with other frameworks. Uikit allows to change that prefix. This even allows to use multiple versions of UIkit alongside each other. In addition, the no-conflict mode allows to limit the UIkit styles to only affect certain parts on your pages.

***

## Custom prefix

When you recompile UIkit with a custom prefix, for example `xyz`, all attributes and classes will now start with that prefix, for example `xyz-grid` instead of `uk-grid`. The global JavaScript object `UIkit` will also be renamed to `xyzUIkit`.

1. Grab the full UIkit source code from [Github](https://github.com/uikit/uikit).
2. Follow the [setup steps](https://github.com/uikit/uikit#developers).
3. Run the command `npm run prefix -- -p xyz` where _XYZ_ is your custom prefix.

You will find the generated CSS and JS files in the `/dist` folder.

## No-conflict mode

You can also recompile UIkit as a no-conflict version. This will change all the CSS rules so that the class `.uk-noconflict` is needed on a parent container.

```html
<!-- will stay unstyled in no-conflict mode -->
<button uk-button></button>

<!-- will be styled because of the surrounding .uk-noconflict container -->
<div class="uk-noconflict">
    <button uk-button></button>
</div>
```

To create the no-conflict version of UIkit, follow these steps:

1. Grab the full UIkit source code from [Github](https://github.com/uikit/uikit).
2. Follow the [setup steps](https://github.com/uikit/uikit#developers).
3. Run the command `npm run no-conflict`.

You will find the generated CSS and JS files in the `/dist` folder.
