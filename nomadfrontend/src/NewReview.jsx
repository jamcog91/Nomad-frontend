import { useState } from 'react';
import { Form } from 'react';

function NewReview() {
   const [rating, setRating] = useState(0);
   
   const handleRating = (value) => {
    setRating(value);
   }
function handleSubmit() {
    e.preventDefault();
    fetch("/new_review", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"score": rating})
    })
        .then((req) => {
            req.json()
            .then((res) => setRating(rating));
            console.log(res)
    })}
    return (

        <form onSubmit= {() => handleSubmit}>
            <button onClick={() => handleRating(7)}>I liked it!</button>
            <button onClick={() => handleRating(5)}>It was ok.</button>
            <button onClick={() => handleRating(3)}>I didnt't like it.</button>
        </form>

    )
}
export default NewReview;