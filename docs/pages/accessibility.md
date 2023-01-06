# Accessibility

UIkit is a fully accessible front-end framework. All its interactive components are accessible out of the box. Still, the accessibility largely depends on the author's markup. In each component documentation we provide best practice examples on how to use UIkit to comply with the [WCAG 2.1](https://www.w3.org/TR/WCAG/) standards. 

***

## Color Contrasts

UIkit's default color palette may have insufficient color contrast, in particular the muted text and background colors. WCAG 2.1 requires a 4.5:1 ratio for text contrast and 3:1 ratio for the non-text color. To meet the color contrast requirements, overwrite the [Less variables](less.md#use-variables) accordingly.

For the UIkit default style, it should be sufficient to change the following global variables. 

```less
@global-color: #666;
@global-emphasis-color: #333;
@global-muted-color: #999;

@global-muted-background: #f8f8f8;
```

***

## Interactive components

UIkit's interactive JavaScript components, for example, slideshow, lightbox, dropdown, among others, are accessible for keyboard users. We implement the common keyboard navigation convention in which the `tab` and `shift+tab` keys move focus from one component to another while other keys like arrow keys move focus inside of components that include multiple focusable elements. Learn more about keyboard interaction in the documentation of each component.

By using relevant [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) roles, properties and states, the JavaScript components are readable and operable using assistive technologies like screen readers. They automatically set the required HTML attributes in the markup. Learn more about accessibility in the documentation of each component. 

Since our JavaScript components are designed to be generic, it's not always possible to determine the precise WAI-ARIA roles and properties that need to be set by a component. Please refer to the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) for further reading. 

If you find the documentation or the components lacking accessibility, please open an issue or pull request for the [documentation](https://github.com/uikit/uikit-site) or [UIkit](https://github.com/uikit/uikit) on GitHub.
