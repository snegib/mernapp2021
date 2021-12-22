import React from 'react';
/* STEP 14
Now, we want to consume that context from (Navbar, TodoList) components and we want to access
the data that we pass into this (<ThemeContext.Provider>) provider.
And remember as well that we have passed the data as value props to this (<ThemeContext.Provider>) tag.
So then how do we access this context data from inside these components? There's a couple of different ways we can do this insider class component. Here we are using the 'static contextType' way to do this.
So 'contextType' can be used in a class component, but not in functional components.
now, we import 'ThemeContext'

Other way is 'Context.Consumer', we will see it from STEP 19 inside Navbar component.
 */
import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends React.Component {
  /* STEP 15
    So we're now going to use the data inside the context from this component and the way that we'll do this is by saying static and it needs to be called contextType. and then we want to consume the 'ThemeContext' data.*/
  static contextType = ThemeContext;
  render() {
    /* STEP 16
      data can see in log */
    console.log('context in TodoList render ', this.context);
    /* STEP 17
        restructuring data */
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context; /* Step 25  get changeTheme. Now from STEP 26, we can see multiple context data to create. check 'AuthContext.js'*/
    /* STEP 18
        consume now and after that check on browser and change the 'isDarkTheme' property false from react component addons and see the changes */
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
        {/* STEP 24
        Now, we will create a button here and when we click on it, we will call that function (themeChange())  */}
        <button className='ui button primary' onClick={changeTheme}>change the theme</button>
      </div>
    );
  }
}

export default TodoList;
