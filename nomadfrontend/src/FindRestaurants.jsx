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
        <div>
           <div className="h-56 grid grid-cols-6 mb-8 gap-2 content-start">
        <img src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" className="mt-2 rounded-full" />
        <h1 className="text-green-600 font-serif mt-48 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
        </div>
            <NavBar />
            <SearchRestaurant searchTerm={searchRestaurant} onSearchChange={setSeatchRestaurant}/>
            <RestaurantList restaurants={displayRestaurants}
            />
        </div>
    )
}
export default NewPost;