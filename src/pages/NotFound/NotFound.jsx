import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {routeName} from '../../App.routes';
import {Button} from '../../Components/Button';

const H1 = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;
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

export function NotFound() {
  return (
    <Container>
      <H1>404</H1>
      <Message>Opps! Page Not Found</Message>
      <Link to={routeName.HOME} style={{textDecoration: 'none', width: 'fit-content'}}>
        <Button varient="outlined">Shop Now</Button>
      </Link>
    </Container>
  );
}
