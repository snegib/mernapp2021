import React, {
  createContext,
  useReducer,
} from 'react'; /* STEP 1 [useReducer hook use]  
import useReducer hook*/
import { todoReducer } from '../reducers/todoReducer';
export const TodoListContext_useReducer = createContext();


const TodoListContext_useReducerProvider = ({ children }) => {
  console.log('TodoListContext ', children);
  /*  STEP 2 [useReducer hook use]   
  we use useReducer() here And now remember that we pass in two parameters in here. The first parameter is the reducer that we want to use. And that is going to be the todosReduce her. And the second parameter is going to be the initial value of this piece of state. 

  useReducer(todoReducer, [
    { text: 'Plan the family trip', id: 1 },
    { text: 'Go shopping for dinner', id: 2 },
    { text: 'Go for a walk', id: 3 },
  ])
  
  Now, I previously set it to this, and I'm going to take that initial value again. So I'm going to take this as the initial value like so. And I remove state because we don't need that anymore. So let's also remove this used state import as well.
  
  OK, so just like the state hook, this useReduce hook will return an array, and in that array we will receive two parameters again. So I'm going to say const and then open up an array and inside this array. The first parameter is going to be state itself. And again, I'll just call it 'todos' And for this second parameter, that's going to be, remember, a function called dispatch. OK, so this is the context state. Just like we saw it on useState hook. And the 'dispatch' function which will help us to send an action to this reducer.
  Then this  useReducer() function
  =useReducer(todoReducer, [
    { text: 'Plan the family trip', id: 1 },
    { text: 'Go shopping for dinner', id: 2 },
    { text: 'Go for a walk', id: 3 },
  ]);
   will get the action, and it will manipulate this piece of state 'const [todos' just like we did with these (addTodo and removeTodo)functions. But useReducer function, we're going to do the same thing that we did in (addTodo and removeTodo). But we will centralize this state manipulation in the 'todoReducer' function. so let's create that*/
  const [todos, dispatch] = useReducer(todoReducer, [
    { text: 'Plan the family trip', id: 1 },
    { text: 'Go shopping for dinner', id: 2 },
    { text: 'Go for a walk', id: 3 },
  ]);
  /* const [todos, setTodos] = useState([
    { text: 'Plan the family trip', id: 1 },
    { text: 'Go shopping for dinner', id: 2 },
    { text: 'Go for a walk', id: 3 },
  ]); */

  /*  const addTodo = todo => {
    setTodos([...todos, { text: todo, id: Math.random() }]);
  };

  const removeTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== Number(id);
      })
    );
  }; */
  return (
    /* STEP 4 [useReducer hook use] 
    now, we need to pass down dispatch like this, now bit change in 'TodoList_useReducer.js'*/
    <TodoListContext_useReducer.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext_useReducer.Provider>
  );
};

export default TodoListContext_useReducerProvider;

/* Now, we're going to make a tiny change in our component structure. OK, so in general, we would create this reducer function under its own directory because if you look at this page, well, it doesn't seem so clean, right? Because we have both this 'todoReducer' function and this functional component in 'TodoListContext_useReducerProvider'. Now, at first glance, it might be a little confusing. Which one is the actual context and which one is reduce function? So to make it more clean, readable, I'm going to separate these two in here. And at the end, we're going to keep our context under the context directory and keep our reducer under the reducer directory. Now to do that, what I'm going to do is take this, reduce 'todoReducer' function and move it under the reducer directory. OK, so to do that, I'm going to create a new folder called 'reducers' under the 'src' directory.

And put my producer inside here.

Now, of course, you don't have to do this.

I'm just showing you another way to keep things a little bit more organized here.

I'm not going to change any functionality. */