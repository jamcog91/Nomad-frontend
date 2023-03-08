import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import NewReview from './NewReview';

const RestaurantProfile = ({ reviews }) => {
    const [restaurant, setRestaurant] = useState(null);
    // const [averageScore, setAverageScore] = useState(null);
    const [modal, setModal] = useState(false);
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
{/* <h3>{averageScore}</h3> */}
      <p>{style}</p>
      <p>Have you been here?</p>
      {modal ? <NewReview modal={modal} setModal={setModal} /> : null}
      <button onClick={() => setModal(!modal)}>Make Review</button>
    </div>
  );
};

export default RestaurantProfile;