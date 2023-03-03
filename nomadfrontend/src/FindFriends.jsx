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
            <h1>@Nomad</h1>
            <NavBar />
            <SearchUsers searchTerm={searchUser} onSearchChange={setSearchUser}/>
            <UserList users={displayUsers}
            />
        </main>
    )
}
export default FindFriends;