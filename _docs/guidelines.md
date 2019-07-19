---
layout: doc
title: SCSS Guidelines
---

Things around us are changing quickly, this is why we want our code to be written with “change” in mind. We are following very strict sets of SCSS writing rules to ensure a clear, maintainable and redundant-free codebase. Basically we want:

> "Every line of code should appear to be written by a single person, no matter the number of contributors." &mdash;@mdo

<h5 class="section-title">Folder Structure</h5>
For our folder structure, we're applying the 7-1 pattern, which means 7 directories and 1 main file. Check out the structure below to see what it means.

```html
sass/
│
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── ...
│
├── components/
│   ├── _buttons.scss
│   ├── _carousel.scss
│   ├── _cover.scss
│   ├── _dropdown.scss
│   └── ...
│
├── layout/                 # Can be named as "partials"
│   ├── _navigation.scss
│   ├── _grid.scss
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _sidebar.scss
│   ├── _forms.scss
│   └── ...
│
├── pages/                  # Styles for specific pages
│   ├── _home.scss
│   ├── _contact.scss
│   └── ...
│
├── themes/
│   ├── _theme.scss
│   ├── _admin.scss
│   └── ...
│
├── utils/                  # Can be "helpers"
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   ├── _helpers.scss
│   └── ...
│
├── vendors/                # Vendor including the version
│   |– bourbon-4.2.4        # Bourbon
│   |– neat-1.7.2           # Neat
│   └── ...
│
└── main.scss               # Main file
```

<h5 class="section-title">Main File <code>main.scss</code></h5>
The `main.scss` should only be used to import all the other files inside the directories. Below are bad and good examples of importing in SCSS.

**Bad example**

```scss
@import 'utils/_variables.scss';
@import 'utils/_functions.scss';
```

**Good example**

```scss
@import 'utils/variables';
@import 'utils/functions';
@import 'utils/mixins';
@import 'utils/placeholders';

@import 'vendors/bourbon-4.2.4';
@import 'vendors/neat-1.7.2';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
```

**or**

```scss
@import
    'utils/variables',
    'utils/functions',
    'utils/mixins',
    'utils/placeholders';

@import
    'vendors/bourbon-4.2.4',
    'vendors/neat-1.7.2';

@import
    'base/reset',
    'base/typography';

@import
    'layout/navigation',
    'layout/grid',
    'layout/header',
    'layout/footer',
    'layout/sidebar',
    'layout/forms';

@import
    'components/buttons',
    'components/carousel',
    'components/cover',
    'components/dropdown';

@import
    'pages/home',
    'pages/contact';

@import
    'themes/theme',
    'themes/admin';
```

<h5 class="section-title">Component-Oriented Thinking</h5>
Here's a very good explanation of the advantages of components.

Component driven development offers several benefits when reading/writing HTML and CSS:

- It helps to distinguish between the classes for the root of the component, descendant elements, and modifications.
- It keeps the specificity of selectors low.
- It helps to decouple presentation semantics from document semantics.
- You can think of components as custom elements that enclose specific semantics, styling, and behaviour.

Few things to keep in mind about components:

- Components can nest. You can place a component (or components), inside another component. Inception all over again.
- You can always `@extend` to make things simpler when it starts getting dirty. Not knowing what extending means? Have a look [here](http://sass-guidelin.es/#extend).

<h5 class="section-title">Naming Convention</code></h5>
The basic of naming convention for SCSS class names:

- Lowercase
- Hyphen separated
- Meaningful
- Use atribute instead of adjective for class's name


We also adapted our naming convention from [rscss](http://rscss.io)

- Think in components, not pages or views. Components should be named using two words. (`.screenshot-image`).
- Components can have smaller elements. They should be named using one word (`.blog-post > .title`).
- Name variants with a dash prefix (`.shop-banner.-with-icon`).

<h5 class="section-title">Color</h5>

- Lowercase
- Preferred shorthand over full hex
- Color keywords are forbidden
- Should always/most of the time use our predefined color schemes.

**Bad example**

```scss
.item {
    background-color: black;
    color: #FFFFFF;
}
```

**Good example**

```scss
.item {
    background-color: #000;
    color: #fff;
}
```

<h5 class="section-title">Sorting</h5>

- SCSS directives such as `@extend` and `@include` come first, knowing that `@extend` should come before `@include`
- Everything must be alphabetically sorted from top to bottom.

```scss
.item {
    @extend %general-item;
    @include align-items(center);
    @include display(flex);
    @include size(300em);
    @include transform(translateY(3em));
    font-size: 1em;
    font-weight: 300;
    text-align: center;
}
```

<h5 class="section-title">Vendor Prefix</h5>
The reason why we often use `@include` is because we want to avoid the hassle of putting vendor prefixes for a lot of properties. Here's how you should be doing it.

- Don't write it manually, seriously, it's painful, you'll cry.
- You can use [AutoPrefixer](https://github.com/postcss/autoprefixer).
- It's recommended to use mixins provided by other frameworks such as [Bourbon](http://bourbon.io/docs/#mixins), hence the long list of `@include`.

**Bad example**

```scss
@mixin transform($value) {
    -webkit-transform: $value;
    -moz-transform: $value;
    transform: $value;
}
```

**Good example**

```scss
.item {
    @include transform(translateY(30em));
}
```

<h5 class="section-title">Zeros</h5>

- Don't add unit to 0 (zero) values.
- If the float number is less than one, get rid of the 0 before the decimal point.

**Bad example**

```scss
margin: 0px;
opacity: 0.3;
padding: 20px 0px;
```

**Good example**

```scss
margin: 0;
opacity: .3;
padding: 20px 0;
```

<h5 class="section-title">Selectors</h5>

- **Never** use ID selectors.
- Deep nesting is a no no, that's why we have to think in components, break the components down into smaller bits and bites.
- Avoid using tag selectors, give them a class name.

**Bad example**

```scss
#home-page {
    ...
}

.profile-view .profile-header .avatar-placeholder .user-nameholder .username {
    ...
}

a {
    ...
}
```

**Good example**

```scss
.home-page {
    ...
}

.link {
    ...
}
```

<h5 class="section-title">References</h5>

- [SCSS Lint](https://github.com/brigade/scss-lint)
- [SASS Guidelines](http://sass-guidelin.es/)
- [An Auto-Enforceable SCSS Styleguide](http://davidtheclark.com/scss-lint-styleguide/)
