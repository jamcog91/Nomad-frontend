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
      <h1>@Nomad</h1>
      <NavBar />
      <h2>{handle}</h2>
      <h3>{first_name}</h3>
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default RestaurantProfile;