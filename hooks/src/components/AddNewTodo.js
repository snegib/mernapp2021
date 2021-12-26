/* STEP 7
create new AddNewTodo  */
import React, { useState } from 'react';

const AddNewTodo = ({addTodo}) => { /*  STEP 11  destructure props  */
  const [todos, setTodos] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todos); /* STEP 11 update 'todos' list with callback function */
    console.log('AddNewTodo ', todos);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">To do</label>
      <input
        type="text"
        id="todo"
        value={todos}
        onChange={e => {
          setTodos(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

export default AddNewTodo;
