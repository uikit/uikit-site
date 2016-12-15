# Migrate to UIkit 3

<p class="uk-text-lead">Migrate an existing UIkit 2 website to the new UIkit 3.</p>

## How to run the migration tool

The migration tool runs in your browser and lists all necessary changes for your pages inside the the browser's developer console. There are three ways available to run the script on your website: Via a bookmark, as a Chrome extension or by including a JavaScript file.

### 1. Browser bookmark

The easiest way to use the migration tool is via a bookmark in your browser. You can then run the script on any page that you navigate to by simply clicking the bookmark. Just drag the following link into your browser's bookmark section.

Drag into your bookmarks <span uk-icon="icon: arrow-right"></span> <a class="uk-button uk-button-primary" href="javascript: (function () { var script = document.createElement('script'); script.setAttribute('src', 'https://getuikit.com/migrate.min.js'); document.body.appendChild(script); }());">UIkit 3 Migration</a>

Alternatively, you can manually create a bookmark with the following code as its URL.

```js
javascript: (function () {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://getuikit.com/migrate.min.js');
    document.body.appendChild(script);
}());
```

### 2. Chrome Extension

For Google Chrome users, the migration tool is also available as a chrome extension which is downloadable here. ( **Link hinzufügen** ) To add this extension to your browser, go into **Settings / Extensions** and enable the developer mode. Now you can load the folder into your chrome browser via the _load unpacked extension_ by setting the path to the migration extensions folder. After that, you will see the small UIkit icon next to your other extensions at the top of your browser. By clicking on the icon, you can activate and deactivate it. If activated you will see a small red dot at the bottom of the icon which indicates, that the migration tool is running.

### 3. HTML integration

You can also run the migration tool by loading the needed JavaScript on your website. This way the migration script will always be loaded on your website. Remember to remove this when you have completed the migration. Add the following line just before the closing `</body>` tag.

```html
<script src="https://getuikit.com/migrate.min.js"></script>
```

***

## Usage

To start the migration, replace the UIkit 2 of your website with UIkit 3 and run the migration tool using one of the solutions listed above. Open the developer console of your browser, which will now list a number of warnings and notices to tell you what to change. These follow the following structure:

```html
- Warnings in Component XYZ
  - Warning / Notice Message
    - List of HTML elements which need to be changed
      - further information (optional)
    - an example (optional)
    - link to the new docs of the component
  - Warning / Notice Message
    - ...
- Warnings in Component ABC
  - ...
```

![Console output](../docs/images/migration-console.gif)

Every notice or warning message tells you what to change, including a list of all affected HTML elements. More complex changes are explained with examples that are easy to follow. The best way to migrate is to fix one component after another. That way you can see if the error messages are gone after a reload and also see the changes on your site.

### Warnings

Warnings highlight all CSS classes or JavaScript attributes which are not supported anymore or have changed in UIkit 3. These warnings have to be fixed to migrate your website to UIkit 3.

### Notices

Notices highlight potential issues that might not break your site. Some notices might not require a change at all. This is caused by the fact that some names from UIkit 2 still exist in UIkit 3, but now belong to a different component or carry different semantics. This can't be detected by the selectors we use to determine if this is a correct markup, so you need to take a look into it and need to decide if you already have changed it or still need to fix it.
