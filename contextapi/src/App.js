import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Navbar from './components/NavBar';
import TodoList from './components/TodoList';
const App = () => {
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
};

render.ReactDOM('<App />', document.querySelector('#root'));
