import {v4 as uuid} from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Vegetables',
    description: "Nature's colorful and nutritious treasures for a healthy life.",
  },
  {
    _id: uuid(),
    categoryName: 'Fruits',
    description:
      "Nature's sweet and nutritious gift, bursting with vibrant flavors and essential vitamins.",
  },
  {
    _id: uuid(),
    categoryName: 'Bakery and Biscuits',
    description: 'Bakery delights and biscuit bliss, a treat for every bite!',
  },
  {
    _id: uuid(),
    categoryName: 'Dry-Fruits',
    description:
      "Nature's treasure, packed with flavor and health, dry fruits delight in every nibble.",
  },
  {
    _id: uuid(),
    categoryName: 'Eggs-Meat-Fish',
    description:
      'Savory wonders from land and sea, eggs, meat, and fish, the essence of culinary glee.',
  },
  {
    _id: uuid(),
    categoryName: 'Dairy',
    description:
      'From farm to table, creamy goodness that never fails to satisfy, dairy delights for every palate',
  },
];
