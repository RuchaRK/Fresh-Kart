/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {BsFillBagHeartFill} from 'react-icons/bs';
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai';
import {getLoginToken} from '../../LoginLocalStorage';
import {CounterContext} from '../../Context/CounterContext';
import {
  CartContainer,
  ProductContainer,
  ProductDetails,
  SecondaryButton,
  Data,
  ActualPrice,
  DiscountPrice,
  PrimaryButton,
  TitleContainer,
} from './Cart.style';
import {routeName} from '../../App.routes';
import {PriceDetail} from '../../Components/PriceDetail';
import {IconButton} from '../../Components/IconButton';

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

  return (
    <>
      <TitleContainer>
        <h2> My Cart {cartCounter > 0 && `(${cartCounter})`}</h2>
      </TitleContainer>
      {cartData?.length > 0 ? (
        <CartContainer>
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
                    <span>&#8377;</span> : {productDetails.price * productDetails.qty}/-
                  </ActualPrice>

                  <p style={{margin: '10px 0px', fontWeight: 'bold'}}>
                    ({productDetails.discount}% Discount)
                  </p>

                  {/* // eslint-disable-next-line no-underscore-dangle */}
                  <div
                    style={{margin: '10px 0px', display: 'flex', gap: '4px', alignItems: 'center'}}
                  >
                    Quantity :
                    <IconButton
                      disabled={productDetails.qty <= 1}
                      onClick={() => incrementQuantity(productDetails._id, 'decrement')}
                    >
                      <AiOutlineMinusSquare size={24} />
                    </IconButton>
                    {productDetails.qty}
                    <IconButton onClick={() => incrementQuantity(productDetails._id, 'increment')}>
                      <AiOutlinePlusSquare size={24} />
                    </IconButton>
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
          <PriceDetail />
        </CartContainer>
      ) : (
        <div>
          <h3 style={{margin: '10px 15px'}}>Hey, It feels so light!</h3>
          <p
            style={{
              margin: '10px 15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            <BsFillBagHeartFill size={25} />
            There is nothing in your bag. Lets Add some items in your bag.
          </p>

          <Link to={routeName.HOME} style={{textDecoration: 'none'}}>
            <SecondaryButton>Shop Now</SecondaryButton>
          </Link>
        </div>
      )}
    </>
  );
}
