import * as weatherAPI from '../../utilities/weather-api'
import { Link, useState, useEffect } from 'react'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import './ShowUsersWeather.css'

export default function UserWeatherShow() {

  const [userWeather, setUserWeather] = useState()

  useEffect(() => {
    async function getUserWeather() {
      const userWeather = await weatherAPI.getUserWeather();
      setUserWeather(userWeather); 
    }
    
    getUserWeather();
  }, [] );

  return (
    <>
        {userWeather && userWeather.map(weather => 
          <div key={weather._id} className='user-weather-card'>
            <div>{weather.crag}</div>
            <div>Current temp: {weather.current.temp}</div>
            <button>X</button>
          </div>)}
    </>
  )
}