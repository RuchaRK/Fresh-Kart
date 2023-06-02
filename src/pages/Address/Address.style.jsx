import styled from '@emotion/styled';

export const AddressWrapper = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  gap: 20px;
`;

export const AddressContainer = styled.div`
  padding: 15px;
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
  border-radius: 15px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 0.3rem 0px;
  font-size: 1rem;
  border-radius: 7px;

  &:hover {
    border: 1px solid #008cba;
  }
`;
