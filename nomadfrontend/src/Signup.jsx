import { Form } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ setUser}) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [first_name, setFirstName] = useState("");
const [last_name, setLastName] = useState("");
const [handle, setHandle] = useState("");
const [avatar, setAvatar] = useState("");
const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        fetch('Signup', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
               email,
               password,
               password_confirmation: passwordConfirmation,
               first_name: first_name,
               last_name: last_name, 
               handle,
               avatar
            }),
        }).then((req) => {
            if (req.ok) {
                req.json()
          .then((user) => setUser(user));
          navigate('/')      
            }
        })
    }
return (
    <div>
        <div>
            <h1>Welcome new member!</h1>
            <p>Please fillout the information bellow.</p>
            <Form onSubmit={handleSubmit}>
            <lable>Email</lable>
            <input  
            type="text"
            id="email"
            email={email}onChange={(e) => setEmail(e.target.value)}
            />
            <lable>Password</lable>
            <input  
            type="text"
            id="password"
            email={password}onChange={(e) => setPassword(e.target.value)}
            />
            <lable>Confirm Password</lable>
            <input  
            type="text"
            id="passwordConfirmation"
            email={passwordConfirmation}onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <lable>First Name</lable>
            <input  
            type="text"
            id="first_name"
            email={first_name}onChange={(e) => setFirstName(e.target.value)}
            />
            <lable>Last Name</lable>
            <input  
            type="text"
            id="last_name"
            email={last_name}onChange={(e) => setLastName(e.target.value)}
            />
            <lable>Your Handle</lable>
            <input  
            type="text"
            id="handle"
            email={handle}onChange={(e) => setHandle(e.target.value)}
            />
            <lable>Your Avatar</lable>
            <input  
            type="text"
            id="avatar"
            email={avatar}onChange={(e) => setAvatar(e.target.value)}
            />
            <button type="submit">Sign Up!</button>
            </Form>
        </div>
    </div>
    );
}
export default Signup