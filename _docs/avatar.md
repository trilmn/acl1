---
layout: doc
title: Avatar
---

<h5 class="section-title">Sizes</h5>

<div class="avatar-showcase">
  <div class="avatar -small">W</div><div class="size">Small</div>
  <div class="avatar">WT</div><div class="size">Default</div>
  <div class="avatar -large">WT</div><div class="size">Large</div>
  <div class="avatar -xlarge">WT</div><div class="size">Extra Large</div>
  <div class="avatar -xxlarge">WT</div><div class="size">Extreme Extra Large</div>
</div>

```html
<div class="avatar -small">W</div>
<div class="avatar">WT</div>
<div class="avatar -large">WT</div>
<div class="avatar -xlarge">WT</div>
<div class="avatar -xxlarge">WT</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Small avatars should only have one initial.<br/></p>
</div>

<h5 class="section-title">Square Shape</h5>
Use class `.-square` to turn default rounded avatar into square avatar.
<div class="avatar-showcase">
  <div class="avatar -square -small">W</div><div class="size">Small</div>
  <div class="avatar -square">WT</div><div class="size">Default</div>
  <div class="avatar -square -large">WT</div><div class="size">Large</div>
  <div class="avatar -square -xlarge">WT</div><div class="size">Extra Large</div>
  <div class="avatar -square -xxlarge">WT</div><div class="size">Extreme Extra Large</div>
</div>

```html
<div class="avatar -square -small">W</div>
<div class="avatar -square">WT</div>
<div class="avatar -square -large">WT</div>
<div class="avatar -square -xlarge">WT</div>
<div class="avatar -square -xxlarge">WT</div>
```

<h5 class="section-title">With nameholder</h5>

<div class="avatar-showcase">
  <div class="avatar-block">
    <div class="avatar -small">W</div>
    <div class="nameholder">
      <div class="title">Will Taylor (You)</div>
    </div>
  </div>
  <div class="avatar-block">
    <div class="avatar">WT</div>
    <div class="nameholder">
      <div class="title">Will Taylor (You)</div>
      <div class="description small">Product Designer</div>
    </div>
  </div>
  <div class="avatar-block">
    <div class="avatar -large">WT</div>
    <div class="nameholder">
      <div class="title">Will Taylor (You)</div>
      <div class="description small">Product Designer</div>
    </div>
  </div>
  <div class="avatar-block">
    <div class="avatar -xlarge">WT</div>
    <div class="nameholder">
      <div class="title">Will Taylor (You)</div>
      <div class="description small">Product Designer</div>
    </div>
  </div>
  <div class="avatar-block">
    <div class="avatar -xxlarge">WT</div>
    <div class="nameholder">
      <div class="title">Will Taylor (You)</div>
      <div class="description small">Product Designer</div>
    </div>
  </div>
</div>

```html
<div class="avatar-block">
  <div class="avatar">WT</div>
  <div class="nameholder">
    <div class="title">Will Taylor (You)</div>
    <div class="description small">Product Designer</div>
  </div>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>When placed inside an <code>.avatar-block</code>, you can specify the size of an avatar by adding it next to the class <code>.avatar</code>
  <br/>
  If using <code>.small</code> as the size of your avatar, you should only have <code>.name</code> (without <code>.role</code>)
  </p>
</div>

<h5 class="section-title">With Profile Photo</h5>
<div class="avatar-showcase">
  <div class="avatar -small"><img src="../assets/images/pages/avatar/tri.jpg"/></div><div class="size">Small</div>
  <div class="avatar"><img src="../assets/images/pages/avatar/tri.jpg"/></div><div class="size">Default</div>
  <div class="avatar -large"><img src="../assets/images/pages/avatar/tri.jpg"/></div><div class="size">Large</div>
  <div class="avatar -xlarge"><img src="../assets/images/pages/avatar/tri.jpg"/></div><div class="size">Extra Large</div>
  <div class="avatar -xxlarge"><img src="../assets/images/pages/avatar/tri.jpg"/></div><div class="size">Extreme Extra Large</div>
</div>

```html
<div class="avatar -small"><img src="your cat's selfie"/></div>
<div class="avatar"><img src="your cat's selfie"/></div>
<div class="avatar -large"><img src="your cat's selfie"/></div>
<div class="avatar -xlarge"><img src="your cat's selfie"/></div>
<div class="avatar -xxlarge"><img src="your cat's selfie"/></div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Square photos are best displayed in an avatar.</p>
</div>

<h5 class="section-title">Related mixin</h5>

```scss
@mixin avatar-size-generator($size, $font-size) {
  	@include size($size);
  	font-size: $font-size;
  	line-height: $size;
  	min-width: $size;
}
```

This mixin takes in the `$size` for the avatar and its appropriate `$font-size` then spit out the correct styling for each size of the avatar. Also, the `line-height` will take the size of the avatar as well to make sure things are vertically aligned center.
