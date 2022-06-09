import * as weatherAPI from '../../utilities/weather-api'
import { useState, useEffect } from 'react'

export default function UserWeatherList() {

  const [UserWeather, setUserWeather] = useState()

  useEffect(() => {
    async function getUserWeather() {
      const allUserWeather = weatherAPI.getUserWeather() 
    }
  })

  return (
    <h1>hello</h1>
  )
}