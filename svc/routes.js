const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');

//PRODUCTS
router.get('/products/findAll', productController.findAllProducts); //busca todos os produtos
router.get('/products/findAll/:cnpj', productController.findAllProductsEspecify); //busca somente um produto pelo cnpj
router.get('/products/getOne/:codigo', productController.getOneProduct); //busca somente um produto pelo codigo
router.get('/products/getCategory/:categoria', productController.getCategory); //busca todos os produtos de uma determinada categoria
router.post('/products/insert', productController.insertProduct); //insere produtos
router.put('/products/update/:codigo', productController.updateProduct); //atualiza um produto pelo código
router.delete('/products/delete/:codigo', productController.deleteProduct); //deleta um produto pelo codigo

//STORE
router.get('/store/findAll', productController.findAllStores);
router.get('/store/getOne/:cnpj', productController.getOneStore);
router.post('/store/insert', productController.insertStore);
router.put('/store/update/:codigo', productController.updateStore);
router.delete('/store/delete/:codigo', productController.deleteStore);

//PERSONS
router.get('/persons/findAll', productController.findAllPersons);
router.get('/persons/findSeller/:cnpj', productController.findSeller);
router.get('/persons/getOne/:email', productController.getOnePerson);
router.post('/persons/insert/:tipo', productController.insertPerson);
router.put('/persons/update/:codigo/:tipo', productController.updatePerson);
router.delete('/persons/delete/:codigo', productController.deletePerson);

//SALES
router.get('/sales/findAll', productController.findAllSales);
router.get('/sales/findAll/:cnpj', productController.findAllSalesEspecify);
router.get('/sales/getOne/:codigo', productController.getOneSale);
router.post('/sales/insert', productController.insertSale);
router.put('/sales/update/:codigo', productController.updateSale);
router.delete('/sales/delete/:codigo', productController.deleteSale);

//EVENT TRAIL
router.post('/trail/insert/:codigo', productController.insertTrail);

module.exports = router;