# Create a theme

<p class="uk-text-lead">Extend UIkit and add your own unique theme.</p>

## How to start

By default, UIkit comes with a very basic theme. To modify the style, you don't have to edit any of the core framework files. Instead, you can extend UIkit by creating a custom theme. This allows you to easily change the styling of all UIkit components. There is also an example theme to get you started (located in `/src/less/uikit.theme.all.less`). To create your own theme from scratch, follow these steps:

### 1. Create the theme directory

Download or clone UIkit and make sure you have Node installed (so that `npm` is available on the command line). Create your theme folder here `/custom/THEME-NAME`. If the `/custom` directory is not present, create it first.

**Note** The `/custom` folder is listed in `.gitignore`, which prevents your custom files from being pushed into the UIkit repository. If you are working with a cloned version of UIkit's Git repository, it is a good practice to have `/custom` as your own git repository. That way your theme files are under version control without interfering with the UIkit files.

### 2. Add your theme

Create a file `example.less` (or any other name) in the `/custom` folder and add the `@import "../../src/less/uikit.all.less";` rule to include all Less components from the core framework and adopt the basic styling. That's it! In this file, you overwrite Less variables and add your own theme styles.

**Note** To get you started right away, we provide a default theme located in `/src/less/uikit.theme.all.less` which imports additional files from the `/src/less/theme` directory. This theme imports all default files and you will also find all theme files with their related hooks. So if you do not want to start empty, all you need to do is to duplicate this file (along with the `/src/less/theme` folder), move both into the `/custom` directory and rename however you want.

### 3. Customizer and Tests

Run the script `scripts/less.js` which will compile all themes in the `/custom` folder.

```sh
node scripts/less
```

The newly created themes will now be available in the test files, just navigate your browser to the index of the `/test` directory and select your theme from the Dropdown menu. The generated CSS files will be located in the `css/` folder.

***

## Best practices (WIP)

There are different approaches to style your theme. We recommend the following workflow.

### 1. Use variables

The first thing to do is to customize the values of already declared variables. You can find all variables for each component inside their Less files of the core framework and override them in your theme.

### Example

`/src/core/button/button.less`

    // default value
    @button-height: 30px;

`/custom/THEME-NAME/button.less`

    // new value
    @button-height: 35px;

### 2. Use hooks

To prevent overhead selectors, we use Mixins from [Less](http://lesscss.org), which hook into predefined selectors from the UIkit source and apply additional properties. Selectors don't have to be repeated throughout all documents and gobal changes can be made much more easily.

### Example

`/src/core/panel/panel.less`

    // CSS rule
    .uk-panel {
        background: @background;

        // mixin to add new declaration
        .hook-panel;
    }

`/custom/THEME-NAME/panel.less`

    // mixin to add new declaration
    .hook-panel() { color: #fff; }


### 3. Miscellaneous hooks

Should there be neither a variable nor a hook available, you can of course create your own selector. To do so, use the _.hook-panel-misc_ hook and write your selector inside. This will sort your new selector to the right place of the compiled CSS file.

### Example

`/custom/THEME-NAME/panel.less`

    // misc mixin
    .hook-panel-misc() {

        // new rule
        .uk-panel a { color: #f00; }
    }
