# sneks! 🐍🐍🐍

sneks a client for snek: the *multiplayer* terminal adaptation of the classic game, **snake**, written in javascript. 

![snekss](https://user-images.githubusercontent.com/7389356/155228807-069d242c-7cb1-4181-b2cc-f676a91f2962.gif)



# getting started

download and run the server locally:

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
  - increase your snek power
  - don't get ded

your snek will die if it crashes into itself, a wall, or another snek. when you have completed all your sneking, use *ctrl+c* to quit.



# upcoming features 

some features we plan to add in the near future:

  - prompt user for name upon login
  - automatic ip detection 
  - add additional and randomize snarky snek comments


# known issues 

  - hard coded ip/port makes multisneking difficult



# author
sneks! was written by serra boten as an assignment for the [lighthouse labs](https://github.com/lighthouse-labs) web development bootcamp. 


# credit 
snek-multiplayer (the server) is a heavily modified version of [tania rascia's snek game](https://github.com/taniarascia/snek).
 
