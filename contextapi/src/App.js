import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
/* STEP 11 
import ThemeContextProvider*/
import ThemeContextProvider from './contexts/ThemeContext';
const App = () => {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        {/* STEP 12 
        create a new tag called 'ThemeContextProvider'
        and now, of course, nothing much is going to be happening. 
        Now, what we need to do is up here 
        "<ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>"
        in order to use these components inside the 'ThemeContextProvider'. We want to output these two things inside the 'ThemeContext.js' component.

        So when we surround components like this 
         "<ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>"
        using another component, these components are attached, the props to this thing right here.

        So inside the 'ThemeContextProvider' component, we can access 'Navbar' and the 'TodoList' components
        */}
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </div>
    </div>
  );
};

export default App;

/* STEP 1 [NOTE TOTAL STEP IS **]
we have 'Navbar' and 'TodoList' in place and now we want change color theme. so in this project we are going to create a theme context. for this, we already created a 'contexts' folder inside 'src'. So now I can create a new file, inside 'contexts' folder and name it 'ThemeContext.js' as our context is going to be related to theme.
 */