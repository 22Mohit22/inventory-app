const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.getAllCategories);
categoriesRouter.get('/:name', categoriesController.getSingleCategory);

module.exports = categoriesRouter;
