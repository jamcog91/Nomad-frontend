import { useState } from 'react';
import { Form } from 'react';

function NewReview({modal, setModal}) {
   const [rating, setRating] = useState(0);
//    const [open, setOpen] = useState(false);

   const handleRating = (value) => {
    setRating(value);
   }
function handleSubmit(e) {
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
            .then((res) => setRating(res));
            // console.log(res)
    })}
    handleRating()
    return (

    <Form onSubmit={handleSubmit}>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="0">How was your experiance?</option>
        <option value="7">I liked it!</option>
        <option value="5">It was ok.</option>
        <option value="3">I didnt't like it.</option>
        </select>
      <button type="submit">Submit</button>
    </Form>
        // <Form onSubmit= {() => handleSubmit}>
        //     <button onClick={() => handleRating(7)}>I liked it!</button>
        //     <button onClick={() => handleRating(5)}>It was ok.</button>
        //     <button onClick={() => handleRating(3)}>I didnt't like it.</button>
        // </Form>

    )
}
export default NewReview;