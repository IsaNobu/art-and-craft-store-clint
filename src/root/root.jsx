import { Outlet } from "react-router-dom";
import NavBar from "../commonRoutes/NavBar";
import Footer from "../commonRoutes/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
