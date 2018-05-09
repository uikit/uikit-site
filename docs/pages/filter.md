# Filter

<p class="uk-text-lead">Filter or sort items in multi-column and masonry grids or any given layout by category, date or other meta data.</p>

The Filter component is often used together with the [Grid component](grid.md), especially the masonry grid, but it's not bound to it. Any layout can be filtered or sorted not matter how the items are positioned. Items fade and move with smooth transitions between the different filtering and sorting states.

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

Next, we need to define the meta data for each layout item, for example which category the item belongs to. Use any HTML class or attribute to do so.

To apply a filter control, add the `uk-filter-control` attribute and to define the meta data which should be filtered use the `filter: SELECTOR` option. The selector can be any CSS selector like a HTML class or attribute you define for the layout items.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="filter: [data-color='blue']"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="blue"></li>
    </ul>

</div>
```
If `filter` is the only option in the attribute value, you can also use `uk-filter-control="SELECTOR"`. Here is an example using HTML classes.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control=".filter-blue"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li class="filter-blue"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-pill">
        <li uk-filter-control="[data-color='white']"><a href="#">White</a></li>
        <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
        <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
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
        <li class="uk-active" uk-filter-control="[data-color='blue']"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="blue"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control="[data-color='white']"><a href="#">White</a></li>
        <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
        <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
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
        <li data-color="blue"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control><a href="#">All</a></li>
        <li uk-filter-control="[data-color='white']"><a href="#">White</a></li>
        <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
        <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```

***

## Multiple Filters

Define different types of meta data and add any number of controls to filter them. The filter controls are exclusive, meaning just one criteria is filtered at a time.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="[data-color='blue']"><a href="#"></a></li>
    </ul>

    <ul>
        <li uk-filter-control="[data-size='small']"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="blue" data-size="small"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <div class="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>
        <div>
            <ul class="uk-subnav uk-subnav-pill" uk-margin>
                <li class="uk-active" uk-filter-control><a href="#">All</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-pill" uk-margin>
                <li uk-filter-control="[data-color='white']"><a href="#">White</a></li>
                <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
                <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-pill" uk-margin>
                <li uk-filter-control="[data-size='small']"><a href="#">Small</a></li>
                <li uk-filter-control="[data-size='medium']"><a href="#">Medium</a></li>
                <li uk-filter-control="[data-size='large']"><a href="#">Large</a></li>
            </ul>
        </div>
    </div>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        <li data-color="white" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="small">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white" data-size="medium">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white" data-size="small">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="medium">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="large">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="large">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```

***

## Groups

To filter items by multiple criterias at the same time, the filter controls need to be grouped. Just add the `group: NAME` option to the `uk-filter-control` attribute and define group names for the meta data.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="filter: [data-color='blue']; group: color"><a href="#"></a></li>
        <li uk-filter-control="filter: [data-color='white']; group: color"><a href="#"></a></li>
    </ul>

    <ul>
        <li uk-filter-control="filter: [data-size='small']; group: size"><a href="#"></a></li>
        <li uk-filter-control="filter: [data-size='large']; group: size"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="blue" data-size="small"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <div class="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>
        <div>
            <ul class="uk-subnav uk-subnav-pill" uk-margin>
                <li class="uk-active" uk-filter-control><a href="#">All</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-pill" uk-margin>
                <li uk-filter-control="filter: [data-color='white']; group: data-color"><a href="#">White</a></li>
                <li uk-filter-control="filter: [data-color='blue']; group: data-color"><a href="#">Blue</a></li>
                <li uk-filter-control="filter: [data-color='black']; group: data-color"><a href="#">Black</a></li>
            </ul>
        </div>
        <div>
            <ul class="uk-subnav uk-subnav-pill" uk-margin>
                <li uk-filter-control="filter: [data-size='small']; group: size"><a href="#">Small</a></li>
                <li uk-filter-control="filter: [data-size='medium']; group: size"><a href="#">Medium</a></li>
                <li uk-filter-control="filter: [data-size='large']; group: size"><a href="#">Large</a></li>
            </ul>
        </div>
    </div>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        <li data-color="white" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="small">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white" data-size="medium">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white" data-size="small">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="medium">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="large">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="large">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white" data-size="large">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue" data-size="medium">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black" data-size="small">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
```

***

## Sorting

To sort items alphabetically, just add the `sort: ATTRIBUTE` option to the `uk-filter-control` attribute and define by which meta data attribute the items shoud be sorted. By default, items are sorted ascending. Add the `order: desc` to sort items descending.

```html
<div uk-filter="target: .js-filter">

    <ul>
        <li uk-filter-control="sort: data-color"><a href="#"></a></li>
        <li uk-filter-control="sort: data-color; order: desc"><a href="#"></a></li>
    </ul>

    <ul class="js-filter">
        <li data-color="blue"></li>
    </ul>

</div>
```

