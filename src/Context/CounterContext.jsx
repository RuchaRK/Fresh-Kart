import * as React from 'react';
import {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import {getLoginToken} from '../LoginLocalStorage';
import 'react-toastify/dist/ReactToastify.css';

export const CounterContext = React.createContext();

export function CounterContextProvider({children}) {
  const [cartCounter, setCartCounter] = React.useState(0);
  const [wishlistCounter, setWishListCounter] = React.useState(0);
  const [cartData, setCartData] = useState([]);

  const setCartCounterValue = (countValue) => {
    setCartCounter(countValue);
  };
  const setWishListCounterValue = (countValue) => {
    setWishListCounter(countValue);
  };

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
    } catch (error) {
      console.error(error);
    }
  };

  const addItemToCart = async (productToAdd) => {
    try {
      const response = await fetch('/api/user/cart', {
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
      if (data.cart.length > 0) {
        setCartCounterValue(data.cart.length);
      }
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
      <CounterContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          cartCounter,
          wishlistCounter,
          cartData,
          setCartData,
          incrementQuantity,
          setCartCounterValue,
          setWishListCounterValue,
          addItemToCart,
          addItemToWishlist,
        }}
      >
        {children}
      </CounterContext.Provider>
    </div>
  );
}
