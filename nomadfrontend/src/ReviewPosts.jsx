// import { createBrowserRouter, browserRouter } from 'react-router-browser'
// import { useNavigate } from "react-router-dom";
function ReviewPosts({review,}) {
// const ReviewPost = ({reviews, setReviews}) => {

    // const navigate = useNavigate()
    // const openProfile = () => {
    //     navigate('/profilePage/${user.id}')
        
    // }
// }

return(

    <div className="review-card">
        {/* <img src={review.user.avatar} /> */}
        <h1>{review.user.handle}</h1>
        <p>{review.user.first_name} ranked {review.restaurant.name}</p>
        <p>{review.restaurant.address}</p>
        <h2>Score : {review.score}</h2>
        <p>{review.likes} likes</p>
        <button>like</button>
        <button>comment</button>
        <button>add review</button>
    </div>
    )
}
export default ReviewPosts;