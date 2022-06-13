import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import LandingPage from '../LandingPage/LandingPage'
import ShowUserWeather from '../../components/ShowUsersWeather/ShowUsersWeather'

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      {user ? 
      <>
      <Routes>
            <Route path='/' element={<LandingPage user={user} setUser={setUser}/>}/>
            <Route path='/mycrags' element={<ShowUserWeather user={user} setUser={setUser} />}/>
      </Routes>
      </>
      :
      <LandingPage setUser={setUser}/>
      }
    </div>
  );
}

 App;
