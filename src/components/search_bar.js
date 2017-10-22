import React, { Component } from 'react';

// Create new component
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        // event.target.value is user input value
        // this.setState updates this.state from constructor
      return (
          <div> 
            <input 
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
          </div>
      );
    }
}

// allows you to export code snippet above to other files
export default SearchBar;