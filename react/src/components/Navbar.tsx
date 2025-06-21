// import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "Gold" : "white",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
  });
  return (
    <div>
      <nav className="flex justify-center items-center p-2 gap-4 rounded bg-gray-500 text-white mb-12 w-max">
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={navLinkStyle}>
          About
        </NavLink>
        <NavLink to="/products" style={navLinkStyle}>
          Products
        </NavLink>
        <NavLink to="/users" style={navLinkStyle}>
          Users
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
