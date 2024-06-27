import { useContext, useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cupcake"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("cupcake");
    }
  };

  const { user, logOut, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-sm"></span>;
  }

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const NavLinks = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "no-underline")}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "no-underline")}
        to={"/All-Art-&-craft-Items"}
      >
        All Art & craft Items
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "no-underline")}
        to={"/Add-Craft-Item"}
      >
        Add Craft Item
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box text-black space-y-6 z-10 w-36"
            >
              {NavLinks}
            </ul>
          </div>
          <NavLink to={"/"} className="flex items-center cursor-pointer">
            <img
              className="w-24"
              src={"https://i.ibb.co/y4fg4YM/Logo.png"}
              alt=""
            />
            <p className="text-2xl">Doodle Nation</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-6 text-2xl">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p className="text-xl mr-6 font-semibold lg:block hidden">
                {user.email}
              </p>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="rounded-full w-[40px]"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <label className="swap swap-rotate text-3xl">
                      <input
                        type="checkbox"
                        onChange={handleToggle}
                        checked={theme === "cupcake" ? false : true}
                      />

                      <div>
                        <MdOutlineWbSunny />
                      </div>
                      <div>
                        <WiMoonAltWaningCrescent5 />
                      </div>
                    </label>
                  </li>
                  <li>
                    <NavLink to={"/My-Art-&-craft-Items"}>
                      My Art&Craft List
                    </NavLink>
                  </li>
                  <li onClick={handleLogOut}>
                    <a href="">Sign Out</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline text-2xl" : "no-underline text-2xl"
              }
              to={"/login"}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
