import React, { Component } from 'react';

// Create new component
class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value) } />;
    }
}

// allows you to export code snippet above to other files
export default SearchBar;