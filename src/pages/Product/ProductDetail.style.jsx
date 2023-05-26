import styled from '@emotion/styled';

export const ShowProduct = styled.div`
  display: flex;
  gap: 30px;
`;

export const ImageContainer = styled.div`
  flex: 0.5;
  border: 1px solid #e3e3e3;
  border-radius: 21px;
  position: relative;
`;

export const Bandge = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
`;

export const ProductData = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  align-items: baseline;
`;

export const DisplayDiscount = styled.span`
  border: none;
  color: red;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  font-weight: bold;
  margin: 4px 2px;
  animation: blinking 1s infinite;

  @keyframes blinking {
    0% {
      color: #06c3d1;
    }
    100% {
      color: #270da6;
    }
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
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SecondaryButton = styled.button`
  border-radius: 25px;
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 10px 2px;
  cursor: pointer;
  font-weight: bold;
`;

export const InfoStyle = styled.p`
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  color: black;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 10px;
  display: inline-block;
`;
