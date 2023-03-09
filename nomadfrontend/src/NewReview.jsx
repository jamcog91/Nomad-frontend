import { useState } from 'react';
import { Form } from 'react';

function NewReview({modalOpen, setModalOpen, user, setUser, restaurant}) {
    const [rating, setRating] = useState(1);
    const [open, setOpen] = useState(false);
            console.log(user)
    // const reaviewParams = [score, likes, comments]
    // const handleRating = (rating) => {
    //     setRating(rating);
    // }
    // function newReviewRating() {
    //  e.preventDefault();
    // fetch("/new_review", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({"score": rating})
    // })
    //     .then((req) => {
    //         req.json()
    //         .then((res) => newReviewRating(res));
    //         // console.log(res)
    // })
    const newRating = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "score": rating,
            "likes": 0,
            "comments": 0,
            "user_id": user.id,
            "restaurant_id": restaurant.id })
    };
    fetch('/reviews', newRating)
        .then(response => response.json())
        .then(data => console.log(data));

    
    
    console.log(rating)
   
    return (
        <>
            <button onClick={() => setModalOpen(true)}></button>
        {modalOpen && (
            <div>
            <div>
                <Form onSubmit={newRating}>
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="0">How was your experiance?</option>
                    <option value="7">I liked it!</option>
                    <option value="5">It was ok.</option>
                    <option value="3">I didnt't like it.</option>
                    </select>
                    <button type="submit">Submit</button>
                </Form>
            <button onClick={() => setModalOpen(false)}></button>
            </div>
            </div>
        )}
    </>
        )
}
export default NewReview;