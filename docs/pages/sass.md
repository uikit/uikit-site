# Sass

<p class="uk-text-lead">Learn how to modify the UIkit styling and create your own theme with Sass.</p>

When you have [installed UIkit](installation.md) with you will find the Sass sources within the _/src/scss_ folder. This allows you to include customizations in the build process, rather than manually overwriting a lot of CSS rules by hand.

**Note** Sass allows two different syntax version: Sass and SCSS. UIkit makes use of the SCSS syntax.

***

## How to build

To include UIkit in your project's build workflow, you need to import three SCSS files from UIkit in the correct order into in your own SCSS code. Then, compile your file, e.g. running `sass site.scss > site.css` or any other [Sass compiler](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass).

```scss
// Import default variables and available mixins.
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";

// Your custom code. Set variables and overwrite mixins.
$section-primary-background: #AD3456;

// Import UIkit which will use the final variable values and mixins.
@import "uikit/src/scss/uikit-theme.scss";
```

**Note** The example uses the styling of the included default theme. Alternatively, you can import `variables.scss`, `mixins.scss` and `uikit.scss` to only include the core styling.

***

## Create a UIkit theme

When you have setup a file to put in your own SCSS code, you can get started to theme UIkit the way you want. If you have never used SCSS before, check out the [language features](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#features). When working with the UIkit SCSS sources, we have a few recommendations.

### Use variables

A lot of customization is possible by simply overwriting the values of already declared variables. You can find all variables for each component inside their SCSS files of the framework or the `variables.scss` file and override them in your theme.

First, find a SCSS variable you want to change inside the UIkit source. For example, the global link color is defined in `/src/scss/components/variables.scss`:

```scss
// default value
$global-link-color: #4091D2;
```

Then, overwrite the default by setting a custom value inside your own file, i.e. to `site.scss` as described above:

```scss
// new value
$global-link-color: #DA7D02;
```

The compiled CSS will then have your custom value.

### Use hooks

To prevent overhead selectors, we use Mixins from [Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins), which hook into predefined selectors from the UIkit source and inject additional properties. Selectors don't have to be repeated throughout all documents and global changes can be made much more easily.

First, find a rule that you want to extend by looking through the component's SCSS file, for example `/src/scss/components/card.scss` for the Card component:

```scss
// SCSS rule
.uk-card {
    position: relative;
    box-sizing: border-box;

    // mixin to allow adding new declaration
    @include hook-card();
}
```

Then, inject additional CSS by using the hook inside your own SCSS file, i.e. to `site.scss` as described above:

```scss
// mixin to add new declaration
@mixin hook-card() { color: #000; }
```

### Miscellaneous hooks

Should there be neither a variable nor a hook available, you can also create your own selector. To do so, e.g. use the _hook-card-misc()_ mixin of the Card component and write a selector inside. This will sort your new selector to the right place of the compiled CSS file. Just add the following lines to your own SCSS file, i.e. to `site.scss` as described above:

```scss
// misc mixin
@mixin hook-card-misc() {

    // new rule
    .uk-card a { color: #f00; }
}
```

***

## How to structure your theme

In the examples above, we have added all custom rules directly to `site.scss`. When you change a few variables but are happy with the rest, this is perfectly fine. However, for larger customizations, we recommend to only use this file as an entry point for the Sass compiler. You should better sort all rules into single files per component inside of a subfolder. This is the same structure that you can find in the default theme `/src/scss/theme`. For more examples you can take a look into the [Less](less.md#how-to-structure-your-theme) documentation and adapt it for your SCSS files.
