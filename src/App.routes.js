export const routeName = {
  HOME: '/',
  PRODUCTS: '/products',
  CART: '/cart',
  WISHLIST: '/wishlist',
  LOGIN: '/login',
  SIGNUP: '/signin',
  ADDRESS: '/address',
  MOCKMAN: '/mockman',
  PRODUCT_DETAIL: {
    template: '/products/:id',
    create: (id) => `/products/${id}`,
  },
};
