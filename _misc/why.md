---
layout: doc
title: Why we build this?
permalink: /why.html
---

<div class="row welcome-article">
  <div class="cols-8">
    <p>Below is a short explanation on why this library exists:</p>
    <blockquote><strong class="title">TL;DR</strong><br/>True story. We got tired of rewriting components whenever there's a new design. So we built this library to include a set of reusable components. Everybody's happy and design team got a big raise/bonus. Well that last part isn't so true, but the rest was told as exactly how it occured.</blockquote>
    <h3>Once upon a time, in a galaxy far far away...</h3>
    <p>
      <i>Oops, I think that was a wrong opening line. Sorry, still on the Star Wars hype.</i><br/><br/>
      Writing CSS is fun at the beginning, really, when it was a clean slate and you can give anything any name you want to, experiment with styles and so on. But that is bad practice, the reasons are simple, it's not future proof, it lacks a proper convention, the styles repeat themselves from component to component.<br/><br/>Firstly, why is it not future proof, you asked? The idea of product development is that as time goes by, the product will grow and to be able to accomplish that so-called growth, it has to scale to match it. But with bad CSS practice, after a few months, heck, after just <strong>one</strong> redesign, you would have already seen things breaking here and there, style clashing everywhere, all of the sudden you find poops all over your site (I've tried my best not to swear). Therefore a proper convention is what people would mention and suggest we should have, but what kind of convention? That brings us to the second point. There are plenty of conventions on writing maintainable CSS on the Internet such as <a href="http://thesassway.com/advanced/modular-css-naming-conventions">Modular</a>, <a href="http://getbem.com/naming/">BEM</a>, even <a href="http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/">BEMIT</a> an extended version of BEM, etc. It was like we try to build our <a href="https://en.wikipedia.org/wiki/Tower_of_Babel">Tower of Babel</a> then was punished because we got too close to God and now we all speak different languages and following different conventions. It was a mad world. But there isn't much we could do, TBH. Lastly, the biggest rule of programming is <strong>DRY</strong> or <strong>DON'T REPEAT YOURSELF</strong>. But with a badly planned, unconventional system, this is the thing that keeps happening. And really, once you're in such deep shit, the only thing you could do is break the whole thing and build it back up from the ground. So that was what we did &mdash; kind of, more on this momentarily.
    </p>
    <h3>The Problems</h3>
    <p>So potentially these were the identified problems with our current styling system.</p>
    <ul>
      <li>A lot of wrapping elements into one big container that is page/view specific. So basically, you would see, for example <code>.step-view</code> and then a bunch of nested components for that view. As a result, if you're in a different view, you can't access stylings of the same component inside <code>.step-view</code>. You can include <code>.step-view</code> as a class but your markup no longer making any sense. So your last solution is to rewrite that chunk of code inside another wrapping container...and the mess begins.</li>
      <li>Variables were all over the place and not centralized, thus, we end up with two different variables that is assigned the same value and use for the same purpose. Also, things that should be in variables aren't being specified as a variable. Which results in a lot of Find and Replace whenever something has to change.</li>
      <li>Deep nesting was in sane. It was okay until we turn on scss-linter and it was a nightmare, seriously. A lof of moving elements outside a wrapper, then a lot of things were breaking visually. I tried not to cry, but ended up crying for the whole week. Just kidding. I just shat bricks, that's all, no big deal.</li>
      <li>Icons were badly managed. We would have a big folder of individual icons; also a big icon sprite with a bunch of different icons, too. And everything was inconsistent. The same icon but at a different size would have to be another sprite. So we ended up with a pair of "father and child" icon, or "adult and kid" or whatever, I think you got my point.</li>
      <li>Last but not least, we didn't have a goddamn system of anything. No color system, no typographic system, no layering (z-index) system. Thank god we have a grid system, but that wasn't enough. And that's linked with the variable problem above, since there's no system, new variables keep popping up and probably were used once or twice throughout.</li>
    </ul>
    <p>This was us when new things were thrown our way...</p>
    <img src="http://33.media.tumblr.com/b9774269d1697177cfab45b34d92a846/tumblr_nq6njsBlJf1tk5o6so1_400.gif"/>
    <h3>The Solutions</h3>
    <p>In short, this library is the solution. In longer terms, I will now explain, wait for it, bro.</p>
    <h5 class="section-title">The Design</h5>
    <p>At first, we sat down to list out all the elements in the system that we need to take a look into. After we had a list, which you could see on the left of this page, then came the redesign part. So for more than a week we were just picking colors, come up with a coloring system. Then we ditched Helvetica Neue and go with Open Sans because honestly Opens Sans was created more for UI where Helvie is old and wasn't really taking into consideration all of the screen viewing aspects of a good typeface (try "responsibilities" in Helvie and see how hard that is to separate the "i" and the "l"). Not just choosing a new font, we also came up with a brand new typographic system of font sizes, weights and line heights.<br/><br/>Those were the basics, then with the basics settled, we went into crafting our components from those basics. Honestly, things went pretty smoothly as soon as we've nailed the basics.</p>
    <h5 class="section-title">The Coding</h5>
    <p>So after a few rounds of discussions we have finally settled on using <a href="http://rscss.io/">rscss's naming convention</a> because we think it's quite straightforward. Also Tri hated underscores, let alone BEM and BEMIT uses double underscores (I think he cried a little when he saw that). So anyways, we have a small section on <a href="docs/naming.html">our adopted naming convention</a> if you're eager to check it out.<br/><br/>For our SCSS files, we've broken them into components so each component gets a single file and all stylings related to that component stay there. We follow strict rules of writing SCSS so that the output are consistent and we would end up with beautiful and maintainable code that no one has to cry in the future. That's problem number one, solved. Honestly, maybe by the time you're reading this post, this library is still a work in progress, we are still constantly refactoring our codebase to make the CSS looks as humanly as possible, while being super duper dry if you know what I mean.<br/><br/>For solving the icon problem, we've created a brand new iconset, called Super Tight Iconset. This time, instead of using a sprite we put together an icon font. This helps solves a number of problems.</p>
    <ul>
      <li>Vector based.</li>
      <li>Scalable when it comes to using different sizes.</li>
      <li>Easier to use because now you can call a class name.</li>
      <li>Consistent styling.</li>
      <li>Easier to maintain since we're using IconMoon and if we need to change something we just upload and export. Also we no longer need an icon folder with tones of shit in it.</li>
    </ul>
    <h5 class="section-title">The Site</h5>
    <p>It wouldn't be a good library if there's no good documents. We've realized this early on, so apart of focusing on getting things right with our codebase, we were also heavily invested in crafting the perfect documentations so that others after us could see and know what's going on. One thing I was glad is that we implemented all the styling back into the library page (which you're seeing right now). We basically create and apply at the same time to know what's good or bad and what needs to be addressed. Also, all the demos are pretty much interactive, you can go ahead and try them out.</p>
    <h3>What Have We Learned?</h3>
    <p>Building this component library helps us strengthen our skills. It trained us to think ahead. At the beginning we were stuck with the mindset of why building something when we don't even have it in our current system. Then we got passed that and realized we're building for the future, not present, we're building these components to maintain the present but also to scale it in the future, that's how a lot of these components come around and crafted.</p>
    <h3>Where Are We Going From Here?</h3>
    <p>This library isn't a reason for us to stop right here. This is version 1. And there's hope for many more to come. And this library will be maintained by the Design Team and their new salary bonus (hah, kidding again). But the point is that we now have a system and we're confident that with this system acting as a strong foundation, we're on track for building and scaling our product toward the future.</p>
    <p>Quick last thing, the level of confidence we are in now.</p>
    <img src="http://38.media.tumblr.com/8e1c44c1f44bb64c20bce4ec6fb3603c/tumblr_inline_ns00blBhV11t9bsnt_500.gif"/>
    <p>Shout out to you if you've made it all the way to the bottom of this post!</p>
    <img src="https://qph.is.quoracdn.net/main-qimg-478bc067c53ab6909dcfa939e51b85ba?convert_to_webp=true"/>
    <p>Thanks to Phuoc, Tri, Trung and Hiep for working with me on this project. Thanks for staying super rad from the beginning to the end.<br/><br/><i>This post was written by Cong just a few days before Christmas MMXV.</i>🎄</p>
  </div>
</div>
