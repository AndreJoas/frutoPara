import "./styles.css"


function Loja(){
    return(
        <body>
        <header>
            <div className="logo">logo</div>
        </header>
        <section className="login" style={{marginTop:"-0.1rem"}}>
            <div className="forme" style={{ width:"100%", height:"29rem"}}>
                <h1 className="bem">Bem vindo ao Cadastro</h1>
                <div className="perfil">
                    <button id="bt22"><a href="/cadastroPage" style={{textDecoration:"none", color:"#000000"}}>Cliente/PF</a></button>
                    <button id="bt33" ><a href="/lojacadastroPage" style={{textDecoration:"none", color:"#000000"}}>Loja/PJ</a></button>
                </div>
                <div className="campos">
                    <input className="ip" type="name"  placeholder="nome"/>
                    <input className="ip" type="senha" placeholder="Cnpj"/>
                    <input className="ip" type="name"  placeholder="Telefone"/>
                    <input className="ip" type="senha" placeholder="Endereço"/>
                    <input className="ip" type="senha" placeholder="Senha"/>
                </div>
                <a href="/lojaLoginPage"><button className="entrar">Entrar</button></a>
            </div>
        </section>
        <a href="/inicioPage" className="voltar">Voltar</a>
    </body>
    )
}

export default Loja;