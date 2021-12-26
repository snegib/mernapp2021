/* STEP 9 [useContext] 
so one of the cool things about this use useContext, hook, is that we can use it as many times as we want inside a component. For example, we can consume as many different contexts as we want inside this 'Navbar' component using the useContext hook. so now we are using two different context inside this component. one is 'ThemeContext' and second is 'AuthContext'. 
now turn this as functional component. */
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContextD } from '../contexts/AuthContextD';

console.log("NavbarD AuthContextD", AuthContextD);

const NavbarD = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContextD);

  const theme = isDarkTheme ? darkTheme : lightTheme;
  console.log(
    'ThemeContextD context in NavbarD render ',
    useContext(ThemeContext)
  );
  console.log(
    'AuthContextD context in NavbarD render ',
    useContext(AuthContextD)
  );

  return (
    <nav
      style={{
        background: theme.background,
        color: theme.text,
        height: '120px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Oak Academy</h2>
      <p onClick={changeAuthStatus} style={{ textAlign: 'center' }}>
        {isLoggedIn ? 'Logged in' : 'logged out'}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  );
};

/* class Navbar extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <ThemeContext.Consumer>
              {themeContext => {
                const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                const { isLoggedIn, changeAuthStatus } = authContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;

                console.log('context in navbar render ', themeContext);
                return (
                  <nav
                    style={{
                      background: theme.background,
                      color: theme.text,
                      height: '120px',
                    }}
                  >
                    <h2 style={{ textAlign: 'center' }}>Oak Academy</h2>
                    <p
                      onClick={changeAuthStatus}
                      style={{ textAlign: 'center' }}
                    >
                      {isLoggedIn ? 'Logged in' : 'logged out'}
                    </p>
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
        }}
      </AuthContext.Consumer>
    );
  }
} */

export default NavbarD;
