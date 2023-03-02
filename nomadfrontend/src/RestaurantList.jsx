

function RestaurantList({ restaurant}) {


    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.adress}</p>
            <p>{restaurant.style}</p>
        </div>
    )
}
export default RestaurantList