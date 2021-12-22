import React from 'react';
/* STEP 14
Now, we want to consume that context from (Navbar, TodoList) components and we want to access
the data that we pass into this (<ThemeContext.Provider>) provider.
And remember as well that we have passed the data as value props to this (<ThemeContext.Provider>) tag.
So then how do we access this context data from inside these components? There's a couple of different ways we can do this insider class component. Here we are using the 'contextType' way to do this.
So 'contextType' can be used in a class component, but not in functional components.
now, we import 'ThemeContext'
 */
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {
  /* STEP 15
    So we're now going to use the data inside the context from this component and the way that we'll do this is by saying static and it needs to be called contextType. and then we want to consume the 'ThemeContext' data.*/
  static contextType = ThemeContext;
  render() {
    /* STEP 16
      data can see in log */
    console.log('context in navbar render ', this.context);
    /* STEP 17
      restructuring data */
    const { isDarkTheme, darkTheme, lightTheme } = this.context;
    /* STEP 18
      consume now and after that check on browser and change the 'isDarkTheme' property false from react component addons and see the changes */
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <nav
        style={{
          background: theme.background,
          color: theme.text,
          height: '120px',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Oak Academy</h2>
        <div className="ui three buttons">
          <button className="ui button">Overview</button>
          <button className="ui button">Contact</button>
          <button className="ui button">Support</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
