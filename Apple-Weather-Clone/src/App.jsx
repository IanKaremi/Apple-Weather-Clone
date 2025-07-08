import './App.css'
import Hourly from './hourly'
import Map from './map'

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
          <div class="H-desc">Cloudy conditions expected for the rest of the day. Wind gusts are upto 22km/h.</div>
          <Hourly />

        </div>
        <div class="M">
          <div class="M-desc">☂️ PRECIPITATION</div>
          <Map />
        
        </div>
        <div class="T">
          🗓️ 10-DAY-FORECAST
        </div>
        <div class="U">
          ☀️ UV Index
        </div>
        <div class="S">
          🌅 Sunset
        </div>
        <div class="W">
          💨 Wind
        </div>
        <div class="L">
          🌕 LUNAR PHASE
        </div>
        <div class="P">
          <div>🌧️ PRECIPITATION</div>
          <p>3 mm</p>
          <div>Today</div>
          <p>2mm expected tommorrow.</p>
        </div>
        <div class="F">
          <div>🌡️ FEELS LIKE</div>
          <p>22°C</p>
          <p>Similar to the actual temperature.</p>
        </div>
        <div class="Y">
          <div>💧 HUMIDITY</div>
          <p>60%</p>
          <p>The dew point is 11°C right now.</p>
        </div>
        <div class="V">
          <div>👁️ VISIBILITY</div>
          <p>28 km</p>  
          <p>Perfectly clear view.</p>
        </div>
        <div class="R">
          🌬️ Pressure
        </div>
        <div class="A">
          📈 Averages
        </div>

     </div>

    </>
  )
}

export default App
