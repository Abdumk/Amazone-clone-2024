

import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Payment from "./components/pages/Payment/Payment";
import Orders from "./components/pages/Orders/Orders";
import Cart from "./components/pages/Cart/Cart";
import Auth from './components/pages/Auth/Auth';
import Results from './components/pages/Results/Results';
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";
const stripePromise = loadStripe(
  "pk_test_51QSyocGIRryRUydWjKU2dUK9VX6lZUF5GZVmKllchuaG2PSqNe5DXi2oRI8jLd13ibsS1SnTCsBuaGz9VScJ1gd700qfvNQOqE"
);

function Routinger() {
  return (
    <Router basename="/Amazone-clone-2024">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/payments" element={<Payment />} /> */}
        <Route path="/payments" element={
          <ProtectRoute msg={"you must log in to pay"} redirect={'/payments'}>
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
          </ProtectRoute>
        } />

        {/* <Route path="/orders" element={<Orders />} /> */}
        <Route path="/orders" element={
          <ProtectRoute
           msg={"you must log in to access your orders"} 
           redirect={'/orders'}>
          
          <Orders /> </ProtectRoute> }/>

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routinger;

