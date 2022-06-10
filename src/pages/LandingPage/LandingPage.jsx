import { Link } from 'react-router-dom'
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import WeatherForm from '../../components/WeatherForm/WeatherForm'
import AuthPage from '../../components/Authpage/AuthPage'
import ShowUsersWeather from '../../components/ShowUsersWeather/ShowUsersWeather'
import WeatherShow from '../../components/WeatherShow/WeatherShow'
import './LandingPage.css'

export default function LandingPage({user, setUser, data, formdata}) {
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
      
        {user ? 
        <>
        <div className="weather-form">
          <WeatherForm user={user}/>
        </div>
        <div className='show-users-div'>
          <ShowUsersWeather user={user} />
        </div>
        </>
        :
        <>
        <div className="noUserDiv">
          <div className="no-user-weather-form">
            <WeatherForm />
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

