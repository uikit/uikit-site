# Notification

<p class="uk-text-lead">Create toggleable notifications that fade out automatically.</p>

## Usage

The notification will not fade out but remain visible when you hover the message until you stop hovering. You can also close the notification by clicking it. To show notifications, the component provides a simple JavaScript API. The following code snippet gets you started.

### JavaScript

```js
UIkit.notification({
    message: 'my-message!',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
});

// Shortcuts
UIkit.notification('My message');
UIkit.notification('My message', status);
UIkit.notification('My message', { /* options */ });
```

```example
<button class="demo uk-button uk-button-default" type="button" data-message="Notification message">Click me</button>
```

***

## HTML message

You can use HTML inside your notification message, like an icon from the Icon component.

```js
UIkit.notification("<span uk-icon='icon: check'></span> Message");
```

```example
<button class="uk-button demo uk-button-default" type="button" data-message="<span uk-icon='icon: check'></span> Message with an icon">With icon</button>
```

***

## Position

Add one of the following parameters to adjust the notification's position to different corners.


```js
UIkit.notification("...", {pos: 'top-right'})
```

| Position | Code | Example |
| --- | --- | --- |
| `top-left` | `UIkit.notification("...", {pos: 'top-left'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Top Left..." data-pos="top-left">Top Left</button> |
| `top-center` | `UIkit.notification("...", {pos: 'top-center'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Top Center..." data-pos="top-center">Top Center</button> |
| `top-right` | `UIkit.notification("...", {pos: 'top-right'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Top Right..." data-pos="top-right">Top Right</button> |
| `bottom-left` | `UIkit.notification("...", {pos: 'bottom-left'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Bottom Left..." data-pos="bottom-left">Bottom Left</button> |
| `bottom-center` | `UIkit.notification("...", {pos: 'bottom-center'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Bottom Center..." data-pos="bottom-center">Bottom Center</button> |
| `bottom-right` | `UIkit.notification("...", {pos: 'bottom-right'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Bottom Right..." data-pos="bottom-right">Bottom Right</button> |


***

## Status

A notification can be styled by adding a status to the message to indicate a primary, success, warning or a danger status.

```js
UIkit.notification("...", {status: 'primary'})
```

| Status | Code | Example |
| --- | --- | --- |
| `primary` | `UIkit.notification("...", {status:'primary'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Primary message..." data-status="primary">Primary</button> |
| `success` | `UIkit.notification("...", {status:'success'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Success message..." data-status="success">Success</button> |
| `warning` | `UIkit.notification("...", {status:'warning'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Warning message..." data-status="warning">Warning</button> |
| `danger` | `UIkit.notification("...", {status:'danger'})` | <button class="uk-button uk-button-default uk-button-small demo uk-width-1-1" type="button" data-message="Danger message..." data-status="danger">Danger</button> |

***

## Close all

You can close all open notifications by calling `UIkit.notification.closeAll()`.

```example
<button class="uk-button uk-button-default close">Close all</button>
```


<script src="../assets/uikit/dist/js/components/notification.min.js"></script>
<script>
jQuery('button.demo').on('click', function() {
    UIkit.notification($(this).data());
});
jQuery('button.close').on('click', function() {
    UIkit.notification.closeAll();
});
</script>

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Option     | Value   | Default    | Description                                                         |
|------------|---------|------------|---------------------------------------------------------------------|
| `message ` | String  | false      | Notification message to show.                                       |
| `status`   | String  | null       | Notification status color.                                          |
| `timeout`  | Integer | 5000       | Visibility duration until a notification disappears.                |
| `group`    | String  | null       | Useful, if you want to close all notifications in a specific group. |
| `pos`      | String  | top-center | Display corner.                                                     |
