import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {CounterContext} from '../Context/CounterContext';
import {routeName} from '../App.routes';
import {Button} from './Button';
import {ColorPalette} from '../Color';

const CheckoutContainer = styled.div`
  flex: 0.4;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  position: sticky;
  top: 128px;
`;

const Section = styled.div`
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
`;

const TitleContainer = styled.div`
  padding: 0 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemsContainer = styled.div`
  padding: 10px 0;
`;

export const HorizantalDivider = styled.div`
  border-bottom: 1px solid ${ColorPalette.primary.dark};
  width: 100%;
`;

export function OrderDetails({showOrderDetails, address}) {
  const {cartCounter, cartData} = useContext(CounterContext);

  const totalActualPrice = cartData.reduce(
    (a, c) => ({
      ...a,
      totalPrice: a.totalPrice + c.price * c.qty,
      discountPrice: a.discountPrice + Math.round((c.price - (c.price * c.discount) / 100) * c.qty),
    }),

    {totalPrice: 0, discountPrice: 0},
  );

  const TotalDiscount = totalActualPrice.totalPrice - totalActualPrice.discountPrice;
  return (
    <CheckoutContainer>
      <Section>
        {showOrderDetails && (
          <>
            <TitleContainer>
              <h2>Order Details </h2>
            </TitleContainer>
            <HorizantalDivider />
            <ItemsContainer>
              <Item>
                <h4>Item({cartCounter} items)</h4>
                <h4>Qty</h4>
              </Item>

              {cartData.map((item) => (
                <Item>
                  <p> {item.name}</p>
                  <p>{item.qty}</p>
                </Item>
              ))}
            </ItemsContainer>
          </>
        )}

        <HorizantalDivider />

        <TitleContainer>
          <h2>Price Details </h2>
        </TitleContainer>
        <HorizantalDivider />
        <ItemsContainer>
          <Item>
            <h4>Price({cartCounter} items)</h4>
            <h4>
              <span>&#8377;</span> {totalActualPrice.totalPrice}
            </h4>
          </Item>

          <Item>
            <h4>Discount</h4>
            <h4>
              - <span>&#8377;</span> {TotalDiscount}
            </h4>
          </Item>

          <Item>
            <h4>Delivary Charges</h4>
            <h4>FREE</h4>
          </Item>
        </ItemsContainer>

        <HorizantalDivider />

        <Item>
          <h4>TOTAL AMOUNT </h4>
          <h4>
            <span>&#8377;</span> {totalActualPrice.totalPrice - TotalDiscount}
          </h4>
        </Item>
        <HorizantalDivider />
        {address && (
          <>
            <TitleContainer>
              <h2>DELIVER TO </h2>
            </TitleContainer>
            <ItemsContainer style={{textAlign: 'left'}}>
              <p>{address.name}</p>
              <p>{address.addressLine1}</p>
              <p>{`${address.city}, ${address.state}, ${address.pinCode}`}</p>
              <p>{address.mobileNo}</p>
            </ItemsContainer>
          </>
        )}

        <h4 style={{color: ColorPalette.primary.dark}}>
          You will save <span>&#8377;</span>
          {TotalDiscount} on this order.
        </h4>
        <div>
          <Link to={routeName.ADDRESS} style={{textDecoration: 'none'}}>
            <Button fullWidth> CheckOut </Button>
          </Link>
        </div>
      </Section>
    </CheckoutContainer>
  );
}
