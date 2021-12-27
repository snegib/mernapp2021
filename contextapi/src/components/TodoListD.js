/* STEP 1 [useContext] 
NOTE: not done any code change just for information.
so for now, we have two context, one is 'AuthContext and second is 'ThemeContext'. so we are going to start to consume context using React hooks. And we consume these in different components in 'Navbar' as well as in the 'TodoList' component. and to show you how And to show you how to use hooks and context together, I'm going to refactor these components with new react functional components, and then we'll be able to see the usage of both contexts on the same pattern.
And of course, we're going to see which usage of the context is cleaner and more readable. OK, so let's do that. For this we will create a Duplicate file with the same name, just will add CAPITAL LETTER 'D' at the end of the file NAME. for example 'TodoList.js' to 'TodoListD.js' */

import React, { useContext } from 'react'; /* STEP 2 [useContext]  
import useContext */
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';

/* STEP 5 [useContext]  
convert to functional component*/
const TodoListD = () => {
  /* STEP 6 [useContext]  
  NOTE: this is for below commented line where we have written code 'useContext(ThemeContext)' 
    All I'm going to do is come down here and I'll say 'useContext()' and then pass in the context that we want to use inside this component. So we want to use 'ThemeContext' inside this component.And we imported that on the top 'import { ThemeContext } from '../contexts/ThemeContext';'. so copy and paste it here. useContext(ThemeContext). OK, so we are saying here that we want to use this context.And this is going to provide us with that context object with all of these different properties in it.*/

  // useContext(ThemeContext)

  const { todos } = useContext(TodoListContext);
  console.log('TodoListD todos ', todos);
  /* STEP 7 [useContext]  
   now restructuring different properties from the context object */
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  /* STEP 8 [useContext]   
    now you can add condition here*/
  const theme = isDarkTheme ? darkTheme : lightTheme;
  console.log(
    'ThemeContext context in TodoListD render ',
    useContext(ThemeContext)
  );
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: '140px',
        textAlign: 'center',
      }}
    >
      {todos.length ? (
        todos.map(todo => {
          return (
            <p key={todo.id} className="item">
              {todo.text}
            </p>
          );
        })
      ) : (
        <div> you don't have todos </div>
      )}{' '}
      <button className="ui button primary" onClick={changeTheme}>
        change the theme
      </button>
    </div>
  );
};

/* STEP 4 [useContext]  
for using useContext hook, first of all we need to convert class component to functional component so we can comment all previous class code */

/* class TodoList extends React.Component {
  static contextType = ThemeContext; */ /* STEP 3 [useContext]  
  can't use this in functional component so will use useContext hook */
/* render() {
    console.log('context in TodoList render ', this.context);

    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: '140px',
          textAlign: 'center',
        }}
      >
        <p className="item">Overview</p>
        <p className="item">Contact</p>
        <p className="item">Support</p>
        <button className="ui button primary" onClick={changeTheme}>
          change the theme
        </button>
      </div>
    );
  }
} */

export default TodoListD;
