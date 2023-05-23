/* eslint-disable no-unused-vars */
import * as React from 'react';
import {Link} from 'react-router-dom';
import {CategoryBox, Container, Title, TitleUnderline, Img} from './Home.style';
import {routeName} from '../../App.routes';

export function Home() {
  const [category, setCategory] = React.useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch('/api/categories');
      const response = await data.json();
      setCategory(response.categories);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Img
        src="https://cdn.cheapism.com/images/iStock-990558492.48a8c921.fill-1440x605.jpg"
        alt="Vegetables"
      />

      <Title>Our Categories</Title>
      <TitleUnderline />
      <Container>
        {/* <Link to={routeName.PRODUCTS}>Products </Link> */}

        {category.map(({categoryName, image}) => (
          <CategoryBox>
            <img src={image} height="200px" width="300px" alt={categoryName} />

            <Link
              to={routeName.PRODUCTS}
              state={{category: categoryName}}
              style={{textDecoration: 'none'}}
            >
              <h2> {categoryName} </h2>
            </Link>
          </CategoryBox>
        ))}
      </Container>
    </div>
  );
}
