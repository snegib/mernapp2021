import React, { createContext, useState } from 'react';

export const TodoListContext_useReducer = createContext();

const TodoListContext_useReducerProvider = ({ children }) => {
  console.log('TodoListContext ', children);
  const [todos, setTodos] = useState([
    { text: 'Plan the family trip', id: 1 },
    { text: 'Go shopping for dinner', id: 2 },
    { text: 'Go for a walk', id: 3 },
  ]);

  const addTodo = todo => {
    setTodos([...todos, { text: todo, id: Math.random() }]);
  };

  const removeTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== Number(id);
      })
    );
  };
  return (
    <TodoListContext_useReducer.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoListContext_useReducer.Provider>
  );
};

export default TodoListContext_useReducerProvider;
