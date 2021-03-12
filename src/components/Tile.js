const Tile = ({ obj, tileClick }) => {
   const handleClick = (e) => {
      e.preventDefault();
      tileClick(e.nativeEvent.which, obj);
   };

   return (
      <div
         className={
            !obj.revealed
               ? "minefield_tile"
               : `minefield_tile revealed nearby${obj.nearbyMines}`
         }
         onContextMenu={(e) => e.preventDefault()}
         onMouseDown={(e) => handleClick(e)}
      >
         {obj.flag && "🚩"}
         {obj.testFlag && "🏴"}
         {!obj.flag &&
            !obj.testFlag &&
            obj.revealed &&
            ((obj.mine && "💣") || obj.nearbyMines || " ")}
      </div>
   );
};
export default Tile;
