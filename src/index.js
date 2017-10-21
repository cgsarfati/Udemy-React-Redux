// react = used to render create/make components
// reactDOM = used to put components to DOM

// JSX = dialect of JS that allows us to write html in JS code
// JSX gets transpiled 

// TIP: self-closing tag: <App /> vs. <App> </App>

// ReactDOM.render(App) not valid because App is a CLASS, not an INSTANCE
// To make classes into instances, wrap it in JSX tag --> <App />

// parameters for .render: (component, place in DOM to put it)

// RULE: ONE COMPONENT PER FILE!

// OLD JS: 
// const App = function() {
    // return <div>Hi!</div>;
// }

// ES6 syntax: Drop fn keyword, add arrow =>; diff. way to declare fn.

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