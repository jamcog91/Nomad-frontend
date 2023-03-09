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
const returnToLogin = () => navigate('/')

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/Signup', {
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
        <div className="overflow-scroll">
            <div className="grid place-items-center h-screen">
            <div className="text-center">
            <img className="mx-auto w-48 mt-2 rounded-full ml-12"
            src="https://t4.ftcdn.net/jpg/01/20/99/55/240_F_120995537_2VWZ0wfkHbpOqL8M9j8UTE7yFlVmvhxo.jpg" alt="pine-logo" />
            <h1 className="text-green-600 font-serif mt-4 mb-4 text-6xl content-baseline first-line:text-5x1">Nomad</h1>
            <p className="text-xl">Welcome new member!</p>
            <p className="text-lg">Please fillout the information bellow.</p>
            <Form onSubmit={handleSubmit}>
            <label className="text-lg">Email</label>
            <input  
            type="text"
            className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="email"
            email={email}onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-lg">Password</label>
            <input  
            type="text"
            className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="password"
            email={password}onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-lg">Confirm Password</label>
            <input  
            type="text"
            className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="passwordConfirmation"
            email={passwordConfirmation}onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <label className="text-lg">First Name</label>
            <input  
            type="text"
            className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="first_name"
            email={first_name}onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="text-lg">Last Name</label>
            <input  
            type="text"
            className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="last_name"
            email={last_name}onChange={(e) => setLastName(e.target.value)}
            />
            <label className="text-lg">Your Handle</label>
            <input  
            type="text"
            className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="handle"
            email={handle}onChange={(e) => setHandle(e.target.value)}
            />
            <label className="text-lg">Your Avatar</label>
            <input  
            type="text"
            className="peer block mb-8 min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="avatar"
            email={avatar}onChange={(e) => setAvatar(e.target.value)}
            />
            <button type="submit" className="bg-transparent rounded px-4 border border-green-600 w-32 mb-4 mt-0 h-8 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all">Sign Up!</button>
            <p className="text-xl">Already have and acount?</p>
            <button className="bg-transparent rounded px-4 border border-green-600 w-40 mt-4 mb-10 h-8 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all" onClick={returnToLogin}>Return to Login</button>
            </Form>
            </div>
            </div>
        </div>
    </div>
    );
}
export default Signup