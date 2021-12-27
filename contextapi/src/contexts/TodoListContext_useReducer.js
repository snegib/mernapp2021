import React, {
  createContext,
  useReducer,
} from 'react'; /* STEP 1 [useReducer hook use]  
import useReducer hook*/

export const TodoListContext_useReducer = createContext();

/* STEP 3 [useReducer hook use]   
create todoReducer function */
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, id: Math.random() }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== Number(action.id));

    default:
      return state;
  }
};

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
