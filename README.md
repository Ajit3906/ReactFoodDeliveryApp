Follow below steps to clone and run this app:
1. Clone this FoodOrderApp folder in your machine.
2. Open this FoodOrderApp in terminal and run "yarn install" command to install all the requirred dependencies
3. Run "yarn start" command to run this project in your local playpen

**NPM**
```jsx
npm init
```
package.json file is added in project.

Helps to manage dependencies, version control and custom scripts like start, test.

```jsx
npm install -D parcel
```

Parcel is a bundler. D is for dev dependencies

creates package-lock.json file

package-lock.json as all the dependencies with exact version number.

package.json has version with ^ or ~

^ upgrades to minor version

~ upgrades to major version as well

creates node modules folder with all the dependencies, projects in it.
https://www.notion.so/React-5ee0d3899d6941698a9ba0f6fead94a5?pvs=4
## JSX

JSX is not html in javascript
JSX is Html like or XML like syntax
JSX is not valid pure javascript code. JS engine cannot understand it.
Babel transpiles, compiles JSX before it reaches to JS Engine
Babel is package inside Parcel
JSX ⇒ React.createElement⇒ JS Element ⇒ Rendered as HTML by browser
If you are writing jsx in multiple lines then wrap it inside () babel understands where jsx starts and ends
JSX makes react code more readable
### Props
Passing props to a functional component are arguments to a Javascript function
### Two types of Import/Export

1. Default import/export

```jsx
export default Component;
import Component from “path”;
```

2. Named import/export

```jsx
export const Component;
import { Component } from “path”;
```

You can use as keyword while importing same variables from different files.
### Hooks

React hook is a utility function.

1. useState

```jsx
const[ var, setVar ] = useState(initialValue);
```

- Whenever a state variable changes react will re-render the dom view
- As soon as data layer changes react re-renders UI layer
- React helps in syncing data layer and UI layer.
- Reconciliation Algorithm (React Fiber) Virtual DOM is a representation of actual DOM. Virtual DOM ia kind of javascript Object. Using Diff algorithm react finds the change in virtual dom and re-renders the view.
- Whenever state variable changes react retriggers reconciliation algorithm
- Never create state variables based on some condition, can lead to inconsistencies
 
2. useEffect - Takes two arguments first is callback function or arrow function to perform actions second is array of dependencies. If there is any change in the mentioned dependencies then this argument function is called and ui is re-rendered. 
- If no dependency array given useEffect is called on every render
- If there is empty dependency array then useEffect is called only once even if the component re-renders
- If there is some dependency then useEffect is called if there is some change in dependency and on first render
```jsx
	useEffect(() => {
	  console.log("Re-renders the react view
	    on dependency change");
	}, [dependencies]);
```
## Shimmer UI view

Instead of showing loading view UI will keep showing empty cards or view. Once data is fetched then re-render the view with actual data.

**Conditional Rendering**

Here we are Rendering shimmer view if data is not fetched from api (on some condition)

## Class Component

It is a similar to a javascript class which extends React.Component and it has render method which returns some jsx code.

- You need to pass props to super constructor inside this class constructor for initialization. Then we can access props in class using this. props
- We can write state in same class constructor using this.state like here
- To change the state use this.setState method. It changes state of keys passed to it as object.
- Refer to react lifecycle diagram to understand the class components render flow
![[ogimage.png]]
- componentDidMount() is called after all child components phase after constructors and render 
## Custom Hooks
- Create your own utility functions starting with use
- Need to write own hook using contract input, output
- Use hooks like useEffect similar to component
### Lazy Loading
- Code splitting, Chunking, On demand loading, dynamic import
- Bundler creates a single bundled js file for all components if we have too big components then we can chunk them using lazy method 
```jsx
const Grocery = lazy(() => import("./componenets/Grocery"))

<Suspense fallback=<Shimmer>>  <Grocery/>
</Suspense>
```

## CSS frameworks and libraries
1. sass, scss styles
2. Styled components
3. Bootstrap, material ui, chakra ui
4. Tailwind css

## Higher order component
- Used to enhance the existing component with additional features.
- Component transforms props into UI, a high order component transforms a component into another component.
```jsx 
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

## Lifting state up
If we want to control the child components then we can lift the state up.
Define the state in parent component and pass its setState method to childs.

## Context
If you want to save some data and avoid unnecessary prop dealing then use Context.
React Context is a way to manage and share state globally across a React application without having to pass props down manually at every level. It is useful for themes, user settings, and other data that needs to be accessible by many components.

Steps to Use React Context
1. Create Context
2. Provide Context
3. Consume Context

Example
1. Create Context:
Create a context using React.createContext.
```jsx
import React, { createContext } from 'react';
//Create a context with a default value
const MyContext = createContext('default value');
export default MyContext;```
2. Provide Context:
Wrap your component tree with a Context.Provider to provide the context value to all children.
```jsx
import React from 'react';
import MyContext from './MyContext';
const App = () => {
  const value = "Hello, World!";
  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
};
export default App;
```

3. Consume Context:
Use the useContext hook to consume the context in a functional component.
```jsx
import React, { useContext } from 'react';
import MyContext from './MyContext';
const ChildComponent = () => {
 const value = useContext(MyContext);
return (
    <div>
      <p>The context value is: {value}</p>
    </div>
  );
};
export default ChildComponent```;
