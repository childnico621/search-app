import HomePage from '../../pages/Home/Index';
import ResultPage from '../../pages/ResultPage/Index';
import ProductDetailPage from '../../pages/ProductDetailPage/Index';

const customRoutes = [

  {
    path: '/',
    component: HomePage
  },
  {
    path: '/items',
    component: ResultPage
  },
  {
    path: '/items/:id',
    component: ProductDetailPage
  },

];

export default customRoutes;

