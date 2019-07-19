---
layout: doc
title: Form
---

<!-- Input -->
<h5 class="section-title">Input Field & Validation</h5>
Can be used by adding the class `.text-field`
<div class="form-layout">
  <div class="row">
    <p class="cols-2">Default</p>
    <div class="cols-10">
      <input class="text-field" placeholder="This is a placeholder text">
    </div>
  </div>
  <div class="row">
    <p class="cols-2">Hovered</p>
    <div class="cols-10">
      <input class="text-field -hover" placeholder="This is a hovered input field">
    </div>
  </div>
  <div class="row">
    <p class="cols-2">Focused</p>
    <div class="cols-10">
      <input class="text-field -focused" placeholder="This is a focused input field">
    </div>
  </div>
  <div class="row">
    <p class="cols-2">Valid Input</p>
    <div class="cols-10 form-validated">
      <input class="text-field -success" value="This is a valid input">
      <i class="usage">Use this style by adding the class <code>.-success</code></i>
    </div>
  </div>
  <div class="row">
    <p class="cols-2">Invalid Input</p>
    <div class="cols-10">
        <div>
          <input class="text-field -error" value="This is an invalid input">
          <i class="usage">Use this style by adding the class <code>.-error</code></i>
          <p class="form-error-msg">This is an error message for the invalid input</p>
        </div>
    </div>
  </div>
  <div class="row">
    <p class="cols-2">Disabled Input</p>
    <div class="cols-10">
      <input class="text-field disabled" value="This is a disabled input">
      <i class="usage">Use this style by adding the class <code>.disabled</code></i>
    </div>
  </div>
  <div class="row">
    <p class="cols-2">Read Only Input</p>
    <div class="cols-10">
      <input class="text-field" value="This is a read only input" readonly>
      <i class="usage">Use this style by adding <code>readonly</code> attribute</i>
    </div>
  </div>
</div>

```html
<input type="text" class="text-field" placeholder="johndoe">
```

<!-- Form Label -->
<h5 class="section-title">Form label</h5>
Use the class `.form-label` to style `<label>`.
<div>
  <label class="form-label">This is a label</label>
  <input class="text-field" placeholder="This is a placeholder text">
</div>

```html
<label class="form-label">This is a label</label>
```

<!-- Textarea -->
<h5 class="section-title">Textarea</h5>
Can be used by adding the class <code>.textarea</code>
<div class="row">
  <div class="cols-12">
    <textarea class="textarea" rows="4" placeholder="This is a placeholder text"></textarea>
  </div>
</div>

```html
<textarea class="textarea" placeholder="This is a placeholder text"></textarea>
```

<!-- Radio -->
<h5 class="section-title">Radio Button</h5>
<div class="form-layout -radio-button">
  <div class="row">
    <div class="cols-3">
      <div class="radio-wrapper">
        <input type="radio" class="radio-btn" id="radio-1" name="demo-radio">
        <label for="radio-1">Default radio button</label>
      </div>
    </div>
    <div class="cols-3">
      <div class="radio-wrapper">
        <input type="radio" class="radio-btn" checked id="radio-2" name="demo-radio">
        <label for="radio-2">Selected radio button</label>
      </div>
    </div>
    <div class="cols-3">
      <div class="radio-wrapper">
        <input type="radio" disabled class="radio-btn" id="radio-3" name="demo-radio">
        <label for="radio-3">Disabled radio button</label>
      </div>
    </div>
    <div class="cols-3">
      <div class="radio-wrapper">
        <input type="radio" disabled checked class="radio-btn" id="radio-4" name="demo-radio-disable">
        <label for="radio-4">Disabled checked radio button</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="radio-wrapper">
  <input type="radio" class="radio-btn" id="radio-1" name="group-1">
  <label for="radio-1">Default radio button</label>
