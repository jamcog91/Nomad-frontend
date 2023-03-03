// import NavBar from "./NavBar";
// import { useEffect } from 'react'
// // import ResturantCard from "./RestaurantCard";

// const RestaurantProfile = ({restaurants}) => {
//   const {name, address, image, style} = restaurants;
// // const [getRestaurants] = useState([])

// useEffect(() =>{
// const getRestaurant = async() => {
//   let req = await fetch(`/restaurants/${restaurants.id}`)
//   let res = await req.json()        
//    return res.json()
// }
// getRestaurant()
// },[])
// // let restaurant = getRestaurants()
//     return (
//         <div>
//             <h1>@Nomad</h1>
//             <NavBar />
//             {/* <h2>{name}</h2>
//             <h3>{address}</h3>
//             <image src={image} alt={name} />
//             <p>{style}</p> */}
//         </div>
//     )
// }
// export default RestaurantProfile;
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

const RestaurantProfile = () => {
    const [restaurant, setRestaurant] = useState(null);
    const { id } = useParams();

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const req = await fetch(`/restaurants/${id}`);
        const res = await req.json();
        setRestaurant(res);
      } catch (err) {
        // console.error(err);
      }
    };
    getRestaurant();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const { name, address, image, style } = restaurant;

  return (
    <div>
      <h1>@Nomad</h1>
      <NavBar />
      <h2>{name}</h2>
      <h3>{address}</h3>
      <img src={image} alt={name} />
      <p>{style}</p>
    </div>
  );
};

export default RestaurantProfile;