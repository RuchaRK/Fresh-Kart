import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  height: 100%;
  flex-direction: row;
`;

export const ProductContainer = styled.div`
  flex: 0.6;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutContainer = styled.div`
  flex: 0.4;
  border: 1px solid #4b0082;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductDetails = styled.div`
  display: flex;
  border-radius: 20px;
  margin: 15px 10px;
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
  width: 90%;
  padding: 10px 10px;
`;

export const Data = styled.div`
  margin: 10px 10px;
  width: 100%;
  text-align: left;
`;

export const SecondaryButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  border-radius: 5px;
  background-color: white; /* Green */
  border: 1px solid #008cba;
  color: #008cba;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 10px 4px 0px;
  cursor: pointer;

  &hover: {
    background-color: #008cba;
    color: white;
  }
`;

export const ActualPrice = styled.p`
  color: #a9a9a9;
  font-size: 16px;
  text-decoration: line-through;
  margin: 10px 0px;
`;

export const DiscountPrice = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const PriceContainer = styled.div`
  border: 1px solid orange;
  margin: 15px 10px;
`;
