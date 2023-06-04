import * as React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {CiDeliveryTruck} from 'react-icons/ci';
import {AiOutlineSafety} from 'react-icons/ai';
import {RiRefund2Line} from 'react-icons/ri';
import {FcOnlineSupport} from 'react-icons/fc';
import {routeName} from '../App.routes';
import {ColorPalette} from '../Color';

const Section = styled.div`
  background: black;
  padding: 30px 100px;
`;

const SectionContainer = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
`;

const FooterContainerOne = styled.div`
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FooterContainerTwo = styled.div`
  line-height: 2rem;
  cursor: pointer;
`;

const FooterContainerThree = styled.div`
  line-height: 2rem;
  cursor: pointer;
`;

const Container = styled.div`
  background: ${ColorPalette.secondary.main};
    padding-box;
  display: flex;
  padding: 20px 0px;
  gap: 214px;
`;

const Content = styled.div`
  color: white;
  flex: 0.8;
  display: flex;
  gap: 20px;
`;

const Title = styled.div`
  color: white;
  flex: 0.2;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 100px;
`;

const ContentStyle = styled.div`
  border-right: 2px solid #125323;
  padding: 0px 20px;
`;

export function Footer() {
  return (
    <div style={{height: '336px'}}>
      <Container>
        <Title>
          <h3>Fresh Kart&#39;s Promise</h3>
        </Title>
        <Content>
          <ContentStyle>
            <CiDeliveryTruck size={50} />
            <p>Free Delivary</p>
          </ContentStyle>
          <ContentStyle>
            <AiOutlineSafety size={50} />
            <p>Safety Gaurantee</p>
          </ContentStyle>
          <ContentStyle>
            <RiRefund2Line size={50} />
            <p>Money Return</p>
          </ContentStyle>
          <ContentStyle>
            <FcOnlineSupport size={50} />
            <p>Online Support</p>
          </ContentStyle>
        </Content>
      </Container>
      <Section>
        <SectionContainer>
          <FooterContainerOne>
            <h2>Fresh-Kart</h2>
            <p>Farm Fresh Fruits & Vegetables delivered at your doorstep</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p style={{fontSize: 'small'}}> © 2022 Fresh-Kart</p>
          </FooterContainerOne>
          <FooterContainerTwo>
            <ul style={{listStyle: 'none'}}>
              <li>Connect</li>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </FooterContainerTwo>
          <FooterContainerThree>
            <ul style={{listStyle: 'none'}}>
              <li>Resources</li>
              <li>
                <Link to={routeName.LOGIN} style={{textDecoration: 'none', color: 'white'}}>
                  Login
                </Link>
              </li>
              <li>
                <Link to={routeName.SIGNUP} style={{textDecoration: 'none', color: 'white'}}>
                  SignUp
                </Link>
              </li>
            </ul>
          </FooterContainerThree>
        </SectionContainer>
      </Section>
    </div>
  );
}
