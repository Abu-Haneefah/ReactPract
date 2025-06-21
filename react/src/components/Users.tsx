// import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter === active");
  console.log(showActiveUsers);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="w-max font-semibold rounded-md border border-gray-200 p-2 text-green-400 cursor-pointer">
        Users 1
      </h2>
      <h2 className="w-max font-semibold rounded-md border border-gray-200 p-2 text-green-500 cursor-pointer">
        Users 2
      </h2>
      <h2 className="w-max font-semibold rounded-md border border-gray-200 p-2 text-green-600 cursor-pointer">
        Users 3
      </h2>
      <button
        className="border rounded-md border-gray-200 p-2 w-max cursor-pointer hover:bg-amber-500 hover:text-white"
        onClick={() => setSearchParams({ filter: "active" })}
      >
        Active Users
      </button>
      <button
        className="border rounded-md border-gray-200 p-2 w-max cursor-pointer hover:bg-amber-500 hover:text-white"
        onClick={() => setSearchParams()}
      >
        Reset Filter
      </button>
      <Outlet />
      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing all Users</h2>
      )}
    </div>
  );
}

export default Users;
