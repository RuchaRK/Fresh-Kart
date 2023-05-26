import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {AiFillStar, AiFillHeart, AiOutlineShoppingCart, AiOutlineStar} from 'react-icons/ai';
import {ProductContext} from '../../Context/ProductContext';
import {
  ShowProduct,
  ImageContainer,
  ProductData,
  DiscountPrice,
  ActualPrice,
  SecondaryButton,
  InfoStyle,
  Info,
  Bandge,
  PageTitle,
  DisplayDiscount,
} from './ProductDetail.style';
import {CounterContext} from '../../Context/CounterContext';

export function ProductDetail() {
  const {id} = useParams();
  const {productsData} = useContext(ProductContext);
  const {addItemToCart, addItemToWishlist} = useContext(CounterContext);

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
          {Math.round((productToShow.price - (productToShow.price * 10) / 100) * 1)}
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

        <SecondaryButton onClick={() => addItemToCart(productToShow)}>
          <AiOutlineShoppingCart />
          Add To Cart
        </SecondaryButton>

        <SecondaryButton onClick={() => addItemToWishlist(productToShow)}>
          <AiFillHeart />
          Add to WishList
        </SecondaryButton>
      </ProductData>
    </ShowProduct>
  );
}
