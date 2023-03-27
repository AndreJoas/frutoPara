import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Cadastro , Inicio, InicioCliente, InicioVendedor, Loja,LojaLogin, HomeCliente, HomeLoja, Produto} from "../pages/index";

export default function Index() {
    return (
        <Routes>
                <Route index element={<Inicio />} />
                <Route path="inicioPageCliente" element={<InicioCliente />} />
                <Route path="inicioPageVendedor" element={<InicioVendedor/>} />
                <Route path="loginPage" element={<Login />} />
                <Route path="cadastroPage" element={<Cadastro />} />
                <Route path="lojaCadastroPage" element={<Loja />} />
                <Route path="lojaLoginPage" element={<LojaLogin />} />
                <Route path="cadastroProduto" element={<Produto />} />

                <Route path="HomeCliente" element={<HomeCliente />} />
                <Route path="HomeLoja" element={<HomeLoja />} />

        </Routes>
    );
}