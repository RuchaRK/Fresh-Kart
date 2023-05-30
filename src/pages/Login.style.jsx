import styled from '@emotion/styled';

export const Container = styled.div`
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
