# Installation

<p class="uk-text-lead">Learn where to download and how to compile the UIkit sources.</p>

## Download

You have the following options to get UIkit:

- Download the [latest release](https://github.com/uikit/uikit/releases/latest) with pre-built JavaScript and CSS.
- Install with [pnpm](https://pnpm.io/) to get the pre-built JavaScript, CSS and the Less source files. This is recommended when using UIkit for a typical web project: ```pnpm add uikit```
- Clone the repo to get all source files including build scripts: `git clone git@github.com:uikit/uikit.git`

The compiled files of all UIkit versions are also hosted on the jsDelivr content delivery network via [jsdelivr.com](https://www.jsdelivr.com/package/npm/uikit).

```html
<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@[uikit-version]/dist/css/uikit.min.css" />

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@[uikit-version]/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@[uikit-version]/dist/js/uikit-icons.min.js"></script>
```

**Note** The latest [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) hashes can be obtained through [jsDelivr](https://www.jsdelivr.com/package/npm/uikit).

***

## File structure of the source

The GitHub project contains all source files which are compiled into the `dist` folder. [Less](http://lesscss.org) sources are compiled into CSS files, JavaScript sources are bundled and transpiled into ECMAScript 5 and icons are bundled into the icon library.

| Folder   | Description                                             |
|----------|---------------------------------------------------------|
| `/src`   | Contains all Less, JavaScript and image sources.        |
| `/dist`  | Contains compiled CSS and JS, updated on every release. |
| `/tests` | Contains HTML test files of all components.             |

***

## Compile from GitHub source

To compile UIkit yourself, you can use the included build scripts.

```sh
# Run once to install all dependencies
pnpm install

# Compile all source files
pnpm compile

# Watch files and compile automatically every time a file changes
pnpm watch
```

The compiled `dist` folder now contains additional files which are not checked in by default. The build task will create even more additional files if you have added a [custom UIkit theme](less.md#use-included-build-process).

```html
/dist/css

    <!-- UIkit's CSS -->
    uikit.css
    uikit.min.css

    <!-- UIkit's core styles, without the default theme -->
    uikit-core.css
    uikit-core.min.css

    <!-- UIkit's CSS in a right-to-left version -->
    uikit.rtl.css
    uikit.rtl.min.css


/dist/js

    <!-- UIkit's JavaScript -->
    uikit.js
    uikit.min.js

    <!-- Stripped down JavaScript. Core functionality without additional components -->
    uikit-core.js
    uikit-core.min.js

    <!-- Icon Library -->
    uikit-icons.js
    uikit-icons.min.js

    <!-- Additional components (e.g. Lightbox), only needed when including uikit-core.js -->
    /components
```

To use UIkit's CSS and JavaScript, [include the files](introduction.md#html-markup) in your own HTML and then create the markup of the components listed here in the docs.

To compile UIkit automatically every time you change Less or JavaScript files, you can use the included build scripts.

```sh
pnpm watch
```

<script>
    fetch('../assets/uikit/package.json').then(function (response) {
        response.json().then(({version}) => {
            UIkit.util.$$('pre').forEach(function (pre) {
                pre.innerHTML = pre.innerHTML.replace(/\[uikit-version]/g, version);
            });
        });
    });
</script>
