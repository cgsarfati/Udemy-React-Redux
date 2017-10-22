/////////////  PART 1 //////////////

// Webpack/Babel gets all React components (aka 'views') which are 
// snippets of JS code that produce html, and puts it in bundle.js 

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

// STATE: plain JS object used to record and react to user events. 
// each class-based component (NOT functional comp.) has its own state object.
// whenever state changed, component immediately re-renders +
// forces all its children to re-render too.

// Recap: state is plain JS object that exists in a class-based component.
// each instance of a class-based component has its own copy of state.
// We initialize state by having constructor method + setting state as "this.state"

// Constructor method: used to do set-up for class (like __init__);
// super(props) --> using parent class method fro component
// everytime user types in search bar, this.state.term gets updated w/ value

// BIG TAKE-AWAY: we can only manipulate state inside the constructor method!!!!

// to reference JS var, wrap it in {} inside JSX.

// CONTROLLED COMPONENT: has its value set by state so its value only 
// changes when the state changes.

// ORDER OF OPERATIONS SO FAR:
    // Index.js. App starts. Renders instance of <SearchBar>
    // in search_bar.js, constructor called. this.state set to empty str.
    // Component renders. Value of input set to retrieve value from this.state.term
    // When user enters text, state updated. this.state.term set equal to changed value.
    // Here, when event handler runs, value of input has NOT ACTUALLY CHANGED. 
    // When .setState called, component immediately RE-RENDERS
    // When render fn called again, value of the input is updated to receive the new value
    // Component finishes rendering, now new value of input visible on screen



