/*  STEP 2
This is where we're going to create our theme in context. import 'createContext', this function will create context for us */
import React, { createContext } from 'react';

/* STEP 3
export  'createContext'
So this is going to create a context for us, and it's going to be stored in this constant(const) theme context.*/
export const ThemeContext = createContext(); /*STEP 7 
Above code
NOTE: "this STEP is just for Theory, not done any code here"
So when we create a context, we have to also create a provider, which is basically a tag that surrounds  whichever components(Navbar, TodoList) we want to be able to use that context inside. So we should provide the data to these components (Navbar, TodoList). */
/* STEP 9
Above code
NOTE: "this STEP is just for Theory, not done any code here"
So whenever we create a context like this, we're going to give this thing the Provider on that context.
 <ThemeContext.Provider></ThemeContext.Provider>
And this is, well, ultimately the thing that's going to wrap our different component so that the data
can be used inside of these specific components. */

/* STEP 4
Below Code
Now, we are going to define data for this context, and provided that data to the different
components.
For this we are going to create another component, which will be a class component.
And then inside that component, we're going to have some states and that state will be the data that
we want to share between the different components.
 */
class ThemeContextProvider extends React.Component {
  /* STEP 5
    inside here, this is where we want to state.
And this is going to be shared data that we want to supply to the different component. 
So we have our state now, and this is the data that we want to provide to two(Navbar, TodoList) different components
and share between them.
*/
  state = {
    isDarkTheme: true,
    lightTheme: {
      text: '#222',
      background: '#d8ddf1',
    },
    darkTheme: {
      text: '#fff',
      background: '#5c5c5c',
    },
  };
  render() {
    return (
      /* STEP 8
        So in our theme and context file, what we need to do is return a bit of GSX a template which is going to contain that theme context. And we'll call it provider tag.Provider is provided by the context itself.So untidy here we'll do a tag called 'ThemeContext.Provider' like so.*/
      //   <ThemeContext.Provider></ThemeContext.Provider>
      /* STEP 10 
    So on the Provider tag <ThemeContext.Provider>, we also need to specify a value property, and this value property is going to take whatever data we want it to because it's going to be provided to the components that is in this wrap.
    {...this.state} this spread operator takes all of the different properties inside the state. And that way, it will spread them out into the new object that we will provide inside this value props. OK, so this is a data that's going to be provided to the different components that is context provider tag wraps.
    So we want this context provided to wrap these components 'Navbar' and 'TodoList'. So let's first use the context data inside these components. So that means I'm going to save this and import the theme context provider into App.js. And then surround these components.*/
      <ThemeContext.Provider value={{ ...this.state }}>
        {/* STEP 13 
          it wraps two children 'Navbar' and 'TodoList' 
          And then this context provider tag (<ThemeContext.Provide>) provides all the data inside this value props to its children, and that makes the children. These two things.
          That's all. now you can check on browser, react component addon. you can see context and props there*/}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

/* STEP 6 */
export default ThemeContextProvider;
