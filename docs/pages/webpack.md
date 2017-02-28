# Webpack

You can use Webpack to include and bundle UIkit's JavaScript in your project.

***

## Project setup

For the basic project setup, we will create the following files:

```html
app/
    main.js
index.html
package.json
```

The following commands will create and fill the file `package.json`. It contains the dependencies for Npm. We include UIkit, jQuery and Webpack.

```sh
mkdir uikit-webpack && cd uikit-webpack
npm init -y
npm install --save uikit jquery
npm install --save-dev webpack
```

As an entry file for the projects JavaScript, create a file `app/main.js` with the following content.

```js
import UIkit from 'uikit/src/js/uikit';
import $ from 'jquery';
```

This way you have references to UIkit and jQuery available without having to include their JavaScript files in your HTML. Instead, we can include the full bundle that will be created by Webpack. Create the main HTML file `index.html` with the following content.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="node_modules/uikit/dist/css/uikit.min.css">
    </head>
    <body>

        <div class="uk-container">
            <div class="uk-card uk-card-body uk-card-primary">
                <h3 class="uk-card-title">Example headline</h3>
            </div>
        </div>

        <script src="dist/bundle.js"></script>
    </body>
</html>
```

**Note** For simplicity reasons, we have included the pre-built CSS. In a real project, you probably want to build the [Less](less.md) files and included the compiled CSS instead.

To configure Webpack to compile `app/main.js` into `dist/bundle.js`, create the file `webpack.config.js` with the following content.

```js
module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    }
};
```

Now, run Webpack in your project's main directory.

```sh
./node_modules/.bin/webpack # Run webpack from local project installation
webpack # If you installed webpack globally
```

This should complete the basic setup of your project. Navigate to `index.html` in your browser and confirm that the basic UIkit styling is applied to your page.

***

## Use additional components

The basic `main.js` as described above only includes UIkit's core components. If you want to use additional components, for example the Tooltip, you need to include and initialize it in `main.js`.

```js
import UIkit from 'uikit/src/js/uikit';
import $ from 'jquery';

// 1. import any additional component
import Tooltip from 'uikit/src/js/components/tooltip';  

// 2. Register and initialize the component
UIkit.use(Tooltip);
```

Add an element that uses the Tooltip component to your page.

```html
<!-- ... -->
<button class="uk-button uk-button-default" title="Hello World" uk-tooltip>Hover</button>
```

Recompile the bundle:

```sh
webpack
```

Now check your browser to confirm that the tooltip is working when you hover the button we have added.
