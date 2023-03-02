import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home';
import Login from './Login';
import NewPost from './NewPost';
import Inbox from './Inbox';
// import ReviewPosts from './ReviewPosts';
import Profile from './Profile';
// import { useNavigate } from 'react-router-dom';
// import {link, route, routes } from 'react-router-dom';
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

  // useEffect(()=> {
  //   const getUsers = async () => {
  //     let req = await fetch("http://127.0.0.1:3000/users")
  //     let res = await req.json()
  //     setUsers(res)
  //     console.log(res)
  //   }
  //   getUsers()
  // },[])
  // const isLoggedin = true
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login user = {users} setUsers = {setUsers}/>
    },
    {
      path: "/Home",
      element: <Home setReveiws={setReviews} reviews={reviews} user = {users} setUsers = {setUsers}/>
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/Profile",
      element: <Profile user = {users} setUsers={setUsers} reviews={reviews}/>
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/NewPost",
      element: <NewPost />
    },
    {
      path: "/Inbox",
      element: <Inbox />
    },
    // {
    //   path: "/ReviewPosts",
    //   element: <ReviewPosts />
    // }
  ])

  return <RouterProvider router={router} />;
}

export default App;
