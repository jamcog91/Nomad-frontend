import { useState, useEffect } from 'react';
import NavBar from './NavBar';
// import { useParams } from 'react-router-dom';

const RestaurantProfile = () => {
    const [me, setMe] = useState(null);
    // const { id } = useParams();

  useEffect(() => {
    const getMe = async () => {
      try {
        const req = await fetch("/me");
        const res = await req.json();
        setMe(res);
      } catch (err) {
        // console.error(err);
      }
    };
    getMe();
  }, []);

  if (!me) {
    return <div>Loading...</div>;
  }

  const { first_name, last_name, handle, avatar } = me;

  return (
    <div>
      <h1>@Nomad</h1>
      <NavBar />
      <img src={avatar} alt="avatar" />
      <h2>{handle}</h2>
      <h3>{first_name} {last_name}</h3>
    </div>
  );
};

export default RestaurantProfile;