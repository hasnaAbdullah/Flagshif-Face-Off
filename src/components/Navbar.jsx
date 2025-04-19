import React from "react";
import { NavLink } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { BaggageClaim } from "lucide-react";
function Navbar() {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-700" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-700" : "")}
          to="about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-700" : "")}
          to="/errorpage"
        >
          <BaggageClaim />
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-700" : "")}
          to="/favorites"
        >
          <MdBookmarkAdd size={26} />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-0 m-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="text-2xl ml-2 font-bold text-teal-900">
          FlagshipFaceOff
        </NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu p-0 m-0 menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
}

export default Navbar;
