const productService = require('../services/productService');

module.exports = {
    //PRODUCTS
    findAllProducts: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let products = await productService.findAllProducts();

        for(let i in products){
            json.result.push({
                codigo             : products[i].codigo,
                nome               : products[i].nome,
                categoria          : products[i].categoria,
                quant_disponivel   : products[i].quant_disponivel,
                preco_unidade      : products[i].preco_unidade,
                imagem_produto     : products[i].imagem_produto,
                nome_loja          : products[i].nome_loja,
                cnpj_loja          : products[i].cnpj_loja,
            });
        }

        res.json(json);
    },
    findAllProductsEspecify: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let cnpj = req.params.cnpj;
        let product = await productService.findAllProductsEspecify(cnpj);

        if(product){
            json.result = product;
        }

        res.json(json)
    },
    getCategory: async(req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let categoria = req.params.categoria
        let products = await productService.getCategory(categoria);

        for(let i in products){
            json.result.push({
                codigo             : products[i].codigo,
                nome               : products[i].nome,
                categoria          : products[i].categoria,
                quant_disponivel   : products[i].quant_disponivel,
                preco_unidade      : products[i].preco_unidade,
                imagem_produto     : products[i].imagem_produto,
                nome_loja          : products[i].nome_loja,
                cnpj_loja          : products[i].cnpj_loja
            });
        }

        res.json(json);
    },
    insertProduct: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let nome             = req.body.nome;
        let categoria        = req.body.categoria;
        let quant_disponivel = req.body.quant_disponivel;
        let preco_unidade    = req.body.preco_unidade;
        let imagem_produto   = req.body.imagem_produto;
        let nome_loja        = req.body.nome_loja;
        let cnpj_loja        = req.body.cnpj_loja;

        if(nome && categoria && quant_disponivel && preco_unidade && imagem_produto && nome_loja && cnpj_loja){
            let productID = await productService.insertProduct(nome, categoria, quant_disponivel, preco_unidade, imagem_produto, nome_loja, cnpj_loja);
            json.result = {
                codigo: productID,
                nome,
                categoria,
                quant_disponivel,
                preco_unidade,
                nome_loja,
                cnpj_loja,
                imagem_produto
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    updateProduct: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo           = req.params.codigo;
        let nome             = req.body.nome;
        let categoria        = req.body.categoria;
        let quant_disponivel = req.body.quant_disponivel;
        let preco_unidade    = req.body.preco_unidade;
        let imagem_produto   = req.body.imagem_produto;
        let nome_loja        = req.body.nome_loja;
        let cnpj_loja        = req.body.cnpj_loja;

        if(codigo && nome && categoria && quant_disponivel && preco_unidade && imagem_produto && nome_loja && cnpj_loja){
            await productService.updateProduct(codigo, nome, categoria, quant_disponivel, preco_unidade, imagem_produto, nome_loja, cnpj_loja);
            json.result = {
                codigo,
                nome,
                categoria,
                quant_disponivel,
                preco_unidade,
                nome_loja,
                cnpj_loja,
                imagem_produto
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    deleteProduct: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deleteProduct(req.params.codigo);

        if(req.params.codigo){
            json.result = "O produto de codigo " + req.params.codigo + " foi removido com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
    //=================================

    //STORE
    findAllStores: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };

        let store = await productService.findAllStores();

        for(let i in store){
            json.result.push({
                codigo             : store[i].codigo,
                nome               : store[i].nome,
                cnpj               : store[i].cnpj,
                email               : store[i].email,
                senha               : store[i].senha,
                telefone               : store[i].telefone,
            });
        }

        res.json(json);
    },
    getOneStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let cnpj = req.params.cnpj;
        let store = await productService.getOneStore(cnpj);

        if(store){
            json.result = store;
        }

        res.json(json)
    },
    insertStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let nome  = req.body.nome;
        let cnpj  = req.body.cnpj;
        let senha  = req.body.senha;
        let telefone  = req.body.telefone;
        let email  = req.body.email;

        if(nome && cnpj && senha && telefone && email){
            let storeID = await productService.insertStore(nome, cnpj, senha, telefone, email);
            json.result = {
                codigo: storeID,
                nome,
                cnpj,
                senha,
                telefone,
                email
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    updateStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo           = req.params.codigo;
        let nome             = req.body.nome;
        let telefone             = req.body.telefone;

        if(codigo && nome && telefone){
            await productService.updateStore(codigo, nome, telefone);
            json.result = {
                codigo,
                nome,
                telefone
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    deleteStore: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deleteStore(req.params.codigo);

        if(req.params.codigo){
            json.result = "A loja de codigo " + req.params.codigo + " foi removida com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
    //=================================

    //PERSONS
    findAllPersons: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let persons = await productService.findAllPersons();

        for(let i in persons){
            json.result.push({
                codigo         : persons[i].codigo,
                parent_codigo  : persons[i].parent_codigo,
                nome           : persons[i].nome,
                cpf            : persons[i].cpf,
                usuario        : persons[i].usuario,
                tipo           : persons[i].tipo,
            });
        }

        res.json(json);
    },
    findSeller: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };
        let cnpj = req.params.cnpj
        let persons = await productService.findSeller(cnpj);
        
        for(let i in persons){
            json.result.push({
                codigo         : persons[i].codigo,
                parent_codigo  : persons[i].parent_codigo,
                nome           : persons[i].nome,
                cpf            : persons[i].cpf,
                usuario        : persons[i].usuario,
                tipo           : persons[i].tipo,
            });
        }

        res.json(json);
    },
    getOnePerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let email = req.params.email;
        let person = await productService.getOnePerson(email);

        if(person){
            json.result = person;
        }

        res.json(json)
    },
    insertPerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let typePersons = { //caso tenha um novo tipo, adicionar aqui para validar
            "ADMIN": 1, 
            "VENDEDOR": 2, 
            "CLIENTE": 3
        };
        let typeRequest    = req.params.tipo
        let parent_codigo  = req.body.parent_codigo;
        let nome           = req.body.nome;
        let cpf            = req.body.cpf;
        let email          = req.body.email;
        let endereco       = req.body.endereco;
        let senha          = req.body.senha;
        let telefone       = req.body.telefone;
        let tipo

        tipo = typePersons[typeRequest] != undefined ? typePersons[typeRequest] : "INVALIDO"
        
        if(parent_codigo && nome && cpf && email && endereco && senha && telefone && tipo != "INVALIDO"){
            let personID = await productService.insertPerson(parent_codigo, nome, cpf, email, endereco, senha, telefone, tipo);
            json.result = {
                codigo: personID,
                parent_codigo,
                nome,
                cpf,
                email,
                endereco,
                senha,
                telefone,
                tipo
            };
        }else{
            json.error = 'Está faltando campo no cadastro ou tipo inválido!';
        }

        res.json(json)
    },
    updatePerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };
        let typePersons = { //caso tenha um novo tipo, adicionar aqui para validar
            "ADMIN": 1, 
            "VENDEDOR": 2, 
            "CLIENTE": 3
        };
        let typeRequest    = req.params.tipo
        let codigo         = req.params.codigo;
        let parent_codigo  = req.body.parent_codigo;
        let nome           = req.body.nome;
        let cpf            = req.body.cpf;
        let usuario        = req.body.usuario;
        let tipo

        tipo = typePersons[typeRequest] != undefined ? typePersons[typeRequest] : "INVALIDO"

        if(codigo && parent_codigo && nome && cpf && usuario && tipo != "INVALIDO"){
            await productService.updatePerson(codigo, parent_codigo, nome, cpf, usuario, tipo);
            json.result = {
                codigo,
                parent_codigo,
                nome,
                cpf,
                usuario,
                tipo
            };
        }else{
            json.error = 'Está faltando campo no cadastro ou tipo inválido!'
        }

        res.json(json)
    },
    deletePerson: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deletePerson(req.params.codigo);

        if(req.params.codigo){
            json.result = "A pessoa de codigo " + req.params.codigo + " foi removida com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
    //=================================

    //STORE
    findAllSales: async (req, res) => {
        let json = {
            error:"", 
            result:[]
        };

        let sales = await productService.findAllSales();

        for(let i in sales){
            json.result.push({
                codigo         : sales[i].codigo,
                nome_comprador : sales[i].nome_comprador,
                nome_loja      : sales[i].nome_loja,
                json_venda     : sales[i].json_venda
            });
        }

        res.json(json);
    },
    getOneSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo = req.params.codigo;
        let sale = await productService.getOneSale(codigo);

        if(sale){
            json.result = sale;
        }

        res.json(json)
    },
    insertSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let nome_comprador  = req.body.nome_comprador;
        let nome_loja  = req.body.nome_loja;
        let json_venda  = req.body.json_venda;

        if(nome_comprador && nome_loja && json_venda){
            let saleID = await productService.insertSale(nome_comprador, nome_loja, json_venda);
            json.result = {
                codigo: saleID,
                nome_comprador,
                nome_loja,
                json_venda
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    updateSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        let codigo         = req.params.codigo;
        let nome_comprador = req.body.nome_comprador;
        let nome_loja      = req.body.nome_loja;
        let json_venda     = req.body.json_venda;

        if(codigo && nome_comprador && nome_loja && json_venda){
            await productService.updateSale(codigo, nome_comprador, nome_loja, json_venda);
            json.result = {
                codigo,
                nome_comprador,
                nome_loja,
                json_venda
            };
        }else{
            json.error = 'Está faltando campos no cadastro!'
        }

        res.json(json)
    },
    deleteSale: async(req, res) => {
        let json = {
            error:"", 
            result:{}
        };

        await productService.deleteSale(req.params.codigo);

        if(req.params.codigo){
            json.result = "A venda de codigo " + req.params.codigo + " foi removida com sucesso!"
        }else{
            json.error = "Alguma coisa, em algum lugar está errada!"
        }

        res.json(json)
    },
}