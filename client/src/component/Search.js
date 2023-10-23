import React, {useState} from "react";

function Search() {
    const [searchInput, setSearchInput] = useState(""); // search input
    const handleSearch = (event) => {
        // TODO
    }
    return (
        <div className="search-box">
            <label></label>
            <input type="text" size="60" value={searchInput}
                   onChange={(event) => setSearchInput(event.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;