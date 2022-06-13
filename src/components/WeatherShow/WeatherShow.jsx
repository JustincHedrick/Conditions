import {useState, useEffect} from 'react'
import './WeatherShow.css'


export default function WeatherShow(props) {
  const { data, formdata, user, handleSave } = props;
  
  let total = 0;
  // let dailyTotal = 0;

  function getTotal() {
    if (data.current.temp > 30 && data.current.temp < 70) total += 1;
    if (data.current.humidity < 60) total += 1
    if (data.current.dew_point * 2 < data.current.temp) total += 1;
    if (data.current.wind_speed > 3 && data.current.wind_speed < 20) total += 1;
    return total;
  }

  // function getDailyTotal() {
  //   if (data.daily.temp > 30 && data.current.temp < 70) total += 1;
  //   if (data.current.humidity < 60) total += 1
  //   if (data.current.dew_point * 2 < data.current.temp) total += 1;
  //   if (data.current.wind_speed > 3 && data.current.wind_speed < 20) total += 1;
  //   return total;
  // }

  return (
    <>
      <h1>Current Weather</h1>
      <>
      <div className="weathershow">
          <span className="titlecard">
            <span>Crag: {formdata.crag} Latitude: {data.lat}, Longitude: {data.lon}</span>
          </span>
          <br />
          <div>Current Temperature: °{data.current.temp}</div>
          <div>Current humidity: {data.current.humidity}%</div>
          <div>Current Dewpoint: {data.current.dew_point}</div>
          <div>Current windspeed: {data.current.wind_speed} mph</div>
          <div>
            Its a {getTotal()} star day!
          </div>
          <div>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleTimeString()}</div>
          <div>Sunset: {new Date(data.current.sunset * 1000).toLocaleTimeString()}</div>
          {user ? 
            <button onClick={function(){handleSave()}}>Save {formdata.crag}</button>
            :
            <h5>Signup to save crags!</h5>
          }
        </div>
      <div className="daily-show">
        <h1>3 Day Forecast</h1>
        <div className="daily-container">
          <div className="day-one-show">
            <h5>{new Date(data.daily[1].dt * 1000).toLocaleDateString()}</h5>
            <div>Max Temp: {data.daily[1].temp.max}</div>
            <div>Min Temp: {data.daily[1].temp.min}</div>  
            <div>Humidity: {data.daily[1].humidity}</div>
            <div>Dew Point: {data.daily[1].dew_point}</div>
            <div>Wind Speed: {data.daily[1].wind_speed}mph</div>
            <div>Cloud Coverage: {data.daily[1].clouds}%</div>
            <div>Chance of rain: {data.daily[1].pop * 100}%</div>
            <img src={`http://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`} />
          </div>
          <div className="day-two-show">
            <h5>{new Date(data.daily[2].dt * 1000).toLocaleDateString()}</h5>
            <div>Max Temp: {data.daily[2].temp.max}</div>
            <div>Min Temp: {data.daily[2].temp.min}</div>  
            <div>Humidity: {data.daily[2].humidity}</div>
            <div>Dew Point: {data.daily[2].dew_point}</div>
            <div>Wind Speed: {data.daily[2].wind_speed}mph</div>
            <div>Cloud Coverage: {data.daily[2].clouds}%</div>
            <div>Chance of rain: {data.daily[2].pop * 100}%</div>
            <img src={`http://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`} />
          </div>
          <div className="day-three-show">
            <h5>{new Date(data.daily[3].dt * 1000).toLocaleDateString()}</h5>
            <div>Max Temp: {data.daily[3].temp.max}</div>
            <div>Min Temp: {data.daily[3].temp.min}</div>  
            <div>Humidity: {data.daily[3].humidity}</div>
            <div>Dew Point: {data.daily[3].dew_point}</div>
            <div>Wind Speed: {data.daily[3].wind_speed}mph</div>
            <div>Cloud Coverage: {data.daily[3].clouds}%</div>
            <div>Chance of rain: {data.daily[3].pop * 100}%</div>
            <img src={`http://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`} />
            
          </div>
        </div>
      </div>
      <div className="imaginary">

      </div>
      </>
    </>
  )
}