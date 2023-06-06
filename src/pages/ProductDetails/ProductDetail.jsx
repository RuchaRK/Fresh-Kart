import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import {AiFillStar, AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import {ProductContext} from '../../Context/ProductContext';
import {routeName} from '../../App.routes';
import {
  ShowProduct,
  ImageContainer,
  ProductData,
  DiscountPrice,
  ActualPrice,
  InfoStyle,
  Info,
  Bandge,
  PageTitle,
  DisplayDiscount,
} from './ProductDetail.style';
import {CounterContext} from '../../Context/CounterContext';
import {Button} from '../../Components/Button';

export function ProductDetail() {
  const {id} = useParams();
  const {productsData} = useContext(ProductContext);
  const {cartData, wishListData, addItemToCart, addItemToWishlist} = useContext(CounterContext);

  // eslint-disable-next-line no-underscore-dangle
  const productToShow = productsData.find((item) => item._id === id);

  return (
    <ShowProduct>
      <ImageContainer>
        <Bandge>
          {productToShow.rating} <AiFillStar />
        </Bandge>
        <img
          src={productToShow.image}
          height="500px"
          width="auto"
          alt={productToShow.name}
          style={{borderRadius: 'inherit'}}
        />
      </ImageContainer>

      <ProductData>
        <PageTitle>
          <h2>{productToShow.name}</h2>

          <DisplayDiscount>Get FLAT {productToShow.discount}% OFF</DisplayDiscount>
        </PageTitle>

        <ActualPrice>
          Product MRP :<span>&#8377;</span> : {productToShow.price}/-
        </ActualPrice>

        <DiscountPrice>
          Selling Price:
          <span>&#8377;</span>
          {Math.round(
            (productToShow.price - (productToShow.price * productToShow.discount) / 100) * 1,
          )}
        </DiscountPrice>

        <InfoStyle>
          <Info> Avaliable-In:</Info> {productToShow.quantity} {productToShow.quantityUnit}
        </InfoStyle>

        <InfoStyle>
          <Info>Description:</Info> {productToShow.description}
        </InfoStyle>
        <InfoStyle>
          <Info> Shelf-Life:</Info> {productToShow.shelfLife}
        </InfoStyle>
        <InfoStyle>
          <Info> Package-With:</Info> {productToShow.packageWith}
        </InfoStyle>

        <div style={{display: 'flex', marginTop: '10px', gap: '10px', flexDirection: 'column'}}>
          {cartData.find((item) => item._id === productToShow._id) ? (
            <Link to={routeName.CART} style={{textDecoration: 'none'}}>
              <Button varient="outlined" fullWidth icon={<AiOutlineShoppingCart size={16} />}>
                Go to Cart
              </Button>
            </Link>
          ) : (
            <Button
              fullWidth
              onClick={() => addItemToCart(productToShow)}
              icon={<AiOutlineShoppingCart size={16} />}
            >
              Add to Cart
            </Button>
          )}

          {wishListData.find((item) => item._id === productToShow._id) ? (
            <Link to={routeName.WISHLIST} style={{textDecoration: 'none'}}>
              <Button varient="outlined" fullWidth icon={<AiFillHeart size={16} />}>
                Go to WishList
              </Button>
            </Link>
          ) : (
            <Button
              fullWidth
              onClick={() => addItemToWishlist(productToShow)}
              icon={<AiFillHeart size={16} />}
            >
              Add to WishList
            </Button>
          )}
        </div>
      </ProductData>
    </ShowProduct>
  );
}
