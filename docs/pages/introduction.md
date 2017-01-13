# Introduction

<p class="uk-text-lead">Get familiar with the basic setup and overview of UIkit.</p>

First of all you need to download UIkit. For other packages and links to a CDN, head to the [installation guide](install.md) to learn more.

<a class="uk-button uk-button-primary" href="https://getuikit.com/download">Download UIkit</a>

***

## Package contents

The Zip file contains the compiled CSS and JavaScript files, which is everything you need to get started. Later, you might want to [install and compile UIkit](install.md) yourself and also [create your own UIkit theme](theme.md).

| Folder    | Description |
| --------- | --- |
| `/css`    | Contains the UIkit CSS and a minified version. |
| `/images` | Contains all the images used within UIkit (e.g. icons). |
| `/js`     | Contains the UIkit JavaScript and a minified version. |

***

## HTML markup

Add the compiled and preferably minified CSS and JavaScript to the header of your HTML5 document. [jQuery](http://jquery.com/download/) is required as well. For your basic setup, that's it.

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="css/uikit.min.css" />
        <script src="js/jquery.js"></script> <!-- download from jquery.com -->
        <script src="js/uikit.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

Once you have finished implementing UIkit into your document, take a look at the UIkit components and get an overview of what UIkit is offering.

***

## UIkit autocomplete for your editor

Using UIkit works best if you have a solid code editor, for example [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/). To be even more efficient, we recommend that you install one of the autocomplete plugins for your favorite IDE or code editor. This saves a lot of time, as you won't have to look up and type all UIkit classes and markup.

We'll update this section as soon as these plugins are available for UIkit 3.
