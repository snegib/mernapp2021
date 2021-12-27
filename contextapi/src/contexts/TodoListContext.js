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

  /*  STEP 1 [About removeTodo function] 
  set function here. we are going to use filter method.
  So what the filter method does is cycle through the 'todos' array, and it performs a callback function on each item in the array. Then if that item matches a certain condition, then it will keep the item in the array. If it doesn't, it will remove it and it'll return a new array. So let's pass in an arrow of function and inside this function. We'll get a parameter which is the individual 'todo' that we're currently iterating. And inside here, we're going to return true or false. We're going to return true to keep the item in the array and false to filter it out. So we want to return 'todo' that ID., which is the idea that 'todo' that, we're currently iterating. And we want to see if that is not equal to the ID,  that we pass in. Now this ID, have to be string as we see it in here, but it ought to be a no because we're generating new IDs as random numbers, right? So let's turn it into a number. So if these are not equal, if the ID, we pass in is not equal to the current ID., then we're going to return true. And we keep that in array. So if this is equal to this idea (todo.id !== Number(id);), then this is going to return false and it will remove it from the array. So again, if we're going to find this ID, in this array, we're going to filtered out from the array and set this state with the new filtered array. All right, so we have done this function. Now we need to pass this function into this value product. then got to 'TodoListD.js' */
  const removeTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== Number(id);
      })
    );
  };
  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
