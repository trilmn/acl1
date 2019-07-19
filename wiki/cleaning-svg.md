# How to clean up your SVGs

SVG exported from different softwares usually comes with bloated crap. Therefore:

1. Make sure you remove all added comments. For example
```
<!-- Created with Sketch -->
```
2. Remove size values such as `width` and `height`. This should be added through CSS so ease of control.
3. Give it a nice `<title>`.
4. If no `<defs>` is defined, get rid of it.
5. Remove all `id`s if you're going to include this in the SVG icon sprite. If not, give it ONLY one single good and meaningful `id` and remove the rest.
6. Depends on how your SVG is structured, remove unnecessary `<g>` and leave only the `<path>`s.
7. Remove all SVG style attributes such as `fill`, `fill-rule`, `stroke-width`, etc. These things could be added through CSS.
