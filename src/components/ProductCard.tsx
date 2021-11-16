import React from "react";

function ProductCard() {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-2 px-1 min-h-12 border-2">
            <img src="stdin.jpg" alt="product image here" />
            <div className="section px-2 py-2">
                <h2 className="font-bold">product name</h2>
                <p className="font-thin">this is short info text</p>
            </div>
        </div>
    );
}

export default ProductCard;
