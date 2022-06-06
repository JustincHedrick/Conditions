import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import WeatherForm from '../../components/WeatherForm/WeatherForm'
import './LandingPage.css'

export default function LandingPage({user, setUser}) {
  // const [user, setUser] = useState(getUser());

  return (
    <main className="LandingPage">
      <aside>
        {user ?
          <>
            <Link to='/search'>Search</Link>
            <Link to='/mycrags'>My Crags</Link>
            <UserLogOut user={user} setUser={setUser} />  
          </>
          :
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/search'>Search</Link>
          </>
        } 
      </aside>
      <div className="weather-form">
        <div>
          <button>Lat/Long</button>
          <button>Name</button>
        </div>
        <WeatherForm />
      </div>
    
    </main>
  );
}

