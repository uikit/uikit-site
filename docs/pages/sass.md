# Sass

<p class="uk-text-lead">Learn how to modify the UIkit styling and create your own theme with Sass.</p>

When you have [installed UIkit](installation.md) with you will find the Sass sources within the _/src/scss_ folder. This allows you to include customizations in the build process, rather than manually overwriting a lot of CSS rules by hand.

***

## Use your own build process

To include UIkit in your project's build workflow, you need to import the default three scss files. First you need to import the default values for all the variables (`uikit-variables.scss`). In the second step you need to import the file where all mixins are initiated (`uikit-mixins.scss`). Now you can add all your custom SCSS code and at the end of the file you need to import the core uikit file (`uikit.scss`). If you want to use the UIkit with its default theme you need to use the theme variables file and theme uikit file as shown in the example below. This main SCSS file then needs to be compiled in any way you like. Read the [official Sass docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass) if you are unsure how to compile SCSS.

```css
// Import mixins and variables
@import "uikit/src/scss/uikit-theme-variables.scss";
@import "uikit/src/scss/uikit-mixins.scss";

// Your custom code
$section-primary-background: #AD3456;

// Import uikit
@import "uikit/src/scss/uikit.theme.scss";
```

When using the default theme, you have to take a look into the mixins which will be overwritten within the default theme again. Since Sass doesn't allow overloading mixins. So changes done to a mixin which is overwritten in the default theme, will have no impact on the computed CSS file.

## Create a UIkit theme

When you have setup a file to put in your own SCSS code, you can get started to theme UIkit the way you want. If you have never used SCSS before, check out the [language features](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#features). When working with the UIkit SCSS sources, we have a few recommendations.

### Use variables

A lot of customization is possible by simply overwriting the values of already declared variables. You can find all variables for each component inside their SCSS files of the framework or the `uikit-variables.scss` file and override them in your theme.

First, find a SCSS variable you want to change inside the UIkit source. For example, the global link color is defined in `/src/scss/components/variables.scss`:

```css
// default value
$global-link-color: #4091D2;
```

Then, overwrite the default by setting a custom value inside your own file, i.e. in `/custom/my-theme.scss`:

```css
// new value
$global-link-color: #DA7D02;
```

The compiled CSS will then have your custom value. But not only has the global link color changed. Many components make use of the `@global-*` variables to infer their own colors, and just adapt them slightly. That way you can rapidly create a theme by just changing some global variables.

### Use hooks

To prevent overhead selectors, we use Mixins from [Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins), which hook into predefined selectors from the UIkit source and apply additional properties. Selectors don't have to be repeated throughout all documents and global changes can be made much more easily.

First, find a rule that you want to extend by looking through the component's SCSS file, for example `/src/scss/components/card.scss` for the Card component:

```css
// CSS rule
.uk-card {
    position: relative;
    box-sizing: border-box;

    // mixin to allow adding new declaration
    @include hook-card();
}
```

Then, inject additional CSS by using the hook inside your own SCSS file, i.e. in `/custom/my-theme.scss`:

```css
// mixin to add new declaration
@mixin hook-card() { color: #000; }
```

### Miscellaneous hooks

Should there be neither a variable nor a hook available, you can also create your own selector. To do so, use the _hook-card-misc()_ mixin and write your selector inside. This will sort your new selector to the right place of the compiled CSS file. Just add the following lines to your own SCSS file, i.e. to `/custom/my-theme.scss`:

```css
// misc mixin
@mixin hook-card-misc() {

    // new rule
    .uk-card a { color: #f00; }
}
```

## How to structure your theme

In the examples above, we have added all custom rules directly to /custom/my-theme.scss. When you change a few variables but are happy with the rest, this is perfectly fine. However, for larger customizations, we recommend to only use this file as an entry point for the Sass compiler. You should better sort all rules into single files per component inside of a subfolder. This is the same structure that you can find in the default theme /src/scss/uikit.theme.scss. For more examples you can take a look into the [Less](less.md#how-to-structure-your-theme) documentation and adapt it for your SCSS files.