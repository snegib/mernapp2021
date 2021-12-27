import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  console.log('TodoListContext ', children);
  const [todos, setTodos] = useState([
    { text: 'Plan the family trip', id: 1 },
    { text: 'Go shopping for dinner', id: 2 },
    { text: 'Go for a walk', id: 3 },
  ]);

  /* STEP 1 [About setTodos function]
  Here we want add new todo items. for this create a function and set new todos */
  const addTodo = todo => {
    /* STEP 2 [About setTodos function]
    'todo' is param to get from user and update it in new list */
    setTodos([
      ...todos,
      { text: todo, id: Math.random() },
    ]); /* STEP 3 [About setTodos function]
    this is completely new array, ...todos is existing list which is copying in new array and after that making same new structure data for new items. after that passing 'addTodo' function in  <TodoListContext.Provider> value props. now go to parent component 'TodoListD.js'*/
  };
  return (
    <TodoListContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
