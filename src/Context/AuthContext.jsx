import * as React from 'react';
import propTypes from 'prop-types';
import {toast} from 'react-toastify';
import {clearLoginToken, setloginToken, getLoginToken} from '../LoginLocalStorage';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = React.createContext();

export function AuthContextProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(getLoginToken()));

  const login = (token) => {
    setIsLoggedIn(true);
    setloginToken(token);
    toast.success('LoggedIn Successfully');
  };
  const logout = () => {
    setIsLoggedIn(false);
    clearLoginToken();
    toast.success('LoggedOut Successfully');
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};
