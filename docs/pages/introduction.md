# Introduction

<p class="uk-text-lead">Get familiar with the basic setup and overview of UIkit.</p>

First of all you need to download UIkit. For other packages and links to a CDN, head to the [installation guide](installation.md) to learn more.

<a class="uk-button uk-button-primary" href="https://getuikit.com/download">Download UIkit</a> or you can use Cloudflare CDN to serve UIKit CSS and JS files.

Optional Code if you prefere to serve files via free Cloudflare CDN
```html
<!-- CSS files -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.22/css/uikit.min.css" />

<!-- JS Files -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.22/js/uikit.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.22/js/uikit-icons.min.js"></script>
```

***

## Package contents

The Zip file contains the compiled CSS and JavaScript files, which is everything you need to get started. Later, you might want to [install and compile UIkit](installation.md) yourself and also [create your own UIkit theme](less.md).

| Folder    | Description |
| --------- | --- |
| `/css`    | Contains the UIkit CSS and a right-to-left version. |
| `/js`     | Contains the UIkit JavaScript and the Icon Library JavaScript. |

***

## HTML markup

Add the compiled and minified CSS and JavaScript to the header of your HTML5 document. [jQuery](http://jquery.com/download/) is required as well. Also include the UIkit icon library. For your basic setup, that's it.

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="css/uikit.min.css" />
        <script src="js/jquery.js"></script>
        <script src="js/uikit.min.js"></script>
        <script src="js/uikit-icons.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

Once you have included UIkit into your document, take a look at the available components and create your own markup inside the `<body>` element of your page.

***

## UIkit autocomplete for your editor

Using UIkit works best if you have a solid code editor, for example [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/). To be even more efficient, we recommend that you install one of the autocomplete plugins for your favorite IDE or code editor. This saves a lot of time, as you won't have to look up and type all UIkit classes and markup.

- [Autocomplete plugin for Sublime Text 3](https://github.com/uikit/uikit-sublime)
- [Autocomplete plugin for Atom](https://atom.io/packages/uikit-atom)

***

## Browser support

The following table lists the versions that UIkit is tested on. "Latest" means that it works just fine on all recent versions of that browser. With many browser moving towards a rolling release strategy, pinning down browser support to a specific version has become a little tricky in recent years. Long story short: UIkit will work on pretty much any modern browser.

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) |
| --- | --- |
| Latest | Latest | Latest | 10+ | 7.1+ | Latest |
