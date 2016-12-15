# Base

<p class="uk-text-lead">This component provides the default style for all HTML elements.</p>

The Base component utilizes the famous [Normalize.css](http://necolas.github.io/normalize.css/) to render all elements consistently across all browsers and applies the default style like colors, margins, font-sizes and more.

**Note:** [Form](form.md), [Button](button.md) and [Table](table.md) elements are not normalized or styled by default. This happens in their specific compontent class. UIkit tries to apply as little style as possible to pain HTML elements to make it more robust and conflict free with 3rd party CSS.


## Text-level semantics

The following list gives you a short overview of the most commonly used text-level semantics and how to utilize them.

| Element  | Description                                                                                                 |
|----------|-------------------------------------------------------------------------------------------------------------|
| `<a>`      | Turn text into hypertext using the <a href="#">a element</a> or add the `.uk-link` class.                 |
| `<abbr>`   | Define an abbreviation using the <abbr title="Title Text">abbr element with a title</abbr>.               |
| `<b>`      | Create bold text with the <b>b element</b>.                                                               |
| `<cite>`   | Define the title of a work with the <cite>cite element</cite>.                                            |
| `<code>`   | Define inline code snippets using the <code>code element</code>.                                          |
| `<del>`    | Mark document changes as deleted text using the <del>del element</del>.                                   |
| `<dfn>`    | Create a definition term using the <dfn title="Defines a definition term">dfn element with a title</dfn>. |
| `<em>`     | Emphasize text using the <em>em element</em>.                                                             |
| `<i>`      | Set off part of a text by using the <i>i element</i>.                                                     |
| `<ins>`    | Mark document changes as inserted text using the <ins>ins element</ins>.                                  |
| `<kbd>`    | Use a <kbd>keybord input element</kbd> to display input in the browser's default monospace font.          |
| `<mark>`   | Highlight text with no semantic meaning using the <mark>mark element</mark>.                              |
| `<q>`      | Define inline quotations using a <q>q element <q>inside</q> a q element</q>.                              |
| `<s>`      | Define text with a strikethrough using the <s>s element</s>.                                              |
| `<samp>`   | Define sample output with a <samp>samp element</samp>.                                                    |
| `<small>`  | De-emphasize text for small print using the <small>small element</small>.                                 |
| `<span>`   | Define an inline-container using the <span>span element</span>.                                           |
| `<strong>` | Imply extra importance using the <strong>strong element</strong>.                                         |
| `<sub>`    | Define subscript text using the <sub>sub element.</sub>.                                                  |
| `<sup>`    | Define superscript text using the <sup>sup element.</sup>                                                 |
| `<u>`      | Define underlined text using the <u>u element</u>.                                                        |
| `<var>`    | Define a variable using the <var>var element</var>.                                                       |

***

## Embedded content

Images and other elements like `<audio>`, `<canvas>`, `<img>`, `<svg>` and `<video>` are responsive by default. If the layout is narrowed, they adjust their size and keep their proportions. Resize the browser window to see the responsive behavior of the image.  To prevent this behavior, add the `.uk-preserve-width` class from the [Utility component](utility.md) to the element or any container.

```example
<img src="images/photo.jpg" alt="Image">
```

***

## Paragraphs

Create a paragraph by using the `<p>` element.

```example
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

***

## Headings

Use the `<h1>` to `<h6>` elements to define your headings.

Add the `.uk-h1`, `.uk-h2`, `.uk-h3`, `.uk-h4`, `.uk-h5` or `.uk-h6` class to alter the size of your headings, for example have a h1 look like a h3.

```example
<h1>h1 Heading 1</h1>
<h2>h2 Heading 2</h2>
<h3>h3 Heading 3</h3>
<h4>h4 Heading 4</h4>
<h5>h5 Heading 5</h5>
<h6>h6 Heading 6</h6>
```

***

## List

Create an unordered list using the `<ul>` element and the `<ol>` element for ordered lists. The `<li>` element defines the list item.

```example
<ul>
    <li>Item 1</li>
    <li>Item 2
        <ul>
            <li>Item 1</li>
            <li>Item 2
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
```

***

## Description List

Create a description list using the `<dl>` element. Use `<dt>` to define the term and `<dd>` for the description.

```example
<dl>
    <dt>Description lists</dt>
    <dd>A description list defines terms and their corresponding descriptions.</dd>
    <dt>This is a term</dt>
    <dd>This is a description.</dd>
    <dt>This is a term</dt>
    <dd>This is a description.</dd>
</dl>
```

***

## Horizontal Rule

Create a horizontal rule by using the `<hr>` element.

```example

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<hr>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

```

***

## Blockquote

To quote multiple lines of content from another source within your document, use the `<blockquote>` element.

```example
<blockquote cite="#">
    <p class="uk-margin-small-bottom">The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element.</p>
    <footer>Someone famous in <cite><a href="#">Source Title</a></cite></footer>
</blockquote>
```

***

## Preformatted Text

For multiple lines of code, use the `<pre>` element. It creates a new text block that preserves spaces, tabs and line breaks. Nest a `<code>` element inside to define the code block.

Note: Be sure to escape any angle brackets to make sure enclosed code is not interpreted as markup.

```example
<pre><code>// Code example
&lt;div id="myid" class="myclass" hidden&gt;
    Lorem ipsum &lt;strong&gt;dolor&lt;/strong&gt; sit amet, consectetur adipiscing elit.
&lt;/div&gt;</code></pre>
```