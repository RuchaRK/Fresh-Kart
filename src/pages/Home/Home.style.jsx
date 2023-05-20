import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
`;

export const CategoryBox = styled.div`
  border: 1px solid orange;
  border-radius: 5px;
  height: 200px;
  width: 300px;
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
