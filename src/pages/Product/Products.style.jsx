import styled from '@emotion/styled';
import {ColorPalette} from '../../Color';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  height: 100%;
`;

export const FilterContainer = styled.div`
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
  width: 100%;
`;

export const FilterOptions = styled.div`
  display: flex;
  gap: 8px;
  text-align: left;
  flex-direction: column;
  width: 100%;
`;

export const HorizantalDivider = styled.div`
  border-bottom: 2px solid ${ColorPalette.primary.dark};
  width: 100%;
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
  padding: 16px;
  gap: 16px;
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
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SliderContainer = styled.input`
  background: red;
  width: 200px;
  height: 60px;
`;

export const IconContainer = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
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
  margin: 10px 0;
`;

export const RangeMarker = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const InputLabelContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
