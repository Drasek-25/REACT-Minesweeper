import { useState, useEffect } from "react";
const Timer = ({ firstClick }) => {
   const [seconds, setSeconds] = useState(0);
   useEffect(() => {
      if (firstClick === true) setSeconds(0);
      else {
         setTimeout(() => {
            setSeconds(seconds + 1);
         }, 1000);
      }
   }, [firstClick, seconds]);

   return <div className="timer">🕗 {seconds}</div>;
};
export default Timer;