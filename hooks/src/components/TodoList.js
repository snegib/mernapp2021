import React, { useState, useEffect } from 'react'; /* STEP 1 import useState */
/* STEP 1 [useEffect] import useEffect */
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

  /* STEP 3 [useEffect] */
  const [count, setCount] = useState(0);

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

  /* STEP 2 [useEffect] 
  when we use functional components, we don't have access to lifecycle methods. and if we wanted to run some code when a component updates, we normally need to use a class component, but now we can use this use effect hook instead in a functional component. 
  useEffect [useEffect()] is a function. And again, it will take in here 
   useEffect(()=>{
      
  })
a callback function as parameter. And that callback function is going to run every time the component renders or re-renders. So every time the data inside or component changes, it will also change the initial render. So you could use this use effect hook to do something like communicate with a database or an API endpoint or something like that.*/
  useEffect(() => {
    console.log('TodoList useEffect ', todos);
  }, [todos]); /* STEP 5 [useEffect] 
  So we can do that by passing a second parameter into the use effect hook. And that's how I can parameters going to be an array of data that we essentially want to watch. So we only want to run this use effect function when the data inside this array changes. So, for example, I could pass in here
  useEffect(() => {
    console.log('TodoList useEffect ', todos);
  }, [todos])
   to do's like so. That means we only want to run this callback function in the use effect hook run when the 'todos' the data changes, not when the count data changes. That means we only want to run this callback function in the use effect hook run when the 'todos' the data changes, not when the count data changes. 
   many times we can use this function in component for example 
   useEffect(() => {
    console.log('TodoList useEffect ', count);
  }, [count]); it means only run this function when only count change*/
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
      <AddNewTodo addTodo={addTodo} />
      {/* STEP 10 pass addTodo function as callback */}

      {/* STEP 4 [useEffect] 
      now if you check in browser this count will add every time and this component is also re-render as data updated but in the console you can also see every time when data change 'for count' it re-render the component and also 'todos' list print every time. so we don't want to run useEffect if it's data not changed or update. see STEP 5 [useEffect] */}
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  );
};

export default TodoList;
