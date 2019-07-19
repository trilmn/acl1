---
layout: doc
title: Notification Badge
---

<!-- Default Notification Badge -->
<h5 class="section-title">Default notification badge</h5>
Use the class `notif-badge` in order to display a notification badge.
<div class="badge-demo row">
  <div class="cols-1">
    <span class="notif-badge">1</span>
  </div>
  <div class="cols-1">
    <span class="notif-badge">16</span>
  </div>
  <div class="cols-1">
    <span class="notif-badge">20+</span>
  </div>
</div>
<div class="badge-demo row">
  <div class="cols-2">
    <div>Discussion<span class="notif-badge">20+</span></div>
  </div>
</div>

```html
Discussion<span class="notif-badge">20+</span>
```

<!-- Notification Badge With Icon -->
<h5 class="section-title">Notification badge with icon</h5>
Add the class `.-with-icon` to add an icon to the badge.
<div class="badge-demo row">
  <div class="cols-2">
    <div><i class="icon -bell"></i><span class="notif-badge -with-icon">1</span></div>
  </div>
  <div class="cols-2">
    <div><i class="icon -bell"></i><span class="notif-badge -with-icon">16</span></div>
  </div>
  <div class="cols-3">
    <div><i class="icon -bell"></i><span class="notif-badge -with-icon">20+</span></div>
  </div>
</div>

```html
<i class="icon -bell"></i>
<span class="notif-badge -with-icon">16</span>
```

<!-- Notification Badge Without Number -->
<h5 class="section-title">Notification badge without number</h5>
Add the class `.-without-number` to remove numbers from badges.
<div class="badge-demo row">
  <div class="cols-3">
    <div>
      <span class="label">Counsel Confidential
        <span class="notif-badge -without-number"></span>
      </span>
    </div>
  </div>
  <div class="cols-3">
    <div>
      <i class="icon -bell bell-notif">
        <span class="notif-badge -without-number"></span>
      </i>
    </div>
  </div>
</div>

```html
<span class="label">
  Counsel Confidential
  <span class="notif-badge -without-number"></span>
</span>
<i class="icon -bell bell-notif">
  <span class="notif-badge -without-number"></span>
</i>
```

<!-- Notification Badge with color -->
<h5 class="section-title">Color variants</h5>
Use the following classes `.-primary`, `.-success` or `.-warning` to color notification badges.
<div class="badge-demo row">
  <div class="cols-1">
    <span class="notif-badge -primary">1</span>
  </div>
  <div class="cols-1">
    <span class="notif-badge -success">16</span>
  </div>
  <div class="cols-1">
    <span class="notif-badge -warning">20+</span>
  </div>
</div>

```html
<span class="notif-badge -primary">1</span>
<span class="notif-badge -success">16</span>
<span class="notif-badge -warning">20+</span>
```

<div class="badge-demo row">
  <div class="cols-2">
    <div><i class="icon -bell"></i><span class="notif-badge -with-icon -primary">1</span></div>
  </div>
  <div class="cols-2">
    <div><i class="icon -bell"></i><span class="notif-badge -with-icon -success">16</span></div>
  </div>
  <div class="cols-3">
    <div><i class="icon -bell"></i><span class="notif-badge -with-icon -warning">20+</span></div>
  </div>
</div>

```html
<i class="icon -bell"></i>
<span class="notif-badge -with-icon -primary">1</span>
<i class="icon -bell"></i>
<span class="notif-badge -with-icon -success">16</span>
<i class="icon -bell"></i>
<span class="notif-badge -with-icon -warning">20+</span>
```

<div class="badge-demo row">
  <div class="cols-3">
    <div>
      <span class="label">
        Counsel Confidential
        <span class="notif-badge -without-number -primary"></span>
      </span>
    </div>
  </div>
  <div class="cols-3">
    <div>
      <span class="label">
        Investor Confidential
        <span class="notif-badge -without-number -success"></span>
      </span>
    </div>
  </div>
  <div class="cols-3">
    <div>
      <i class="icon -bell bell-notif">
        <span class="notif-badge -without-number -warning"></span>
      </i>
    </div>
  </div>
</div>

```html
<span class="label">
  Counsel Confidential
  <span class="notif-badge -without-number -primary"></span>
</span>
<span class="label">
  Investor Confidential
  <span class="notif-badge -without-number -success"></span>
</span>
<i class="icon -bell bell-notif">
  <span class="notif-badge -without-number -warning"></span>
</i>
```

<h5 class="section-title">Related mixin</h5>

```scss
@mixin notif-badge-color($gradient-color-top, $gradient-color-bottom, $border-color) {
    background-image: linear-gradient($gradient-color-top 0, $gradient-color-bottom 100%);
    border: 1px solid $border-color;
}
```

**Example**

Usage:

```scss
@include notif-badge-color($danger-color, $danger-color-dark-20, $danger-color-dark-40);
```

CSS Output:

```css
background-image: linear-gradient(#c46345 0, #ab5136 100%);
border: 1px solid #8c422c;
```
