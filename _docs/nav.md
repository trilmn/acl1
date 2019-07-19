---
layout: doc
title: Navigations
---

<!-- Simple Navigation -->
<h5 class="section-title">Simple Navigation Bar</h5>

<ul class="nav">
  <li class="nav-item -active"><a href="javascript:void(0);" class="link">Active Nav Item 1</a></li>
  <li class="nav-item -hover"><a href="javascript:void(0);" class="link">Hovered Nav Item 2</a></li>
  <li class="nav-item"><a href="javascript:void(0);" class="link">Nav Item 3</a></li>
  <li class="nav-item"><a href="javascript:void(0);" class="link">Nav Item 4</a></li>
  <li class="nav-item disabled"><a href="javascript:void(0);" class="link">Disabled Nav Item 5</a></li>
</ul>

```html
<ul class="nav">
  <li class="nav-item -active"><a href="" class="link">Active Nav Item 1</a></li>
  <li class="nav-item"><a href="" class="link">Hovered Nav Item 2</a></li>
  <li class="nav-item"><a href="" class="link">Nav Item 3</a></li>
  <li class="nav-item"><a href="" class="link">Nav Item 4</a></li>
  <li class="nav-item disabled"><a href="" class="link">Disabled Nav Item 5</a></li>
</ul>
```

<!-- Vertical Simple Navigation Bar -->
<h5 class="section-title">Vertical Simple Navigation Bar</h5>

<ul class="nav nav-vertical">
  <li class="nav-item -active"><a href="javascript:void(0);" class="link">Active Nav Item 1</a></li>
  <li class="nav-item -hover"><a href="javascript:void(0);" class="link">Hovered Nav Item 2</a></li>
  <li class="nav-item"><a href="javascript:void(0);" class="link">Nav Item 3</a></li>
  <li class="nav-item"><a href="javascript:void(0);" class="link">Nav Item 4</a></li>
  <li class="nav-item disabled"><a href="javascript:void(0);" class="link">Disabled Nav Item 5</a></li>
</ul>

```html
<ul class="nav nav-vertical">
  ...
</ul>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>This is the simplest navigation bar that comes in both horizontal and vertical stackable list. It behaves exactly like a link except for the active tab.</p>
</div>

<!-- Tab Navigation -->
<h5 class="section-title">Tab Navigation</h5>

<ul class="tab-nav">
  <li class="tab-item -active"><a href="javascript:void(0);" class="link">Active Tab 1</a></li>
  <li class="tab-item -hover"><a href="javascript:void(0);" class="link">Hovered Tab Item 2</a></li>
  <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 3</a></li>
  <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 4</a></li>
  <li class="tab-item disabled"><a href="javascript:void(0);" class="link">Disabled Tab Item 5</a></li>
</ul>

```html
<ul class="tab-nav">
  <li class="tab-item -active"><a href="javascript:void(0);" class="link">Active Tab 1</a></li>
  <li class="tab-item"><a href="javascript:void(0);" class="link">Hovered Tab Item 2</a></li>
  <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 3</a></li>
  <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 4</a></li>
  <li class="tab-item disabled"><a href="javascript:void(0);" class="link">Disabled Tab Item 5</a></li>
</ul>
```

<div class="row">
  <div class="cols-6">
    <h5 class="section-title">Vertical Left Tab Navigation</h5>
    <ul class="tab-nav tab-vertical -left">
      <li class="tab-item -hover"><a href="javascript:void(0);" class="link">Hovered Tab Item 1</a></li>
      <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 2</a></li>
      <li class="tab-item -active"><a href="javascript:void(0);" class="link">Active Tab 3</a></li>
      <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 4</a></li>
      <li class="tab-item disabled"><a href="javascript:void(0);" class="link">Disabled Tab Item 5</a></li>
    </ul>
<!-- Highlighter -->
<div markdown="1" >
```html
<ul class="tab-nav tab-vertical -left">
  ...
</ul>
```
</div>
<!-- End Highlighter -->
</div>

<div class="cols-6">
  <h5 class="section-title txt-right">Vertical Right Tab Navigation</h5>
  <div class="tab-wrap">
    <ul class="tab-nav tab-vertical -right">
      <li class="tab-item -active"><a href="javascript:void(0);" class="link">Active Tab 1</a></li>
      <li class="tab-item -hover"><a href="javascript:void(0);" class="link">Hovered Tab Item 2</a></li>
      <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 3</a></li>
      <li class="tab-item"><a href="javascript:void(0);" class="link">Tab Item 4</a></li>
      <li class="tab-item disabled"><a href="javascript:void(0);" class="link">Disabled Tab Item 5</a></li>
    </ul>
  </div>
<!-- Highlighter -->
<div markdown="1" >
```html
<ul class="tab-nav tab-vertical -right">
  ...
</ul>
```
</div>
<!-- End Highlighter -->
</div>
</div>

<h5 class="section-title">Dropdown Menu</h5>

Create dropdown menu for a navigation item. Whenever needed, consider add class `-has-dropdown` into `nav-item`. When the `nav-item` is clicked on, class `-open` will be added to display the `dropdown-menu`.

<div class="demo-nav-wrapper">
  <ul class="nav">
    <li class="nav-item -has-dropdown -default"><a href="javascript:void(0);" class="link">Nav Item</a></li>
    <li class="nav-item -has-dropdown -hover"><a href="javascript:void(0);" class="link">Nav Item hovered</a></li>
    <li class="nav-item -has-dropdown -open -left">
      <a href="javascript:void(0);" class="link">Nav Item Left</a>

      <ul class="dropdown-menu">
        <li class="dropdown-item"><a href="javascript:void(0);" class="link">Super tight item</a></li>
        <li class="dropdown-item"><a href="javascript:void(0);" class="link">Super rad item</a></li>
        <li class="dropdown-item -divider"></li>
        <li class="dropdown-item"><a href="javascript:void(0);" class="link">Item chilling by itself</a></li>
      </ul>
    </li>

    <li class="nav-item -has-dropdown -open -right">
      <a href="javascript:void(0);" class="link">Nav Item Right</a>

      <ul class="dropdown-menu">
        <li class="dropdown-item"><a href="javascript:void(0);" class="link">Super tight item</a></li>
        <li class="dropdown-item"><a href="javascript:void(0);" class="link">Super rad item</a></li>
        <li class="dropdown-item -divider"></li>
        <li class="dropdown-item"><a href="javascript:void(0);" class="link">Item chilling by itself</a></li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav">
  <li class="nav-item -has-dropdown -open -left">
    <a href="javascript:void(0);" class="link">Nav Item Left</a>
    <ul class="dropdown-menu">
      <li class="dropdown-item"><a href="javascript:void(0);" class="link">Super tight item</a></li>
      <li class="dropdown-item"><a href="javascript:void(0);" class="link">Super rad item</a></li>
      <li class="dropdown-item -divider"></li>
      <li class="dropdown-item"><a href="javascript:void(0);" class="link">Item chilling by itself</a></li>
    </ul>
  </li>
  <li class="nav-item -has-dropdown -open -right">
    ...
  </li>
</ul>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Dropdown list should be used considerably because of its bad UX nature of hiding contents.</p>
</div>
