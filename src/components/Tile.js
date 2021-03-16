const Tile = ({ obj, tileClick }) => {
   const handleClick = (e) => {
      e.preventDefault();
      tileClick(e, obj);
   };

   return (
      <div
         className={
            (!obj.revealed
               ? "minefield_tile" +
                 `${obj.highlight && !obj.flag ? " highlight" : ""}`
               : `minefield_tile revealed nearby${obj.nearbyMines}`) +
            `${obj.explode ? " explode" : ""}`
         }
         onContextMenu={(e) => e.preventDefault()}
         onMouseDown={(e) => handleClick(e)}
         onMouseUp={(e) => handleClick(e)}
      >
         {obj.flag && "🚩"}
         {obj.testFlag && "🏴"}
         {!obj.flag &&
            !obj.testFlag &&
            obj.revealed &&
            ((obj.mine && "💥") || obj.nearbyMines || " ")}
      </div>
   );
};
export default Tile;
