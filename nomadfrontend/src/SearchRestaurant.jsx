

function SearchRestaurant({ searchTerm, onSearchChange }) {

    return (
        <div className="searchBar">
            <div className="flex flex-row">
           <label className="text-3xl ml-12 mb-10">Search Restaurants : </label>
           <input
           type="text"
           className="peer block ml-6 h-1/6 w-3/12 mt-1 rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
           id="search"
           placeholder="find your restaurant here..."
           value={searchTerm}
           onChange={(e) => onSearchChange(e.target.value)}
           />
           </div>
        </div>
    )
}
export default SearchRestaurant;