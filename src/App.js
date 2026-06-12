import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { CartProvider } from "./context/CartContext";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import OrderHistory from "./pages/OrderHistory";

import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/orders" element={<OrderHistory />} />
        </Routes>

        <Cart />
        <Analytics />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;