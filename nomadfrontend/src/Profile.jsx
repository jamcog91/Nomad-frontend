import { useState, useEffect } from 'react';
import NavBar from './NavBar';
// import { useParams } from 'react-router-dom';

const RestaurantProfile = ({user}) => {
  //   const [user, setUser] = useState(null);
  //   // const { id } = useParams();

  // useEffect(() => {
  //   const setUser = async () => {
  //     try {
  //       const req = await fetch("/me");
  //       const res = await req.json();
  //       setUser(res);
  //     } catch (err) {
  //       // console.error(err);
  //     }
  //   };
  //   setUser();
  // }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  // const { first_name, last_name, handle, avatar } = user;

  return (
    <div>
      <div className="h-56 grid grid-cols-6 mb-8 gap-2 content-start">
        <img src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" className="mt-2 rounded-full ml-4" />
        <h1 className="text-green-600 font-serif mt-48 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
        </div>
      <NavBar />
      <img src={user.avatar} alt="avatar" />
      <h2>{user.handle}</h2>
      <h3>{user.first_name} {user.last_name}</h3>
    </div>
  );
};

export default RestaurantProfile;