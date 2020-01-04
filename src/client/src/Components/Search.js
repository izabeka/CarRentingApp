import React from 'react';

class Search extends React.Component {
    render() {
        return(
        <form className='search-section'>
            <h3>THE BEST CHOICE</h3>
            <label>Brand:</label><input type='text'/>
            <label>Model:</label><input type='text'/>
            <label>Age:</label><input type='number'/>
            <label>Motor:</label><input type='text'/>
            <input type='submit' value='Search'/>
        </form>
    )}
}

export default Search;