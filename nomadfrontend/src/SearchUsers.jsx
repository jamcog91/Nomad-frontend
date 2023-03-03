
function SearchUsers({ searchTerm, onSearchChange }) {

    return (
        <div className="searchBar">
           <lable>Search Users : </lable>
           <input
           type="text"
           id="search"
           placeholder="type user handle here..."
           value={searchTerm}
           onChange={(e) => onSearchChange(e.target.value)}
           />
        </div>
    )
}
export default SearchUsers;