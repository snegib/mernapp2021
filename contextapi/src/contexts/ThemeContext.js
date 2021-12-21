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
class ThemeContextProvider extends React.cloneElement {
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
      <ThemeContext.Provider></ThemeContext.Provider>
    );
  }
}

/* STEP 6 */
export default ThemeContextProvider;
