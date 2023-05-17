import React, {useState, useEffect} from 'react'
import icon from '../../images/timer.svg'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00'
}

const CountTimer = (countdwonTimestampMs) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdwonTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, []);

  function updateRemainingTime(){
    // console.log("Nima gap");
  }

  return (
    <div className='card-countdown'>
      <img className='card-icon' src={icon} alt="" />
      <span>{remainingTime.hours}</span>
      <span>soat</span>
      <span>{remainingTime.minutes}</span>
      <span>minut</span>
      

    </div>
  )
}

export default CountTimer;
