import React from 'react';
import ReactDOM from 'react-dom';

// when we export our own file, need relative path.
import SearchBar from './components/search_bar';

// Youtube API
const API_KEY = 'AIzaSyDJtQDGtubORdaQYym2cH6XzBUOgI_MZQA';

// Create new component
const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
}

// Put component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));