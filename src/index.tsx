import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";
import Products from "./routes/Products";
import About from "./routes/About";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
    <React.StrictMode>
        {/* <MoralisProvider appId="xxxxx" serverUrl="xxxxx"> */}
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </Layout>
        </BrowserRouter>
        {/* </MoralisProvider> */}
    </React.StrictMode>,
    document.getElementById("root")
);
