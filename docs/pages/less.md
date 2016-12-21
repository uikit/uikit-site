# Less files

<p class="uk-text-lead">A separate Bower UIkit repository contains all distribution files including Less source files.</p>

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
@import "bower_components/uikit/src/less/uikit.all.less";

// Your custom code goes here, e.g. mixins, variables
```

### Included Less distributions

In the example above, we have included `uikit.all.less` which imports all UIkit components. However, in some cases you do not need all of them. You can either import only the components, that you actually use in your project, or import one of the available distributions, that imports a number of components for typical use cases.

| File | Description |
| ---- | ----------- |
| `uikit.all.less`  | Includes all UIkit components. |
| `uikit.app.less`  | Includes components typically needed for web apps. |
| `uikit.site.less` | Includes components typically used for standard websites. |

### Working with Less

When working with Less files and customizing the UIkit components, have a look at the [best practices](theme.md#best-practices) that we have collected.
