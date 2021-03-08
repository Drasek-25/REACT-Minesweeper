const Tile = ({ obj, tileClick }) => {
   const handleClick = (e) => {
      e.preventDefault();
      tileClick(e.nativeEvent.which);
   };

   return (
      <div
         className="minefield_tile"
         onContextMenu={(e) => e.preventDefault()}
         onMouseDown={(e) => handleClick(e)}
      >
         {obj.mine === true ? "X" : obj.nearbyMines}
      </div>
   );
};
export default Tile;
