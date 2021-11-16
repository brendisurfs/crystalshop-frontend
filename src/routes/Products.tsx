import React from "react";
import ProductCard from "../components/ProductCard";
import SideFilters from "../components/SideFilters";

function Products() {
    // allows for dynmic page loading with api call.
    const [loading, isLoading] = React.useState(true);
    const [isMobile, setIsMobile] = React.useState(false);
    const handleResize = () => {
        if (window.innerWidth <= 960) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    window.addEventListener("resize", handleResize);
    return (
        <>
            <div className="flex flex-grid flex-grow">
                {isMobile ? <div></div> : <SideFilters />}
                <div className="product-container flex flex-wrap justify-start">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </>
    );
}

export default Products;
