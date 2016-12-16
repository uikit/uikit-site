# Icon

<p class="uk-text-lead">Place vector icons anywhere using an set of icons provided by UIkit.</p>

## Usage

To apply this component, add the `uk-icon` attribute to an `<i>` or `<span>` element. To display the actual icon, you need to append the `icon: ICON` parameter to the attribute. Et voilà, you have a vector icon, which inherits size and color just like your text does.

```html
<i uk-icon="icon: check"></i>
```

```example
<p><i uk-icon="icon: check"></i> A check icon</p>
<p><a href="#" class="uk-margin-small-right" uk-icon="icon: heart"></a>An icon in an anchor</p>
<button class="uk-button uk-button-default uk-margin-small"><span class="uk-margin-small-right" uk-icon="icon: tag"></span>A button with an icon</button>
```

***

## Ratio

Add the `ratio: 2` parameter to the `uk-icon` attribute to double its size – or any other number, depending on how big you want you icon to be.

```html
<i uk-icon="icon: check; ratio: 2"></i>
```

```example
<p><i class="uk-margin-small-right" uk-icon="icon: check"></i></p>
<p><i class="uk-margin-small-right" uk-icon="icon: check; ratio: 1.5"></i></p>
<p><i class="uk-margin-small-right" uk-icon="icon: check; ratio: 2"></i></p>
<p><i class="uk-margin-small-right" uk-icon="icon: check; ratio: 3"></i></p>
```

***

## Icon Link

To use an icon inside an anchor and reset the default link styling, add the `.uk-icon-link` class.

```html
<a href="" class="uk-icon-link" uk-icon="icon: heart"></a>
```

```example
<p><a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="icon: heart"></a> Hover the heart!</p>
```

***

## Icon Button

Use the modifier `.uk-icon-button` class on an `<a>` element to create an icon button, which can be used for social icons.

```html
<a href="" class="uk-icon-button" uk-icon="icon: twitter"></a>
```

```example
<a href="#" class="uk-icon-button uk-margin-small-right" uk-icon="icon: twitter"></a>
```

***

## Icon Image

You can also load an external image as an icon. Just add the `.uk-icon-image` class and a background image path.

```example
<p><span class="uk-icon uk-icon-image uk-margin-small-right" style="background-image: url(../docs/images/dark.jpg);"></span>Image</p>
```

***

## Icon Mapping

Here is an overview of all currently available icons. Over the time, we will keep adding new icons to the list.

