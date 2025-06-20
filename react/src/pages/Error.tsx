// import React from 'react'
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-4xl text-center font-bold text-red-500">
        Oops.404 Not Found 🤖❌
      </div>
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded mt-8 font-semibold cursor-pointer hover:bg-blue-500 transition-colors duration-300"
        onClick={() => navigate(-1)}
      >
        Go Back 🔙
      </button>
    </>
  );
}

export default Error;
