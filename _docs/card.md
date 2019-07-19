---
layout: doc
title: Card
---

<h5 class="section-title">Simple Card</h5>

<div class="card-demo">
  <div class="row">
    <div class="cols-5">
      <div class="card">
        This is the most simple card
      </div>
    </div>
  </div>
</div>

```html
<div class="card">
  This is the most simple card
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>The width of <code>.card</code> is set to 100%, meaning that the size of a card depends on its wrapping container.</p>
</div>

<h5 class="section-title">Color Variants</h5>
<div class="card-demo">
  <div class="row">
    <div class="cols-5">
      <div class="card -primary">
        This is a primary card
      </div>
    </div>
  </div>
  <div class="row">
    <div class="cols-5">
      <div class="card -success">
        This is a success card
      </div>
    </div>
  </div>
  <div class="row">
    <div class="cols-5">
      <div class="card -warning">
        This is a warning card
      </div>
    </div>
  </div>
  <div class="row">
    <div class="cols-5">
      <div class="card -danger">
        This is a danger card
      </div>
    </div>
  </div>
</div>

```html
<div class="card -primary">...</div>
<div class="card -success">...</div>
<div class="card -warning">...</div>
<div class="card -danger">...</div>
```

<h5 class="section-title">Usage</h5>
<div class="card-demo">
  <div class="row">
    <div class="cols-5">
      <div class="card text-heavy-card">
        <div class="avatar-block">
          <div class="avatar -medium">WT</div>
          <div class="nameholder">
            <span class="title">Will Taylor (You)</span>
            <span class="description small">Product Designer</span>
          </div>
        </div>
        <p>A card can contain many things — really. It is up to you to decide. However, keep in mind that cards are usually meant for short and quick content. This is why it is good practice to avoid adding too many things inside them.</p>
        <button class="btn -primary">Okay, got it!</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="cols-5">
  <div class="card">
    <div class="avatar-block">
      <div class="avatar -medium">WT</div>
      <div class="nameholder">
        <span class="name">Will Taylor (You)</span>
        <span class="role small">Product Designer</span>
      </div>
    </div>
    <p>A card can contain many things —  ...</p>
    <button class="btn -primary">Okay, got it!</button>
  </div>
</div>
```
