import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { NavLink } from "react-router-dom";

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
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box text-black space-y-6 z-10"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="flex items-center cursor-pointer">
            <img
              className="w-24"
              src={"https://i.ibb.co/y4fg4YM/Logo.png"}
              alt=""
            />
            <p className="text-2xl">Doodle Nation</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-6">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "no-underline"
            }
            to={"/login"}
          >
            Login
          </NavLink>
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