<div class="uk-child-width-1-3@s" uk-grid>
    <div>

        <ul class="uk-list">

            <li><h4>App</h4></li>
            <li><span class="uk-margin-small-right" uk-icon="icon: home"></span> home</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: sign-in"></span> sign-in</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span> sign-out</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: user"></span> user</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: users"></span> users</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: lock"></span> lock</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: unlock"></span> unlock</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: settings"></span> settings</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: cog"></span> cog</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: nut"></span> nut</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: comment"></span> comment</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: commenting"></span> commenting</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: comments"></span> comments</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: hashtag"></span> hashtag</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: tag"></span> tag</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: cart"></span> cart</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: credit-card"></span> credit-card</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: mail"></span> mail</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: search"></span> search</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: location"></span> location</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: bookmark"></span> bookmark</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: code"></span> code</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: paint-bucket"></span> paint-bucket</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: camera"></span> camera</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: bell"></span> bell</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: bolt"></span> bolt</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: star"></span> star</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: heart"></span> heart</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: happy"></span> happy</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: lifesaver"></span> lifesaver</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: rss"></span> rss</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: social"></span> social</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: git-branch"></span> git-branch</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: git-fork"></span> git-fork</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: world"></span> world</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: calendar"></span> calendar</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: clock"></span> clock</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: history"></span> history</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: future"></span> future</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: pencil"></span> pencil</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: trash"></span> trash</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: move"></span> move</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: link"></span> link</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: question"></span> question</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: info"></span> info</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: warning"></span> warning</li>
        </ul>

    </div>
    <div>

        <ul class="uk-list">
            <li><span class="uk-margin-small-right" uk-icon="icon: image"></span> image</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> thumbnails</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: table"></span> table</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: list"></span> list</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: menu"></span> menu</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: grid"></span> grid</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: more"></span> more</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: more-vertical"></span> more-vertical</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: plus"></span> plus</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: plus-circle"></span> plus-circle</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: minus"></span> minus</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: minus-circle"></span> minus-circle</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: close"></span> close</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: check"></span> check</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: ban"></span> ban</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: refresh"></span> refresh</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: play"></span> play</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: play-circle"></span> play-circle</li>

            <li><h4 class="uk-margin-top">Devices</h4></li>
            <li><span class="uk-margin-small-right" uk-icon="icon: tv"></span> tv</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: desktop"></span> desktop</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: laptop"></span> laptop</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: tablet"></span> tablet</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: phone"></span> phone</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: tablet-landscape"></span> tablet-landscape</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: phone-landscape"></span> phone landscape</li>

            <li><h4 class="uk-margin-top">Storage</h4></li>
            <li><span class="uk-margin-small-right" uk-icon="icon: file"></span> file</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: copy"></span> copy</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: file-edit"></span> file-edit</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: folder"></span> folder</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: album"></span> album</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: push"></span> push</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: pull"></span> pull</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: server"></span> server</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: database"></span> database</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: cloud-upload"></span> cloud-upload</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: cloud-download"></span> cloud-download</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: download"></span> download</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: upload"></span> upload</li>

            <li><h4 class="uk-margin-top">Direction</h4></li>
            <li><span class="uk-margin-small-right" uk-icon="icon: reply"></span> reply</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: forward"></span> forward</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: expand"></span> expand</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: shrink"></span> shrink</li>

        </ul>

    </div>
    <div>

        <ul class="uk-list">

            <li><span class="uk-margin-small-right" uk-icon="icon: arrow-up"></span> arrow-up</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: arrow-down"></span> arrow-down</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: arrow-left"></span> arrow-left</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: arrow-right"></span> arrow-right</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: chevron-up"></span> chevron-up</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: chevron-down"></span> chevron-down</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: chevron-left"></span> chevron-left</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: chevron-right"></span> chevron-right</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: triangle-up"></span> triangle-up</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: triangle-down"></span> triangle-down</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: triangle-left"></span> triangle-left</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: triangle-right"></span> triangle-right</li>

            <li><h4 class="uk-margin-top">Editor</h4></li>
            <li><span class="uk-margin-small-right" uk-icon="icon: bold"></span> bold</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: italic"></span> italic</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: strikethrough"></span> strikethrough</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: video-camera"></span> video-camera</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: quote-right"></span> quote-right</li>

            <li><h4 class="uk-margin-top">Brands</h4></li>
            <li><span class="uk-margin-small-right" uk-icon="icon: behance"></span> behance</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: dribbble"></span> dribbble</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: facebook"></span> facebook</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: github-alt"></span> github-alt</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: github"></span> github</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: foursquare"></span> foursquare</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: tumblr"></span> tumblr</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: whatsapp"></span> whatsapp</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: soundcloud"></span> soundcloud</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: flickr"></span> flickr</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: google-plus"></span> google-plus</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: google"></span> google</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: linkedin"></span> linkedin</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: vimeo"></span> vimeo</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: instagram"></span> instagram</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: joomla"></span> joomla</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: pagekit"></span> pagekit</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: pinterest"></span> pinterest</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: twitter"></span> twitter</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: uikit"></span> uikit</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: wordpress"></span> wordpress</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: xing"></span> xing</li>
            <li><span class="uk-margin-small-right" uk-icon="icon: youtube"></span> youtube</li>
        </ul>

    </div>
</div>

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon.

| Option  | Value  | Default | Description          |
|---------|--------|---------|----------------------|
| `icon`  | String | ''      | The icon to display. |
| `ratio` | Number | 1       | The icon size ratio. |