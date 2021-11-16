import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useMoralis } from "react-moralis";

// using any for now for children.
function Layout({ children }: any) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar></Navbar>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
