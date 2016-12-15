# Less & Sass files

<p class="uk-text-lead">A separate Bower UIkit repository contains all distribution files including Less and Sass.</p>

The great thing about UIkit is that you can easily integrate its source files in your project to keep your custom project workflow for building assets and stay with your preferred CSS preprocessor.

UIkit is available via the [Bower](http://bower.io/) package manager. The [bower package](https://github.com/uikit/bower-uikit) you can receive there is a generated distribution from the main UIkit repository. It contains all CSS, Less, SCSS and JavaScript files from UIkit and its components.

***

## Get the latest UIkit distribution

1.  Install with [Bower](http://bower.io/) `bower install uikit`
2.  Or get the Package from [Github](https://github.com/uikit/bower-uikit/)

You'll find both — Less files and Sass files — in their respective folders:

```
/uikit
    less/
        uikit.less
        ...
    scss/
        uikit-mixins.scss
        uikit.scss
        ...
```

***

## Embedding Less in your project

Using Less is pretty straightforward. Just include UIkit and additional components at the top of your main Less file and start customizing by utilizing UIkits hooks and override its variables.

### Example

```
@import "uikit/less/uikit.less";
@import "uikit/less/components/autocomplete.less";

// your custom code goes here, e.g. mixins, variables
```

***

## Embedding Sass in your project

Due to the way Sass is parsing code, it is needed that you include `uikit-mixins.scss` first then add your customizations (hooks, variables) and finally UIkit and additional components.

### Example

```
@import "uikit/scss/uikit-mixins.scss";

// your custom code goes here, e.g. mixins, variables

@import "uikit/scss/uikit.scss";
@import "uikit/scss/components/autocomplete.scss";
```
