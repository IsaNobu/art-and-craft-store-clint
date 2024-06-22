import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../auth/Login";
import Home from "../Home/Home";

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
    ],
  },
]);

export default router;
