/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {BsFillBagHeartFill} from 'react-icons/bs';
import {getLoginToken} from '../../LoginLocalStorage';
import {CounterContext} from '../../Context/CounterContext';
import {
  CheckoutContainer,
  Container,
  ProductContainer,
  ProductDetails,
  SecondaryButton,
  Data,
  ActualPrice,
  DiscountPrice,
  PrimaryButton,
  PriceContainer,
  TotalPrice,
  PriceDetails,
  Discount,
  Delivary,
  AmtToPay,
  CheckoutButton,
} from './Cart.style';
import {routeName} from '../../App.routes';

export function Cart() {
  const {cartData, setCartData, incrementQuantity, addItemToWishlist, cartCounter} =
    useContext(CounterContext);

  const fetchCartData = async () => {
    try {
      const response = await fetch('/api/user/cart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken(),
        },
      });
      const data = await response.json();
      setCartData(data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartData();
    console.log(cartData);
  }, []);

  const removeFromCart = async (idValue) => {
    try {
      const response = await fetch(`/api/user/cart/${idValue}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken(),
        },
      });
      const data = await response.json();
      setCartData(data.cart);
      toast.error('Product removed from Cart.');
    } catch (error) {
      console.error(error);
    }
  };

  const totalActualPrice = cartData.reduce(
    (a, c) => ({
      ...a,
      totalPrice: a.totalPrice + c.price,
      discountPrice: a.discountPrice + Math.round((c.price - (c.price * c.discount) / 100) * c.qty),
    }),

    {totalPrice: 0, discountPrice: 0},
  );

  const TotalDiscount = totalActualPrice.totalPrice - totalActualPrice.discountPrice;

  return (
    <>
      <div>
        <h2> My Cart ({cartCounter}) </h2>
      </div>
      {cartData?.length > 0 ? (
        <Container>
          <ProductContainer>
            {cartData.map((productDetails) => (
              <ProductDetails>
                <img
                  src={productDetails.image}
                  alt={productDetails.name}
                  height="250px"
                  width="250px"
                  style={{borderRadius: 'inherit'}}
                />
                <Data>
                  <h2>{productDetails.name}</h2>
                  <DiscountPrice>
                    <span>&#8377;</span>
                    {Math.round(
                      (productDetails.price -
                        (productDetails.price * productDetails.discount) / 100) *
                        productDetails.qty,
                    )}
                  </DiscountPrice>

                  <ActualPrice>
                    <span>&#8377;</span> : {productDetails.price}/-
                  </ActualPrice>

                  <p style={{margin: '10px 0px', fontWeight: 'bold'}}>
                    ({productDetails.discount}% Discount)
                  </p>

                  {/* // eslint-disable-next-line no-underscore-dangle */}
                  <div style={{margin: '10px 0px'}}>
                    Quantity :
                    <SecondaryButton
                      onClick={() => incrementQuantity(productDetails._id, 'decrement')}
                    >
                      ➖
                    </SecondaryButton>
                    {productDetails.qty}
                    <SecondaryButton
                      onClick={() => incrementQuantity(productDetails._id, 'increment')}
                    >
                      ➕
                    </SecondaryButton>
                  </div>

                  <div>
                    <PrimaryButton onClick={() => removeFromCart(productDetails._id)}>
                      Remove From Cart
                    </PrimaryButton>

                    <PrimaryButton
                      onClick={() => {
                        addItemToWishlist(productDetails);
                        removeFromCart(productDetails._id);
                      }}
                    >
                      Move to WishList
                    </PrimaryButton>
                  </div>
                </Data>
              </ProductDetails>
            ))}
          </ProductContainer>

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
                <CheckoutButton>Checkout</CheckoutButton>
              </div>
            </PriceContainer>
          </CheckoutContainer>
        </Container>
      ) : (
        <div>
          <h3 style={{margin: '10px 15px'}}>Hey, It feels so light!</h3>
          <p style={{margin: '10px 15px'}}>
            <BsFillBagHeartFill size={25} />
            There is nothing in your bag. Lets Add some items in your bag.
          </p>
          <SecondaryButton>
            <Link to={routeName.HOME} style={{textDecoration: 'none'}}>
              Shop Now
            </Link>
          </SecondaryButton>
        </div>
      )}
    </>
  );
}
