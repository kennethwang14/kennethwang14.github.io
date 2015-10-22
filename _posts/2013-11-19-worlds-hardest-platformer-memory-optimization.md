---
title: World’s Hardest Platformer – Memory Optimization
author: Kenneth
layout: post
permalink: /worlds-hardest-platformer-memory-optimization/
categories:
  - Developer Journals
---
<span style="visibility:hidden;">+++</span><span style="line-height:1.5;">Precision and timing are two of the most important factors in World’s Hardest Platformer. However, the user’s sense of precision and timing would be completely distorted if lag occurs. That is why memory optimization and coding efficiency are extremely important for my game, combined with the fact that a vast amount of Android devices have low RAM.</span>

<span style="visibility:hidden;">+++</span>When examining my game, the most obvious memory-heavy objects are my Tiles. Each Tile is of its own instance, with a variety of variables. They are: int *tileX*, int *tileY*, int *speedX*, int *speedY*, String *type*, Image *tileImage*, Rect *r*. The Android Rect class also contains four int variables, int *bottom*, int *left*, int *top*, int *right*.

<p align="center">
   <img class="aligncenter" alt="" src="http://i.imgur.com/wTp9FjL.png" width="742" height="304" />
</p>

<p style="text-align:center;" align="center">
  <i>Tilemap for World 1: Level 2</i>
</p>

<span style="visibility:hidden;">+++</span>As you can see in the above Tilemap, where each character/integer is an instance of the Tile class, the amount of variables can easily add up and cause memory issues. In addition, I check Tile collision by traversing through an ArrayList that contains all my Tiles and checking if their Rect intersects with my Block’s Rect. I know, not very efficient at all.

<span style="visibility:hidden;">+++</span>After brainstorming, I realized that the only area where I needed to check collision was the nine 32&#215;32 Tiles adjacent to the Block. And also, each Tile doesn’t even need a Rect. Only the nine affected Tiles surrounding the Block needs to have a Rect.

<img class="aligncenter" alt="" src="http://i.imgur.com/HlwacJt.png" width="623" height="389" />

<p style="text-align:center;" align="center">
  <i>The only area where I need to check collision, shown by the blue square. </i>
</p>

<p align="center">
   <img class="aligncenter" alt="" src="http://i.imgur.com/fpqFZwL.png" width="624" height="15" />
</p>

<p style="text-align:center;" align="center">
  <i>The If-Statement for the Blue Square (centerX and centerY are the coordinates of my Block)</i>
</p>

<span style="visibility:hidden;">+++</span>I updated my collision system using the If-Statement above, so that it only checks collision for the nine adjacent tiles. I then moved the Rect variable from my Tile class to inside my collision class, only creating Rectangles for the nine adjacent tiles. After that, I updated my collision for other classes that also checked collision (nullifierTile, enemyProjectile, etc).

<span style="visibility:hidden;">+++</span>With my collision system optimized, I loaded up the game on my Android and found that lag was clearly a lot less of a problem. There are still a lot more optimizations to be done, but as for today, my work is done.