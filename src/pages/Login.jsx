import React, {useContext, useState} from 'react';
import styled from '@emotion/styled';
import {useLocation, useNavigate, Link} from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';
import {Button} from '../Components/Button';
import {CounterContext} from '../Context/CounterContext';

const Container = styled.div`
  margin: auto;
  border: 3px solid purple;
  display: flex;
  width: 360px;
  flex-direction: column;
  align-items:"center":
  height: 300px;
  padding: 32px 60px;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Input = styled.input`
  height: 30px;
  padding: 4px;
  width: 100%;
`;

export function Login() {
  // eslint-disable-next-line no-undef
  const [formData, setFormData] = useState({});
  const {login} = useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {state} = useLocation();
  const {setCartCounterValue, setWishListCounterValue} = useContext(CounterContext);

  const handleLogin = (token) => {
    login(token);
    navigate(state?.from?.pathname || '/');
  };

  const checkCredentails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.errors && data.errors.length > 0) {
        setIsError(true);
        return;
      }

      const cartCount = data.foundUser.cart.length;
      const wishListCount = data.foundUser.wishlist.length;

      setCartCounterValue(cartCount);
      setWishListCounterValue(wishListCount);

      if (data.encodedToken) {
        handleLogin(data.encodedToken);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <InputContainer>
        Email
        <Input
          type="email"
          placeholder=" Enter email"
          name="email"
          onChange={(event) => {
            setIsError(false);
            setFormData({...formData, [event.target.name]: event.target.value});
          }}
        />
      </InputContainer>
      <InputContainer>
        Password
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(event) => {
            setIsError(false);
            setFormData({...formData, [event.target.name]: event.target.value});
          }}
        />
      </InputContainer>
      {isError && <p>Invalid Email or Password</p>}
      <InputContainer>
        <Button onClick={checkCredentails} disabled={isLoading}>
          {isLoading ? 'Login...' : 'Login'}
        </Button>
        <Link to="/signin">New to Fresh-KART? Create an account.</Link>
      </InputContainer>
    </Container>
  );
}
