import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

// children needs to be a link extension.
function Navbar() {
    return (
        <nav className="row-auto flex justify-between px-2 py-4 items-center flex-grow-1">
            <div className="brand font-extrabold text-4xl px-2">
                <Link to="/">Gordon</Link>
            </div>
            <div className="search-bar">
                <input
                    className="px-2 h-8 bg-gray-200 "
                    type="text"
                    name="searchbar"
                    placeholder="search"
                />
            </div>
            <div className="menu-items px-4">
                <ul className="list inline-flex px-4">
                    <div className="px-2">
                        <LoginButton />
                    </div>
                    <Link key="about" to="/about">
                        <div className="px-2 py-2 neu-shadow-btn">About</div>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
