Road The Game
===

Why did the chicken cross the road?





## ToDo

* Create the game [Mads|Tim]
* Better achievements [Mads|Tim]
* Rewrite to use rAF [Mads|Tim]





## The Game (& ideas)

* You earn scores for every shit you do (hit special cars, die fast (like a mupliplicator or something))
* Stupid sounds like MMOOOOONSTER KILL from Quake3
* Intro screen with basic howto
* Favicon
* A "storm"/lot of cars after x minutes (random), but with a x second countdown so that the player will see that he is dying soon
* Show current game difficulty (based on how fast the cars are)
* Motor cycles in between the cars (on every side) with half the width of a car and a max height
* Random bombs, hurricanes, Tsunami -> Connected to the "Storm"-Countdown so that a random SHIT FUCK will happen to the player
* Cooldown "display" for power-ups
* Use requestAnimationFrame so that the game pauses if the window is not active
* Spawn more power ups the faster the cars get
* Make the game scalable
* optimize for mobile -> touch control and bigger board
* Change the volume of the audio
* Check if audio is available in the current browser and disable it if its not
* Fade power-ups smoothly in
* Max amount of power-ups
* Max amount of speed
* Don't create car-colors that are too dark (http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color)
* Steal sound from http://www.cappel-nord.de/webaudio/ (I already asked him if we can use it :D)


### Completed

* ~~You control a minion~~
* ~~You run from left to right and right to left~~
* ~~In the middle of the canvas is a road~~
* ~~On the road are different type of cars (size and color and shit)~~
* ~~If you get hit by a car you are dead~~
* ~~If you consume power up, you get special abbilities (more minions at the same time, bonus points for a limited time)~~
* ~~Add a trail for power up *speed*~~
* ~~Get crowded on power up *minion*~~
* ~~Achievements~~
* ~~Cars getting faster the longer you play~~
* ~~Multiplier for each minion you have~~
* ~~Death-Counter~~
* ~~Power-ups spawn if you get one point (or if you reached the other side + every minion [maybe])~~
* ~~Make cars wobble from side to side~~
* ~~The player should have "human" colors (like on the classic "road: the game: bloodpath") and the color should be random after every death~~
* ~~Turn audio on / off~~
* ~~Reset the difficulty after you die (everything to default -> # of cars, speed, power-ups)~~
* ~~Use localStorage to save game stats (like "best"-score, deaths)~~
* ~~Gulp to create endresult~~
* ~~Make sounds~~


### Modes for the future

* Die fast, as much as possible





## Bugs

* Doesn't work in SF 26 on Ubuntu
* Minions don't die after being run over
* Cars are overlapping
* ~~Power up *bomb* destroys all other power ups (Even the the ones to come)~~
* ~~If you have x minions and move from one lane to the other you just get 1 score instead of 1 + x~~
* ~~Minions overlap (after x + 1 minion power-ups you don't see the other minions anymore) -> Maybe only when you have the invincible power up -> nope, it's random~~
* The trail after the speed power up is not added if you are invincible
* ~~Power up timer is not reset after taking a new power up~~
* Can't grap any power-up if you have the invincible power-up picked up once





## Development on c9

* SCSS -> `sass --watch assets/scss:assets/css` in the console





## Created by

* Mads Cordes
* Tim Pietrusky