</div>
```

<!-- Checkbox -->
<h5 class="section-title">Checkbox</h5>
<div class="radio-layout">
  <div class="row">
    <div class="cols-3">
      <div class="checkbox-wrapper">
        <input type="checkbox" class="checkbox" id="checkbox-1" />
        <label for="checkbox-1">Default checkbox</label>
      </div>
    </div>
    <div class="cols-3">
      <div class="checkbox-wrapper">
        <input type="checkbox" checked class="checkbox" id="checkbox-3" />
        <label for="checkbox-3">Selected checkbox</label>
      </div>
    </div>
    <div class="cols-3">
      <div class="checkbox-wrapper">
        <input type="checkbox" disabled class="checkbox" id="checkbox-4" />
        <label for="checkbox-4">Disabled checkbox</label>
      </div>
    </div>
    <div class="cols-3">
      <div class="checkbox-wrapper">
        <input type="checkbox" disabled checked class="checkbox" id="checkbox-5" />
        <label for="checkbox-5">Selected disabled checkbox</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="checkbox-wrapper">
  <input type="checkbox" class="checkbox" id="checkbox-1" />
  <label for="checkbox-1">Default checkbox</label>
</div>
```

<!-- Selection Dropdown -->
<h5 class="section-title">Selection dropdown</h5>
<div class="form-layout">
  <div class="row">
    <div class="cols-7">
      <div class="dropdown">
        <div class="dropdown-selection">
          <input class="selection" type="text" value="This is default option">
        </div>
        <ul class="list">
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item -selected"> This is an option from the list </li>
        </ul>
      </div>
    </div>
    <div class="cols-5">
      <i>Default dropdown</i>
    </div>
  </div>
  <div class="row">
    <div class="cols-7">
      <div class="dropdown disabled">
        <div class="dropdown-selection">
          <input class="selection" type="text" value="This is default option">
        </div>
        <ul class="list">
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item -selected"> This is a selected option from the list </li>
        </ul>
      </div>
    </div>
    <div class="cols-5">
      <i>Disable dropdown by adding the class <code>.disabled</code></i>
    </div>
  </div>
  <div class="row">
    <div class="cols-7">
      <div class="dropdown active">
        <div class="dropdown-selection">
          <input class="selection -active" type="text" value="This is an option from the list">
        </div>
        <ul class="list -show">
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item"> This is an option from the list </li>
          <li class="item -selected"> This is a selected option from the list </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="dropdown">
  <div class="dropdown-selection">
    <input class="selection" type="text" value="This is default option">
  </div>
  <ul class="list">
    <li class="item"> This is an option from the list </li>
    ...
    <li class="item selected"> This is an option from the list </li>
  </ul>
