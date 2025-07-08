import { tenData } from "./tenData";
export default function Ten() {
   const data = tenData;

   const stateToEmoji = {
     Cloudy: "☁️",
     Stormy: "⛈️",
     Sunny: "☀️",
     Rainy: "🌧️",
     Snowy: "❄️"
   };


  return (
    <div className="ten-container">
      {data.map(({day, state, rain_chance, min, max}, index) => (
        <div className="daily" key={index}>
          <div className="time">{day}</div>
            <div className="state-container">
                <div className="state">{stateToEmoji[state]}</div>
                <div className="rain_chance">{rain_chance !== null ? `${rain_chance}%` : ""}</div>
            </div>
          <div className="tempRange">{`${min} ------------------ ${max}`}</div>
        </div>
      ))}
    </div>
  );
}