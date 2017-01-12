# Installation

<p class="uk-text-lead">Download the UIkit files and include them in your HTML pages.</p>

## Download

You have the following options to get UIkit:

- Download the [latest release](https://github.com/uikit/uikit/releases/latest) with pre-built JavaScript and CSS.
- Install with [Bower](https://bower.io) to get the pre-built JavaScript, CSS and the Less source file. This is recommended when using UIkit for a typical web project: ```bower install uikit```
- Clone the repo to get all source files including build scripts: `git clone git://github.com/uikit/uikit.git`
- Install with [Npm](https://npmjs.com) to get all source files as they are available on Github: ```npm install uikit```
- Directly include the compiled UIkit files from [CDNJS](https://cdnjs.com/libraries/uikit).

***

## CDN links

All versions of UIkit are also hosted on the Cloudflare content delivery network via [cdnjs.com](https://cdnjs.com/libraries/uikit).

### Example
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.xx.x/css/uikit.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.xx.x/js/uikit.min.js"></script>
```

***

## File structure of the Github project

UIkit is built on [Less](http://lesscss.org), a CSS preprocessor, which adds variables, mixins and much more to CSS. It compiles code written in Less into CSS. The main file structure of UIkit is as follows.

| Folder   | Description |
| -------- | ----------- |
| `/src`   | Contains all Less and JavaScript component files. |
| `/dist`  | Contains the compiled CSS and concatenated JS files, updated on every release. |
| `/tests` | Contains HTML test files of all components. |

***

## File structure of the ZIP package

In the ZIP file you will find all CSS, JavaScript and image files ready to use for your project. The core framework of UIkit has almost no styling in order to keep it slim.

| Folder    | Description |
| --------- | --- |
| `/css`    | Contains all UIkit CSS files and minified versions. |
| `/images` | Contains all the images used within UIkit ( e.g. icons ) |
| `/js`     | Contains all UIkit JavaScript files and minified versions. |

```html
/css

    <!-- UIkit with base styling for all components -->
    uikit.css
    uikit.min.css

    <!-- Styling of the included sample theme. Can be used instead of uikit.css -->
    uikit.theme.css
    uikit.theme.min.css

/images

    <!--Includes images for icons, backgrounds and additional components -->

/js
    <!-- JavaScript of UIkit core and ALL components -->
    uikit.js
    uikit.min.js

    <!-- JavaScript of core functionality, without additional components -->
    uikit-core.js
    uikit-core.min.js

    <!-- Advanced components, only needed when including uikit-core.min.js -->
    /components
```

***

## Learn how to get started

When you have installed UIkit, you need to [include the files](introduction.md#html-markup) in your own HTML and then you can use any of the components listed here in the docs.
