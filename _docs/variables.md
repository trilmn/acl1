---
layout: doc
title: Variables
---

<p>In order to better scale and extend the library, it is highly encouraged to reuse the library's SCSS variables (as listed in the file <code>/utils/_variables.scss</code>). Below is the list of variables: </p>

<h5 class="section-title">Color Variables</h5>
<p>As visible in our <a href="colorscheme.html">Color Scheme</a>, each main color has a <code>dark</code> and <code>light</code> spectrum go with it, therefore, a list of color variants variables is also required.</p>

<h6 class="txt-primary">Primary Colors</h6>

```scss
$primary-color:             #1e99eb;

$primary-color-dark-20:     #1077bc;
$primary-color-dark-40:     #0b5383;
$primary-color-dark-60:     #083c5e;
$primary-color-dark-80:     #052438;
$primary-color-dark-100:    #020c13;

$primary-color-light-20:    #56b3f0;
$primary-color-light-40:    #7cc4f4;
$primary-color-light-60:    #8eccf5;
$primary-color-light-80:    #c7e6fa;
$primary-color-light-100:   #ecf7fd;
```

<h6 class="txt-grey">Grey Colors</h6>

```scss
$grey:                      #6d818e;

$grey-dark-20:              #51626d;
$grey-dark-40:              #38444c;
$grey-dark-60:              #293137;
$grey-dark-80:              #181d21;
$grey-dark-100:             #08090b;

$grey-light-20:             #91a0aa;
$grey-light-40:             #a9b5bd;
$grey-light-60:             #b5bfc6;
$grey-light-80:             #dadfe3;
$grey-light-100:            #f2f4f5;
```

<h6 class="txt-success">Success Colors</h6>

```scss
$success-color:             #85b257;

$success-color-dark-20:     #709a47;
$success-color-dark-40:     #5c7e3a;
$success-color-dark-60:     #47622d;
$success-color-dark-80:     #334620;
$success-color-dark-100:    #1f2a13;

$success-color-light-20:    #99bf73;
$success-color-light-40:    #adcc8f;
$success-color-light-60:    #c2d8ab;
$success-color-light-80:    #d6e5c7;
$success-color-light-100:   #ebf2e3;
```

<h6 class="txt-warning">Warning Colors</h6>

```scss
$warning-color:             #c99b40;

$warning-color-dark-20:     #af8531;
$warning-color-dark-40:     #8f6d28;
$warning-color-dark-60:     #6f551f;
$warning-color-dark-80:     #503d16;
$warning-color-dark-100:    #30240d;

$warning-color-light-20:    #d2ac60;
$warning-color-light-40:    #dbbd80;
$warning-color-light-60:    #e4cda0;
$warning-color-light-80:    #eddebf;
$warning-color-light-100:   #f6eedf;
```

<h6 class="txt-danger">Danger Colors</h6>

```scss
$danger-color:              #c46345;

$danger-color-dark-20:      #ab5136;
$danger-color-dark-40:      #8c422c;
$danger-color-dark-60:      #6d3422;
$danger-color-dark-80:      #4e2518;
$danger-color-dark-100:     #2f160f;

$danger-color-light-20:     #cd7b62;
$danger-color-light-40:     #d89783;
$danger-color-light-60:     #e2b1a2;
$danger-color-light-80:     #ebcbc1;
$danger-color-light-100:    #f5e5e0;
```

<h6>Basic Colors</h6>

```scss
$white:                     #fff;
$black:                     #000;
```

<h5 class="section-title">Text Related Variables</h5>
<h6>Base Text Colors</h6>

```scss
$base-font-color:           $grey-dark-80;
$base-link-color:           $primary-color;
```

<h6>Font Stack</h6>

```scss
$font-stack: 'OpenSans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Helvetica Neue', 'Droid Sans', Helvetica, Arial, sans-serif;
$base-font-family:          $font-stack;
$header-font-family:        $font-stack;
```

<h6>Font Sizes</h6>

```scss
$base-font-size:            14px;
$h1-font-size:              38px;
$h2-font-size:              27px;
$h3-font-size:              20px;
$h4-font-size:              14px;
$h5-font-size:              14px;
$h6-font-size:              12px;
$small-font-size:           12px;
$tiny-font-size:            10px;
```

<h6>Line Heights</h6>

```scss
$base-line-height:          1.5;
$header-line-height:        1.35;
```

<h6>Font Weight Scale</h6>

```scss
$font-weight-regular:       400;
$font-weight-semibold:      600;
$font-weight-bold:          700;
$font-weight-xbold:         800;
```

<h5 class="section-title">Grid Columns</h5>

```scss
$grid-columns:              12;
```

<h5 class="section-title">Break Points</h5>

```scss
$xsmall:                    em(320px);
$small:                     em(640px);
$normal:                    em(960px);
$medium:                    em(1024px);
$large:                     em(1440px);
$xlarge:                    em(1920px);
```

<h5 class="section-title">Border Radii</h5>

```scss
$base-border-radius:        3px;
$round-border-radius:       50%;
```

<h5 class="section-title">Spacing</h5>

```scss
$spacing-small:            5px;
$spacing-normal:          10px;
$spacing-large:           20px;
$spacing-xlarge:          30px;
$spacing-jumbo:           40px;
```

<h5 class="section-title">Border</h5>

```scss
$base-border-color:         $grey-light-80;
$base-border:               1px solid $base-border-color;
$quote-border-left:         $primary-color;
```

<h5 class="section-title">Icon Stack</h5>

```scss
$icon-stack:                'SuperTightIconset';
```

<h5 class="section-title">Form</h5>

```scss
$input-hover-bg:            rgba($primary-color, .02);
$input-success-shadow:      rgba($success-color, .5);
```
