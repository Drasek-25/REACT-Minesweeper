const Tile = ({ obj }) => {
   const leftClick = () => {};
   const rightClick = () => {};
   const middleClick = () => {};
   const handleClick = (e) => {
      e.preventDefault();
      switch (e.nativeEvent.which) {
         case 1:
            leftClick();
            break;
         case 2:
            middleClick();
            break;
         case 3:
            rightClick();
            break;
      }
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
