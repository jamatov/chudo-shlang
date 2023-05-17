import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs){
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();
  return{
    second: getRemainingSeconds(nowDayjs, timestampDayjs),
    minute: getRemainingMinutes(nowDayjs, timestampDayjs),
    hour: getRemainingHours(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(nowDayjs, timestampDayjs){
  const seconds = timestampDayjs.diff(nowDayjs, 'second') % 60;
  return seconds;
}
function getRemainingMinutes(nowDayjs, timestampDayjs){
  const minutes = timestampDayjs.diff(nowDayjs, 'minute') % 60;
  return minutes;
}
function getRemainingHours(nowDayjs, timestampDayjs){
  const hours = timestampDayjs.diff(nowDayjs, 'hour') % 24;
  return hours;

}


function getRemainingYears(nowDayjs, timestampDayjs){
  const years = timestampDayjs.diff()
  return years;

}
