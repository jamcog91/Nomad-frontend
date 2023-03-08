// import { createBrowserRouter, browserRouter } from 'react-router-browser'
// import { useNavigate } from "react-router-dom";
// import { useState } from 'react'
function ReviewPosts({ review, setReview }) {
// const [review, setReview] = useState([])
    const { id, score, likes, comments } = review

// const navigate = useNavigate()
    function handleLike() {
        fetch(`/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                likes: review.likes + 1
            }),
        })
        .then(response => response.json())
        .then(updateReview => {
            setReview(updateReview);
        // Update relevant DOM elements with the new number of likes
    })
}

return(

    <div className="ml-10 mb-2 border-solid border-2 rounded-2xl border-green-800">
        {/* <img src={review.user.avatar} /> */}
        <h1 className="ml-32">{review.user.handle}</h1>
        <p className="m-8">{review.user.first_name} ranked {review.restaurant.name}</p>
        <p>{review.restaurant.address}</p>
        <p>{comments}</p>
        <h2>Score : {score}</h2>
        <p>{likes} likes</p>
        <button onClick={handleLike}>like</button>
        <button>comment</button>
        <button>add review</button>
    </div>
    )
}
export default ReviewPosts;