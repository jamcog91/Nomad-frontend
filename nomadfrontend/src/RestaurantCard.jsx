
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ restaurant }) =>{
const { name, address, image, style} = restaurant;
const navigate = useNavigate()

    return (
        <>
            <li className="restaurant-card" key={restaurant.id}>
                <img src={image} alt={name} style={{width:"100px"}}/>
                <h2>{name}</h2>
                <p>{address}</p>
                <p>{style}</p>
                <p>have you been here?</p>
                {/* <button onClick={() => navigate(`/RestaurantProfile${restaurant.id}`)}>+</button> */}
                <button onClick={() => navigate(`/RestaurantProfile/${restaurant.id}`)}>+</button>

            </li>
        </>
    )
}
export default RestaurantCard;