```example
<div uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control="sort: data-date"><a href="#">Ascending</a></li>
        <li uk-filter-control="sort: data-date; order: desc"><a href="#">Descending</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        <li data-date="2016-06-01">
            <div class="uk-card uk-card-default uk-card-body">2016-06-01</div>
        </li>
        <li data-date="2016-12-13">
            <div class="uk-card uk-card-primary uk-card-body">2016-12-13</div>
        </li>
        <li data-date="2017-05-20">
            <div class="uk-card uk-card-default uk-card-body">2017-05-20</div>
        </li>
        <li data-date="2017-09-17">
            <div class="uk-card uk-card-default uk-card-body">2017-09-17</div>
        </li>
        <li data-date="2017-11-03">
            <div class="uk-card uk-card-secondary uk-card-body">2017-11-03</div>
        </li>
        <li data-date="2017-12-25">
            <div class="uk-card uk-card-secondary uk-card-body">2017-12-25</div>
        </li>
        <li data-date="2018-01-30">
            <div class="uk-card uk-card-primary uk-card-body">2018-01-30</div>
        </li>
        <li data-date="2018-02-01">
            <div class="uk-card uk-card-secondary uk-card-body">2018-02-01</div>
        </li>
        <li data-date="2018-03-11">
            <div class="uk-card uk-card-primary uk-card-body">2018-03-11</div>
        </li>
        <li data-date="2018-06-13">
            <div class="uk-card uk-card-default uk-card-body">2018-06-13</div>
        </li>
        <li data-date="2018-10-27">
            <div class="uk-card uk-card-primary uk-card-body">2018-10-27</div>
        </li>
        <li data-date="2018-12-02">
            <div class="uk-card uk-card-secondary uk-card-body">2018-12-02</div>
        </li>
    </ul>

</div>
```

***

## Masonry Grid

A filter is often applied to a [Masonry](grid.md#masonry) grid. The filter transitions works perfect with any kind of layout. No matter how they are positioned. It works even with the [Parallax](grid.md#parallax) option from the grid.

Here is comprehensive example with a masonry grid.

```example
<div uk-filter="target: .js-filter">

    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">

            <div class="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>
                <div>
                    <ul class="uk-subnav uk-subnav-pill" uk-margin>
                        <li class="uk-active" uk-filter-control><a href="#">All</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="uk-subnav uk-subnav-pill" uk-margin>
                        <li uk-filter-control="[data-color='white']"><a href="#">White</a></li>
                        <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
                        <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="uk-subnav uk-subnav-pill" uk-margin>
                        <li uk-filter-control="[data-size='small']"><a href="#">Small</a></li>
                        <li uk-filter-control="[data-size='medium']"><a href="#">Medium</a></li>
                        <li uk-filter-control="[data-size='large']"><a href="#">Large</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="uk-width-auto uk-text-nowrap">


            <span class="uk-active" uk-filter-control="sort: data-date"><a class="uk-icon-link" href="#" uk-icon="icon: arrow-down"></a></span>
            <span uk-filter-control="sort: data-date; order: desc"><a class="uk-icon-link" href="#" uk-icon="icon: arrow-up"></a></span>

        </div>
    </div>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
        <li data-color="white" data-size="large" data-date="2016-06-01">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="blue" data-size="small" data-date="2016-12-13">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="500"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="white" data-size="medium" data-date="2017-05-20">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="700"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="white" data-size="small" data-date="2017-09-17">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="500"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="black" data-size="medium" data-date="2017-11-03">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="700"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="black" data-size="small" data-date="2017-12-25">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="500"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="blue" data-size="medium" data-date="2018-01-30">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="700"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="black" data-size="large" data-date="2018-02-01">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="blue" data-size="large" data-date="2018-03-11">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="white" data-size="large" data-date="2018-06-13">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="blue" data-size="medium" data-date="2018-10-27">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="700"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
        <li data-color="black" data-size="small" data-date="2018-12-02">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="500"></canvas>
                <div class="uk-position-center">Item</div>
            </div>
        </li>
    </ul>

</div>
```

***

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

| Option      | Value           | Default | Description                                          |
|:------------|:----------------|:--------|:-----------------------------------------------------|
| `target`    | String          | ''      | The targeted list on which to apply the filter to.   |
| `selActive` | String, Boolean | false   | A selector for the initially active filter controls. |

***

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

```js
UIkit.filter(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name           | Description                              |
|:---------------|:-----------------------------------------|
| `beforeFilter` | Fires before the filter is applied.      |
| `afterFilter`  | Fires after the filter has been applied. |
