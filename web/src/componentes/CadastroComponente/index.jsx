
import "./styles.css";
// import { TbArrowBarLeft } from "react-icons/tb";
import logo from "../logo_header.png";
import { IMaskInput } from "react-imask";
import { useState } from "react";

function CadastroComponente() {
    const [telDefault, newValueTel] = useState("")
    console.warn(telDefault)

    return (
        <body>
        <header className="headerCadastro">
            <div className="logoHeaderCadastro">
                <img src={logo} alt="NAO ENCONTROU" />
            </div>
        </header>
        <section className="loginCliente">
            <div className="forme">
                <h1 className="bem">Olá, cliente! Bem-vindo ao cadastro</h1>
                <div className="campos">
                    <label className="labelCampoCliente">Nome</label>
                        <IMaskInput className="ip" type="text" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}/>
                    <label className="labelCampoCliente">Email</label>
                        <IMaskInput className="ip" type="text" placeholder="Ex: cliente@dominio.com"/>
                    <label className="labelCampoCliente">Telefone</label>
                        <IMaskInput className="ip" type="text"  placeholder="Ex: (XX)XXXXX-XXXX" mask="(00)00000-0000" value={telDefault} onChange={e => newValueTel(e.target.value)} onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}/>
                    <label className="labelCampoCliente">Endereço</label>
                        <IMaskInput className="ip" type="text" placeholder="Ex: Rua, Bairro, Cidade, Num"/>
                    <label className="labelCampoCliente">Senha</label>
                        <IMaskInput className="ip" type="password" placeholder="Senha"/>
                </div>
                <a href="/loginPage"><button className="entrar">Entrar</button></a>
            </div>
        </section>
        <a href="/inicioPage" className="voltar">Voltar</a>
    </body>
        
    )
};

export default CadastroComponente;