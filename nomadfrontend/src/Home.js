// import { useEffect, useState } from 'react';

import ReviewPosts from './ReviewPosts';
import NavBar from './NavBar';
function Home({reviews, setReviews}) {
    return(
        <>
    <div className="NavBar" />
        {/* <img /> */}
        <h1>Welcome</h1>
            <NavBar />
            <div className="review-card"> {
            reviews.map((review) => {
                return <ReviewPosts key={review.id} setReviews={setReviews} review={review} />
            })}</div>
        </>
    )
}
export default Home