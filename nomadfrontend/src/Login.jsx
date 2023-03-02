import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom'

function Login({ users, setUsers }) {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()
const handleOnClick = () => navigate("/Signup")
const cridentials = {email: email, password: password}

function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cridentials)
    })
        .then((req) => {
        if (req.ok) {
            req.json().then((user) => setUsers(user));
            console.log(users)
            navigate('/Home')
        }
//         else setUser()
})
}
return (
    <div>

        <Form onSubmit={handleSubmit}>
            <p>Login</p>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input 
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            <p>Don't have an account?</p>
            <button type="button" onClick={handleOnClick}>Sign up</button>
        </Form>
        </div>
    );
}
export default Login