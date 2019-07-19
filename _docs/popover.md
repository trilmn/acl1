---
layout: doc
title: Popover
---

<h5 class="section-title">Basic Popover and Sizes</h5>
<div class="popover-showcase">
  <div class="popover">This is a small popover</div>
  <div class="popover -medium">This is a medium popover</div>
  <div class="popover -large">This is a large popover</div>
  <div class="popover -xlarge">This is an extra large popover</div>
</div>

```html
<div class="popover">...</div>
<div class="popover -medium">...</div>
<div class="popover -large">...</div>
<div class="popover -xlarge">...</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>If no size is specified, the default size will be small. The size classes are <code>.medium</code>, <code>.large</code> and <code>.xlarge</code></p>
</div>

<h5 class="section-title">Typography Usage in a Popover</h5>
<div class="popover-showcase">
  <div class="popover -medium text-heavy-popover">
    <h3 class="header">Some header</h3>
    <p>Some cool body text is here to tell about the story of this super rad popover and how it ended up being part of the Anduin Component Library.</p>
    <button class="btn -primary">Click me!</button>
  </div>
  <div class="popover -medium txt-center text-heavy-popover">
    <h3 class="header">Some header</h3>
    <p>Some cool body text is here to tell about the story of this super rad popover and how it ended up being part of the Anduin Component Library.</p>
    <button class="btn -primary">Click me!</button>
  </div>
  <div class="popover -medium text-right text-heavy-popover">
    <h3 class="header">Some header</h3>
    <p>Some cool body text is here to tell about the story of this super rad popover and how it ended up being part of the Anduin Component Library.</p>
    <button class="btn -primary">Click me!</button>
  </div>
</div>

```html
<div class="popover">
  <h3 class="header">Some header</h3>
  <p>Some text</p>
</div>
<div class="popover txt-center">...</div>
<div class="popover txt-right">...</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>It is not a requirement to have a header text in popovers. However, if you decide to add one, make sure to only use h3 or h4 only. Text alignment can be left, center or right (by default text is left aligned). In order to change text alignment, please use utility classes <code>.txt-center</code> or <code>.txt-right</code></p>
</div>

<h5 class="section-title">Popover with Links</h5>
<div class="popover-showcase">
  <div class="popover">
    <ul class="list">
      <li class="item"><a href="javascript:void(0)">Click me!</a></li>
      <li class="item"><a href="javascript:void(0)">No, click me!</a></li>
      <li class="divider"></li>
      <li class="item"><a href="javascript:void(0)" class="disabled">You can't click me</a></li>
    </ul>
  </div>
</div>

```html
// Here's the markup for the popover above
<div class="popover">
  <ul class="list">
    <li class="item"><a href="javascript:void(0)">Click me!</a></li>
    <li class="item"><a href="javascript:void(0)">No, click me!</a></li>
    <li class="divider"></li>
    <li class="item"><a href="javascript:void(0)" class="disabled">You can't click me</a></li>
  </ul>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>This is a popover with a list of links. To separate different links, use a <code>.divider</code></p>
</div>

<h5 class="section-title">Popover Positions</h5>
<div class="popover-showcase arrow-showcase">
  <div class="popover -medium -top-left"><code>.-top-left</code></div>
  <div class="popover -medium -top txt-center"><code>.-top</code></div>
  <div class="popover -medium -top-right txt-right"><code>.-top-right</code></div>
  <div class="popover -medium -tall -left-top"><code>.-left-top</code></div>
  <div class="popover -medium -tall -left txt-center"><code>.-left</code></div>
  <div class="popover -medium -tall -left-bottom txt-right"><code>.-left-bottom</code></div>
  <div class="popover -medium -tall -right-top"><code>.-right-top</code></div>
  <div class="popover -medium -tall -right txt-center"><code>.-right</code></div>
  <div class="popover -medium -tall -right-bottom txt-right"><code>.-right-bottom</code></div>
  <div class="popover -medium -bottom-left"><code>.-bottom-left</code></div>
  <div class="popover -medium txt-center">Default position</div>
  <div class="popover -medium -bottom-right txt-right"><code>.-bottom-right</code></div>
</div>

```html
<div class="popover -top-left">...</div>
<div class="popover -top">...</div>
<div class="popover -top-right">...</div>
<div class="popover -left-top">...</div>
<div class="popover -left">...</div>
<div class="popover -left-bottom">...</div>
<div class="popover -right-top">...</div>
<div class="popover -right">...</div>
<div class="popover -right-bottom">...</div>
<div class="popover -bottom-left">...</div>
<div class="popover">...</div>
<div class="popover -bottom-right">...</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>The default popover position (if not specified) is <code>bottom</code></p>
</div>

<h5 class="section-title">Popover in Action</h5>
<div class="popover-showcase -interactive">
  <div class="popover-wrapper">
    <button class="btn -primary" onclick="summonTri()">Summon Tri!</button>
    <div class="popover -demo">
      <img src="../assets/images/pages/avatar/tri.jpg"/>
    </div>
  </div>
</div>
<ul class="nav -centered popover-variants">
  <li class="nav-item -active">
    <a href="javascript:void(0);" class="link" data-arrow-position="-bottom" onclick="changePopoverClass(this);">Default (Bottom)</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-bottom-left" onclick="changePopoverClass(this);">Bottom Left</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-bottom-right" onclick="changePopoverClass(this);">Bottom Right</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-top-left" onclick="changePopoverClass(this);">Top Left</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-top" onclick="changePopoverClass(this);">Top</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-top-right" onclick="changePopoverClass(this);">Top Right</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-left-top" onclick="changePopoverClass(this);">Left Top</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-left" onclick="changePopoverClass(this);">Left</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-left-bottom" onclick="changePopoverClass(this);">Left Bottom</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-right-top" onclick="changePopoverClass(this);">Right Top</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-right" onclick="changePopoverClass(this);">Right</a>
  </li>
  <li class="nav-item">
    <a href="javascript:void(0);" class="link" data-arrow-position="-right-bottom" onclick="changePopoverClass(this);">Right Bottom</a>
  </li>
</ul>

```html
// Here's the markup for the setup above
<div class="popover-wrapper">
  <button class="btn -primary">Your Button</button>
  <div class="popover -top">
    ...
  </div>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>The popover and its trigger mechanism should be wrapped around a <code>.popover-wrapper</code> for it to be able to work and positioned correctly.</p>
</div>

<script type="text/javascript">
  var demoPopover = document.querySelector('.-demo'),
      navItem = document.querySelectorAll('.nav-item'),
      listClasses = document.querySelectorAll('.popover-variants .nav-item .link');

  function changePopoverClass(arrowOption){
    var arrowPos = arrowOption.getAttribute('data-arrow-position'),
        parent = arrowOption.parentNode;

    for (i = 0; i < listClasses.length; i++){
      var currentClassName = listClasses[i].getAttribute('data-arrow-position');

      if (demoPopover.classList.contains(currentClassName)){
        demoPopover.classList.remove(currentClassName);
      }
    }

    for (j = 0; j < navItem.length; j++){
      var currentNavItem = navItem[j];

      if (currentNavItem.classList.contains('-active')){
        currentNavItem.classList.remove('-active');
      }
    }

    demoPopover.classList.add(arrowPos);
    parent.classList.add('-active');
  }

  function summonTri(){
    demoPopover.classList.toggle('popped');
  }
</script>
