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
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_zW9x_G3vnqV-DMD2ag1zJQg67pz190CQt-Zxjxmsw4-bIaTDojMlEnqWn-s6701lWk&usqp=CAU',
  },
  {
    _id: uuid(),
    categoryName: 'Fruits',
    description:
      "Nature's sweet and nutritious gift, bursting with vibrant flavors and essential vitamins.",
    image: 'https://media.sciencephoto.com/image/h1101260/800wm',
  },
  {
    _id: uuid(),
    categoryName: 'Bakery and Biscuits',
    description: 'Bakery delights and biscuit bliss, a treat for every bite!',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
  },
  {
    _id: uuid(),
    categoryName: 'Dry-Fruits',
    description:
      "Nature's treasure, packed with flavor and health, dry fruits delight in every nibble.",
    image: 'https://www.vlccinstitute.com/sites/default/files/2022-07/Dry-Fruits-Nuts-Seeds.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'Eggs-Meat-Fish',
    description:
      'Savory wonders from land and sea, eggs, meat, and fish, the essence of culinary glee.',
    image:
      'https://live-production.wcms.abc-cdn.net.au/ca9fb4ffb923092c9701ad5f993e4c43?impolicy=wcms_crop_resize&cropH=1954&cropW=2931&xPos=34&yPos=0&width=862&height=575',
  },
  {
    _id: uuid(),
    categoryName: 'Dairy',
    description:
      'From farm to table, creamy goodness that never fails to satisfy, dairy delights for every palate',
    image: 'https://etimg.etb2bimg.com/photo/96331122.cms',
  },
];
