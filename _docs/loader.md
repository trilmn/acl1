---
layout: doc
title: Loading Indicator
---

<h5 class="section-title">General Loading</h5>
<div class="loader-demo">
  <div class="row">
    <div class="loader-general">
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
    </div>
  </div>
</div>

```html
<div class="loader-general">
  <span class="item"></span>
  <span class="item"></span>
  <span class="item"></span>
  <span class="item"></span>
  <span class="item"></span>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Use with fullscreen loading for taking action</p>
</div>

<h5 class="section-title">Inline Loading</h5>
<div class="loader-demo">
  <div class="row">
    <div class="loader-inline">
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
    </div>
  </div>
</div>

```html
<div class="loader-inline">
  <span class="item"></span>
  <span class="item"></span>
  <span class="item"></span>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Use for input validating</p>
</div>

<h5 class="section-title">Loading Bar</h5>
<div id="loaderbar-demo"></div>
<div class="loader-demo">
  <div class="row">
    <div class="loader-bar">
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </div>
</div>
<button class="btn -primary" onclick="barLoading()">Live demo</button>

```html
<div class="loader-bar">
  <span class="bar"></span>
  <span class="bar"></span>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Use for fetching data</p>
</div>


<h5 class="section-title">Dot Loading</h5>
<div class="loader-demo">
  <div class="row">
    <div class="loader-dot">
      <h4>
        Checking
        <span class="dot">
          <span class="item">.</span>
          <span class="item">.</span>
          <span class="item">.</span>
        </span>
      </h4>
    </div>
  </div>
</div>

```html
<div class="loader-dot">
  <h4> Checking
    <span class="dot">
      <span class="item">.</span>
      <span class="item">.</span>
      <span class="item">.</span>
    </span>
  </h4>
</div>
```


<h5 class="section-title">Fullscreen Load</h5>
Apply fullscreen load to General Loading
<div id="general-demo"></div>
<div id="initial-demo"></div>
<div class="loader-demo">
  <div class="row">
    <div class="cols-12">
      <button class="btn -primary" onclick="generalLoading()">General Loader Live Demo</button>
<!-- Highlighter -->
<div markdown="1">
```html
<div class="loader-fullscreen -opacity-background ">
  <div class="loader-container">
    <div class="loader-general">
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
    </div>
  </div>
</div>
```
</div>
<!-- End Highlighter -->

    </div>
  </div>
</div>
<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Use the class <code>.-opacity-background</code> for general fullscreen loading with white opacity background and <code>.-solid-background</code> to cover all layers below</p>
</div>

<script type="text/javascript">
  function generalLoading() {
    var generalLoading = document.getElementById("general-demo");
    generalLoading.innerHTML = "<div class='loader-fullscreen -opacity-background'><div class='loader-container'><div class='loader-general'><span class='item'></span><span class='item'></span><span class='item'></span><span class='item'></span><span class='item'></span></div></div></div>";
    setTimeout(function() {
      generalLoading.innerHTML = "";
    }, 2000);
  }

  function initialLoading() {
    var initialLoading = document.getElementById("initial-demo");
    initialLoading.innerHTML = "<div class='loader-fullscreen -solid-background'> <div class='loader-container'><div class='loader-initial'><div class='loading-anim'><img class='logo' src='../assets/images/pages/loader/logo.svg' /><div class='text'>Loading</div></div></div></div></div>";
    setTimeout(function() {
      initialLoading.innerHTML = "'<div class='loader-fullscreen -solid-background'> <div class='loader-container'><div class='loader-initial'><div class='loading-anim loading-anim-done'><img class='logo' src='../assets/images/pages/loader/logo.svg' /><div class='text'>Loading</div></div></div></div></div>'";
    }, 2000);
    setTimeout(function() {
      initialLoading.innerHTML = "";
    }, 4000);
  }
  function barLoading() {
    var barLoading = document.getElementById("loaderbar-demo");
    barLoading.innerHTML = "<div class='loader-bar'><span class='bar'></span><span class='bar'></span></div>";
    setTimeout(function() {
      barLoading.innerHTML = "";
    }, 3000);
  }
</script>
