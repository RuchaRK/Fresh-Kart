/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, {useEffect, useState, useContext} from 'react';
import {getLoginToken} from '../LoginLocalStorage';
import {CounterContext} from '../Context/CounterContext';

export function Cart() {
  const [cartData, setCartData] = useState([]);
  const {cartCounter} = useContext(CounterContext);

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
      console.log('Cartdata -', data);
      setCartData(data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartData();
    console.log(cartData);
  }, []);

  const incrementQuantity = async (idValue, incrementType) => {
    try {
      const response = await fetch(`/api/user/cart/${idValue}`, {
        method: 'POST',
        body: JSON.stringify({
          action: {
            type: incrementType,
          },
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken(),
        },
      });

      const data = await response.json();
      setCartData(data.cart);
      console.log(data.cart);
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
            <button> Remove From Cart</button>
          </div>

          <div>
            <button> Move to WishList</button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
