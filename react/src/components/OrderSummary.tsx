// import React from "react";
import { useNavigate } from "react-router-dom";
function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-2xl text-center font-bold text-pink-500">
        Order Confirmed 📝
      </div>
      <div className="text-lg text-center mt-4">
        Thank you for your order! Your order has been successfully placed.
        <br />
        We will notify you once it is ready for pickup.
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

export default OrderSummary;
