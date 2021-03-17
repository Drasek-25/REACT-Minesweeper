import { useState } from "react";
const CustomGameSetup = ({ handleCustomMap, setCustomMapWindow }) => {
   const initialValues = { height: 16, width: 30, mines: 99 };
   const [customMap, setCustomMap] = useState(initialValues);
   const handleInput = (e) => {
      setCustomMap({ ...customMap, [e.target.name]: e.target.value });
   };
   return (
      <div className="popup_custom">
         <div className="popup_custom-fields">
            <div className="popup_custom-row">
               <span className="popup_custom-text">Width: </span>
               <input
                  className="popup_custom-input"
                  name="width"
                  value={customMap.width}
                  onChange={handleInput}
               />
            </div>
            <div className="popup_custom-row">
               <span className="popup_custom-text">Height: </span>
               <input
                  className="popup_custom-input"
                  name="height"
                  value={customMap.height}
                  onChange={handleInput}
               />
            </div>

            <div className="popup_custom-row">
               <span className="popup_custom-text">Mines: </span>
               <input
                  className="popup_custom-input"
                  name="mines"
                  value={customMap.mines}
                  onChange={handleInput}
               />
            </div>
         </div>
         <div className="popup_button-row">
            <button
               className="popup_button"
               onClick={() => handleCustomMap(customMap)}
            >
               Start
            </button>
            <button
               className="popup_button"
               onClick={() => setCustomMapWindow(false)}
            >
               X
            </button>
         </div>
      </div>
   );
};
export default CustomGameSetup;
