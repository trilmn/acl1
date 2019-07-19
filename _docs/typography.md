---
layout: doc
title: Typography
---

<h5 class="section-title">Header text</h5>
<div class="typography-demo">
  <div class="row">
    <span class="font-type">38px</span>
    <h1>h1 This is a very large header</h1>
  </div>
  <div class="row">
    <span class="font-type">27px</span>
    <h2>h2 This is a large header</h2>
  </div>
  <div class="row">
    <span class="font-type">20px</span>
    <h3>h3 This is a medium header</h3>
  </div>
  <div class="row">
    <span class="font-type">15px</span>
    <h4>h4 This is a moderate header</h4>
  </div>
  <div class="row">
    <span class="font-type">13px</span>
    <h5>h5 This is a small header</h5>
  </div>
  <div class="row">
    <span class="font-type">11px</span>
    <h6>h6 This is a tiny all caps header</h6>
  </div>
</div>

```html
<h1>h1 This is a very large header in Regular</h1>
<h2>h2 This is a large header in Regular</h2>
<h3>h3 This is a medium header in Semibold</h3>
<h4>h4 This is a moderate header in Bold</h4>
<h5>h5 This is a small header in Semibold</h5>
<h6>h6 THIS IS A TINY ALL CAPS HEADER IN BOLD</h6>
```

<div class="notice-msg">
  <b>Notice: </b>
  <p>When using header text, it is better to stick to the predefined font weight for optimal legibility, hierarchy and contrast.</p>
</div>

<h5 class="section-title">Body text</h5>
Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia
quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

```html
<p>Donec ullamcorper nulla non...</p>
```

<div class="notice-msg">
  <b>Notice: </b>
  <p>The base font size is 13pt/px. In general, throughout the system, text should always be at this size and at the default line height of 1.5 or 150%.</p>
</div>

<h5 class="section-title"> Other </h5>
<div class="typography-demo">
  <div class="row">
    <span class="font-type">13px</span>
    <div class="cols-3 link">This is a link</div>
    <div class="cols-4 hovered-link">This is a hovered link</div>
    <a class="cols-3" href="#">Link in action</a>
  </div>
</div>

```html
<a href="#">Link in action</a>
```

<div class="typography-demo">
  <div class="row">
    <span class="font-type">11px</span>
    <small>Use tag <code>&lt;small&gt;</code> or add class <code>.small</code> to apply small text style </small>
  </div>
</div>

```html
<small>...</small>

<span class= "small">Small text</span>
```

<div class="typography-demo">
  <div class="row">
    <span class="font-type">10px</span>
    <p class="tiny">Use class <code>.tiny</code> for tiny text style</p>
  </div>
</div>

```html
<span class="tiny">Tiny text</p>
```

<div class="typography-demo">
  <div class="row">
    <span class="font-type">20px</span>
    <div>
      <blockquote>
        This is a quote from a great saying! <br>
        You shall not pass!
      </blockquote>
    </div>
  </div>
</div>

```html
<blockquote>...</blockquote>
```

<div class="typography-demo">
  <div class="row">
    <span class="font-type">13px</span>
    <div>
      This is an ordered list
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
    </div>
  </div>
</div>

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

<div class="typography-demo">
  <div class="row">
    <span class="font-type">13px</span>
    <div>
      This is an unordered list
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </div>
</div>

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

<div class="notice-msg">
  <b>Notice: </b>
  <p>The use of tiny text should be as limited as possible, unless necessary. Links should have the same font size as paragraph.</p>
</div>
