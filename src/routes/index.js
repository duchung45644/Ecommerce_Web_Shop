// Layouts
import { HeaderOnly, SidebarLayout, ErrorLayout } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Accessories from '~/pages/Accessories';
import Contact from '~/pages/Contact';
import Product from '~/pages/Product';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact, layout: ErrorLayout },
    { path: '/catalog', component: Catalog },
    { path: '/accessories', component: Accessories, layout: ErrorLayout },
    { path: '/catalog/:slug', component: Product },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