</div>
```

<div class="notice-msg">
  <b>Notice: </b>
  <p>Above is just UI, we will have exact usage when we decide which library to use for dropdown-box.</p>
</div>

<!-- Datepicker -->
<h5 class="section-title">Datepicker</h5>
<div class="form-layout datepicker-demo">
  <div class="row">
    <div class="cols-4">
      <div class="datepicker">
        <div class="selection">November 26</div>
      </div>
    </div>
    <div class="cols-5">
      <i>Default datepicker</i>
    </div>
  </div>
  <div class="row">
    <div class="cols-4">
      <div class="datepicker disabled">
        <div class="selection">November 26</div>
      </div>
    </div>
    <div class="cols-5">
      <i>Disable datepicker by adding the class <code>.disabled</code></i>
    </div>
  </div>
  <div class="row">
    <div class="cols-4">
      <div class="datepicker">
        <div class="selection -active">November 26</div>
        <div class="inner">
          <div class="calendar">
            <div class="title">
              <div class="date-label">December
                <select class="select">
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11" selected="">December</option>
                </select>
              </div>
              <div class="date-label">2015
                <select class="select">
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015" selected="">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              <button class="prev" type="button">Previous Month</button>
              <button class="next" type="button">Next Month</button>
            </div>
            <table cellpadding="0" cellspacing="0" class="day-table">
              <thead>
                  <tr>
                    <th class="weekday-holder" scope="col"><abbr class="weekday" title="Sunday">S</abbr></th>
                    <th class="weekday-holder" scope="col"><abbr class="weekday" title="Monday">M</abbr></th>
                    <th class="weekday-holder" scope="col"><abbr class="weekday" title="Tuesday">T</abbr></th>
                    <th class="weekday-holder" scope="col"><abbr class="weekday" title="Wednesday">W</abbr></th>
                    <th class="weekday-holder" scope="col"><abbr class="weekday" title="Thursday">T</abbr></th>
                    <th class="weekday-holder" scope="col"><abbr class="weekday" title="Friday">F</abbr></th>
                    <th class="weekday-holder" scope="col"><abbr class="weekday" title="Saturday">S</abbr></th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="day-holder day-empty"></td>
                  <td class="day-holder day-empty"></td>
                  <td data-day="1" class="day-holder day-disabled">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="1">1</button>
                  </td>
                  <td data-day="2" class="day-holder day-disabled">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="2">2</button>
                  </td>
                  <td data-day="3" class="day-holder day-disabled">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="3">3</button>
                  </td>
                  <td data-day="4" class="day-holder day-disabled">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="4">4</button>
                  </td>
                  <td data-day="5" class="day-holder day-disabled">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="5">5</button>
                  </td>
                </tr>
                <tr>
                  <td data-day="6" class="day-holder day-disabled">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="6">6</button>
                  </td>
                  <td data-day="7" class="day-holder day-disabled">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="7">7</button>
                  </td>
                  <td data-day="8" class="day-holder day-today day-selected">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="8">8</button>
                  </td>
                  <td data-day="9" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="9">9</button>
                  </td>
                  <td data-day="10" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="10">10</button>
                  </td>
                  <td data-day="11" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="11">11</button>
                  </td>
                  <td data-day="12" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="12">12</button>
                  </td>
                </tr>
                <tr>
                  <td data-day="13" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="13">13</button>
                  </td>
                  <td data-day="14" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="14">14</button>
                  </td>
                  <td data-day="15" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="15">15</button>
                  </td>
                  <td data-day="16" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="16">16</button>
                  </td>
                  <td data-day="17" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="17">17</button>
                  </td>
                  <td data-day="18" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="18">18</button>
                  </td>
                  <td data-day="19" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="19">19</button>
                  </td>
                </tr>
                <tr>
                  <td data-day="20" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="20">20</button>
                  </td>
                  <td data-day="21" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="21">21</button>
                  </td>
                  <td data-day="22" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="22">22</button>
                  </td>
                  <td data-day="23" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="23">23</button>
                  </td>
                  <td data-day="24" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="24">24</button>
                  </td>
                  <td data-day="25" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="25">25</button>
                  </td>
                  <td data-day="26" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="26">26</button>
                  </td>
                </tr>
                <tr>
                  <td data-day="27" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="27">27</button>
                  </td>
                  <td data-day="28" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="28">28</button>
                  </td>
                  <td data-day="29" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="29">29</button>
                  </td>
                  <td data-day="30" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="30">30</button>
                  </td>
                  <td data-day="31" class="day-holder">
                    <button class="day" type="button" data-year="2015" data-month="11" data-day="31">31</button>
                  </td>
                  <td class="day-holder day-empty"></td>
                  <td class="day-holder day-empty"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="cols-5">
      <i>Active datepicker</i>
    </div>
  </div>
</div>

```html
<!-- Default Datepicker-->
<div class="datepicker">
  <div class="selection"></div>
  <div class="inner">
    <div class="calendar">...</div>
  </div>
</div>
```

<!-- Form Layout -->
<h5 class="section-title">Basic Form Layout</h5>
As shown below, default layout for `<form>` is set to full-width:
<form>
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="text" class="text-field" placeholder="Enter your email">
  </div>
  <div class="form-group">
    <label class="form-label">Password</label>
    <input type="password" class="text-field" placeholder="Enter your password">
  </div>
  <div class="form-group">
    <div class="checkbox-wrapper">
      <input type="checkbox" class="checkbox" id="remember-password" />
      <label for="remember-password">Remember password</label>
    </div>
  </div>
  <div class="form-group">
    <button class="btn">Cancel</button>
    <button class="btn -success">Submit</button>
  </div>
</form>

```html
<form>
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="text" class="text-field" placeholder="Enter your email">
  </div>
  <div class="form-group">
    <label class="form-label">Password</label>
    <input type="password" class="text-field" placeholder="Enter your password">
  </div>
  <div class="form-group">
    <div class="checkbox-wrapper">
      <input type="checkbox" class="checkbox" id="remember-password" />
      <label for="remember-password">Remember password</label>
    </div>
  </div>
  <div class="form-group">
    <button class="btn">Cancel</button>
    <button class="btn -success">Submit</button>
  </div>
