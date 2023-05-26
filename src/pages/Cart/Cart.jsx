/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, {useEffect, useContext, useState} from 'react';
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
} from './Cart.style';

export function Cart() {
  const TOTAL_PRICE = 0;
  const {
    setCartCounterValue,
    setWishListCounterValue,
    cartData,
    setCartData,
    incrementQuantity,
    cartCounter,
  } = useContext(CounterContext);
  const [discount, setDiscount] = useState(0);

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
      setCartCounterValue(data.cart.length);
    } catch (error) {
      console.error(error);
    }
  };

  const addItemToWishlist = async (productToAdd) => {
    try {
      const response = await fetch('/api/user/wishlist', {
        method: 'POST',
        body: JSON.stringify({
          product: {
            ...productToAdd,
          },
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken(),
        },
      });
      const data = await response.json();

      if (data.wishlist.length > 0) {
        setWishListCounterValue(data.wishlist.length);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(cartData);

  const price = cartData.reduce((a, c) => a + c.price * c.qty, 0);
  console.log(price);
  console.log(typeof price);

  return (
    <>
      <div>
        <h2> My Cart ({cartCounter}) </h2>
      </div>
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
                    (productDetails.price - (productDetails.price * 10) / 100) * productDetails.qty,
                  )}
                </DiscountPrice>

                <ActualPrice>
                  <span>&#8377;</span> : {productDetails.price}/-
                </ActualPrice>

                <p style={{margin: '10px 0px', fontWeight: 'bold'}}> 10% OFF</p>

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
            <h2>Price Details</h2>
            <div>
              <p>Price({cartCounter} items)</p>
              <p> {}</p>
            </div>
          </PriceContainer>
        </CheckoutContainer>
      </Container>
    </>
  );
}
