import { useState } from 'react'
import * as WeatherAPI from '../../utilities/weather-api'
import WeatherShow from '../WeatherShow/WeatherShow'
import "./WeatherForm.css"


export default function WeatherForm () {
  const [weather, setWeather] = useState([])
  const [form, setform] = useState({
    latitude: null,
    longitude: null,
  })

  
  // const APIKEY = "3ce857b3e51d7ad8af05cfbc872bd7cf";
  async function weatherData(e) {
    
    e.preventDefault();
    const data = await WeatherAPI.getWeatherData(form)
    setWeather(data.data)

      
    }
  
  

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "latitude") {
      setform({ ...form, latitude: value})
    }
    if (name === "longitude") {
      setform({ ...form, longitude: value})
    }
  }

  return (
    <>
      <br />
      <div className="weatherformdiv">
        <form>
          <input type="text" placeholder='Latitude' name="latitude" onChange={(e) => handleChange(e)} />
          <br />
          <input type="text" placeholder='Longitude' name='longitude' onChange={(e) => handleChange(e) } />
            
        </form>
        <button className="weatherbtn" onClick={(e) => weatherData(e)}>Submit</button>
      </div>
        {weather.data !== undefined ? (
          <div className="weather-show">
            <WeatherShow data={weather} />
          </div>
        ) : null}
    </>
  );
}