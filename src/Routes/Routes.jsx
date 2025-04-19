import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import PhoneDetails from "../pages/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("phones.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/phone-details",
        Component: PhoneDetails,
      },
    ],
  },
]);
export default router;
