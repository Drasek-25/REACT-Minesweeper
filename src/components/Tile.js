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
         <strong>
            {obj.flag && "🚩"}
            {obj.testFlag && "🏴"}
            {!obj.flag &&
               !obj.testFlag &&
               obj.revealed &&
               ((obj.mine && "💣") || obj.nearbyMines)}
         </strong>
      </div>
   );
};
export default Tile;
