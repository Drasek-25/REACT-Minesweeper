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

   const randomLocation = () => {
      let x = Math.floor(Math.random() * (settings.width - 1));
      let y = Math.floor(Math.random() * (settings.height - 1));
      return [x, y];
   };

   const getNearbyCount = (x, y, map) => {
      let startX = map[y][x - 1] === undefined ? x : x - 1;
      let endX = map[y][x + 1] === undefined ? x : x + 1;
      let startY = map[y - 1] === undefined ? y : y - 1;
      let endY = map[y + 1] === undefined ? y : y + 1;
      let nearbyMines = 0;

      for (let i = startY; i <= endY; i++) {
         for (let j = startX; j <= endX; j++) {
            if ((i === y) & (j === x)) continue;
            if (map[i][j] === 9) nearbyMines++;
         }
      }
      return nearbyMines;
   };

   const generateMap = () => {
      let newMap = [];
      //Generate Matrix
      for (let i = 0; i < settings.height; i++) {
         newMap.push("0".repeat(settings.width).split(""));
      }
      //Generate Mines
      for (let i = 0; i < settings.mines; i++) {
         let [x, y] = randomLocation();
         if (newMap[y][x] === "0") newMap[y][x] = 9;
         else i--;
      }
      //Generate Nearby Mine Count
      for (let i = 0; i < newMap.length; i++) {
         for (let j = 0; j < newMap[i].length; j++) {
            if (newMap[i][j] === "0")
               newMap[i][j] = getNearbyCount(j, i, newMap);
         }
      }
      return newMap;
   };

   useEffect(() => {
      setMap(generateMap);
   }, []);

   return (
      <div className="gameWindow">
         <Minefield map={map} />
      </div>
   );
};
export default GameWindow;
