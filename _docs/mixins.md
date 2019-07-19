---
layout: doc
title: Mixins
---

<h5 class="section-title">Icons</h5>
<p>The <code>icon</code> mixin will let you call all the needed properties to use <a href="/docs/icons.html">ACL's icon font</a>. Thus, an icon needs a class name (e.g: <code>-lock</code>, <code>-line-chart</code>) in order to call this mixin.</p>
<p>You can also pass an optional <code>font-weight</code> parameter (<code>bold</code> or <code>bolder</code>) into this mixin to make the icon thicker.</p>

```scss
@include icon(bold);
```

<h5 class="section-title">Info-box</h5>
<p>The <code>info-box</code> mixin is used to generate <a href="/docs/well.html">Wells</a> and <a href="/docs/toast.html">Toasts</a> because of their similar styles.</p>
<p>This mixin takes 3 parameters <code>$background-color</code>, <code>$border-color</code> and <code>$text-color</code>.</p>

```scss
@include info-box($background-color, $border-color, $text-color);
```
