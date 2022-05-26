//Importamos los Layouts
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
//Importamos los Pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";
import Home from "../pages/home";
import Notfound from "../pages/NotFound/NotFound";
import Contact from "../pages/contact";
import Admin from "../pages/Admin";

// Routes Admin
const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: AdminSingIn,
  },
];

// Routes Home, NotFound
const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: LayoutAdmin,
    component: Notfound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;
