<template>
  <div class="uk-navbar-container tm-navbar-container" uk-sticky="media: 960">
    <div class="uk-container uk-container-expand">
      <nav class="uk-navbar">
        <div class="uk-navbar-left">
          <router-link class="uk-navbar-item uk-logo" to="/"><canvas class="uk-margin-small-right" width="28" height="34" uk-svg src="./images/uikit-logo.svg"></canvas>UIkit
          </router-link>
        </div>

        <div class="uk-navbar-center uk-visible@m">
          <div class="uk-width-expand">
            <form id="search-form" action="">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
                <input v-model="query" class="uk-input uk-width-1-1 search-fld" :items="items" type="search" placeholder="Search Components" autofocus/>
                <div uk-dropdown="mode: click">
                  <div v-if="query">
                    <ul v-for="(uiComponent, i) in searchComponents" :key="i" class="uk-list">
                      <li>
                        <a style="padding-bottom: 0px" :href="uiComponent.src">
                          <h6>{{ uiComponent.title }}</h6>
                        </a>
                        <small>{{ uiComponent.description }}</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <router-link to="/pro" tag="li"><a>Pro</a></router-link>
            <li><a href="docs/introduction">Documentation</a></li>
            <router-link to="/changelog" tag="li"><a>Changelog</a></router-link>
          </ul>

          <div class="uk-navbar-item uk-visible@m">
            <router-link class="uk-button uk-button-default tm-button-default uk-icon" to="/download" active-class="page-active">Download<canvas uk-icon="download" width="20" height="20"></canvas>
            </router-link>
          </div>

          <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon href="#offcanvas" uk-toggle></a>

        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptionLimit: 60,
      uiComponents: [
        {
          title: "Accordion",
          description: "Create a list of items that can be shown individually by clicking an item's header.",
          src: "/docs/accordion"
        },
        {
          title: "Alert",
          description: "Display success, warning and error messages.",
          src: "/docs/alert"
        },
        {
          title: "Align",
          description: "Control the alignment of inline elements depending on the viewport size.",
          src: "/docs/align"
        },
        {
          title: "Animation",
          description: "A collection of smooth animations to use within your page.",
          src: "/docs/animation"
        },
        {
          title: "Article",
          description: "Create articles within your page.",
          src: "/docs/article"
        },
        {
          title: "Background",
          description: "A collection of utility classes to add different backgrounds to elements.",
          src: "/docs/background"
        },
        {
          title: "Badge",
          description: "Easily create nice looking notification badges.",
          src: "/docs/badge"
        },
        {
          title: "Base",
          description: "This component provides the default style for all HTML elements.",
          src: "/docs/base"
        },
        {
          title: "Breadcrumb",
          description: "Create breadcrumbs to show users their location within a website.",
          src: "/docs/breadcrumb"
        },
        {
          title: "Button",
          description: "Easily create nice looking buttons, which come in different styles.",
          src: "/docs/button"
        },
        {
          title: "Card",
          description: "Create layout boxes with different styles.",
          src: "/docs/card"
        },
        {
          title: "Close",
          description: "Create a close icon that can be combined with different components.",
          src: "/docs/close"
        },
        {
          title: "Column",
          description: "Display your content in multiple text columns without having to split it in several containers.",
          src: "/docs/column"
        },
        {
          title: "Comment",
          description: "Includes styles for comments, for example for a blog section on your site.",
          src: "/docs/comment"
        },
        {
          title: "Container",
          description: "This component allows you to align and center your page content.",
          src: "/docs/container"
        },
        {
          title: "Countdown",
          description: "Create a simple countdown timer.",
          src: "/docs/countdown"
        },
        {
          title: "Cover",
          description: "Expand images, videos or iframes to cover their entire container and place your own content on top.",
          src: "/docs/Cover"
        },
        {
          title: "Description list",
          description: "Easily create nice looking description lists, which come in different styles.",
          src: "/docs/description-list"
        },
        {
          title: "Divider",
          description: "Create dividers to separate content and apply different styles to them.",
          src: "/docs/divider"
        },
        {
          title: "Dotnav",
          description: "Create a dot navigation to operate slideshows or to scroll to different page sections.",
          src: "/docs/dotnav"
        },
        {
          title: "Drop",
          description: "Position any element in relation to another element.",
          src: "/docs/drop"
        },
        {
          title: "Dropdown",
          description: "Defines different styles for a toggleable dropdown.",
          src: "/docs/dropdown"
        },
        {
          title: "Filter",
          description: "Filter or sort items in any given layout by meta data.",
          src: "/docs/filter"
        },
        {
          title: "Flex",
          description: "Utilize the power of flexbox to create a wide range of layouts.",
          src: "/docs/flex"
        },
        {
          title: "Form",
          description: "Easily create nice looking forms with different styles and layouts.",
          src: "/docs/form"
        },
        {
          title: "Grid",
          description: "Create a fully responsive, fluid and nestable grid layout.",
          src: "/docs/grid"
        },
        {
          title: "Heading",
          description: "Define different styles for headings.",
          src: "/docs/heading"
        },
        {
          title: "Height",
          description: "Define the height of elements depending on the viewport or match the heights of different elements.",
          src: "/docs/height"
        },
        {
          title: "Icon",
          description: "Place scalable vector icons anywhere in your content.",
          src: "/docs/icon"
        },
        {
          title: "Iconnav",
          description: "Create a navigation consisting of icons.",
          src: "/docs/iconnav"
        },
        {
          title: "Image",
          description: "Speed up page loading times and decrease traffic by only loading images as they enter the viewport.",
          src: "/docs/image"
        },
        {
          title: "Inverse",
          description: "Inverse the style of any component for light or dark backgrounds.",
          src: "/docs/inverse"
        },
        {
          title: "Label",
          description: "Indicate important notes and highlight parts of your content.",
          src: "/docs/label"
        },
        {
          title: "Leader",
          description: "Create dot leaders for pricing menus or tables of contents.",
          src: "/docs/leader"
        },
        {
          title: "Lightbox",
          description: "Create a responsive lightbox gallery with images and videos.",
          src: "/docs/lightbox"
        },
        {
          title: "Link",
          description: "Define different styles to integrate links into specific content.",
          src: "/docs/link"
        },
        {
          title: "List",
          description: "Easily create nice looking lists, which come in different styles.",
          src: "/docs/list"
        },
        {
          title: "Margin",
          description: "A collection of utility classes to add spacing between elements.",
          src: "/docs/margin"
        },
        {
          title: "Marker",
          description: "Create a marker icon that can be displayed on top of images.",
          src: "/docs/marker"
        },
        {
          title: "Modal",
          description: "Create modal dialogs with different styles and transitions.",
          src: "/docs/modal"
        },
        {
          title: "Nav",
          description: "Defines different styles for list navigations.",
          src: "/docs/nav"
        },
        {
          title: "Navbar",
          description: "Create a navigation bar that can be used for your main site navigation.",
          src: "/docs/navbar"
        },
        {
          title: "Notification",
          description: "Create toggleable notifications that fade out automatically.",
          src: "/docs/notification"
        },
        {
          title: "Off-canvas",
          description: "Create an off-canvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.",
          src: "/docs/offcanvas"
        },
        {
          title: "Overlay",
          description: "Create an image overlay, which comes in different styles.",
          src: "/docs/overlay"
        },
        {
          title: "Padding",
          description: "A collection of utility classes to add spacing between elements and their content.",
          src: "/docs/padding"
        },
        {
          title: "Pagination",
          description: "Easily create a nice looking pagination to navigate through pages.",
          src: "/docs/pagination"
        },
        {
          title: "Parallax",
          description: "Animate CSS properties depending on the scroll position of the document.",
          src: "/docs/parallax"
        },
        {
          title: "Placeholder",
          description: "Create a placeholder space that can be used for uploading files via drag and drop.",
          src: "/docs/placeholder"
        },
        {
          title: "Position",
          description: "A collection of utility classes to position content.",
          src: "/docs/position"
        },
        {
          title: "Print",
          description: "Optimize your pages for legible and economic printing.",
          src: "/docs/print"
        },
        {
          title: "Progress",
          description: "Defines progress bars that indicate how far along a process is.",
          src: "/docs/progress"
        },
        {
          title: "Scroll",
          description: "Scroll smoothly when jumping to different sections on a page.",
          src: "/docs/scroll"
        },
        {
          title: "Scrollspy",
          description: "Trigger events and animations while scrolling your page.",
          src: "/docs/scrollspy"
        },
        {
          title: "Search",
          description: "Easily create a nice looking search.",
          src: "/docs/search"
        },
        {
          title: "Section",
          description: "Create horizontal layout sections with different background colors and styles.",
          src: "/docs/section"
        },
        {
          title: "Slidenav",
          description: "Defines a navigation with previous and next buttons to flip through slideshows.",
          src: "/docs/slidenav"
        },
        {
          title: "Slider",
          description: "Create a responsive carousel slider.",
          src: "/docs/slider"
        },
        {
          title: "Slideshow",
          description: "Create a responsive slideshow with images and videos.",
          src: "/docs/slideshow"
        },
        {
          title: "Sortable",
          description: "Create sortable grids and lists to rearrange the order of its elements.",
          src: "/docs/sortable"
        },
        {
          title: "Spinner",
          description: "Create an animated loading spinner.",
          src: "/docs/spinner"
        },
        {
          title: "Sticky",
          description: "Make elements remain at the top of the viewport, like a sticky navigation.",
          src: "/docs/sticky"
        },
        {
          title: "Subnav",
          description: "Defines different styles for a sub navigation.",
          src: "/docs/subnav"
        },
        {
          title: "SVG",
          description: "Inject inline SVG images into the page markup and style them with CSS.",
          src: "/docs/svg"
        },
        {
          title: "Switcher",
          description: "Dynamically transition through different content panes.",
          src: "/docs/switcher"
        },
        {
          title: "Tab",
          description: "Create a tabbed navigation with different styles.",
          src: "/docs/tab"
        },
        {
          title: "Table",
          description: "Easily create nice looking tables, which come in different styles.",
          src: "/docs/table"
        },
        {
          title: "Text",
          description: "A collection of utility classes to style text.",
          src: "/docs/text"
        },
        {
          title: "Thumbnav",
          description: "Create a flexible thumbnail navigation.",
          src: "/docs/thumbnav"
        },
        {
          title: "Tile",
          description: "Create layout boxes with different backgrounds that can be arranged seamlessly next to each other.",
          src: "/docs/"
        },
        {
          title: "Toggle",
          description: "Hide, switch or change the appearance of different contents through a toggle.",
          src: "/docs/toggle"
        },
        {
          title: "Tooltip",
          description: "Easily create a nice looking tooltip.",
          src: "/docs/tooltip"
        },
        {
          title: "Totop",
          description: "Create a simple to-top scroller.",
          src: "/docs/totop"
        },
        {
          title: "Transition",
          description: "Create smooth transitions between two states when hovering an element.",
          src: "/docs/transition"
        },
        {
          title: "Upload",
          description: "Upload files through a file input form element or a placeholder area.",
          src: "/docs/upload"
        },
        {
          title: "Utility",
          description: "A collection of useful utility classes to style your content.",
          src: "/docs/utility"
        },
        {
          title: "Video",
          description: "Start playing videos as they are shown or enter the viewport.",
          src: "/docs/video"
        },
        {
          title: "Visibility",
          description: "Use responsive visibility classes to display or hide elements on different devices.",
          src: "/docs/visibility"
        },
        {
          title: "Width",
          description: "Define the width of elements for different viewport sizes.",
          src: "/docs/width"
        },
      ],
      query: null,
    }
  },
  computed: {
    searchComponents() {
      return this.uiComponents.filter((uiComponent) => {
        return uiComponent.title.toLowerCase().match(this.query) || uiComponent.description.toLowerCase().match(this.query) || uiComponent.title.toUpperCase().match(this.query) || uiComponent.description.toUpperCase().match(this.query)
      })
    },
    items() {
      return this.uiComponents.map((uiComponent) => {
        const description =
            uiComponent.description.length > this.descriptionLimit
                ? uiComponent.description.slice(0, this.descriptionLimit) + "..."
                : uiComponent.description

        return Object.assign({}, uiComponent, { description })
      })
    }
  },
}
</script>

<style lang="css" scoped></style>
