const Popup = ({ gameOver, gameWin, restartGame }) => {
   const winMessage = () => {
      return (
         <>
            <div>YOU WIN!</div>
         </>
      );
   };
   const loseMessage = () => {
      return (
         <>
            <div>YOU LOSE!</div>
         </>
      );
   };

   return (
      <div className="popup">
         {gameOver && loseMessage()}
         {gameWin && winMessage()}
         <button className="popup_button-restart" onClick={restartGame}>
            Play Again?
         </button>
      </div>
   );
};
export default Popup;
