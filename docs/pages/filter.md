# Filter

<p class="uk-text-lead">Filter or order items in multi-column and masonry grids or any given layout by category, date or other meta data.</p>

The Filter component is often used together with the [Grid component](grid.md), especially the masonry grid, but it's not bound to it. Any layout can be filtered or sorted not matter how the items are positioned. Items fade and move with smooth transitions between the different filter and order states.

***

## Usage

To apply this component, add the `uk-filter="target: SELECTOR"` attribute to a container element which contains the filter controls and the targeted layout items. Use the `target: SELECTOR` option to select the element containing the layout items. Create also a list of filter controls.

```html
<div uk-filter="target: .js-filter">

    <!-- Filter controls -->
    <ul>
        <li><a href="#"></a></li>
    </ul>

    <!-- Layout items -->
    <ul class="js-filter">
        <li></li>
    </ul>

</div>
```

Next, we need to define the meta data for each layout item, for example which category the item belongs to. Use any HTML class or attribute to do so. Add the `uk-filter-control="SELECTOR"` attribute to a filter control and define the selector to select meta data the control should filter, meangin the HTML class or attribute you defined for the layout item.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="[data-color='red']"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="red"></li>
    </ul>

</div>
```

Here is an example using HTML classes.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control=".filter-red"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li class="filter-red"></li>
    </ul>

</div>
```

To reset the filter and target all items use the `uk-filter-control` without any specified selector.

```example
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="[data-color='red']"><a href="#">Red</a></li>
        <li uk-filter-control="[data-color='green']"><a href="#">Green</a></li>
        <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-4@m uk-light" uk-grid>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">1</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">2</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">3</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">4</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">5</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">6</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">7</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">8</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">9</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">10</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">11</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">12</div>
        </li>
    </ul>

</div>
```

The Filter component comes without any styles, which allows you to use any of the other UIkit component to create the filter controls and layout items. For example the [Nav](nav.md), [Subnav](subnav.md) and [Tab](tab.md) components can be used to style the filter controls. And the [Grid component](grid.md) is used to create the item layout.

***

## Active state

Add the `uk-active` class to filter control and the filter will be applied initially.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li class="uk-active" uk-filter-control="[data-color='red']"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="red"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul>
        <li class="uk-active" uk-filter-control="[data-color='red']"><a href="#">Red</a></li>
        <li uk-filter-control="[data-color='green']"><a href="#">Green</a></li>
        <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-4@m uk-light">
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">1</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">2</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">3</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">4</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">5</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">6</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">7</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">8</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">9</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">10</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">11</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">12</div>
        </li>
    </ul>

</div>
```

***

## Reset filter

To reset the filter and target all items use the `uk-filter-control` without any specified selector.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="red"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul>
        <li class="uk-active" uk-filter-control><a href="#">All</a></li>
        <li uk-filter-control="[data-color='red']"><a href="#">Red</a></li>
        <li uk-filter-control="[data-color='green']"><a href="#">Green</a></li>
        <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-4@m uk-light" uk-grid>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">1</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">2</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">3</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">4</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">5</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">6</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">7</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">8</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">9</div>
        </li>
        <li data-color="blue">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">10</div>
        </li>
        <li data-color="red">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">11</div>
        </li>
        <li data-color="green">
            <div class="uk-panel uk-flex uk-flex-center uk-flex-middle uk-h2">12</div>
        </li>
    </ul>

</div>
```