const Tile = ({ obj }) => {
   return (
      <div className="minefield_tile">
         {obj.mine === true ? "X" : obj.nearbyMines}
      </div>
   );
};
export default Tile;
