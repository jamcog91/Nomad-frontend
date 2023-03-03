import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({ onLogout }) {
  const navigate = useNavigate()
  const handleHome = () => navigate('/Home')
  const handleProfile = () => navigate('/Profile')
  // const handleForYou = () => navigate('/ForYou')
  const handlePost = () => navigate('/NewPost')
  const handleInbox = () => navigate('/Inbox')
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
    navigate('/')
  }

    return (

    <nav>
      <div>
        <button onClick={handleHome}>home</button>
          <button>For You</button>
            <button onClick={handlePost}>Find a Restaurant</button>
              <button>Friends</button>
            <button onClick={handleInbox}>Inbox</button>
          <button onClick={handleProfile}>Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
    )

}
export default NavBar;