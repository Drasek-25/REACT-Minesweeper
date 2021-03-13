import { useState } from "react";

import DifficultyDropdown from "./DifficultyDropdown";

const DisplayBar = ({ settings, mapTypes, setSettings, minesLeft }) => {
   const [dropdownActive, setDropdownActive] = useState(false);

   const handleDropdown = () => {
      setDropdownActive(!dropdownActive);
   };
   return (
      <div className="displayBar">
         <button className="displayBar_map--button" onClick={handleDropdown}>
            {settings.name} ▽
         </button>
         <span className="displayBar_mines">💣 {minesLeft}</span>
         {dropdownActive && (
            <DifficultyDropdown
               handleDropdown={handleDropdown}
               setSettings={setSettings}
               mapTypes={mapTypes}
            />
         )}
      </div>
   );
};
export default DisplayBar;
