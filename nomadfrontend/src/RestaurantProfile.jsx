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

const RestaurantProfile = ({ reviews }) => {
    const [restaurant, setRestaurant] = useState(null);
    const [averageScore, setAverageScore] = useState(null);
    const { id } = useParams();
  
  //   useEffect(() => {
  //   const getReview = async () => {
  //     try {
  //       const req = await fetch(`/reviews/${id}`);
  //       const res = await req.json();
  //       setReview(res);
  //     } catch (err) {
  //       // console.error(err);
  //     }
  //   };
  //   getReview();
  // }, [id]);
  useEffect(() => {
    console.log(reviews)
  let totalScore = 0;
  const reviewKeys = Object.keys(reviews);
  for (let i = 0; i < reviewKeys.length; i++) {
    totalScore += reviews[reviewKeys[i]].score;
  }
  const avgScore = totalScore / reviewKeys.length;
  setAverageScore(avgScore);
}, [reviews]);

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
      <h3>{averageScore}</h3>
      <p>{style}</p>
      <p>Have you been here?</p>
      <button>Make Review</button>
    </div>
  );
};

export default RestaurantProfile;