import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;
  color: red;
`;

const Message = styled.h4`
  font-size: 20px;
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function PageError() {
  return (
    <Container>
      <H1>Error</H1>
      <Message>Opps! Something Went Wrong</Message>
    </Container>
  );
}
