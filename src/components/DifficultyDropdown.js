const DifficultyDropdown = ({ handleDropdown, setSettings, mapTypes }) => {
   const handleSelection = (e) => {
      setSettings(mapTypes[e.target.innerText.toLowerCase()]);
      handleDropdown();
   };
   return (
      <div className="difficultyDropdown">
         <button onClick={(e) => handleSelection(e)}>Small</button>
         <button onClick={(e) => handleSelection(e)}>Medium</button>
         <button onClick={(e) => handleSelection(e)}>Large</button>
      </div>
   );
};
export default DifficultyDropdown;
