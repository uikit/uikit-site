# Migration

<p class="uk-text-lead">Migrate an existing UIkit website to the latest version.</p>

***

## Migration from UIkit 3.1 to 3.2

In UIkit 3.2 all Less variable which has `xxlarge` in their name got renamed that part to `2xlarge`. Just find and replace these Less variables if you are using a custom Less theme.

### Global Less Variables

Some global font size and line height variables got renamed. Just find and replace following variables in this particular order in your custom UIkit theme.

| Variable                    | Replace with                  |
| --------------------------- | ----------------------------- |
| `@global-small-font-size `  | `@global-xsmall-font-size`    |
| `@global-font-size`         | `@global-small-font-size`     |
| `@global-line-height`       | `@global-small-line-height`   |
| `@global-2xlarge-font-size` | `@global-2xlarge-font-size-m` |
| `@global-xlarge-font-size`  | `@global-xlarge-font-size-m`  |

### Heading Component Markup

The heading size classes in the [Heading component](heading) are deprecated and replaced by the new [Font component](font#size-modifiers). Update your markup by replacing the following classes.

| Deprecated           | Replace with      |
| -------------------- | ----------------- |
| `uk-heading-small`   | `uk-font-3xlarge` |
| `uk-heading-medium`  | `uk-font-4xlarge` |
| `uk-heading-large`   | `uk-font-5xlarge` |
| `uk-heading-xlarge`  | `uk-font-6xlarge` |
| `uk-heading-2xlarge` | `uk-font-7xlarge` |

If you are modifying the deprecated classes through Less variables or hooks, you need to update your UIkit theme accordingly and rename those variables and hooks.

### Text Component Markup

Some classes in the [Text component](text) are deprecated and replaced by the new [Font component](font#size-modifiers). Update your markup by replacing the following classes.

| Deprecated      | Replace with     |
| --------------- | ---------------- |
| `uk-text-small` | `uk-font-xsmall` |
| `uk-text-large` | `uk-font-large`  |
| `uk-text-bold`  | `uk-font-bold`   |

### Width Component Markup

The `uk-width-xxlarge` class in the [Width component](text) is renamed to `uk-width-2xlarge`.

***

## Migration from UIkit 3.0 to 3.1

UIkit 3.1 adds the `@deprecated` Less variable. By default, it is set to `false`, and deprecated classes are not compiled into the CSS. 

If you want to update your markup later and use the deprecated classes along the new ones, set the variable to `true` in your custom UIkit theme.

```
@deprecated: true;
```

### Heading Component

The Primary and Hero classes in the [Heading component](heading) are deprecated. Update your markup by replacing the following classes.

| Deprecated           | Replace with        |
| -------------------- | ------------------- |
| `uk-heading-primary` | `uk-heading-medium` |
| `uk-heading-hero`    | `uk-heading-xlarge` |

***

## Migration from UIkit 2 to 3

Uikit 3 offers a migration tool that runs in your browser and lists all necessary changes from an existing Uikit 2 site. Two options are available to run the tool: Via a bookmark or by including a single JavaScript file. The necessary migration changes are then listed in your browser's console.

### Browser bookmark

The easiest way to use the migration tool is via a bookmark in your browser. You can then run the script on any page that you navigate to by simply clicking the bookmark. Just drag the following link into your browser's bookmark section.

Drag into your bookmark bar <span uk-icon="icon: arrow-right"></span> <a class="uk-button uk-button-primary" href="javascript: (function () { var script = document.createElement('script'); script.setAttribute('src', 'https://getuikit.com/migrate.min.js'); document.body.appendChild(script); }());">UIkit 3 Migration</a>

Alternatively, you can manually create a bookmark with the following code as its URL.

```js
javascript: (function () {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://getuikit.com/migrate.min.js');
    document.body.appendChild(script);
}());
```

### HTML integration

You can also run the migration tool by loading the needed JavaScript on your website. This way the migration script will always be loaded on your website. Remember to remove this when you have completed the migration. Add the following line just before the closing `</body>` tag.

```html
<script src="https://getuikit.com/migrate.min.js"></script>
```

### Usage

To start the migration, replace the UIkit 2 files of your website with their UIkit 3 equivalents (both JS and CSS) and run the migration tool using one of the solutions listed above. To learn how to change your markup, open the developer console of your browser. Your see a list of warnings and notices that tell you what to change. You can click the arrows next to any message to see more details about the necessary changes.

![Console output](images/migration-console.gif)

Every notice or warning message tells you what to change, including a list of all affected HTML elements. More complex changes are explained with examples that are easy to follow. The best way to migrate is to fix one component after another. That way you can see if the error messages are gone after a reload and also see the changes on your site.

### Warnings

Warnings highlight all CSS classes or JavaScript attributes which are not supported anymore or have changed in UIkit 3. These warnings have to be fixed to migrate your website to UIkit 3.

### Notices

Notices highlight potential issues that might not break your site. Some notices might not require a change at all. This is caused by the fact that some names from UIkit 2 still exist in UIkit 3, but now belong to a different component or carry different semantics. This can't be detected by the selectors we use to determine if this is a correct markup, so you need to take a look into it and need to decide if you already have changed it or still need to fix it.
