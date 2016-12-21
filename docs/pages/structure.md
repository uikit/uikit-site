# Project structure

<p class="uk-text-lead">Understand file structure of UIkit and learn how to compile it yourself.</p>

## Github

UIkit is hosted on [GitHub](https://github.com/uikit/uikit) and licensed under [MIT license](http://opensource.org/licenses/MIT). You're welcome to use it for all your personal and commercial projects. To access all source files, just clone the [Github repository](https://github.com/uikit/uikit) or [download](https://github.com/uikit/uikit/releases) the latest version.

***
## File structure

UIkit is built on [Less](http://lesscss.org), a CSS preprocessor, which adds variables, mixins and much more to CSS. It compiles code written in Less into CSS. The main file structure of UIkit is as follows.

| Folder | Description |
| ------ | ----------- |
| /src	 | Contains all Less and JavaScript component files. |
| /tests | Contains HTML test files of all components. |

***

## Compile UIkit

To automate the process of compiling Less files into CSS, we use Node scripts to watch the source directory you are working on. Whenever you save changes in the source files, node compiles all files into one single CSS file.

Go to the UIkit directory and install the Node dependencies. After that you can compile the Less files once or watch them while you are working on them.

```html
cd uikit
npm install

<!-- Run to compile once -->
npm run compile

<!-- Run to re-compile on every file change -->
npm run watch
```
