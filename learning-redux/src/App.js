import React from 'react';
/* as we alrady setup the store so now, we can access any piece of data from any component. lets say we want to access counter data here. then we import  useSelector from 'react-redux' to get our data from the store*/
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';
function App() {
  /* here we use useSelector to extract our data from store. useSelector is gone be a function here and i can pull out state.counter, that's it*/
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information i Should not see</h3> : ''}
    </div>
  );
}

export default App;
