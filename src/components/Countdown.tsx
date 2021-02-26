import { useState, useEffect } from "react";
import {useContext} from  'react';
import styles from "../styles/components/Countdown.module.css";
import {ChallengesContext} from '../contexts/ChallangeContext'
let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  const {startNewChallange} = useContext(ChallengesContext);
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished,setHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");
  function startcountdown() {
    setIsActive(true);
  }

  function resetCountdown(){
      clearTimeout(countdownTimeout)
setIsActive(false);
setTime(25 * 60);
  }
  useEffect(() => {
    if (isActive && time > 0) {
     countdownTimeout =  setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }else if
        (isActive && time ==0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallange();
        
    }
  }, [isActive, time]);
  return (
    <div>
      <div className={styles.CountdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

{hasFinished ? (
     <button
     disabled

    
     className={styles.CountdownButton} 
   >
   Ciclo encerrado
   </button>
):(
    <>
         {isActive ? (
        <button
          type="button"
          onClick={resetCountdown}
          className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button
          type="button"
          onClick={startcountdown}
          className={styles.CountdownButton}
        >
          Iniciar um ciclo
        </button>
      )}
        </>
)}

     
    </div>
  );
}
