import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SearchUsers from './SearchUsers'
import UserList from './UserList'

function FindFriends() {
    const [users, setUsers] = useState([])
    const [searchUser, setSearchUser ] = useState("")
// useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await fetch("/restaurants");
//         const restaurantsArray = await response.json();
//         console.log(response);
//         // console.log(restaurants)
//         // setRestaurants(restaurantsArray);
//       } catch (error) {
//       }
//     };
//     fetchRestaurants();
//   }, []);
const fetchUsers = async() => {
  let req = await fetch('/users')
  let res   = await req.json()        
  setUsers(res)
}
useEffect(() =>{
  fetchUsers()
},[])
// console.log(restaurants)
// useEffect(() => { 
//     const fetchRestaurant = async () => {
//         let req = await fetch('/restaurants')
//         let res = await console.log(req)
//         setRestaurants(res)
//       }
//       fetchRestaurant()
//     }, [])
    // console.log(restaurants)

const displayUsers = users.filter((user) => {
  return user.handle.toLowerCase().includes(searchUser.toLowerCase());
})
// console.log(displayRestaurants)
        return (
        <main>
           <div className="h-56 grid grid-cols-6 mb-8 gap-2 content-start">
        <img src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" className="mt-2 rounded-full ml-4" />
        <h1 className="text-green-600 font-serif mt-48 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
        </div>
            <NavBar />
            <SearchUsers searchTerm={searchUser} onSearchChange={setSearchUser}/>
            <UserList users={displayUsers}
            />
        </main>
    )
}
export default FindFriends;