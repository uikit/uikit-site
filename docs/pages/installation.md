# Installation

<p class="uk-text-lead">Learn where to download and how to compile the UIkit sources.</p>

## Download

You have the following options to get UIkit:

- Download the [latest release](https://github.com/uikit/uikit/releases/latest) with pre-built JavaScript and CSS.
- Install with [Npm](https://www.npmjs.com/package/uikit) to get the pre-built JavaScript, CSS and the Less source files. This is recommended when using UIkit for a typical web project: ```npm install uikit```
- Clone the repo to get all source files including build scripts: `git clone git://github.com/uikit/uikit.git`

The compiled files of all UIkit versions are also hosted on the Cloudflare content delivery network via [cdnjs.com](https://cdnjs.com/libraries/uikit).

```html
<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.25/css/uikit.min.css" integrity="sha384-BgxuFqla78uYRNJ03Zkdfrobba0p7p4GBOnNTIRwClxKflHN4e9X7aqnKtw9gHVY" crossorigin="anonymous">

<!-- jQuery is required -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f" crossorigin="anonymous"></script>

<!-- UIkit JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.25/js/uikit.min.js" integrity="sha384-Qo1gElgDqcVHwwHHE3MuWdD8lzJC24E/tU7Yj4MyIawGdfDFbYmPNCbkDDVM6Yge" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.25/js/uikit-icons.min.js" integrity="sha384-P1a/8ZD4bYlEKgVwf3XXFfbtw5LPCo48CVvcEqg4VWxqaSocg2Xhcyp/nTr8/iBa" crossorigin="anonymous"></script>
```

***

## File structure of the source

The Github project contains all sources files which are compiled into the `dist` folder. [Less](http://lesscss.org) sources are compiled into CSS files, JavaScript sources are concatenated and icons are bundled into the icon library.

| Folder   | Description |
| -------- | ----------- |
| `/src`   | Contains all Less, JavaScript and image sources. |
| `/dist`  | Contains compiled CSS and JS, updated on every release. |
| `/tests` | Contains HTML test files of all components. |

***

## Compile from Github source

To compile UIkit yourself, you can use the included build scripts.

```sh
# Run once to install all dependencies
npm install

# Compile all source files
npm run compile

# Watch files and compile automatically everytime a file changes
npm run watch
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

To use UIkit's CSS and JavaScript, [include the files](introduction.md#html-markup) in your own HTML and then create the markup of any of the components listed here in the docs.

To compile UIkit automatically everytime you change the LESS or JavaScript, you can use the included build scripts.

```sh
npm run watch
```

<script>
$.get("https://getuikit.com/assets/uikit/package.json", {nocache: Math.random()}, data => {
    $("pre").each(function(i) {
        $(this).html($(this).html().replace(/\[uikit-version\]/g, data.version));
    });
}, 'json');
</script>
