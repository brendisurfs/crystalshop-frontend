import React, { lazy, Suspense } from "react";

function ProductCard() {
    const renderLoader = () => <p>Loading</p>;

    return (
        <Suspense fallback={renderLoader}>
            <div className=" sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 py-2 min-h-12 ">
                <img src="fakecrystal.jpg" alt="product image of 3d" />
                <div className="section px-2 py-2  bg-gray-800">
                    <h2 className="font-bold text-white">product name</h2>
                    <p className="font-thin text-white">
                        this is short info text
                    </p>
                    <h3 className="text-indigo-200">
                        this is the price in BGC (BrungusCoin)
                    </h3>
                </div>
            </div>
        </Suspense>
    );
}

export default ProductCard;
