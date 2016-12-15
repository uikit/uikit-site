# Modal

<p class="uk-text-lead">Create modal dialogs with different styles and transitions.</p>

## Usage

The Modal component consists of an overlay, a dialog and a close button. You can use any element to toggle a modal dialog. An `<a>` element needs to be linked to the modal's id. To enable the necessary JavaScript, add the `uk-toggle` attribute. If you are using another element, like a button, just add the `uk-toggle="target: #ID"` attribute to target the id of the modal container.

| Class/Attribute    | Description                                                                                                                                                                                                                                                       |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-modal`        | Add this class to a `<div>` element to create the dialog container and an overlay that blanks out the page. It is important to add an `id` to indicate the element for toggling.                                                                                    |
| `.uk-modal-dialog` | Add this class to a child `<div>` element to create the dialog box.                                                                                                                                                                                               |
| `.uk-modal-close`  | Add this class to an `<a>` or `<button>` element to create a close button within the dialog box. We recommend adding the `uk-close` attribute from the [Close component](close.md) to give the button a proper styling, though you can also use text or an image. |
| `.uk-modal-close-outside`   | Add this class to place the close button outside the modal.                                                                                                                                                                                           |

```html
<!-- This is a button toggling the modal -->
<button uk-toggle="target: #my-id"></button>

<!-- This is the modal -->
<div id="my-id" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-outside" uk-close></button>
        ...
    </div>
</div>
```

```example
<!-- This is a button toggling the modal -->
<button class="uk-button uk-button-default uk-margin-small-right" uk-toggle="target: #modal-example">Open from button</button>

<!-- This is an anchor toggling the modal -->
<a href="#modal-example" uk-toggle>Open from link</a>

<!-- This is the modal -->
<div id="modal-example" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <img src="../docs/images/size1.jpg" alt="">
    </div>
</div>
```

***

### Center modal

To center the modal dialog, add the `center: true` parameter to the `uk-modal` attribute.

```html
<div id="my-id" uk-modal="center: true"></div>
```

```example
<a class="uk-button uk-button-default" href="#modal-center" uk-toggle>Open</a>

<div id="modal-center" uk-modal="center: true">
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <img src="../docs/images/size1.jpg" alt="">
    </div>
</div>
```

***

## Header, body and footer

To divide the modal into different content sections, use the following classes.

| Class              | Description                                                             |
|--------------------|-------------------------------------------------------------------------|
| `.uk-modal-header` | Add this class to a `<div>` element to create the modal header.         |
| `.uk-modal-title`  | Add this class to a heading element to create the modal title.          |
| `.uk-modal-body`   | Add this class to create padding between the the modal and its content. |
| `.uk-modal-footer` | Add this class to a `<div>` element to create the modal footer.         |

```html
<div id="my-id" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title"></h2>
        </div>
        <div class="uk-modal-body"></div>
        <div class="uk-modal-footer"></div>
    </div>
</div>
```

```example
<a class="uk-button uk-button-default" href="#modal-sections" uk-toggle>Open</a>

<div id="modal-sections" uk-modal="center: true">
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title">Modal Title</h2>
        </div>
        <div class="uk-modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-primary" type="button">Save</button>
        </div>
    </div>
</div>
```

***

## Caption

You can also create a caption that will be placed outside the modal. Just add the `.uk-modal-caption` class to a `<div>` element inside the modal dialog.

```html
<div uk-modal>
    <div class="uk-modal-dialog">
        <div class="uk-modal-body"></div>
        <div class="uk-modal-caption"></div>
    </div>
</div>
```

```example
<a class="uk-button uk-button-default" href="#modal-caption" uk-toggle>Open</a>

<div id="modal-caption" uk-modal="center: true">
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-body">
            <h2 class="uk-modal-title">Modal Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="uk-modal-caption">Caption</div>
    </div>
</div>
```

***

## Container modifier

Add the `.uk-modal-container` class to extend the modal dialog to fill the default [container](utility.md) width.

```html
<div id="my-id" class="uk-modal-container" uk-modal>...</div>
```

```example
<a class="uk-button uk-button-default" href="#modal-container" uk-toggle>Open</a>

