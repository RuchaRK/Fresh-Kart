import React, {useEffect, useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {getLoginToken} from '../../LoginLocalStorage';
import {CounterContext} from '../../Context/CounterContext';
import {Container} from './Wishlist.style';
import {Button} from '../../Components/Button';
import {ProductCard} from '../../Components/ProductCard';
import {routeName} from '../../App.routes';

export function WishList() {
  const {
    wishListData,
    setwishListData,
    cartData,
    incrementQuantity,
    addItemToCart,
    removeFromWishlist,
  } = useContext(CounterContext);

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

  const addProductToCart = (idValue, productToAdd) => {
    if (cartData.find((item) => item._id === idValue)) {
      incrementQuantity(idValue, 'increment');
    } else {
      addItemToCart(productToAdd);
    }
  };

  return (
    <div>
      <h1>My WishList</h1>

      {wishListData?.length > 0 ? (
        <Container>
          {wishListData.map((productDetails) => (
            <ProductCard
              button={
                <Button
                  varient="outlined"
                  fullWidth
                  icon={<AiOutlineShoppingCart size={16} />}
                  onClick={() => {
                    addProductToCart(productDetails._id, productDetails);
                    removeFromWishlist(productDetails._id);
                  }}
                >
                  Move to Cart
                </Button>
              }
              product={productDetails}
            />
          ))}
        </Container>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '20px',
          }}
        >
          <p>Discover a garden of fresh delights at our Fresh-Kart</p>

          <Link to={routeName.HOME} style={{textDecoration: 'none'}}>
            <Button varient="contained">Shop Now</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
