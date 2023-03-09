import { useNavigate } from 'react-router-dom'

const UserCard = ({ user }) =>{
const { first_name, handle, avatar} = user;
const navigate = useNavigate()

    return (
        <>
        <div className="ml-10 mb-2 border-solid border-2 rounded-2xl border-green-800">
            <li className="user-card" key={user.id}>
                <img src={avatar} alt={"avatar"}className="ml-10 mt-4 rounded-full p-1 ring-2 ring-green-700" placeholder={"https://ih1.redbubble.net/image.1364482423.8272/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} />
                <h2 className="text-xl ml-16 mb-4 mt-4">{handle}</h2>
                <p className="text-lg ml-24 mb-10 ">"{first_name}"</p>
                <p className="ml-56 text-lg">go to</p>
                <button onClick={() => navigate(`/UserProfile/${user.id}`)} className="bg-transparent rounded mb-4 px-4 border ml-56 border-green-600 w-48 mt-2 h-8 hover:bg-lime-800 hover:text-white rounded-3x1 hover:rounded-xl transition-all">{user.handle}'s profile</button>
            </li>
        </div>
        </>
    )
}
export default UserCard;