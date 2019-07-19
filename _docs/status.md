---
layout: doc
title: Status
---

<p>A status has 5 different styles:</p>

<div class="status-demo">
  <span class="status">Not started</span>
  <span class="status -primary">In-progress</span>
  <span class="status -warning">Coming due</span>
  <span class="status -danger">Past due</span>
  <span class="status -success">Completed</span>
</div>

```html
<span class="status">Not started</span>
<span class="status -primary">In-progress</span>
<span class="status -warning">Coming due</span>
<span class="status -danger">Past due</span>
<span class="status -success">Completed</span>
```

<h5 class="section-title">Related mixin</h5>

```scss
@mixin status-variant($background-color, $text-color) {
    color: $text-color;

    &::before {
        background-color: $background-color;
    }
}
```

**Example**

Usage:

```scss
.element {
    @include status-variant($primary-color, $primary-color-dark-20);
}
```

CSS Output:

```css
.element {
    color: #1077bc;
}

.element::before {
    background-color: #1e99eb;
}
```
