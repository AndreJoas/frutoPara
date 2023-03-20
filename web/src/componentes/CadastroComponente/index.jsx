
import "./styles.css";
<<<<<<< HEAD
// import { TbArrowBarLeft } from "react-icons/tb";
import logo from "../logo_header.png";
=======
import { TbArrowBarLeft } from "react-icons/tb";
import logo from "../logo-header.png";
>>>>>>> 2ea4ef38c932e9302f698fd65a20e103efc53837
import { IMaskInput } from "react-imask";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPessoa } from "../../scripts/person.js";
import { buscaLogin } from "../../scripts/person.js";
import { Base64 } from 'js-base64';

function CadastroComponente() {

    const [numTelefone, newValueTel] = useState("");
    const [nome, newValueNome] = useState("");
    const [numCPF, newValueCPF] = useState("");
    const [email, newValueEmail] = useState("");
    const [endereco, newValueEndereco] = useState("");
    const [senha, newValueSenha] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    let msg = "";

    let camposCadastro = {
        "Parent_codigo": 1,
        "Nome": nome,
        "CPF": numCPF.replace(/[^a-zA-Z0-9 ]/g, ''),
        "Email": email,
        "Endereco": endereco,
        "Senha": senha,
        "Telefone": numTelefone
    }

    let envioDadosBD = {
        "parent_codigo": 1,
        "nome": nome,
        "cpf": numCPF.replace(/[^a-zA-Z0-9 ]/g, ''),
        "email": email,
        "endereco": endereco,
        "senha": Base64.encode(senha),
        "telefone": numTelefone
    }

    const viewPassword = () => {
        setShowPass(!showPass);
    }

    const validateCadastro = () => {
        buscaLogin(email).then((data) => {
            const jsonRequest = data['result'];

            for (let i in Object.keys(camposCadastro)) {
                let keyCampo = Object.keys(camposCadastro)[i];
                let valueCampo = camposCadastro[keyCampo];

                if (!valueCampo) {
                    msg += `Campo '${keyCampo}' é obrigatório.\n`;

                } else if (keyCampo == 'CPF') {
                    if (valueCampo.replace(/[^a-zA-Z0-9 ]/g, '').length < 11) {
                        msg += "Campo 'CPF' deve ter 11 digitos.\n"
                    }

                } else if (keyCampo == 'Telefone') {
                    if (valueCampo.replace(/[^a-zA-Z0-9 ]/g, '').length < 11) {
                        msg += "Campo 'Telefone' deve ter 11 digitos.\n"
                    }
                }
            }

            if (jsonRequest['email']) {
                if (jsonRequest['email'] == email) {
                    msg += "Este e-mail já possui um cadastro, favor inserir outro e-mail.\n"
                }
            }else if(email){
                if (email.indexOf("@") == -1) {
                    msg += "É obrigatório que o e-mail tenha um dominio. \n";
                }
            }
            //verifica se contem pelo menos 1 letra maiuscula e 1 número
            var regex = /^(?=.*[A-Z])(?=.*\d).+$/;

            if (!regex.test(senha) || senha.length < 4) {
                msg += "A senha não atende os pré-requisitos.\n";
            }

            if (!msg) {
                addPessoa(envioDadosBD);
                navigate("/loginPage");
            } else {
                alert(msg);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }


    return (
        <body>
<<<<<<< HEAD
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
=======
            <header className="headerCadastro">
                <div className="logoHeaderCadastro">
                    <img src={logo} alt="" />
>>>>>>> 2ea4ef38c932e9302f698fd65a20e103efc53837
                </div>
            </header>
            <section className="loginCliente">
                <div className="forme">
                    <h1 className="bem">Olá, cliente! Bem-vindo ao cadastro</h1>
                    <div className="campos">
                        <label className="labelCampoCliente">Nome</label>
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={e => newValueNome(e.target.value)}
                            onKeyPress={(e) => !/[A-Za-z ]/.test(e.key) && e.preventDefault()}
                        />
                        <label className="labelCampoCliente">CPF</label>
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="Ex: XXX.XXX.XXX-XX"
                            mask="000.000.000-00"
                            value={numCPF}
                            onChange={e => newValueCPF(e.target.value)}
                            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                        />
                        <label className="labelCampoCliente">Email</label>
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="Ex: cliente@dominio.com"
                            value={email}
                            onChange={e => newValueEmail(e.target.value)}
                        />
                        <label className="labelCampoCliente">Telefone</label>
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="Ex: (XX)XXXXX-XXXX"
                            mask="(00)00000-0000"
                            value={numTelefone}
                            onChange={e => newValueTel(e.target.value)}
                            onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                        />
                        <label className="labelCampoCliente">Endereço</label>
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="Ex: Rua, Bairro, Cidade, Num"
                            value={endereco}
                            onChange={e => newValueEndereco(e.target.value)}
                        />
                        <label className="labelCampoCliente">Senha</label>
                        <IMaskInput
                            className="ip"
                            type={showPass ? "text" : "password"}
                            placeholder="Senha"
                            value={senha}
                            onChange={e => newValueSenha(e.target.value)}
                        />
                        <label className="infoSenha">A senha deve conter no minimo 4 caracteres, com pelo menos 1 letra maiúscula e 1 número.</label>
                        <label className="labelCampoCliente">
                            <IMaskInput
                                type="checkbox"
                                onClick={viewPassword}
                            />
                            {showPass ? "Esconder senha" : "Mostrar senha"}
                        </label>
                    </div>
                    <a><button className="entrar" onClick={validateCadastro}>Cadastrar</button></a>
                    <a><button onClick={e => navigate("/inicioPage")} className="voltar">Voltar</button></a>
                </div>
            </section>
        </body>

    )
};

export default CadastroComponente;