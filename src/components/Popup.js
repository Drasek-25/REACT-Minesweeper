import CustomGameSetup from "./CustomGameSetup";
const Popup = ({
   gameOver,
   gameWin,
   restartGame,
   handleCustomMap,
   customMapWindow,
   setCustomMapWindow,
}) => {
   const winMessage = () => {
      return (
         <>
            <div>YOU WIN!</div>
            <button className="popup_button" onClick={restartGame}>
               Play Again?
            </button>
         </>
      );
   };
   const loseMessage = () => {
      return (
         <>
            <div>YOU LOSE!</div>
            <button className="popup_button" onClick={restartGame}>
               Play Again?
            </button>
         </>
      );
   };

   return (
      <div className="popup">
         {gameOver && !customMapWindow && loseMessage()}
         {gameWin && !customMapWindow && winMessage()}
         {customMapWindow && (
            <CustomGameSetup
               handleCustomMap={handleCustomMap}
               setCustomMapWindow={setCustomMapWindow}
            />
         )}
      </div>
   );
};
export default Popup;
