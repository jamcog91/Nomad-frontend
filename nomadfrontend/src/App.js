import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup'
import Home from './Home';
import FindRestaurants from './FindRestaurants';
import FindFriends from './FindFriends';
import Inbox from './Inbox';
import RestaurantProfile from './RestaurantProfile';
import UserProfile from './UserProfile';
// import ReviewPosts from './ReviewPosts';
import Profile from './Profile';
// import { useNavigate } from 'react-router-dom';
// import {link, route, routes } from 'react-router-dom';
function App() {
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState([])
  
  // const navigate = useNavigate()
   useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews");
        const reviewsArray = await response.json();
        setReviews(reviewsArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, []);
  //  const [user, setUser] = useState(null);
    // const { id } = useParams();

  useEffect(() => {
    // const setUser = async () => {
    //   try {
    //     const req = await fetch("/me");
    //     const res = await req.json();
    //     setUser(res);
    //   } catch (err) {
    //     // console.error(err);
    //   }
    // };
    // setUser();
    fetch('/me')
    .then((r) => {
      if (r.ok){
        r.json() .then((user) => setUser(user))
      }
    })
  }, []);
 
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
  console.log(user)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login user = {user} setUser = {setUser}/>
    },
    {
      path: "/Home",
      element: <Home setReveiws={setReviews} reviews={reviews} user={user}/>
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/Profile",
      element: <Profile user = {user} />
    },
    {
      path: "/RestaurantProfile/:id",
      element: <RestaurantProfile  user={user} />
    },
    {
      path: "/FindRestaurants",
      element: <FindRestaurants />
    },
    {
      path: "/Inbox",
      element: <Inbox />
    },
    {
      path: "/FindFriends",
      element: <FindFriends />
    },
    {
      path: "/UserProfile/:id",
      element: <UserProfile />
    }
    // {
    //   path: "/ReviewPosts",
    //   element: <ReviewPosts />
    // }
  ])

  return <RouterProvider router={router} />;
}

export default App;
