const { Router } = require('express');
const productController = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getSingle);

module.exports = productRouter;
