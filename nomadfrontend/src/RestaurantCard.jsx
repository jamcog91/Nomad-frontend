
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ restaurant }) =>{
const { name, address, image, style} = restaurant;
const navigate = useNavigate()

    return (
        <div className="ml-10 mb-2 border-solid border-2 rounded-2xl border-green-800">
            <li className="restaurant-card" key={restaurant.id}>
                <h2 className="text-2xl ml-20 mt-4">{name}</h2>
                <p className="text-md ml-20 mb-2 italic text-slate-600">{address}</p>
                <img src={image} alt={name} style={{width:"100px"}} className="ml-20 rounded-3xl"/>
                <p className="text-1xl ml-20 mb-2 italic text-slate-600">{style}</p>
                <p className="ml-60 text-lg">have you been here?</p>
                {/* <button onClick={() => navigate(`/RestaurantProfile${restaurant.id}`)}>+</button> */}
                <button onClick={() => navigate(`/RestaurantProfile/${restaurant.id}`)}className="ml-72 mb-6 rounded bg-transparent rounded mb-4 px-4 border ml-56 border-green-600 w-48 mt-2 h-8 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all">+</button>

            </li>

        </div>
    )
}
export default RestaurantCard;