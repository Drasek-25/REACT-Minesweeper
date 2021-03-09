import { useState } from "react";

const Tile = ({ obj, tileClick }) => {
   const handleClick = (e) => {
      e.preventDefault();
      tileClick(e.nativeEvent.which, obj);
   };

   return (
      <div
         className="minefield_tile"
         onContextMenu={(e) => e.preventDefault()}
         onMouseDown={(e) => handleClick(e)}
      >
         {obj.mine && "X"}
         {obj.flag && "F"}
         {obj.testFlag && "TF"}
         {!obj.mine && !obj.flag && !obj.testFlag && obj.nearbyMines}
      </div>
   );
};
export default Tile;
