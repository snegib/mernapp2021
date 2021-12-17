import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  applyMiddleware,
  createStore,
} from 'redux'; /* STEP 21 call applyMiddleware function */
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'; /* STEP 20  call redux-thunk*/

/* STEP 1 [NOTE TOTAL STEP IS 32]
// how does react interact with this store or how do we associate this store with a React application. for this we need to call Provider component and wrap our application with it and pass store to it. 
*/
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk
  ) /* STEP 22 applyMiddleware function to store and pass thunk as a param */
); /* STEP 5 - pass reducer, now reducer associate with store */

/* STEP 2
we need to create a reducer and put into this store. for this i have create a 'reducers' folder in src  */

ReactDOM.render(
  <Provider store={store}>
    {' '}
    {/*  STEP 6 - now store pass to our APP */}
    <App />
  </Provider>,
  document.getElementById('root')
);
