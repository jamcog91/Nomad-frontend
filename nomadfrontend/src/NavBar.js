import React from 'react';

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
  }

    return (

        <nav>
    <div>
      <button>home</button>
      <button>For You</button>
      <button>Post</button>
      <button>Friends</button>
      <button>Inbox</button>
      <button>Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </nav>
    )

}
export default NavBar;