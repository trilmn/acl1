---
layout: doc
title: Modal
---
<h5 class="section-title">Default Modal</h5>
<p>A modal consists of three specific parts. First is the header where title and close button are located. Second is the body where all the main content is. And third is the modal footer containing our CTA buttons.</p>

<div class="modal-demo card">
  <button class="btn -primary" onclick="openModal()">Click me for a modal</button>
</div>

<div class="modal-demo -medium">
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <h3 class="title">Modal Title</h3>
        <button class="btn -plain" title="Close">
          {% include icon-svg.html param="cross" %}
        </button>
      </div>

      <div class="modal-body">
        <p>This is some text inside the default/medium modal body</p>
      </div>

      <div class="modal-footer">
        <button class="btn">Cancel</button>
        <button class="btn -primary">Action</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal-wrapper">
  <div class="modal-overlay">
    <div class="modal">

      <!-- Modal Header -->
      <div class="modal-header">
        <h3 class="title">Modal Title</h3>
        <button class="btn -plain" title="Close">
          <svg class="icon-svg">
            <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-cross"></use>
          </svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <p>This is some text inside the small modal body</p>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <button class="btn -primary">Action</button>
      </div>
    </div>
  </div>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Modal will automatically add a class <code>.disable-scroll</code> to the <code>&lt;body&gt;</code> so that if the modal's content is longer than the window's height, user can still scroll down through the rest of the modal.</p>
</div>

<h5 class="section-title">Large Modal</h5>
<div class="modal-demo -large">
  <div class="modal-wrapper -large">
    <div class="modal">
      <div class="modal-header">
        <h3 class="title">Modal Title</h3>
        <button class="btn -plain" title="Close">
          {% include icon-svg.html param="cross" %}
        </button>
      </div>

      <div class="modal-body">
        <p>This is some text inside the small modal body</p>
      </div>

      <div class="modal-footer">
        <button class="btn -primary">Action</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal-wrapper -large">...</div>
```

<!-- demo modal -->
<div class="modal-wrapper" id="modal-showcase">
  <div class="modal-overlay" onclick="closeModalByOverlay(event);">
    <div class="modal">
      <div class="modal-header">
        <h3 class="title">Modal Title</h3>
        <button class="btn -plain -close" title="Close" onclick="closeModal()">
          {% include icon-svg.html param="cross" %}
        </button>
      </div>
      <div class="modal-body">
        “Isn't it odd how much fatter a book gets when you've read it several times?" Mo had said..."As if something were left between the pages every time you read it. Feelings, thoughts, sounds, smells...and then, when you look at the book again many years later, you find yourself there, too, a slightly younger self, slightly different, as if the book had preserved you like a pressed flower...both strange and familiar.” - Cornelia Funke
      </div>
      <div class="modal-footer">
        <button class="btn" onclick="closeModal()">Cancel</button>
        <button class="btn -success">Submit</button>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  var body = document.body;
  var modal = document.getElementById('modal-showcase');
  var overlay = document.querySelector('#modal-showcase .modal-overlay');
  var content = document.querySelector('#modal-showcase .modal');
  var scrollbarWidth = window.innerWidth - body.clientWidth;

  function  openModal() {
    if(modal) {
      body.style.paddingRight = scrollbarWidth + 'px';
      overlay.style.paddingRight = scrollbarWidth + 'px';
      modal.className += modal.className ? ' open' : 'open';
      body.className += body.className ? ' disable-scroll' : 'disable-scroll';;
    }
  }

  function closeModal() {
    if(modal) {
      modal.className += modal.className ? ' close' : 'close';
    }

    setTimeout(function(){
      overlay.scrollTop = 0;
      modal.classList.remove('close', 'open');
      body.style.paddingRight = null;
      overlay.style.paddingRight = null;
      body.classList.remove('disable-scroll');
    }, 200);
  }

  function closeModalByOverlay(event) {
    if (event.target == overlay) {
      if(modal) {
        modal.className += modal.className ? ' close' : 'close';
      }

      setTimeout(function(){
        overlay.scrollTop = 0;
        modal.classList.remove('close', 'open');
        body.style.paddingRight = null;
        overlay.style.paddingRight = null;
        body.classList.remove('disable-scroll');
      }, 200);
    }
  }

  window.onkeydown = function( event ) {
    if (event.keyCode === 27 && modal.classList.contains('open')) {
      closeModal();
    }
  };
</script>
