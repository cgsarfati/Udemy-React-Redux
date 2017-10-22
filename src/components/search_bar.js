import React, { Component } from 'react';

// Create new component
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        // event.target.value gets user input value
        return <input onChange={event => console.log(event.target.value) } />;
    }
}

// allows you to export code snippet above to other files
export default SearchBar;