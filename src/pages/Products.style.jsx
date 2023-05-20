import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  height: 100%;
`;

export const Filter = styled.div`
  flex: 0.3;
  border: 2px solid green;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: auto;
  padding: 20px 20px;
  gap: 20px;
`;

export const FilterOptions = styled.div`
  display: flex;
  gap: 8px;
  text-align: left;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 0.7;
  border: 3px solid red;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  overflow: hidden auto;
`;

export const ContentBox = styled.div`
  border: 1px solid purple;
  height: 200px;
  width: 289px;
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
`;

export const SliderContainer = styled.input`
  background: red;
  width: 200px;
  height: 60px;
`;
