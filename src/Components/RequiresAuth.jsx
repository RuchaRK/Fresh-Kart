import React, {useContext} from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import propTypes from 'prop-types';
import {AuthContext} from '../Context/AuthContext';

export function RequiresAuth({children}) {
  const {isLoggedIn} = useContext(AuthContext);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/login" state={{from: location}} />;
}

RequiresAuth.propTypes = {
  children: propTypes.element.isRequired,
};
