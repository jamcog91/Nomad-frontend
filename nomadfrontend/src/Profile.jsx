import { useEffect, useState } from 'react';
// import ReviewPost from './ReviewPost'
import NavBar from './NavBar'
function Profile({ users, setUser }) {
// const {first_name, last_name, handle, } = users
// const [reviews, setReviews] = useState([])
const [me, setMe] = useState([])
    // useEffect(() => {
    //     fetch('/personal')
    //     .then((req) => req.json())
    //     .then(setReviews)
    // }, []);

    useEffect(() => {
        fetch('/me')
        .then((req) => req.json)
        .then()
    },[])
    console.log(users)

    // const ProfilePage = users.map((user) => (
    //     <ProfilePage 
    //     key={user.id}
    //     user={user}
    //     />
    //)) 
    return (
    <div>
        <h1>"@Nomad"</h1>
        <p>User profile</p>
        <NavBar />
        <p></p>
        <p></p>
    </div>

    )
}
export default Profile