</form>
```

<div class="notice-msg">
  <b>Notice: </b>
  <p>Use the class <code>.form-group</code> for controling the row in form.</p>
</div>

<h5 class="section-title">Inline Form Layout</h5>
Use the class `.form-inline` for inline layout. It applies to `label` `input` `textarea` & `.form-group` as shown below.
<form class="form-inline">
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="text" class="text-field" placeholder="Enter your email">
  </div>
  <div class="form-group">
    <label class="form-label">Password</label>
    <input type="password" class="text-field" placeholder="Enter your password">
  </div>
  <div class="form-group">
    <div class="checkbox-wrapper">
    <input type="checkbox" class="checkbox" id="remember-password-2" />
    <label for="remember-password-2">Remember password</label>
  </div>
  </div>
  <div class="form-group">
    <button class="btn">Cancel</button>
    <button class="btn -success">Submit</button>
  </div>
</form>

```html
<form class="form-inline">
  ...
</form>
```

<!-- Sample form usage -->
<h5 class="section-title">Sample Form Usage</h5>
<div class="form-usage">
  <form>
    <div class="form-group">
      <label class="form-label">Step</label>
      <input class="text-field" placeholder="Enter step’s description here">
    </div>
    <div class="form-group">
      <label class="form-label">Start - End</label>
      <div class="datepicker cols-6">
        <div class="selection">November 26</div>
      </div>
      <div class="datepicker cols-6">
        <div class="selection">November 26</div>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Memo</label>
      <textarea class="textarea" placeholder="Enter some memo"></textarea>
    </div>
    <div class="form-group">
      <button class="btn">Cancel</button>
      <button class="btn -success">Submit</button>
    </div>
  </form>
</div>

```html
<!-- Same markup as above -->
<form>
  <div class="form-group">
    <label class="form-label">Step</label>
    <input class="text-field" placeholder="Enter step’s description here">
  </div>
  <div class="form-group">
    <label class="form-label">Start - End</label>
    <div class="datepicker cols-6">
      <div class="selection">November 26</div>
      <button class="btn"><i class="icon -calendar"></i></button>
    </div>
    <div class="datepicker cols-6">
      <div class="selection">November 26</div>
      <button class="btn"><i class="icon -calendar"></i></button>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Memo</label>
    <textarea class="textarea" placeholder="Enter some memo"></textarea>
  </div>
  <div class="form-group">
    <button class="btn">Cancel</button>
    <button class="btn -success">Submit</button>
  </div>
</form>
```

<div class="notice-msg">
  <b>Notice: </b>
  <p>It is good practice to give every form a unique name, if needed, so they can be restyled easily. Also make sure to reuse the Grid-system to easily layout the form with class <code>.cols-*</code>.</p>
</div>

<h5 class="section-title">Related mixin</h5>
```scss
@mixin base-input($bg-color,
                  $border-color,
                  $inner-shadow-color) {
    background-color: $bg-color;
    border: 1px solid $border-color;
    border-radius: $base-border-radius;
    @if $inner-shadow-color == 'none' {
        box-shadow: none;
    } @else {
        box-shadow: inset 0 1px 2px 1px $inner-shadow-color;
    }
}
```

**Example**

Usage:

```scss
@include base-input($white, $primary-color-dark-20, $primary-color-light-80);
```

CSS Output:

```css
background-color: #fff;
border: 1px solid #1077bc;
border-radius: 3px;
box-shadow: inset 0 1px 2px 1px #c7e6fa;
```
