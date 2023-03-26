
import "./styles.css";
import { TbArrowBarLeft } from "react-icons/tb";
import logo from "../logo-header.png";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLoja } from "../../scripts/store.js";
import { buscaLoja } from "../../scripts/store.js";
import { Base64 } from 'js-base64';

function Loja() {

    const [numTelefone, newValueTel] = useState("");
    const [nome, newValueNome] = useState("");
    const [numCNPJ, newValueCNPJ] = useState("");
    const [email, newValueEmail] = useState("");
    const [senha, newValueSenha] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    let msg = "";
    
    let camposCadastro = {
        "Parent_codigo": 1,
        "Nome": nome,
        "CNPJ": numCNPJ.replace(/[^a-zA-Z0-9 ]/g, ''),
        "Email": email,
        "Senha": senha,
        "Telefone": numTelefone
    }

    let envioDadosBD = {
        "parent_codigo": 1,
        "nome": nome,
        "cnpj": numCNPJ.replace(/[^a-zA-Z0-9 ]/g, ''),
        "email": email,
        "senha": Base64.encode(senha),
        "telefone": numTelefone
    }

    const viewPassword = () => {
        setShowPass(!showPass);
    }

    const validateCadastro = () => {
        buscaLoja(numCNPJ.replace(/[^a-zA-Z0-9 ]/g, '')).then((data) => {
            const jsonRequest = data['result'];
            
            for (let i in Object.keys(camposCadastro)) {
                let keyCampo = Object.keys(camposCadastro)[i];
                let valueCampo = camposCadastro[keyCampo];
                
                if (!valueCampo) {
                    msg += `Campo '${keyCampo}' é obrigatório.\n`;
                    
                } else if (keyCampo == 'CNPJ') {
                    if (valueCampo.replace(/[^a-zA-Z0-9 ]/g, '').length < 14) {
                        msg += "Campo 'CNPJ' deve ter 14 digitos.\n"
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
            }
            
            if(email){
                if (email.indexOf("@") == -1) {
                    msg += "É obrigatório que o e-mail tenha um dominio. \n";
                }
            }
            
            if(jsonRequest['cnpj']){
                if(jsonRequest['cnpj'] == numCNPJ.replace(/[^a-zA-Z0-9 ]/g, '')){
                    msg += "Já possui um cadastro com este CNPJ. \n";
                }
            }
            //verifica se contem pelo menos 1 letra maiuscula e 1 número
            var regex = /^(?=.*[A-Z])(?=.*\d).+$/;

            if (!regex.test(senha) || senha.length < 4) {
                msg += "A senha não atende os pré-requisitos.\n";
            }

            if (!msg) {
                addLoja(envioDadosBD);
                //navigate("/loginPage");
            } else {
                alert(msg);
                msg = "";
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }


    return (
        <body>
            <header className="headerCadastro">
                <div className="logoHeaderCadastro">
                    <img src={logo} alt="" />
                </div>
            </header>
            <section className="loginCliente">
                <div className="forme">
                    <h1 className="bem">Olá, vendedor! Bem-vindo ao cadastro</h1>
                    <div className="campos">
                        <label className="labelCampoCliente">Nome da Loja</label>
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={e => newValueNome(e.target.value)}
                            onKeyPress={(e) => !/[A-Za-z ]/.test(e.key) && e.preventDefault()}
                        />
                        <label className="labelCampoCliente">CNPJ</label>
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="Ex: XX.XXX.XXX/XXXX-XX"
                            mask="00.000.000/0000-00"
                            value={numCNPJ}
                            onChange={e => newValueCNPJ(e.target.value)}
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

export default Loja;