import React from 'react';
import ReactDOM from 'react-dom';
/* in this file initialize redux */
// import { Provider } from 'react-redux';
/* Provider is going to keep track of that store, which is that global state, and it'll allow us to access that store from anywhere inside of the app. Now we don't have to be exactly in a parent component or in a child component. We can access that state from anywhere.*/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
); /* store takes in two different things. So first, we have the reducers, And the second thing is going to be compose, which is a function. And then in there, we just put applyMiddleware And then there we passed Thunk, as you can see. */

ReactDOM.render(<App />, document.getElementById('root'));
