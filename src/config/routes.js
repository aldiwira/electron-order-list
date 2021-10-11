import { Login, Order } from '../scenes';

const routes = [
  {
    name: 'login',
    path: '/',
    component: Login,
  },
  {
    name: 'order',
    path: '/order',
    component: Order,
  },
];

export default routes;
