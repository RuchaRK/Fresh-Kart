import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  height: 100%;
  flex-direction: row;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin: 15px 10px;
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
  width: 250px;
`;

export const Data = styled.div`
  margin: 10px 10px;
  width: 100%;
  text-align: left;
`;

export const PrimaryButton = styled.button`
  border-radius: 5px;
  background-color: white; /* Green */
  border: 1px solid #008cba;
  color: #008cba;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 10px auto;
  cursor: pointer;
  &hover: {
    background-color: #008cba;
    color: white;
  }
`;
