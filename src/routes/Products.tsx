import React from "react";
import ProductCard from "../components/ProductCard";

function Products() {
    // allows for dynmic page loading with api call.
    const [loading, isLoading] = React.useState(true);
    return (
        <div className="flex flex-grid">
            <div className="filters px-2 bg-black w-full max-w-sm hidden md:visible">
                <ul>
                    <li>option 1</li>
                    <li>option 2</li>
                </ul>
            </div>
            <div className="product-container flex flex-wrap justify-start">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
}

export default Products;
