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

// 2 types of components: functional and class.
// Functional component is a fn.
// Class component has ability to be aware of itself / introspective (e.g. user input)

// define Searchbar class and give it all functionality that React.component has
// every class must have a render