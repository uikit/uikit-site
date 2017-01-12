# Get started

<p class="uk-text-lead">Get familiar with the basic setup and overview of UIkit.</p>

<a class="uk-button uk-button-primary" href="https://getuikit.com/download">Download UIkit</a>

First of all you need to download UIkit. For other packages and links to a CDN, head to the [installation guide](install.md) to learn more.

***

## HTML markup

First off, make sure you have a solid code editor, for example [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/). You need to add the compiled and preferably minified UIkit CSS and JavaScript to the header of your HTML5 document. [jQuery](http://jquery.com/download/) is required as well. For your basic setup, that's it.

**Note** The default `uikit.min.js` and `uikit.min.css` contain all components. If you do not need the advanced components, you can alternatively include `uikit-core.min.js` and `uikit-core.min.css`. You can then include single components by additionally laoding their Javascript from the `js/components/` folder.

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

Once you have finished implementing UIkit into your webpage, take a look at the UIkit components and get an overview of what UIkit is offering.

***

## UIkit autocomplete for  your editor

To work even more efficiently, we recommend that you install one of the autocomplete plugins for your favourite IDE or code editor. This saves loads of time, as you won't have to look up and type all UIkit classes and markup.

We'll update this section as soon as these plugins are available.
