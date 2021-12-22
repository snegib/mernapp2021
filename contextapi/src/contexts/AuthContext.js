/* STEP 26 
create new context data related to user login status
next we will see how to consume two different contexts inside of a single component in STEP 27. check Navbar component.
 */
import React, { createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    isLoggedIn: true,
  };
  changeAuthStatus = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
