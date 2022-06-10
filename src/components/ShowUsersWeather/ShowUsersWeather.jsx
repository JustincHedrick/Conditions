import * as weatherAPI from '../../utilities/weather-api'
import { useState, useEffect } from 'react'
import './ShowUsersWeather.css'

export default function UserWeatherList() {

  const [userWeather, setUserWeather] = useState()

  useEffect(() => {
    async function getUserWeather() {
      const userWeather = await weatherAPI.getUserWeather();
      console.log(userWeather);
      setUserWeather(userWeather); 
    }
    getUserWeather();
  }, [] );

  return (
    <>
      {userWeather && userWeather.map(weather => <p>{weather.user} {weather.crag} {weather.current.temp}</p>)}
    </>
  )
}