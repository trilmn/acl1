---
layout: doc
title: Tooltip
---

<h5 class="section-title">Basic tooltip &amp; sizes</h5>

<p>A tooltip can be used in any tag as long as it has the base class <code>.tooltip</code>, one of these positioning classes <code>.-top</code>, <code>.-bottom</code>, <code>.-left</code>, <code>.-right</code> and its content inside <code>data-tip</code> attribute. Use class <code>.-persist</code> to always display the tooltip. If the size is not specified, a tooltip will adapt its length to the content.</p>

<h6>Example:</h6>
<div class="tooltip-demo">
  <div class="container-fluid">
    <div class="row">
      <div class="cols-12 tooltip-basic">
        <h3 data-tip="This is a tooltip" class="tooltip -top">Hover me</h3>
      </div>
    </div>
    <div class="row">
      <div class="cols-6">
        <span data-tip="This is a small tooltip" class="tooltip -bottom -persist -small">Small Tooltip</span>
      </div>
      <div class="cols-6">
        <span data-tip="This is a medium tooltip" class="tooltip -bottom -persist -medium">Medium Tooltip</span>
      </div>
    </div>
    <div class="row -large-tooltip">
      <div class="cols-12">
        <span data-tip="This is a large tooltip" class="tooltip -bottom -persist -large">Large Tooltip</span>
      </div>
    </div>
  </div>
</div>

```html
<span class="tooltip -bottom -small" data-tip="This is a small tooltip" >Small Tooltip</span>
<span class="tooltip -bottom -medium" data-tip="This is a medium tooltip" >Medium Tooltip</span>
<span class="tooltip -bottom -large" data-tip="This is a large tooltip" >Large Tooltip</span>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <ul>
    <li>Tooltips can be text-only.</li>
    <li>Text is center aligned by default.</li>
    <li>Content of a tooltip should be clear/precise and lesser than 140 characters. Try to avoid adding content that is longer than two lines of text.</li>
    <li>Use bigger tooltip sizes ONLY when necessary</li>
  </ul>
</div>

<h5 class="section-title">Position</h5>

<div class="tooltip-demo -position">
  <span data-tip="This is a left tooltip" class="tooltip -left -persist">Left</span>

  <span data-tip="This is a top tooltip" class="tooltip -top -persist">Top</span>

  <span data-tip="This is a top-left tooltip" class="tooltip -top-left -persist">Top Left</span>

  <span data-tip="This is a top-right tooltip" class="tooltip -top-right -persist">Top Right</span>

  <span data-tip="This is a right tooltip" class="tooltip -right -persist">Right</span>

  <span data-tip="This is a bottom tooltip" class="tooltip -bottom -persist">Bottom</span>

  <span data-tip="This is a bottom-left tooltip" class="tooltip -bottom-left -persist">Bottom Left</span>

  <span data-tip="This is a bottom-right tooltip" class="tooltip -bottom-right -persist">Bottom Right</span>
</div>

```html
<span class="tooltip -left" data-tip="This is a left tooltip">Left</span>
<span class="tooltip -right" data-tip="This is a right tooltip">Right</span>
<span class="tooltip -top" data-tip="This is a top tooltip">Top</span>
<span class="tooltip -top-left" data-tip="This is a top-left tooltip">Top Left</span>
<span class="tooltip -top-right" data-tip="This is a top-right tooltip">Top Right</span>
<span class="tooltip -bottom" data-tip="This is a bottom tooltip">Bottom</span>
<span class="tooltip -bottom-left" data-tip="This is a bottom-left tooltip">Bottom Left</span>
<span class="tooltip -bottom-right" data-tip="This is a bottom-right tooltip">Bottom Right</span>
```

<h5 class="section-title">Color variations</h5>
<p>A tooltip can have different colors based on our colorscheme's variants. Color will be applied using the following classes: <code>.-primary</code>, <code>.-success</code>, <code>.-warning</code>, <code>.-danger</code></p>

<div class="tooltip-demo -color">
  <div class="row">
    <div class="cols-12">
      <span class="tooltip -top -persist" data-tip="This is a default tooltip">Default</span>
    </div>
  </div>
  <div class="row">
    <div class="cols-6">
      <span class="tooltip -primary -top -persist" data-tip="This is an info tooltip">Info</span>
    </div>
    <div class="cols-6">
      <span class="tooltip -success -top -persist" data-tip="This is a success tooltip">Success</span>
    </div>
  </div>
  <div class="row">
    <div class="cols-6">
      <span class="tooltip -warning -top -persist" data-tip="This is a warning tooltip">Warning</span>
    </div>
    <div class="cols-6">
      <span class="tooltip -danger -top -persist" data-tip="This is a danger tooltip">Danger</span>
    </div>
  </div>
</div>

```html
<span class="tooltip" data-tip="This is a default tooltip">Default</span>
<span class="tooltip -primary" data-tip="This is an info tooltip">Info</span>
<span class="tooltip -success" data-tip="This is a success tooltip">Success</span>
<span class="tooltip -warning" data-tip="This is a warning tooltip">Warning</span>
<span class="tooltip -danger" data-tip="This is a danger tooltip">Danger</span>
```

<h5 class="section-title">Animation</h5>
<p>Tooltips can have fade-in animation by adding the class <code>.-fade</code>. You can also add ease-in and ease-out effects via the class <code>.-anim</code>. Hover on the examples below to see the results.</p>

<div class="tooltip-demo -animation container-fluid">
  <div class="cols-4">
    <span data-tip="This is a tooltip" class="tooltip -top">No effect</span>
  </div>
  <div class="cols-4">
    <span data-tip="This is a tooltip" class="tooltip -top -fade">Fade In/out</span>
  </div>
  <div class="cols-4">
    <span data-tip="This is a tooltip" class="tooltip -top -anim">Animated In/out</span>
  </div>
</div>

```html
<span class="tooltip -top" data-tip="This is a tooltip" >No effect</span>
<span class="tooltip -top -fade" data-tip="This is a tooltip" >Fade In/out</span>
<span class="tooltip -top -anim" data-tip="This is a tooltip" >Animated In/out</span>
```

<h5 class="section-title">Variable for tooltip</h5>

**Background colors**

```scss
$default-color: $primary-color-dark-80;
```

**Delay appearance time**

```scss
$delay-short: .4s;
$delay-med: 1s;
$delay-long: 1.5s;
```

<h5 class="section-title">Related mixin</h5>

**Sizing**

```scss
@mixin tooltip-sizing($tip-width) {
    width: $tip-width;
    white-space: initial;
}
```
**Example**

Usage:

```scss
@include tooltip-sizing(200px);
```

CSS Output:

```css
width: 200px;
white-space: initial;
```

**Coloring**

```scss
@mixin tooltip-color($color) {
    &.-bottom::before {
        border-bottom-color: $color;
    }

    &.-top::before {
        border-top-color: $color;
    }

    &.-right::before {
        border-right-color: $color;
    }

    &.-left::before {
        border-left-color: $color;
    }

    &::after {
        background: $color;
    }
}
```
**Example**

Usage:

```scss
.element {
    @include tooltip-color($primary-color);
}
```

CSS Output:

```css
.element.-bottom::before {
    border-bottom-color: #1e99eb;
}

.element.-top::before {
    border-top-color: #1e99eb;
}

.element.-right::before {
    border-right-color: #1e99eb;
}

.element.-left::before {
    border-left-color: #1e99eb;
}

.element::after {
    background: #1e99eb;
}
```
