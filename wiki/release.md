# ACL Release Procedures

*Disclaimer: This is the procedures for releasing ACL as of September 30th, 2016*

1. Go to `_config.yml` file and look for `version`.
2. In your Terminal, at the project's root directory, run `grunt release`, make sure you have Grunt install. How to set it up? Please refer to `grunt.md`.
3. You'll see a bunch of tasks running. Basically, what it's doing is removing the current `dist` folder, compile `acl.css` and its source map, minify it and then copy assets such as fonts and icons over.
4. Voila, you're done. Easy stuff.
