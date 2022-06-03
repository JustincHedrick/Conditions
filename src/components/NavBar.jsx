import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser();
  }

  function handleSubmit() {
    userService.login();
    setUser();
  }

  return (
      <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        <Link to="" onClick={handleSubmit}>Log In</Link>
      </nav>
  );
}