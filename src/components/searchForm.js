import React from 'react';


const SearchForm = ({handleSearch,value,handleChange}) => {
    return(
        <form onSubmit={handleSearch} style={{margin:'20px auto'}}>
            <input type="text" id="searchTerm" value={value} onChange={handleChange} />
            <button>Search</button>
        </form>
    )
}

export default SearchForm;