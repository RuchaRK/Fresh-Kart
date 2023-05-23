import React, {useEffect, useState, useContext} from 'react';
import {getLoginToken} from '../LoginLocalStorage';
import {CounterContext} from '../Context/CounterContext';

export function WishList() {
  const [wishListData, setwishListData] = useState([]);
  const {setCartCounterValue, setWishListCounterValue, cartData, incrementQuantity, addItemToCart} =
    useContext(CounterContext);

  const fetchWishListData = async () => {
    try {
      const response = await fetch('/api/user/wishlist', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken(),
        },
      });
      const data = await response.json();

      setwishListData(data.wishlist);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWishListData();
  }, []);

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
      setWishListCounterValue(data.wishlist.length);
    } catch (error) {
      console.error(error);
    }
  };

  const addProductToCart = (idValue, productToAdd) => {
    if (cartData.find((item) => item._id === idValue)) {
      incrementQuantity(idValue, 'increment');
    } else {
      console.log('outside if');
      addItemToCart(productToAdd);
    }
  };

  return (
    <div>
      <h1>Hi in wishlist</h1>
      {wishListData &&
        wishListData.map((productDetails) => (
          <div>
            <h1>{productDetails.name}</h1>
            <p> {productDetails.qty}</p>

            <button
              onClick={() => {
                addProductToCart(productDetails._id, productDetails);
                removeFromWishlist(productDetails._id);
              }}
            >
              {' '}
              Move to Cart{' '}
            </button>
            {/* // eslint-disable-next-line no-underscore-dangle */}
            <hr />
          </div>
        ))}
    </div>
  );
}
