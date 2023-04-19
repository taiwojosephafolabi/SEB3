Research Activity
1. What does re-rendering mean in react?
Rendering - describes the process of generating an image.

Re-redering happens when React needs to update the app (actual DOM) with new data (due to app activity or external data from a database etc).

It compares the virtual DOM and repaints the actual DOM.


2. What is a state in react? Why do we use states in react?
A state is a built in object in React. 

A state is a dynamic variable where property values are stored for the component.

We use states in order to re-render the component.
(Update property values)


3. What is the "use state"? Why do we use "use state"?
useState is a React hook that allows you to add state to a functional component.

It holds two values: a current state and a function to update it.

The hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

Syntax:
const [state, setState] = useState(initialValue);

We can also use useStates/Hooks to re-render and update components na properites.