import { useState } from 'react'
import * as WeatherAPI from '../../utilities/weather-api'
import WeatherShow from '../WeatherShow/WeatherShow'
import "./WeatherForm.css"


export default function WeatherForm ({user, handleSave, form, setform, weather, setWeather, weatherData}) {

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
        <div className="weather-container">
          <form className="weather-form-style">
            <h1>Find your crag</h1>
            <div className="form-input">
              <input type="text" placeholder='Crag' name='crag' onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-input">
              <input type="text" placeholder='Latitude' name="latitude" onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-input">
              <input type="text" placeholder='Longitude' name='longitude' onChange={(e) => handleChange(e) } />
            </div>
            <button className="weatherbtn" onClick={(e) => weatherData(e)}>Submit</button>
          </form>
          
        
      
        {weather !== undefined ? (
          <div className="weather-show">
            <WeatherShow data={weather} formdata={form} user={user} handleSave={handleSave}/>
          </div>
        ) : null}
        </div>
    </>
  );
}