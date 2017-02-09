# Compatibility

<p class="uk-text-lead">Through its prefix UIkit should be compatible with every other CSS framework, if there are some special cases where this is not the case use one of the following techniques to avoid conflicts.</p>

## No-conflict

To create the no conflic version of UIkit you need to download UIkit directly via [Github](https://github.com/uikit/uikit). After following the [setup steps](https://github.com/uikit/uikit#developers) you need to run the command `npm run no-conflict`. This will change all the CSS rules so that the class `uk-noconflict` is needed. This enables you to enable UIkits CSS rules only on a certain part of the page, by adding the class `uk-noconflict` to the parent container.

## Custom prefix

To create a UIkit version with your own prefix you need to download UIkit directly via [Github](https://github.com/uikit/uikit). After following the [setup steps](https://github.com/uikit/uikit#developers) you need to run the command `npm run prefix -- -p XYZ` where _XYZ_ is your custom prefix.

You will find the generated CSS and JS files within the `/dist` folder as you are used to. In these all the CSS classes are named `XYZ-*` instead of `uk-*` now and also the global Javascript Object `UIkit` is now named `XYZUIkit`.