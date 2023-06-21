import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" exact component={Home} />
        </BrowserRouter>
    )
}