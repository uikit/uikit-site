# Accessibility

UIkit is a fully accessible front-end framework. All its interactive components are accessible out of the box. Still, the accessibility largely depends on the author's markup. In this documentation we provide best practice examples on how to use UIkit to comply with the [WCAG 2.1](https://www.w3.org/TR/WCAG/) standards. 

## Color Contrasts

UIkit's default color palette may have insufficient color contrast, in particular the muted text and background colors. WCAG 2.1 requires a 4.5:1 ratio for text contrast and 3:1 ratio for the non-text color. To meet the color contrast requirements, overwrite the [Less variables](less.md#use-variables) accordingly.

```less
@global-muted-color: #777;
```

## Interactive components

UIkit’s interactive components are designed to work with any input devices. By using relevant [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) roles, properties and states, the components should be navigable and operable using assistive technologies, e.g. screen readers.

It's not always possible to determine the precise WAI-ARIA roles and properties that need to be set by a component. Please refer to the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) for further reading.

If you find the documentation or the components lacking accessibility, please open an issue or pull request for the [documentation](https://github.com/uikit/uikit-site) or [UIkit](https://github.com/uikit/uikit) on GitHub.
