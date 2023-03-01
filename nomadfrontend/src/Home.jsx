// import { useEffect, useState } from 'react';

import ReviewPosts from './ReviewPosts';
import NavBar from './NavBar';
import Profile from './Profile'
function Home({reviews, setReviews, users, setUsers}) {
// const {id, score, likes, comments, restaurant_id, user_id} = reviews
    return(
        <>
    <div className="NavBar" />
        {/* <img /> */}
            <h1>Welcome</h1>
            <NavBar />
            <div className="review-card"> 
           { reviews.map((review) => {
               return <ReviewPosts key={review.id} setReviews={setReviews} review={review} user = {users} setUsers = {setUsers} />
            })}</div>
                </>
    )
}
export default Home