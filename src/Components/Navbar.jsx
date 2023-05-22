/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import styled from '@emotion/styled';
import React, {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {routeName} from '../App.routes';
import {AuthContext} from '../Context/AuthContext';
import {CounterContext} from '../Context/CounterContext';

const Title = styled.h1`
  color: green;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin: 0px 100px;
  height: 80px;
`;

const Button = styled.button`
  border-radius: 4px;
`;

export function Navbar() {
  const {isLoggedIn, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {cartCounter, wishlistCounter} = useContext(CounterContext);

  return (
    <Header>
      <Link to={routeName.HOME}>
        <Title> FRESH-KART </Title>
      </Link>

      <div>
        <input type="search" placeholder="Search" />
      </div>
      <Button
        onClick={() => {
          if (isLoggedIn) {
            logout();
          } else {
            navigate('/login', {state: {from: location}});
          }
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>

      <Link to="/cart">Cart {cartCounter} </Link>
      <Link to="/wishlist">WishList {wishlistCounter}</Link>
    </Header>
  );
}
