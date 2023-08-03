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
import FilterBooks from "./components/Search/FilterBooks";
import { CategoryProvider } from "./context/CategoryContext";
import CategoryFilter from "./components/Category/CategoryFilter";

function App() {
  return (
    <FavouriteProvider>
      <CardProvider>
        <CategoryProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/favourite" element={<Favourites />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/biography" element={<CategoryFilter />} />
              <Route path="/business" element={<CategoryFilter />} />
              <Route path="/computer" element={<CategoryFilter />} />
              <Route path="/careers" element={<CategoryFilter />} />
              <Route path="/search/:bookname" element={<FilterBooks />} />
            </Routes>
          </BrowserRouter>
        </CategoryProvider>
      </CardProvider>
    </FavouriteProvider>
  );
}

export default App;
