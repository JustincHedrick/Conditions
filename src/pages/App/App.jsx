import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../Authpage/AuthPage';
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
      <Routes>
        <Route path='/' element={<LandingPage user={user} />}/>
        <Route path='/login' element={<AuthPage setUser={setUser}/>}/>
      </Routes>
      :
      <LandingPage />
      }
    </main>
  );
}

export default App;
