import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../auth/Login";
import Home from "../Home/Home";
import Register from "../auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
