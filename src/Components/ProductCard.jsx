import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {routeName} from '../App.routes';

export const CardContainer = styled.div`
  position: relative;
  padding: 16px;
  gap: 16px;
  height: 450px;
  width: 300px;
  curser: pointer;
  background: white;
  &:hover {
    box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 5px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Data = styled.div`
  text-align: initial;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ActualPrice = styled.p`
  color: #a9a9a9;
  font-size: 16px;
  text-decoration: line-through;
`;

export const DiscountPrice = styled.p`
  color: black;
  font-size: 17px;
  font-weight: bold;
`;

export const ShowDiscount = styled.p`
  color: green;
  font-weight: bold;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: baseline;
  margin: 10px 0;
`;

export const IconContainer = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
`;
export function ProductCard({button, product, wishListIconButton}) {
  return (
    <CardContainer>
      <div style={{margin: '15px 0px'}}>
        <Link to={routeName.PRODUCT_DETAIL.create(product._id)} style={{textDecoration: 'none'}}>
          <img src={product.image} height="200px" width="200px" alt={product.name} />
        </Link>
      </div>

      <Data>
        <Link to={routeName.PRODUCT_DETAIL.create(product._id)} style={{textDecoration: 'none'}}>
          <h3>{product.name} </h3>
        </Link>

        <h5>
          {product.quantity} {product.quantityUnit}
        </h5>

        <PriceContainer>
          <DiscountPrice>
            <span>&#8377;</span>
            {Math.round((product.price - (product.price * product.discount) / 100) * 1)}
          </DiscountPrice>
          <ActualPrice>
            <span>&#8377;</span> : {product.price}/-
          </ActualPrice>
          <ShowDiscount> ({product.discount}% OFF)</ShowDiscount>
        </PriceContainer>

        {button}
      </Data>
      {wishListIconButton && <IconContainer>{wishListIconButton}</IconContainer>}
    </CardContainer>
  );
}
