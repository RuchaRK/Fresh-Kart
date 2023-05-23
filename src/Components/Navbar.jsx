/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import styled from '@emotion/styled';
import React, {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';
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
  border-radius: 5px;
  background-color: white; /* Green */
  border: 1px solid #008cba;
  color: #008cba;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

const SearchContainer = styled.input`
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  height: 30px;
  font-size: 17px;
  border: 1px solid grey;
  cursor: pointer;
`;
const IconCounterWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const IconCounter = styled.span`
  position: absolute;
  background: black;
  padding: 1px 2px;
  color: white;
  width: 10px;
  border-radius: 25%;
  top: -5px;
  right: -5px;
  font-size: 12px;
`;
const IconButtonBlack = styled.span`
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    /* color hex code - #000000 opacity - 20 */
    background: #00000020;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: self-end;
`;

export function Navbar() {
  const {isLoggedIn, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {cartCounter, wishlistCounter} = useContext(CounterContext);

  return (
    <Header>
      <Link to={routeName.HOME} style={{textDecoration: 'none'}}>
        <Title> FRESH-KART </Title>
      </Link>

      <div>
        <SearchContainer type="search" placeholder="Search" />
      </div>

      <IconContainer>
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

        <IconCounterWrapper>
          <IconCounter>{wishlistCounter}</IconCounter>
          <IconButtonBlack>
            <Link to="/wishlist" style={{textDecoration: 'none'}}>
              <AiOutlineHeart size={30} />
            </Link>
          </IconButtonBlack>
        </IconCounterWrapper>

        <IconCounterWrapper>
          <IconCounter> {cartCounter} </IconCounter>
          <IconButtonBlack>
            <Link to="/cart" style={{textDecoration: 'none'}}>
              <AiOutlineShoppingCart size={30} />
            </Link>
          </IconButtonBlack>
        </IconCounterWrapper>
      </IconContainer>
    </Header>
  );
}
