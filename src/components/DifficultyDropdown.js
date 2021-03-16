const DifficultyDropdown = ({
   toggleDropdown,
   setSettings,
   mapTypes,
   setCustomMapWindow,
}) => {
   const handleSelection = (e) => {
      setSettings(mapTypes[e.target.innerText.toLowerCase()]);
      toggleDropdown();
   };
   const handleCustom = () => {
      toggleDropdown();
      setCustomMapWindow(true);
   };

   return (
      <div className="difficultyDropdown">
         <button onClick={(e) => handleSelection(e)}>Small</button>
         <button onClick={(e) => handleSelection(e)}>Medium</button>
         <button onClick={(e) => handleSelection(e)}>Large</button>
         <button onClick={(e) => handleCustom(e)}>Custom</button>
      </div>
   );
};
export default DifficultyDropdown;
