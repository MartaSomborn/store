import React from "react";
import "./App.css";
import { CardProvider } from "./context/CardContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import Checkout from "./components/checkout/Checkout";
import { FavouriteProvider } from "./context/FavouriteContext";
import Favourites from "./components/favourites/Favourites";
import ProductPage from "./components/main/ProductPage";
import Biography from "./components/Category/Biography";
import Price from "./components/Category/Price";
import Business from "./components/Category/Business";
import ComputerInternet from "./components/Category/ComputerInternet";
import JobsCareers from "./components/Category/JobCareers";

function App() {
  return (
    <FavouriteProvider>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/favourite" element={<Favourites />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/price" element={<Price />} />
            <Route path="/business" element={<Business />} />
            <Route path="/computer" element={<ComputerInternet />} />
            <Route path="/jobcareers" element={<JobsCareers />} />
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </FavouriteProvider>
  );
}

export default App;
