import React, { useState, useEffect } from "react";
import { CATEGORIES } from "../data/data";

export default function Sidebar({ activeFilter, onFilter }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: isMobile ? "100%" : "240px", color: "white" }}>
      <h3 style={{ color: "#facc15", marginTop: 0 }}>Shop by Category</h3>
      <div
        style={{
          display: isMobile ? "flex" : "block",
          flexWrap: isMobile ? "wrap" : "nowrap",
          gap: isMobile ? "10px" : "0",
        }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onFilter(cat.key)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              marginTop: isMobile ? "0" : "10px",
              background: activeFilter === cat.key ? "#facc15" : "#111",
              color: activeFilter === cat.key ? "black" : "white",
              border: "1px solid #333",
              borderRadius: "6px",
              padding: "11px 12px",
              width: isMobile ? "auto" : "100%",
              flex: isMobile ? "1 1 45%" : "none",
              cursor: "pointer",
              fontWeight: activeFilter === cat.key ? "bold" : "normal",
            }}
          >
            <span>{cat.icon} {cat.label}</span>
            <span style={{ opacity: 0.8 }}>{cat.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}