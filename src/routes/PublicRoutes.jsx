import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../auth/Login";
import Home from "../Home/Home";
import Register from "../auth/Register";
import Details from "../Home/products/itemDetails/Details";
import ErrorPage from "../error-page";
import PrivetRoute from "./PrivateRoute";
import AddCraftItem from "../Add Craft Item/AddCraftItem";
import MyArtAndCraftList from "../My Art&Craft List/MyArt&CraftList";
import CraftedItemsDetails from "../CraftedItems/CraftedItemsDetails";
import AllArtAndCraftItems from "../all arts and craft/AllArt&CraftItems";
import MyArtAndCraftListUpdatePage from "../My Art&Craft List/MyArt&CraftListUpdatePage";

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
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-store-server-nine.vercel.app/items/${params.id}`
          ),
      },
      {
        path: "/item-details/:id",
        element: (
          <PrivetRoute>
            <CraftedItemsDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-store-server-nine.vercel.app/item-details/${params.id}`
          ),
      },
      {
        path: "/My-Art-&-craft-Items/My-Arts-And-Crafts-Update-Page/:id",
        element: (
          <PrivetRoute>
            <MyArtAndCraftListUpdatePage />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-store-server-nine.vercel.app/item-details/${params.id}`
          ),
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
        path: "/My-Art-&-craft-Items",
        element: (
          <PrivetRoute>
            <MyArtAndCraftList />
          </PrivetRoute>
        ),
        loader: () =>
          fetch("https://art-and-craft-store-server-nine.vercel.app/data"),
      },
      {
        path: "/All-Art-&-craft-Items",
        element: (
          <PrivetRoute>
            <AllArtAndCraftItems />
          </PrivetRoute>
        ),
        loader: () =>
          fetch("https://art-and-craft-store-server-nine.vercel.app/data"),
      },
    ],
  },
]);

export default router;
