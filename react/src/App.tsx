import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Error from "./pages/Error";
import Products from "./components/Product";
import FeaturedProducts from "./components/Featured";
import NewProducts from "./components/NewProducts";
import ShippedProducts from "./components/ShippedProducts";
import Users from "./components/Users";
import UsersDetails from "./components/UsersDetails";
import AdminUser from "./components/Admin";

const LazyAbout = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="shipped" element={<ShippedProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<UsersDetails />} />
          <Route path="admin" element={<AdminUser />} />
          <Route path=":userId" element={<UsersDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
