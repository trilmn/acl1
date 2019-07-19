---
layout: doc
title: Utilities
---

This is a collection of utility classes which might come in handy when you need to add a certain behaviour to your elements.

<h5 class="section-title">Text Alignments</h5>
<div class="row">
  <div class="cols-4">
    <p class="txt-left"><strong>Left Aligned</strong><br/>Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
  </div>
  <div class="cols-4">
    <p class="txt-center"><strong>Center Aligned</strong><br/>Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
  </div>
  <div class="cols-4">
    <p class="txt-right"><strong>Right Aligned</strong><br/>Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
  </div>
</div>

```html
<p class="txt-left">...</p>
<p class="txt-center">...</p>
<p class="txt-right">...</p>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <ul>
    <li><code>.txt-*</code> classes will not only work on text but could also be applied to other box elements to align all contents inside.</li>
    <li>It is recommended that you use these text alignment classes extensively so that the CSS codebase is cleaner without repeating styling properties.</li>
  </ul>
</div>

<h5 class="section-title">Uppercased Text</h5>
Add `.txt-uppercase` class to tranform any text to uppercase.
<div class="row">
  <div class="cols-8">
    <div class="well">
      <span>The WIFI password is: <strong class="txt-primary txt-uppercase">fourwordsalllowercase</strong> but it's one word all uppercase.</span>
    </div>
  </div>
</div>

```html
<p class="txt-uppercase">please transform this sentence to uppercase</p>
```

<h5 class="section-title">Truncating Text</h5>
To truncate a line of text, use the class `.txt-truncate`.
<div class="row">
  <div class="cols-4">
    <p class="txt-truncate txt-warning">I'm a text that's about to be truncated. My crime was because I'm too long.</p>
  </div>
</div>

```html
<p class="txt-truncate">...</p>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Truncating text requires a specific width, in order for this to work properly, the text itself needs to be wrapped inside a container/wrapper with predefined width. <code>txt-truncate</code> class will inherit the parent's width and be applied to the portion of text needed to be truncated.</p>
</div>

<h5 class="section-title">Disabling an Element</h5>
You can use class `.disabled` to disable pretty much anything. Below are some usage examples.
<div class="row disabled-showcase">
  <div class="cols-3"><a href="javascript:void(0);" class="disabled">I'm a disabled link</a></div>
  <div class="cols-3"><button class="btn disabled">I'm disabled</button></div>
  <div class="cols-4"><div class="card disabled">I'm a disabled card.</div></div>
</div>

