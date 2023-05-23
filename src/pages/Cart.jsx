/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, {useEffect, useContext} from 'react';
import {getLoginToken} from '../LoginLocalStorage';
import {CounterContext} from '../Context/CounterContext';

export function Cart() {
  const {setCartCounterValue, setWishListCounterValue, cartData, setCartData, incrementQuantity} =
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

  return (
    <div>
      <h1>Hi in cart</h1>
      {cartData.map((productDetails) => (
        <div>
          <h1>{productDetails.name}</h1>
          <p> {productDetails.qty}</p>

          {/* // eslint-disable-next-line no-underscore-dangle */}

          <button onClick={() => incrementQuantity(productDetails._id, 'decrement')}> ➖</button>

          <button onClick={() => incrementQuantity(productDetails._id, 'increment')}>➕</button>

          <div>
            <button onClick={() => removeFromCart(productDetails._id)}> Remove From Cart</button>
          </div>

          <div>
            <button
              onClick={() => {
                addItemToWishlist(productDetails);
                removeFromCart(productDetails._id);
              }}
            >
              Move to WishList
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
