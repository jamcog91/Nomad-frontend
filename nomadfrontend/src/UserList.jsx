import UserCard from "./UserCard"
// import RestaurantProfile from "./RestaurantProfile"

function UserList({ users }) {
    // {console.log(restaurants)}
     return (
        <ul className="user-list">
        {users.map((user) => {
            return <UserCard key={user.id} user={user} />
        })}
        </ul>
    )
}
export default UserList