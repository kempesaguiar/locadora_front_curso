import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Cliente from './pages/Cliente';
import ListaFilmes from './pages/ListaFilmes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/cliente" exact component={Cliente} />
            <Route path="/listafilmes" exact component={ListaFilmes} />
        </BrowserRouter>
    )
}