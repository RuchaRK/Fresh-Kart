import * as React from 'react';
import propTypes from 'prop-types';
import {clearLoginToken, setloginToken, getLoginToken} from '../LoginLocalStorage';

export const AuthContext = React.createContext();

export function AuthContextProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(getLoginToken()));

  const login = (token) => {
    setIsLoggedIn(true);
    setloginToken(token);
  };
  const logout = () => {
    setIsLoggedIn(false);
    clearLoginToken();
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};
