import React, { useState } from 'react'; /* STEP 1 import useState */
import AddNewTodo from './AddNewTodo'; /* STEP 8 import AddNewTodo */

const TodoList = () => {
  /* STEP 2
This hook accepts an argument which is going to be the initial value for this piece of state that we want to use.
So now we have these three objects stored in this array as the initial value.
So this function [useState()] returns an array, and that array returns us two values, the first value (todos) is going to be the actual data, the state itself.
And the second value (setTodos) is going to be a function which we can then use to edit that state.
restructuring is this (const [todos, setTodos]), to get these two different values.
*/
  const [todos, setTodos] = useState([
    {
      text: 'Pay bill',
      id: 1,
    },
    {
      text: 'Do your home work',
      id: 2,
    },
    {
      text: 'Feed the dog',
      id: 3,
    },
  ]);

  /* STEP 4
  Edit state date example 
  inside 
  const addTodo = ()=>{
      setTodos([

      ])
  }, 
  we pass whatever value we want. So we want this data to be an array because we are mapping it in here. So we pass in an array and this is going to completely replace whatever the current value of todos is.So for that reason, we need to use the spread syntax like this. (...todos)
  */
  const addTodo = text => {
    // console.log(text);
    setTodos([
      ...todos /*  STEP 5
        And that way, we're going to get the current to dos and spread them into this array. So we're going to grab each one of these and put them into this new array */,
      { text: text, id: Math.random() } /*  STEP 6 
      and then we're going to want to add an additional to do in this new array. And that's going to be a new object*/,
    ]);
  };
  return (
    <div>
      <ul>
        {/* STEP 3 show data */}
        {todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      {/* <button onClick={addTodo}>Add a todo</button> */}
      {/* STEP 9 */}
      <AddNewTodo addTodo={addTodo} />{/* STEP 10 pass addTodo function as callback */}
    </div>
  );
};

export default TodoList;
