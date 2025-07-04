import './App.css'
import Hourly from './hourly'

function App() {
 

  return (
    <>
      <div class="Head">
        <p>MY LOCATION</p>
        <p class="location">Nairobi</p>
        <p class="temperature">22°</p>
        <p class="condition">Mostly Cloudy</p>
        <p class="high-low">H: 22°C L: 15°C</p>
      </div>

      <div class="Applets">

        <div class="H">
          <div class="H-desc">Cloudy conditions expected for the rest of the day Wind gusts are upto 22km/h.</div>
          <Hourly />

        </div>
        <div class="M">
          Map
        </div>
        <div class="T">
          10 day Forecast
        </div>
        <div class="U">
          UV Index
        </div>
        <div class="S">
          Sunset
        </div>
        <div class="W">
          Wind
        </div>
        <div class="L">
          Lunar Phase
        </div>
        <div class="P">
          Precipitation
        </div>
        <div class="F">
          Feels Like
        </div>
        <div class="Y">
          Humidity
        </div>
        <div class="V">
          Visibility
        </div>
        <div class="R">
          Pressure
        </div>
        <div class="A">
          Averages
        </div>

     </div>

    </>
  )
}

export default App
