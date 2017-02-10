# Right-to-left support

<p class="uk-text-lead">UIkit supports right-to-left languages and allows you to switch the orientation of all design elements.</p>

## Use pre-built files

Along with the other precompiled files, UIkit contains `uikit.rtl.css`, a version of the CSS which changes the orientation of all design elements for right-to-left sites.

To use the RTL version, just include the CSS files in your HTML. In addition, add the `dir="rtl"` attribute to the `<html>` tag of your website. The JavaScript supports RTL by default, so you can include the regular JS files without changing anything.

```html
<html dir="rtl">
...
<link rel="stylesheet" href="uikit.rtl.css">
```

***

## Compile RTL version

You can also compile the RTL version of UIkit yourself, which will include any UIkit themes you have created in the `custom/` directory.


1. Grab the full UIkit source code from [Github](https://github.com/uikit/uikit).
2. Follow the [setup steps](https://github.com/uikit/uikit#developers).
3. Optionally, create a [custom theme](less.md) in the `custom/` directory.
4. Run the command `npm run compile-rtl` to build the RTL version.

The resulting files are now located in the `dist/` folder and end with `*.rtl.css`. The JavaScript files stay the same as with the default LTR version.

***

## Difference between RTL and LTR version

The RTL version switches the orientation of UIkit design elements, including properties such as floats, text-align, position coordinates, direction of background shadows and more. However, all classes that are explicitly named `*-left` or `*-right` stay the same in the RTL version.
