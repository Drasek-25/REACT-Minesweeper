import { useState } from "react";
const CustomGameSetup = ({ handleCustomMap }) => {
   const initialValues = { height: 0, width: 0, mines: 0 };
   const [customMap, setCustomMap] = useState(initialValues);
   const handleInput = (e) => {
      setCustomMap({ ...customMap, [e.target.name]: e.target.value });
   };
   return (
      <div className="popup_custom">
         <div className="popup_custom-fields">
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
               <span className="popup_custom-text">Width: </span>
               <input
                  className="popup_custom-input"
                  name="width"
                  value={customMap.width}
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
         <button
            className="popup_button"
            onClick={() => handleCustomMap(customMap)}
         >
            Start
         </button>
      </div>
   );
};
export default CustomGameSetup;
