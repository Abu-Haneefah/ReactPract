// import React from 'react'

import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="w-max h-max mb-12 ">
        <nav className="flex gap-4 text-center justify-center mb-8 cursor-pointer font-semibold rounded-md p-2 border border-gray-200 w-max ">
          <Link to="featured">Featured Products</Link>
          <Link to="new">New Products</Link>
          <Link to="shipped">Shipped Products</Link>
        </nav>
        <input
          type="search"
          placeholder="Search for Products"
          className="w-max border rounded-md border-gray-200 p-3"
        />
      </div>

      <Outlet />
    </>
  );
}

export default Products;
