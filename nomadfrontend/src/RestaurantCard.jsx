
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ restaurant }) =>{
const { name, address, image, style} = restaurant;
const navigate = useNavigate()

    return (
        <div className="ml-10 mb-2 border-solid border-2 rounded-2xl border-green-800">
            <li className="restaurant-card" key={restaurant.id}>
                <h2>{name}</h2>
                <p>{address}</p>
                <img src={image} alt={name} style={{width:"100px"}}/>
                <p>{style}</p>
                <p>have you been here?</p>
                {/* <button onClick={() => navigate(`/RestaurantProfile${restaurant.id}`)}>+</button> */}
                <button onClick={() => navigate(`/RestaurantProfile/${restaurant.id}`)}>+</button>

            </li>

        </div>
    )
}
export default RestaurantCard;