// Layouts
import { HeaderOnly, SidebarLayout, ErrorLayout } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Accessories from '~/pages/Accessories';
import Contact from '~/pages/Contact';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/:slug', component: Product },
    { path: '/cart', component: Cart },
    { path: '*', layout: ErrorLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
