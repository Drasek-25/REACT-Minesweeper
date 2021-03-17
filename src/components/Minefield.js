import { useState, useEffect } from "react";
import Tile from "./Tile";

const Minefield = ({ map, tileClick, settings }) => {
   const [zoom, setZoom] = useState({ zoom: "1" });
   useEffect(() => {
      const lrgMapHeight = 16;
      const ratio = settings.height / lrgMapHeight;
      let scale = (1 / ratio).toFixed(1);
      setZoom({ zoom: scale });
   }, [settings]);

   return (
      <div className="minefield" style={zoom}>
         {map.map((row, i) => {
            return (
               <div className="minefield_row" key={"row " + map[i][0].y}>
                  {row.map((tile) => {
                     return (
                        <Tile key={tile.id} obj={tile} tileClick={tileClick} />
                     );
                  })}
               </div>
            );
         })}
      </div>
   );
};
export default Minefield;
