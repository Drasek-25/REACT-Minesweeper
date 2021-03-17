import { useState } from "react";

import DifficultyDropdown from "./DifficultyDropdown";
import Timer from "./Timer";

const DisplayBar = ({
   settings,
   mapTypes,
   setSettings,
   minesLeft,
   firstClick,
   setCustomMapWindow,
   gameWin,
   gameOver,
}) => {
   const [dropdownActive, setDropdownActive] = useState(false);

   const toggleDropdown = () => {
      setDropdownActive(!dropdownActive);
   };
   return (
      <div className="displayBar">
         <div className="displayBar_dd-wrapper">
            <button className="displayBar_map--button" onClick={toggleDropdown}>
               {settings.name} ▽
            </button>
            {dropdownActive && (
               <DifficultyDropdown
                  toggleDropdown={toggleDropdown}
                  setSettings={setSettings}
                  mapTypes={mapTypes}
                  setCustomMapWindow={setCustomMapWindow}
               />
            )}
         </div>
         <span className="displayBar_mines">💣{minesLeft}</span>
         <Timer firstClick={firstClick} gameWin={gameWin} gameOver={gameOver} />
      </div>
   );
};
export default DisplayBar;
