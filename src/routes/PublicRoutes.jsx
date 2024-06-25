import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../auth/Login";
import Home from "../Home/Home";
import Register from "../auth/Register";
import Details from "../Home/products/itemDetails/Details";
import ErrorPage from "../error-page";
import PrivetRoute from "./PrivateRoute";
import AddCraftItem from "../Home/Add Craft Item/AddCraftItem";
import MyArtAndCraftList from "../Home/My Art&Craft List/MyArt&CraftList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/items/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Add-Craft-Item",
        element: (
          <PrivetRoute>
            <AddCraftItem />
          </PrivetRoute>
        ),
      },
      {
        path: "/All-Art-&-craft-Items",
        element: (
          <PrivetRoute>
            <MyArtAndCraftList />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
