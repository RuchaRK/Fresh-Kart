import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: 'Onion',
    quantity: '1000',
    quantityUnit:"gram",
    price: '25',
    categoryName: 'vegetables',
  },
  {
    _id: uuid(),
    name: 'Tomato',
    quantityUnit:'gram',
    quantity: '500',
    price: '16',
    categoryName: 'vegetables',
  },
  {
    _id: uuid(),
    name: 'Lady Finger',
    quantityUnit:'gram',
    quantity: '250',
    price: '15',
    categoryName: 'vegetables',
  },
  {
    _id: uuid(),
    name: 'Green Chillies',
    quantityUnit:'gram',
    quantity: '100',
    price: '6',
    categoryName: 'vegetables',
  },
  {
    _id: uuid(),
    name: 'Organic Spinach / Palak',
    quantityUnit:'unit',
    quantity: '1',
    price: '44',
    categoryName: 'vegetables',
  },






  {
    _id: uuid(),
    name: 'Banana',
    quantityUnit:'gram',
    quantity: '1000',
    price: '31',
    categoryName: 'fruits',
  },
  {
    _id: uuid(),
    name: 'Pomogranates',
    quantityUnit:'gram',
    quantity: '1000',
    price: '31',
    categoryName: 'fruits',
  },
  {
    _id: uuid(),
    name: 'Coconut',
    quantityUnit:'unit',
    quantity: '1',
    price: '47',
    categoryName: 'fruits',
  },
  {
    _id: uuid(),
    name: 'Guava',
    quantityUnit:'gram',
    quantity: '1000',
    price: '64',
    categoryName: 'fruits',
  },
  {
    _id: uuid(),
    name: 'Kesar Mangoes',
    quantityUnit:'gram',
    quantity: '1000',
    price: '80',
    categoryName: 'fruits',
  },



// all bakery products are in gram
  {
    _id: uuid(),
    name: 'Bread - Brown',
    quantityUnit:'gram',
    quantity: '400',
    price: '55',
    categoryName: 'bakery_biscuits',
  },
  {
    _id: uuid(),
    name: 'White Sandwich Bread',
    quantityUnit:'gram',
    quantity: '400',
    price: '50',
    categoryName: 'bakery_biscuits',
  },
  {
    _id: uuid(),
    name: 'Crozzo Assorted Croissants Pack Of 2',
    quantityUnit:'unit',
    quantity: '1',
    price: '229',
    categoryName: 'bakery_biscuits',
  },
  {
    _id: uuid(),
    name: 'Multigrain Sandwich Bread',
    quantityUnit:'gram',
    quantity: '150',
    price: '70',
    categoryName: 'bakery_biscuits',
  },
  {
    _id: uuid(),
    name: 'Brownie Cottage Pure Hot Fudge',
    quantityUnit:'unit',
    quantity: '1',
    price: '230',
    categoryName: 'bakery_biscuits',
  },



  
  {
    _id: uuid(),
    name: 'Almonds',
    quantityUnit:'gram',
    quantity: '200',
    price: '181',
    categoryName: 'dry-fruits',
  },
  {
    _id: uuid(),
    name: 'Cashews',
    quantityUnit:'gram',
    quantity: '200',
    price: '210',
    categoryName: 'dry-fruits',
  },
  {
    _id: uuid(),
    name: 'Raisins',
    quantityUnit:'gram',
    quantity: '200',
    price: '62',
    categoryName: 'dry-fruits',
  },
  {
    _id: uuid(),
    name: 'Salted Pistachios',
    quantityUnit:'gram',
    quantity: '200',
    price: '272',
    categoryName: 'dry-fruits',
  },
  {
    _id: uuid(),
    name: 'Mix Berries',
    quantityUnit:'gram',
    quantity: '200',
    price: '365',
    categoryName: 'dry-fruits',
  },






  {
    _id: uuid(),
    name: 'Full Cream Fresh Milk ',
    quantityUnit:'ml',
    quantity: '500',
    price: '33',
    categoryName: 'dairy',
  },
  {
    _id: uuid(),
    name: 'Cheese Slices',
    quantityUnit:'gram',
    quantity: '200',
    price: '138',
    categoryName: 'dairy',
  },
  {
    _id: uuid(),
    name: 'Fresh Malai Paneer',
    quantityUnit:'gram',
    quantity: '200',
    price: '91',
    categoryName: 'dairy',
  },
  {
    _id: uuid(),
    name: 'Salted Butter',
    quantityUnit:'gram',
    quantity: '200',
    price: '114',
    categoryName: 'dairy',
  },
  {
    _id: uuid(),
    name: 'Spiced Buttermilk',
    quantityUnit:'ml',
    quantity: '500',
    price: '22',
    categoryName: 'dairy',
  },




];