```html
<a href="javascript:void(0);" class="disabled">...</a>
<button class="btn disabled">...</button>
<div class="card disabled">...</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <ul>
    <li>The way the class <code>.disabled</code> works is that it decreases the opacity and disables clicking events. But there's a limitation in this method when a user uses keyboard to navigate through the site, hence disabled links and buttons would still work if accessed this way. To further prevent this, it is recommended that you handle the disabled interaction using JavaScript.</li>
    <li>Even though class <code>.disabled</code> works on almost anything, it is recommended that you use it considerably and true to the nature of that element. For example, a popover shouldn't be disabled because it could always be popped out in the first place.</li>
    <li>This is the very default styling for a disabled element, you can always style more to fit your needs.</li>
  </ul>
</div>

<h5 class="section-title">Hiding an Element</h5>
You can use class `.hide` to hide an element. This will force the element to be `display: none;`.

```html
<div class="hide">...</div>
```

<h5 class="section-title">Z-Index Scale</h5>
Z-Index Scale was created with one simple objective, putting everything into a well organized "layering system". Below is the actual scale.

```scss
// The z-index scale
$z-index-1:         100;
$z-index-2:         200;
$z-index-3:         300;
$z-index-4:         400;
$z-index-5:         500;
$z-index-6:         600;
$z-index-7:         700;
$z-index-8:         800;
$z-index-9:         900;
$z-index-10:       1000;
```

No `z-index` value is to be set outside of `_zindex.scss`. The above z-index scale is not allowed to be modified, only new z-index applications are to be added in this file. See an example below.

```scss
$z-index-tooltip: $z-index-8;
```

Then we will use it in `_tooltip.scss` like this:

```scss
.tooltip {
    z-index: $z-index-tooltip;
}
```

Which will render the following in CSS:

```css
.tooltip {
    z-index: 8;
}
```

<h5 class="section-title">Floating Classes</h5>
Floats could be applied using predefined classes such as `.left` or `.right`.

<div class="row">
  <div class="cols-8">
    <span class="label left">Left floating</span>
    <span class="label right">Right floating</span>
  </div>
</div>

```html
<span class="left">...</span>
<span class="right">...</span>
```

<h5 class="section-title">Clearfixin'</h5>
Add the class `.clearfix` to easily clear floats. This should be added **to the parent element**. Clearfix is basically a mixin from [Bourbon](http://bourbon.io/docs/#clearfix).

```html
<div class="clearfix">...</div>
```

This is the output CSS

```css
.clearfix::after {
  clear: both;
  content: '';
  display: table;
}
```

<h5 class="section-title">Flexbox Classes</h5>
We use flexbox extensively to layout our components, here is the list of the common flexbox classes we could use.

```html
<div class="display-flex">...</div>
<div class="align-items-center">...</div>
<div class="justify-content-space-between">...</div>
<div class="justify-content-center">...</div>
<div class="flex-direction-column">...</div>
```

<h5 class="section-title">Display Types Classes</h5>
The list of display types helper classes below are introduced to help quickly change these value in an element without sacrificing semantic sanity

```html
<div class="display-block">...</div>
<div class="display-inline">...</div>
<div class="display-inline-block">...</div>
```

<h5 class="section-title">Contextual Coloring Classes</h5>
Contextual color classes could be applied to both text and background color. Use these classes to quickly alter color of these element. These classes use `!important` to ensure the styles are applied.
<div class="typography-type color-helper">
  <span class="txt-grey">Text Grey</span>
  <span class="txt-primary">Text Primary</span>
  <span class="txt-success">Text Success</span>
  <span class="txt-warning">Text Warning</span>
  <span class="txt-danger">Text Danger</span>
</div>

```html
<span class="txt-grey">...</span>
<span class="txt-primary">...</span>
<span class="txt-success">...</span>
<span class="txt-warning">...</span>
<span class="txt-danger">...</span>
```

SVG icons also have their own coloring classes
<div>
  <svg class="icon-svg icon-grey">
    <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-calendar"></use>
  </svg>
  <svg class="icon-svg icon-primary">
    <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-calendar"></use>
  </svg>
  <svg class="icon-svg icon-success">
    <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-calendar"></use>
  </svg>
  <svg class="icon-svg icon-warning">
    <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-calendar"></use>
  </svg>
  <svg class="icon-svg icon-danger">
    <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-calendar"></use>
  </svg>
</div>

```html
<svg class="icon-svg icon-grey">...</svg>
<svg class="icon-svg icon-primary">...</svg>
<svg class="icon-svg icon-success">...</svg>
<svg class="icon-svg icon-warning">...</svg>
<svg class="icon-svg icon-danger">...</svg>
```

Background color contextual classes could be applied on any element, even `table` rows.
<table class="table">
  <thead>
    <tr>
      <th class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-1" />
          <label for="checkbox-1"></label>
        </div>
      </th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-grey">
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-2" />
          <label for="checkbox-2"></label>
        </div>
      </td>
      <td>John</td>
      <td>Tight</td>
      <td>john.tight357</td>
    </tr>
    <tr>
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-2" />
          <label for="checkbox-2"></label>
        </div>
      </td>
      <td>John</td>
      <td>Tight</td>
      <td>john.tight357</td>
    </tr>
    <tr class="bg-primary">
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-2" />
          <label for="checkbox-2"></label>
        </div>
      </td>
      <td>John</td>
      <td>Tight</td>
      <td>john.tight357</td>
    </tr>
    <tr>
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-2" />
          <label for="checkbox-2"></label>
        </div>
      </td>
      <td>John</td>
      <td>Tight</td>
      <td>john.tight357</td>
    </tr>
    <tr class="bg-success">
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-3" />
          <label for="checkbox-3"></label>
        </div>
      </td>
      <td>Pete</td>
      <td>Skinny</td>
      <td>pete_skeleton</td>
    </tr>
    <tr>
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-3" />
          <label for="checkbox-3"></label>
        </div>
      </td>
      <td>Pete</td>
      <td>Skinny</td>
      <td>pete_skeleton</td>
    </tr>
    <tr class="bg-warning">
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-4" />
          <label for="checkbox-4"></label>
        </div>
      </td>
      <td>Walter</td>
      <td>White</td>
      <td>wwhite.246</td>
    </tr>
    <tr>
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-4" />
          <label for="checkbox-4"></label>
        </div>
      </td>
      <td>Walter</td>
      <td>White</td>
      <td>wwhite.246</td>
    </tr>
    <tr class="bg-danger">
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-4" />
          <label for="checkbox-4"></label>
        </div>
      </td>
      <td>Walter</td>
      <td>White</td>
      <td>wwhite.246</td>
    </tr>
    <tr>
      <td class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" id="checkbox-4" />
          <label for="checkbox-4"></label>
        </div>
      </td>
      <td>Walter</td>
      <td>White</td>
      <td>wwhite.246</td>
    </tr>
  </tbody>
</table>

```html
<span class="bg-grey">...</span>
<span class="bg-primary">...</span>
<span class="bg-success">...</span>
<span class="bg-warning">...</span>
<span class="bg-danger">...</span>
```
