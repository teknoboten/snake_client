# sneks! 🐍🐍🐍

<<<<<<< HEAD
sneks is client for snek - a *multiplayer* terminal adaptation of the classic game, snake, written in javascript. 
=======
this is a client for snek - a *multiplayer* terminal adaptation of the classic game, snake', written in javascript. 
>>>>>>> 2a935c6fa3d57cfd34a1c4d186a8fa35bab2583c


![snekss](https://user-images.githubusercontent.com/7389356/155228807-069d242c-7cb1-4181-b2cc-f676a91f2962.gif)



# getting started

first, you will first need to download and run the server locally:

```
serra@sanserif ✨ git clone https://github.com/lighthouse-labs/snek-multiplayer.git snek-multiplayer
serra@sanserif ✨ cd snek-multiplayer
serra@sanserif ✨ npm install
serra@sanserif ✨ npm run play
```

then, download and run the client:

``` 
serra@sanserif ✨ git clone https://github.com/teknoboten/snek_client.git sneks
serra@sanserif ✨ cd sneks
serra@sanserif ✨ node play.js
```


# gameplay

  - move your snek using the *w, a, s,* and *d* keys 
  - use *o* and *p* to taunt the other sneks 
  - eat the food
  - don't get ded

your snek will die if it crashes into itself, a wall, or another snek. when you have completed all your sneking, use *ctrl+c* to quit.



# upcoming features 

some features we plan to add in the near future include:

  - prompt user for name upon login
  - support for automatic ip detection 
  - randomize snarky snek comments


# known issues 

  - hard coded ip settings in constants.js
  - score currently not displaying properly


# author
sneks! was written by serra boten as an assignment for the (lighthouse labs)[https://github.com/lighthouse-labs] web development bootcamp. 


# credit 
snek-multiplayer (the server) is a heavily modified version of (tania rascia's snek game)[https://github.com/taniarascia/snek].
 
