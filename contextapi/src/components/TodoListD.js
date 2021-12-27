/* STEP 1 [useContext] 
NOTE: not done any code change just for information.
so for now, we have two context, one is 'AuthContext and second is 'ThemeContext'. so we are going to start to consume context using React hooks. And we consume these in different components in 'Navbar' as well as in the 'TodoList' component. and to show you how And to show you how to use hooks and context together, I'm going to refactor these components with new react functional components, and then we'll be able to see the usage of both contexts on the same pattern.
And of course, we're going to see which usage of the context is cleaner and more readable. OK, so let's do that. For this we will create a Duplicate file with the same name, just will add CAPITAL LETTER 'D' at the end of the file NAME. for example 'TodoList.js' to 'TodoListD.js' */

import React, { useContext, useState } from 'react'; /* STEP 2 [useContext]  
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

  const { todos, addTodo } =
    useContext(TodoListContext); /* STEP 4 [About setTodos function] 
  now we deconstruct 'addTodo' function here. Now we need to pass a parameter to this 'addTodo' function, which will be the new to do that we want to add. So to do that. We're going to create an input field add  to do button. So that way, we'll be able to type a new To-Do into the input field that we're going to create and then click on add to do but. That we will also create in a minute. Now, when we do that, we're going to get the new to do that gets typed into the input field. see the form below*/
  console.log('TodoListD todos ', todos, addTodo);
  /* STEP 7 [useContext]  
   now restructuring different properties from the context object */
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  /* STEP 8 [useContext]   
    now you can add condition here*/
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const [todo, setTodo] = useState(''); /* STEP 8  [About setTodos function] 
  And now the only thing we need to do is pass this state to addTodo function. And I'm going to pass it. */
  console.log(
    'ThemeContext context in TodoListD render ',
    useContext(ThemeContext)
  );

  /*  STEP 6 [About setTodos function] 
  Lets create the handleChange function here */
  const handleChange = e => {
    /*  STEP 7 [About setTodos function] 
    OK, so let's take whatever we have typed in and pass that in to the addTodo function. To do that, first of all, we'll need to store that data in this component state. So let's create that state above*/
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  /* STEP 10 [About setTodos function]   
  and we can create a callback here*/
  const handleFormSubmit = e => {
    e.preventDefault();
    addTodo(todo)
  };
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
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
      )}
      {/* STEP 5 [About setTodos function] 
      So now what we want to do is we're going to type something into this input field (<input type="submit" value="Add new to do" className="ui primary button" />) and hit that button and then we're going to grab whatever the users typed in. And pass it as a parameter to this addTodo function.  and then we grab that user entry, I am going to add in onChange event to
      <input type="text" id="todo" onChange={handleChange} />. So whenever the user type, something in input field is onChange, event will automatically fire and this onChange event will call the 'handleChange' function.*/}
      <form onSubmit={handleFormSubmit}>
        {/*  STEP 9  [About setTodos function]  
        When this form is submitted. So I will add an onSubmit event to form. So when we submit this form, I'm going to call 'handleFormSubmit', callback.*/}
        <label htmlFor="todo">Add Todo:</label>
        <input type="text" id="todo" onChange={handleChange} />
        <input
          type="submit"
          value="Add new to do"
          className="ui primary button"
        />
      </form>
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
