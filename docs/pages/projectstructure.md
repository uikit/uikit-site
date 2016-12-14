# Project Structure

<p class="uk-text-lead">Dig into the core of UIkit and learn what it's all about.</p>

## Github 

UIkit is hosted on <a href="https://github.com/uikit/uikit" target="_blank">GitHub</a> and licensed under <a href="http://opensource.org/licenses/MIT" targer="_blank">MIT license</a>. You're welcome to use it for all your personal and commercial projects. To access all source files, just clone the repository on <a href="https://github.com/uikit/uikit" target="_blank">GitHub</a> or download the latest version.

***

## File structure

UIkit is built on <a href="http://lesscss.org/" target="_blank">Less</a>, a CSS preprocessor, which adds variables, mixins and much more to CSS. It compiles code written in Less into CSS. The main file structure of UIkit is as follows.

| Folder | Description |
| --- | --- |
| /src	| Contains all Less and JavaScript component files. |
| /tests	| Contains test files of all components. |

***

## Automate preprocessing

To automate the process of compiling Less files into CSS, we use Node scripts to  watch the source directory you are working on. Whenever you save changes in the source files, node compiles all files into one single CSS file.

Firstly, go to the UIkit directory and install the Node dependencies. After that you can compile the Less files once or watch them while you are working on them.

```html
cd uikit
npm install

<!-- Run once -->
npm run compile

<!-- watch the files while working on them -->
npm run watch
```