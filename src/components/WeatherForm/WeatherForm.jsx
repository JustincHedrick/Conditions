import { useState } from 'react'
import * as WeatherAPI from '../../utilities/weather-api'
import WeatherShow from '../WeatherShow/WeatherShow'
import "./WeatherForm.css"


export default function WeatherForm ({user}) {
  const [weather, setWeather] = useState(undefined)
  const [form, setform] = useState({
    crag: '',
    latitude: null,
    longitude: null,
  })


  async function weatherData(e) {
    
      e.preventDefault();
      const weather = await WeatherAPI.getWeatherData(form)
      setWeather(weather)
    
      
    }
  
  

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "crag") {
      setform({...form, crag: value})
    }
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
          <input type="text" placeholder='Crag' name='crag' onChange={(e) => handleChange(e)} />
          <input type="text" placeholder='Latitude' name="latitude" onChange={(e) => handleChange(e)} />
          <br />
          <input type="text" placeholder='Longitude' name='longitude' onChange={(e) => handleChange(e) } />
            
        </form>
        <button className="weatherbtn" onClick={(e) => weatherData(e)}>Submit</button>
      </div>
        {weather !== undefined ? (
          <div className="weather-show">
            <WeatherShow data={weather} formdata={form} user={user}/>
          </div>
        ) : null}
    </>
  );
}