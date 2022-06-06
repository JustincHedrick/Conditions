import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../Authpage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import WeatherForm from '../../components/WeatherForm/WeatherForm'
import './LandingPage.css'

export default function LandingPage() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="LandingPage">
      <aside>
        <Link to='/login' >Login-in</Link>
      </aside>
      <div>
        <WeatherForm />
      </div>
    
    </main>
  );
}

