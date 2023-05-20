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
      <Img src="./images/veggies.jpg" alt="Vegetables" />

      <Title>Our Categories</Title>
      <TitleUnderline />
      <Container>
        {/* <Link to={routeName.PRODUCTS}>Products </Link> */}

        {category.map(({categoryName}) => (
          <CategoryBox>
            <Link to={routeName.PRODUCTS} state={{category: categoryName}}>
              {categoryName}
            </Link>
          </CategoryBox>
        ))}
      </Container>
    </div>
  );
}
