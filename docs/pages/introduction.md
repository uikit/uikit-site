# Get started

<p class="uk-text-lead">Get familiar with the basic setup and structure of UIkit.</p>

First of all you need to download UIkit. Get the ZIP package or find the whole project and all source files on GitHub.

***

## File Structure

In the ZIP file you will find all CSS, JavaScript and image files ready to use for your project. The core framework of UIkit has almost no styling in order to keep it slim.

| Folder    | Description |
| --------- | --- |
| `/css`    | Contains all UIkit CSS files and minified versions. |
| `/images` | Contains all the images used within UIkit ( e.g. icons ) |
| `/js`     | Contains all UIkit JavaScript files and minified versions. |

**Note** This is the structure found in the ZIP file. Alternative sources, such as the GitHub version and the Bower package follow a slightly different structure and contain more files, for example Less files.

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

## HTML Markup

First off, make sure you have a solid code editor, for example Sublime Text. You need to add the compiled and preferably minified UIkit CSS and JavaScript to the header of your HTML5 document. jQuery is required as well. For your basic setup, that's it.

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="uikit.min.css" />
        <script src="jquery.js"></script>
        <script src="uikit.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

Once you have finished implementing UIkit into your webpage, take a look at the UIkit components and get an overview of what UIkit is offering.

## UIkit on cdnjs.com

All versions of UIkit are hosted on the Cloudflare content delivery network via [cdnjs.com](https://cdnjs.com/libraries/uikit).

### Example
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.xx.x/css/uikit.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.xx.x/js/uikit.min.js"></script>
```

## UIkit autocomplete for IDE's

To work even more efficiently, we recommend that you install one of the autocomplete plugins for your favourite IDE or code editor. This saves loads of time, as you won't have to look up and type all UIkit classes and markup.

We'll update this section as soon as these plugins are available.
