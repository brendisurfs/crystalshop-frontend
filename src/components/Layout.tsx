import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

// using any for now for children.
function Layout({ children }: any) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar>
                <button
                    onClick={() => console.log("authenticating wallet")}
                    className="btn 2xl"
                >
                    Connect
                </button>
                <Link key="about" to="/about">
                    About
                </Link>
            </Navbar>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
