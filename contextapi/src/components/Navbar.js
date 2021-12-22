import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {
  render() {
    return (
      /* STEP 19
        now we are using other approach which is 'Context.Consumer' to consume the data. For this we call 'ThemeContext.Consumer'
        consumer expects us to pass in a function. So I'm going to open up curly braces inside the 'ThemeContext.Consumer' and then open up normal parentheses and call the function. So this function takes in a parameter, which is the (context), and this parameter is going to help us to reach context data.
        So then this function is going to return some JSX. */
      <ThemeContext.Consumer>
        {context => {
          /* STEP 20
            And we can use any of the data from this context inside this template. Just like we did before (see TodoLIst component). But this time we just have this parameter (context) instead of this.context.  */
          const { isDarkTheme, darkTheme, lightTheme } = context;
          const theme = isDarkTheme ? darkTheme : lightTheme;

          console.log('context in navbar render ', context);
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;

/* STEP 21
NOTE this step is just for knowledge. no code done here
Well, both approaches (contextType and Context.Consumer) have some pros and cons, but typically 'Context.Consumer' is better approach. 
That's the approach I like to use when using class component.

So even if this 'Context.Consumer' approach seems a little messy and in contrast to the 'static contextType', the good thing about it is we can also use it in functional components.

'contextType' works in both functional and class based components. So another benefit of this approach, using the consumer is that we can consume multiple contexts in one component.But we can't do that by using the 'contextType' approach and we're going to see that later on.
*/
