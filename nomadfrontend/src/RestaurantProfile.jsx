import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import NewReview from './NewReview';

const RestaurantProfile = ({ user }) => {
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
        console.error(err);
      }
    };
    getRestaurant();
  }, [id]);

  if (!restaurant) {
    return <div className="animate-pulse mt-90 ml-48 h-5 w-5 mr-3">Loading...</div>;
  }

  const { name, address, image, style } = restaurant;

  return (
    <div>
      <div className="h-56 grid grid-cols-6 mb-8 gap-2 content-start">
        <img src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" className="mt-2 rounded-full ml-4" />
        <h1 className="text-green-600 font-serif mt-48 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
        </div>
      <NavBar />
      <div className="ml-2 mb-2 border-solid border-4 rounded-2xl border-green-800">
      <h2 className="text-3xl ml-20 mb-2 mt-4">{name}</h2>
      <h3 className="text-1xl ml-20 mb-2 italic text-slate-600">{address}</h3>
      <img src={image} className="ml-12 rounded-3xl" alt={name} />
      <p className="text-1xl ml-20 mb-2 italic text-slate-600"> Style: {style}</p>
{/* <h3>{averageScore}</h3> */}
      <div className="justify-items-end">
     <p className="ml-36 mt-4">Have you been here?</p>
      {modal ? <NewReview modal={modal} setModal={setModal} restaurant={restaurant} user={user} /> : null}
      <button onClick={() => 
        setModal(!modal)
        } className="bg-transparent rounded mb-8 px-4 border ml-32 border-green-600 w-48 mt-2 h-8 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all">Make Review</button>
        </div>
    </div>
    </div>
  );
};

export default RestaurantProfile;