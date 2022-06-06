import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../Authpage/AuthPage';
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? (
        
          <LandingPage user={user} />
         )
      : (
      <>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<AuthPage setUser={setUser}/>}/>
        </Routes>
      </> )
      }
    </main>
  );
}


