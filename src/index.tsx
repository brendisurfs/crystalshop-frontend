import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Products from "./routes/Products";
import About from "./routes/About";
import { MoralisProvider } from "react-moralis";
require("dotenv").config();

const serverURL = process.env.SERVER_URL;
const appID = process.env.APP_URL;

ReactDOM.render(
    <React.StrictMode>
        <MoralisProvider appId={`${appID}`} serverUrl={`${serverURL}`}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="about" element={<About />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </MoralisProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
