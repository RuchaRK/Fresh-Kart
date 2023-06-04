import * as React from 'react';
import {
  PageTitle,
  FilterContainer,
  FilterOptions,
  RangeMarker,
  HorizantalDivider,
  InputLabelContainer,
} from './Products.style';
import {MIN_PRICE_RANGE_VALUE} from './constant';
import {Button} from '../../Components/Button';

const categories = [
  'Vegetables',
  'Fruits',
  'Bakery and Biscuits',
  'Dry-Fruits',
  'Eggs-Meat-Fish',
  'Dairy',
];

const rating = [
  {
    value: 4,
    displayName: '4 Stars and above',
  },
  {
    value: 3,
    displayName: '3 Stars and above',
  },
  {
    value: 2,
    displayName: '2 Stars and above',
  },
  {
    value: 1,
    displayName: '1 Stars and above',
  },
];

export function Filter({filterValue, setFilterValue, initialState}) {
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
  return (
    <FilterContainer>
      <PageTitle>
        <h2>Filters</h2>
        <Button
          style={{height: '24px', fontSize: '12px'}}
          varient="outlined"
          onClick={() => setFilterValue({...initialState, category: []})}
        >
          CLEAR ALL
        </Button>
      </PageTitle>

      <FilterOptions>
        <h3>Price</h3>
        <div>
          <RangeMarker>
            <span>Min: Rs {MIN_PRICE_RANGE_VALUE}</span>
            <span> Max: Rs {filterValue.range} </span>
          </RangeMarker>
          <input
            type="range"
            min="20"
            max="500"
            name="range"
            value={filterValue.range}
            style={{width: '100%'}}
            onChange={(event) => setFilterValue({...filterValue, range: event.target.value})}
          />
        </div>
      </FilterOptions>
      <HorizantalDivider />

      <FilterOptions>
        <h3>Category</h3>
        <div>
          {categories.map((category) => (
            <InputLabelContainer key={category}>
              <input
                type="checkbox"
                name="category"
                value={category}
                onChange={checkCategory}
                checked={filterValue.category.includes(category)}
              />
              {category}
            </InputLabelContainer>
          ))}
        </div>
      </FilterOptions>
      <HorizantalDivider />

      <FilterOptions>
        <h3>Rating</h3>
        <div>
          {rating.map((rate) => (
            <InputLabelContainer>
              <input
                type="radio"
                value={rate.value}
                name="rating"
                checked={filterValue.rating === rate.value}
                onChange={(event) =>
                  setFilterValue({...filterValue, rating: Number(event.target.value)})
                }
              />
              {rate.displayName}
            </InputLabelContainer>
          ))}
        </div>
      </FilterOptions>
      <HorizantalDivider />
      <FilterOptions>
        <h3>Sort By</h3>
        <div>
          <InputLabelContainer>
            <input
              type="radio"
              value="Low to High"
              name="price"
              checked={filterValue.sort === 'asc'}
              onChange={() => setFilterValue({...filterValue, sort: 'asc'})}
            />
            Price - Low to High
          </InputLabelContainer>
          <InputLabelContainer>
            <input
              type="radio"
              value="High to Low"
              name="price"
              checked={filterValue.sort === 'desc'}
              onChange={() => setFilterValue({...filterValue, sort: 'desc'})}
            />
            Price - High to Low
          </InputLabelContainer>
        </div>
      </FilterOptions>
      <HorizantalDivider />
    </FilterContainer>
  );
}
