import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

function NavBar({ onLogout }) {
  const navigate = useNavigate()
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
    navigate('/')
  }

    return (

        <nav>
      <div>
        {/* <Link to="/Home"> */}
        <button>home</button>
        {/* </Link> */}
          {/* <Link to="/Feed"> */}
          <button>For You</button>
          {/* </Link> */}
            {/* <link to="/CreatePost"> */}
            <button>Post</button>
            {/* </link> */}
              {/* <link to="/Freinds"> */}
              <button>Friends</button>
              {/* </link> */}
            {/* <link to="/inbox"> */}
            <button>Inbox</button>
            {/* </link> */}
          {/* <Link to="/UserProfile"> */}
          <button>Profile</button>
          {/* </Link> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
    )

}
export default NavBar;