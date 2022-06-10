import { Link, Routes, Route } from 'react-router-dom'
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import WeatherForm from '../../components/WeatherForm/WeatherForm'
import AuthPage from '../../components/Authpage/AuthPage'
import ShowUserWeather from '../../components/ShowUsersWeather/ShowUsersWeather'
import './LandingPage.css'

export default function LandingPage({user, setUser}) {
  return (
    <main className="LandingPage">
      <aside>
        {user ? 
          <>
            <Link to="/">Home</Link>
            <Link to="/mycrags">MyCrags</Link>
            
            <UserLogOut user={user} setUser={setUser} />   
            
          </> 
          : 
          <>
            
          </> 
        } 
      </aside>
      <div className="weather-form">
        {user ? 
        <WeatherForm user={user}/>
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
      
    </main>
  );
}

