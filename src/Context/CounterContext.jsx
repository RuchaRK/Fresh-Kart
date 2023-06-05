import * as React from 'react';
import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import PropTypes from 'prop-types';
import {getLoginToken} from '../LoginLocalStorage';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from './AuthContext';
import {routeName} from '../App.routes';

export const CounterContext = React.createContext();

export function CounterContextProvider({children}) {
  const [wishListData, setwishListData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const {isLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

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
    if (isLoggedIn) {
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
        if (data.cart) {
          setCartData(data.cart);
          toast.success('Product Added to cart');
        }
      } catch (error) {
        console.error(error);
        toast.error(`${error} occured`);
      }
    } else {
      navigate(routeName.LOGIN);
    }
  };

  const addItemToWishlist = async (productToAdd) => {
    if (isLoggedIn) {
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

        if (data.wishlist) {
          setwishListData(data.wishlist);
          toast.success('Product Added to WishList');
        }
      } catch (error) {
        console.error(error);
        toast.error(`${error} occured`);
      }
    } else {
      navigate(routeName.LOGIN);
    }
  };

  const removeFromWishlist = async (idValue) => {
    try {
      const response = await fetch(`/api/user/wishlist/${idValue}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken(),
        },
      });

      const data = await response.json();
      setwishListData(data.wishlist);
      toast.error('Product Removed from WishList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CounterContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          cartCounter: cartData.length,
          wishlistCounter: wishListData.length,
          cartData,
          setCartData,
          wishListData,
          setwishListData,
          incrementQuantity,
          addItemToCart,
          addItemToWishlist,
          removeFromWishlist,
        }}
      >
        {children}
      </CounterContext.Provider>
    </div>
  );
}

CounterContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
