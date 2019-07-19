---
layout: doc
title: Grid System
---

<h5 class="section-title"> Container grid </h5>
We have 2 kinds of container:
<ul>
  <li> <code>.container</code> for fixed width layout and</li>
  <li> <code>.container-fluid</code> for full-width layout</li>
</ul>

<h5 class="section-title"> 12 columns grid </h5>
Use our set of class `.cols-*` (from `.cols-1` to `.cols-12`), as shown below:

<div class="grid-table">
  <div class="row">
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-1">.cols-1</div>
  </div>

  <div class="row">
    <div class="cols cols-12">.cols-12</div>
  </div>

  <div class="row">
    <div class="cols cols-1">.cols-1</div>
    <div class="cols cols-11">.cols-11</div>
  </div>

  <div class="row">
    <div class="cols cols-2">.cols-2</div>
    <div class="cols cols-10">.cols-10</div>
  </div>

  <div class="row">
    <div class="cols cols-3">.cols-3</div>
    <div class="cols cols-9">.cols-9</div>
  </div>

  <div class="row">
    <div class="cols cols-4">.cols-4</div>
    <div class="cols cols-8">.cols-8</div>
  </div>

  <div class="row">
    <div class="cols cols-5">.cols-5</div>
    <div class="cols cols-7">.cols-7</div>
  </div>

  <div class="row">
    <div class="cols cols-6">.cols-6</div>
    <div class="cols cols-6">.cols-6</div>
  </div>
</div>

<div class="notice-msg">
    <b>Notice: </b>
    <p>We should use the class <code>.row</code> for each multi-columns row.</p>
</div>

```html
<div class="container-fluid">
  <div class="row">
    <div class="cols-1">.cols-1</div>
    <div class="cols-1">.cols-1</div>
    ...
  </div>

  <div class="row">
    <div class="cols-12">.cols-12</div>
  </div>

  <div class="row">
    <div class="cols-1">.cols-1</div>
    <div class="cols-11">.cols-11</div>
  </div>
</div>
```
