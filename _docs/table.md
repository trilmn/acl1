---
layout: doc
title: Table
---
<h5 class="section-title">Simple Table</h5>
<p>This is the bare bone of tables. Formed by <code>&lt;table&gt;</code> tag. Further styling and modification is allowed but should be consistent with the overall system. Selected row should have class <code>.selected</code></p>

<div class="table-demo">
  <table class="table">
    <thead>
      <tr>
        <th class="checkbox-item">
          <div class="checkbox-wrapper">
            <input type="checkbox" class="checkbox" id="checkbox-1" />
            <label for="checkbox-1"></label>
          </div>
        </th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="checkbox-item">
          <div class="checkbox-wrapper">
            <input type="checkbox" class="checkbox" id="checkbox-2" />
            <label for="checkbox-2"></label>
          </div>
        </td>
        <td>John</td>
        <td>Tight</td>
        <td>john.tight357</td>
      </tr>
      <tr>
        <td class="checkbox-item">
          <div class="checkbox-wrapper">
            <input type="checkbox" class="checkbox" id="checkbox-3" />
            <label for="checkbox-3"></label>
          </div>
        </td>
        <td>Pete</td>
        <td>Skinny</td>
        <td>pete_skeleton</td>
      </tr>
      <tr>
        <td class="checkbox-item">
          <div class="checkbox-wrapper">
            <input type="checkbox" class="checkbox" id="checkbox-4" />
            <label for="checkbox-4"></label>
          </div>
        </td>
        <td>Walter</td>
        <td>White</td>
        <td>wwhite.246</td>
      </tr>
    </tbody>
  </table>
  <span class="small">Default table</span>
</div>

<div class="table-demo">
  <table class="table">
    <tbody>
      <tr class="-hover">
        <td class="checkbox-item">
          <div class="checkbox-wrapper">
            <input type="checkbox" class="checkbox" id="checkbox-5" />
            <label for="checkbox-5"></label>
          </div>
        </td>
        <td>John</td>
        <td>Tight</td>
        <td>john.tight357</td>
      </tr>
    </tbody>
  </table>
  <span class="small">Hovered table row</span>
</div>

<div class="table-demo">
  <table class="table">
    <tbody>
      <tr class="selected">
        <td class="checkbox-item">
          <div class="checkbox-wrapper">
            <input type="checkbox" class="checkbox" id="checkbox-6" checked />
            <label for="checkbox-6"></label>
          </div>
        </td>
        <td>John</td>
        <td>Tight</td>
        <td>john.tight357</td>
      </tr>
    </tbody>
  </table>
  <span class="small">Selected table row</span>
</div>

```html
<table class="table">
  <thead>
    <tr>
      <th><input type="checkbox"></th>
      <th>First name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox"></td>
      <td>John</td>
      <td>Tight</td>
      <td>john.tight357</td>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td>Walter</td>
      <td>White</td>
      <td>wwhite.246</td>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td>Pete</td>
      <td>Skinny</td>
      <td>pete_skeleton</td>
    </tr>
  </tbody>
</table>
```

<h5 class="section-title">Table-like with DIV</h5>
<p>Sometimes, using <code>&lt;div&gt;</code> might be needed to display a table as it makes it easier to control inner elements.</p>

<div class="data-table table-demo">
  <div class="row -head">
    <div class="cell checkbox-item">
      <div class="checkbox-wrapper">
        <input type="checkbox" class="checkbox" id="checkbox-7" />
        <label for="checkbox-7"></label>
      </div>
    </div>
    <div class="cell">Fist Name</div>
    <div class="cell">Last Name</div>
    <div class="cell">Username</div>
  </div>

  <div class="row">
    <div class="cell checkbox-item">
      <div class="checkbox-wrapper">
        <input type="checkbox" class="checkbox" id="checkbox-8" />
        <label for="checkbox-8"></label>
      </div>
    </div>
    <div class="cell">John</div>
    <div class="cell">Tight</div>
    <div class="cell">john.tight357</div>
  </div>

  <div class="row">
    <div class="cell checkbox-item">
      <div class="checkbox-wrapper">
        <input type="checkbox" class="checkbox" id="checkbox-9" />
        <label for="checkbox-9"></label>
      </div>
    </div>
    <div class="cell">Pete</div>
    <div class="cell">Skinny</div>
    <div class="cell">pete_skeleton</div>
  </div>

  <div class="row selected">
    <div class="cell checkbox-item">
      <div class="checkbox-wrapper">
        <input type="checkbox" class="checkbox" id="checkbox-10" />
        <label for="checkbox-10"></label>
      </div>
    </div>
    <div class="cell">Walter</div>
    <div class="cell">White</div>
    <div class="cell">wwhite.246</div>
  </div>
</div>

```html
<div class="data-table">
  <!-- Data-table head -->
  <div class="row -head">
    <div class="cell">...</div>
  </div>

  <!-- Other Data-table rows -->
  <div class="row selected">...</div>
  <div class="row">...</div>
</div>
```
