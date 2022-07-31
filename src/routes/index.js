// Layouts
import { HeaderOnly, SidebarLayout } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Accessories from '~/pages/Accessories';
import Contact from '~/pages/Contact';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/catalog', component: Catalog },
    { path: '/accessories', component: Accessories },
    // { path: '/accessories', component: Accessories, layout: SidebarLayout },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
