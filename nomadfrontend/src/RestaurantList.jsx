import RestaurantCard from "./RestaurantCard"
// import RestaurantProfile from "./RestaurantProfile"

function RestaurantList({ restaurants }) {
    // {console.log(restaurants)}
     return (
        <ul className="restaurant-list">
        {restaurants.map((restaurant) => {
            return <RestaurantCard className="ml-10" key={restaurant.id} restaurant={restaurant} />
        })}
        </ul>
    )
}
export default RestaurantList