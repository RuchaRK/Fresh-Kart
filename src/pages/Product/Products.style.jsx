import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  height: 100%;
`;

export const Filter = styled.div`
  flex: 0.2;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: auto;
  padding: 20px 20px;
  gap: 20px;
  background: white;
  border-radius: 15px;
  position: sticky;
  top: 112px;
`;

export const FilterOptions = styled.div`
  display: flex;
  gap: 8px;
  text-align: left;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 0.8;
  // border: 3px solid red;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  overflow: hidden auto;
  padding: 0 10px 10px;
`;

export const CardContainer = styled.div`
  position: relative;
  height: 450px;
  width: 300px;
  curser: pointer;
  border-radius: 15px;
  background: white;
  &:hover {
    box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 5px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Data = styled.div`
  text-align: initial;
  padding: 5px 15px;
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  align-items: baseline;
`;

export const SliderContainer = styled.input`
  background: red;
  width: 200px;
  height: 60px;
`;

export const SecondaryButton = styled.button`
  border-radius: 10px;
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const IconContainer = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const IconButtonRed = styled.span`
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    /* color hex code - #f90909 opacity - 20 */
    background: #f9090920;
  }
`;

export const ClearButton = styled.button`
  background-color: #fafafa;
  border: none;
  color: #008cba;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const ActualPrice = styled.p`
  color: #a9a9a9;
  font-size: 16px;
  text-decoration: line-through;
`;

export const DiscountPrice = styled.p`
  color: black;
  font-size: 17px;
  font-weight: bold;
`;

export const ShowDiscount = styled.p`
  color: green;
  font-weight: bold;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: baseline;
  margin: 10px 5px;
`;
