

function SearchRestaurant({ searchTerm, onSearchChange }) {

    return (
        <div className="searchBar">
           <lable>Search Restaurants : </lable>
           <input
           type="text"
           id="search"
           placeholder="find your restaurant here..."
           value={searchTerm}
           onChange={(e) => onSearchChange(e.target.value)}
           />
        </div>
    )
}
export default SearchRestaurant;