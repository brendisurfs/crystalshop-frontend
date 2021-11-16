import React from "react";
import { useMoralis } from "react-moralis";

function LoginButton() {
    // check with moralis
    const { authenticate, isAuthenticated, user } = useMoralis();
    if (!isAuthenticated) {
        return (
            <div>
                <button
                    className=" neu-shadow-btn px-2 py-2"
                    onClick={() => authenticate()}
                >
                    Connect
                </button>
            </div>
        );
    }
    return (
        <div>
            <h1>Welcome {user.get("username")}</h1>
        </div>
    );
}

export default LoginButton;
