/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useEffect, useState, useContext} from 'react';
import {AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import {Link, useLocation} from 'react-router-dom';
import {
  Container,
  Content,
  Filter,
  FilterOptions,
  PageTitle,
  SecondaryButton,
  CardContainer,
  IconContainer,
  IconButtonRed,
  ClearButton,
  ActualPrice,
  DiscountPrice,
  PriceContainer,
  ShowDiscount,
  Data,
} from './Products.style';
import {CounterContext} from '../../Context/CounterContext';
import {routeName} from '../../App.routes';
import {ProductContext} from '../../Context/ProductContext';

const MIN_RANGE_VALUE = 15;

export const Products = () => {
  const {state} = useLocation();
  const initialState = {
    range: 500,
    category: state?.category ? [state.category] : [],
    rating: 0,
    sort: '',
  };
  const {productsData, setProductsData} = useContext(ProductContext);
  const [filterValue, setFilterValue] = useState(initialState);
  const {addItemToCart, addItemToWishlist, cartData, wishListData, removeFromWishlist} =
    useContext(CounterContext);

  const fetchData = async () => {
    try {
      const data = await fetch('/api/products');
      const response = await data.json();
      setProductsData(response.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkCategory = (event) => {
    if (!filterValue.category.includes(event.target.value)) {
      setFilterValue({
        ...filterValue,
        category: filterValue.category.concat(event.target.value),
      });
    } else {
      setFilterValue({
        ...filterValue,
        category: filterValue.category.filter((element) => element !== event.target.value),
      });
    }
  };

  const filteredData = productsData
    .filter((item) => item.price >= MIN_RANGE_VALUE && item.price <= Number(filterValue.range))
    .filter((item) =>
      filterValue.category.length > 0 ? filterValue.category.includes(item.categoryName) : true,
    )
    .filter((item) => (filterValue.rating > 0 ? item.rating >= filterValue.rating : true));

  if (filterValue.sort === 'asc') {
    filteredData.sort((a, b) => a.price - b.price);
  }
  if (filterValue.sort === 'dsc') {
    filteredData.sort((a, b) => b.price - a.price);
  }

  return (
    <Container>
      <Filter>
        <PageTitle>
          <h2>Filters</h2>
          <ClearButton onClick={() => setFilterValue({...initialState, category: []})}>
            CLEAR ALL
          </ClearButton>
        </PageTitle>

        <FilterOptions>
          <h3>Price</h3>
          <div>
            <p>
              Min: Rs {MIN_RANGE_VALUE} - Max: Rs {filterValue.range}
            </p>

            <input
              type="range"
              min="20"
              max="500"
              name="range"
              value={filterValue.range}
              onChange={(event) => setFilterValue({...filterValue, range: event.target.value})}
            />
          </div>
        </FilterOptions>

        <FilterOptions>
          <h3>Category</h3>
          <div>
            <div>
              <input
                type="checkbox"
                name="category"
                value="Vegetables"
                onChange={checkCategory}
                checked={filterValue.category.includes('Vegetables')}
              />
              Vegetables
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                value="Fruits"
                onChange={checkCategory}
                checked={filterValue.category.includes('Fruits')}
              />
              Fruits
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                value="Bakery and Biscuits"
                onChange={checkCategory}
                checked={filterValue.category.includes('Bakery and Biscuits')}
              />
              Bakery and Biscuits
            </div>

            <div>
              <input
                type="checkbox"
                name="category"
                value="Dry-Fruits"
                onChange={checkCategory}
                checked={filterValue.category.includes('Dry-Fruits')}
              />
              Dry-Fruits
            </div>

            <div>
              <input
                type="checkbox"
                name="category"
                value="Eggs-Meat-Fish"
                onChange={checkCategory}
                checked={filterValue.category.includes('Eggs-Meat-Fish')}
              />
              Eggs-Meat-Fish
            </div>

            <div>
              <input
                type="checkbox"
                name="category"
                value="Dairy"
                onChange={checkCategory}
                checked={filterValue.category.includes('Dairy')}
              />
              Dairy
            </div>
          </div>
        </FilterOptions>

        <FilterOptions>
          <h3> Rating</h3>
          <div>
            <div>
              <input
                type="radio"
                value="4"
                name="rating"
                checked={filterValue.rating === 4}
                onChange={(event) =>
                  setFilterValue({...filterValue, rating: Number(event.target.value)})
                }
              />
              4 Stars and above
            </div>
            <div>
              <input
                type="radio"
                value="3"
                name="rating"
                checked={filterValue.rating === 3}
                onChange={(event) =>
                  setFilterValue({...filterValue, rating: Number(event.target.value)})
                }
              />
              3 Stars and above
            </div>
            <div>
              <input
                type="radio"
                value="2"
                name="rating"
                checked={filterValue.rating === 2}
                onChange={(event) =>
                  setFilterValue({...filterValue, rating: Number(event.target.value)})
                }
              />
              2 Stars and above
            </div>
            <div>
              <input
                type="radio"
                value="1"
                name="rating"
                checked={filterValue.rating === 1}
                onChange={(event) =>
                  setFilterValue({...filterValue, rating: Number(event.target.value)})
                }
              />
              1 Stars and above
            </div>
          </div>
        </FilterOptions>
        <FilterOptions>
          <h3>Sort By</h3>
          <div>
            <div>
              <input
                type="radio"
                value="Low to High"
                name="price"
                checked={filterValue.sort === 'asc'}
                onChange={() => setFilterValue({...filterValue, sort: 'asc'})}
              />
              Price - Low to High
            </div>
            <div>
              <input
                type="radio"
                value="High to Low"
                name="price"
                checked={filterValue.sort === 'desc'}
                onChange={() => setFilterValue({...filterValue, sort: 'desc'})}
              />
              Price - High to Low
            </div>
          </div>
        </FilterOptions>
      </Filter>

      <Content>
        {filteredData.map((goods) => {
          console.log(
            cartData.find((item) => item._id === goods._id),
            goods,
            cartData,
          );

          console.log(productsData);
          return (
            <>
              <CardContainer>
                <div style={{margin: '15px 0px'}}>
                  <Link
                    to={routeName.PRODUCT_DETAIL.create(goods._id)}
                    style={{textDecoration: 'none'}}
                  >
                    <img src={goods.image} height="200px" width="200px" alt={goods.name} />
                  </Link>
                </div>

                <Data>
                  <Link
                    to={routeName.PRODUCT_DETAIL.create(goods._id)}
                    style={{textDecoration: 'none'}}
                  >
                    <h3 style={{margin: '10px 5px'}}>{goods.name} </h3>
                  </Link>

                  <h5 style={{margin: '10px 5px'}}>
                    {goods.quantity} {goods.quantityUnit}
                  </h5>

                  <PriceContainer>
                    <DiscountPrice>
                      <span>&#8377;</span>
                      {Math.round((goods.price - (goods.price * goods.discount) / 100) * 1)}
                    </DiscountPrice>
                    <ActualPrice>
                      <span>&#8377;</span> : {goods.price}/-
                    </ActualPrice>
                    <ShowDiscount> ({goods.discount}% OFF)</ShowDiscount>
                  </PriceContainer>

                  {cartData.find((item) => item._id === goods._id) ? (
                    <SecondaryButton>
                      <Link
                        to={routeName.CART}
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        Go to Cart <AiOutlineShoppingCart size={16} />
                      </Link>
                    </SecondaryButton>
                  ) : (
                    <SecondaryButton onClick={() => addItemToCart(goods)}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                        Add To Cart <AiOutlineShoppingCart size={16} />
                      </div>
                    </SecondaryButton>
                  )}
                </Data>

                <IconContainer>
                  <IconButtonRed
                    onClick={() =>
                      wishListData.find((item) => item._id === goods._id)
                        ? removeFromWishlist(goods._id)
                        : addItemToWishlist(goods)
                    }
                    style={{border: 'none', borderRadius: '50%'}}
                  >
                    {wishListData.find((item) => item._id === goods._id) ? (
                      <AiFillHeart fill="red" size={25} />
                    ) : (
                      <AiOutlineHeart fill="red" size={25} />
                    )}
                  </IconButtonRed>
                </IconContainer>
              </CardContainer>
            </>
          );
        })}
      </Content>
    </Container>
  );
};

export default Products;
