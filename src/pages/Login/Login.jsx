import React, {useContext, useState} from 'react';
import {useLocation, useNavigate, Link} from 'react-router-dom';
import {AuthContext} from '../../Context/AuthContext';
import {Button} from '../../Components/Button';
import {CounterContext} from '../../Context/CounterContext';
import {ToastContainer, toast} from 'react-toastify';
import {Container, InputContainer, Input} from './Login.style';
import {Loader} from '../../Components/Loader';

export function Login() {
  // eslint-disable-next-line no-undef
  const [formData, setFormData] = useState({});
  const {login} = useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {state} = useLocation();
  const {setCartData, setwishListData} = useContext(CounterContext);

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

      setCartData(data.foundUser.cart);
      setwishListData(data.foundUser.wishlist);

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
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            <Link to="/signin" style={{textDecoration: 'none'}}>
              New to Fresh-KART? Create an account.
            </Link>
          </InputContainer>
        </Container>
      )}
    </>
  );
}
