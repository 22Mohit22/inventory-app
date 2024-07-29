const db = require('../db/queries');

async function getAllCategories(req, res) {
    const categories = await db.getCategories();
    res.render('categories', {title: 'categories', allCategories : categories});
}

async function getSingleCategory(req, res) {
    const { name } = req.params; 
    const productsList = await db.getAllProductsOfSingleCategory(name);
    res.render('allProducts', {title: name, allProducts: productsList });
}

module.exports = {
    getAllCategories,
    getSingleCategory,
}