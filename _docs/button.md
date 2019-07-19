---
layout: doc
title: Buttons
---

<h5 class="section-title">Default/Secondary Button</h5>
You can either apply these styles for both <code>&#60;button&#62;</code> or <code>&#60;a&#62;</code> and still yield the same result. Happy styling!

<div class="buttons-showcase -single-line">
  <button class="btn">I'm a button</button>
  <a href="javascript:void(0)" class="btn">I'm a link</a>
</div>

```html
<button class="btn">I'm a button</button>
<a href="javascript:void(0)" class="btn">I'm a link</a>
```

<h6>Different state</h6>

<div class="different-state -single-line">
  <div class="state -normal">
    <button class="btn">Default button</button>
    <br/>
    <span class="text small">Normal State</span>
  </div>
  <div class="state -hover">
    <button class="btn">Hovered button</button>
    <br/>
    <span class="text small">Hover State</span>
  </div>
  <div class="state -active">
    <button class="btn">Activated button</button>
    <br/>
    <span class="text small">Active State</span>
  </div>
</div>

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Please do not attempt to change the physical width and height values of buttons. Use <code>.-large</code> instead for bigger size buttons (see below).<br/>Button line heights are always <code>1</code> or <code>100%</code>. Font size should always be <code>12pt/px</code> in Semibold.</p>
</div>

<h5 class="section-title">Button Types</h5>
<div class="buttons-showcase">
  <button class="btn -primary">Primary button</button>
  <button class="btn -success">Success button</button>
  <button class="btn -warning">Warning button</button>
  <button class="btn -danger">Danger button</button>
</div>

```html
<!-- Primary Button -->
<button class="btn -primary">Primary button</button>

<!-- Success Button -->
<button class="btn -success">Success button</button>

<!-- Warning Button -->
<button class="btn -warning">Warning button</button>

<!-- Danger Button -->
<button class="btn -danger">Danger button</button>
```

<h5 class="section-title">Disabled Button</h5>
<div class="buttons-showcase">
  <button class="btn disabled">Disabled by class</button>
  <button disabled class="btn">Disabled by attribute</button>
</div>

```html
<!-- Disable by class -->
<button class="btn disabled">Disabled by class</button>

<!-- Disable by attribute -->
<button disabled class="btn">Disabled by attribute</button>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Adding <code>.disabled</code> to any <code>.btn</code> will make them appear disabled. It also works with the <code>disabled</code> attribute of <code>&#60;button&#62;</code>.</p>
</div>

<h5 class="section-title">Non-Styling Buttons</h5>
<div class="button-showcase -single-line">
  <a href="javscript:void(0)" class="btn -plain">I'm a text-only button</a>
  <div>
    <button class="btn -plain">
      {% include icon-svg.html param="close-solid" %}
    </button>
  </div>
</div>

```html
<!-- The content could be text... -->
<button class="btn -plain">...</button>

<!-- ...or icon -->
<button class="btn -plain"><i class="icon -close"></i></button>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Non-styled buttons are not plain links. They basically have all the behaviours of a <code>.btn</code> class but without the decorative <code>border</code>, <code>background-color</code> and <code>box-shadow</code>.</p>
</div>

<h5 class="section-title">Low Fidelity Buttons</h5>
<div class="buttons-showcase">
  <button class="btn-flat">Original</button>
  <button class="btn-flat -primary">Complete</button>
  <button class="btn-flat -success">Done</button>
  <button class="btn-flat -warning">Take care, man!</button>
  <button class="btn-flat -danger">Remove</button>
</div>

```html
<button class="btn-flat">Original</button>
<button class="btn-flat -primary">Complete</button>
<button class="btn-flat -success">Done</button>
<button class="btn-flat -warning">Take care, man!</button>
<button class="btn-flat -danger">Remove</button>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>These low fidelity buttons are to be used in emails where there are limited styling capabilities.</p>
</div>

<h5 class="section-title">Button with Icon</h5>
<div>
  <button class="btn" type="button">
    {% include icon-svg.html param="lock-solid" %}
    This a button
  </button>
</div>

```html
<button class="btn">
  <svg class="icon-svg">...</svg>
  This is a button
</button>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Icons to be used in button should be <code>solid</code> and modify `margin-right` independently for the best visualization. For a complete list of icon glyphs, please see <a href="/docs/icon.html">Icon</a> or <code>_icon.scss</code></p>
</div>

<h5 class="section-title">Button Size</h5>
<div class="buttons-showcase -single-line">
  <button class="btn">Default button</button>
  <button class="btn -large">Large button</button>
</div>

```html
<button class="btn">Default button</button>
<button class="btn -large">Large button</button>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Use class <code>.-large</code> to adjust button size. This could be applied to both <code>.btn</code> and <code>.btn-flat</code>.</p>
</div>

<h5 class="section-title">Grouping Buttons</h5>
When there are two or more buttons being put together, wrap them with `.btn-group` for proper margins between these buttons.

<div class="btn-group">
  <button class="btn">Button 1</button>
  <button class="btn -primary">Button 2</button>
  <button class="btn -success">Button 3</button>
</div>

```html
<div class="btn-group">...</div>
```

Add class `.-right` if you want your group of buttons to be pushed right. This works with the help of flexbox.

<div class="btn-group -right">
  <button class="btn">Button 1</button>
  <button class="btn -primary">Button 2</button>
  <button class="btn -success">Button 3</button>
</div>

```html
<div class="btn-group -right">...</div>
```
