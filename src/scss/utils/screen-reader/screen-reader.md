---
title: Screen reader
desc: Use screen reader utilities to hide elements on all devices except screen readers.
path: utilities/screen-reader
group: utilities
---

```html
<a href="#" class="sr-only">Visible only to screenreaders</a>
```


```scss
// Usage as a mixin
.skip-navigation {
  @include sr-only();
}
```
