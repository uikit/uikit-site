# Article

<p class="uk-text-lead">Create articles within your page.</p>

## Usage

The Article component consists of the article itself, a title and meta text.

| Class               | Description                                                                                                |
|---------------------|------------------------------------------------------------------------------------------------------------|
| `.uk-article`       | Add this class to define the Article component. Typically you would use an `<article>` element for this.   |
| `.uk-article-title` | Add this class to a heading to create an article title. Typically you would use a `<h1>` element for this. |
| `.uk-article-meta`  | Add this class to a paragraph that contains meta text about your article.                                  |

```html
<article class="uk-article">
    <h1 class="uk-article-title"></h1>
    <p class="uk-article-meta"></p>
</article>
```

Use the `.uk-text-lead` class from the [Text component](text.md) to create a leading paragraph.

```example
<article class="uk-article">

    <h1 class="uk-article-title"><a class="uk-link-reset" href="">Heading</a></h1>

    <p class="uk-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>

    <p class="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="uk-grid-small uk-child-width-auto" uk-grid>
        <div>
            <a class="uk-button uk-button-text" href="#">Read more</a>
        </div>
        <div>
            <a class="uk-button uk-button-text" href="#">5 Comments</a>
        </div>
        <button class="uk-button uk-button-text" type="button" uk-toggle="target: #toggle-readMore"></button>
        <p id="toggle-readMore">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ante metus dictum at tempor commodo ullamcorper. Tempus egestas sed sed risus. Quam viverra orci sagittis eu volutpat. Eget aliquet nibh praesent tristique magna sit. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Sit amet purus gravida quis blandit turpis cursus in. Neque ornare aenean euismod elementum nisi. Lacinia quis vel eros donec ac. Neque sodales ut etiam sit amet nisl purus. Placerat in egestas erat imperdiet sed euismod nisi porta lorem.<br/><br/>
            Condimentum lacinia quis vel eros donec ac. Sit amet justo donec enim diam vulputate ut pharetra sit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Interdum velit euismod in pellentesque massa placerat. Leo a diam sollicitudin tempor id eu. Massa eget egestas purus viverra accumsan in nisl. Nunc lobortis mattis aliquam faucibus purus in. In ornare quam viverra orci sagittis. Elementum facilisis leo vel fringilla est ullamcorper. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Sit amet purus gravida quis blandit turpis. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Egestas congue quisque egestas diam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Amet nulla facilisi morbi tempus iaculis urna. Pellentesque diam volutpat commodo sed. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.<br/><br/>
            Sem nulla pharetra diam sit amet nisl suscipit. Dignissim sodales ut eu sem integer vitae. Eu turpis egestas pretium aenean pharetra magna. Id interdum velit laoreet id donec ultrices tincidunt. Tempus iaculis urna id volutpat lacus laoreet. Luctus accumsan tortor posuere ac. A iaculis at erat pellentesque adipiscing. Odio pellentesque diam volutpat commodo sed. Massa sapien faucibus et molestie ac feugiat sed. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Eget arcu dictum varius duis at consectetur lorem. Blandit volutpat maecenas volutpat blandit aliquam. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Gravida cum sociis natoque penatibus. Nulla facilisi etiam dignissim diam quis enim lobortis. Pulvinar sapien et ligula ullamcorper malesuada proin libero.<br/><br/>
            Sed vulputate mi sit amet. Placerat duis ultricies lacus sed turpis tincidunt. In aliquam sem fringilla ut morbi tincidunt augue interdum. Mollis aliquam ut porttitor leo a diam sollicitudin. Nec ullamcorper sit amet risus nullam eget felis eget. Imperdiet nulla malesuada pellentesque elit. Accumsan tortor posuere ac ut consequat. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Eu nisl nunc mi ipsum faucibus vitae aliquet. Morbi tincidunt ornare massa eget egestas. Aliquam sem fringilla ut morbi. Egestas dui id ornare arcu odio ut. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget.<br/><br/>
            In tellus integer feugiat scelerisque varius morbi enim nunc. Phasellus egestas tellus rutrum tellus. Pretium quam vulputate dignissim suspendisse in est. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Cras adipiscing enim eu turpis egestas. Amet mattis vulputate enim nulla aliquet porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada. Et leo duis ut diam quam nulla porttitor. Ac felis donec et odio pellentesque diam volutpat commodo sed. Massa vitae tortor condimentum lacinia quis. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Eget dolor morbi non arcu risus quis varius. Ut morbi tincidunt augue interdum velit. Amet nisl suscipit adipiscing bibendum est. Donec ac odio tempor orci dapibus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Semper feugiat nibh sed pulvinar.
        </p>
    </div>

</article>
```
