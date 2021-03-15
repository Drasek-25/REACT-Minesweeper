const Popup = ({ gameOver, gameWin }) => {
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
      </div>
   );
};
export default Popup;
