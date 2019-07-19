---
layout: doc
title: Toast 🍞
---

<h5 class="section-title">BASIC TOAST</h5>
<div class="toast-showcase">
  <div class="toast open">
    <span>This is a toast's sample content. You should keep it short, precise and to-the-point.</span>
  </div>
  <span class="type small">Default</span>

  <div class="toast -info open">
    <span>This is a toast's sample content. You should keep it short, precise and to-the-point.</span>
  </div>
  <span class="type small">Info</span>

  <div class="toast -success open">
    <span>This is a toast's sample content. You should keep it short, precise and to-the-point.</span>
  </div>
  <span class="type small">Success</span>

  <div class="toast -warning open">
    <span>This is a toast's sample content. You should keep it short, precise and to-the-point.</span>
  </div>
  <span class="type small">Warning</span>

  <div class="toast -danger open">
    <span>This is a toast's sample content. You should keep it short, precise and to-the-point.</span>
  </div>
  <span class="type small">Danger</span>
</div>

```html
<div class="toast-wrapper">
  <!-- Default Toast -->
  <div class="toast">...</div>

  <!-- Info Toast -->
  <div class="toast -info">...</div>

  <!-- Success Toast -->
  <div class="toast -success">...</div>

  <!-- Warning Toast -->
  <div class="toast -warning">...</div>

  <!-- Danger Toast -->
  <div class="toast -danger">...</div>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <ul>
    <li>Always wrap toast in <code>.toast-wrapper</code></li>
    <li>Messages inside a toast should be short, precise and to-the-point.</li>
    <li>The content should not exceed <strong>140 characters</strong>, so choose your words carefully.</li>
    <li>Use basic toast with class <code>.toast</code></li>
    <li>Add classes <code>.-info</code> <code>.-success</code> <code>.-warning</code> <code>.-danger</code> to use other variants.</li>
    <li>Toasts have fixed width.</li>
  </ul>
</div>

<h5 class="section-title">DISMISSIBLE TOAST</h5>
Toasts could be dismissible. Simply add a closing button as a mechanism to enable that functionality.
<div class="toast-showcase -dismiss">
  <div class="toast open">
    <span>I am a dismissible toast. Close me by clicking the button on the right.</span>
    <button class="btn -plain" aria-label="close" onclick="dismissSystemMessage(this)">
      {% include icon-svg.html param="cross" %}
    </button>
  </div>
  <div class="toast -info open">
    <span>I am a dismissible toast. Close me by clicking the button on the right.</span>
    <button class="btn -plain" aria-label="close" onclick="dismissSystemMessage(this)">
      {% include icon-svg.html param="cross" %}
    </button>
  </div>
  <div class="toast -success open">
    <span>I am a dismissible toast. Close me by clicking the button on the right.</span>
    <button class="btn -plain" aria-label="close" onclick="dismissSystemMessage(this)">
      {% include icon-svg.html param="cross" %}
    </button>
  </div>
  <div class="toast -warning open">
    <span>I am a dismissible toast. Close me by clicking the button on the right.</span>
    <button class="btn -plain" aria-label="close" onclick="dismissSystemMessage(this)">
      {% include icon-svg.html param="cross" %}
    </button>
  </div>
  <div class="toast -danger open">
    <span>I am a dismissible toast. Close me by clicking the button on the right.</span>
    <button class="btn -plain" aria-label="close" onclick="dismissSystemMessage(this)">
      {% include icon-svg.html param="cross" %}
    </button>
  </div>
</div>

```html
<div class="toast-wrapper">
  <div class="toast">
    <span><!-- Toast content --></span>
    <button class="btn -plain" aria-label="close">
      <svg class="icon-svg">
        <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-cross"></use>
      </svg>
    </button>
  </div>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <ul>
    <li>By default, a toast is not visible. When a toast is called, class <code>.open</code> will be added to display it.</li>
    <li><code>aria-label="close"</code> is to improve accessiblity for people using screen readers. Please consider including it when creating a close button.</li>
  </ul>
</div>

<h5 class="section-title">LIVE DEMO</h5>
<div class="toast-showcase">
  <button class="btn -primary" onclick="showSystemMessage()">Give me a toast</button>
</div>

<div class='toast-wrapper -demo'></div>

<h5 class="section-title">Related mixin</h5>

```scss
@mixin toast-generator($background-color, $border-color, $text-color) {
    @include info-box($background-color, $border-color, $text-color);

    > .btn:hover {
        background-color: $border-color;
    }
}
```
<div class="notice-msg">
  <b>Notice: </b>
  <p>Take a look at the <a href="/docs/mixins.html">Mixin Page</a> for more information about <code>info-box</code> mixin.</p>
</div>

**Example**

Usage:

```scss
.element {
    @include toast-generator($warning-color-light-100, $warning-color-light-80, $warning-color-dark-20);
}
```

CSS Output:

```css
.element {
    background-color: #f6eedf;
    border: 1px solid #eddebf;
    border-radius: 3px;
    color: #af8531;
}
.element > .btn:hover {
    background-color: #eddebf;
}
```

<script type="text/javascript">
  function dismissSystemMessage(button) {
    var toast = button.parentNode;

    toast.classList.remove('open');
    toast.classList.add('close');

    setTimeout(function() {
      toast.remove();
    }, 600);
  }

  function showSystemMessage() {
    var toast = document.querySelector('.-demo');
    toast.innerHTML = "<div class='toast -success winning-lottery'><span>Congratulations! You've just won <strong>$1,000,000!</strong> Click <a href='http://assets.diylol.com/hfs/0f7/fc4/4f4/resized/lottery-meme-generator-yeah-bitches-i-won-the-lottery-a7b223.png?1394919597.jpg' target='_blank'>here</a> to claim it!</span><button class='btn -plain' aria-label='close' onclick='dismissSystemMessage(this)'><svg class='icon-svg'><use xlink:href='../assets/super-tight-icon-set/dist/stis-master.svg#icon-cross'></use></svg></button></div>";

    setTimeout(function() {
      var winningMessage = document.querySelector('.winning-lottery');

      winningMessage.classList.add('open');
    }, 100);
  }
</script>
