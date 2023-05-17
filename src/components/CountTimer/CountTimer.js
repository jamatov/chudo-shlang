import React, {useState, useEffect} from 'react'
import icon from '../../images/timer.svg'
import {getRemainingTimeUntilMsTimestamp} from '../CountTimer/Utils/CountDownTimerUtils'

const defaultRemainingTime = {
  second: '00',
  minute: '00',
  hour: '0'
}

const CountTimer = (countdwonTimestampMs) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdwonTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countdwonTimestampMs]);

  function updateRemainingTime(countdown){
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className='card-countdown'>
      <img className='card-icon' src={icon} alt="" />
      <span>{remainingTime.hour}</span>
      <span>soat</span>
      <span>{remainingTime.minute}</span>
      <span>minut</span>
      

    </div>
  )
}

export default CountTimer;
