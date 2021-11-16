import React from "react";
import { Link } from "react-router-dom";

// children needs to be a link extension.
function Navbar({ children }: any) {
    return (
        <nav className="row-auto flex justify-between px-2 py-2 items-center flex-grow-1">
            <div className="brand font-extrabold text-4xl">
                <Link to="/">Gordon</Link>
            </div>
            <div className="search-bar">
                <label className="" htmlFor="searchbar"></label>
                <input
                    className="px-2 bg-gray-100 text-gray-400"
                    type="text"
                    name="searchbar"
                    placeholder="search"
                />
            </div>
            <div className="menu-items">
                <ul className="list inline-flex">
                    {children.map((childElement: typeof Link) => (
                        <div className="px-2 py-2 text-lg">{childElement}</div>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
