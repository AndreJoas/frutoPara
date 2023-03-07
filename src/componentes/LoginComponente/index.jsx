import "./styles.css";


function LoginComponente() {
    return (
        <body>
            <header>
                <div className="logo">logo</div>
            </header>
            <section className="login">
                <div className="forme">
                    <h1 className="bem">Bem vindo ao Login</h1>
                    <div className="perfil">
                        <button id="bt"><a href="/loginPage" style={{ textDecoration: "none", color: "#000000" }}>Cliente/PF</a></button>
                        <button id="bt2" ><a href="/lojaLoginPage" style={{ textDecoration: "none", color: "#000000" }}>Loja/PJ</a></button>
                    </div>
                    <div className="campos">
                        <input className="ip" type="name" placeholder="nome"/>
                        <input className="ip" type="senha" placeholder="senha"/>
                    </div>
                    <a href="/HomeCliente"><button className="entrar">Entrar</button></a>
                </div>
            </section>
            <a href="/inicioPage" className="voltar">Voltar</a>
        </body>

    )
};

export default LoginComponente;