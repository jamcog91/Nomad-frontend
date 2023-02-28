import './App.css';
// import NavBar  from './NavBar';
import Home from './Home';
// import ReviewPosts from './ReviewPosts';
import UserProfile from './UserProfile';
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import {link, route, routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])
  // const navigate = useNavigate()
  useEffect(()=> {
    const getReviews = async () => {
      let req = await fetch("http://127.0.0.1:3000/reviews")
      let res = await req.json()
      setReviews(res)
      console.log(res)
    }
    getReviews()
  },[])

  useEffect(()=> {
    const getUsers = async () => {
      let req = await fetch("http://127.0.0.1:3000/users")
      let res = await req.json()
      setUsers(res)
      console.log(res)
    }
    getUsers()
  },[])
  // const isLoggedin = true
  const router = createBrowserRouter([
    // {
    //   path: "/ReviewPosts",
    //   element: <ReviewPosts setReveiws = {setReviews} reviews = {Reviews} />
    // },
    {
      path: "/",
      element: <Home setReveiws={setReviews} reviews={reviews} user = {users} setUsers = {setUsers}/>
    },
    // {
    //   path: "/NavBar",
    //   element: <NavBar />
    // },
    {
      path: "/UserProfile",
      element: <UserProfile user = {users} setUsers = {setUsers} />
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;
