import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import NavbarD from './components/NavbarD';
import TodoListD from './components/TodoListD';
import TodoListUseReducer from './components/TodoList_useReducer';

/* STEP 11 
import ThemeContextProvider*/
import ThemeContextProvider from './contexts/ThemeContext';
/* STEP 27
 import AuthContextProvider */
import AuthContextProvider from './contexts/AuthContext';
import AuthContextProviderD from './contexts/AuthContextD';

import TodoListContextProvider from './contexts/TodoListContext';
import TodoListContext_useReducerProvider from './contexts/TodoListContext_useReducer';
const App = () => {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <div
          style={{
            background: 'cyan',
            padding: '20px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              background: 'brown',
              padding: '20px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'yellow',
            }}
          >
            Context API example
          </h2>
          {/* STEP 28
        call other context provider 'AuthContextProvider' and wrap previous provider  'ThemeContextProvider' with it.
         */}
          <AuthContextProvider>
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
          </AuthContextProvider>
        </div>
        <div
          style={{
            background: 'green',
            padding: '20px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              background: 'brown',
              padding: '20px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'yellow',
            }}
          >
            New with 'useContext' and 'useState' hooks
          </h2>
          <AuthContextProviderD>
            <TodoListContextProvider>
              <ThemeContextProvider>
                <NavbarD />
                <TodoListD />
              </ThemeContextProvider>
            </TodoListContextProvider>
          </AuthContextProviderD>
        </div>
        <div
          style={{
            background: 'yellow',
            padding: '20px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              background: 'brown',
              padding: '20px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'yellow',
            }}
          >
            New with 'useReducer' hook
          </h2>
          <AuthContextProviderD>
            <TodoListContext_useReducerProvider>
              <ThemeContextProvider>
                <NavbarD />
                <TodoListUseReducer />
              </ThemeContextProvider>
            </TodoListContext_useReducerProvider>
          </AuthContextProviderD>
        </div>
      </div>
    </div>
  );
};

export default App;

/* STEP 1 [NOTE TOTAL STEP IS 28]
we have 'Navbar' and 'TodoList' in place and now we want change color theme. so in this project we are going to create a theme context. for this, we already created a 'contexts' folder inside 'src'. So now I can create a new file, inside 'contexts' folder and name it 'ThemeContext.js' as our context is going to be related to theme.
 */
