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
  flex: 0.7;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ProductDetails = styled.div`
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
  padding: 10px 10px;
  background-color: white;
  width: 100%;
`;

export const Data = styled.div`
  margin: 10px 10px;
  width: 100%;
  text-align: left;
`;

export const TitleContainer = styled.div`
  margin: 20px;
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
  border-radius: 15px;
`;

export const PriceDetails = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding: 10px 10px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Delivary = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
`;

export const AmtToPay = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
