import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducer from './reducers';
/* HOW TO HOOK UP OUR APP WITH STORE - for that we need to import provider */
import { Provider } from 'react-redux';

/* STORE -> GLOBALIZED STATE */
// HOW TO HOOK UP OUR REDUCER WITH STORE AS WE HAVE MULTIPLE REDUCER? for that we have multiple reducer so we need to combine them first with {combinedReducer} function. check index.js inside reducers folder and then call it 'allReducer' to our store.
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

// /* ACTION -> DESCRIBE WHAT YOU WANT TO DO. SIMPLE FUNCTION THAT RETURN OBJECT */
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// /* REDUCER -> HOW YOUR ACTION TRANSFORM TO NEXT STATE */
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// /* STORE -> GLOBALIZED STATE */
// let store = createStore(counter);

// /* let's display it in the console */
// store.subscribe(() => console.log(store.getState()));

// /* DISPATCH -> EXECUTE THAT ACTION, UPDATE THE STORE */
// store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
