# Minesweeper

### WIP

[Live View](https://minesweeper.webdevpat.com/)

## Summary

Recently I was challenged with a few matrix based algorithm challenges, one of the challenges was Minesweeper themed. From solving these challenges I was inspired to try my hand at building my own Minesweeper game. The goal was to utilize React to create a copy of the original Minesweeper game, but I would do so without any online tutorials or guides. This version of Minesweeper is 100% my own creation, from conceptualization of how certain game logic should operate, to the planning and execution of all required functionality. The only portion of this game not my own are the many bugs I only found thanks to many friends who tested the game and gave feedback, and the `useInterval` timer hook I got from a blog post by Dan Abramov.

## Features

▸ The 3 original map sizes plus user specified custom maps.

▸ The first tile click on a new game is never a mine.

▸ Map size scales based on height.

▸ Tiles containing no nearby tiles open in clusters.

▸ The original flag plus a special testing flag that allows for worry free mine location testing.

▸ Middle mouse click will automatically reveal nearby tiles if the correct number of flags are present.

▸ Middle mouse click will highlight nearby tiles if the number of flags nearby is less than needed.

▸ Game over animation where all the mines explode.

▸ Current game timer in seconds.

## Building Minesweeper

To begin with this project had a much shorter layout and whiteboard phase than I usually go with. First, I already know exactly what minesweeper should look like, since I've been playing the game since Windows 95. Second, I had been so excited by the idea of making my own Minesweeper that I had already hacked together the map generation functions as a proof of concept. It was after seeing that I could generate the map that I took a pause to figure out all the secondary things to go with it. 

I had originally considered going with Canvas to make the game, however I already have quite a few Canvas projects, and quite honestly I don't see anyone looking for dev's with Canvas experience. The obvious choice from there was to do with React as the modularity of React components seemed to lend itself exceptionally well to a game like Minesweeper.

#### Layout

From previous my previous Breakout clone game, I knew that I wanted to use a class to handle each individual tile on the game board. In original planning of this class I knew I wanted these properties.

```js
tile = {
    id: String (representing x and y cordinates)
    x: Int,
    y: Int,
	nearbyMines: Int,
    isMine: bool,
    neighbors: Array(object),
    flagged: bool,
    testFlag: bool,
}
```

I was glad to have made this decision because as the game continued to grow in needs, so did the Tile class needs. I would add in many different properties to control different state changes of the tile and animations.



I started to create a list of mouse click functionality required for the game.

```
LeftClick:
	if (!flag) flag = true
RightClick:
	if (!flag) add flag
	if (flag) add test flag
	if (testFlag) remove flags
MiddleClick	
	if flags nearby == nearbyMines, reveal all nearby tiles not flagged
	if flags nearby < nearbyMines, highlight all nearby tiles not flagged
	
```



I began to layout rough ideas about game logic and React component hierarchy from here.

![Minesweeper Whiteboard](https://githubmdimages.s3-us-west-2.amazonaws.com/Minesweeper+Whiteboard.PNG)



#### Building Minesweeper

This project posed many challenges for me. One of the largest for me was to keep the ever-growing list of functions as DRY and modular as possible, as having all functionality useable by different callers ends up making the code easier to read, understand, and grow. For instance, having `leftClick` and `revealTile` as separate functions that utilize each other allowed many bugs found in development, and features I wanted to add to be easily dealt with at the source.

Hands down the biggest challenge for me to solve was what I have been calling "0 propagation". Minesweeper has always had a nifty feature that made it so if a tile is  revealed that has no nearby mines, referred to with `nearbyMines: 0`, that tile should reveal all of the tiles next to it, and if one of those is a 0 tile, it should reveal all tiles next to it, so and and so forth, until the entire chain of 0 tiles and all of their combined neighbors as revealed. Solving this challenge was the hardest thing I did while working on this game, and as such was the most rewarding. Here is the pseudocode for this function.

```js
revealNeighbors (tileClicked, currentMap, tilesFound = [], queue =[]) =>
    tileClicked.nearbyTiles.ForEach(tile) =>
		if(tile doesnt exist in tilesFound)
            add to tilesFound array
            if(tile is a 0 tile)
                add to queue

	if(queue isnt empty)
        remove first index of queue
        run reveal neighbors again with the first index of queue
        
    reveal all tiles in tile array
    return updatedMap
```

Creating a list of all unique values found, as well as a queue of 0's allowed me to run this function recursively until all 0's in the cluster have been found, and then once that is finished I can reveal all the tiles and return the updated map.

## In Conclusion

This project was one of the most fun things I have worked on since I learned to program. It provided me a ton of opportunity to scratch the creative problem solving itch that initially pulled me into this field. Looking at the finished game really shows me how far I have come from just beginning to code, from completing my bootcamp, and even from building my first game last year.

