import { About, Basket, Blog, Help, Home, Product, Store, User } from '../pages';

const HOME_ROUTE = '/';
const USER_ROUTE = '/user';
const BASKET_ROUTE = '/cart';
const STORE_ROUTE = '/store';
const STORE_FILTER_ROUTE = '/store/:filterProp';
const PRODUCT_ROUTE = '/product/:id';
const ABOUT_ROUTE = '/about';
const BLOG_ROUTE = '/blog';
const HELP_ROUTE = '/help';

export const routes = [
  { path: HOME_ROUTE, Component: Home },
  { path: ABOUT_ROUTE, Component: About },
  { path: BLOG_ROUTE, Component: Blog },
  { path: HELP_ROUTE, Component: Help },
  { path: STORE_ROUTE, Component: Store },
  { path: STORE_FILTER_ROUTE, Component: Store },
  { path: PRODUCT_ROUTE, Component: Product },
];

export const authRoutes = [
  { path: BASKET_ROUTE, Component: Basket },
  { path: USER_ROUTE, Component: User },
];
