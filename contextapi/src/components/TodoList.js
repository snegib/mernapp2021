import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isDarkTheme, darkTheme, lightTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: '140px',
          textAlign: 'center',
        }}
      >
        <p className="item">Overview</p>
        <p className="item">Contact</p>
        <p className="item">Support</p>
      </div>
    );
  }
}

export default TodoList;
