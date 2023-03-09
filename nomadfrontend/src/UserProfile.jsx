import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

const RestaurantProfile = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const req = await fetch(`/users/${id}`);
        const res = await req.json();
        setUser(res);
      } catch (err) {
        // console.error(err);
      }
    };
    getUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { first_name, handle, avatar } = user;

  return (
    <div>
      <div className="h-56 grid grid-cols-6 mb-8 gap-2 content-start">
        <img src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" className="mt-2 rounded-full ml-4" />
        <h1 className="text-green-600 font-serif mt-48 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
      </div>
      <NavBar />
      <img src={avatar} alt="avatar" className="ml-16 rounded-full p-1 ring-2 ring-green-700"/>
      <h2 className="text-3xl ml-12 mb-4 mt-4">{handle}</h2>
      <h3 className="text-2xl ml-24 mb-10 ">"{first_name}"</h3>
    </div>
  );
};

export default RestaurantProfile;