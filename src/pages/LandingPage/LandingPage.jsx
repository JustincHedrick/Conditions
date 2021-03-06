import {useState, useEffect} from 'react'
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import WeatherForm from '../../components/WeatherForm/WeatherForm'
import AuthPage from '../../components/Authpage/AuthPage'
import ShowUsersWeather from '../../components/ShowUsersWeather/ShowUsersWeather'
import * as weatherAPI from '../../utilities/weather-api'
import './LandingPage.css'

export default function LandingPage({user, setUser, data, formdata}) {
  const [saveWeather, setSaveWeather] = useState()
  const [form, setform] = useState({
    crag: '',
    latitude: null,
    longitude: null,
  })
  const [weather, setWeather] = useState(undefined)
  const [refresh, setRefresh] = useState(false)

    async function handleSave() {
    const weatherObj = {
      user: user,
      crag: form && form.crag,
      lat: weather && weather.lat,
      lon: weather && weather.lon,
      current: weather && weather.current,
      hourly: weather && weather.hourly,
    }
    const saveWeather = await weatherAPI.addWeatherData(weatherObj);
    setRefresh(!refresh)
    setSaveWeather(saveWeather)
  }

  async function weatherData(e) {
      e.preventDefault();
      const weather = await weatherAPI.getWeatherData(form)
      setWeather(weather)
    }

  return (
    
    <div className="LandingPage">
      <div className="logout-div">
        {user ? 
          <>
            <UserLogOut user={user} setUser={setUser} />   
          </> 
          : 
          <>
            
          </> 
        } 
      </div>
        <div className="intro">
          <br />
          <span>Find the upcoming conditions for any climbing spot in the world!</span>
          <br />
          <span>Our not-so-patended algorithm will determine the quality of the day with a 5 point scale.</span>
          <br />
          <span>Conditions recommends visiting Mountain Project to obtain the coordinates for each location.</span>
        </div>
        {user ? 
        <>
        
        <div className="weather-form">
          <WeatherForm user={user} form={form} setform={setform} weather={weather} setWeather={setWeather} weatherData={weatherData} handleSave={handleSave} refresh={refresh} setRefresh={setRefresh}/>
        </div>
        <div className='show-users-div'>
          <ShowUsersWeather user={user} saveWeather={saveWeather} refresh={refresh} setRefresh={setRefresh}/>
        </div>
        <div>
        </div>
        </>
        :
        <>
        <div className="noUserDiv">
          <div className="no-user-weather-form">
            <WeatherForm form={form} setform={setform} weather={weather} setWeather={setWeather} weatherData={weatherData} handleSave={handleSave}/>
          </div>  
          <div>
            <AuthPage setUser={setUser}/>
          </div>
        </div>
        </>
        } 
      
      
    </div>
  );
}