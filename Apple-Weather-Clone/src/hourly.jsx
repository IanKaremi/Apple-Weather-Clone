import { hourlyData } from "./hourlyData";
export default function Hourly() {
   const data = hourlyData;


  return (
    <div className="hourly-container">
      {data.map(({time, emoji, rain_chance, tempStatus}, index) => (
        <div className="hourly" key={index}>
          <div className="time">{time}</div>
          <div className="emoji">{emoji}</div>
          <div className="rain_chance">{rain_chance !== null ? `${rain_chance}%` : ""}</div>
          <div className="tempStatus">{tempStatus}</div>
        </div>
      ))}
    </div>
  );
}