import Minefield from "./Minefield";
import { useState, useEffect } from "react";

const GameWindow = () => {
   const mapTypes = {
      small: {
         height: 8,
         width: 8,
         totalSquares: 64,
         safeSquares: 54,
         mines: 10,
      },
      medium: {
         height: 13,
         width: 15,
         totalSquares: 195,
         safeSquares: 155,
         mines: 40,
      },
      large: {
         height: 16,
         width: 30,
         totalSquares: 480,
         safeSquares: 381,
         mines: 99,
      },
   };
   const [settings, setSettings] = useState(mapTypes.large);
   const [map, setMap] = useState([]);

   const updateTile = (obj) => {
      const newMap = map.slice();
      newMap[obj.y][obj.x] = obj;
      setMap(newMap);
   };
   class Tile {
      constructor(x, y) {
         this.id = `${x} ${y}`;
         this.x = x;
         this.y = y;
         this.flag = false;
         this.testFlag = false;
         this.neighbors = [];
         this.mine = false;
         this.nearbyMines = 0;
      }
   }

   const randomLocation = () => {
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
      let neighbors = [];

      for (let i = startY; i <= endY; i++) {
         for (let j = startX; j <= endX; j++) {
            if ((i === y) & (j === x)) continue;
            if (matrix[i][j].mine === true) nearbyMines++;
            neighbors.push([j, i]);
         }
      }
      return [nearbyMines, neighbors];
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

   const populateMines = (matrix) => {
      for (let i = 0; i < settings.mines; i++) {
         let [x, y] = randomLocation();
         if (matrix[y][x].mine === false) matrix[y][x].mine = true;
         else i--;
      }
      return matrix;
   };

   const populateMineCount = (matrix) => {
      for (let i = 0; i < matrix.length; i++) {
         for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].mine === false) {
               const [nearbyMines, neighbors] = getNearbyCount(j, i, matrix);
               matrix[i][j].nearbyMines = nearbyMines;
               matrix[i][j].neighbors = neighbors;
            }
         }
      }
      return matrix;
   };

   const generateMap = () => {
      let newMap = populateMineCount(populateMines(createMatrix()));
      console.log(newMap);
      return newMap;
   };

   useEffect(() => {
      setMap(generateMap());
   }, []);

   return (
      <div className="gameWindow">
         <Minefield map={map} updateTile={updateTile} />
      </div>
   );
};
export default GameWindow;
