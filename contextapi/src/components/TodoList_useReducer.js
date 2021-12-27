import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext_useReducer } from '../contexts/TodoListContext_useReducer';

const TodoList_useReducer = () => {
  /* STEP 5 [useReducer hook use]  
  Now, we get the dispatch here, this dispatch function is going to dispatch in action, and that action will be the object. OK, so when we want to add a new to do, instead of using this ad to do function, we're going to use dispatch.*/
  const { todos, dispatch } = useContext(
    TodoListContext_useReducer
  );
  console.log('TodoListD todos ', todos, dispatch);

  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);

  const theme = isDarkTheme ? darkTheme : lightTheme;
  const [todo, setTodo] = useState('');
  console.log(
    'ThemeContext context in TodoListD render ',
    useContext(ThemeContext)
  );

  const handleChange = e => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    /* STEP 6 [useReducer hook use]  
    OK, so when we want to add a new 'todo', instead of using this 'addTodo(todo);' function, we're going to use dispatch. 
    Then in here, we just need to pass an action that we want to dispatch, and that action is going to have a type. And in this case, we want to 'ADD_TODO'. And then we also need to pass a payload that is going to be the to do that, we want to be add. So I'm going to say 'text'. And the 'text' will be this to do state. And this is what we type in the input field. OK, so this is going to be the payload. So we've got the dispatch method from the context, and we're using that to add todo.*/


    // addTodo(todo);
    dispatch({type: 'ADD_TODO', text: todo })
  };

  const handleRemoveTodo = e => {
    const id = e.target.id;

    /* STEP 7 [useReducer hook use]   */

    // removeTodo(id);
    dispatch({type: 'REMOVE_TODO', id})
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
            <p
              id={todo.id}
              onClick={handleRemoveTodo}
              key={todo.id}
              className="item"
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div> you don't have todos </div>
      )}

      <form onSubmit={handleFormSubmit}>
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

export default TodoList_useReducer;
