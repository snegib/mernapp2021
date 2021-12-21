import React from 'react';
import Navbar from './components/NavBar';
import TodoList from './components/TodoList';
const App = () => {
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
};

export default App;

/* STEP 1 [NOTE TOTAL STEP IS **]
we have 'Navbar' and 'TodoList' in place and now we want change color theme. so in this project we are going to create a theme context. for this, we already created a 'contexts' folder inside 'src'. So now I can create a new file, inside 'contexts' folder and name it 'ThemeContext.js' as our context is going to be related to theme.
 */
