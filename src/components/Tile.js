import { useState, useEffect } from "react";

const Tile = ({ obj, updateTile }) => {
   const [revealed, setRevealed] = useState(false);
   const [flag, setFlag] = useState(obj.flag);
   const [testFlag, setTestFlag] = useState(obj.testFlag);
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
            rightClick(obj);
            break;
         default:
            break;
      }
   };
   const leftClick = () => {
      setRevealed(true);
   };
   const rightClick = () => {
      if (flag) {
         setTestFlag(!testFlag);
         setFlag(!flag);
      } else if (testFlag) {
         setTestFlag(!testFlag);
      } else {
         setFlag(!flag);
      }
      handleMapChange();
   };
   const middleClick = () => {};

   const handleMapChange = () => {
      const newObj = obj;
      newObj.flag = flag;
      newObj.testFlag = testFlag;
      updateTile(newObj);
   };

   return (
      <div
         className="minefield_tile"
         onContextMenu={(e) => e.preventDefault()}
         onMouseDown={(e) => handleClick(e)}
      >
         {obj.mine && "X"}
         {flag && "F"}
         {testFlag && "TF"}
         {!obj.mine && !flag && !testFlag && obj.nearbyMines}
      </div>
   );
};
export default Tile;
