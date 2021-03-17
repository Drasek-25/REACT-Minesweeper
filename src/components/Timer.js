import { useState, useEffect, useRef } from "react";

const Timer = ({ firstClick, gameWin, gameOver }) => {
   const [seconds, setSeconds] = useState(0);
   const [runTimer, setRunTimer] = useState(false);
   useInterval(() => setSeconds(seconds + 1), runTimer ? 1000 : null);
   useEffect(() => {
      if (firstClick === false) {
         setRunTimer(true);
      } else {
         setSeconds(0);
         setRunTimer(false);
      }
      if (gameWin || gameOver) {
         setRunTimer(false);
      }
   }, [firstClick, gameWin, gameOver]);

   return <div className="timer">🕗 {seconds}</div>;
};

// a custom timer hook shamelessly copied from Dan Ambramov
function useInterval(callback, delay) {
   const savedCallback = useRef();

   useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);

   useEffect(() => {
      function tick() {
         savedCallback.current();
      }
      if (delay !== null) {
         let id = setInterval(tick, delay);
         return () => clearInterval(id);
      }
   }, [delay]);
}

export default Timer;
