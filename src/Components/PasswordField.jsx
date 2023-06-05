import styled from '@emotion/styled';
import {useState} from 'react';
import {AiFillEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {IconButton} from './IconButton';

const PasswordContainer = styled.div`
  display: flex;
  gap: 4px;
  height: 30px;
  padding: 4px;
  width: 100%;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 3px;
  width: 100%;
  background: white;
  &:focus-within {
    border: 2px solid black;
  }
  width: 100%;
`;

const PasswordInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;
export function PasswordField({...props}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordContainer>
      <PasswordInput {...props} type={showPassword ? 'text' : 'password'} />
      {showPassword ? (
        <IconButton type="button" onClick={() => setShowPassword(false)}>
          <AiFillEye />
        </IconButton>
      ) : (
        <IconButton type="button" onClick={() => setShowPassword(true)}>
          <AiOutlineEyeInvisible />
        </IconButton>
      )}
    </PasswordContainer>
  );
}
