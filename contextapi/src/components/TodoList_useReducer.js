import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext_useReducer } from '../contexts/TodoListContext_useReducer';

const TodoList_useReducer = () => {
  const { todos, addTodo, removeTodo } = useContext(
    TodoListContext_useReducer
  );
  console.log('TodoListD todos ', todos, addTodo);

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
    addTodo(todo);
  };

  const handleRemoveTodo = e => {
    const id = e.target.id;
    removeTodo(id);
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
