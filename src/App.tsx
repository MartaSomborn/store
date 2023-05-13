import React from "react";
import "./App.css";
import { CardProvider } from "./context/CardContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
