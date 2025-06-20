// import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-2xl text-center font-bold text-green-500">
        Home Page 🏠
      </div>
      <button
        className="bg-blue-300 text-white px-4 py-2 rounded mt-8 font-semibold cursor-pointer hover:bg-blue-400 transition-colors duration-300"
        onClick={() => navigate("order-summary")}
      >
        Place Order! 🔘
      </button>
    </>
  );
}

export default Home;
