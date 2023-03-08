import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({ onLogout }) {
  const navigate = useNavigate()
  const handleHome = () => navigate('/Home')
  // const handleForYou = () => navigate('/ForYou')
  const handlePost = () => navigate('/FindRestaurants')
  const handleFindFriends = () => navigate('/FindFriends')
  const handleProfile = () => navigate('/Profile')
  const handleInbox = () => navigate('/Inbox')
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout())
    navigate('/')
  }

    return (

    <nav>
      <div className="flex top-15 mt-28 mb-8 ml-2 h-16 w-fit content-evenly rounded-xl bg-amber-300">
        <button className="relitive flex items-center justify-center
        ml-4 w-24 h-12 m-2 mb-8 mx-2 bg-amber-300 hover:bg-lime-800
         hover:text-white rounded-3x1 hover:rounded-xl transition-all 
         duration-300 ease-linear" onClick={handleHome}>home</button>
          <button className="flex-row relitive items-center justify-center
        ml-2 w-24 h-12 m-2 mb-5 mx-aut2 bg-amber-300 hover:bg-lime-800
         hover:text-white rounded-3x1 hover:rounded-xl transition-all 
         duration-300 ease-linear" >For You</button>
            <button className="flex-row relitive flex items-center justify-center
        ml-10 w-28 h-12 m-2 mb-5 mx-aut2 bg-amber-300 hover:bg-lime-800
         hover:text-white rounded-3x1 hover:rounded-xl transition-all 
         duration-300 ease-linear" onClick={handlePost}>Find a Restaurant</button>
              <button className="flex-row flex items-center justify-center
        ml-10 w-24 h-12 m-2 mb-2 bg-amber-300 hover:bg-lime-800
         hover:text-white rounded-3x1 hover:rounded-xl transition-all 
         duration-300 ease-linear"  onClick={handleFindFriends}>Friends</button>
            <button className="flex-row relitive flex items-center justify-center
        ml-10 w-24 h-12 m-2 mb-2 mx-auto bg-amber-300 hover:bg-lime-800
         hover:text-white rounded-3x1 hover:rounded-xl transition-all 
         duration-300 ease-linear"  onClick={handleInbox}>Inbox</button>
          <button className="flex-row relitive flex items-center justify-center
        ml-10 w-24 h-12 m-2 mb-2 mx-auto bg-amber-300 hover:bg-lime-800
         hover:text-white rounded-3x1 hover:rounded-xl transition-all 
         duration-300 ease-linear"  onClick={handleProfile}>Profile</button>
        <button className="flex-row relitive flex items-center justify-center
        ml-10 w-24 h-12 m-2 mb-2 mr-5 mx-auto bg-amber-300 hover:bg-red-700
         hover:text-white rounded-3x1 hover:rounded-xl transition-all 
         duration-300 ease-linear"  onClick={handleLogout}>Logout</button>
      </div>
    </nav>
    )

}
export default NavBar;