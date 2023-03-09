import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom'

function Login({ user, setUser }) {
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
            req.json().then((user) => setUser(user));
            console.log(user)
            navigate('/Home')
        }
        // else setUser()
})
}
return (
    <div className="grid place-items-center h-screen">
     <div className="text-center">
        <img className="mx-auto w-48 mt-2 rounded-full ml-8"
        src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" />
        <h1 className="text-green-600 font-serif mt-4 mb-4 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
        <Form onSubmit={handleSubmit}>
            <p className="text-3xl mb-4">Login</p>
            <p className="text-center text-lg mb-2">Enter User Name and password :</p>
            <input
                type="text"
                placeholder="Username"
                className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input 
                type="text"
                className="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-transparent rounded px-4 border border-green-600 w-32 mt-6 h-8 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all" >Login</button>
            <p className="text-center text-lg mt-4 mb-2">Don't have an account?</p>
            <button type="button" onClick={handleOnClick} className="bg-transparent rounded px-4 border border-green-600 w-32 mt-2 h-8 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all" >Sign up</button>
        </Form>
        </div>
    </div>
    );
}
export default Login