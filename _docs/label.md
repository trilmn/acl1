---
layout: doc
title: Label
---

<h5 class="section-title">Basic</h5>
Simply add the class `.label` to any element that needs to be styled as shown below. Styling is followed by classes `.-primary`, `.-info`, `.-success`, `.-warning`, `.-danger`.

<div class="label-demo container-fluid">
  <div class="row">
    <div class="cols-4">
      <span class="label">Default boring label</span>
      <div class="legend small">Default</div>
    </div>

    <div class="cols-4">
      <span class="label -primary">Downloaded</span>
      <div class="legend small">Primary</div>
    </div>

    <div class="cols-4">
      <span class="label -success">Uploaded</span>
      <div class="legend small">Success</div>
    </div>
  </div>

  <div class="row">
    <div class="cols-4">
      <span class="label -warning">Pending invite</span>
      <div class="legend small">Warning</div>
    </div>

    <div class="cols-4">
      <span class="label -danger">Deleted</span>
      <div class="legend small">Danger</div>
    </div>
  </div>
</div>

```html
<!-- Default label -->
<span class="label">Default boring label</span>

<!-- Primary label -->
<span class="label -primary">Downloaded</span>

<!-- Success label -->
<span class="label -success">Uploaded</span>

<!-- Warning label -->
<span class="label -warning">Pending invite</span>

<!-- Danger label -->
<span class="label -danger">Deleted</span>
```

<h5 class="section-title">Border only</h5>
Add class `.-border-only` to enable this style.

<div class="label-demo container-fluid">
  <div class="row">
    <div class="cols-4">
      <span class="label -border-only">Default boring label</span>
      <div class="legend small">Default</div>
    </div>

    <div class="cols-4">
      <span class="label -border-only -primary">Downloaded</span>
      <div class="legend small">Primary</div>
    </div>

    <div class="cols-4">
      <span class="label -border-only -success">Uploaded</span>
      <div class="legend small">Success</div>
    </div>
  </div>

  <div class="row">
    <div class="cols-4">
      <span class="label -border-only -warning">Pending invite</span>
      <div class="legend small">Warning</div>
    </div>

    <div class="cols-4">
      <span class="label -border-only -danger">Deleted</span>
      <div class="legend small">Danger</div>
    </div>
  </div>
</div>

```html
<!-- Default label -->
<span class="label -border-only">Default boring label</span>

<!-- Primary label -->
<span class="label -border-only -primary">Downloaded</span>

<!-- Success label -->
<span class="label -border-only -success">Uploaded</span>

<!-- Warning label -->
<span class="label -border-only -warning">Pending invite</span>

<!-- Danger label -->
<span class="label -border-only -danger">Deleted</span>
```

<h5 class="section-title">Larger size</h5>
For displaying larger labels simply add the class `.-large`.

<div class="label-demo container-fluid">
  <div class="row">
    <div class="cols-4">
      <span class="label -large">Default boring label</span>
      <div class="legend large">Default</div>
    </div>

    <div class="cols-4">
      <span class="label -large -primary">Downloaded</span>
      <div class="legend large">Primary</div>
    </div>

    <div class="cols-4">
      <span class="label -large -success">Uploaded</span>
      <div class="legend large">Success</div>
    </div>
  </div>

  <div class="row">
    <div class="cols-4">
      <span class="label -large -warning">Pending invite</span>
      <div class="legend large">Warning</div>
    </div>

    <div class="cols-4">
      <span class="label -large -danger">Deleted</span>
      <div class="legend large">Danger</div>
    </div>
  </div>
</div>

```html
<!-- Larger labels -->
<span class="label -large">Default boring label</span>
<span class="label -large -primary">Downloaded</span>
<span class="label -large -success">Uploaded</span>
<span class="label -large -warning">Pending invite</span>
<span class="label -large -danger">Danger</span>
```

<h5 class="section-title">Related mixin</h5>

```scss
@mixin general-label($background-color, $border-color, $text-color) {
    @if $background-color == null {
        background-color: $white;
    } @else {
        background-color: $background-color;
    }
    @if $border-color == null {
        border: 0;
    } @else {
        border: 1px solid $border-color;
    }
    color: $text-color;
}
```

**Example**

Usage:

```scss
@include general-label($primary-color, null, $primary-color-light-100);
```

CSS Output:

```css
background-color: #c46345;
border: 0;
color: #f5e5e0;
```
