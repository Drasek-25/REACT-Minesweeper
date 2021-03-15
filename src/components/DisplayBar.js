import { useState } from "react";

import DifficultyDropdown from "./DifficultyDropdown";
import Timer from "./Timer";

const DisplayBar = ({
   settings,
   mapTypes,
   setSettings,
   minesLeft,
   firstClick,
}) => {
   const [dropdownActive, setDropdownActive] = useState(false);

   const handleDropdown = () => {
      setDropdownActive(!dropdownActive);
   };
   return (
      <div className="displayBar">
         <div className="displayBar_dd-wrapper">
            <button className="displayBar_map--button" onClick={handleDropdown}>
               {settings.name} ▽
            </button>
            {dropdownActive && (
               <DifficultyDropdown
                  handleDropdown={handleDropdown}
                  setSettings={setSettings}
                  mapTypes={mapTypes}
               />
            )}
         </div>
         <span className="displayBar_mines">💣 {minesLeft}</span>
         <Timer firstClick={firstClick} />
      </div>
   );
};
export default DisplayBar;
