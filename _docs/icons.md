---
layout: doc
title: Icons
---

<h5 class="section-title">SVG Icons</h5>
<div class="icon-svg-showcase">
  {% for cat in site.data.svg-icons %}
    {% if cat.title == "Mixed usage" %}
      <div class="has-solid-set">
        <h4>{{ cat.title }}</h4>
        <div class="switch">
          <a id="line" class="link -active" href="javascript:void(0)" onclick="solidify(this)">Line set</a>
          <a id ="solid" class="link" href="javascript:void(0)" onclick="solidify(this)">Solid set</a>
        </div>
      </div>
      <div class="icon-table">
        {% for icon in cat.icons %}
          <span class="icon">
            <svg class="icon-svg">
              <use class="svg-use" data-solid-url="../assets/super-tight-icon-set/dist/stis-master.svg#icon-{{icon}}-solid" data-line-url="../assets/super-tight-icon-set/dist/stis-master.svg#icon-{{icon}}" xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-{{icon}}"></use>
            </svg>
            <span class="code">{{icon}}</span>
          </span>
        {% endfor %}
      </div>
    {% else %}
      <h4>{{ cat.title }}</h4>
      <div class="icon-table">
        {% for icon in cat.icons %}
          <span class="icon">
            <svg class="icon-svg">
              <use xlink:href="../assets/super-tight-icon-set/dist/stis-master.svg#icon-{{icon}}"></use>
            </svg>
            <span class="code">{{icon}}</span>
          </span>
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
</div>

<h5 class="section-title">How to use</h5>
All SVG icons are unified under one single SVG sprite called `stis-master.svg`. To render an icon, we use the HTML tag `use`. Default CSS class for these icons is `icon-svg`, which renders a 16px icon. Add class `medium` or `large` for bigger sizes (32px and 48px respectively). Example below:

```html
<svg class="icon-svg">
  <use xlink:href="/icons/stis-master.svg#icon-..."></use>
</svg>
```

<h5 class="section-title">Icon Font <span class="label -warning">Old</span></h5>
<div class="glyph-table">
  {% for icon in site.data.icons %}
    <i class="icon -{{icon}}"><span class="code">-{{icon}}</span></i>
  {% endfor %}
</div>

<h5 class="section-title">How to use</h5>

```html
<i class="icon -lock"></i>
```

<div class="notice-msg">
  <strong>Notice:</strong>
  <p>For icons to be crisp, it is recommended (but not mandatory) to display icons at either <code>17px</code> or <code>34px</code><br/>Also the <code>@mixin icon</code> takes a <code>font-weight</code> as a parameter. If no weight is specified, the default one will be <code>normal</code></p>
</div>

```scss
.icon {
    @include icon(bold);
}
```

<script type="text/javascript">
function solidify(link) {
  var lineIconLink = document.getElementById('line'),
      solidIconLink = document.getElementById('solid'),
      icons = document.querySelectorAll('.svg-use'),
      isLineIcon = lineIconLink.classList.contains('-active');

  if(link == solidIconLink) {
    for (i = 0; i < icons.length; i++) {
      var solidUrl = icons[i].getAttribute('data-solid-url');

      icons[i].setAttribute('xlink:href', solidUrl);
    }

    lineIconLink.classList.remove('-active');
    solidIconLink.classList.add('-active');
  } else {
    for (i = 0; i < icons.length; i++) {
      var lineUrl = icons[i].getAttribute('data-line-url');

      icons[i].setAttribute('xlink:href', lineUrl);
    }

    solidIconLink.classList.remove('-active');
    lineIconLink.classList.add('-active');
  }
}
</script>
