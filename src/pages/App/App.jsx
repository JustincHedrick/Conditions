import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage'
import WeatherPage from '../../components/WeatherPage/WeatherPage'
import ShowUserWeather from '../../components/ShowUsersWeather/ShowUsersWeather'

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ? 
      <>
      <Routes>
            <Route path='/' element={<LandingPage user={user} setUser={setUser}/>}/>
            <Route path='/weather' element={<WeatherPage user={user} />}/>
            <Route path='/mycrags' element={<ShowUserWeather user={user} />}/>
      </Routes>
      <LandingPage user={user} setUser={setUser}/>
      </>
      :
      <LandingPage setUser={setUser}/>
      }
    </main>
  );
}

 App;
