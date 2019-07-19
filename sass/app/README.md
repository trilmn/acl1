# App SCSS Guide
Anything in here is for reusability, should be synced up with the design file. Don't make it follow the common style of the library.

## Struture
For the ease of reading the SCSS file. It's recommened to follow this structure for better code organizing:
1. File intro, describe the structure of the code in top-down order. Should comment out these text.
1. Variables
2. Mixins
3. Code
...

### In action

```
// colors
$default-color: $primary-color-dark-80;
$info: $primary-color;

// sizing
@mixin tooltip-sizing($tip-width) {
     width: $tip-width;
     white-space: initial;
}

// ---- positioning ----
.tooltip {
    position: relative;

    // Styling text content
    &[data-hint] {
        &::after,
        &::before {
            display: inline-block;
            pointer-events: none;
            position: absolute;
            visibility: hidden;
        }
    }
}        

```

