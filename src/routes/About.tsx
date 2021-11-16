import React from "react";

function About() {
    return (
        <div className=" px-4 py-2 flex-grow">
            <div className="px-2 flex-col justify-center">
                <h1 className="text-lg font-bold">About</h1>
                <p>
                    These are all fake crystals, made through a procedurally
                    generated pipeline.
                </p>
                <p>
                    It will create a few randomly generated crystals, leave them
                    up for a few days, and then remove them from the store.
                </p>
            </div>
        </div>
    );
}

export default About;
