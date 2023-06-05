import * as React from 'react';
import {Link} from 'react-router-dom';
import {
  CategoryBox,
  Container,
  Title,
  TitleUnderline,
  BackgroundImage,
  CategoryName,
  MainImage,
  ImageText,
} from './Home.style';
import {routeName} from '../../App.routes';
import {useFetch} from '../../useFetch';
import {Loader} from '../../Components/Loader';
import {PageError} from '../../Components/PageError';

export function Home() {
  const {data, isError, isLoading} = useFetch({url: '/api/categories', methodType: 'GET'});
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <PageError />;
  }

  return (
    <div>
      <MainImage>
        <BackgroundImage />

        <ImageText>
          <Link to={routeName.PRODUCTS} style={{textDecoration: 'none', color: 'black'}}>
            Discover A World of Fresh Flavors at Your Fingertips
          </Link>
        </ImageText>
      </MainImage>

      <Title>Our Categories</Title>
      <TitleUnderline />
      <Container>
        {data.categories.map(({categoryName, image}) => (
          <Link
            to={routeName.PRODUCTS}
            state={{category: categoryName}}
            style={{textDecoration: 'none'}}
          >
            <CategoryBox img={image}>
              <CategoryName> {categoryName} </CategoryName>
            </CategoryBox>
          </Link>
        ))}
      </Container>
    </div>
  );
}
