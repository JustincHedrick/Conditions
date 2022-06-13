import * as weatherAPI from '../../utilities/weather-api'
import { Link, useState, useEffect } from 'react'
import './ShowUsersWeather.css'

export default function UserWeatherShow({saveWeather}) {

  const [userWeather, setUserWeather] = useState()


  useEffect(() => {
    async function getUserWeather() {
      const userWeather = await weatherAPI.getUserWeather();
      setUserWeather(userWeather); 
    }
    
    getUserWeather();
  }, [saveWeather, deleteUserWeather] );

  async function deleteUserWeather(id) {
    const remove = await weatherAPI.deleteUserWeather(id);

  }

  return (
    <>
        {userWeather && userWeather.map(weather => 
          <div key={weather._id} className='user-weather-card'>
            <div>{weather.crag}</div>
            <div>Current temp: {weather.current.temp}</div>
            <button onClick={function(){deleteUserWeather(weather._id)}}>X</button>
          </div>)}
    </>
  )
}
