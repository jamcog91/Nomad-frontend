import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import SearchRestaurant from './SearchRestaurant'
import RestaurantList from './RestaurantList'

function NewPost() {
    const [restaurant, setRestaurant] = useState([])
    const [searchRestaurant, setSeatchRestaurant] = useState("")

useEffect(() => { 
    const fetchRestaurant = async () => {
        let req = await fetch('/restaurant')
        let res = await req.json()
        setRestaurant(res)
    }
    fetchRestaurant()
}, [])
const displayRestaurants = restaurant.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchRestaurant.toLowerCase());
})
        return (
        <div>
            <h1>@Nomad</h1>
            <NavBar />
            <SearchRestaurant searchTerm={searchRestaurant} onSearchChange={setSeatchRestaurant}/>
            <RestaurantList 
                restaurant={displayRestaurants}
            />

        </div>
    )
}
export default NewPost