<div id="modal-container" class="uk-modal-container" uk-modal="center: true">
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Headline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
```

***

## Full modifier

To create a modal, that fills the entire page, add the `.uk-modal-full` class. It is also recommended to add the `.uk-modal-close-full` class to the close button, so that it adapts its styling.

```html
<div id="my-id" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full" uk-close></button>
    </div>
</div>
```

Using the [grid](grid.md) and [width](width.md) classes, you can create a nice, split fullscreen modal.

```example
<a class="uk-button uk-button-default" href="#modal-full" uk-toggle>Open</a>

<div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div class="uk-background-cover" style="background-image: url('../docs/images/photo.jpg');" uk-height-viewport></div>
            <div class="uk-padding-large">
                <h1>Headline</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</div>
```

***

## Lightbox modifier

To create a lightbox-like modal dialog, for example to display images, just add the `.uk-modal-lightbox` class. The close button will adjust its position automatically to the dialog.

```html
<div id="my-id" class="uk-modal-lightbox" uk-modal="center: true">...</div>
```

```example
<a class="uk-button uk-button-default" href="#modal-lightbox" uk-toggle>Open</a>

<div id="modal-lightbox" class="uk-modal-lightbox" uk-modal="center: true">
    <button class="uk-modal-close-default" type="button" uk-close></button>
    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle">
        <img src="../docs/images/size1.jpg" alt="">
    </div>
    <div class="uk-modal-bar uk-position-bottom">
        Caption
    </div>
</div>
```


***

## Modal dialogs

The component comes with a number of prepared modal dialogs that you can use for user interaction. You can call the dialog directly from JavaScript and use callback functions to process the user input.

| Code | Description |
|------|--------------|
| `UIkit.modal.alert('UIkit alert!')` | Show an alert box with one button. |
| `UIkit.modal.confirm('UIkit confirm!')` | Show a confirm dialog with your message and two buttons. |
| `UIkit.modal.prompt('Name:', 'Your name')` | Show a dialog asking for a text input. |
| `UIkit.modal.dialog('<p>UIkit dialog!</p>');` | Show dialog with any HTML content. |

To process the user input, the modal uses a promise based interface which provides a `then()` function to register your callback functions.

```js
UIkit.modal.confirm('UIkit confirm!').then(function() {
    console.log('Confirmed.')
}, function () {
    console.log('Rejected.')
});
```

```example
<p uk-margin>
    <a id="modal-dialog" class="uk-button uk-button-default" href="#">Dialog</a>
    <a id="modal-alert" class="uk-button uk-button-default" href="#">Alert</a>
    <a id="modal-confirm" class="uk-button uk-button-default" href="#">Confirm</a>
    <a id="modal-prompt" class="uk-button uk-button-default" href="#">Prompt</a>
    <script>
    (function () {

            $('#modal-dialog').on('click', function (e) {
                e.preventDefault();
                $(this).blur();
                UIkit.modal.dialog('<p class="uk-modal-body">UIkit dialog!</p>');
            });

            $('#modal-alert').on('click', function (e) {
                e.preventDefault();
                $(this).blur();
                UIkit.modal.alert('UIkit alert!').then(function() {
                    console.log('Alert closed.')
                });
            });

            $('#modal-confirm').on('click', function (e) {
                e.preventDefault();
                $(this).blur();
                UIkit.modal.confirm('UIkit confirm!').then(function() {
                    console.log('Confirmed.')
                }, function () {
                    console.log('Rejected.')
                });
            });

            $('#modal-prompt').on('click', function (e) {
                e.preventDefault();
                $(this).blur();
                UIkit.modal.prompt('Name:', 'Your name').then(function(name) {
                    console.log('Prompted:', name)
                });
            });

        })();
    </script>
</p>
```

***

## Component options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `center` | Boolean | `false` | Center the modal. |
| `escClose` | Boolean | `true` | Close the modal when the _Esc_ key is pressed. |
| `bgClose` | Boolean | `true` | Close the modal when the background is clicked. |
| `stack` | Boolean | `false` | Stack modals, when more than one is open. By default, the previous modal will be hidden. |
