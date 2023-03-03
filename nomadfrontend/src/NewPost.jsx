import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SearchRestaurant from './SearchRestaurant'
import RestaurantList from './RestaurantList'

function NewPost() {
    const [restaurants, setRestaurants] = useState([])
    const [searchRestaurant, setSeatchRestaurant] = useState("")
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
const fetchRestaurants = async() => {
  let req = await fetch('/restaurants')
  let res   = await req.json()        
  setRestaurants(res)
}
useEffect(() =>{
  fetchRestaurants()
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

const displayRestaurants = restaurants.filter((restaurant) => {
  return restaurant.name.toLowerCase().includes(searchRestaurant.toLowerCase());
})
// console.log(displayRestaurants)
        return (
        <main>
            <h1>@Nomad</h1>
            <NavBar />
            <SearchRestaurant searchTerm={searchRestaurant} onSearchChange={setSeatchRestaurant}/>
            <RestaurantList restaurants={displayRestaurants}
            />
        </main>
    )
}
export default NewPost