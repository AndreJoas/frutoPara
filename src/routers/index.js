import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Cadastro } from "../pages/index";

export default function Index() {
    return (
        <Routes>
            <Route index element={<Login />} />
                <Route path="loginPage" element={<Login />} />
                <Route path="cadastroPage" element={<Cadastro />} />

        </Routes>
    );
}