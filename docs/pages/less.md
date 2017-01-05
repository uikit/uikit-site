# Less files

<p class="uk-text-lead">A separate Bower package contains all UIkit distribution files including Less source files, but omits source and build files that you will not need.</p>

## Install with Bower

You can easily integrate the UIkit source files in your project to keep your custom project workflow for building assets and make use of the Less preprocessor.

UIkit is available via the [Bower](http://bower.io/) package manager. The [bower package](https://github.com/uikit/bower-uikit) is a generated distribution from the main UIkit repository. It contains all CSS, Less and JavaScript files from UIkit and its components.

```sh
bower install uikit
```

***

## Build Less files

Using Less is pretty straightforward. Just include UIkit and additional components at the top of your main Less file and start customizing by utilizing UIkits hooks and override its variables.

```
// Import UIkit core
@import "bower_components/uikit/src/less/uikit.less";

// Your custom code goes here, e.g. mixins, variables
```

### Working with Less

When working with Less files and customizing the UIkit components, have a look at the [best practices](theme.md#best-practices) we have collected.
