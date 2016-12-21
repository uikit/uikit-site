# Get started

<p class="uk-text-lead">Get familiar with the basic setup and structure of UIkit.</p>

First of all you need to download UIkit. You can find the whole project and all source files on GitHub.

***

## File Structure

In the ZIP file you will find all CSS, JavaScript and image files ready to use for your project. The core framework of UIkit has almost no styling in order to keep it slim.

| Folder | Description |
| --- | --- |
| /css | Contains all UIkit CSS files and minified versions. |
| /images | Contains all the images used within UIkit ( e.g. icons ) |
| /js | Contains all UIkit JavaScript files and minified versions. |

```html
/css
    <!-- UIkit with the basic style -->
    uikit.css
    uikit.min.css

    <!-- UIkit with all CSS components -->
    uikit.all.css
    uikit.all.min.css

    <!-- UIkit with common CSS components for sites -->
    uikit.site.css
    uikit.site.min.css

    <!-- UIkit with common CSS components for apps -->
    uikit.app.css
    uikit.app.min.css

    <!-- Advanced components -->
    /components

/images
    <!-- Background images -->
    /backgrounds

    <!-- Component specific images -->
    /components

    <!-- Icons -->
    /symbols

/js
    <!-- JavaScript and minified version -->
    uikit.js
    uikit.min.js

    <!-- Advanced components -->
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
