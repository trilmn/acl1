---
layout: doc
title: Progress Bar
---

<h5 class="section-title">Default Progress Bar</h5>
<div class="progress-demo row">
  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="progress-bar">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">In-progress progress</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="progress-bar">
        <span class="progress" style="width: 100%;"></span>
      </div>
      <span class="text">Complete progress</span>
    </div>
  </div>
</div>

```html
<div class="progress-bar">
    <span class="progress" style="width: 50%;"></span>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>Progress bar sizes vary depending on the size of their containing element. It is recommended to determine the size of the progress bar by using <code>.cols-*</code> layout classes. Also, as shown in the code block above, the progress width is currently defined inline for demo purpose.</p>
</div>

<h5 class="section-title">Progress Bar States</h5>
Progress bar colors / states can easily be set by adding the following classes: `.-disabled` `.-success` `.-warning` `.-danger`
<div class="progress-demo row">
  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="progress-bar -disabled"></div>
      <span class="text">Disabled State</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="progress-bar">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">Active State</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="progress-bar -success">
        <span class="progress" style="width: 100%;"></span>
      </div>
      <span class="text">Success State</span>
    </div>
  </div>
</div>

<div class="progress-demo row">
  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="progress-bar -warning">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">Warning State</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="progress-bar -danger">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">Danger State</span>
    </div>
  </div>
</div>

```html
<!-- Disabled State -->
<div class="progress-bar -disabled"></div>

<!-- Active State -->
<div class="progress-bar">
  <span class="progress" style="width: 50%;"></span>
</div>

<!-- Success State -->
<div class="progress-bar -success">
  <span class="progress" style="width: 100%;"></span>
</div>

<!-- Warning State -->
<div class="progress-bar -warning">
  <span class="progress" style="width: 50%;"></span>
</div>

<!-- Danger State -->
<div class="progress-bar -danger">
  <span class="progress" style="width: 50%;"></span>
</div>
```

<h5 class="section-title">Progress Bar With Text</h5>
<div class="progress-demo row">
  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="text">
        <span class="disabled">+ Select file</span>
      </div>
      <div class="progress-bar -disabled"></div>
      <span class="text">Upload disabled. Please verify your account.</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="text">
        <span>Contract.pdf</span>
        <span class="txt-primary right">0%</span>
      </div>
      <div class="progress-bar">
        <span class="progress"></span>
      </div>
      <span class="text">Your upload is about to start…</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="text">
        <span>Contract.pdf</span>
        <span class="txt-primary right">50%</span>
      </div>
      <div class="progress-bar">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">Uploading file…</span>
    </div>
  </div>
</div>

<div class="progress-demo row">
  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="text">
        <span>Skylight.mp3</span>
        <span class="txt-success right">100%</span>
      </div>
      <div class="progress-bar -success">
        <span class="progress" style="width: 100%;"></span>
      </div>
      <span class="text">Download complete!</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="text">
        <span>Video_2016.mp4</span>
        <span class="txt-warning right">50%</span>
      </div>
      <div class="progress-bar -warning">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">Your file exceeds the quota size limit.</span>
    </div>
  </div>

  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="text">
        <span class="file">Design_Brief.pdf</span>
        <span class="txt-danger right">50%</span>
      </div>
      <div class="progress-bar -danger">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">Oops! An error occured.</span>
    </div>
  </div>
</div>

<div class="progress-demo row">
  <div class="cols-4">
    <div class="progress-bar-wrapper">
      <div class="text">
        <span><i class="icon -document"></i> Contract.pdf</span>
        <span class="txt-primary right">50%</span>
      </div>
      <div class="progress-bar -primary">
        <span class="progress" style="width: 50%;"></span>
      </div>
      <span class="text">Uploading file…</span>
    </div>
  </div>
</div>

```html
<div class="progress-bar-wrapper">
  <div class="text">
    <span>Contract.pdf</span>
    <span class="-primary right">50%</span>
  </div>
  <div class="progress-bar">
    <span class="progress" style="width: 50%;"></span>
  </div>
  <span class="text">Uploading file…</span>
</div>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>When using progress bars with text, make sure to always use <code>.progress-bar-wrapper</code></p>
</div>

<h5 class="section-title">Progress Bar Usage</h5>
<!-- Modal With Progress Bars -->
<div class="modal-demo progress-usage -medium">
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <h3 class="title">Upload Documents</h3>
        <button class="btn -plain" title="Close"><i class="icon -close"></i></button>
      </div>

      <div class="modal-body">
        <div class="progress-bar-wrapper row">
          <div class="cols-6">
            <div class="text">
              <span>Contract.pdf</span>
              <span class="txt-primary right">50%</span>
            </div>
            <div class="progress-bar">
                <span class="progress" style="width: 50%;"></span>
            </div>
          </div>
          <div class="cols-3"><span class="upload-status small"></span></div>
          <div class="cols-3"></div>
        </div>

        <div class="progress-bar-wrapper row">
          <div class="cols-6">
            <div class="text">
              <span>Skylight.mp3</span>
              <span class="txt-success right">Done</span>
            </div>
            <div class="progress-bar -success">
                <span class="progress" style="width: 100%;"></span>
            </div>
          </div>
          <div class="cols-3"><span class="upload-status small txt-success right"><i>Upload Complete.</i></span></div>
          <div class="cols-3"><i class="icon -trash remove right"></i></div>
        </div>

        <div class="progress-bar-wrapper row">
          <div class="cols-6">
            <div class="text">
              <span>Design_Brief.pdf</span>
              <span class="txt-danger right">Failed</span>
            </div>
            <div class="progress-bar -danger">
              <span class="progress" style="width: 50%;"></span>
            </div>
          </div>
          <div class="cols-3"><span class="upload-status small txt-danger right"><i>An error occured.</i></span></div>
          <div class="cols-3"><i class="icon -trash remove right"></i></div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn -primary">+ Add File</button>
      </div>
    </div>
  </div>
</div>

<!-- Form With Progress Bar -->
<div class="progress-usage">
  <form>
    <div class="form-group">
      <div class="cols-6">
        <label class="form-label">Name</label>
        <input class="text-field" placeholder="Your name...">
      </div>
      <div class="cols-6">
        <label class="form-label">Email</label>
        <input class="text-field cols-6" placeholder="Your email...">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Message</label>
      <textarea class="textarea" placeholder="Enter your message..."></textarea>
    </div>
    <div class="form-group">
      <div class="cols-5">
        <div class="progress-bar-wrapper">
          <div class="text">
            <span>Contract.pdf</span>
            <span class="txt-primary right">50%</span>
          </div>
          <div class="progress-bar">
              <span class="progress" style="width: 50%;"></span>
          </div>
        </div>
      </div>
      <div class="cols-7">
        <span class="text add-file right">+ Add File</span>
      </div>
    </div>
    <div class="form-group">
      <button class="btn -success">Submit</button>
    </div>
  </form>
</div>

<h5 class="section-title">Related mixin</h5>
```scss
@mixin progress-variant($container-bg-color, $progress-bg-color) {
    background-color: $container-bg-color;

    .progress {
        background-color: $progress-bg-color;
    }
}
```

**Example**

Usage:

```scss
.element {
  @include progress-variant($primary-color-light-100, $primary-color);
}
```

CSS Output:

```css
.element {
  background-color: #ecf7fd;
}

.element .progress {
  background-color: #1e99eb;
}
```
