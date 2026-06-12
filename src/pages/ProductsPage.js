import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import CartSidebar from "../components/CartSidebar";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/data";

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const { setCartOpen } = useCart();

  // Track screen width for responsive layout
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts = PRODUCTS.filter((product) => {
    const productBadge = product.badge?.toLowerCase();
    const productCategory = product.category?.toLowerCase();

    const matchCategory =
      filter === "all"
        ? true
        : filter === "new"
        ? productBadge === "new"
        : filter === "sale"
        ? productBadge === "sale"
        : filter === "hot"
        ? productBadge === "hot"
        : productCategory === filter;

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", color: "white" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#0b1120",
          padding: isMobile ? "15px 20px" : "20px 60px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          borderBottom: "1px solid #1e293b",
          position: isMobile ? "relative" : "fixed",
          top: 0,
          zIndex: 100,
          boxSizing: "border-box",
          gap: isMobile ? "12px" : "0",
        }}
      >
        <h1 style={{ color: "#4f83ff", fontSize: isMobile ? "26px" : "35px", margin: 0 }}>
          Nexora 🚀
        </h1>

        <div
          style={{
            display: "flex",
            gap: isMobile ? "15px" : "30px",
            alignItems: "center",
            flexWrap: "wrap",
            order: isMobile ? 3 : 2,
          }}
        >
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/products" style={navLinkStyle}>Products</Link>
          <Link to="/orders" style={navLinkStyle}>Orders</Link>

          <button
            onClick={() => setCartOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              fontFamily: "inherit",
              padding: 0,
            }}
          >
            Cart 🛒
          </button>

          <Link
            to="/login"
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px 22px",
              borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: "#1a1a2e",
            border: "1px solid #333",
            borderRadius: "8px",
            padding: "8px 16px",
            color: "white",
            fontSize: "14px",
            width: isMobile ? "100%" : "220px",
            outline: "none",
            order: isMobile ? 2 : 3,
            boxSizing: "border-box",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          paddingTop: isMobile ? "20px" : "100px",
          maxWidth: "1500px",
          margin: "auto",
          gap: isMobile ? "15px" : "30px",
          paddingInline: "20px",
        }}
      >
        <Sidebar activeFilter={filter} onFilter={setFilter} />

        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#C9A84C",
              fontSize: isMobile ? "22px" : "28px",
              margin: "0 0 25px",
            }}
          >
            All Products
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(auto-fit, minmax(160px, 1fr))"
                : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: isMobile ? "15px" : "25px",
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Cart />
      <CartSidebar />
    </div>
  );
}

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};