---
layout: doc
title: Well 🐋
---

<h5 class="section-title">All Kinds of Well</h5>
<div class="row">
  <div class="well-showcase cols-8">
    <div class="well">
      This is some sample content for this beautiful default well. The purpose is to notice the user about something that is going to happen.
    </div>
    <span class="type small">Default</span>

    <div class="well -primary">
      This is some sample content for this beautiful primary well. The purpose is to notice the user about something that is going to happen.
    </div>
    <span class="type small">Primary</span>

    <div class="well -success">
      This is some sample content for this beautiful success well. The purpose is to notice the user about something that is going to happen.
    </div>
    <span class="type small">Success</span>

    <div class="well -warning">
      This is some sample content for this warnful warning well. The purpose is to notice the user about something that is going to happen.
    </div>
    <span class="type small">Warning</span>

    <div class="well -danger">
      This is some sample content for this dangerously looking danger well. The purpose is to notice the user about something that is going to happen.
    </div>
    <span class="type small">Danger</span>
  </div>
</div>

```html
<!-- Default Well -->
<div class="well">...</div>

<!-- Primary Well -->
<div class="well -primary">...</div>

<!-- Success Well -->
<div class="well -success">...</div>

<!-- Warning Well -->
<div class="well -warning">...</div>

<!-- Danger Well -->
<div class="well -danger">...</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Well should be used when you want the content to stand out of the crowd. Please never use two wells at the same time and in the same place. Wells can have different appearances by adding the following classes: <code>.-info</code> <code>.-success</code> <code>.-warning</code> <code>.-danger</code>. Sizes of wells could be varied based on the size of its containing element. It is recommended to determine the size of a well by using <code>.cols-*</code> layout classes.</p>
</div>

<h5 class="section-title">Well with Icon</h5>
<div class="row">
  <div class="well-showcase cols-8">
    <div class="well">
      {% include icon-svg.html param="info" %}
      This is some sample content for this beautiful default well. The purpose is to notice the user about something that is going to happen.
    </div>
  </div>
</div>

```html
<div class="well">
  <svg class="icon-svg">...</svg>
  ...
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>To include an icon in a well, simply use it like any other icon. Also, only use <strong>one</strong> icon per well.</p>
</div>

<h5 class="section-title">Usage</h5>
Well could be **text-only**, or **content-rich**, and could be implemented in various places across the system. Please see below for a few examples.
<div class="row">
  <div class="cols-4">
    <div class="well -danger tri-well">
      <img src="../assets/images/pages/well/patron.jpg"/>
      <span class="caption">Patrón</span>
    </div>
  </div>
</div>
<div class="row">
  <div class="cols-6">
    <div class="well -primary">
      <span>By signing up you're agreed to the Pacific Ocean's terms and conditions of being forever at sea like a 🐋.</span>
    </div>
  </div>
</div>
<div class="row">
  <div class="cols-8">
    <div class="well -default aquarium-well">
      {% include icon-svg.html param="send" %}
      <span>Check out the aquarium where my relatives are at. &mdash; said 🐋</span>
      <button class="btn -primary">Let's go</button>
    </div>
  </div>
</div>
<div class="notice-msg">
  <strong>Notice:</strong>
  <ul>
    <li>As mentioned above, a well can hold many things. But don't put an entire webpage or a large component inside it because, at the end of the day, a well is originally used to add contrast into an important piece of information.</li>
    <li>Styling the content inside a well is relatively easy. Since all wells are <code>display: flex;</code> by default, all the elements inside could easily be arranged using that method. See more <a href="http://www.sketchingwithcss.com/samplechapter/cheatsheet.html">here</a>.</li>
  </ul>
</div>

<h5 class="section-title">Related mixin</h5>

```scss
@mixin well-generator($border-color, $text-color) {
    border-left: 3px solid $border-color;
    color: $text-color;
}
```

**Example**

Usage:

```scss
@include well-generator($primary-color-light-80, $primary-color-dark-20);
```

CSS Output:

```css
border-left: 3px solid #c7e6fa;
color: #1077bc;
```
