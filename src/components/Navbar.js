import React from "react";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {

    const { setCartOpen } = useCart();

    return (

        <div
            style={{
                width: "100%",
                backgroundColor: "#0b1120",
                padding: "20px 60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #1e293b"
            }}
        >

            <h1
                style={{
                    color: "#4f83ff",
                    fontSize: "35px"
                }}
            >
                Nexora 🚀
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    alignItems: "center"
                }}
            >

                <Link
                    to="/"
                    style={linkStyle}
                >
                    Home
                </Link>

                <Link
                    to="/products"
                    style={linkStyle}
                >
                    Products
                </Link>

                <button
                    onClick={() => setCartOpen(true)}
                    style={cartButtonStyle}
                >
                    Cart 🛒
                </button>

                <Link
                    to="/login"
                    style={buttonStyle}
                >
                    Login
                </Link>

            </div>

        </div>

    );

};

const linkStyle = {

    color: "white",
    textDecoration: "none",
    fontSize: "18px"

};

const cartButtonStyle = {

    background: "none",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    fontFamily: "inherit",
    padding: 0

};

const buttonStyle = {

    backgroundColor: "#2563eb",
    color: "white",
    padding: "12px 22px",
    borderRadius: "12px",
    textDecoration: "none"

};

export default Navbar;