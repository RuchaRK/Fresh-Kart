import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: #3a81f5;
  color: white;
  &:disabled {
    background-color: lightGray;
  }
`;
