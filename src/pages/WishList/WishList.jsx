import React, {useEffect, useState, useContext} from 'react';
import {getLoginToken} from '../../LoginLocalStorage';
import {CounterContext} from '../../Context/CounterContext';
import {Container, ProductDetails, PrimaryButton} from './Wishlist.style';

export function WishList() {
  const [wishListData, setwishListData] = useState([]);
  const {setWishListCounterValue, cartData, incrementQuantity, addItemToCart} =
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
      <h1>My WishList</h1>
      <Container>
        {wishListData &&
          wishListData.map((productDetails) => (
            <ProductDetails>
              <img
                src={productDetails.image}
                alt={productDetails.name}
                height="250px"
                width="250px"
                style={{borderRadius: 'inherit'}}
              />

              <h3 style={{margin: '5px 0px'}}>{productDetails.name}</h3>
              <p style={{margin: '5px 0px'}}>
                <span>&#8377;</span>
                {Math.round(productDetails.price - (productDetails.price * 10) / 100)}
              </p>

              <PrimaryButton
                onClick={() => {
                  addProductToCart(productDetails._id, productDetails);
                  removeFromWishlist(productDetails._id);
                }}
              >
                Move to Cart
              </PrimaryButton>
              {/* // eslint-disable-next-line no-underscore-dangle */}
            </ProductDetails>
          ))}
      </Container>
    </div>
  );
}
