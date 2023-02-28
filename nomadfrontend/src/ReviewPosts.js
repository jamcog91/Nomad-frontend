// import { createBrowserRouter, browserRouter } from 'react-router-browser'
// import { useNavigate } from "react-router-dom";
function ReviewPosts({review, setReviews, users}) {
const {id, score, likes, comments, restaurant_id, user_id} = review
// const ReviewPost = ({reviews, setReviews}) => {

    // const navigate = useNavigate()
    // const openProfile = () => {
    //     navigate('/profilePage/${user.id}')
        
    // }
// }

return(

    <div className="review-card">
        <img src={review.avatar} />
        <h1>{review.handle}</h1>
        <p>{review.user_id.first_name} ranked {review.restaurant_id}</p>
        <h2>{review.score}</h2>
        <p>{review.likes}</p>
        <button>like</button>
        <button>comment</button>
        <button>add review</button>
    </div>
    )
}
export default ReviewPosts;