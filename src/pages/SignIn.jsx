import React, {useContext, useState} from 'react';
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';
import {Button} from '../Components/Button';

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

export function SignIn() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const handleSignUp = (token) => {
    login(token);
    navigate('/');
  };

  const isRegisteredButtonDisable =
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword ||
    isLoading;

  const addAccount = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.errors.length > 0) {
        setErrorMessage('Email already exit');
      }
      if (data.encodedToken) {
        handleSignUp(data.encodedToken);
      }
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form>
      <Container>
        <h1>SignUp</h1>
        <InputContainer>
          FirstName
          <Input
            type="text"
            placeholder="Enter FirstName"
            name="firstName"
            required
            onChange={(event) => {
              setFormData({...formData, [event.target.name]: event.target.value});
            }}
          />
        </InputContainer>
        <InputContainer>
          LastName
          <Input
            type="text"
            placeholder="Enter LastName"
            name="lastName"
            required
            onChange={(event) => {
              setFormData({...formData, [event.target.name]: event.target.value});
            }}
          />
        </InputContainer>
        <InputContainer>
          Email
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={(event) => {
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
            required
            onChange={(event) => {
              setFormData({...formData, [event.target.name]: event.target.value});
            }}
          />
        </InputContainer>
        <InputContainer>
          Confirm Password
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            onChange={(event) =>
              setFormData({...formData, [event.target.name]: event.target.value})
            }
          />
          {formData.password !== formData.confirmPassword && <p>Password does not match</p>}
        </InputContainer>
        {errorMessage && <p>{errorMessage}</p>}
        <InputContainer>
          <Button onClick={addAccount} disabled={isRegisteredButtonDisable}>
            {isLoading ? 'SigningUp...' : 'Register'}
          </Button>
        </InputContainer>
      </Container>
    </form>
  );
}
