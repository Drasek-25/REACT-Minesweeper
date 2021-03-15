const Popup = ({ gameOver, gameWin, restartGame }) => {
   const winMessage = () => {
      return (
         <>
            <div>YOU WIN!</div>
            <div>YOU SO SMART</div>
         </>
      );
   };
   const loseMessage = () => {
      return (
         <>
            <div>YOU LOSE!</div>
            <div>YOU SO STUUUPIIID</div>
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
