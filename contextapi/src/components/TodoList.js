import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div className="ui list">
        <p className="item">Overview</p>
        <p className="item">Contact</p>
        <p className="item">Support</p>
      </div>
    );
  }
}

export default TodoList;
