import {useState, useEffect} from 'React'

function Login({setUser}) {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.sringify({ email, password }),
    })
        .then((req) => {
        if (r.ok) {
            req.json().then((user) => setUser(user));
            navigate('/Home')
        }
    return (
        <form onSubmit={handleSubmit}>
            <input
                text="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
        </form>
    );
}
)}}
export default Login