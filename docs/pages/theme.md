# Create a theme

<p class="uk-text-lead">Extend UIkit and add your own unique theme.</p>

## How to start

By default, UIkit comes with a very basic theme. To modify the style, you don't have to edit any of the core framework files. Instead, you can extend UIkit by creating a custom theme. This allows you to easily change the styling of all UIkit components. There is also an example theme to get you started (located in `/src/less/uikit.theme.all.less`). To create your own theme from scratch, follow these steps:

### 1. Preparations

Download or clone UIkit and make sure you have Node installed (so that `npm` is available on the command line). Create a `/custom` directory, which will contain all of your custom themes.

**Note** The `/custom` folder is listed in `.gitignore`, which prevents your custom files from being pushed into the UIkit repository. If you are working with a cloned version of UIkit's Git repository, it is a good practice to have `/custom` as your own git repository. That way your theme files are under version control without interfering with the UIkit files.

### 2. Create your theme

Create a file `my-theme.less` (or any other name) in the `/custom` folder and add the following import to include all Less components from the core framework and adopt the basic styling. That's it! In this file, you overwrite Less variables and add your own theme styles.

```less
@import "../../src/less/uikit.all.less";
```

### 3. Compile your theme

Run the script `scripts/less.js` which will compile all themes in the `/custom` folder.

```sh
node scripts/less
```

The newly created themes will now be available in the test files, just navigate your browser to the index of the `/test` directory and select your theme from the Dropdown menu. The generated CSS files will be located in the `css/` folder.

### Optional: Start with the default theme

To get you started right away, we provide a default theme located in `/src/less/uikit.theme.all.less` which imports additional files from the `/src/less/theme` directory. This theme imports all default files and you will also find all theme files with their related hooks. So if you do not want to start empty, all you need to do is to duplicate this file (along with the `/src/less/theme` folder), move both into the `/custom` directory and rename them however you want.

***

## Best practices

There are different approaches to style your theme. We recommend the following workflow.

### 1. Use variables

The first thing to do is to customize the values of already declared variables. You can find all variables for each component inside their Less files of the core framework and override them in your theme. Many global values are defined in `src/less/variables.less`.


`/src/less/components/variables.less`

```less
// default value
@global-link-color: #4091D2;
```

`/custom/my-theme.less`

```less
// new value
@global-link-color: #DA7D02;
```

### 2. Use hooks

To prevent overhead selectors, we use Mixins from [Less](http://lesscss.org), which hook into predefined selectors from the UIkit source and apply additional properties. Selectors don't have to be repeated throughout all documents and gobal changes can be made much more easily.

`/src/less/components/card.less`

```less
// CSS rule
.uk-card {
    position: relative;
    box-sizing: border-box;

    // mixin to allow adding new declarations
    .hook-card;
}
```


`/custom/my-theme.less`

```less
// mixin to add new declaration
.hook-card() { color: #000; }
```

### 3. Miscellaneous hooks

Should there be neither a variable nor a hook available, you can of course create your own selector. To do so, use the _.hook-card-misc_ hook and write your selector inside. This will sort your new selector to the right place of the compiled CSS file.

`/custom/my-theme.less`

```less
// misc mixin
.hook-card-misc() {

    // new rule
    .uk-card a { color: #f00; }
}
```

### 4. Split Less in multiple files

In the above examples, we have added all custom rules directly inside `/custom/my-theme.less`. When you simple change a few variables but are happy with the rest, this is perfectly fine. However, for more custom themes and larger projects, we recommend to only use this file as an entry point for the less compiler, but sort all rules into the according component files inside of a subfolder. This is the same structure that you can find in the default theme `/src/less/uikit.theme.all.less`.

```html
custom/

    <!-- entry file for Less compiler -->
    my-theme.less

    <!-- folder with single Less files -->
    my-theme/

        <!-- imports all components in this folder -->
        _import.less

        <!-- one file per customized component -->
        accordion.less
        alert.less
        ...
```

The entry point for the Less compiler:

`/custom/my-theme.less`

```less
// Core
@import "../../src/less/uikit.all.less";

// Theme
@import "my-theme/_import.less";
```

**Note** The imported `uikit.all.less` is a prepared distribution that contains all UIkit components. If you do not need all of them, you can also choose `uikit.site.less` with components for a typical website or `uikit.app.less` with components for a typical webapp.

Your theme folder has one file which imports all single component customizations:

`custom/my-theme/_import.less`

```less
@import "accordion.less";
@import "alert.less";
// ...
```
