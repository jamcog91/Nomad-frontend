import { useEffect, useState } from 'react';
// import ReviewPost from './ReviewPost'

function Profile({ users }) {
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
        .then(setMe)
    },[])
    console.log(me)

    const ProfilePage = users.map((user) => (
        <ProfilePage 
        key={user.id}
        user={user}
        />
    )) 
    return (
    <div>
        <h1>{users.handle}</h1>
        <p>{me.first_name} {me.last_name}</p>
        <p></p>
    </div>

    )
}
export default Profile