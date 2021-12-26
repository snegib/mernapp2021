/* use are using useState. so converting it functional component. */
import React, { createContext, useState } from 'react';
export const AuthContextD = createContext();

const AuthContextProviderD = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeAuthStatus = () => {
    setIsLoggedIn(!isLoggedIn); /* set opposite value what is having */
  };

  console.log('AuthContextD ', isLoggedIn);
  return (
    <AuthContextD.Provider
      value={{ isLoggedIn, changeAuthStatus: changeAuthStatus }}
    >
      {children}
    </AuthContextD.Provider>
  );
};

/* class AuthContextProvider extends React.Component {
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
} */

export default AuthContextProviderD;
