/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import styled from '@emotion/styled';
import React, {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import {FiLogIn, FiLogOut} from 'react-icons/fi';
import {routeName} from '../App.routes';
import {AuthContext} from '../Context/AuthContext';
import {CounterContext} from '../Context/CounterContext';
import {SearchContext} from '../Context/SearchContext';
import {IconButtonWithCount} from './IconButtonWithCount';
import {ColorPalette} from '../Color';
import {IconButton} from './IconButton';

const Title = styled.h1`
  color: ${ColorPalette.secondary.main};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  height: 80px;
  padding: 0 100px;
  background: white;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const Search = styled.input`
  padding: 10px 20px;
  width: 35%;
  height: 40px;
  font-size: 14px;
  border-radius: 20px;
  border: 2px solid ${ColorPalette.lightBorder};
  &:hover,
  &:focus,
  &:focus-within {
    outline: none !important;
    border: 2px solid ${ColorPalette.primary.main} !important;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export function Navbar() {
  const {isLoggedIn, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {cartCounter, wishlistCounter} = useContext(CounterContext);
  const {setSearch} = useContext(SearchContext);

  const handleChange = (event) => {
    setSearch(event.target.value);

    navigate(routeName.PRODUCTS);
  };

  return (
    <Header>
      <Link to={routeName.HOME} style={{textDecoration: 'none'}}>
        <Title> FRESH-KART </Title>
      </Link>

      <Search
        type="text"
        placeholder="Search for product"
        onChange={(event) => handleChange(event)}
      />

      <IconContainer>
        <Link to="/wishlist" style={{textDecoration: 'none'}}>
          <IconButtonWithCount count={wishlistCounter}>
            <AiOutlineHeart size={32} />
          </IconButtonWithCount>
        </Link>

        <Link to="/cart" style={{textDecoration: 'none'}}>
          <IconButtonWithCount count={cartCounter}>
            <AiOutlineShoppingCart size={32} />
          </IconButtonWithCount>
        </Link>

        <IconButton
          onClick={() => {
            if (isLoggedIn) {
              logout();
            } else {
              navigate('/login', {state: {from: location}});
            }
          }}
        >
          {isLoggedIn ? <FiLogOut size={30} /> : <FiLogIn size={30} />}
        </IconButton>
      </IconContainer>
    </Header>
  );
}
