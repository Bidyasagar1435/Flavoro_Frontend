import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Error from "./Pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import FoodDetails from "./Pages/FoodDetails";
import ViewCartItem from "./components/ViewCartItem";
import CartDetails from "./Pages/CartDetails";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
        <Route path="/food-details/:id" element={<FoodDetails />} />
        <Route path="/cart-details" element={<CartDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <ViewCartItem />
    </BrowserRouter>
  );
}

export default App;
