import { useState, useEffect } from "react";

import Minefield from "./Minefield";
import Popup from "./Popup";
import DisplayBar from "./DisplayBar";

const GameWindow = () => {
   const mapTypes = {
      small: {
         name: "Small",
         height: 8,
         width: 8,
         totalSquares: 64,
         safeSquares: 54,
         mines: 10,
      },
      medium: {
         name: "Medium",
         height: 13,
         width: 15,
         totalSquares: 195,
         safeSquares: 155,
         mines: 40,
      },
      large: {
         name: "Large",
         height: 16,
         width: 30,
         totalSquares: 480,
         safeSquares: 381,
         mines: 99,
      },
   };
   const [settings, setSettings] = useState(mapTypes.large);
   const [map, setMap] = useState([]);
   const [gameWin, setGameWin] = useState(false);
   const [gameOver, setGameOver] = useState(false);
   const [firstClick, setFirstClick] = useState(true);
   const [minesLeft, setMinesLeft] = useState(mapTypes.large.mines);

   const revealNeighbors = (obj, matrix, localTiles = [], queue = []) => {
      let neededFlags = obj.nearbyMines;
      obj.localTiles.forEach(({ x, y, id, flag }) => {
         if (flag === true) {
            neededFlags--;
            return;
         }
         let i = localTiles.findIndex((x) => x.id === id);
         if (i === -1) {
            localTiles.push(matrix[y][x]);
            if (matrix[y][x].nearbyMines === 0 && matrix[y][x].mine === false) {
               queue.push(matrix[y][x]);
            }
         }
      });
      if (neededFlags > 0) return matrix;
      if (queue.length > 0) {
         let nextZero = queue.shift();
         return revealNeighbors(nextZero, matrix, localTiles, queue);
      }
      let updatedMap = [...matrix];
      localTiles.forEach(
         (tile) => (updatedMap[tile.y][tile.x] = revealTile(tile))
      );
      return updatedMap;
   };

   const revealTile = (obj) => {
      if (obj.mine === true) setGameOver(true);
      if (obj.revealed === false) {
         obj.revealed = true;
      }
      return obj;
   };
   const leftClick = (obj) => {
      let updatedMap = [...map];
      if (firstClick === true) {
         generateMap(obj, updatedMap);
      }
      updatedMap[obj.y][obj.x] = revealTile(obj);
      setMap(updatedMap);
      if (firstClick === true) {
         setFirstClick(false);
         middleClick(updatedMap[obj.y][obj.x]);
      }
   };
   const rightClick = (obj) => {
      if (obj.revealed) return;
      let updatedMap = [...map];
      if (obj.flag) {
         setMinesLeft(minesLeft + 1);
         updatedMap[obj.y][obj.x].testFlag = true;
         updatedMap[obj.y][obj.x].flag = false;
      } else if (obj.testFlag) {
         updatedMap[obj.y][obj.x].testFlag = false;
      } else {
         setMinesLeft(minesLeft - 1);
         updatedMap[obj.y][obj.x].flag = true;
      }
      setMap(updatedMap);
   };
   const middleClick = (obj) => {
      let updatedMap = [...map];
      updatedMap[obj.y][obj.x] = revealTile(obj);
      updatedMap = revealNeighbors(obj, updatedMap);
      setMap(updatedMap);
   };
   const tileClick = (num, obj) => {
      switch (num) {
         case 1:
            leftClick(obj);
            break;
         case 2:
            middleClick(obj);
            break;
         case 3:
            rightClick(obj);
            break;
         default:
            break;
      }
   };
   class Tile {
      constructor(x, y) {
         this.id = `${x} ${y}`;
         this.x = x;
         this.y = y;
         this.flag = false;
         this.testFlag = false;
         this.localTiles = [];
         this.mine = false;
         this.nearbyMines = 0;
         this.revealed = false;
      }
   }

   const randomCords = () => {
      let x = Math.floor(Math.random() * (settings.width - 1));
      let y = Math.floor(Math.random() * (settings.height - 1));
      return [x, y];
   };

   const getNearbyCount = (x, y, matrix) => {
      let startX = matrix[y][x - 1] === undefined ? x : x - 1;
      let endX = matrix[y][x + 1] === undefined ? x : x + 1;
      let startY = matrix[y - 1] === undefined ? y : y - 1;
      let endY = matrix[y + 1] === undefined ? y : y + 1;
      let nearbyMines = 0;
      let localTiles = [];

      for (let i = startY; i <= endY; i++) {
         for (let j = startX; j <= endX; j++) {
            localTiles.push(matrix[i][j]);
            if ((i === y) & (j === x)) continue;
            if (matrix[i][j].mine === true) nearbyMines++;
         }
      }
      return [nearbyMines, localTiles];
   };

   const createMatrix = () => {
      let matrix = [];
      for (let i = 0; i < settings.height; i++) {
         matrix.push([]);
         for (let j = 0; j < settings.width; j++) {
            let tile = new Tile(j, i);
            matrix[i].push(tile);
         }
      }
      return matrix;
   };

   const populateMines = (obj, matrix) => {
      for (let i = 0; i < settings.mines; i++) {
         let [x, y] = randomCords();
         if (
            (obj.x + 1 === x || obj.x - 1 === x || obj.x === x) &&
            (obj.y + 1 === y || obj.y - 1 === y || obj.y === y)
         ) {
            i--;
            continue;
         }
         if (matrix[y][x].mine === false) matrix[y][x].mine = true;
         else i--;
      }
      return matrix;
   };

   const populateMineCount = (matrix) => {
      for (let i = 0; i < matrix.length; i++) {
         for (let j = 0; j < matrix[i].length; j++) {
            const [nearbyMines, localTiles] = getNearbyCount(j, i, matrix);
            matrix[i][j].nearbyMines = nearbyMines;
            matrix[i][j].localTiles = localTiles;
         }
      }
      return matrix;
   };

   const generateMap = (obj, matrix) => {
      let newMap = populateMineCount(populateMines(obj, matrix));
      setMap(newMap);
   };

   // useEffect(() => {
   //    setMap(createMatrix());
   // }, []);
   useEffect(() => {
      setMap(createMatrix());
      setFirstClick(true);
      setMinesLeft(settings.mines);
   }, [settings]);

   return (
      <div className="gameWindow">
         {(gameOver || gameWin) && <Popup />}
         <DisplayBar
            settings={settings}
            mapTypes={mapTypes}
            setSettings={setSettings}
            minesLeft={minesLeft}
         />
         <Minefield map={map} tileClick={tileClick} />
      </div>
   );
};
export default GameWindow;
