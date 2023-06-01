import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {
  CheckoutContainer,
  PriceContainer,
  PriceDetails,
  TotalPrice,
  Discount,
  Delivary,
  AmtToPay,
  CheckoutButton,
} from '../pages/Cart/Cart.style';
import {CounterContext} from '../Context/CounterContext';
import {routeName} from '../App.routes';

export function PriceDetail() {
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
      <PriceContainer>
        <PriceDetails>
          <h2>Price Details </h2>
        </PriceDetails>

        <TotalPrice>
          <h4>Price({cartCounter} items)</h4>
          <h4>
            <span>&#8377;</span> {totalActualPrice.totalPrice}
          </h4>
        </TotalPrice>

        <Discount>
          <h4>Discount</h4>
          <h4>
            - <span>&#8377;</span> {TotalDiscount}
          </h4>
        </Discount>

        <Delivary>
          <h4>Delivary Charges</h4>
          <h4>FREE</h4>
        </Delivary>

        <AmtToPay>
          <h4>TOTAL AMOUNT </h4>
          <h4>
            <span>&#8377;</span> {totalActualPrice.totalPrice - TotalDiscount}
          </h4>
        </AmtToPay>

        <h4>
          You will save <span>&#8377;</span>
          {TotalDiscount} on this order.
        </h4>
        <div>
          <Link to={routeName.ADDRESS}>
            <CheckoutButton> CheckOut </CheckoutButton>
          </Link>
        </div>
      </PriceContainer>
    </CheckoutContainer>
  );
}
