import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// using any for now for children.
function Layout({ children }: any) {
    return (
        <>
            <Navbar>
                <Link to="/products">products</Link>
                <Link to="/about">about</Link>
            </Navbar>
            {children}
        </>
    );
}

export default Layout;
