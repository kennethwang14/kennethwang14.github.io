---
title: World’s Hardest Platformer – The Collision Puzzle
layout: blogpost

siteNav: blog
date: 2013-11-19
categories:
  - blog
  - gamedev

thumbnail: blog/whp-collision-puzzle/thumbnail.png

description: "My implementation of collision was very simple and worked perfectly for the most part for my game. However, upon testing, there was one perplexing issue with it."
---

<span style="visibility:hidden;">+++</span>Collision detection had been a huge obstacle for my game. Like many other tile-based 2D platformers, I used rectangles as my collision bounds. I had four rectangles on my Block: one on each side to tell which side triggers collision.

<p align="center">
   <img class="aligncenter" alt="" src="http://i.imgur.com/K3EcjRN.png" width="598" height="260" />
</p>

<p style="text-align:center;" align="center">
  <i>Example of my collision bounds</i>
</p>

<span style="visibility:hidden;">+++</span>The way my game worked was that the Block would always, constantly, fall. The only thing that kept it up was tile collision. If it detected that the bottom rectangle intersects with another rectangle, then I would move the Block up by 32 pixels (the height of the block and tiles). Likewise, if it detected that the right rectangle intersects with another rectangle, then I would move the Block left by 32 pixels (the width of the block and tiles).

<span style="visibility:hidden;">+++</span>This was a very simple implementation of collision and had worked for the most part for my game. However, upon testing, there was one perplexing issue with it.

<span style="visibility:hidden;">+++</span>Whenever my Block was at a bottom-right corner and I tried to move right, it would suddenly jerk up to the top of the platform.

<p align="center">
   <img class="aligncenter" alt="" src="http://i.imgur.com/YGNIHJJ.png" width="623" height="166" />
</p>

<p style="text-align:center;" align="center">
  <i>Depiction of the bug</i>
</p>

<span style="visibility:hidden;">+++</span>I couldn’t figure out at all what caused that to happen, despite double-checking my code several times. So I did what any reasonable programmer would do: System.out.println() debugging.

<p align="center">
   <img class="aligncenter" alt="" src="http://i.imgur.com/cLgKw9T.png" width="453" height="382" />
</p>

<p style="text-align:center;" align="center">
  <i>Code for my collision system</i>
</p>

<p align="center">
  <img class="aligncenter" alt="" src="http://i.imgur.com/Eg2Auqh.png" width="550" height="218" />
</p>

<p style="text-align:center;" align="center">
  <i>Console output</i>
</p>

To my surprise, when my Block hits a corner and keeps moving, Right-Collision is never triggered at all. After much pondering, I came to a possible conclusion on why that happens.

<p style="text-align:center;" align="center">
  <i>Depiction of my hypothesis, with bottom and right collision shown</i>
</p>

<span style="visibility:hidden;">+++</span>**When my Block moves into a corner, the bottom collision actually first triggers, thus moving the Block up.** After the Block has been moved up, since the Block is still in the same x-coordinate, the bottom collision then triggers again, before the right-collision factor can even react. Switching the bottom-up collision ordering with left-right collision does not help, since then the same problem would occur, except in a way that the Block falls through the floor and then slides instantly to the right.

<span style="visibility:hidden;">+++</span>When you know the cause of a bug, the bug is much easier to solve. I added 4 new boolean variables to my system: *gravity*, *canMoveUp*, *canMoveRight*, and *canMoveLeft. *I then added if-then-else statements to my collision method that changed those values to true or false accordingly, and finally I added a system whereas the Block can only move a certain direction if its corresponding boolean value is true. By not allowing my Block to even enter another platform, it bypassed the bug entirely. After those changes, my collision detection system worked flawlessly.