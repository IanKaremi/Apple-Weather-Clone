import { tenData } from "./tenData";
export default function Hourly() {
   const data = tenData;


  return (
    <div className="ten-container">
      {data.map(({day, state, rain_chance, min, max}, index) => (
        <div className="hourly" key={index}>
          <div className="time">{day}</div>
          <div className="emoji">{state}</div>
          <div className="rain_chance">{rain_chance !== null ? `${rain_chance}%` : ""}</div>
          <div className="tempStatus">{`${min} - ${max}`}</div>
        </div>
      ))}
    </div>
  );
}