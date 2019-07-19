---
layout: null
published: false
---
# Overcommit setup

https://github.com/brigade/overcommit

It's necessary to have overcommit manage the codebase before any commit. Here's the instruction for your local overcommit:

1. Install bundler `sudo gem install bundler` if it's not exist
2. Make sure you're inside `anduinDesign` folder. 
3. `bundle install` to install necessary gems.
4. Run `tools/ruby/bin/overcommit --sign` to sign the overcommit settings
5. Make sure overcommit is running: `tools/ruby/bin/overcommit -r`
