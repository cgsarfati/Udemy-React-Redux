// react = used to render create/make components
// reactDOM = used to put components to DOM

// JSX = dialect of JS that allows us to write html in JS code
// JSX gets transpiled 

// TIP: self-closing tag: <App /> vs. <App> </App>

// ReactDOM.render(App) not valid because App is a CLASS, not an INSTANCE
// To make classes into instances, wrap it in JSX tag --> <App />

// parameters for .render: (component, place in DOM to put it)

// OLD JS: 
// const App = function() {
    // return <div>Hi!</div>;
// }

import React from 'react';
import ReactDOM from 'react-dom';

// Create new component
// ES6 syntax: Drop fn keyword, add arrow =>; diff. way to declare fn.
const App = () => {
    return <div>Hi!</div>;
}

// Take component and put it on DOM
ReactDOM.render(<App />, document.querySelector('.container'));