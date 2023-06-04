import styled from '@emotion/styled';
import {ColorPalette} from '../../Color';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
  margin: 32px;
`;

export const CategoryBox = styled.div(
  ({img}) => `
  border-radius: 5px;
  height: 200px;
  width: 300px;
  position: relative;
  border-radius: 15px;
  &::before {
    content: "";
    background-image: url(${img});
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
    height: 200px;
    width: 300px;
    border-radius: 15px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`,
);

export const CategoryName = styled.h2`
  color: black;
  background-color: #ffffffaa;
  padding: 16px;
  z-index: 1;
  min-width: 200px;
`;

export const Img = styled.img`
  margin: -32px -100px 32px;
  width: 100vw;
  height: 400px;
  object-fit: cover;
`;

export const Title = styled.div`
  color: red;
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 15px;
`;

export const TitleUnderline = styled.span`
  height: 5px;
  width: 200px;
  border-radius: 4px;
  display: block;
  opacity: 1;
  background: red;
  margin: 5px auto;
  margin-bottom: 42px;
`;

export const BackgroundImage = styled.div`
  background-image: url(https://cdn.cheapism.com/images/iStock-990558492.48a8c921.fill-1440x605.jpg);
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
  height: 100%;
`;

export const MainImage = styled.div`
  position: relative;
  height: 400px;
  margin: -32px -100px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageText = styled.h2`
  background-color: #ffffffaa;
  z-index: 1;
  padding: 24px 48px;
  width: 500px;
  cursor: pointer;
  border-bottom: 4px solid ${ColorPalette.primary.main};
  &:hover {
    border: 4px solid ${ColorPalette.primary.main};
  }
`;
