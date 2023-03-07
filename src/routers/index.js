import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Cadastro , Inicio, Loja,LojaLogin} from "../pages/index";

export default function Index() {
    return (
        <Routes>
            <Route index element={<Inicio />} />
                <Route path="inicioPage" element={<Inicio />} />
                <Route path="loginPage" element={<Login />} />
                <Route path="cadastroPage" element={<Cadastro />} />
                <Route path="lojacadastroPage" element={<Loja />} />
                <Route path="lojaLoginPage" element={<LojaLogin />} />

        </Routes>
    );
}