import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";

import Payment from "./components/pages/Payment/Payment";
import Orders from "./components/pages/Orders/Orders";
import Cart from "./components/pages/Cart/Cart";
import SignIn from './components/pages/Auth/SignIn';
import Results from './components/pages/Results/Results';
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
function Routinger() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignIn />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />


      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  )
}

export default Routinger 