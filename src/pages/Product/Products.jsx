/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, useContext} from 'react';
import {AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import {Link, useLocation} from 'react-router-dom';
import {Filter} from './Filter';
import {Container, Content} from './Products.style';
import {CounterContext} from '../../Context/CounterContext';
import {routeName} from '../../App.routes';
import {ProductContext} from '../../Context/ProductContext';
import {SearchContext} from '../../Context/SearchContext';
import {IconButton} from '../../Components/IconButton';
import {ColorPalette} from '../../Color';
import {Button} from '../../Components/Button';
import {MIN_PRICE_RANGE_VALUE} from './constant';
import {ProductCard} from '../../Components/ProductCard';
import {useFetch} from '../../useFetch';
import {Loader} from '../../Components/Loader';
import {PageError} from '../../Components/PageError';

export function Products() {
  const {state} = useLocation();

  const initialState = {
    range: 500,
    category: state?.category ? [state.category] : [],
    rating: 0,
    sort: '',
  };

  const {search} = useContext(SearchContext);
  const {productsData, setProductsData} = useContext(ProductContext);
  const [filterValue, setFilterValue] = useState(initialState);
  const {addItemToCart, addItemToWishlist, cartData, wishListData, removeFromWishlist} =
    useContext(CounterContext);

  const {data, isError, isLoading} = useFetch({url: '/api/products', methodType: 'GET'});
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <PageError />;
  }

  setProductsData(data.products);

  const filteredData = productsData
    .filter(
      (item) => item.price >= MIN_PRICE_RANGE_VALUE && item.price <= Number(filterValue.range),
    )
    .filter((item) =>
      filterValue.category.length > 0 ? filterValue.category.includes(item.categoryName) : true,
    )
    .filter((item) => (filterValue.rating > 0 ? item.rating >= filterValue.rating : true))
    .filter((item) => {
      if (item.name.toLowerCase().includes(search)) {
        return item;
      }

      return false;
    });

  if (filterValue.sort === 'asc') {
    filteredData.sort((a, b) => a.price - b.price);
  }
  if (filterValue.sort === 'desc') {
    filteredData.sort((a, b) => b.price - a.price);
  }

  return (
    <Container>
      <Filter
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        initialState={initialState}
      />
      <Content>
        {filteredData.length > 0 ? (
          filteredData.map((good) => (
            <ProductCard
              button={
                cartData.find((item) => item._id === good._id) ? (
                  <Link to={routeName.CART} style={{textDecoration: 'none'}}>
                    <Button varient="outlined" fullWidth icon={<AiOutlineShoppingCart size={16} />}>
                      Go to Cart
                    </Button>
                  </Link>
                ) : (
                  <Button
                    fullWidth
                    onClick={() => addItemToCart(good)}
                    icon={<AiOutlineShoppingCart size={16} />}
                  >
                    Add to Cart
                  </Button>
                )
              }
              product={good}
              wishListIconButton={
                <IconButton
                  onClick={() =>
                    wishListData.find((item) => item._id === good._id)
                      ? removeFromWishlist(good._id)
                      : addItemToWishlist(good)
                  }
                >
                  {wishListData.find((item) => item._id === good._id) ? (
                    <AiFillHeart fill={ColorPalette.primary.main} size={24} />
                  ) : (
                    <AiOutlineHeart size={24} />
                  )}
                </IconButton>
              }
            />
          ))
        ) : (
          <h2> Sorry, Product not avaliable.</h2>
        )}
      </Content>
    </Container>
  );
}

export default Products;
