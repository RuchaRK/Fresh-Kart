import * as React from 'react';
import {CategoryBox} from './Home.style';

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
      <h1> Hi on home page hmnnb</h1>
      {category.map(({categoryName}) => (
        <CategoryBox>
          <h1> {categoryName}</h1>
        </CategoryBox>
      ))}
    </div>
  );
}
