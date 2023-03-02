// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import ReviewPosts from './ReviewPosts';
import NavBar from './NavBar';
// import Profile from './Profile'
function Home({reviews, setReviews, users, setUsers}) {
// const {id, score, likes, comments, restaurant_id, user_id} = reviews
// const navigate = useNavigate()
    return(
    <>
        {/* <img /> */}
        <h1>Nomad</h1>
            <NavBar />
            <div>Welcome</div>
                <div className="review-card"> 
                    { reviews.map((review) => {
                    return <ReviewPosts key={review.id} setReviews={setReviews} review={review} user = {users} setUsers = {setUsers} />})}         
                </div>
                {/* <div>
                    { users.map((user) => {
                    return <Profile key={user.id} setUser={setUsers} user={users} /> })}
                </div> */}
    </>
    )
}
export default Home