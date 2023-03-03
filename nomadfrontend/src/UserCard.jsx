import { useNavigate } from 'react-router-dom'

const UserCard = ({ user }) =>{
const { first_name, handle, avatar} = user;
const navigate = useNavigate()

    return (
        <>
            <li className="user-card" key={user.id}>
                <img src={avatar} alt={"avatar"} placeholder={"https://ih1.redbubble.net/image.1364482423.8272/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} />
                <h2>{handle}</h2>
                <p>{first_name}</p>
                <p>go to</p>
                <button onClick={() => navigate(`/UserProfile/${user.id}`)}>{user.handle}'s profile</button>

            </li>
        </>
    )
}
export default UserCard;