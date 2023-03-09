// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import ReviewPosts from './ReviewPosts';
import NavBar from './NavBar';
// import Profile from './Profile'
function Home({reviews, setReviews, user}) {
// const {id, score, likes, comments, restaurant_id, user_id} = reviews
// const navigate = useNavigate()
// console.log(reviews)
    return(
    <>
    <div className="h-56 grid grid-cols-6 mb-8 gap-2 content-start">
        <img src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" className="mt-2 rounded-full ml-4" />
        <h1 className="text-green-600 font-serif mt-48 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
        </div>
            <div >
            <NavBar />
            </div>
            <div className="text-3xl ml-12 mb-10">Welcome {user.first_name}!</div>
                <div className="review-card"> 
                    {reviews.map((review) => {
                        // console.log(reviews)
                    return <ReviewPosts 
                        key={review.id} 
                        setReviews={setReviews}
                        review={review}
                        />})}         
                </div>
                {/* <div>
                    { users.map((user) => {
                    return <Profile key={user.id} setUser={setUsers} user={users} /> })}
                </div> */}
    </>
    )
}
export default Home