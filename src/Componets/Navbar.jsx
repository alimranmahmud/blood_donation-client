import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/requests" className={({ isActive }) => isActive ? "text-red-600 font-semibold" : ""}>
          All Requests
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" className={({ isActive }) => isActive ? "text-red-600 font-semibold" : ""}>
          Search
        </NavLink>
      </li>
      <li>
        <NavLink to="/donate" className={({ isActive }) => isActive ? "text-red-600 font-semibold" : ""}>
          Donate
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50"
    >
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-3 shadow-lg space-y-1"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          Blood<span className="text-gray-800">Care</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-3">
        {user && (
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/dashboard" className="btn btn-outline btn-error">
              Dashboard
            </Link>
          </motion.div>
        )}

        {user ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="btn btn-error text-white"
          >
            Logout
          </motion.button>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/login" className="btn btn-error text-white">
              Login
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
