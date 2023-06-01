import styled from '@emotion/styled';

export const CartContainer = styled.div`
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
  gap: 20px;
`;

export const CheckoutContainer = styled.div`
  flex: 0.4;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductDetails = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
  width: 90%;
  padding: 10px 10px;
`;

export const Data = styled.div`
  margin: 10px 10px;
  width: 100%;
  text-align: left;
`;

export const TitleContainer = styled.div`
  margin: 20px;
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
  background-color: white; /* Green */
  border: 1px solid #008cba;
  color: #008cba;
  padding: 10px 25px;
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
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
  width: 75%;
  border-radius: 15px;
`;

export const PriceDetails = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding: 10px 10px;
`;

export const TotalPrice = styled.div`
  display: flex;
  padding: 10px 10px;
  margin: 15px 10px;
  justify-content: space-between;
`;

export const Discount = styled.div`
  display: flex;
  padding: 10px 10px;
  margin: 15px 10px;
  justify-content: space-between;
`;

export const Delivary = styled.div`
  display: flex;
  padding: 5px 10px;
  margin: 5px 10px;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
`;

export const AmtToPay = styled.div`
  display: flex;
  padding: 10px 10px;
  margin: 10px 10px;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
`;

export const CheckoutButton = styled.button`
  border-radius: 5px;
  background-color: #008cba;
  border: 1px solid #008cba;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 10px;
  margin: 15px 15px;

  &hover: {
    background-color: #008cba;
    color: white;
  }
`;
