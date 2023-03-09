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
        <div className="h-10 grid grid-cols-3 gap-4 content-evenly mt-4 mb-2">
        <img className=" mt-12 ml-8 h-24 w-28 rounded-xl" src="https://images.vexels.com/media/users/3/179999/raw/e57089477c9df34303522ad8a83849d3-pineapple-illustration-design.jpg" alt="pine-avatar"/>
        <h1 className="text-center mt-14 font-serif text-xl">@{review.user.handle}</h1>
        <div className="border-solid ml-64 bg-green-200 w-28 border-2 rounded-2xl mt-14 border-green-800">
        <h2 className="mt-8 ml-4 text-lg">Score : {score}</h2>
        </div>
        </div>
        <p className="text-center text-2xl">{review.user.first_name} ranked {review.restaurant.name}</p>
        <p className="text-center italic text-zinc-400">{review.restaurant.address}</p>
        <p className="text-center">{comments}</p>
        <p className="ml-72 italic mt-2">{likes} likes</p>
        <div className="h-10 grid grid-cols-3 gap-4 content-evenly mt-4 mb-2">
        <button className="ml-60 w-36 h-10 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all"onClick={handleLike}>like</button>
        <button className="ml-60 w-36 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all">comment</button>
        <button className="ml-60 w-36 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all">add review</button>
        </div>
    </div>
    )
}
export default ReviewPosts;